/**
 * DOM-based screenshot capture using html2canvas
 * No browser permission dialog required - reconstructs the page from the DOM
 */
export interface DomScreenshotOptions {
    /** Quality of WebP compression (0-1). Default: 0.8 */
    quality?: number;
    /** Max width of the screenshot. Default: 1280 */
    maxWidth?: number;
    /** Max height of the screenshot. Default: 800 */
    maxHeight?: number;
}
declare global {
    interface Window {
        html2canvas?: (element: HTMLElement, options?: Record<string, unknown>) => Promise<HTMLCanvasElement>;
    }
}
/**
 * Check if DOM screenshot capture is supported
 * Requires canvas and basic DOM APIs
 */
export declare function isDomScreenshotSupported(): boolean;
/**
 * Capture a screenshot of the current page using html2canvas
 * Returns a base64-encoded WebP data URL, or null on failure
 */
export declare function captureDomScreenshot(options?: DomScreenshotOptions): Promise<string | null>;
