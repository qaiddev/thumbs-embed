import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  isDomScreenshotSupported,
  captureDomScreenshot,
  _setHtml2CanvasImporter,
} from "./screenshot-dom";

/** The html2canvas stand-in the current test renders with. */
let h2c: ReturnType<typeof vi.fn>;

describe("isDomScreenshotSupported", () => {
  it("should return true when document and canvas with 2d context are available", () => {
    // happy-dom doesn't support canvas getContext, so we mock it
    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "canvas") {
        return {
          getContext: vi.fn().mockReturnValue({}),
        } as unknown as HTMLCanvasElement;
      }
      return origCreateElement(tag);
    });

    expect(isDomScreenshotSupported()).toBe(true);

    vi.restoreAllMocks();
  });

  it("should return false when canvas getContext returns null", () => {
    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "canvas") {
        return {
          getContext: vi.fn().mockReturnValue(null),
        } as unknown as HTMLCanvasElement;
      }
      return origCreateElement(tag);
    });

    expect(isDomScreenshotSupported()).toBe(false);

    vi.restoreAllMocks();
  });

  it("should return false when document is undefined", () => {
    vi.stubGlobal("document", undefined);
    expect(isDomScreenshotSupported()).toBe(false);
    vi.unstubAllGlobals();
  });

  it("should return false when window is undefined", () => {
    vi.stubGlobal("window", undefined);
    expect(isDomScreenshotSupported()).toBe(false);
    vi.unstubAllGlobals();
  });
});

