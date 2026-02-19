/**
 * CSS styles for the feedback embed
 * Uses .qaid- prefix to avoid conflicts
 */
export interface BuildCssVarsOptions {
    positiveColor?: string;
    negativeColor?: string;
    /** Color for selected element marker */
    markerColor?: string;
    /** Button size: small (36px), medium (48px), large (64px) */
    buttonSize?: "small" | "medium" | "large";
    /** Modal width in pixels */
    modalWidth?: number;
    /** Backdrop opacity (0-1) */
    backdropOpacity?: number;
    /** Font family */
    fontFamily?: string;
    /** Base font size in pixels */
    fontSize?: number;
}
/**
 * Build a map of CSS variable names to values for per-instance scoping
 */
export declare function buildCssVars(options?: BuildCssVarsOptions): Record<string, string>;
/**
 * Apply CSS variables to an element via inline style properties
 */
export declare function applyCssVars(el: HTMLElement, vars: Record<string, string>): void;
/**
 * Get the CSS string to inject into a shadow root
 * Includes base shadow styles + default button styles
 */
export declare function getEmbedStyles(): string;
/**
 * Inject light DOM styles (cursor override + highlight)
 * Reference-counted across instances
 */
export declare function injectStyles(): void;
/**
 * Remove light DOM styles when last instance is destroyed
 */
export declare function removeStyles(): void;
/** Reset internal state — for tests only */
export declare function _resetStylesState(): void;
