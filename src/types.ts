/**
 * Feedback sentiment. `up`/`down` come from the thumbs buttons; `neutral` is
 * used by the single-button mode (a sentiment-free "Feedback" button).
 */
export type FeedbackType = "up" | "down" | "neutral";

/**
 * Configuration options for the QaidFeedback
 */
export interface FeedbackConfig {
  /** Required: API endpoint URL for submitting feedback */
  endpoint: string;
  /** API key for authenticating with the feedback service */
  apiKey?: string;
  /** CSS selector for user-provided container element. If not provided, creates fixed-position container */
  container?: string;
  /** Custom CSS class to apply to thumb buttons. When provided, default button styles are not applied */
  buttonClass?: string;
  /** Button layout direction. Default: 'horizontal' */
  direction?: "horizontal" | "vertical";
  /** Position of the feedback buttons. Default: 'bottom-right'. Ignored if container is provided */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  /** Offset from edge in pixels. Default: { x: 16, y: 16 } */
  offset?: { x?: number; y?: number };
  /** z-index for the embed elements. Default: 50 */
  zIndex?: number;
  /** When true, skip element targeting and go directly to feedback modal. Default: false */
  skipTargeting?: boolean;
  /**
   * Show a single, sentiment-free "Feedback" button instead of the thumbs
   * up/down pair. Its submissions record `feedbackType: "neutral"`. Default: false
   */
  singleButton?: boolean;
  /**
   * What a button click does before the message modal:
   *  - `"target"` (default): let the user point at an element on the page.
   *  - `"annotate"`: skip targeting; capture a screenshot and open the markup
   *    editor so the user can draw on it. Implies screenshot capture.
   */
  feedbackMode?: "target" | "annotate";
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
    /** Accessible name (screen readers) for the thumbs-up button */
    positiveLabel?: string;
    /** Accessible name for the thumbs-down button */
    negativeLabel?: string;
    /** Accessible name for the record button */
    recordLabel?: string;
    /** Accessible name for the dismiss (hide) button */
    dismissLabel?: string;
    /** Accessible name / tooltip for the single "Feedback" button (singleButton mode) */
    feedbackLabel?: string;
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
  /**
   * Let the user draw on the captured screenshot (rectangle, arrow, freehand
   * pen, blur/redact) in a full-screen editor before it is submitted. Only
   * applies when a screenshot was captured. Default: true (set `false` to
   * always submit the raw screenshot).
   */
  annotate?: boolean;
  /**
   * Default drawing colour in the annotation editor. Falls back to
   * `colors.marker`. The user can switch colours via the toolbar swatches.
   */
  annotationColor?: string;
  /**
   * Colour swatches offered in the annotation editor toolbar (hex strings).
   * The default colour is pre-selected. Defaults to a 6-colour palette.
   */
  annotationPalette?: string[];
  /** Enable video recording button. Default: false */
  captureVideo?: boolean;
  /** Video recording options */
  videoOptions?: {
    /** Max recording duration in seconds. Default: 15 */
    maxDuration?: number;
    /**
     * Let the user click page areas to blur before recording; the blur tracks
     * each area as the page scrolls. Default: false.
     */
    redaction?: boolean;
  };
  /** Custom SVG string for record button icon */
  recordIcon?: string;
  /** When true, buttons are hidden until hovered. Default: false */
  incognito?: boolean;
  /** When true, hide the dismiss (X) button. Auto-set for container mode. Default: false */
  hideDismiss?: boolean;
  /** Custom SVG string for positive feedback button icon */
  positiveIcon?: string;
  /** Custom SVG string for negative feedback button icon */
  negativeIcon?: string;
  /** Custom SVG string for the single "Feedback" button icon (singleButton mode) */
  feedbackIcon?: string;
  /** When true, hide thumbs up/down buttons (only show video button if enabled). Default: false */
  hideThumbs?: boolean;
  /** Custom CSS to inject into the embed's shadow root for theming */
  css?: string;
  /** Screenshot capture method. "dom" uses html2canvas (no permission), "permission" uses Screen Capture API. Default: "permission" */
  screenshotMethod?: "dom" | "permission";
  /** Screenshot options */
  screenshotOptions?: {
    /** Quality of WebP compression (0-1). Default: 1.0 */
    quality?: number;
    /** Max width of the screenshot. Default: 1280 */
    maxWidth?: number;
    /** Max height of the screenshot. Default: 800 */
    maxHeight?: number;
  };
  /**
   * Link buttons to quests. When a button has a quest id here, clicking it
   * launches that quest (via `@qaiddev/quests-embed`, lazy-loaded at runtime)
   * in place of the optional message box. Leave `base` unset to keep the
   * classic message-box behaviour for every button.
   */
  quests?: QuestsLaunchConfig;
}

