/**
 * Console message captured during the session
 */
export declare interface ConsoleError {
    message: string;
    timestamp: number;
    level: "error" | "warn" | "log";
}

/**
 * Element bounds for server-side screenshot fallback
 */
declare interface ElementBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * Configuration options for the FeedbackEmbed
 */
export declare interface FeedbackConfig {
    /** Required: API endpoint URL for submitting feedback */
    endpoint: string;
    /** API key for authenticating with the feedback service */
    apiKey?: string;
    /** CSS selector for user-provided container element. If not provided, creates fixed-position container */
    container?: string;
    /** Custom CSS class to apply to thumb buttons. When provided, default button styles are not applied */
    buttonClass?: string;
    /** Position of the feedback buttons. Default: 'bottom-right'. Ignored if container is provided */
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    /** Offset from edge in pixels. Default: { x: 16, y: 16 } */
    offset?: {
        x?: number;
        y?: number;
    };
    /** z-index for the embed elements. Default: 50 */
    zIndex?: number;
    /** When true, skip element targeting and go directly to feedback modal. Default: false */
    skipTargeting?: boolean;
    /** Custom colors for feedback types */
    colors?: {
        /** Color for positive feedback. Default: rgb(0, 200, 83) */
        positive?: string;
        /** Color for negative feedback. Default: rgb(255, 0, 0) */
        negative?: string;
        /** Color for selected element marker. Default: #6366f1 */
        marker?: string;
    };
    /** Button size. Default: 'medium' (48px). Small: 36px, Large: 64px */
    buttonSize?: "small" | "medium" | "large";
    /** Custom text labels */
    text?: {
        /** Tooltip text for buttons */
        tooltip?: string;
        /** Banner text during targeting */
        bannerText?: string;
        /** Banner hint text */
        bannerHint?: string;
        /** Modal title */
        modalTitle?: string;
        /** Modal subtitle */
        modalSubtitle?: string;
        /** Textarea placeholder */
        placeholder?: string;
        /** Submit button text */
        submitButton?: string;
        /** Skip button text */
        skipButton?: string;
    };
    /** Modal width in pixels. Default: 400 */
    modalWidth?: number;
    /** Backdrop opacity (0-1). Default: 0.3 */
    backdropOpacity?: number;
    /** Font family for text elements. Default: system-ui, -apple-system, sans-serif */
    fontFamily?: string;
    /** Base font size in pixels. Default: 16 */
    fontSize?: number;
    /** Enable screenshot capture with feedback. Default: false */
    captureScreenshot?: boolean;
    /** When true, buttons are hidden until hovered. Default: false */
    incognito?: boolean;
    /** Custom SVG string for positive feedback button icon */
    positiveIcon?: string;
    /** Custom SVG string for negative feedback button icon */
    negativeIcon?: string;
    /** Screenshot options */
    screenshotOptions?: {
        /** Quality of WebP compression (0-1). Default: 1.0 */
        quality?: number;
        /** Max width of the screenshot. Default: 1280 */
        maxWidth?: number;
        /** Max height of the screenshot. Default: 800 */
        maxHeight?: number;
    };
}

/**
 * Current feedback data being collected
 */
export declare interface FeedbackData {
    feedbackType: "up" | "down" | null;
    elementSelector: string | null;
    elementText: string | null;
    consoleErrors: ConsoleError[];
}

/**
 * FeedbackEmbed - Standalone feedback collection embed
 */
export declare class FeedbackEmbed {
    private config;
    private state;
    private feedbackData;
    private selectedBounds;
    private feedbackId;
    private mousePos;
    private lastHighlighted;
    private isMobile;
    private visitorId;
    private consoleCapture;
    private allowedFeatures;
    private container;
    private isUserProvidedContainer;
    private overlayContainer;
    private captureLayer;
    private crosshairH;
    private crosshairV;
    private scope;
    private marker;
    private modalContainer;
    private backdrop;
    private boundKeyDown;
    private boundMouseMove;
    private boundClick;
    private boundResize;
    constructor(config: FeedbackConfig);
    private init;
    private fetchAllowedFeatures;
    private checkMobile;
    private handleResize;
    private createEmbed;
    private tooltipElement;
    private showTooltip;
    private hideTooltip;
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
    /**
     * Destroy the embed and clean up all resources
     */
    destroy(): void;
}

/**
 * Payload for updating feedback with a message
 */
export declare interface FeedbackMessagePayload {
    message: string | null;
}

/**
 * Payload sent to the feedback API
 */
export declare interface FeedbackPayload {
    feedbackType: "up" | "down";
    pageUrl: string;
    /** API key for authenticating with the feedback service */
    apiKey?: string;
    elementSelector: string | null;
    elementText: string | null;
    consoleErrors: ConsoleError[];
    screenWidth: number;
    screenHeight: number;
    clickX: number;
    clickY: number;
    scrollX: number;
    scrollY: number;
    /** Base64-encoded screenshot image (WebP) */
    screenshot: string | null;
    /** Random UUID stored in visitor's localStorage (for anonymous feedback) */
    visitorId: string;
    /** Element bounds for server-side screenshot fallback when client screenshot fails */
    elementBounds?: ElementBounds | null;
    /** User agent string for server-side rendering consistency */
    userAgent?: string;
}

/**
 * Response from the feedback API
 */
export declare interface FeedbackResponse {
    id: number;
}

/**
 * Fully resolved configuration with all defaults applied
 * Used internally by the embed after processing user config
 */
export declare interface ResolvedFeedbackConfig {
    endpoint: string;
    apiKey: string;
    container: string;
    buttonClass: string;
    position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    offset: {
        x: number;
        y: number;
    };
    zIndex: number;
    skipTargeting: boolean;
    colors: {
        positive: string;
        negative: string;
        marker: string;
    };
    buttonSize: "small" | "medium" | "large";
    text: {
        tooltip: string;
        bannerText: string;
        bannerHint: string;
        modalTitle: string;
        modalSubtitle: string;
        placeholder: string;
        submitButton: string;
        skipButton: string;
    };
    modalWidth: number;
    backdropOpacity: number;
    fontFamily: string;
    fontSize: number;
    captureScreenshot: boolean;
    screenshotOptions: {
        quality: number;
        maxWidth: number;
        maxHeight: number;
    };
    incognito: boolean;
    positiveIcon: string;
    negativeIcon: string;
}

/**
 * Bounds of the selected element
 */
export declare interface SelectedBounds {
    x: number;
    y: number;
    width: number;
    height: number;
    clickX: number;
    clickY: number;
    visible: boolean;
}

export { }
