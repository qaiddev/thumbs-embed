/**
 * Video-recording subsystem — extracted from embed.ts so it lives in its own
 * lazily-loaded chunk. A thumbs-only visitor never downloads any of this; the
 * embed dynamically imports it the first time the record button is used (and
 * warms it on hover — see embed.ts prewarmVideo).
 *
 * The controller owns all recording state and UI (recorder, redaction picker,
 * indicator, preview, submit). It talks back to the embed through the narrow
 * `RecordingHost` interface, so embed internals stay private and the coupling
 * is explicit.
 */

import { h } from "./dom";
import { isEmbedElement } from "./dom-utils";
import { captureNetworkErrors, type NetworkCapture } from "./network-capture";
import type { VideoRecorder } from "./video-capture";
import type { ResolvedFeedbackConfig, EmbedState } from "./types";
import type { ConsoleCapture } from "./console-capture";

/** The slice of the embed the recording subsystem needs. */
export interface RecordingHost {
  readonly config: ResolvedFeedbackConfig;
  readonly visitorId: string;
  readonly uid: string;
  readonly overlayShadowHost: HTMLDivElement | null;
  readonly consoleCapture: ConsoleCapture | null;
  readonly boundKeyDown: (e: KeyboardEvent) => void;
  readonly state: EmbedState;
  setState(state: EmbedState): void;
  ensureOverlayHost(): ShadowRoot;
  applyVars(el: HTMLElement): void;
  announceMsg(message: string, assertive?: boolean): void;
  openDialogA11y(
    container: HTMLElement,
    opts: { labelledbyId?: string; describedbyId?: string; label?: string }
  ): void;
  closeDialogA11y(): void;
  setButtonsDisabled(disabled: boolean): void;
  tryLaunchQuest(
    type: "up" | "down" | "video",
    feedbackId: number | string | null
  ): Promise<boolean>;
}

export class RecordingController {
  private videoRecorder: VideoRecorder | null = null;
  private networkCapture: NetworkCapture | null = null;
  private recordedBlob: Blob | null = null;
  private recordingIndicator: HTMLDivElement | null = null;
  private videoPreview: HTMLDivElement | null = null;
  private isRecording = false;
  private isSendingVideo = false;

  // Pre-recording redaction picking.
  private redactPicks: Element[] = [];
  private redactPickerRoot: HTMLDivElement | null = null;
  private redactRafId = 0;
  private boundRedactClick = (e: MouseEvent): void => this.handleRedactPickClick(e);

  constructor(private host: RecordingHost) {}

  /** Escape-key handler; returns true when it consumed the key. */
  handleEscape(): boolean {
    if (this.isRecording) {
      void this.stopRecording();
      return true;
    }
    if (this.videoPreview) {
      this.cancelRecordingPreview();
      return true;
    }
    if (this.redactPickerRoot) {
      this.finishRedactionPicking(false);
      return true;
    }
    return false;
  }

  destroy(): void {
    if (this.redactRafId) cancelAnimationFrame(this.redactRafId);
    this.redactRafId = 0;
    document.removeEventListener("click", this.boundRedactClick, true);
    if (this.redactPickerRoot) {
      this.redactPickerRoot.remove();
      this.redactPickerRoot = null;
    }
    this.redactPicks = [];
    this.cleanupRecording();
    this.removeVideoPreview();
  }

  async startRecording(redactionElements: Element[] = []): Promise<void> {
    // Don't start if already recording or in a targeting/modal flow.
    if (this.isRecording || this.host.state !== "IDLE") return;

    try {
      this.networkCapture = captureNetworkErrors();

      const { createVideoRecorder } = await import("./video-capture");
      this.videoRecorder = createVideoRecorder({
        maxDuration: this.host.config.videoOptions.maxDuration,
        redactionElements,
      });

      this.videoRecorder.onTick((elapsed) => {
        this.updateRecordingTimer(elapsed);
      });

      // Handle unexpected stops (browser stop button, max duration).
      this.videoRecorder.onStop((blob) => {
        if (this.isRecording) {
          this.recordedBlob = blob;
          this.isRecording = false;
          this.host.announceMsg("Recording stopped");
          this.removeRecordingIndicator();
          document.removeEventListener("keydown", this.host.boundKeyDown);
          this.host.setButtonsDisabled(false);

          if (blob && blob.size > 0) {
            this.showRecordingPreview();
          } else {
            this.cleanupRecording();
          }
        }
      });

      await this.videoRecorder.start();
      this.isRecording = true;
      this.host.announceMsg("Recording started");
      this.host.setButtonsDisabled(true);
      this.showRecordingIndicator();
      document.addEventListener("keydown", this.host.boundKeyDown);
    } catch (error) {
      // User denied screen share, shared a disallowed surface (window / whole
      // screen), or another error occurred. Surface the tab-only message so a
      // rejected non-tab share isn't a silent no-op.
      if (error instanceof Error && /current tab/i.test(error.message)) {
        this.host.announceMsg(error.message);
      }
      this.cleanupRecording();
    }
  }

