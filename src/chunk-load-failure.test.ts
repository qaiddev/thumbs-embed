/**
 * Every lazily-split feature chunk failing to load.
 *
 * The embed pre-warms its chunks (on idle, on hover, on the thumb click) and
 * swallows a failed pre-warm, because the real use loads the chunk again on
 * demand. A CDN hiccup or a blocked chunk must never surface as an unhandled
 * rejection on the host page, and must never leave the visitor stuck. Here
 * every chunk module throws when imported.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("./recording", () => {
  throw new Error("recording chunk failed");
});
vi.mock("./video-capture", () => {
  throw new Error("video chunk failed");
});
vi.mock("./screenshot", () => {
  throw new Error("screenshot chunk failed");
});
vi.mock("./screenshot-dom", () => {
  throw new Error("screenshot-dom chunk failed");
});
vi.mock("./annotate", () => {
  throw new Error("annotate chunk failed");
});
vi.mock("./modal", () => {
  throw new Error("modal chunk failed");
});
vi.mock("./targeting", () => {
  throw new Error("targeting chunk failed");
});

import { QaidFeedback } from "./embed";

/** Let the rejected dynamic imports settle (and their .catch handlers run). */
async function settle(): Promise<void> {
  for (let i = 0; i < 5; i++) await new Promise((r) => setTimeout(r, 0));
}

function mainRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed]")!.shadowRoot!;
}

describe("feature chunks that fail to load", () => {
  let embed: QaidFeedback | null = null;

  beforeEach(() => {
    document.body.innerHTML = "";
    // Record button is only drawn when screen recording is supported.
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
    embed = null;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("swallows failed idle preloads of the video, screenshot and annotate chunks", async () => {
    // Run the idle callback straight away so the preloads actually fire.
    const ric = vi.fn((cb: () => void) => {
      cb();
      return 1;
    });
    vi.stubGlobal("requestIdleCallback", ric);
    vi.stubGlobal("cancelIdleCallback", vi.fn());

    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      captureScreenshot: true,
      captureVideo: true,
    });
    expect(ric).toHaveBeenCalledTimes(1);
    await settle();

    // A second warm-up is a no-op: hovering the record button after the idle
    // preload, and a repeat screenshot preload.
    const record = mainRoot().querySelector<HTMLButtonElement>(".qaid-btn-record")!;
    record.dispatchEvent(new MouseEvent("mouseenter"));
    (embed as unknown as { prewarmScreenshot(): void }).prewarmScreenshot();
    await settle();

    // The widget is still up and usable.
    expect(mainRoot().querySelector(".qaid-btn-up")).not.toBeNull();
  });

  it("swallows a failed targeting preload on hover and still shows the tooltip", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", singleButton: true });
    const button = mainRoot().querySelector<HTMLButtonElement>(".qaid-btn-feedback")!;
    const tooltip = mainRoot().querySelector(".qaid-tooltip-text")!;

    button.dispatchEvent(new MouseEvent("mouseenter"));
    await settle();
    expect(tooltip.classList.contains("qaid-tooltip-visible")).toBe(true);

    button.dispatchEvent(new MouseEvent("mouseleave"));
    expect(tooltip.classList.contains("qaid-tooltip-visible")).toBe(false);
  });

  it("does not preload targeting on hover when targeting is skipped", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    const up = mainRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!;

    up.dispatchEvent(new MouseEvent("mouseenter"));
    await settle();

    expect((embed as unknown as { targetingPrewarmed: boolean }).targetingPrewarmed).toBe(false);
  });

  it("thanks the visitor and resets when the message modal chunk cannot load", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 1 }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    // Reject the on-demand load directly. The click also pre-warms the modal
    // chunk and swallows that failure, and vitest never settles a second
    // import of a module whose mock factory threw (a browser rejects again).
    vi.spyOn(embed as unknown as { ensureModal(): Promise<unknown> }, "ensureModal").mockRejectedValue(
      new Error("modal chunk failed")
    );
    mainRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

    await vi.waitFor(() =>
      expect(errorSpy).toHaveBeenCalledWith("Failed to open the feedback modal:", expect.any(Error))
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    // Announced in whichever root hosts the live regions by now.
    const roots = [mainRoot(), document.querySelector("[data-qaid-embed-overlay]")?.shadowRoot];
    const alerts = roots.map((r) => r?.querySelector('[role="alert"]')?.textContent ?? "");
    expect(alerts).toContain("Thank you for your feedback!");
    expect((embed as unknown as { state: string }).state).toBe("IDLE");
  });

  it("gives the targeting controller the embed's live state", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    const host = (embed as unknown as { makeTargetingHost(): { state: string } }).makeTargetingHost();

    expect(host.state).toBe("IDLE");
    (embed as unknown as { state: string }).state = "TARGETING";
    expect(host.state).toBe("TARGETING");
  });
});
