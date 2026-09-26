/**
 * The widget on a plain http:// page.
 *
 * `crypto.randomUUID` is only defined in secure contexts (HTTPS, localhost).
 * Up to 1.7.0 the constructor called it for the visitor id — and again in the
 * fallback — so on any other http:// page (a phone testing over the LAN, an
 * intranet site) the widget threw and never appeared.
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { QaidFeedback, randomId } from "./embed";

const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe("randomId", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("uses crypto.randomUUID when the page is a secure context", () => {
    const randomUUID = vi.fn(() => "11111111-1111-4111-8111-111111111111");
    const getRandomValues = vi.fn();
    vi.stubGlobal("crypto", { randomUUID, getRandomValues });

    expect(randomId()).toBe("11111111-1111-4111-8111-111111111111");
    expect(getRandomValues).not.toHaveBeenCalled();
  });

  it("falls back to crypto.getRandomValues when randomUUID is missing", () => {
    // What an http:// page sees: getRandomValues works, randomUUID is absent.
    const getRandomValues = vi.fn((bytes: Uint8Array) => bytes.fill(0xff));
    vi.stubGlobal("crypto", { getRandomValues });

    const id = randomId();

    expect(getRandomValues).toHaveBeenCalledTimes(1);
    // Version and variant bits are forced, so it still reads as a v4 UUID.
    expect(id).toBe("ffffffff-ffff-4fff-bfff-ffffffffffff");
    expect(id).toMatch(UUID_V4);
  });

  it("falls back to Math.random when there is no crypto at all", () => {
    vi.stubGlobal("crypto", undefined);
    const random = vi.spyOn(Math, "random").mockReturnValue(0);

    expect(randomId()).toBe("00000000-0000-4000-8000-000000000000");
    expect(random).toHaveBeenCalledTimes(16);
  });

  it("gives different ids on the fallback path", () => {
    vi.stubGlobal("crypto", {
      getRandomValues: (bytes: Uint8Array) => {
        for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
        return bytes;
      },
    });

    expect(randomId()).not.toBe(randomId());
  });
});

describe("QaidFeedback on an http:// page", () => {
  let embed: QaidFeedback | null = null;

  afterEach(() => {
    embed?.destroy();
    embed = null;
    document.body.innerHTML = "";
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("constructs without randomUUID and sends a v4 visitor id", async () => {
    vi.stubGlobal("crypto", {
      getRandomValues: (bytes: Uint8Array) => {
        for (let i = 0; i < bytes.length; i++) bytes[i] = i * 17;
        return bytes;
      },
    });
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 1 }),
    });
    vi.stubGlobal("fetch", fetchMock);

    expect(() => {
      embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true });
    }).not.toThrow();

    const host = document.querySelector("[data-qaid-embed]")!;
    host.shadowRoot!.querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());

    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.visitorId).toMatch(UUID_V4);
    // It is the id kept for this browser, so the next page load reuses it.
    expect(localStorage.getItem("qaid_visitor_id")).toBe(body.visitorId);
  });

  it("still constructs when storage is blocked as well", () => {
    vi.stubGlobal("crypto", { getRandomValues: (bytes: Uint8Array) => bytes.fill(7) });
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });

    expect(() => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
    }).not.toThrow();
    expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
  });
});
