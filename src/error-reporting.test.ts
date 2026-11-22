import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FLUSH_DELAY_MS,
  MAX_BATCH,
  MAX_EVENTS_PER_PAGE,
  MAX_REPEATS,
  getOrCreateSessionId,
  startErrorReporting,
  type ErrorReporter,
} from "./error-reporting";
import { errorsEndpointFor } from "./embed";

const opts = { endpoint: "https://qaid.test/api/errors", apiKey: "k1", sessionId: "s1", visitorId: "v1", release: "r9" };

let fetchMock: ReturnType<typeof vi.fn>;
let reporter: ErrorReporter | null = null;

function fireError(init: ErrorEventInit) {
  window.dispatchEvent(new ErrorEvent("error", init));
}

function fireRejection(reason: unknown) {
  const event = new Event("unhandledrejection") as Event & { reason: unknown };
  Object.defineProperty(event, "reason", { value: reason });
  window.dispatchEvent(event);
}

function bodies(): Array<{ events: Array<Record<string, unknown>> } & Record<string, unknown>> {
  return fetchMock.mock.calls.map((c) => JSON.parse(c[1].body as string));
}

beforeEach(() => {
  vi.useFakeTimers();
  fetchMock = vi.fn().mockResolvedValue({ status: 202 });
  vi.stubGlobal("fetch", fetchMock);
  Object.defineProperty(navigator, "sendBeacon", { value: undefined, configurable: true, writable: true });
});

