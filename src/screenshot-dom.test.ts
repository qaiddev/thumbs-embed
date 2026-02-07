import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { isDomScreenshotSupported, captureDomScreenshot } from "./screenshot-dom";

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

    // Mock html2canvas on window
    (window as Record<string, unknown>).html2canvas = vi
      .fn()
      .mockResolvedValue(mockCanvas);
  });

  afterEach(() => {
    delete (window as Record<string, unknown>).html2canvas;
    vi.restoreAllMocks();
  });

  it("should call html2canvas with document.body", async () => {
    const result = await captureDomScreenshot();

    expect(window.html2canvas).toHaveBeenCalledWith(
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

  it("should return null if html2canvas is not available and fails to load", async () => {
    vi.useFakeTimers();
    delete (window as Record<string, unknown>).html2canvas;

    // Re-import to get fresh module state (no cached loadPromise)
    vi.resetModules();
    const { captureDomScreenshot: freshCapture } = await import("./screenshot-dom");

    // Mock appendChild to prevent actual script injection
    vi.spyOn(document.head, "appendChild").mockImplementation(
      () => document.createElement("script")
    );

    const promise = freshCapture();

    // Fast-forward past the 10s load timeout
    await vi.advanceTimersByTimeAsync(11_000);

    const result = await promise;
    expect(result).toBeNull();

    vi.useRealTimers();
  });

  it("should filter qaid elements via ignoreElements", async () => {
    let ignoreElementsFn: ((el: Element) => boolean) | undefined;

    (window as Record<string, unknown>).html2canvas = vi
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
  });

  it("should return null on html2canvas error", async () => {
    (window as Record<string, unknown>).html2canvas = vi
      .fn()
      .mockRejectedValue(new Error("render failed"));

    const result = await captureDomScreenshot();
    expect(result).toBeNull();
  });

  it("should use default options when none provided", async () => {
    await captureDomScreenshot();
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith("image/webp", 0.8);
  });
});
