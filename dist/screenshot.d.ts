/**
 * Screenshot capture utility using native Screen Capture API
 */
export interface ScreenshotOptions {
    /** Quality of WebP compression (0-1). Default: 1.0 */
    quality?: number;
    /** Max width of the screenshot. Default: 1280 */
    maxWidth?: number;
    /** Max height of the screenshot. Default: 800 */
    maxHeight?: number;
}
/**
 * Captures a screenshot using the native Screen Capture API
 * Requires user permission but produces accurate results
 * Returns a base64-encoded WebP data URL
 */
export declare function captureScreenshot(options?: ScreenshotOptions): Promise<string | null>;
