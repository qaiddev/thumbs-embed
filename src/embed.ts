import type {
  FeedbackConfig,
  ResolvedFeedbackConfig,
  FeedbackData,
  FeedbackType,
  SelectedBounds,
  EmbedState,
  FeedbackPayload,
  FeedbackResponse,
} from "./types";
import { THUMBS_UP_ICON, THUMBS_DOWN_ICON, RECORD_ICON, FEEDBACK_ICON } from "./icons";
import { injectStyles, removeStyles, buildCssVars, applyCssVars, getEmbedStyles } from "./styles";
// The element-targeting subsystem (with element-selector, ~14 KB) lives in a
// lazily-loaded chunk (targeting.ts), pulled in the first time the user targets.
import type { TargetingController, TargetingHost } from "./targeting";
import {
  announce,
  createFocusTrap,
  saveFocus,
  restoreFocus,
  applyDialog,
  setBackgroundInert,
  type FocusTrap,
} from "./a11y";
import { calculateTooltipPosition } from "./modal-positioning";
import type { ModalController, ModalHost } from "./modal";
import { captureConsoleErrors, type ConsoleCapture } from "./console-capture";
// The whole video-recording subsystem lives in a lazily-loaded chunk
// (recording.ts), pulled in the first time the record button is used. Only the
// types are imported eagerly (erased at build time).
import type { RecordingController, RecordingHost } from "./recording";
import { isMobileViewport } from "./dom-utils";
// Screenshot capture and the annotation editor are loaded on demand the first
// time a screenshot is taken — see submitFeedback() / openAnnotationEditor().
import {
  launchQuest,
  DEFAULT_QUESTS_MODULE_URL,
  type QuestInstance,
} from "./quest-launcher";

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
 * Get or create a visitor ID stored in localStorage
 */
export function getOrCreateVisitorId(): string {
  try {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  } catch {
    // localStorage not available, generate a session-only ID
    return crypto.randomUUID();
  }
}

