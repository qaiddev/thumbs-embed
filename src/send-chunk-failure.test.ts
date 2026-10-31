/**
 * The send-flow chunk (send.ts) failing to load. The click must never leave
 * the visitor stuck: the embed says the send failed and resets to idle. A
 * recording's linked quest just does not launch. In the build the send flow,
 * the dialog helpers and the quests loader share one chunk, so all three fail.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("./send", () => {
  throw new Error("send chunk failed");
});
vi.mock("./a11y-dialog", () => {
  throw new Error("send chunk failed");
});
vi.mock("./quest-launcher", () => {
  throw new Error("send chunk failed");
});

import { QaidFeedback } from "./embed";

function mainRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed]")!.shadowRoot!;
}

describe("send chunk that fails to load", () => {
  let embed: QaidFeedback | null = null;

  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("says the send failed and resets to idle", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    // Drive the send directly: a click would also warm the chunk, and vitest
    // never settles a second import of a module whose mock factory threw.
    const internals = embed as unknown as { submitFeedback(): Promise<void>; state: string };
    internals.state = "SELECTED";
    await internals.submitFeedback();

    expect(errorSpy).toHaveBeenCalledWith("Failed to send feedback:", expect.any(Error));
    expect(fetchMock).not.toHaveBeenCalled();
    expect(mainRoot().querySelector('[role="alert"]')?.textContent).toBe("Failed to send feedback");
    expect(internals.state).toBe("IDLE");
  });

  it("does not launch a recording's quest", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      quests: { base: "https://qaid.dev/api/quests", video: "quest-vid" },
    });
    const launch = (
      embed as unknown as { tryLaunchQuest(t: string, id: number): Promise<boolean> }
    ).tryLaunchQuest("video", 5);

    await expect(launch).resolves.toBe(false);
    expect(errorSpy).toHaveBeenCalledWith("Failed to launch quest:", expect.any(Error));
  });

  // Last: vitest never settles a second import of a module whose mock factory
  // threw, so the warm-ups go after every test that awaits the chunk.
  it("swallows failed warm-ups of the click path and the quests loader", async () => {
    const ric = vi.fn((cb: () => void) => {
      cb();
      return 1;
    });
    vi.stubGlobal("requestIdleCallback", ric);
    vi.stubGlobal("cancelIdleCallback", vi.fn());
    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      quests: { base: "https://qaid.dev/api/quests", up: "quest-up" },
    });
    expect(ric).toHaveBeenCalledTimes(1);
    for (let i = 0; i < 5; i++) await new Promise((r) => setTimeout(r, 0));

    expect(mainRoot().querySelector(".qaid-btn-up")).not.toBeNull();
  });
});
