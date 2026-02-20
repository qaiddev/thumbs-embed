import type { FeedbackConfig } from "./types";
/**
 * QaidFeedback - Standalone feedback collection embed
 */
export declare class QaidFeedback {
    private config;
    private state;
    private feedbackData;
    private selectedBounds;
    private feedbackId;
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
    private createTargetingOverlay;
    private handleKeyDown;
    private handleMouseMove;
    private handleClick;
    private cancelTargeting;
    private removeTargetingOverlay;
    private showSelectedMarker;
    private hideSelectedMarker;
    private submitFeedback;
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
