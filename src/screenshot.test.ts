import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { captureScreenshot } from "./screenshot";

describe("captureScreenshot", () => {
  let mockTrack: {
    stop: ReturnType<typeof vi.fn>;
    getSettings: ReturnType<typeof vi.fn>;
  };
  let mockStream: {
    getVideoTracks: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    mockTrack = {
      stop: vi.fn(),
      getSettings: vi.fn().mockReturnValue({ width: 1920, height: 1080 }),
    };
    mockStream = {
      getVideoTracks: vi.fn().mockReturnValue([mockTrack]),
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return null when getDisplayMedia is not available", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {},
      writable: true,
      configurable: true,
    });

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = await captureScreenshot();

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith("Screen Capture API not available");
  });

  it("should return null when mediaDevices is undefined", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = await captureScreenshot();

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith("Screen Capture API not available");
  });

  it("should return null when canvas context is unavailable", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    // Mock video element behavior
    const mockVideo = document.createElement("video");
    Object.defineProperty(mockVideo, "videoWidth", { value: 1920, configurable: true });
    Object.defineProperty(mockVideo, "videoHeight", { value: 1080, configurable: true });
    Object.defineProperty(mockVideo, "readyState", { value: 4, configurable: true });

    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        // Trigger onloadedmetadata synchronously when srcObject is set
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 1920, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 1080, configurable: true });
        Object.defineProperty(video, "readyState", { value: 4, configurable: true });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        // Override getContext to return null
        vi.spyOn(canvas, "getContext").mockReturnValue(null);
        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot();

    expect(result).toBeNull();
    expect(mockTrack.stop).toHaveBeenCalled();
  });

  it("should return null and warn when getDisplayMedia throws", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockRejectedValue(new Error("Permission denied")),
      },
      writable: true,
      configurable: true,
    });

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = await captureScreenshot();

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith("Screenshot capture failed:", expect.any(Error));
  });

  it("should request screen capture with correct options", async () => {
    const mockGetDisplayMedia = vi.fn().mockResolvedValue(mockStream);
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: mockGetDisplayMedia,
      },
      writable: true,
      configurable: true,
    });

    // Create a mock canvas with toDataURL
    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 1920, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 1080, configurable: true });
        Object.defineProperty(video, "readyState", { value: 4, configurable: true });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        const mockCtx = {
          drawImage: vi.fn(),
        } as unknown as CanvasRenderingContext2D;
        vi.spyOn(canvas, "getContext").mockReturnValue(mockCtx);
        vi.spyOn(canvas, "toDataURL").mockReturnValue("data:image/webp;base64,abc123");
        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot({ quality: 0.9, maxWidth: 800, maxHeight: 600 });

    expect(mockGetDisplayMedia).toHaveBeenCalledWith(
      expect.objectContaining({
        preferCurrentTab: true,
        video: expect.objectContaining({
          displaySurface: "browser",
        }),
      })
    );
    expect(result).toBe("data:image/webp;base64,abc123");
    expect(mockTrack.stop).toHaveBeenCalled();
  });

  it("should use default options when none provided", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    const origCreateElement = document.createElement.bind(document);
    let canvasToDataURLSpy: ReturnType<typeof vi.fn> | undefined;

    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 1920, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 1080, configurable: true });
        Object.defineProperty(video, "readyState", { value: 4, configurable: true });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        const mockCtx = {
          drawImage: vi.fn(),
        } as unknown as CanvasRenderingContext2D;
        vi.spyOn(canvas, "getContext").mockReturnValue(mockCtx);
        canvasToDataURLSpy = vi.spyOn(canvas, "toDataURL").mockReturnValue("data:image/webp;base64,default");
        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot();

    expect(result).toBe("data:image/webp;base64,default");
    // Default quality is 1.0
    expect(canvasToDataURLSpy).toHaveBeenCalledWith("image/webp", 1.0);
  });

  it("should scale down when source dimensions exceed max", async () => {
    // Track returns large dimensions
    mockTrack.getSettings.mockReturnValue({ width: 3840, height: 2160 });

    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    const origCreateElement = document.createElement.bind(document);
    let canvasWidth = 0;
    let canvasHeight = 0;

    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 3840, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 2160, configurable: true });
        Object.defineProperty(video, "readyState", { value: 4, configurable: true });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        const mockCtx = {
          drawImage: vi.fn(),
        } as unknown as CanvasRenderingContext2D;
        vi.spyOn(canvas, "getContext").mockReturnValue(mockCtx);
        vi.spyOn(canvas, "toDataURL").mockReturnValue("data:image/webp;base64,scaled");

        // Track canvas dimensions being set
        const originalWidthDesc = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype, "width");
        Object.defineProperty(canvas, "width", {
          get() { return canvasWidth; },
          set(v: number) { canvasWidth = v; },
          configurable: true,
        });
        Object.defineProperty(canvas, "height", {
          get() { return canvasHeight; },
          set(v: number) { canvasHeight = v; },
          configurable: true,
        });

        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot({ maxWidth: 1280, maxHeight: 800 });

    expect(result).toBe("data:image/webp;base64,scaled");
    // 3840x2160 scaled down: scale = min(1280/3840, 800/2160, 1) = min(0.333, 0.370, 1) = 0.333
    // width = round(3840 * 0.333) = 1280, height = round(2160 * 0.333) = 720
    expect(canvasWidth).toBeLessThanOrEqual(1280);
    expect(canvasHeight).toBeLessThanOrEqual(800);
  });

  it("should poll via requestAnimationFrame until video readyState is sufficient", async () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    const origCreateElement = document.createElement.bind(document);
    let readyStateCalls = 0;

    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 1920, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 1080, configurable: true });
        // First two reads return 0 (not ready), then 4 (ready)
        Object.defineProperty(video, "readyState", {
          get() {
            readyStateCalls++;
            return readyStateCalls < 3 ? 0 : 4;
          },
          configurable: true,
        });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        vi.spyOn(canvas, "getContext").mockReturnValue({
          drawImage: vi.fn(),
        } as unknown as CanvasRenderingContext2D);
        vi.spyOn(canvas, "toDataURL").mockReturnValue("data:image/webp;base64,polled");
        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot();
    expect(result).toBe("data:image/webp;base64,polled");
    expect(readyStateCalls).toBeGreaterThanOrEqual(3);
  });

  it("should use video dimensions as fallback when track settings have no width/height", async () => {
    mockTrack.getSettings.mockReturnValue({});

    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    const origCreateElement = document.createElement.bind(document);

    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "video") {
        const video = origCreateElement("video") as HTMLVideoElement;
        Object.defineProperty(video, "videoWidth", { value: 800, configurable: true });
        Object.defineProperty(video, "videoHeight", { value: 600, configurable: true });
        Object.defineProperty(video, "readyState", { value: 4, configurable: true });
        Object.defineProperty(video, "play", { value: vi.fn(), configurable: true });
        Object.defineProperty(video, "srcObject", {
          set(_val: unknown) {
            setTimeout(() => {
              if (video.onloadedmetadata) {
                (video.onloadedmetadata as () => void)();
              }
            }, 0);
          },
          configurable: true,
        });
        return video;
      }
      if (tag === "canvas") {
        const canvas = origCreateElement("canvas") as HTMLCanvasElement;
        const mockCtx = {
          drawImage: vi.fn(),
        } as unknown as CanvasRenderingContext2D;
        vi.spyOn(canvas, "getContext").mockReturnValue(mockCtx);
        vi.spyOn(canvas, "toDataURL").mockReturnValue("data:image/webp;base64,fallback");
        return canvas;
      }
      return origCreateElement(tag);
    });

    const result = await captureScreenshot();
    expect(result).toBe("data:image/webp;base64,fallback");
  });
});