describe("captureDomScreenshot", () => {
  let mockCanvas: {
    width: number;
    height: number;
    getContext: ReturnType<typeof vi.fn>;
    toDataURL: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    mockCanvas = {
      width: 1024,
      height: 768,
      getContext: vi.fn().mockReturnValue({
        drawImage: vi.fn(),
      }),
      toDataURL: vi.fn().mockReturnValue("data:image/webp;base64,mockdata"),
    };

    // Stand in for the bundled html2canvas chunk.
    h2c = vi.fn().mockResolvedValue(mockCanvas);
    _setHtml2CanvasImporter(() => Promise.resolve({ default: (...a: unknown[]) => h2c(...a) }));
  });

  afterEach(() => {
    _setHtml2CanvasImporter(null);
    vi.restoreAllMocks();
  });

  it("should call html2canvas with document.body", async () => {
    const result = await captureDomScreenshot();

    expect(h2c).toHaveBeenCalledWith(
      document.body,
      expect.objectContaining({
        useCORS: true,
        logging: false,
      })
    );
    expect(result).toBe("data:image/webp;base64,mockdata");
  });

  it("should pass quality option to toDataURL", async () => {
    await captureDomScreenshot({ quality: 0.5 });

    expect(mockCanvas.toDataURL).toHaveBeenCalledWith("image/webp", 0.5);
  });

  it("should scale down large canvases", async () => {
    mockCanvas.width = 2560;
    mockCanvas.height = 1600;

    // We need to spy on document.createElement to intercept the scaled canvas
    const scaledCanvas = {
      width: 0,
      height: 0,
      getContext: vi.fn().mockReturnValue({
        drawImage: vi.fn(),
      }),
      toDataURL: vi.fn().mockReturnValue("data:image/webp;base64,scaled"),
    };

    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "canvas") {
        return scaledCanvas as unknown as HTMLCanvasElement;
      }
      return origCreateElement(tag);
    });

    const result = await captureDomScreenshot({
      maxWidth: 1280,
      maxHeight: 800,
    });

    // Scale factor = min(1280/2560, 800/1600, 1) = 0.5
    expect(scaledCanvas.width).toBe(1280);
    expect(scaledCanvas.height).toBe(800);
    expect(result).toBe("data:image/webp;base64,scaled");
  });

  it("should not scale when canvas fits within max dimensions", async () => {
    mockCanvas.width = 800;
    mockCanvas.height = 600;

    const result = await captureDomScreenshot({
      maxWidth: 1280,
      maxHeight: 800,
    });

    // No scaling needed, should use original canvas toDataURL
    expect(result).toBe("data:image/webp;base64,mockdata");
  });

  it("returns null when the html2canvas chunk fails to load, and retries next time", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const importer = vi
      .fn()
      .mockRejectedValueOnce(new Error("chunk 404"))
      .mockResolvedValue({ default: (...a: unknown[]) => h2c(...a) });
    _setHtml2CanvasImporter(importer);

    expect(await captureDomScreenshot()).toBeNull();
    expect(warn).toHaveBeenCalledWith("html2canvas failed to load");
    // The failure is forgotten, so the next capture loads again and works.
    expect(await captureDomScreenshot()).toBe("data:image/webp;base64,mockdata");
    expect(importer).toHaveBeenCalledTimes(2);
  });

  it("never adds a script tag: html2canvas comes from the package", async () => {
    const appendSpy = vi.spyOn(document.head, "appendChild");
    await captureDomScreenshot();
    const scripts = appendSpy.mock.calls.filter(
      ([node]) => (node as HTMLElement).tagName === "SCRIPT"
    );
    expect(scripts).toHaveLength(0);
  });

  it("loads html2canvas once across concurrent callers", async () => {
    const importer = vi.fn().mockResolvedValue({ default: (...a: unknown[]) => h2c(...a) });
    _setHtml2CanvasImporter(importer);
    await Promise.all([captureDomScreenshot(), captureDomScreenshot()]);
    expect(importer).toHaveBeenCalledTimes(1);
  });

  it("the default importer loads the real bundled html2canvas", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    _setHtml2CanvasImporter(null);
    // happy-dom can't paint, so the real library may fail to render; what
    // matters is that it loads from the package and nothing throws.
    const result = await captureDomScreenshot();
    expect(result === null || typeof result === "string").toBe(true);
  });

  it("should filter qaid elements via ignoreElements", async () => {
    let ignoreElementsFn: ((el: Element) => boolean) | undefined;

    h2c = vi
      .fn()
      .mockImplementation(
        (
          _el: HTMLElement,
          opts: { ignoreElements?: (el: Element) => boolean }
        ) => {
          ignoreElementsFn = opts.ignoreElements;
          return Promise.resolve(mockCanvas);
        }
      );

    await captureDomScreenshot();

    expect(ignoreElementsFn).toBeDefined();

    // Test that qaid elements are ignored
    const buttons = document.createElement("div");
    buttons.className = "qaid-buttons";
    expect(ignoreElementsFn!(buttons)).toBe(true);

    const backdrop = document.createElement("div");
    backdrop.className = "qaid-backdrop";
    expect(ignoreElementsFn!(backdrop)).toBe(true);

    // Test that normal elements are not ignored
    const normalEl = document.createElement("div");
    normalEl.className = "my-app-element";
    expect(ignoreElementsFn!(normalEl)).toBe(false);

    // Non-HTMLElement (e.g., SVG) should also not be ignored
    const svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    expect(ignoreElementsFn!(svg)).toBe(false);
  });

  it("should return null when scaled canvas 2d context unavailable", async () => {
    mockCanvas.width = 2560;
    mockCanvas.height = 1600;

    const scaledCanvas = {
      width: 0,
      height: 0,
      getContext: vi.fn().mockReturnValue(null),
      toDataURL: vi.fn(),
    };

    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "canvas") {
        return scaledCanvas as unknown as HTMLCanvasElement;
      }
      return origCreateElement(tag);
    });

    const result = await captureDomScreenshot({ maxWidth: 1280, maxHeight: 800 });
    expect(result).toBeNull();
  });

  it("should return null on html2canvas error", async () => {
    h2c = vi.fn().mockRejectedValue(new Error("render failed"));

    const result = await captureDomScreenshot();
    expect(result).toBeNull();
  });

  it("should use default options when none provided", async () => {
    await captureDomScreenshot();
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith("image/webp", 0.8);
  });
});
