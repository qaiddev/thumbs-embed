/**
 * CSS styles for the feedback embed
 * Uses .qaid- prefix to avoid conflicts
 */

// Import CSS as strings (vite handles minification in production)
import shadowStyles from "./styles-shadow.css?inline";
import lightStyles from "./styles-light.css?inline";

let instanceCount = 0;

/** Default button styles included in shadow root */
const DEFAULT_BUTTON_STYLES = `button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn-feedback:hover{background:var(--qaid-marker,#6366f1);color:var(--qaid-marker-text,#fff)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}`;

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

const BUTTON_SIZES = {
  small: 36,
  medium: 48,
  large: 64,
} as const;

const ICON_SIZES = {
  small: 18,
  medium: 24,
  large: 32,
} as const;

/**
 * Calculate relative luminance of a color
 * Returns value between 0 (black) and 1 (white)
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Parse a color string (hex or rgb) and return RGB values
 */
function parseColor(color: string): { r: number; g: number; b: number } | null {
  // Hex format
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    const fullHex = hex.length === 3
      ? hex.split("").map((c) => c + c).join("")
      : hex;
    const num = parseInt(fullHex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }
  // RGB format
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    };
  }
  return null;
}

/**
 * Get the best contrasting text color (black or white) for a background
 */
function getContrastTextColor(bgColor: string): string {
  const rgb = parseColor(bgColor);
  if (!rgb) return "white";
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  // Use white text on dark backgrounds, black on light
  return luminance > 0.4 ? "black" : "white";
}

/**
 * Build a map of CSS variable names to values for per-instance scoping
 */
export function buildCssVars(options: BuildCssVarsOptions = {}): Record<string, string> {
  const {
    positiveColor = "rgb(0, 200, 83)",
    negativeColor = "rgb(255, 0, 0)",
    markerColor = "#6366f1",
    buttonSize = "medium",
    modalWidth = 400,
    backdropOpacity = 0.3,
    fontFamily = "system-ui, -apple-system, sans-serif",
    fontSize = 16,
  } = options;

  const btnSize = BUTTON_SIZES[buttonSize];
  const iconSize = ICON_SIZES[buttonSize];
  const markerTextColor = getContrastTextColor(markerColor);

  return {
    "--qaid-positive": positiveColor,
    "--qaid-negative": negativeColor,
    "--qaid-marker": markerColor,
    "--qaid-marker-text": markerTextColor,
    "--qaid-btn-size": `${btnSize}px`,
    "--qaid-icon-size": `${iconSize}px`,
    "--qaid-modal-width": `${modalWidth}px`,
    "--qaid-backdrop-opacity": String(backdropOpacity),
    "--qaid-font-family": fontFamily,
    "--qaid-font-size": `${fontSize}px`,
  };
}

/**
 * Apply CSS variables to an element via inline style properties
 */
export function applyCssVars(el: HTMLElement, vars: Record<string, string>): void {
  for (const [name, value] of Object.entries(vars)) {
    el.style.setProperty(name, value);
  }
}

/**
 * Get the CSS string to inject into a shadow root
 * Includes base shadow styles + default button styles
 */
export function getEmbedStyles(): string {
  return shadowStyles + DEFAULT_BUTTON_STYLES;
}

/**
 * Inject light DOM styles (cursor override + highlight)
 * Reference-counted across instances
 */
export function injectStyles(): void {
  instanceCount++;
  if (instanceCount > 1) return;

  const style = document.createElement("style");
  style.id = "qaid-styles";
  style.textContent = lightStyles;
  document.head.appendChild(style);
}

/**
 * Remove light DOM styles when last instance is destroyed
 */
export function removeStyles(): void {
  if (instanceCount <= 0) return;
  instanceCount--;
  if (instanceCount === 0) {
    // Optional: a client-side router (Astro's view transitions, any SPA that
    // swaps <head>) can remove this element out from under us, so by the time
    // a later destroy() runs there may be nothing to remove. Asserting it here
    // threw and took the rest of destroy() — and any re-mount after it — down.
    document.getElementById("qaid-styles")?.remove();
  }
}

/** Reset internal state — for tests only */
export function _resetStylesState(): void {
  instanceCount = 0;
  const style = document.getElementById("qaid-styles");
  if (style) {
    style.remove();
  }
}
