/**
 * The send flow on its own, driven through a fake SendHost.
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { submitFeedback, type SendHost } from "./send";
import type { ResolvedFeedbackConfig } from "./types";

function makeHost(overrides: Partial<SendHost> = {}): SendHost {
  const host: SendHost = {
    config: {
      endpoint: "/api/feedback",
      apiKey: "",
      captureScreenshot: false,
      feedbackMode: "target",
      annotate: true,
      quests: { base: "", up: "", down: "", video: "", apiKey: "", moduleUrl: "" },
    } as unknown as ResolvedFeedbackConfig,
    visitorId: "v",
    feedbackData: { feedbackType: "up", elementSelector: null, elementText: null, consoleErrors: [] },
    selectedBounds: { x: 0, y: 0, width: 0, height: 0, clickX: 0, clickY: 0, visible: false },
    destroyed: false,
    overlayShadowHost: null,
    activeQuest: null,
    setState: vi.fn(),
    setFeedbackId: vi.fn(),
    shouldCaptureViaDom: () => false,
    ensureOverlayHost: vi.fn(),
    ensureModal: vi.fn(),
    addFeatureStyles: vi.fn(),
    applyVars: vi.fn(),
    announceMsg: vi.fn(),
    openDialogA11y: vi.fn(),
    closeDialogA11y: vi.fn(),
    resetFeedbackUi: vi.fn(),
    ...overrides,
  };
  return host;
}

describe("send flow", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("never opens the message box when the embed was destroyed while it loaded", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 1 }) }));
    const open = vi.fn();
    let destroyed = false;
    const host = makeHost({
      ensureModal: vi.fn(async () => {
        destroyed = true;
        return { open } as never;
      }),
    });
    Object.defineProperty(host, "destroyed", { get: () => destroyed });

    await submitFeedback(host);

    expect(host.setState).toHaveBeenCalledWith("MODAL_OPEN");
    expect(open).not.toHaveBeenCalled();
  });

  it("opens the message box and hands it the pending POST", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 9 }) }));
    const open = vi.fn();
    const host = makeHost({ ensureModal: vi.fn(async () => ({ open }) as never) });

    await submitFeedback(host);

    expect(open).toHaveBeenCalledTimes(1);
    const pending = (host.setFeedbackId as ReturnType<typeof vi.fn>).mock.calls[0]![0];
    await expect(pending).resolves.toBe(9);
  });
});
