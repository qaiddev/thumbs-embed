import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { QaidFeedback } from "./embed";

describe("preload-on-intent", () => {
  let ric: ReturnType<typeof vi.fn>;
  let cancelRic: ReturnType<typeof vi.fn>;
  let embed: QaidFeedback | undefined;

  beforeEach(() => {
    document.body.innerHTML = "";
    // Spy on idle scheduling; the callback is never invoked, so no chunk is
    // actually imported — we're asserting the scheduling + cleanup only.
    ric = vi.fn(() => 42);
    cancelRic = vi.fn();
    vi.stubGlobal("requestIdleCallback", ric);
    vi.stubGlobal("cancelIdleCallback", cancelRic);
    // Make video "supported" for the captureVideo path.
    Object.defineProperty(navigator, "mediaDevices", {
      value: { getDisplayMedia: vi.fn() },
      writable: true,
      configurable: true,
    });
    (globalThis as Record<string, unknown>).MediaRecorder = class {
      static isTypeSupported(): boolean {
        return true;
      }
    };
  });

  afterEach(() => {
    embed?.destroy();
    embed = undefined;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("schedules an idle preload when captureScreenshot is set", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", captureScreenshot: true });
    expect(ric).toHaveBeenCalledTimes(1);
  });

  it("schedules an idle preload when captureVideo is supported", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", captureVideo: true });
    expect(ric).toHaveBeenCalledTimes(1);
  });

  it("does not schedule a preload for a plain thumbs embed", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    expect(ric).not.toHaveBeenCalled();
  });

  it("cancels the pending idle preload on destroy", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", captureScreenshot: true });
    embed.destroy();
    embed = undefined;
    expect(cancelRic).toHaveBeenCalledWith(42);
  });
});