afterEach(() => {
  reporter?.stop();
  reporter = null;
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("startErrorReporting", () => {
  it("batches an uncaught error and sends it after the quiet delay", () => {
    reporter = startErrorReporting(opts);
    const err = new TypeError("x is undefined");
    fireError({ message: "Uncaught TypeError: x is undefined", error: err, filename: "https://a.test/app.js?token=abc", lineno: 3, colno: 7 });
    expect(fetchMock).not.toHaveBeenCalled();
    vi.advanceTimersByTime(FLUSH_DELAY_MS);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(opts.endpoint);
    expect(init).toMatchObject({ method: "POST", keepalive: true, credentials: "omit", headers: { "Content-Type": "text/plain" } });
    const body = bodies()[0];
    expect(body).toMatchObject({ apiKey: "k1", sessionId: "s1", visitorId: "v1", release: "r9" });
    expect(body.events[0]).toMatchObject({ kind: "error", message: "x is undefined", errorType: "TypeError", line: 3, column: 7 });
    expect(body.events[0].file).not.toContain("abc");
    expect(typeof body.events[0].stack).toBe("string");
  });

  it("uses the event message when there is no error object, and skips resource load failures", () => {
    reporter = startErrorReporting(opts);
    fireError({ message: "Script error." });
    window.dispatchEvent(new ErrorEvent("error", {}));
    reporter.flush();
    expect(bodies()[0].events).toHaveLength(1);
    expect(bodies()[0].events[0].message).toBe("Script error.");
    expect(bodies()[0].events[0].line).toBeUndefined();
  });

  it("falls back to a placeholder when an error has no message at all", () => {
    reporter = startErrorReporting(opts);
    const err = new Error("");
    err.name = "";
    vi.spyOn(err, "toString").mockReturnValue("");
    fireError({ error: err });
    reporter.flush();
    expect(bodies()[0].events[0].message).toBe("Unknown error");
  });

  it("reports unhandled rejections of every shape", () => {
    reporter = startErrorReporting(opts);
    fireRejection(new RangeError("too far"));
    fireRejection("plain string");
    fireRejection({ code: 42 });
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    fireRejection(circular);
    fireRejection(undefined);
    reporter.flush();
    const msgs = bodies()[0].events.map((e) => e.message);
    expect(msgs).toEqual(["too far", "plain string", '{"code":42}', "[object Object]", "undefined"]);
    expect(bodies()[0].events[0]).toMatchObject({ kind: "unhandledrejection", errorType: "RangeError" });
  });

  it("uses a placeholder for a rejection with an empty message", () => {
    reporter = startErrorReporting(opts);
    fireRejection("");
    reporter.flush();
    expect(bodies()[0].events[0].message).toBe("Unhandled rejection");
  });

  it("redacts secrets in messages", () => {
    reporter = startErrorReporting(opts);
    fireError({ message: "failed with Bearer abcdefghijklmnopqrstuvwxyz0123", error: "failed with Bearer abcdefghijklmnopqrstuvwxyz0123" });
    reporter.flush();
    expect(bodies()[0].events[0].message).not.toContain("abcdefghijklmnopqrstuvwxyz0123");
  });

  it("sends one distinct error at most MAX_REPEATS times", () => {
    reporter = startErrorReporting(opts);
    for (let i = 0; i < MAX_REPEATS + 5; i++) fireError({ message: "same", error: new Error("same") });
    reporter.flush();
    expect(bodies()[0].events).toHaveLength(MAX_REPEATS);
  });

  it("flushes at once when a batch fills, and stops at the per-page cap", () => {
    reporter = startErrorReporting(opts);
    for (let i = 0; i < MAX_EVENTS_PER_PAGE + 10; i++) fireError({ message: `e${i}`, error: new Error(`e${i}`) });
    reporter.flush();
    const total = bodies().reduce((n, b) => n + b.events.length, 0);
    expect(total).toBe(MAX_EVENTS_PER_PAGE);
    expect(bodies().every((b) => b.events.length <= MAX_BATCH)).toBe(true);
  });

  it("stops sending for the page once the server refuses (401/403/410)", async () => {
    fetchMock.mockResolvedValueOnce({ status: 403 });
    reporter = startErrorReporting(opts);
    fireError({ message: "a", error: new Error("a") });
    reporter.flush();
    await vi.runAllTimersAsync();
    fireError({ message: "b", error: new Error("b") });
    reporter.flush();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("swallows a network failure and a fetch that throws", async () => {
    fetchMock.mockRejectedValueOnce(new Error("offline"));
    reporter = startErrorReporting(opts);
    fireError({ message: "a", error: new Error("a") });
    reporter.flush();
    await vi.runAllTimersAsync();
    fetchMock.mockImplementationOnce(() => {
      throw new Error("sync");
    });
    fireError({ message: "b", error: new Error("b") });
    expect(() => reporter!.flush()).not.toThrow();
  });

  it("uses sendBeacon on pagehide and when the tab is hidden, with fetch as the fallback", () => {
    const beacon = vi.fn().mockReturnValue(true);
    Object.defineProperty(navigator, "sendBeacon", { value: beacon, configurable: true, writable: true });
    reporter = startErrorReporting(opts);
    fireError({ message: "a", error: new Error("a") });
    window.dispatchEvent(new Event("pagehide"));
    expect(beacon).toHaveBeenCalledTimes(1);
    expect(beacon.mock.calls[0][0]).toBe(opts.endpoint);
    expect(fetchMock).not.toHaveBeenCalled();

    beacon.mockReturnValueOnce(false);
    fireError({ message: "b", error: new Error("b") });
    const vis = vi.spyOn(document, "visibilityState", "get").mockReturnValue("hidden");
    document.dispatchEvent(new Event("visibilitychange"));
    expect(fetchMock).toHaveBeenCalledTimes(1);

    vis.mockReturnValue("visible");
    fireError({ message: "c", error: new Error("c") });
    document.dispatchEvent(new Event("visibilitychange"));
    expect(beacon).toHaveBeenCalledTimes(2);
  });

  it("stop() removes the listeners, sends the queue, and is safe to call twice", () => {
    reporter = startErrorReporting(opts);
    fireError({ message: "a", error: new Error("a") });
    reporter.stop();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    fireError({ message: "b", error: new Error("b") });
    vi.advanceTimersByTime(FLUSH_DELAY_MS * 2);
    reporter.stop();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("a page outside the sample reports nothing", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.9);
    reporter = startErrorReporting({ ...opts, sampleRate: 0.5 });
    fireError({ message: "a", error: new Error("a") });
    reporter.flush();
    reporter.stop();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("a handler that throws inside never escapes", () => {
    reporter = startErrorReporting(opts);
    const err = new Event("error");
    Object.defineProperty(err, "message", { get() { throw new Error("getter"); } });
    expect(() => window.dispatchEvent(err)).not.toThrow();
    const rej = new Event("unhandledrejection");
    Object.defineProperty(rej, "reason", { get() { throw new Error("getter"); } });
    expect(() => window.dispatchEvent(rej)).not.toThrow();
  });
});

describe("getOrCreateSessionId", () => {
  afterEach(() => sessionStorage.clear());

  it("keeps one id per tab", () => {
    const make = vi.fn().mockReturnValueOnce("id-1").mockReturnValueOnce("id-2");
    expect(getOrCreateSessionId(make)).toBe("id-1");
    expect(getOrCreateSessionId(make)).toBe("id-1");
    expect(make).toHaveBeenCalledTimes(1);
  });

  it("makes a fresh id when sessionStorage is unavailable", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    expect(getOrCreateSessionId(() => "fresh")).toBe("fresh");
  });
});

describe("errorsEndpointFor", () => {
  it("swaps a trailing /feedback for /errors", () => {
    expect(errorsEndpointFor("https://qaid.dev/api/feedback")).toBe("https://qaid.dev/api/errors");
    expect(errorsEndpointFor("https://qaid.dev/api/feedback/")).toBe("https://qaid.dev/api/errors");
  });

  it("uses /api/errors on the origin otherwise, or a relative path when it is not a URL", () => {
    expect(errorsEndpointFor("https://x.test/hooks/thumbs")).toBe("https://x.test/api/errors");
    expect(errorsEndpointFor("not a url")).toBe("/api/errors");
  });
});
