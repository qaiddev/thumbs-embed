/**
 * CSS styles for the feedback embed
 * Uses .qaid- prefix to avoid conflicts
 */

// Import CSS as minified string (vite handles minification in production)
import baseStyles from "./styles.css?inline";

let stylesInjected = false;

export interface InjectStylesOptions {
  positiveColor?: string;
  negativeColor?: string;
  /** Color for selected element marker */
  markerColor?: string;
  /** When true, skip default button visual styles (user provides via buttonClass) */
  skipButtonStyles?: boolean;
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

export function injectStyles(options: InjectStylesOptions = {}): void {
  if (stylesInjected) return;
  stylesInjected = true;

  const {
    positiveColor = "rgb(0, 200, 83)",
    negativeColor = "rgb(255, 0, 0)",
    markerColor = "#6366f1",
    // skipButtonStyles kept for backwards compatibility but no longer used
    buttonSize = "medium",
    modalWidth = 400,
    backdropOpacity = 0.3,
    fontFamily = "system-ui, -apple-system, sans-serif",
    fontSize = 16,
  } = options;

  const btnSize = BUTTON_SIZES[buttonSize];
  const iconSize = ICON_SIZES[buttonSize];

  // Calculate contrast text color for marker (used on submit button)
  const markerTextColor = getContrastTextColor(markerColor);

  // CSS variables for colors and sizes
  const cssVars = `:root{--qaid-positive:${positiveColor};--qaid-negative:${negativeColor};--qaid-marker:${markerColor};--qaid-marker-text:${markerTextColor};--qaid-btn-size:${btnSize}px;--qaid-icon-size:${iconSize}px;--qaid-modal-width:${modalWidth}px;--qaid-backdrop-opacity:${backdropOpacity};--qaid-font-family:${fontFamily};--qaid-font-size:${fontSize}px}`;

  // Default button styles (always included - themed embeds use custom classes so these won't apply)
  const buttonStyles = `.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s}.qaid-btn:hover{transform:scale(1.05)}.qaid-btn-up:hover{background:var(--qaid-positive);color:#fff}.qaid-btn-down:hover{background:var(--qaid-negative);color:#fff}.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}`;

  const style = document.createElement("style");
  style.id = "qaid-styles";
  style.textContent = cssVars + baseStyles + buttonStyles;
  document.head.appendChild(style);
}

export function removeStyles(): void {
  const style = document.getElementById("qaid-styles");
  if (style) {
    style.remove();
    stylesInjected = false;
  }
}
