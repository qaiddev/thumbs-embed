import { afterEach, describe, expect, it, vi } from "vitest";

const reporting = vi.hoisted(() => ({
  stop: vi.fn(),
  start: vi.fn(),
}));

vi.mock("./error-reporting", async (importOriginal) => {
  const real = await importOriginal<typeof import("./error-reporting")>();
  return {
    ...real,
    startErrorReporting: reporting.start.mockImplementation(() => ({ flush: vi.fn(), stop: reporting.stop })),
  };
});

import { QaidFeedback } from "./embed";

let embed: QaidFeedback | null = null;

afterEach(() => {
  embed?.destroy();
  embed = null;
  vi.clearAllMocks();
  document.body.innerHTML = "";
  sessionStorage.clear();
});

describe("captureErrors", () => {
  it("is off by default", () => {
    embed = new QaidFeedback({ endpoint: "https://qaid.dev/api/feedback", apiKey: "k" });
    expect(reporting.start).not.toHaveBeenCalled();
  });

  it("needs an apiKey", () => {
    embed = new QaidFeedback({ endpoint: "https://qaid.dev/api/feedback", captureErrors: true });
    expect(reporting.start).not.toHaveBeenCalled();
  });

  it("true reports to /api/errors beside the endpoint, with the tab's session id", () => {
    embed = new QaidFeedback({ endpoint: "https://qaid.dev/api/feedback", apiKey: "k", captureErrors: true });
    expect(reporting.start).toHaveBeenCalledWith(
      expect.objectContaining({ endpoint: "https://qaid.dev/api/errors", apiKey: "k", sessionId: sessionStorage.getItem("qaid_session_id") }),
    );
    embed.destroy();
    expect(reporting.stop).toHaveBeenCalledTimes(1);
    embed = null;
  });

  it("an object sets the endpoint, release, environment and sample rate", () => {
    embed = new QaidFeedback({
      endpoint: "https://qaid.dev/api/feedback",
      apiKey: "k",
      captureErrors: { endpoint: "https://e.test/in", release: "abc123", environment: "staging", sampleRate: 0.5 },
    });
    expect(reporting.start).toHaveBeenCalledWith(
      expect.objectContaining({ endpoint: "https://e.test/in", release: "abc123", environment: "staging", sampleRate: 0.5 }),
    );
  });
});
