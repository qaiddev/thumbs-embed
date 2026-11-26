import { afterEach, describe, expect, it, vi } from "vitest";
import { QaidFeedback } from "./embed";
import { resetReportedSecretKeys } from "./secret-key-guard";

const SECRET = "QAID_SECRET_abcdefghijklmnopqrstuvwxyz0123456789ABCD";

describe("a secret key in the thumbs config", () => {
  let embed: QaidFeedback | undefined;

  afterEach(() => {
    embed?.destroy();
    document.body.innerHTML = "";
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    resetReportedSecretKeys();
  });

  it("is dropped, logged and reported, never used as the key", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 202 }));
    vi.stubGlobal("fetch", fetchMock);
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    embed = new QaidFeedback({ endpoint: "https://qaid.dev/api/feedback", apiKey: SECRET });

    expect((embed as unknown as { config: { apiKey: string } }).config.apiKey).toBe("");
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("QAID_SECRET_"));
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe("https://qaid.dev/api/leaked-key");
    expect(JSON.parse(init.body).source).toBe("thumbs-embed");
    for (const [, callInit] of fetchMock.mock.calls) expect(String(callInit?.body ?? "")).not.toContain(SECRET);
  });
});
