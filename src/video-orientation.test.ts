import { describe, it, expect, vi, afterEach } from "vitest";
import {
  isIOSDevice,
  computeOrientationTransform,
  drawRotatedFrame,
  buildOrientationCorrectedStream,
  type OrientationTransform,
} from "./video-orientation";

function setNavigator(props: {
  userAgent?: string;
  platform?: string;
  maxTouchPoints?: number;
}): void {
  for (const [key, value] of Object.entries(props)) {
    Object.defineProperty(navigator, key, { value, configurable: true });
  }
}

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("isIOSDevice", () => {
  it("detects iPhone/iPad/iPod from the user agent", () => {
    setNavigator({
      userAgent: "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)",
      platform: "iPad",
      maxTouchPoints: 5,
    });
    expect(isIOSDevice()).toBe(true);
  });

  it("detects iPadOS 13+ masquerading as MacIntel", () => {
    setNavigator({
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)",
      platform: "MacIntel",
      maxTouchPoints: 5,
    });
    expect(isIOSDevice()).toBe(true);
  });

  it("returns false for a real desktop", () => {
    setNavigator({
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)",
      platform: "MacIntel",
      maxTouchPoints: 0,
    });
    expect(isIOSDevice()).toBe(false);
  });
});

describe("computeOrientationTransform", () => {
  it("does not rotate when frame and viewport share orientation", () => {
    // both landscape
    expect(computeOrientationTransform(1280, 800, 1024, 768, 0)).toEqual({
      width: 1280,
      height: 800,
      rotate: 0,
    });
    // both portrait
    expect(computeOrientationTransform(800, 1280, 768, 1024, 0)).toEqual({
      width: 800,
      height: 1280,
      rotate: 0,
    });
  });

  it("rotates 90° clockwise when orientations disagree (angle != 270)", () => {
    // portrait frame, landscape viewport
    expect(computeOrientationTransform(800, 1280, 1024, 768, 90)).toEqual({
      width: 1280,
      height: 800,
      rotate: 90,
    });
  });

  it("rotates -90° for landscape-secondary (angle 270)", () => {
    expect(computeOrientationTransform(800, 1280, 1024, 768, 270)).toEqual({
      width: 1280,
      height: 800,
      rotate: -90,
    });
  });
});

describe("drawRotatedFrame", () => {
  const makeCtx = () => ({
    drawImage: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
  });
  const src = {} as CanvasImageSource;

  it("draws straight for rotate 0 without transforming the context", () => {
    const ctx = makeCtx();
    const t: OrientationTransform = { width: 100, height: 50, rotate: 0 };
    drawRotatedFrame(ctx as unknown as CanvasRenderingContext2D, src, t);
    expect(ctx.drawImage).toHaveBeenCalledWith(src, 0, 0, 100, 50);
    expect(ctx.save).not.toHaveBeenCalled();
    expect(ctx.rotate).not.toHaveBeenCalled();
  });

  it("rotates 90° clockwise", () => {
    const ctx = makeCtx();
    const t: OrientationTransform = { width: 50, height: 100, rotate: 90 };
    drawRotatedFrame(ctx as unknown as CanvasRenderingContext2D, src, t);
    expect(ctx.save).toHaveBeenCalled();
    expect(ctx.translate).toHaveBeenCalledWith(50, 0);
    expect(ctx.rotate).toHaveBeenCalledWith(Math.PI / 2);
    // source drawn at natural (swapped-back) extents
    expect(ctx.drawImage).toHaveBeenCalledWith(src, 0, 0, 100, 50);
    expect(ctx.restore).toHaveBeenCalled();
  });

  it("rotates -90° counter-clockwise", () => {
    const ctx = makeCtx();
    const t: OrientationTransform = { width: 50, height: 100, rotate: -90 };
    drawRotatedFrame(ctx as unknown as CanvasRenderingContext2D, src, t);
    expect(ctx.translate).toHaveBeenCalledWith(0, 100);
    expect(ctx.rotate).toHaveBeenCalledWith(-Math.PI / 2);
    expect(ctx.drawImage).toHaveBeenCalledWith(src, 0, 0, 100, 50);
    expect(ctx.restore).toHaveBeenCalled();
  });
});

