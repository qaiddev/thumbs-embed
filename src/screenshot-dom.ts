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
    html2canvas?: (
      element: HTMLElement,
      options?: Record<string, unknown>
    ) => Promise<HTMLCanvasElement>;
  }
}

const SCRIPT_URL = "https://qaid.dev/lib/html2canvas.min.js";
const LOAD_TIMEOUT = 10_000;
const POLL_INTERVAL = 50;

let loadPromise: Promise<boolean> | null = null;

/**
 * Check if DOM screenshot capture is supported
 * Requires canvas and basic DOM APIs
 */
export function isDomScreenshotSupported(): boolean {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return false;
  }
  // Check canvas support
  const canvas = document.createElement("canvas");
  return typeof canvas.getContext === "function" && !!canvas.getContext("2d");
}

/**
 * Load html2canvas script if not already loaded
 */
function loadHtml2Canvas(): Promise<boolean> {
  if (window.html2canvas) return Promise.resolve(true);

  if (loadPromise) return loadPromise;

  loadPromise = new Promise<boolean>((resolve) => {
    // Check if script tag already exists
    const existing = document.querySelector(
      `script[src="${SCRIPT_URL}"]`
    ) as HTMLScriptElement | null;

    if (!existing) {
      const script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }

    // Poll for window.html2canvas availability
    const start = Date.now();
    const poll = () => {
      if (window.html2canvas) {
        resolve(true);
        return;
      }
      if (Date.now() - start > LOAD_TIMEOUT) {
        loadPromise = null;
        resolve(false);
        return;
      }
      setTimeout(poll, POLL_INTERVAL);
    };
    poll();
  });

  return loadPromise;
}

/**
 * Capture a screenshot of the current page using html2canvas
 * Returns a base64-encoded WebP data URL, or null on failure
 */
export async function captureDomScreenshot(
  options: DomScreenshotOptions = {}
): Promise<string | null> {
  const { quality = 0.8, maxWidth = 1280, maxHeight = 800 } = options;

  try {
    const loaded = await loadHtml2Canvas();
    if (!loaded || !window.html2canvas) {
      console.warn("html2canvas failed to load");
      return null;
    }

    const canvas = await window.html2canvas(document.body, {
      useCORS: true,
      allowTaint: false,
      logging: false,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      x: window.scrollX,
      y: window.scrollY,
      ignoreElements: (el: Element) => {
        // Hide all qaid elements from the screenshot
        if (el instanceof HTMLElement) {
          return (
            el.classList.contains("qaid-buttons") ||
            el.classList.contains("qaid-targeting-overlay") ||
            el.classList.contains("qaid-modal-container") ||
            el.classList.contains("qaid-bottom-sheet") ||
            el.classList.contains("qaid-backdrop") ||
            el.classList.contains("qaid-selected-marker") ||
            el.classList.contains("qaid-tooltip-text") ||
            el.classList.contains("qaid-recording-indicator") ||
            el.classList.contains("qaid-video-preview") ||
            el.className?.toString().startsWith?.("qaid-")
          );
        }
        return false;
      },
    });

    // Scale down if needed
    const srcWidth = canvas.width;
    const srcHeight = canvas.height;
    const scale = Math.min(maxWidth / srcWidth, maxHeight / srcHeight, 1);

    if (scale < 1) {
      const scaledWidth = Math.round(srcWidth * scale);
      const scaledHeight = Math.round(srcHeight * scale);

      const scaledCanvas = document.createElement("canvas");
      scaledCanvas.width = scaledWidth;
      scaledCanvas.height = scaledHeight;

      const ctx = scaledCanvas.getContext("2d");
      if (!ctx) return null;

      ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight);
      return scaledCanvas.toDataURL("image/webp", quality);
    }

    return canvas.toDataURL("image/webp", quality);
  } catch (error) {
    console.warn("DOM screenshot capture failed:", error);
    return null;
  }
}
