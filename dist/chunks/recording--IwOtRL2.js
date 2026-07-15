import { b as h } from "./annotate-BNibaDg3.js";
import { c as l } from "./network-capture-DMbMwwwR.js";
const u = document;
function s(d, t, ...i) {
  const e = u.createElement(d);
  if (t) {
    if (t.class && (e.className = t.class), t.style && (e.style.cssText = t.style), t.html != null && (e.innerHTML = t.html), t.text != null && (e.textContent = t.text), t.attrs)
      for (const o in t.attrs) e.setAttribute(o, t.attrs[o]);
    if (t.on)
      for (const o in t.on) e.addEventListener(o, t.on[o]);
  }
  for (const o of i)
    o != null && o !== !1 && e.append(o);
  return e;
}
class g {
  constructor(t) {
    this.host = t;
  }
  videoRecorder = null;
  networkCapture = null;
  recordedBlob = null;
  recordingIndicator = null;
  videoPreview = null;
  isRecording = !1;
  isSendingVideo = !1;
  // Pre-recording redaction picking.
  redactPicks = [];
  redactPickerRoot = null;
  redactRafId = 0;
  boundRedactClick = (t) => this.handleRedactPickClick(t);
  /** Escape-key handler; returns true when it consumed the key. */
  handleEscape() {
    return this.isRecording ? (this.stopRecording(), !0) : this.videoPreview ? (this.cancelRecordingPreview(), !0) : this.redactPickerRoot ? (this.finishRedactionPicking(!1), !0) : !1;
  }
  destroy() {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null), this.redactPicks = [], this.cleanupRecording(), this.removeVideoPreview();
  }
  async startRecording(t = []) {
    if (!(this.isRecording || this.host.state !== "IDLE"))
      try {
        this.networkCapture = l();
        const { createVideoRecorder: i } = await import("./video-BOYqf2Im.js");
        this.videoRecorder = i({
          maxDuration: this.host.config.videoOptions.maxDuration,
          redactionElements: t
        }), this.videoRecorder.onTick((e) => {
          this.updateRecordingTimer(e);
        }), this.videoRecorder.onStop((e) => {
          this.isRecording && (this.recordedBlob = e, this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.host.setButtonsDisabled(!1), e && e.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.host.announceMsg("Recording started"), this.host.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.host.boundKeyDown);
      } catch (i) {
        i instanceof Error && /current tab/i.test(i.message) && this.host.announceMsg(i.message), this.cleanupRecording();
      }
  }
  async stopRecording() {
    try {
      this.recordedBlob = await this.videoRecorder.stop();
    } catch {
      this.recordedBlob = null;
    }
    this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
  }
  /**
   * Pre-recording redaction picker. The user clicks page areas to blur; each
   * gets an outline that tracks its position, then "Start recording" hands the
   * picks to the recorder, which blurs their live bounding boxes so the
   * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
   */
  startPicking() {
    if (this.isRecording || this.host.state !== "IDLE") return;
    this.host.setState("REDACT_PICKING"), this.redactPicks = [];
    const t = this.host.ensureOverlayHost(), i = s("div", { style: "position:absolute;inset:0;" }), e = s(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      i,
      // Control bar — the only pointer-interactive part of the overlay.
      s(
        "div",
        {
          style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;pointer-events:auto;background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);"
        },
        s("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" }
        }),
        s("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!0) }
        }),
        s("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!1) }
        })
      )
    );
    t.appendChild(e), this.redactPickerRoot = e;
    const o = () => {
      this.renderRedactPicks(i), this.redactRafId = requestAnimationFrame(o);
    };
    o(), document.addEventListener("click", this.boundRedactClick, !0), document.addEventListener("keydown", this.host.boundKeyDown), this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }
  handleRedactPickClick(t) {
    const i = t.target instanceof Element ? t.target : null;
    if (!i || h(i) || this.redactPickerRoot?.contains(i)) return;
    t.preventDefault(), t.stopPropagation();
    const e = this.redactPicks.indexOf(i);
    e >= 0 ? this.redactPicks.splice(e, 1) : this.redactPicks.push(i);
    const o = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (o) {
      const r = this.redactPicks.length;
      o.textContent = r === 0 ? "Click sensitive areas to blur" : `${r} area${r === 1 ? "" : "s"} will be blurred`;
    }
  }
  renderRedactPicks(t) {
    t.textContent = "";
    for (const i of this.redactPicks) {
      const e = i.getBoundingClientRect();
      e.width <= 0 || e.height <= 0 || t.appendChild(
        s("div", {
          style: `position:fixed;left:${e.left}px;top:${e.top}px;width:${e.width}px;height:${e.height}px;border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;`
        })
      );
    }
  }
  finishRedactionPicking(t) {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), document.removeEventListener("keydown", this.host.boundKeyDown), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null);
    const i = this.redactPicks;
    this.redactPicks = [], this.host.setState("IDLE"), t && this.startRecording(i);
  }
  showRecordingIndicator() {
    const t = this.host.ensureOverlayHost();
    this.recordingIndicator = s(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      s("div", { class: "qaid-recording-dot" }),
      s("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration)
      }),
      s("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() }
      })
    ), this.host.applyVars(this.recordingIndicator), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const i = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (i) {
      const e = Math.max(0, this.host.config.videoOptions.maxDuration - t);
      i.textContent = this.formatTime(e), e > 0 && e <= 5 && this.host.announceMsg(`${e} second${e === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(t) {
    const i = Math.floor(t / 60), e = t % 60;
    return `${i}:${e.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const t = this.host.ensureOverlayHost(), i = URL.createObjectURL(this.recordedBlob), e = `qaid-video-title-${this.host.uid}`, o = s("h3", { text: "Review your recording", attrs: { id: e } }), r = s("video");
    r.src = i, r.controls = !0, r.autoplay = !0, r.muted = !0;
    const n = s("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded"
      }
    }), c = s("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(n.value.trim() || null, c) }
    }), a = s(
      "div",
      { class: "qaid-video-preview-box" },
      o,
      r,
      n,
      s(
        "div",
        { class: "qaid-video-preview-actions" },
        s("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() }
        }),
        s("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview(), this.startRecording();
            }
          }
        }),
        c
      )
    );
    this.videoPreview = s(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      a
    ), this.host.applyVars(this.videoPreview), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), this.host.openDialogA11y(a, { labelledbyId: o.id }), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.host.closeDialogA11y(), this.videoPreview) {
      const t = this.videoPreview.querySelector("video");
      t?.src && URL.revokeObjectURL(t.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  async submitVideoFeedback(t, i) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, i.disabled = !0, i.textContent = "Sending...";
    const e = new FormData();
    e.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), e.append("pageUrl", window.location.href), e.append("visitorId", this.host.visitorId), this.host.config.apiKey && e.append("apiKey", this.host.config.apiKey), t && e.append("message", t), this.host.consoleCapture && e.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors)), this.networkCapture && e.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let o = null;
    try {
      const r = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: e
      });
      if (r.ok) {
        this.host.announceMsg("Recording sent");
        try {
          o = (await r.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await r.text()), this.host.announceMsg("Failed to send recording", !0);
    } catch (r) {
      console.error("Failed to submit video feedback:", r), this.host.announceMsg("Failed to send recording", !0);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording(), await this.host.tryLaunchQuest("video", o);
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.host.setButtonsDisabled(!1), this.host.overlayShadowHost && this.host.state === "IDLE" && (this.host.overlayShadowHost.style.pointerEvents = "none");
  }
}
export {
  g as RecordingController
};
//# sourceMappingURL=recording--IwOtRL2.js.map
