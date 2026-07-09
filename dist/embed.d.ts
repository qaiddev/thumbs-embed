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
    private mousePos;
    private isMobile;
    private visitorId;
    private consoleCapture;
    private videoRecorder;
    private networkCapture;
    private recordedBlob;
    private recordingIndicator;
    private videoPreview;
    private isRecording;
    private isSendingVideo;
    private shadowHost;
    private shadowRoot;
    private overlayShadowHost;
    private overlayShadowRoot;
    private buttonsContainer;
    private isUserProvidedContainer;
    private overlayContainer;
    private captureLayer;
    private crosshairH;
    private crosshairV;
    private scope;
    private highlightBox;
    private marker;
    private modalContainer;
    private backdrop;
    private dismissBtn;
    private cssVars;
    private keyboardController;
    private activeThumbBtn;
    private keyboardActivation;
    private dialogTrigger;
    private dialogTrap;
    private dialogRestoreInert;
    private readonly uid;
    private boundKeyDown;
    private boundMouseMove;
    private boundClick;
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
    private startTargeting;
    /**
     * Keyboard-driven targeting. Mirrors startTargeting minus the mouse
     * plumbing: no `qaid-targeting` body class (keeps the cursor visible for
     * keyboard users), no mouse reticle, and no document mouse/click listeners.
     * The KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
     */
    private startKeyboardTargetingFlow;
    private selectKeyboardTarget;
    private createTargetingOverlay;
    private handleKeyDown;
    private handleMouseMove;
    private handleClick;
    private cancelTargeting;
    private removeTargetingOverlay;
    private showSelectedMarker;
    private hideSelectedMarker;
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
    private showModal;
    private showBottomSheet;
    private showPositionedModal;
    private getModalContent;
    private setupModalInteractions;
    private submitMessage;
    private closeModal;
    private startRecording;
    private stopRecording;
    private showRecordingIndicator;
    private updateRecordingTimer;
    private formatTime;
    private removeRecordingIndicator;
    private showRecordingPreview;
    private cancelRecordingPreview;
    private removeVideoPreview;
    private submitVideoFeedback;
    private cleanupRecording;
    private setButtonsDisabled;
    /**
     * Destroy the embed and clean up all resources
     */
    destroy(): void;
}
