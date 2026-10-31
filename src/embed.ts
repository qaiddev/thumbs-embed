import type {
  FeedbackConfig,
  ResolvedFeedbackConfig,
  FeedbackData,
  FeedbackType,
  SelectedBounds,
  EmbedState,
} from "./types";
import { THUMBS_UP_ICON, THUMBS_DOWN_ICON, RECORD_ICON, FEEDBACK_ICON } from "./icons";
import { injectStyles, removeStyles, buildCssVars, applyCssVars, getEmbedStyles } from "./styles";
// The element-targeting subsystem (with element-selector, ~14 KB) lives in a
// lazily-loaded chunk (targeting.ts), pulled in the first time the user targets.
import type { TargetingController, TargetingHost } from "./targeting";
// Only live-region announcements are needed at startup. The dialog helpers
// (focus trap, inert background) load with the click path (a11y-dialog.ts).
import { announce } from "./a11y";
import type { DialogOptions } from "./a11y-dialog";
import { calculateTooltipPosition } from "./tooltip-positioning";
import type { ModalController, ModalHost } from "./modal";
import { captureConsoleErrors, type ConsoleCapture } from "./console-capture";
// The whole video-recording subsystem lives in a lazily-loaded chunk
// (recording.ts), pulled in the first time the record button is used. Only the
// types are imported eagerly (erased at build time).
import type { RecordingController, RecordingHost } from "./recording";
import { isMobileViewport } from "./dom-utils";
// The send flow (screenshot, markup, POST, quest or message box) is its own
// lazily-loaded chunk (send.ts), as is the quests loader it uses; both are
// pre-warmed before the click (see prewarmClickPath / prewarmQuests).
import type { SendHost } from "./send";
import type { QuestInstance } from "./quest-launcher";
import { DEFAULT_QUESTS_MODULE_URL } from "./quest-config";

const VISITOR_ID_KEY = "qaid_visitor_id";
const HIDE_FEEDBACK_KEY = "qaid_hide_feedback";
/** Default annotation swatches: red, amber, green, blue, near-black, white. */
const DEFAULT_ANNOTATION_PALETTE = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#111827",
  "#ffffff",
];