  private async stopRecording(): Promise<void> {
    try {
      this.recordedBlob = await this.videoRecorder!.stop();
    } catch {
      this.recordedBlob = null;
    }

    this.isRecording = false;
    this.host.announceMsg("Recording stopped");
    this.removeRecordingIndicator();
    document.removeEventListener("keydown", this.host.boundKeyDown);

    if (this.recordedBlob && this.recordedBlob.size > 0) {
      this.showRecordingPreview();
    } else {
      this.cleanupRecording();
    }
  }

  /**
   * Pre-recording redaction picker. The user clicks page areas to blur; each
   * gets an outline that tracks its position, then "Start recording" hands the
   * picks to the recorder, which blurs their live bounding boxes so the
   * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
   */
  startPicking(): void {
    if (this.isRecording || this.host.state !== "IDLE") return;
    this.host.setState("REDACT_PICKING");
    this.redactPicks = [];

    const root = this.host.ensureOverlayHost();

    // Layer holding the per-pick outlines (repositioned every frame).
    const boxHost = h("div", { style: "position:absolute;inset:0;" });

    const container = h(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      boxHost,
      // Control bar — the only pointer-interactive part of the overlay.
      h(
        "div",
        {
          style:
            "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);" +
            "display:flex;gap:12px;align-items:center;pointer-events:auto;" +
            "background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;" +
            "padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);",
        },
        h("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" },
        }),
        h("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style:
            "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(true) },
        }),
        h("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(false) },
        }),
      ),
    );

    root.appendChild(container);
    this.redactPickerRoot = container;

    // Keep the outlines glued to their elements while the user scrolls/picks.
    const tick = (): void => {
      this.renderRedactPicks(boxHost);
      this.redactRafId = requestAnimationFrame(tick);
    };
    tick();

    document.addEventListener("click", this.boundRedactClick, true);
    document.addEventListener("keydown", this.host.boundKeyDown);
    this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }

  private handleRedactPickClick(e: MouseEvent): void {
    const target = e.target instanceof Element ? e.target : null;
    // Ignore clicks on the embed's own UI. isEmbedElement catches the retargeted
    // shadow host (real browsers compose click events to it); the contains()
    // check catches the picker's own control-bar buttons when the event isn't
    // retargeted, so their handlers still fire instead of being swallowed here.
    if (!target || isEmbedElement(target) || this.redactPickerRoot?.contains(target)) return;
    e.preventDefault();
    e.stopPropagation();

    const idx = this.redactPicks.indexOf(target);
    if (idx >= 0) {
      this.redactPicks.splice(idx, 1);
    } else {
      this.redactPicks.push(target);
    }

    const label = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (label) {
      const n = this.redactPicks.length;
      label.textContent =
        n === 0 ? "Click sensitive areas to blur" : `${n} area${n === 1 ? "" : "s"} will be blurred`;
    }
  }

  private renderRedactPicks(layer: HTMLElement): void {
    // Rebuild the outline boxes to match current picks and their live positions.
    layer.textContent = "";
    for (const el of this.redactPicks) {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) continue;
      layer.appendChild(
        h("div", {
          style:
            `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;` +
            "border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;",
        }),
      );
    }
  }

  private finishRedactionPicking(record: boolean): void {
    if (this.redactRafId) cancelAnimationFrame(this.redactRafId);
    this.redactRafId = 0;
    document.removeEventListener("click", this.boundRedactClick, true);
    document.removeEventListener("keydown", this.host.boundKeyDown);
    if (this.redactPickerRoot) {
      this.redactPickerRoot.remove();
      this.redactPickerRoot = null;
    }
    const picks = this.redactPicks;
    this.redactPicks = [];
    this.host.setState("IDLE");
    if (record) {
      void this.startRecording(picks);
    }
  }

  private showRecordingIndicator(): void {
    const root = this.host.ensureOverlayHost();

    this.recordingIndicator = h(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      h("div", { class: "qaid-recording-dot" }),
      h("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration),
      }),
      h("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() },
      }),
    );

    this.host.applyVars(this.recordingIndicator);

    // Enable pointer events on the overlay host for the recording indicator.
    if (this.host.overlayShadowHost) {
      this.host.overlayShadowHost.style.pointerEvents = "auto";
    }

    root.appendChild(this.recordingIndicator);
  }

  private updateRecordingTimer(elapsed: number): void {
    if (!this.recordingIndicator) return;
    const timer = this.recordingIndicator.querySelector<HTMLSpanElement>(".qaid-recording-time");
    if (timer) {
      const remaining = Math.max(0, this.host.config.videoOptions.maxDuration - elapsed);
      timer.textContent = this.formatTime(remaining);
      // Announce the final countdown so it is perceivable non-visually.
      if (remaining > 0 && remaining <= 5) {
        this.host.announceMsg(`${remaining} second${remaining === 1 ? "" : "s"} remaining`);
      }
    }
  }

  private formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  private removeRecordingIndicator(): void {
    if (this.recordingIndicator) {
      this.recordingIndicator.remove();
      this.recordingIndicator = null;
    }
  }

  private showRecordingPreview(): void {
    const root = this.host.ensureOverlayHost();

    const videoUrl = URL.createObjectURL(this.recordedBlob!);
    const titleId = `qaid-video-title-${this.host.uid}`;

    const title = h("h3", { text: "Review your recording", attrs: { id: titleId } });

    // Boolean media props must be set as properties (the `muted` attribute is
    // unreliable for autoplay), so build the element then assign them.
    const videoEl = h("video");
    videoEl.src = videoUrl;
    videoEl.controls = true;
    videoEl.autoplay = true;
    videoEl.muted = true;

    const textarea = h("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded",
      },
    });

    const sendBtn = h("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(textarea.value.trim() || null, sendBtn) },
    });

    const box = h(
      "div",
      { class: "qaid-video-preview-box" },
      title,
      videoEl,
      textarea,
      h(
        "div",
        { class: "qaid-video-preview-actions" },
        h("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() },
        }),
        h("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview();
              this.startRecording();
            },
          },
        }),
        sendBtn,
      ),
    );

    this.videoPreview = h(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      box,
    );

    this.host.applyVars(this.videoPreview);

    // Enable pointer events on the overlay host for the video preview.
    if (this.host.overlayShadowHost) {
      this.host.overlayShadowHost.style.pointerEvents = "auto";
    }

    root.appendChild(this.videoPreview);

    // Dialog semantics + focus trap + background inert.
    this.host.openDialogA11y(box, { labelledbyId: title.id });

    // Listen for the escape key.
    document.addEventListener("keydown", this.host.boundKeyDown);
  }

  private cancelRecordingPreview(): void {
    this.removeVideoPreview();
    this.cleanupRecording();
  }

  private removeVideoPreview(): void {
    // Release focus trap / inert and restore focus before removing the DOM.
    this.host.closeDialogA11y();
    if (this.videoPreview) {
      const videoEl = this.videoPreview.querySelector<HTMLVideoElement>("video");
      if (videoEl?.src) {
        URL.revokeObjectURL(videoEl.src);
      }
      this.videoPreview.remove();
      this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }

  private async submitVideoFeedback(message: string | null, sendBtn: HTMLButtonElement): Promise<void> {
    if (!this.recordedBlob || this.isSendingVideo) return;

    this.isSendingVideo = true;
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    const formData = new FormData();
    formData.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`);
    formData.append("pageUrl", window.location.href);
    formData.append("visitorId", this.host.visitorId);

    if (this.host.config.apiKey) {
      formData.append("apiKey", this.host.config.apiKey);
    }
    if (message) {
      formData.append("message", message);
    }
    if (this.host.consoleCapture) {
      formData.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors));
    }
    if (this.networkCapture) {
      formData.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    }

    let videoFeedbackId: string | number | null = null;
    try {
      const response = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        this.host.announceMsg("Recording sent");
        try {
          const data = (await response.json()) as { id?: string | number };
          videoFeedbackId = data?.id ?? null;
        } catch {
          // Non-JSON / no id — the quest can still launch, just unlinked.
        }
      } else {
        console.error("Failed to submit video feedback:", await response.text());
        this.host.announceMsg("Failed to send recording", true);
      }
    } catch (error) {
      console.error("Failed to submit video feedback:", error);
      this.host.announceMsg("Failed to send recording", true);
    }

    this.isSendingVideo = false;
    this.removeVideoPreview();
    this.cleanupRecording();

    // Once the recording is safely sent, launch the linked quest (if any),
    // passing the new feedback record id so its response is joinable.
    await this.host.tryLaunchQuest("video", videoFeedbackId);
  }

  private cleanupRecording(): void {
    this.isRecording = false;
    this.removeRecordingIndicator();

    if (this.videoRecorder) {
      this.videoRecorder.destroy();
      this.videoRecorder = null;
    }
    if (this.networkCapture) {
      this.networkCapture.restore();
      this.networkCapture = null;
    }
    if (this.recordedBlob) {
      this.recordedBlob = null;
    }

    this.host.setButtonsDisabled(false);

    // Reset overlay host pointer events if nothing else needs them.
    if (this.host.overlayShadowHost && this.host.state === "IDLE") {
      this.host.overlayShadowHost.style.pointerEvents = "none";
    }
  }
}