/**
 * Per-button quest links plus how to reach the quest service.
 *
 * The quests widget is loaded on demand from a CDN the first time a quest
 * is triggered, so this stays a thin link — `thumbs-embed` gains no
 * questionnaire code and no build-time dependency on the quests package.
 */
export interface QuestsLaunchConfig {
  /**
   * Base URL of the quest service. **Required to enable quest launching.**
   * For QAid.dev this is e.g. `"https://qaid.dev/api/quests"`. The embed
   * derives the quest definition URL (`{base}/{questId}/definition`) and the
   * response endpoint (`{base}/responses`) from it.
   */
  base?: string;
  /** Quest id launched after a thumbs-up (in place of the message box). */
  up?: string;
  /** Quest id launched after a thumbs-down. */
  down?: string;
  /** Quest id launched after a video recording is sent. */
  video?: string;
  /** API key for the quest service. Defaults to the top-level `apiKey`. */
  apiKey?: string;
  /**
   * ES-module URL to lazy-load `@qaiddev/quests-embed` from at runtime.
   * Default: the unpkg build pinned to a compatible major. Override to
   * self-host or to point at a local build during development.
   */
  moduleUrl?: string;
}

/**
 * Network error captured during the session
 */
export interface NetworkError {
  url: string;
  method: string;
  status: number;
  statusText: string;
  requestBody?: string;
  responseBody?: string;
  timestamp: number;
}

/**
 * Console message captured during the session
 */
export interface ConsoleError {
  message: string;
  timestamp: number;
  level: "error" | "warn" | "log";
}

/**
 * Bounds of the selected element
 */
export interface SelectedBounds {
  x: number;
  y: number;
  width: number;
  height: number;
  clickX: number;
  clickY: number;
  visible: boolean;
}

/**
 * Current feedback data being collected
 */
export interface FeedbackData {
  feedbackType: FeedbackType | null;
  elementSelector: string | null;
  elementText: string | null;
  consoleErrors: ConsoleError[];
}

/**
 * State machine states for the embed
 */
export type EmbedState = "IDLE" | "TARGETING" | "SELECTED" | "MODAL_OPEN" | "REDACT_PICKING";

/**
 * Element bounds for server-side screenshot fallback
 */
export interface ElementBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Payload sent to the feedback API
 */
export interface FeedbackPayload {
  feedbackType: FeedbackType;
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
export interface FeedbackResponse {
  id: number;
}

/**
 * Payload for updating feedback with a message
 */
export interface FeedbackMessagePayload {
  message: string | null;
}

/**
 * Fully resolved configuration with all defaults applied
 * Used internally by the embed after processing user config
 */
export interface ResolvedFeedbackConfig {
  endpoint: string;
  apiKey: string;
  container: string;
  buttonClass: string;
  direction: "horizontal" | "vertical";
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  offset: { x: number; y: number };
  zIndex: number;
  skipTargeting: boolean;
  singleButton: boolean;
  feedbackMode: "target" | "annotate";
  colors: {
    positive: string;
    negative: string;
    marker: string;
  };
  buttonSize: "small" | "medium" | "large";
  text: {
    tooltip: string;
    modalTitle: string;
    modalSubtitle: string;
    placeholder: string;
    submitButton: string;
    skipButton: string;
    positiveLabel: string;
    negativeLabel: string;
    recordLabel: string;
    dismissLabel: string;
    feedbackLabel: string;
  };
  modalWidth: number;
  backdropOpacity: number;
  fontFamily: string;
  fontSize: number;
  captureScreenshot: boolean;
  /** Whether the screenshot annotation editor is offered after capture. */
  annotate: boolean;
  annotationColor: string;
  annotationPalette: string[];
  screenshotMethod: "dom" | "permission";
  screenshotOptions: {
    quality: number;
    maxWidth: number;
    maxHeight: number;
  };
  incognito: boolean;
  hideDismiss: boolean;
  positiveIcon: string;
  negativeIcon: string;
  feedbackIcon: string;
  hideThumbs: boolean;
  css: string;
  captureVideo: boolean;
  videoOptions: {
    maxDuration: number;
    redaction: boolean;
  };
  recordIcon: string;
  quests: {
    /** Quest-service base URL. Empty string when quest launching is disabled. */
    base: string;
    /** Quest ids per button. Empty string means "no quest for this button". */
    up: string;
    down: string;
    video: string;
    /** Resolved quest API key (falls back to the top-level apiKey). */
    apiKey: string;
    /** Resolved ES-module URL for lazy-loading the quests widget. */
    moduleUrl: string;
  };
}