// True when the primary pointer is touch (phone/tablet). On these devices the
// Screen Capture API (getDisplayMedia) shows an intrusive "start capturing"
// system prompt, dims the screen, and on iOS returns a rotated frame — so the
// permission-free DOM/canvas screenshot is the right default there.
function isTouchPrimaryDevice(): boolean {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

function getHideKey(apiKey?: string): string {
  return apiKey ? `${HIDE_FEEDBACK_KEY}_${apiKey}` : HIDE_FEEDBACK_KEY;
}

export function isHiddenByUser(apiKey?: string): boolean {
  try {
    return localStorage.getItem(getHideKey(apiKey)) === "1";
  } catch {
    return false;
  }
}

export function setHiddenByUser(apiKey?: string, hidden = true): void {
  try {
    if (hidden) {
      localStorage.setItem(getHideKey(apiKey), "1");
    } else {
      localStorage.removeItem(getHideKey(apiKey));
    }
  } catch {
    // localStorage not available
  }
}

/**
 * A random v4 UUID.
 *
 * `crypto.randomUUID` exists only in secure contexts (HTTPS and localhost). On
 * a plain http:// page it is undefined, and calling it threw inside the
 * constructor, so the widget never appeared. `crypto.getRandomValues` has no
 * such restriction; `Math.random` covers a runtime with no `crypto` at all.
 * The id only groups one browser's feedback, so it needs to be unique, not
 * secret.
 */
export function randomId(): string {
  const c = typeof crypto !== "undefined" ? crypto : undefined;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();

  const bytes = new Uint8Array(16);
  if (c && typeof c.getRandomValues === "function") {
    c.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  // RFC 4122 version 4 / variant 1 bits, so the result reads as a real UUID.
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Get or create a visitor ID stored in localStorage
 */
export function getOrCreateVisitorId(): string {
  try {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = randomId();
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  } catch {
    // localStorage not available, generate a session-only ID
    return randomId();
  }
}

/**
 * QaidFeedback - Standalone feedback collection embed
 */

/**
 * Put a feature's <style> after the base styles and any earlier feature's,
 * but before the theme's, so a theme still overrides the feature defaults.
 */
function insertFeatureStyle(root: ShadowRoot, css: string): void {
  const style = document.createElement("style");
  style.setAttribute("data-qaid-feature", "");
  style.textContent = css;
  const marks = root.querySelectorAll("style[data-qaid-base], style[data-qaid-feature]");
  const after = marks[marks.length - 1];
  root.insertBefore(style, after ? after.nextSibling : root.firstChild);
}

export class QaidFeedback {
  private config: ResolvedFeedbackConfig;
  private state: EmbedState = "IDLE";
  private feedbackData: FeedbackData = {
    feedbackType: null,
    elementSelector: null,
    elementText: null,
    consoleErrors: [],
  };
  private selectedBounds: SelectedBounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    clickX: 0,
    clickY: 0,
    visible: false,
  };
  /**
   * This feedback's record id, once its POST answers (null if it failed).
   * The message box and a linked quest open without waiting for it; the
   * PATCHes that need the id wait on this instead.
   */
  private feedbackIdPromise: Promise<number | null> = Promise.resolve(null);
  private questsPrewarmed = false;
  // A quest launched from a button (in place of the message box), if any.
  private activeQuest: QuestInstance | null = null;
  private isMobile = false;
  private visitorId: string;

  // Console capture
  private consoleCapture: ConsoleCapture | null = null;

  // Video recording — the whole subsystem lives in a lazily-loaded chunk
  // (recording.ts); a thumbs-only visitor never downloads it.
  private recording: RecordingController | null = null;
  // Element targeting — also a lazily-loaded chunk (targeting.ts).
  private targeting: TargetingController | null = null;
  // Preload-on-intent: warm the lazily-split feature chunks before first use.
  // The click path (send, message box, targeting) warms when the pointer or
  // focus reaches the buttons, or on idle, whichever comes first.
  private clickPathPrewarmed = false;
  private prewarmHandle: number | null = null;
  private prewarmIsTimeout = false;
  private videoPrewarmed = false;
  private screenshotPrewarmed = false;

  // Shadow DOM
  private shadowHost: HTMLDivElement | null = null;
  private shadowRoot: ShadowRoot | null = null;

  // Overlay shadow DOM (always on document.body for full-page coverage)
  private overlayShadowHost: HTMLDivElement | null = null;
  private overlayShadowRoot: ShadowRoot | null = null;

  // DOM elements (inside shadow root)
  private buttonsContainer: HTMLDivElement | null = null;
  private isUserProvidedContainer = false;
  // The message modal lives in a lazily-loaded chunk (modal.ts).
  private modal: ModalController | null = null;
  private dismissBtn: HTMLButtonElement | null = null;

  // Per-instance CSS variables
  private cssVars: Record<string, string> = {};

  private activeThumbBtn: HTMLElement | null = null;
  // Tracks whether the pending activation came from the keyboard (Enter/Space)
  // rather than a pointer, so targeting can avoid elementFromPoint(0,0).
  private keyboardActivation = false;

  // Accessibility: dialog focus management. The helpers load with the click
  // path; `dialogClose` undoes the open dialog (trap, inert, focus).
  private dialogModule: typeof import("./a11y-dialog") | null = null;
  private dialogClose: (() => void) | null = null;

  // Unique id suffix for aria-labelledby/describedby references
  private readonly uid = Math.random().toString(36).slice(2, 9);

  // Bound event handlers
  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundResize: () => void;

  // Start with buttons slid off-screen (localStorage dismiss, no animation)
  private _startDismissed = false;

  // DOM persistence (survives framework client-side navigation)
  private destroyed = false;
  private domObserver: MutationObserver | null = null;
  private boundBeforeSwap: ((e: Event) => void) | null = null;

  constructor(config: FeedbackConfig) {
    this.config = {
      endpoint: config.endpoint,
      apiKey: config.apiKey ?? "",
      container: config.container ?? "",
      buttonClass: config.buttonClass ?? "",
      direction: config.direction ?? "horizontal",
      position: config.position ?? "bottom-right",
      offset: {
        x: config.offset?.x ?? 16,
        y: config.offset?.y ?? 16,
      },
      zIndex: config.zIndex ?? 50,
      skipTargeting: config.skipTargeting ?? false,
      singleButton: config.singleButton ?? false,
      feedbackMode: config.feedbackMode ?? "target",
      colors: {
        positive: config.colors?.positive ?? "rgb(0, 200, 83)",
        negative: config.colors?.negative ?? "rgb(255, 0, 0)",
        marker: config.colors?.marker ?? "#6365f1",
      },
      buttonSize: config.buttonSize ?? "medium",
      text: {
        tooltip: config.text?.tooltip ?? "",
        modalTitle: config.text?.modalTitle ?? "Thank you for your feedback!",
        modalSubtitle: config.text?.modalSubtitle ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: config.text?.placeholder ?? "Optional: Tell us more about your experience...",
        submitButton: config.text?.submitButton ?? "Submit",
        skipButton: config.text?.skipButton ?? "Skip",
        positiveLabel: config.text?.positiveLabel ?? "Send positive feedback",
        negativeLabel: config.text?.negativeLabel ?? "Send negative feedback",
        recordLabel: config.text?.recordLabel ?? "Record a screen recording",
        dismissLabel: config.text?.dismissLabel ?? "Hide Feedback",
        feedbackLabel: config.text?.feedbackLabel ?? "Send feedback",
        confirmationTitle: config.text?.confirmationTitle ?? "Thank you!",
        confirmationMessage:
          config.text?.confirmationMessage ?? "Your feedback has been received.",
        confirmationClose: config.text?.confirmationClose ?? "Close",
        errorTitle: config.text?.errorTitle ?? "Message not sent",
        errorMessage:
          config.text?.errorMessage ??
          "Something went wrong, so we did not get your message. Please try again later.",
      },
      hideConfirmation: config.hideConfirmation ?? false,
      modalWidth: config.modalWidth ?? 400,
      backdropOpacity: config.backdropOpacity ?? 0.3,
      fontFamily: config.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: config.fontSize ?? 16,
      captureScreenshot: config.captureScreenshot ?? false,
      annotate: config.annotate ?? true,
      annotationColor: config.annotationColor ?? config.colors?.marker ?? "#6365f1",
      annotationPalette: config.annotationPalette ?? DEFAULT_ANNOTATION_PALETTE,
      screenshotMethod: config.screenshotMethod ?? "permission",
      screenshotOptions: {
        quality: config.screenshotOptions?.quality ?? 0.8,
        maxWidth: config.screenshotOptions?.maxWidth ?? 1280,
        maxHeight: config.screenshotOptions?.maxHeight ?? 800,
      },
      incognito: config.incognito ?? false,
      hideDismiss: config.hideDismiss ?? false,
      positiveIcon: config.positiveIcon ?? "",
      negativeIcon: config.negativeIcon ?? "",
      feedbackIcon: config.feedbackIcon ?? "",
      hideThumbs: config.hideThumbs ?? false,
      css: config.css ?? "",
      captureVideo: config.captureVideo ?? false,
      videoOptions: {
        maxDuration: config.videoOptions?.maxDuration ?? 15,
        redaction: config.videoOptions?.redaction ?? false,
      },
      recordIcon: config.recordIcon ?? "",
      quests: {
        base: config.quests?.base ?? "",
        up: config.quests?.up ?? "",
        down: config.quests?.down ?? "",
        video: config.quests?.video ?? "",
        // Quest service reuses the feedback API key unless overridden.
        apiKey: config.quests?.apiKey ?? config.apiKey ?? "",
        moduleUrl: config.quests?.moduleUrl ?? DEFAULT_QUESTS_MODULE_URL,
      },
    };

    // Bind event handlers
    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundResize = this.handleResize.bind(this);

    // Get or create visitor ID for anonymous feedback tracking
    this.visitorId = getOrCreateVisitorId();

    this.init();
  }

  private applyVars(el: HTMLElement): void {
    applyCssVars(el, this.cssVars);
  }

  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  private announceMsg(message: string, assertive = false): void {
    const root = this.overlayShadowRoot ?? this.shadowRoot;
    if (root) announce(root, message, { assertive });
  }

  /** Load the dialog a11y helpers; every surface that opens a dialog awaits this first. */
  private async loadDialogA11y(): Promise<void> {
    this.dialogModule ??= await import("./a11y-dialog");
  }

  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path. Callers
   * reach it only after loadDialogA11y() has resolved.
   */
  private openDialogA11y(container: HTMLElement, opts: DialogOptions): void {
    this.dialogClose = this.dialogModule!.openDialog(container, opts);
  }

  private closeDialogA11y(): void {
    const close = this.dialogClose;
    this.dialogClose = null;
    close?.();
  }

  private clearActiveThumb(): void {
    if (this.activeThumbBtn) {
      this.activeThumbBtn.setAttribute("aria-pressed", "false");
      this.activeThumbBtn = null;
    }
  }

  private init(): void {
    // Inject shared light DOM styles (cursor + highlight, reference counted)
    injectStyles();

    // Build per-instance CSS variables
    this.cssVars = buildCssVars({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize,
    });

    // Restore dismiss preference from localStorage (skip if hideDismiss)
    if (!this.config.hideDismiss && isHiddenByUser(this.config.apiKey)) {
      this._startDismissed = true;
    }

    // Check mobile
    this.checkMobile();
    window.addEventListener("resize", this.boundResize);

    // Create shadow host and embed
    this.createEmbed();

    // Capture console errors
    this.consoleCapture = captureConsoleErrors((_error) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    });
    this.feedbackData.consoleErrors = this.consoleCapture.errors;

    // Persist across client-side navigations (Astro View Transitions, etc.)
    this.observeDom();

    // Preload split feature chunks on idle when their config flags are set, so
    // the first screenshot / recording doesn't wait on a chunk fetch. Hovering
    // the record button also warms the video chunk (see createEmbed).
    // Linked quests are warmed the same way — the quests module and each
    // quest's definition — so a click opens the quest from memory.
    // The click path (send flow, message box, targeting) warms here too, if
    // the pointer or focus has not reached the buttons first.
    this.schedulePrewarm(() => {
      this.prewarmClickPath();
      if (this.config.captureVideo && this.videoSupported()) this.prewarmVideo();
      if (this.config.captureScreenshot) this.prewarmScreenshot();
      this.prewarmQuests();
    });
  }

  /**
   * Warm everything a thumb click needs: the send flow, the dialog helpers,
   * the message box, and targeting (unless it is skipped). Runs once, on the
   * first of: pointer or focus entering the buttons, or the idle callback.
   */
  private prewarmClickPath(): void {
    if (this.clickPathPrewarmed) return;
    this.clickPathPrewarmed = true;
    import("./send").catch(() => {});
    import("./a11y-dialog").catch(() => {});
    import("./modal").catch(() => {});
    if (!this.skipsTargeting()) import("./targeting").catch(() => {});
  }

  /** "annotate" mode and skipTargeting both go straight to the send flow. */
  private skipsTargeting(): boolean {
    return this.config.skipTargeting || this.config.feedbackMode === "annotate";
  }

  /**
   * Best-effort preload of a lazily-split feature chunk so its first use is
   * instant. Warming fetches + compiles (and defines) the module; the feature
   * modules have no load-time side effects, so this is safe. Errors are
   * swallowed — a failed preload just falls back to an on-demand load.
   */
  private prewarmVideo(): void {
    if (this.videoPrewarmed) return;
    this.videoPrewarmed = true;
    // Warm both the recording controller chunk and the capture chunk it pulls
    // in on start, so the first recording begins without waiting on either.
    import("./recording").catch(() => {});
    import("./video-capture").catch(() => {});
  }

  private prewarmScreenshot(): void {
    if (this.screenshotPrewarmed) return;
    this.screenshotPrewarmed = true;
    (this.shouldCaptureViaDom()
      ? import("./screenshot-dom")
      : import("./screenshot")
    ).catch(() => {});
    if (this.config.annotate) import("./annotate").catch(() => {});
  }

  /** Quest ids linked to any button, when quest launching is on. */
  private linkedQuestIds(): string[] {
    const q = this.config.quests;
    return q.base ? [q.up, q.down, q.video].filter((id) => id) : [];
  }

  /**
   * Load the quests module and fetch every linked quest's definition, so a
   * click opens the quest with no network wait. Both are best-effort: a miss
   * just means the quest loads on click, as it always did.
   */
  private prewarmQuests(): void {
    if (this.questsPrewarmed) return;
    const ids = this.linkedQuestIds();
    if (ids.length === 0) return;
    this.questsPrewarmed = true;
    const { base, moduleUrl } = this.config.quests;
    import("./quest-launcher")
      .then((q) => {
        q.loadQuestsModule(moduleUrl).catch(() => {});
        for (const id of ids) void q.prefetchQuestDefinition(q.questDefinitionUrl(base, id));
      })
      .catch(() => {});
  }

  /** Run fn when the main thread is idle; cancelled by destroy(). */
  private schedulePrewarm(fn: () => void): void {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const guarded = (): void => {
      if (!this.destroyed) fn();
    };
    if (typeof w.requestIdleCallback === "function") {
      this.prewarmIsTimeout = false;
      this.prewarmHandle = w.requestIdleCallback(guarded, { timeout: 2000 });
    } else {
      this.prewarmIsTimeout = true;
      this.prewarmHandle = window.setTimeout(guarded, 1200);
    }
  }

  /**
   * Watch for the shadow hosts being removed from the DOM by framework
   * client-side navigation (e.g. Astro View Transitions swapping <body>
   * contents, or any SPA router that replaces DOM subtrees). If the host
   * is disconnected and destroy() wasn't called, re-append it.
   *
   * Also hooks into Astro's `astro:before-swap` when available, which
   * lets us carry elements into the new document before the swap happens
   * (avoids a flash of the widget disappearing and reappearing).
   */
  private observeDom(): void {
    // Astro View Transitions: carry hosts into the new document pre-swap
    this.boundBeforeSwap = (e: Event) => {
      const newDoc = (e as any).newDocument as Document | undefined;
      if (!newDoc || this.destroyed) return;
      if (this.shadowHost) newDoc.body.appendChild(this.shadowHost);
      if (this.overlayShadowHost) newDoc.body.appendChild(this.overlayShadowHost);
    };
    document.addEventListener("astro:before-swap", this.boundBeforeSwap);

    // Generic fallback: MutationObserver to catch any framework removing our hosts
    this.domObserver = new MutationObserver(() => {
      if (this.destroyed) return;
      if (this.shadowHost && !this.shadowHost.isConnected) {
        document.body.appendChild(this.shadowHost);
      }
      if (this.overlayShadowHost && !this.overlayShadowHost.isConnected) {
        document.body.appendChild(this.overlayShadowHost);
      }
    });
    this.domObserver.observe(document.body, { childList: true });
  }

  private checkMobile(): void {
    this.isMobile = isMobileViewport();
  }

  private handleResize(): void {
    this.checkMobile();
  }

  private createEmbed(): void {
    // Create the shadow host element
    this.shadowHost = document.createElement("div");
    this.shadowHost.setAttribute("data-qaid-embed", "");
    this.shadowHost.style.position = "static";
    this.shadowHost.style.display = "contents";

    // Check if user provided a container selector
    let userContainer: HTMLElement | null = null;
    if (this.config.container) {
      userContainer = document.querySelector(this.config.container);
    }

    if (userContainer) {
      userContainer.appendChild(this.shadowHost);
      this.isUserProvidedContainer = true;
      // Container mode never needs a dismiss button
      this.config.hideDismiss = true;
    } else {
      // Set shadow host to fixed positioning for auto-created containers
      this.shadowHost.style.position = "fixed";
      this.shadowHost.style.display = "block";
      this.shadowHost.style.inset = "0";
      this.shadowHost.style.pointerEvents = "none";
      this.shadowHost.style.zIndex = String(this.config.zIndex);
      document.body.appendChild(this.shadowHost);
    }

    // Attach shadow root
    this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });

    // Inject base styles into shadow root
    const baseStyle = document.createElement("style");
    baseStyle.setAttribute("data-qaid-base", "");
    baseStyle.textContent = getEmbedStyles();
    this.shadowRoot.appendChild(baseStyle);

    // Inject theme CSS if provided
    if (this.config.css) {
      const themeStyle = document.createElement("style");
      themeStyle.textContent = this.config.css;
      this.shadowRoot.appendChild(themeStyle);
    }

    // Create buttons container inside shadow root
    const dirClass = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer) {
      this.buttonsContainer = document.createElement("div");
      this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${dirClass}`.trim();
      if (this.config.incognito) {
        this.buttonsContainer.classList.add("qaid-incognito");
      }
    } else {
      this.buttonsContainer = document.createElement("div");
      this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${dirClass}${this.config.incognito ? " qaid-incognito" : ""}`.trim();
      this.buttonsContainer.style.pointerEvents = "auto";
      // Apply custom offset
      const { x: offsetX, y: offsetY } = this.config.offset;
      if (this.config.position.includes("right")) {
        this.buttonsContainer.style.right = `${offsetX}px`;
      } else {
        this.buttonsContainer.style.left = `${offsetX}px`;
      }
      if (this.config.position.includes("bottom")) {
        this.buttonsContainer.style.bottom = `${offsetY}px`;
      } else {
        this.buttonsContainer.style.top = `${offsetY}px`;
      }
    }

    // Apply per-instance CSS variables to buttons container
    this.applyVars(this.buttonsContainer);
    this.shadowRoot.appendChild(this.buttonsContainer);

    // Track input modality so a keyboard-activated control (Enter/Space) can be
    // distinguished from a pointer click. A keyboard-fired synthetic click has
    // clientX/clientY===0, which would break elementFromPoint targeting.
    this.buttonsContainer.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar") {
        this.keyboardActivation = true;
      }
    });
    this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = false;
    });
    this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = false;
    });
    // The pointer or keyboard focus reaching the buttons is the moment before
    // a click: warm the click path now, unless idle got there first.
    const warmClickPath = (): void => this.prewarmClickPath();
    this.buttonsContainer.addEventListener("pointerenter", warmClickPath);
    this.buttonsContainer.addEventListener("focusin", warmClickPath);

    // Determine button classes
    const useCustomClass = !!this.config.buttonClass;
    const btnBaseClass = useCustomClass
      ? `qaid-btn-structural ${this.config.buttonClass}`
      : "qaid-btn";

    // Determine tooltip text
    const defaultTooltip = "Feedback for us?";
    const tooltipText = this.config.text.tooltip || defaultTooltip;

    // Create shared tooltip element (inside shadow root)
    const tooltip = document.createElement("div");
    tooltip.className = "qaid-tooltip-text";
    tooltip.textContent = tooltipText;
    this.applyVars(tooltip);
    this.shadowRoot.appendChild(tooltip);
    this.tooltipElement = tooltip;

    // Single sentiment-free "Feedback" button, or the thumbs up/down pair.
    if (this.config.singleButton) {
      const fbWrapper = document.createElement("div");
      fbWrapper.className = "qaid-tooltip-wrapper";

      const fbBtn = document.createElement("button");
      fbBtn.type = "button";
      fbBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-feedback` : "qaid-btn qaid-btn-feedback";
      fbBtn.setAttribute("aria-label", this.config.text.feedbackLabel);
      fbBtn.innerHTML = this.config.feedbackIcon || FEEDBACK_ICON;
      fbBtn.addEventListener("click", (e) => this.handleThumbClick("neutral", e.currentTarget as HTMLElement, e));
      fbBtn.addEventListener("mouseenter", () => this.showTooltip(fbBtn));
      fbBtn.addEventListener("mouseleave", () => this.hideTooltip());
      fbWrapper.appendChild(fbBtn);

      this.buttonsContainer.appendChild(fbWrapper);
    } else if (!this.config.hideThumbs) {
      // Thumbs up button
      const upWrapper = document.createElement("div");
      upWrapper.className = "qaid-tooltip-wrapper";

      const upBtn = document.createElement("button");
      upBtn.type = "button";
      upBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-up` : "qaid-btn qaid-btn-up";
      upBtn.setAttribute("aria-label", this.config.text.positiveLabel);
      upBtn.innerHTML = this.config.positiveIcon || THUMBS_UP_ICON;
      upBtn.addEventListener("click", (e) => this.handleThumbClick("up", e.currentTarget as HTMLElement, e));
      upBtn.addEventListener("mouseenter", () => {
        this.prewarmQuests();
        this.showTooltip(upBtn);
      });
      upBtn.addEventListener("mouseleave", () => this.hideTooltip());
      upWrapper.appendChild(upBtn);

      // Thumbs down button
      const downWrapper = document.createElement("div");
      downWrapper.className = "qaid-tooltip-wrapper";

      const downBtn = document.createElement("button");
      downBtn.type = "button";
      downBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-down` : "qaid-btn qaid-btn-down";
      downBtn.setAttribute("aria-label", this.config.text.negativeLabel);
      downBtn.innerHTML = this.config.negativeIcon || THUMBS_DOWN_ICON;
      downBtn.addEventListener("click", (e) => this.handleThumbClick("down", e.currentTarget as HTMLElement, e));
      downBtn.addEventListener("mouseenter", () => {
        this.prewarmQuests();
        this.showTooltip(downBtn);
      });
      downBtn.addEventListener("mouseleave", () => this.hideTooltip());
      downWrapper.appendChild(downBtn);

      this.buttonsContainer.appendChild(upWrapper);
      this.buttonsContainer.appendChild(downWrapper);
    }

    // Record button (only when captureVideo is true and browser supports it)
    if (this.config.captureVideo && this.videoSupported()) {
      const recordWrapper = document.createElement("div");
      recordWrapper.className = "qaid-tooltip-wrapper";

      const recordBtn = document.createElement("button");
      recordBtn.type = "button";
      recordBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-record` : "qaid-btn qaid-btn-record";
      recordBtn.setAttribute("aria-label", this.config.text.recordLabel);
      recordBtn.innerHTML = this.config.recordIcon || RECORD_ICON;
      recordBtn.addEventListener("click", () => {
        void this.ensureRecording().then((rec) =>
          this.config.videoOptions.redaction ? rec.startPicking() : rec.startRecording()
        );
      });
      // Warm the video chunk on hover/focus/touch — the ~200ms before a click —
      // so recording starts without waiting on the chunk fetch.
      const warmVideo = (): void => this.prewarmVideo();
      recordBtn.addEventListener("mouseenter", () => {
        warmVideo();
        this.showTooltip(recordBtn);
      });
      recordBtn.addEventListener("focus", warmVideo);
      recordBtn.addEventListener("touchstart", warmVideo, { passive: true });
      recordBtn.addEventListener("mouseleave", () => this.hideTooltip());
      recordWrapper.appendChild(recordBtn);

      this.buttonsContainer.appendChild(recordWrapper);
    }

    // Dismiss (X) button — only in body/fixed mode (hidden for container embeds)
    if (!this.config.hideDismiss) {
      this.dismissBtn = document.createElement("button");
      this.dismissBtn.type = "button";
      this.dismissBtn.className = "qaid-dismiss-btn";
      this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel);
      this.dismissBtn.title = this.config.text.dismissLabel;
      this.dismissBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
      this.dismissBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.handleDismiss();
      });
      // Insert as first child so it sits to the left of thumb buttons
      this.buttonsContainer.insertBefore(this.dismissBtn, this.buttonsContainer.firstChild);

      // If previously dismissed via localStorage, start fully hidden so it
      // doesn't flash back on hover — matching the dismiss behavior.
      if (this._startDismissed) {
        this.buttonsContainer.classList.add("qaid-dismissed");
      }
    }
  }

  /**
   * Lazily create a separate overlay shadow host on document.body.
   * This host contains all full-page elements (targeting overlay, marker,
   * backdrop, modal, recording indicator, video preview) so they escape
   * clip-path / transform containing blocks in user containers.
   */
  private ensureOverlayHost(): ShadowRoot {
    if (this.overlayShadowRoot) return this.overlayShadowRoot;

    this.overlayShadowHost = document.createElement("div");
    this.overlayShadowHost.setAttribute("data-qaid-embed-overlay", "");
    this.overlayShadowHost.style.position = "fixed";
    this.overlayShadowHost.style.inset = "0";
    this.overlayShadowHost.style.pointerEvents = "none";
    this.overlayShadowHost.style.zIndex = String(this.config.zIndex);
    document.body.appendChild(this.overlayShadowHost);

    this.overlayShadowRoot = this.overlayShadowHost.attachShadow({ mode: "open" });

    // Inject base styles into overlay shadow root, plus the styles of any
    // feature that loaded before this root existed.
    const baseStyle = document.createElement("style");
    baseStyle.setAttribute("data-qaid-base", "");
    baseStyle.textContent = getEmbedStyles();
    this.overlayShadowRoot.appendChild(baseStyle);
    for (const css of this.featureStyles) insertFeatureStyle(this.overlayShadowRoot, css);

    // Inject theme CSS if provided
    if (this.config.css) {
      const themeStyle = document.createElement("style");
      themeStyle.textContent = this.config.css;
      this.overlayShadowRoot.appendChild(themeStyle);
    }

    return this.overlayShadowRoot;
  }

  /** The styles of every feature chunk loaded so far, in load order. */
  private featureStyles: string[] = [];

  /**
   * Add a feature chunk's styles to both shadow roots. The core stylesheet
   * styles only the buttons; the message box, targeting, video and markup
   * editor bring their own CSS with their chunk, so a page that never opens
   * them never downloads it.
   */
  private addFeatureStyles(css: string): void {
    if (this.featureStyles.includes(css)) return;
    this.featureStyles.push(css);
    for (const root of [this.shadowRoot, this.overlayShadowRoot]) {
      if (root) insertFeatureStyle(root, css);
    }
  }

  private tooltipElement: HTMLElement | null = null;

  private showTooltip(anchor: HTMLElement): void {
    const tooltip = this.tooltipElement!;

    // Make visible to measure
    tooltip.style.visibility = "hidden";
    tooltip.classList.add("qaid-tooltip-visible");

    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const { top, left } = calculateTooltipPosition(
      anchorRect,
      tooltipRect,
      { width: window.innerWidth, height: window.innerHeight }
    );

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.style.visibility = "visible";
  }

  private hideTooltip(): void {
    this.tooltipElement!.classList.remove("qaid-tooltip-visible");
  }

  private handleDismiss(): void {
    // Fully remove the widget. It does not linger as a hover-reveal ghost
    // (that's `qaid-incognito`); once dismissed it stays gone until the
    // visitor clears the stored preference.
    this.buttonsContainer!.classList.add("qaid-dismissed");
    setHiddenByUser(this.config.apiKey, true);
  }

  private handleThumbClick(type: FeedbackType, buttonEl: HTMLElement, e: MouseEvent): void {
    // If user clicks a thumb while in incognito mode, they want it back.
    // (Dismissed widgets are `display:none`, so this can't fire for them.)
    if (this.buttonsContainer?.classList.contains("qaid-incognito")) {
      this.buttonsContainer.classList.remove("qaid-incognito");
      setHiddenByUser(this.config.apiKey, false);
    }
    // Usually warm already (pointer/focus on the buttons, or idle); a
    // programmatic click is the exception.
    this.prewarmClickPath();
    // "annotate" mode and skipTargeting both bypass element targeting and go
    // straight to the (screenshot →) modal flow.
    if (this.skipsTargeting()) {
      this.submitDirectFeedback(type, buttonEl);
    } else {
      // Expose targeting on/off state on the trigger
      this.activeThumbBtn = buttonEl;
      buttonEl.setAttribute("aria-pressed", "true");
      // A keyboard-activated <button> fires a synthetic click whose clientX/
      // clientY are (0,0). Route those through the keyboard path instead of
      // elementFromPoint(0,0). `keyboardActivation` is set by a preceding
      // Enter/Space keydown and cleared by any pointerdown/mousedown.
      const keyboard = this.keyboardActivation;
      this.keyboardActivation = false;
      // Load the targeting chunk (pre-warmed before the click) then start it.
      void this.ensureTargeting().then((t) => {
        if (this.destroyed) return;
        if (keyboard) t.startKeyboard(type);
        else t.startPointer(type, e);
      });
    }
  }

  private submitDirectFeedback(type: FeedbackType, buttonEl: HTMLElement): void {
    this.feedbackData.feedbackType = type;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;

    // Use the button's position for modal placement
    const rect = buttonEl.getBoundingClientRect();
    this.selectedBounds = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      clickX: rect.left + rect.width / 2,
      clickY: rect.top + rect.height / 2,
      visible: false,
    };
    void this.submitFeedback();
  }


  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      // The recording controller owns Escape while recording / in preview /
      // picking; let it consume the key first.
      if (this.recording?.handleEscape()) return;
      if (this.state === "TARGETING") {
        this.targeting?.cancel();
      } else if (this.state === "MODAL_OPEN") {
        this.modal?.close();
      }
    }
  }


  /** Whether to capture the screenshot with the DOM/canvas method (html2canvas)
   *  instead of the permission-based Screen Capture API. Explicit "dom" wins;
   *  otherwise DOM is used on touch devices to avoid the getDisplayMedia prompt. */
  private shouldCaptureViaDom(): boolean {
    return this.config.screenshotMethod === "dom" || isTouchPrimaryDevice();
  }

  /**
   * Run the send flow (send.ts, loaded on demand and pre-warmed before the
   * click): screenshot, markup, POST, then a linked quest or the message box.
   * If its chunk will not load, say so and reset rather than leave the
   * visitor stuck mid-flow.
   */
  private async submitFeedback(): Promise<void> {
    try {
      const [send] = await Promise.all([import("./send"), this.loadDialogA11y()]);
      await send.submitFeedback(this.makeSendHost());
    } catch (err) {
      console.error("Failed to send feedback:", err);
      this.announceMsg("Failed to send feedback", true);
      this.resetFeedbackUi();
    }
  }

  /**
   * Launch the quest linked to `type` through the send chunk. Resolves false
   * when none is linked, or when the chunk or the quest will not load.
   */
  private async tryLaunchQuest(
    type: "up" | "down" | "video",
    feedbackId: number | string | null,
  ): Promise<boolean> {
    try {
      const send = await import("./send");
      return await send.tryLaunchQuest(this.makeSendHost(), type, feedbackId);
    } catch (err) {
      console.error("Failed to launch quest:", err);
      return false;
    }
  }

  /** Narrow view of the embed the send flow talks back through. */
  private makeSendHost(): SendHost {
    const self = this;
    return {
      get config() {
        return self.config;
      },
      get visitorId() {
        return self.visitorId;
      },
      get feedbackData() {
        return self.feedbackData;
      },
      get selectedBounds() {
        return self.selectedBounds;
      },
      get destroyed() {
        return self.destroyed;
      },
      get overlayShadowHost() {
        return self.overlayShadowHost;
      },
      get activeQuest() {
        return self.activeQuest;
      },
      set activeQuest(quest) {
        self.activeQuest = quest;
      },
      setState: (state) => {
        self.state = state;
      },
      setFeedbackId: (id) => {
        self.feedbackIdPromise = id;
      },
      shouldCaptureViaDom: () => self.shouldCaptureViaDom(),
      ensureOverlayHost: () => self.ensureOverlayHost(),
      ensureModal: () => self.ensureModal(),
      addFeatureStyles: (css) => self.addFeatureStyles(css),
      applyVars: (el) => self.applyVars(el),
      announceMsg: (message, assertive) => self.announceMsg(message, assertive),
      openDialogA11y: (container, opts) => self.openDialogA11y(container, opts),
      closeDialogA11y: () => self.closeDialogA11y(),
      resetFeedbackUi: () => self.resetFeedbackUi(),
    };
  }

  /**
   * Reset the thumbs targeting/marker UI back to idle without opening or
   * closing the message modal. Shared by closeModal() and the quest-launch
   * path (which bypasses the modal entirely).
   */
  private resetFeedbackUi(): void {
    this.targeting?.hideMarker();
    if (this.overlayShadowHost) {
      this.overlayShadowHost.style.pointerEvents = "none";
    }
    this.state = "IDLE";
    this.feedbackIdPromise = Promise.resolve(null);
    this.feedbackData.feedbackType = null;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;
    this.selectedBounds.visible = false;
  }


  /**
   * Lazily load and instantiate the modal controller. The message modal lives
   * in a separate chunk, fetched the first time it opens (and pre-warmed
   * before the click — see prewarmClickPath).
   */
  private async ensureModal(): Promise<ModalController> {
    if (!this.modal) {
      const [{ ModalController, styles }] = await Promise.all([
        import("./modal"),
        this.loadDialogA11y(),
      ]);
      this.addFeatureStyles(styles);
      this.modal = new ModalController(this.makeModalHost());
    }
    return this.modal;
  }

  /** Narrow view of the embed the modal controller talks back through. */
  private makeModalHost(): ModalHost {
    const self = this;
    return {
      get config() {
        return self.config;
      },
      get uid() {
        return self.uid;
      },
      get isMobile() {
        return self.isMobile;
      },
      get state() {
        return self.state;
      },
      get boundKeyDown() {
        return self.boundKeyDown;
      },
      get feedbackData() {
        return self.feedbackData;
      },
      get selectedBounds() {
        return self.selectedBounds;
      },
      whenFeedbackId: () => self.feedbackIdPromise,
      ensureOverlayHost: () => self.ensureOverlayHost(),
      applyVars: (el) => self.applyVars(el),
      announceMsg: (message, assertive) => self.announceMsg(message, assertive),
      openDialogA11y: (container, opts) => self.openDialogA11y(container, opts),
      closeDialogA11y: () => self.closeDialogA11y(),
      resetFeedbackUi: () => self.resetFeedbackUi(),
    };
  }

  /**
   * Lazily load and instantiate the targeting controller. The subsystem (with
   * element-selector) lives in a separate chunk, fetched the first time the
   * user targets — pre-warmed before the click (see prewarmClickPath).
   */
  private async ensureTargeting(): Promise<TargetingController> {
    if (!this.targeting) {
      const { TargetingController, styles } = await import("./targeting");
      this.addFeatureStyles(styles);
      this.targeting = new TargetingController(this.makeTargetingHost());
    }
    return this.targeting;
  }

  /** Narrow view of the embed the targeting controller talks back through. */
  private makeTargetingHost(): TargetingHost {
    const self = this;
    return {
      get config() {
        return self.config;
      },
      get cssVars() {
        return self.cssVars;
      },
      get state() {
        return self.state;
      },
      get shadowHost() {
        return self.shadowHost;
      },
      get overlayShadowHost() {
        return self.overlayShadowHost;
      },
      get boundKeyDown() {
        return self.boundKeyDown;
      },
      get feedbackData() {
        return self.feedbackData;
      },
      get selectedBounds() {
        return self.selectedBounds;
      },
      setState: (state) => {
        self.state = state;
      },
      ensureOverlayHost: () => self.ensureOverlayHost(),
      applyVars: (el) => self.applyVars(el),
      announceMsg: (message, assertive) => self.announceMsg(message, assertive),
      clearActiveThumb: () => self.clearActiveThumb(),
      submitFeedback: () => self.submitFeedback(),
    };
  }

  // ==================== Video Recording ====================

  /**
   * Cheap synchronous capability check so the record button can render without
   * pulling in the (lazily-loaded) video subsystem. Mirrors
   * isVideoRecordingSupported() in video-capture.ts.
   */
  private videoSupported(): boolean {
    return (
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices &&
      typeof navigator.mediaDevices.getDisplayMedia === "function" &&
      typeof MediaRecorder !== "undefined"
    );
  }


  /**
   * Lazily load and instantiate the recording controller. The whole recording
   * subsystem lives in a separate chunk, fetched only the first time the record
   * button is used (and pre-warmed on hover — see prewarmVideo).
   */
  private async ensureRecording(): Promise<RecordingController> {
    if (!this.recording) {
      const [{ RecordingController, styles }] = await Promise.all([
        import("./recording"),
        this.loadDialogA11y(),
      ]);
      this.addFeatureStyles(styles);
      this.recording = new RecordingController(this.makeRecordingHost());
    }
    return this.recording;
  }

  /** Narrow view of the embed the recording controller talks back through. */
  private makeRecordingHost(): RecordingHost {
    const self = this;
    return {
      get config() {
        return self.config;
      },
      get visitorId() {
        return self.visitorId;
      },
      get uid() {
        return self.uid;
      },
      get overlayShadowHost() {
        return self.overlayShadowHost;
      },
      get consoleCapture() {
        return self.consoleCapture;
      },
      get boundKeyDown() {
        return self.boundKeyDown;
      },
      get state() {
        return self.state;
      },
      setState: (state) => {
        self.state = state;
      },
      ensureOverlayHost: () => self.ensureOverlayHost(),
      applyVars: (el) => self.applyVars(el),
      announceMsg: (message, assertive) => self.announceMsg(message, assertive),
      openDialogA11y: (container, opts) => self.openDialogA11y(container, opts),
      closeDialogA11y: () => self.closeDialogA11y(),
      setButtonsDisabled: (disabled) => self.setButtonsDisabled(disabled),
      tryLaunchQuest: (type, feedbackId) => self.tryLaunchQuest(type, feedbackId),
    };
  }

  private setButtonsDisabled(disabled: boolean): void {
    if (!this.buttonsContainer) return;
    const buttons = this.buttonsContainer.querySelectorAll<HTMLButtonElement>("button.qaid-btn, button.qaid-btn-structural");
    buttons.forEach((btn) => {
      if (disabled) {
        // Don't disable the record button itself (it has its own state)
        if (!btn.classList.contains("qaid-btn-record")) {
          btn.disabled = true;
          btn.style.opacity = "0.5";
        }
      } else {
        btn.disabled = false;
        btn.style.opacity = "";
      }
    });
  }

  /**
   * Destroy the embed and clean up all resources
   */
  public destroy(): void {
    // Flag as destroyed so the DOM observer doesn't re-attach hosts
    this.destroyed = true;

    // Disconnect DOM persistence observers
    if (this.domObserver) {
      this.domObserver.disconnect();
      this.domObserver = null;
    }
    if (this.boundBeforeSwap) {
      document.removeEventListener("astro:before-swap", this.boundBeforeSwap);
      this.boundBeforeSwap = null;
    }

    // Tear down the targeting subsystem + release any open dialog focus state
    this.targeting?.destroy();
    this.targeting = null;
    this.clearActiveThumb();
    this.closeDialogA11y();

    // Cancel any pending idle preload
    if (this.prewarmHandle !== null) {
      const w = window as unknown as { cancelIdleCallback?: (h: number) => void };
      if (this.prewarmIsTimeout) clearTimeout(this.prewarmHandle);
      else w.cancelIdleCallback?.(this.prewarmHandle);
      this.prewarmHandle = null;
    }

    // Tear down the recording subsystem (recorder, picker, preview) if loaded.
    this.recording?.destroy();
    this.recording = null;
    // Tear down the message modal if it was loaded/open.
    this.modal?.destroy();
    this.modal = null;

    // Tear down any quest launched from a button
    this.activeQuest?.destroy();
    this.activeQuest = null;

    // Restore console.error
    if (this.consoleCapture) {
      this.consoleCapture.restore();
      this.consoleCapture = null;
    }

    // Remove event listeners
    window.removeEventListener("resize", this.boundResize);
    document.removeEventListener("keydown", this.boundKeyDown);

    document.body.classList.remove("qaid-targeting", "qaid-type-up");
    document.body.style.removeProperty("--qaid-positive");
    document.body.style.removeProperty("--qaid-negative");

    // Remove shadow hosts from DOM (this removes shadow roots and all their contents)
    if (this.shadowHost) {
      this.shadowHost.remove();
      this.shadowHost = null;
      this.shadowRoot = null;
    }
    if (this.overlayShadowHost) {
      this.overlayShadowHost.remove();
      this.overlayShadowHost = null;
      this.overlayShadowRoot = null;
    }
    this.buttonsContainer = null;
    this.dismissBtn = null;
    this.tooltipElement = null;

    // Remove light DOM styles (reference counted)
    removeStyles();
  }
}