describe("buildOrientationCorrectedStream", () => {
  interface MockVideo {
    muted: boolean;
    playsInline: boolean;
    srcObject: unknown;
    videoWidth: number;
    videoHeight: number;
    play: ReturnType<typeof vi.fn>;
    pause: ReturnType<typeof vi.fn>;
    addEventListener: (type: string, cb: () => void) => void;
    _fire: (type: string) => void;
  }

  function makeVideo(
    overrides: Partial<{ videoWidth: number; play: ReturnType<typeof vi.fn> }> = {}
  ): MockVideo {
    const listeners: Record<string, Array<() => void>> = {};
    return {
      muted: false,
      playsInline: false,
      srcObject: null,
      videoWidth: overrides.videoWidth ?? 1280,
      videoHeight: 800,
      play: overrides.play ?? vi.fn().mockResolvedValue(undefined),
      pause: vi.fn(),
      addEventListener(type: string, cb: () => void) {
        (listeners[type] ||= []).push(cb);
      },
      _fire(type: string) {
        (listeners[type] || []).forEach((cb) => cb());
      },
    };
  }

  function stubElements(canvas: unknown, video: unknown): void {
    const real = document.createElement.bind(document);
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "canvas") return canvas as HTMLCanvasElement;
      if (tag === "video") return video as HTMLVideoElement;
      return real(tag);
    });
  }

  const displayStream = {} as MediaStream;

  it("returns null when canvas.captureStream is unavailable", async () => {
    stubElements({ getContext: vi.fn() }, makeVideo());
    expect(await buildOrientationCorrectedStream(displayStream)).toBeNull();
  });

  it("returns null when a 2D context can't be obtained", async () => {
    stubElements(
      { captureStream: vi.fn(), getContext: vi.fn(() => null) },
      makeVideo()
    );
    expect(await buildOrientationCorrectedStream(displayStream)).toBeNull();
  });

  it("builds an upright canvas stream and tears it down on stop", async () => {
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    const cancelRaf = vi.fn();
    vi.stubGlobal("cancelAnimationFrame", cancelRaf);
    Object.defineProperty(screen, "orientation", {
      value: { angle: 90 },
      configurable: true,
    });

    const ctx = { drawImage: vi.fn(), save: vi.fn(), restore: vi.fn(), translate: vi.fn(), rotate: vi.fn() };
    const track = { stop: vi.fn() };
    const canvasStream = { getTracks: () => [track] };
    const canvas = {
      width: 0,
      height: 0,
      getContext: vi.fn(() => ctx),
      captureStream: vi.fn(() => canvasStream),
    };
    const video = makeVideo();
    stubElements(canvas, video);

    const result = await buildOrientationCorrectedStream(displayStream, 15);
    expect(result).not.toBeNull();
    expect(video.srcObject).toBe(displayStream);
    expect(canvas.captureStream).toHaveBeenCalledWith(15);
    expect(ctx.drawImage).toHaveBeenCalled(); // first frame drawn
    expect(result!.stream).toBe(canvasStream as unknown as MediaStream);

    result!.stop();
    expect(cancelRaf).toHaveBeenCalledWith(1);
    expect(track.stop).toHaveBeenCalled();
    expect(video.pause).toHaveBeenCalled();
    expect(video.srcObject).toBeNull();
  });

  it("waits for loadedmetadata when dimensions aren't ready, and survives play() rejection", async () => {
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 0));
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    // No screen.orientation → getScreenAngle falls back to 0.
    Object.defineProperty(screen, "orientation", {
      value: undefined,
      configurable: true,
    });

    const ctx = { drawImage: vi.fn(), save: vi.fn(), restore: vi.fn(), translate: vi.fn(), rotate: vi.fn() };
    const canvasStream = { getTracks: () => [] };
    const canvas = {
      width: 0,
      height: 0,
      getContext: vi.fn(() => ctx),
      captureStream: vi.fn(() => canvasStream),
    };
    const video = makeVideo({
      videoWidth: 0,
      play: vi.fn().mockRejectedValue(new Error("no user gesture")),
    });
    stubElements(canvas, video);

    const promise = buildOrientationCorrectedStream(displayStream);
    // Dimensions arrive asynchronously.
    video.videoWidth = 1280;
    video._fire("loadedmetadata");

    const result = await promise;
    expect(result).not.toBeNull();
    // rafId was 0 (falsy) → stop() must not call cancelAnimationFrame.
    result!.stop();
    expect(video.pause).toHaveBeenCalled();
  });
});
