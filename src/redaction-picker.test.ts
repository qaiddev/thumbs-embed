import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { QaidFeedback } from "./embed";

function overlayRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed-overlay]") as HTMLElement;
  return host.shadowRoot!;
}

/** The picker element, or null if no overlay host / picker exists. */
function pickerEl(): Element | null {
  const host = document.querySelector("[data-qaid-embed-overlay]");
  return host?.shadowRoot?.querySelector(".qaid-redact-picker") ?? null;
}

function recordButton(): HTMLButtonElement {
  const host = document.querySelector("[data-qaid-embed]") as HTMLElement;
  return host.shadowRoot!.querySelector<HTMLButtonElement>(".qaid-btn-record")!;
}

describe("video redaction picker (pre-recording)", () => {
  let embed: QaidFeedback;

  beforeEach(() => {
    document.body.innerHTML = "";
    // isVideoRecordingSupported() gates the record button on these.
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
    // Deterministic, non-recursive rAF so the picker's redraw loop ticks once.
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
  });

  afterEach(() => {
    embed?.destroy();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  const start = (): void => {
    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      captureVideo: true,
      videoOptions: { redaction: true },
    });
  };

  it("opens the picker instead of recording when redaction is enabled", async () => {
    start();
    recordButton().click();

    // The record button lazily loads the recording controller, so the picker
    // appears a microtask later.
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());
    expect(pickerEl()!.textContent).toContain("Start recording");
    // Picking happens before any screen-share prompt.
    expect(navigator.mediaDevices.getDisplayMedia).not.toHaveBeenCalled();
  });

  it("records directly (no picker) when redaction is disabled", () => {
    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      captureVideo: true,
      videoOptions: { redaction: false },
    });
    recordButton().click();
    expect(pickerEl()).toBeNull();
  });

  it("toggles a clicked area and updates the count", async () => {
    start();
    const target = document.createElement("div");
    target.getBoundingClientRect = () =>
      ({ left: 10, top: 10, width: 100, height: 40, right: 110, bottom: 50, x: 10, y: 10, toJSON: () => ({}) }) as DOMRect;
    document.body.appendChild(target);

    recordButton().click();
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());
    target.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(overlayRoot().querySelector("[data-qaid-redact-label]")!.textContent).toMatch(/1 area/i);

    // Clicking the same element again un-picks it.
    target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(overlayRoot().querySelector("[data-qaid-redact-label]")!.textContent).toMatch(/click sensitive/i);
  });

  it("says so, and records nothing, when the browser cannot blur the picked areas", async () => {
    // No canvas.captureStream: the blur pipeline cannot run. Recording the
    // picked areas in the clear would break the picker's promise.
    const saved = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype, "captureStream");
    Object.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
      value: undefined,
      configurable: true,
      writable: true,
    });
    const trackStop = vi.fn();
    const track = {
      kind: "video",
      stop: trackStop,
      addEventListener: vi.fn(),
      getSettings: () => ({ displaySurface: "browser" }),
    };
    const stream = { getTracks: () => [track], getVideoTracks: () => [track] };
    (navigator.mediaDevices.getDisplayMedia as ReturnType<typeof vi.fn>).mockResolvedValue(stream);

    try {
      start();
      const target = document.createElement("div");
      document.body.appendChild(target);

      recordButton().click();
      await vi.waitFor(() => expect(pickerEl()).not.toBeNull());
      target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      Array.from(overlayRoot().querySelectorAll("button"))
        .find((b) => b.textContent === "Start recording")!
        .click();

      await vi.waitFor(() =>
        expect(overlayRoot().querySelector('[role="status"]')?.textContent).toMatch(/cannot blur/i)
      );
      expect(trackStop).toHaveBeenCalled();
      expect(overlayRoot().querySelector(".qaid-recording-indicator")).toBeNull();
    } finally {
      if (saved) {
        Object.defineProperty(HTMLCanvasElement.prototype, "captureStream", saved);
      } else {
        delete (HTMLCanvasElement.prototype as unknown as Record<string, unknown>).captureStream;
      }
    }
  });

  it("draws an outline over each visible pick and skips ones with no size", async () => {
    start();
    const sized = document.createElement("div");
    sized.getBoundingClientRect = () =>
      ({ left: 10, top: 20, width: 100, height: 40, right: 110, bottom: 60, x: 10, y: 20, toJSON: () => ({}) }) as DOMRect;
    const empty = document.createElement("div"); // happy-dom rects are 0x0
    document.body.append(sized, empty);

    recordButton().click();
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());
    sized.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    empty.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    // Run the next animation frame by hand (rAF is stubbed not to loop).
    const raf = requestAnimationFrame as unknown as ReturnType<typeof vi.fn>;
    const frame = raf.mock.calls[raf.mock.calls.length - 1][0] as FrameRequestCallback;
    frame(0);

    // The outline layer is the picker's first child; only the sized pick drew.
    const outlines = pickerEl()!.firstElementChild!.children;
    expect(outlines).toHaveLength(1);
    const box = outlines[0] as HTMLElement;
    expect(box.style.left).toBe("10px");
    expect(box.style.top).toBe("20px");
    expect(box.style.width).toBe("100px");
    expect(box.style.height).toBe("40px");
  });

  it("Escape closes the picker without starting a recording", async () => {
    start();
    recordButton().click();
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(pickerEl()).toBeNull();
    expect(navigator.mediaDevices.getDisplayMedia).not.toHaveBeenCalled();
    // With nothing open any more, the controller no longer claims Escape.
    const rec = (embed as unknown as { recording: { handleEscape(): boolean } }).recording;
    expect(rec.handleEscape()).toBe(false);
  });

  it("ignores a second request to start picking while one is open", async () => {
    start();
    recordButton().click();
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());

    const rec = (embed as unknown as { recording: { startPicking(): void } }).recording;
    rec.startPicking();

    expect(overlayRoot().querySelectorAll(".qaid-redact-picker")).toHaveLength(1);
  });

  it("Cancel tears down the picker without starting a recording", async () => {
    start();
    recordButton().click();
    await vi.waitFor(() => expect(pickerEl()).not.toBeNull());
    const cancel = Array.from(overlayRoot().querySelectorAll("button")).find(
      (b) => b.textContent === "Cancel"
    )!;
    cancel.click();

    expect(pickerEl()).toBeNull();
    expect(navigator.mediaDevices.getDisplayMedia).not.toHaveBeenCalled();
  });
});
