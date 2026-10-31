/**
 * The click path (send flow, dialog helpers, message box, targeting) is split
 * out of the startup chunk and warmed before the click: when the pointer or
 * keyboard focus reaches the buttons, or on idle, whichever comes first.
 *
 * Each chunk's mock counts how often it is loaded. The module registry and
 * the mocks are reset before every test, so each test sees fresh loads.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const loads = { send: 0, dialog: 0, modal: 0, targeting: 0 };

/** Fresh mocks per test, each counting its loads, over the real modules. */
function mockChunks(): void {
  vi.doMock("./send", async (importOriginal) => {
    loads.send++;
    return importOriginal();
  });
  vi.doMock("./a11y-dialog", async (importOriginal) => {
    loads.dialog++;
    return importOriginal();
  });
  vi.doMock("./modal", async (importOriginal) => {
    loads.modal++;
    return importOriginal();
  });
  vi.doMock("./targeting", async (importOriginal) => {
    loads.targeting++;
    return importOriginal();
  });
}

type Embed = { destroy(): void };
type EmbedCtor = new (config: Record<string, unknown>) => Embed;

async function settle(): Promise<void> {
  for (let i = 0; i < 5; i++) await new Promise((r) => setTimeout(r, 0));
}

function buttons(): HTMLElement {
  return document
    .querySelector("[data-qaid-embed]")!
    .shadowRoot!.querySelector<HTMLElement>(".qaid-buttons")!;
}

describe("click-path prewarm", () => {
  let QaidFeedback: EmbedCtor;
  let embed: Embed | null = null;
  let ric: ReturnType<typeof vi.fn>;
  let cancelRic: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    document.body.innerHTML = "";
    loads.send = loads.dialog = loads.modal = loads.targeting = 0;
    // Hold the idle callback so only the trigger under test fires.
    ric = vi.fn(() => 7);
    cancelRic = vi.fn();
    vi.stubGlobal("requestIdleCallback", ric);
    vi.stubGlobal("cancelIdleCallback", cancelRic);
    vi.resetModules();
    mockChunks();
    ({ QaidFeedback } = (await import("./embed")) as unknown as { QaidFeedback: EmbedCtor });
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.unstubAllGlobals();
  });

  it("loads nothing from the click path at startup", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    await settle();
    expect(loads).toEqual({ send: 0, dialog: 0, modal: 0, targeting: 0 });
  });

  it("warms send, dialog, modal and targeting once when the pointer reaches the buttons", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    buttons().dispatchEvent(new Event("pointerenter"));
    buttons().dispatchEvent(new Event("pointerenter"));
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 1 });

    // Focus and idle afterwards are no-ops.
    buttons().dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    ric.mock.calls[0]![0]();
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 1 });
  });

  it("warms the click path when keyboard focus enters the buttons", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    buttons().querySelector<HTMLButtonElement>(".qaid-btn-up")!.focus();
    buttons().dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 1 });
  });

  it("warms the click path on idle with no interaction", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    expect(ric).toHaveBeenCalledTimes(1);
    expect(ric.mock.calls[0]![1]).toEqual({ timeout: 2000 });
    ric.mock.calls[0]![0]();
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 1 });
  });

  it("falls back to a timer when requestIdleCallback is missing", async () => {
    vi.stubGlobal("requestIdleCallback", undefined);
    vi.useFakeTimers();
    try {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      vi.advanceTimersByTime(1199);
      expect(loads.send).toBe(0);
      vi.advanceTimersByTime(1);
    } finally {
      vi.useRealTimers();
    }
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 1 });
  });

  it("does not warm on idle after destroy, and cancels the idle callback", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback" });
    const idle = ric.mock.calls[0]![0] as () => void;
    embed.destroy();
    embed = null;
    expect(cancelRic).toHaveBeenCalledWith(7);
    idle();
    await settle();
    expect(loads.send).toBe(0);
  });

  it("skips targeting when skipTargeting is set", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    buttons().dispatchEvent(new Event("pointerenter"));
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 0 });
  });

  it("skips targeting in annotate mode", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", feedbackMode: "annotate" });
    ric.mock.calls[0]![0]();
    await settle();
    expect(loads).toEqual({ send: 1, dialog: 1, modal: 1, targeting: 0 });
  });

  it("still warms on a click that no pointer or focus preceded", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 3 }) }));
    embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    buttons().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();
    await settle();
    expect(loads.send).toBe(1);
    expect(loads.modal).toBe(1);
  });
});
