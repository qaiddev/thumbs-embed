import type { FeedbackConfig } from "./types";
export declare function isHiddenByUser(apiKey?: string): boolean;
export declare function setHiddenByUser(apiKey?: string, hidden?: boolean): void;
/**
 * Get or create a visitor ID stored in localStorage
 */
export declare function getOrCreateVisitorId(): string;
/**
 * QaidFeedback - Standalone feedback collection embed
 */
export declare class QaidFeedback {
    private config;
    private state;
    private feedbackData;
    private selectedBounds;
    private feedbackId;
    private activeQuest;
    private isMobile;
    private visitorId;
    private consoleCapture;
    private recording;
    private targeting;
    private targetingPrewarmed;
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
    private modalPrewarmed;
    private dismissBtn;
    private cssVars;
    private activeThumbBtn;
    private keyboardActivation;
    private dialogTrigger;
    private dialogTrap;
    private dialogRestoreInert;
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
    /**
     * Turn a transient surface into an accessible modal dialog: save the
     * invoking control, apply dialog semantics, trap focus, and inert the
     * background. Paired with closeDialogA11y() on every close path.
     */
    private openDialogA11y;
    private closeDialogA11y;
    private clearActiveThumb;
    private init;
    /**
     * Best-effort preload of a lazily-split feature chunk so its first use is
     * instant. Warming fetches + compiles (and defines) the module; the feature
     * modules have no load-time side effects, so this is safe. Errors are
     * swallowed — a failed preload just falls back to an on-demand load.
     */
    private prewarmVideo;
    private prewarmScreenshot;
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
     * Open the full-screen annotation editor over the captured screenshot,
     * reusing the overlay shadow host and the shared dialog a11y helpers.
     * Resolves with the composited WebP data URL, or null when the user skips
     * (caller keeps the original). Pointer events on the overlay host are
     * enabled while the editor is open and restored on close.
     */
    private openAnnotationEditor;
    private submitFeedback;
    /**
     * Quest id linked to `type`, or "" when quest launching is disabled
     * (no `base`) or this button has no quest configured.
     */
    private questIdFor;
    /**
     * Launch the quest linked to `type`, if any. Resolves `true` when a quest
     * was configured and the widget launched; `false` when no quest is
     * configured or the widget failed to load (caller falls back to its
     * normal UI). The created feedback record id is passed through so the
     * quest response can be joined back to it server-side.
     */
    private tryLaunchQuest;
    /**
     * Reset the thumbs targeting/marker UI back to idle without opening or
     * closing the message modal. Shared by closeModal() and the quest-launch
     * path (which bypasses the modal entirely).
     */
    private resetFeedbackUi;
    /**
     * Lazily load and instantiate the modal controller. The message modal lives
     * in a separate chunk, fetched the first time it opens (and pre-warmed while
     * the user targets an element — see prewarmModal).
     */
    private ensureModal;
    /** Narrow view of the embed the modal controller talks back through. */
    private makeModalHost;
    /** Warm the modal chunk while the user is targeting, so it opens instantly. */
    private prewarmModal;
    /**
     * Lazily load and instantiate the targeting controller. The subsystem (with
     * element-selector) lives in a separate chunk, fetched the first time the
     * user targets — pre-warmed on thumb-button hover (see prewarmTargeting).
     */
    private ensureTargeting;
    /** Narrow view of the embed the targeting controller talks back through. */
    private makeTargetingHost;
    /** Warm the targeting chunk on thumb-button hover, before the click. */
    private prewarmTargeting;
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
