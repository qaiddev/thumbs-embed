import type { FeedbackConfig } from "./types";
export declare function isHiddenByUser(apiKey?: string): boolean;
export declare function setHiddenByUser(apiKey?: string, hidden?: boolean): void;
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
export declare function randomId(): string;
/**
 * Get or create a visitor ID stored in localStorage
 */
export declare function getOrCreateVisitorId(): string;
export declare class QaidFeedback {
    private config;
    private state;
    private feedbackData;
    private selectedBounds;
    /**
     * This feedback's record id, once its POST answers (null if it failed).
     * The message box and a linked quest open without waiting for it; the
     * PATCHes that need the id wait on this instead.
     */
    private feedbackIdPromise;
    private questsPrewarmed;
    private activeQuest;
    private isMobile;
    private visitorId;
    private consoleCapture;
    private recording;
    private targeting;
    private clickPathPrewarmed;
    private prewarmHandle;
    private prewarmIsTimeout;
    private videoPrewarmed;
    private screenshotPrewarmed;
    private shadowHost;
    private shadowRoot;
    private overlayShadowHost;
    private overlayShadowRoot;
    private buttonsContainer;
    private isUserProvidedContainer;
    private modal;
    private dismissBtn;
    private cssVars;
    private activeThumbBtn;
    private keyboardActivation;
    private dialogModule;
    private dialogClose;
    private readonly uid;
    private boundKeyDown;
    private boundResize;
    private _startDismissed;
    private destroyed;
    private domObserver;
    private boundBeforeSwap;
    constructor(config: FeedbackConfig);
    private applyVars;
    /**
     * Announce a message via the shared visually-hidden live regions.
     * Prefer the overlay shadow root (which hosts every transient surface and
     * is never inerted by its own dialogs) so announcements are not suppressed
     * while a dialog aria-hides the main button host.
     */
    private announceMsg;
    /** Load the dialog a11y helpers; every surface that opens a dialog awaits this first. */
    private loadDialogA11y;
    /**
     * Turn a transient surface into an accessible modal dialog: save the
     * invoking control, apply dialog semantics, trap focus, and inert the
     * background. Paired with closeDialogA11y() on every close path. Callers
     * reach it only after loadDialogA11y() has resolved.
     */
    private openDialogA11y;
    private closeDialogA11y;
    private clearActiveThumb;
    private init;
    /**
     * Warm everything a thumb click needs: the send flow, the dialog helpers,
     * the message box, and targeting (unless it is skipped). Runs once, on the
     * first of: pointer or focus entering the buttons, or the idle callback.
     */
    private prewarmClickPath;
    /** "annotate" mode and skipTargeting both go straight to the send flow. */
    private skipsTargeting;
    /**
     * Best-effort preload of a lazily-split feature chunk so its first use is
     * instant. Warming fetches + compiles (and defines) the module; the feature
     * modules have no load-time side effects, so this is safe. Errors are
     * swallowed — a failed preload just falls back to an on-demand load.
     */
    private prewarmVideo;
    private prewarmScreenshot;
    /** Quest ids linked to any button, when quest launching is on. */
    private linkedQuestIds;
    /**
     * Load the quests module and fetch every linked quest's definition, so a
     * click opens the quest with no network wait. Both are best-effort: a miss
     * just means the quest loads on click, as it always did.
     */
    private prewarmQuests;
    /** Run fn when the main thread is idle; cancelled by destroy(). */
    private schedulePrewarm;
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
    private observeDom;
    private checkMobile;
    private handleResize;
    private createEmbed;
    /**
     * Lazily create a separate overlay shadow host on document.body.
     * This host contains all full-page elements (targeting overlay, marker,
     * backdrop, modal, recording indicator, video preview) so they escape
     * clip-path / transform containing blocks in user containers.
     */
    private ensureOverlayHost;
    /** The styles of every feature chunk loaded so far, in load order. */
    private featureStyles;
    /**
     * Add a feature chunk's styles to both shadow roots. The core stylesheet
     * styles only the buttons; the message box, targeting, video and markup
     * editor bring their own CSS with their chunk, so a page that never opens
     * them never downloads it.
     */
    private addFeatureStyles;
    private tooltipElement;
    private showTooltip;
    private hideTooltip;
    private handleDismiss;
    private handleThumbClick;
    private submitDirectFeedback;
    private handleKeyDown;
    /** Whether to capture the screenshot with the DOM/canvas method (html2canvas)
     *  instead of the permission-based Screen Capture API. Explicit "dom" wins;
     *  otherwise DOM is used on touch devices to avoid the getDisplayMedia prompt. */
    private shouldCaptureViaDom;
    /**
     * Run the send flow (send.ts, loaded on demand and pre-warmed before the
     * click): screenshot, markup, POST, then a linked quest or the message box.
     * If its chunk will not load, say so and reset rather than leave the
     * visitor stuck mid-flow.
     */
    private submitFeedback;
    /**
     * Launch the quest linked to `type` through the send chunk. Resolves false
     * when none is linked, or when the chunk or the quest will not load.
     */
    private tryLaunchQuest;
    /** Narrow view of the embed the send flow talks back through. */
    private makeSendHost;
    /**
     * Reset the thumbs targeting/marker UI back to idle without opening or
     * closing the message modal. Shared by closeModal() and the quest-launch
     * path (which bypasses the modal entirely).
     */
    private resetFeedbackUi;
    /**
     * Lazily load and instantiate the modal controller. The message modal lives
     * in a separate chunk, fetched the first time it opens (and pre-warmed
     * before the click — see prewarmClickPath).
     */
    private ensureModal;
    /** Narrow view of the embed the modal controller talks back through. */
    private makeModalHost;
    /**
     * Lazily load and instantiate the targeting controller. The subsystem (with
     * element-selector) lives in a separate chunk, fetched the first time the
     * user targets — pre-warmed before the click (see prewarmClickPath).
     */
    private ensureTargeting;
    /** Narrow view of the embed the targeting controller talks back through. */
    private makeTargetingHost;
    /**
     * Cheap synchronous capability check so the record button can render without
     * pulling in the (lazily-loaded) video subsystem. Mirrors
     * isVideoRecordingSupported() in video-capture.ts.
     */
    private videoSupported;
    /**
     * Lazily load and instantiate the recording controller. The whole recording
     * subsystem lives in a separate chunk, fetched only the first time the record
     * button is used (and pre-warmed on hover — see prewarmVideo).
     */
    private ensureRecording;
    /** Narrow view of the embed the recording controller talks back through. */
    private makeRecordingHost;
    private setButtonsDisabled;
    /**
     * Destroy the embed and clean up all resources
     */
    destroy(): void;
}
