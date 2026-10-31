/**
 * The feedback send flow — extracted from embed.ts into its own lazily-loaded
 * chunk. It runs only after a thumb click (or a targeted element), so it is
 * pre-warmed when the pointer or focus reaches the buttons, or on idle,
 * whichever comes first.
 *
 * It captures (and lets the visitor mark up) a screenshot when configured,
 * POSTs the feedback, then opens the linked quest or the message box. It talks
 * back to the embed through the narrow `SendHost` interface.
 */

import { launchQuest, type QuestInstance } from "./quest-launcher";
import type { ModalController } from "./modal";
import type {
  ResolvedFeedbackConfig,
  EmbedState,
  FeedbackData,
  SelectedBounds,
  FeedbackPayload,
  FeedbackResponse,
} from "./types";

/** The slice of the embed the send flow needs. */
export interface SendHost {
  readonly config: ResolvedFeedbackConfig;
  readonly visitorId: string;
  /** Live references, filled in by the click or the targeting controller. */
  readonly feedbackData: FeedbackData;
  readonly selectedBounds: SelectedBounds;
  readonly destroyed: boolean;
  readonly overlayShadowHost: HTMLDivElement | null;
  /** A quest launched from a button, so destroy() can tear it down. */
  activeQuest: QuestInstance | null;
  setState(state: EmbedState): void;
  /** Record the pending POST, which the message box's PATCHes wait on. */
  setFeedbackId(id: Promise<number | null>): void;
  shouldCaptureViaDom(): boolean;
  ensureOverlayHost(): ShadowRoot;
  ensureModal(): Promise<ModalController>;
  addFeatureStyles(css: string): void;
  applyVars(el: HTMLElement): void;
  announceMsg(message: string, assertive?: boolean): void;
  openDialogA11y(
    container: HTMLElement,
    opts: { labelledbyId?: string; describedbyId?: string; label?: string }
  ): void;
  closeDialogA11y(): void;
  resetFeedbackUi(): void;
}

/**
 * Open the full-screen annotation editor over the captured screenshot,
 * reusing the overlay shadow host and the shared dialog a11y helpers.
 * Resolves with the composited WebP data URL, or null when the user skips
 * (caller keeps the original). Pointer events on the overlay host are
 * enabled while the editor is open and restored on close.
 */
export async function openAnnotationEditor(
  host: SendHost,
  screenshot: string
): Promise<string | null> {
  const root = host.ensureOverlayHost();
  const overlay = host.overlayShadowHost!;
  const prevPointerEvents = overlay.style.pointerEvents;
  overlay.style.pointerEvents = "auto";
  try {
    const { openAnnotationEditor, styles } = await import("./annotate");
    host.addFeatureStyles(styles);
    return await openAnnotationEditor({
      dataUrl: screenshot,
      root,
      quality: host.config.screenshotOptions.quality,
      color: host.config.annotationColor,
      palette: host.config.annotationPalette,
      applyVars: (el) => host.applyVars(el),
      announce: (msg, assertive) => host.announceMsg(msg, assertive),
      openDialog: (container, opts) => host.openDialogA11y(container, opts),
      closeDialog: () => host.closeDialogA11y(),
    });
  } catch (err) {
    // The annotate chunk failed to load / the editor threw — keep the
    // original screenshot rather than aborting the whole submission.
    console.error("Annotation editor failed to open:", err);
    return null;
  } finally {
    overlay.style.pointerEvents = prevPointerEvents;
  }
}