/**
 * QaidFeedback - Standalone feedback collection embed
 */
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
  private feedbackId: number | null = null;
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
  private targetingPrewarmed = false;
  // Preload-on-intent: warm the lazily-split feature chunks before first use.
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
  private modalPrewarmed = false;
  private dismissBtn: HTMLButtonElement | null = null;

  // Per-instance CSS variables
  private cssVars: Record<string, string> = {};

  private activeThumbBtn: HTMLElement | null = null;
  // Tracks whether the pending activation came from the keyboard (Enter/Space)
  // rather than a pointer, so targeting can avoid elementFromPoint(0,0).
  private keyboardActivation = false;

  // Accessibility: dialog focus management
  private dialogTrigger: HTMLElement | null = null;
  private dialogTrap: FocusTrap | null = null;
  private dialogRestoreInert: (() => void) | null = null;

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
        marker: config.colors?.marker ?? "#6366f1",
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
      },
      modalWidth: config.modalWidth ?? 400,
      backdropOpacity: config.backdropOpacity ?? 0.3,
      fontFamily: config.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: config.fontSize ?? 16,
      captureScreenshot: config.captureScreenshot ?? false,
      annotate: config.annotate ?? true,
      annotationColor: config.annotationColor ?? config.colors?.marker ?? "#6366f1",
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

  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path.
   */
  private openDialogA11y(
    container: HTMLElement,
    opts: { labelledbyId?: string; describedbyId?: string; label?: string }
  ): void {
    this.dialogTrigger = saveFocus();
    applyDialog(container, opts);
    this.dialogTrap = createFocusTrap(container);
    this.dialogRestoreInert = setBackgroundInert(container);
  }

  private closeDialogA11y(): void {
    this.dialogTrap?.release();
    this.dialogTrap = null;
    if (this.dialogRestoreInert) {
      this.dialogRestoreInert();
      this.dialogRestoreInert = null;
    }
    restoreFocus(this.dialogTrigger);
    this.dialogTrigger = null;
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
    if (
      (this.config.captureVideo && this.videoSupported()) ||
      this.config.captureScreenshot
    ) {
      this.schedulePrewarm(() => {
        if (this.config.captureVideo && this.videoSupported()) this.prewarmVideo();
        if (this.config.captureScreenshot) this.prewarmScreenshot();
      });
    }
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
      fbBtn.addEventListener("mouseenter", () => {
        this.prewarmTargeting();
        this.showTooltip(fbBtn);
      });
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
        this.prewarmTargeting();
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
        this.prewarmTargeting();
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

    // Inject base styles into overlay shadow root
    const baseStyle = document.createElement("style");
    baseStyle.textContent = getEmbedStyles();
    this.overlayShadowRoot.appendChild(baseStyle);

    // Inject theme CSS if provided
    if (this.config.css) {
      const themeStyle = document.createElement("style");
      themeStyle.textContent = this.config.css;
      this.overlayShadowRoot.appendChild(themeStyle);
    }

    return this.overlayShadowRoot;
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
    // A message modal follows this feedback flow — warm its chunk now.
    this.prewarmModal();
    // "annotate" mode and skipTargeting both bypass element targeting and go
    // straight to the (screenshot →) modal flow.
    if (this.config.skipTargeting || this.config.feedbackMode === "annotate") {
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
      // Load the targeting chunk (pre-warmed on hover) then start it.
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
    this.submitFeedback();
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
   * Open the full-screen annotation editor over the captured screenshot,
   * reusing the overlay shadow host and the shared dialog a11y helpers.
   * Resolves with the composited WebP data URL, or null when the user skips
   * (caller keeps the original). Pointer events on the overlay host are
   * enabled while the editor is open and restored on close.
   */
  private async openAnnotationEditor(screenshot: string): Promise<string | null> {
    const root = this.ensureOverlayHost();
    const host = this.overlayShadowHost!;
    const prevPointerEvents = host.style.pointerEvents;
    host.style.pointerEvents = "auto";
    try {
      const { openAnnotationEditor } = await import("./annotate");
      return await openAnnotationEditor({
        dataUrl: screenshot,
        root,
        quality: this.config.screenshotOptions.quality,
        color: this.config.annotationColor,
        palette: this.config.annotationPalette,
        applyVars: (el) => this.applyVars(el),
        announce: (msg, assertive) => this.announceMsg(msg, assertive),
        openDialog: (container, opts) => this.openDialogA11y(container, opts),
        closeDialog: () => this.closeDialogA11y(),
      });
    } catch (err) {
      // The annotate chunk failed to load / the editor threw — keep the
      // original screenshot rather than aborting the whole submission.
      console.error("Annotation editor failed to open:", err);
      return null;
    } finally {
      host.style.pointerEvents = prevPointerEvents;
    }
  }

  private async submitFeedback(): Promise<void> {
    // Capture screenshot if enabled (server will gate by plan). "annotate" mode
    // always captures one to mark up, even without captureScreenshot set.
    let screenshot: string | null = null;
    const wantScreenshot =
      this.config.captureScreenshot || this.config.feedbackMode === "annotate";
    if (wantScreenshot) {
      // Loaded on demand so visitors who never submit a screenshot never
      // download the capture + annotation code. A capture failure (denied
      // permission, chunk load error) must never abort the feedback — we just
      // submit without a screenshot so the user still reaches the modal.
      try {
        if (this.shouldCaptureViaDom()) {
          const { captureDomScreenshot } = await import("./screenshot-dom");
          screenshot = await captureDomScreenshot(this.config.screenshotOptions);
        } else {
          const { captureScreenshot } = await import("./screenshot");
          screenshot = await captureScreenshot(this.config.screenshotOptions);
        }
        if (screenshot) this.announceMsg("Screenshot captured");
      } catch (err) {
        console.error("Screenshot capture failed:", err);
        screenshot = null;
      }
    }

    // Let the user mark up / redact the screenshot before it is submitted.
    // The message modal only opens after the POST below, so the composited
    // result lands in the same request — no backend change needed. On skip
    // the editor resolves null and the original screenshot is kept.
    if (screenshot && this.config.annotate) {
      screenshot = (await this.openAnnotationEditor(screenshot)) ?? screenshot;
    }

    // Include element bounds for server-side screenshot fallback
    // Only include if we have an element selector (element was targeted)
    const elementBounds = this.feedbackData.elementSelector
      ? {
          x: this.selectedBounds.x,
          y: this.selectedBounds.y,
          width: this.selectedBounds.width,
          height: this.selectedBounds.height,
        }
      : null;

    const payload: FeedbackPayload = {
      feedbackType: this.feedbackData.feedbackType!,
      pageUrl: window.location.href,
      apiKey: this.config.apiKey || undefined,
      elementSelector: this.feedbackData.elementSelector,
      elementText: this.feedbackData.elementText,
      consoleErrors: [...this.feedbackData.consoleErrors],
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      clickX: this.selectedBounds.clickX,
      clickY: this.selectedBounds.clickY,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      screenshot,
      visitorId: this.visitorId,
      // Include element bounds and user agent for server-side screenshot fallback
      elementBounds,
      userAgent: navigator.userAgent,
    };

    try {
      const response = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data: FeedbackResponse = await response.json();
        this.feedbackId = data.id;
        this.announceMsg("Feedback sent");
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      this.announceMsg("Failed to send feedback", true);
    }

    // If this button is linked to a quest, launch it in place of the
    // message box. The feedback record already exists, so on success we
    // just tear down the targeting UI and hand off. On any load failure we
    // fall through to the classic message box so the user can still leave
    // an optional message.
    const type = this.feedbackData.feedbackType;
    // Quest links are keyed by up/down/video; neutral single-button feedback
    // has no quest mapping, so it always falls through to the message box.
    if (type && type !== "neutral" && (await this.tryLaunchQuest(type, this.feedbackId))) {
      this.resetFeedbackUi();
      return;
    }

    // Always show the message modal as the terminal state (even if the API
    // failed — useful for demos).
    this.state = "MODAL_OPEN";
    try {
      // The modal chunk loads async; bail if the embed was destroyed meanwhile,
      // so a raced modal never opens (and never leaks a listener) post-destroy.
      const modal = await this.ensureModal();
      if (this.destroyed) return;
      modal.open();

      // Enable pointer events on overlay host for modal
      if (this.overlayShadowHost) {
        this.overlayShadowHost.style.pointerEvents = "auto";
      }
    } catch (err) {
      // The modal chunk failed to load/open. Never leave the user stuck in a
      // re-targetable limbo: thank them and reset to IDLE so a fresh click
      // starts a clean flow (the feedback itself was already POSTed above).
      console.error("Failed to open the feedback modal:", err);
      this.announceMsg("Thank you for your feedback!", true);
      this.resetFeedbackUi();
    }
  }

  /**
   * Quest id linked to `type`, or "" when quest launching is disabled
   * (no `base`) or this button has no quest configured.
   */
  private questIdFor(type: "up" | "down" | "video"): string {
    const q = this.config.quests;
    return q.base ? q[type] || "" : "";
  }

  /**
   * Launch the quest linked to `type`, if any. Resolves `true` when a quest
   * was configured and the widget launched; `false` when no quest is
   * configured or the widget failed to load (caller falls back to its
   * normal UI). The created feedback record id is passed through so the
   * quest response can be joined back to it server-side.
   */
  private async tryLaunchQuest(
    type: "up" | "down" | "video",
    feedbackId: number | string | null,
  ): Promise<boolean> {
    const questId = this.questIdFor(type);
    if (!questId) return false;
    try {
      this.activeQuest?.destroy();
      this.activeQuest = await launchQuest({
        questId,
        base: this.config.quests.base,
        apiKey: this.config.quests.apiKey || undefined,
        moduleUrl: this.config.quests.moduleUrl,
        feedbackId,
        onClose: () => {
          this.activeQuest = null;
        },
      });
      return true;
    } catch (error) {
      console.error("Failed to launch quest:", error);
      this.activeQuest = null;
      return false;
    }
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
    this.feedbackId = null;
    this.feedbackData.feedbackType = null;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;
    this.selectedBounds.visible = false;
  }


  /**
   * Lazily load and instantiate the modal controller. The message modal lives
   * in a separate chunk, fetched the first time it opens (and pre-warmed while
   * the user targets an element — see prewarmModal).
   */
  private async ensureModal(): Promise<ModalController> {
    if (!this.modal) {
      const { ModalController } = await import("./modal");
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
      get feedbackId() {
        return self.feedbackId;
      },
      setFeedbackId: (id) => {
        self.feedbackId = id;
      },
      ensureOverlayHost: () => self.ensureOverlayHost(),
      applyVars: (el) => self.applyVars(el),
      announceMsg: (message, assertive) => self.announceMsg(message, assertive),
      openDialogA11y: (container, opts) => self.openDialogA11y(container, opts),
      closeDialogA11y: () => self.closeDialogA11y(),
      resetFeedbackUi: () => self.resetFeedbackUi(),
    };
  }

  /** Warm the modal chunk while the user is targeting, so it opens instantly. */
  private prewarmModal(): void {
    if (this.modalPrewarmed) return;
    this.modalPrewarmed = true;
    import("./modal").catch(() => {});
  }

  /**
   * Lazily load and instantiate the targeting controller. The subsystem (with
   * element-selector) lives in a separate chunk, fetched the first time the
   * user targets — pre-warmed on thumb-button hover (see prewarmTargeting).
   */
  private async ensureTargeting(): Promise<TargetingController> {
    if (!this.targeting) {
      const { TargetingController } = await import("./targeting");
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

  /** Warm the targeting chunk on thumb-button hover, before the click. */
  private prewarmTargeting(): void {
    if (this.targetingPrewarmed || this.config.skipTargeting) return;
    this.targetingPrewarmed = true;
    import("./targeting").catch(() => {});
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
      const { RecordingController } = await import("./recording");
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
