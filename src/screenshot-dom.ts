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

type Html2Canvas = (
  element: HTMLElement,
  options?: Record<string, unknown>
) => Promise<HTMLCanvasElement>;

/**
 * html2canvas ships inside the package: a lazy chunk of the ESM build,
 * inlined in the UMD bundle. It used to be fetched from qaid.dev at run time,
 * which put a third-party script on every partner page that no pinned
 * version or `integrity` attribute could check.
 */
let loadPromise: Promise<Html2Canvas | null> | null = null;

type Html2CanvasModule = { default: Html2Canvas };

const realImport = (): Promise<Html2CanvasModule> =>
  import("html2canvas") as unknown as Promise<Html2CanvasModule>;

let importHtml2Canvas = realImport;

/** @internal Test seam: swap the html2canvas import. Pass null to restore it. */
export function _setHtml2CanvasImporter(fn: (() => Promise<Html2CanvasModule>) | null): void {
  importHtml2Canvas = fn ?? realImport;
  loadPromise = null;
}

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

/** Load the bundled html2canvas; null when its chunk fails to load. */
function loadHtml2Canvas(): Promise<Html2Canvas | null> {
  if (loadPromise) return loadPromise;
  loadPromise = importHtml2Canvas().then(
    (mod) => mod.default,
    () => {
      // A failed chunk fetch: let the next capture try again.
      loadPromise = null;
      return null;
    }
  );
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
    const html2canvas = await loadHtml2Canvas();
    if (!html2canvas) {
      console.warn("html2canvas failed to load");
      return null;
    }

    const canvas = await html2canvas(document.body, {
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