/** Capture, POST, then hand off to a linked quest or the message box. */
export async function submitFeedback(host: SendHost): Promise<void> {
  const { config, feedbackData, selectedBounds } = host;
  // Capture screenshot if enabled (server will gate by plan). "annotate" mode
  // always captures one to mark up, even without captureScreenshot set.
  let screenshot: string | null = null;
  const wantScreenshot = config.captureScreenshot || config.feedbackMode === "annotate";
  if (wantScreenshot) {
    // Loaded on demand so visitors who never submit a screenshot never
    // download the capture + annotation code. A capture failure (denied
    // permission, chunk load error) must never abort the feedback — we just
    // submit without a screenshot so the user still reaches the modal.
    try {
      if (host.shouldCaptureViaDom()) {
        const { captureDomScreenshot } = await import("./screenshot-dom");
        screenshot = await captureDomScreenshot(config.screenshotOptions);
      } else {
        const { captureScreenshot } = await import("./screenshot");
        screenshot = await captureScreenshot(config.screenshotOptions);
      }
      if (screenshot) host.announceMsg("Screenshot captured");
    } catch (err) {
      console.error("Screenshot capture failed:", err);
      screenshot = null;
    }
  }

  // Let the user mark up / redact the screenshot before it is submitted.
  // The message modal only opens after the POST below, so the composited
  // result lands in the same request — no backend change needed. On skip
  // the editor resolves null and the original screenshot is kept.
  if (screenshot && config.annotate) {
    screenshot = (await openAnnotationEditor(host, screenshot)) ?? screenshot;
  }

  // Include element bounds for server-side screenshot fallback
  // Only include if we have an element selector (element was targeted)
  const elementBounds = feedbackData.elementSelector
    ? {
        x: selectedBounds.x,
        y: selectedBounds.y,
        width: selectedBounds.width,
        height: selectedBounds.height,
      }
    : null;

  const payload: FeedbackPayload = {
    feedbackType: feedbackData.feedbackType!,
    pageUrl: window.location.href,
    apiKey: config.apiKey || undefined,
    elementSelector: feedbackData.elementSelector,
    elementText: feedbackData.elementText,
    consoleErrors: [...feedbackData.consoleErrors],
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    clickX: selectedBounds.clickX,
    clickY: selectedBounds.clickY,
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    screenshot,
    visitorId: host.visitorId,
    // Include element bounds and user agent for server-side screenshot fallback
    elementBounds,
    userAgent: navigator.userAgent,
  };

  // The POST goes out in the background. The message box or linked quest
  // opens now instead of a server round trip later; what needs the new
  // record's id (the message PATCH, the quest's link back) waits on this.
  const feedbackId = postFeedback(host, payload);
  host.setFeedbackId(feedbackId);

  // If this button is linked to a quest, launch it in place of the
  // message box, handing it the pending id. On success we just tear down
  // the targeting UI and hand off. On any load failure we fall through to
  // the classic message box so the user can still leave an optional message.
  const type = feedbackData.feedbackType;
  // Quest links are keyed by up/down/video; neutral single-button feedback
  // has no quest mapping, so it always falls through to the message box.
  if (type && type !== "neutral" && (await tryLaunchQuest(host, type, feedbackId))) {
    host.resetFeedbackUi();
    return;
  }

  // Always show the message modal as the terminal state (even if the API
  // failed — useful for demos).
  host.setState("MODAL_OPEN");
  try {
    // The modal chunk loads async; bail if the embed was destroyed meanwhile,
    // so a raced modal never opens (and never leaks a listener) post-destroy.
    const modal = await host.ensureModal();
    if (host.destroyed) return;
    modal.open();

    // Enable pointer events on overlay host for modal
    if (host.overlayShadowHost) {
      host.overlayShadowHost.style.pointerEvents = "auto";
    }
  } catch (err) {
    // The modal chunk failed to load/open. Never leave the user stuck in a
    // re-targetable limbo: thank them and reset to IDLE so a fresh click
    // starts a clean flow (the feedback itself was already POSTed above).
    console.error("Failed to open the feedback modal:", err);
    host.announceMsg("Thank you for your feedback!", true);
    host.resetFeedbackUi();
  }
}

/** POST the feedback. Resolves to the new record's id, or null if it failed. */
async function postFeedback(host: SendHost, payload: FeedbackPayload): Promise<number | null> {
  try {
    const response = await fetch(host.config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data: FeedbackResponse = await response.json();
      host.announceMsg("Feedback sent");
      return data.id;
    }
  } catch (error) {
    console.error("Failed to submit feedback:", error);
    host.announceMsg("Failed to send feedback", true);
  }
  return null;
}

/**
 * Launch the quest linked to `type`, if any. Resolves `true` when a quest
 * was configured and the widget launched; `false` when no quest is
 * configured (quest launching off: no `base`, or this button has no quest)
 * or the widget failed to load (caller falls back to its normal UI). The
 * created feedback record id is passed through so the quest response can be
 * joined back to it server-side.
 */
export async function tryLaunchQuest(
  host: SendHost,
  type: "up" | "down" | "video",
  feedbackId: number | string | null | Promise<number | string | null>,
): Promise<boolean> {
  const q = host.config.quests;
  const questId = q.base ? q[type] || "" : "";
  if (!questId) return false;
  try {
    host.activeQuest?.destroy();
    host.activeQuest = await launchQuest({
      questId,
      base: q.base,
      apiKey: q.apiKey || undefined,
      moduleUrl: q.moduleUrl,
      feedbackId,
      onClose: () => {
        host.activeQuest = null;
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to launch quest:", error);
    host.activeQuest = null;
    return false;
  }
}
