import { describe, it, expect, vi, afterEach } from "vitest";
import {
  mapRectToFrame,
  drawRedactedFrame,
  buildRedactedStream,
} from "./video-redaction";

const rect = (
  left: number,
  top: number,
  width: number,
  height: number
): DOMRect =>
  ({
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    x: left,
    y: top,
    toJSON: () => ({}),
  }) as DOMRect;

const elementAt = (r: DOMRect): Element =>
  ({ getBoundingClientRect: () => r }) as unknown as Element;

describe("mapRectToFrame", () => {
  it("scales a viewport rect into frame pixels", () => {
    expect(mapRectToFrame(rect(100, 50, 200, 80), 2, 2, 2560, 1440)).toEqual({
      x: 200,
      y: 100,
      w: 400,
      h: 160,
    });
  });

  it("clamps a rect that overhangs the frame edges", () => {
    // Overhangs left (−50) and would extend to 50; clamped to [0, 50].
    expect(mapRectToFrame(rect(-50, 10, 100, 40), 1, 1, 1000, 1000)).toEqual({
      x: 0,
      y: 10,
      w: 50,
      h: 40,
    });
  });

  it("returns null for a rect scrolled fully out of view", () => {
    expect(mapRectToFrame(rect(0, -200, 80, 50), 1, 1, 1000, 1000)).toBeNull();
  });

  it("returns null for a zero-area rect", () => {
    expect(mapRectToFrame(rect(10, 10, 0, 40), 1, 1, 1000, 1000)).toBeNull();
  });
});

describe("drawRedactedFrame", () => {
  const makeCtx = () => ({
    drawImage: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    fillRect: vi.fn(),
    filter: "",
    fillStyle: "",
  });

  it("draws the base frame then blurs each visible element region", () => {
    const ctx = makeCtx();
    const W = window.innerWidth;
    const H = window.innerHeight;
    const el = elementAt(rect(10, 20, 100, 50));
    const video = {} as CanvasImageSource;

    drawRedactedFrame(ctx as unknown as CanvasRenderingContext2D, video, [el], W, H, 12, true);

    // Base frame first.
    expect(ctx.drawImage).toHaveBeenNthCalledWith(1, video, 0, 0, W, H);
    // Region re-sampled + blurred (scale 1 since frame == viewport).
    expect(ctx.filter).toBe("blur(12px)");
    expect(ctx.drawImage).toHaveBeenNthCalledWith(2, video, 10, 20, 100, 50, 10, 20, 100, 50);
    expect(ctx.save).toHaveBeenCalledTimes(1);
    expect(ctx.restore).toHaveBeenCalledTimes(1);
  });

  it("falls back to a solid fill when the context has no blur filter", () => {
    const ctx = makeCtx();
    const W = window.innerWidth;
    const H = window.innerHeight;
    const el = elementAt(rect(10, 20, 100, 50));

    drawRedactedFrame(ctx as unknown as CanvasRenderingContext2D, {} as CanvasImageSource, [el], W, H, 12, false);

    expect(ctx.drawImage).toHaveBeenCalledTimes(1); // base only
    expect(ctx.fillRect).toHaveBeenCalledWith(10, 20, 100, 50);
  });

  it("skips elements scrolled out of view", () => {
    const ctx = makeCtx();
    const W = window.innerWidth;
    const H = window.innerHeight;
    const el = elementAt(rect(0, -H - 100, 80, 40));

    drawRedactedFrame(ctx as unknown as CanvasRenderingContext2D, {} as CanvasImageSource, [el], W, H, 12, true);

    expect(ctx.drawImage).toHaveBeenCalledTimes(1); // base only, no region
    expect(ctx.save).not.toHaveBeenCalled();
  });
});

describe("buildRedactedStream", () => {
  interface MockVideo {
    muted: boolean;
    playsInline: boolean;
    srcObject: unknown;
    videoWidth: number;
    videoHeight: number;
    play: ReturnType<typeof vi.fn>;
    pause: ReturnType<typeof vi.fn>;
    addEventListener: (type: string, cb: () => void) => void;
  }

  function makeVideo(): MockVideo {
    return {
      muted: false,
      playsInline: false,
      srcObject: null,
      videoWidth: 1280,
      videoHeight: 800,
      play: vi.fn().mockResolvedValue(undefined),
      pause: vi.fn(),
      addEventListener: vi.fn(),
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

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  const displayStream = {} as MediaStream;

  it("returns null when canvas.captureStream is unavailable", async () => {
    stubElements({ getContext: vi.fn() }, makeVideo());
    expect(await buildRedactedStream(displayStream, [])).toBeNull();
  });

  it("returns null when a 2D context can't be obtained", async () => {
    stubElements({ captureStream: vi.fn(), getContext: vi.fn(() => null) }, makeVideo());
    expect(await buildRedactedStream(displayStream, [])).toBeNull();
  });

  it("builds a canvas stream, sizes it to the frame, and tears down on stop", async () => {
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 7));
    const cancelRaf = vi.fn();
    vi.stubGlobal("cancelAnimationFrame", cancelRaf);

    const ctx = { drawImage: vi.fn(), save: vi.fn(), restore: vi.fn(), fillRect: vi.fn(), filter: "", fillStyle: "" };
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

    const el = elementAt(rect(10, 20, 100, 50));
    const result = await buildRedactedStream(displayStream, [el], { frameRate: 15 });

    expect(result).not.toBeNull();
    expect(video.srcObject).toBe(displayStream);
    expect(canvas.width).toBe(1280);
    expect(canvas.height).toBe(800);
    expect(canvas.captureStream).toHaveBeenCalledWith(15);
    expect(ctx.drawImage).toHaveBeenCalled(); // first frame drawn
    expect(result!.stream).toBe(canvasStream as unknown as MediaStream);

    result!.stop();
    expect(cancelRaf).toHaveBeenCalledWith(7);
    expect(track.stop).toHaveBeenCalled();
    expect(video.pause).toHaveBeenCalled();
    expect(video.srcObject).toBeNull();
  });
});
