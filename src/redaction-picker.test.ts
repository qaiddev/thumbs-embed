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
