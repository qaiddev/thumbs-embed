import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { QaidFeedback } from "./embed";
import { _setQuestsImporter } from "./quest-launcher";

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

  it("warms the quests module and every linked definition on idle", async () => {
    const importer = vi.fn(async () => ({ QaidQuests: class {} }));
    _setQuestsImporter(importer);
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: "q" }) });
    vi.stubGlobal("fetch", fetchMock);

    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      quests: { base: "https://qaid.dev/api/quests", up: "quest-up", down: "quest-down" },
    });
    expect(ric).toHaveBeenCalledTimes(1);
    ric.mock.calls[0]![0]();

    expect(importer).toHaveBeenCalledTimes(1);
    const urls = fetchMock.mock.calls.map((c) => c[0]);
    expect(urls).toEqual([
      "https://qaid.dev/api/quests/quest-up/definition",
      "https://qaid.dev/api/quests/quest-down/definition",
    ]);

    // Hovering a thumb afterwards does not fetch them again.
    const up = document
      .querySelector("[data-qaid-embed]")
      ?.shadowRoot?.querySelector<HTMLButtonElement>(".qaid-btn-up");
    up?.dispatchEvent(new MouseEvent("mouseenter"));
    expect(fetchMock).toHaveBeenCalledTimes(2);
    _setQuestsImporter(null);
  });

  it("shrugs off a quests module that will not load; the click retries it", async () => {
    const importer = vi.fn(async () => {
      throw new Error("cdn down");
    });
    _setQuestsImporter(importer);
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, json: () => Promise.resolve({}) }));

    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      quests: { base: "https://qaid.dev/api/quests", video: "quest-vid" },
    });
    ric.mock.calls[0]![0]();
    await vi.waitFor(() => expect(importer).toHaveBeenCalledTimes(1));
    await new Promise((r) => setTimeout(r, 0));
    _setQuestsImporter(null);
  });

  it("does not warm quests when no base is set", () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", quests: { up: "quest-up" } });
    expect(ric).not.toHaveBeenCalled();
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
