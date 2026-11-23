import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  mergeConfigs,
  remoteConfigUrl,
  resolveRemoteConfig,
  sanitizeRemoteConfig,
  sanitizeThemeDocument,
  wantsRemote,
} from "./remote-config";
import { QaidFeedback } from "./embed";
import { _resetStylesState } from "./styles";
import { parseDataAttributes } from "./bootstrap";

const ENDPOINT = "https://qaid.dev/api/feedback";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Answer each URL from a table; anything else is a 404. */
function routeFetch(table: Record<string, () => Promise<Response> | Response>) {
  return vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    const hit = Object.keys(table).find((k) => url.startsWith(k));
    return hit ? table[hit]() : new Response("nope", { status: 404 });
  });
}

describe("sanitizeRemoteConfig", () => {
  it("keeps known settings of the right type and drops the rest", () => {
    const out = sanitizeRemoteConfig(
      {
        position: "top-left",
        direction: "sideways",
        zIndex: 9,
        modalWidth: Number.NaN,
        incognito: "yes",
        hideThumbs: false,
        toolButtons: true,
        targetIcon: "<svg></svg>",
        annotateIcon: 7,
        css: ".x{}",
        colors: { positive: "#0f0", negative: 3, extra: "#fff" },
        text: { modalTitle: "Hi", submitButton: 5 },
        offset: "far",
        annotationPalette: ["#f00", "#0f0"],
        unknown: "kept?",
      },
      ENDPOINT,
    );
    expect(out).toEqual({
      position: "top-left",
      zIndex: 9,
      hideThumbs: false,
      toolButtons: true,
      targetIcon: "<svg></svg>",
      css: ".x{}",
      colors: { positive: "#0f0" },
      text: { modalTitle: "Hi" },
      annotationPalette: ["#f00", "#0f0"],
    });
  });

  it("never lets a fetched document move the endpoint, key, container or quest module", () => {
    const out = sanitizeRemoteConfig(
      {
        endpoint: "https://evil.example/collect",
        apiKey: "stolen",
        container: "#login",
        remoteConfig: true,
        themeUrl: "https://evil.example/theme",
        quests: { base: "https://qaid.dev/api/quests", up: "q1", moduleUrl: "https://evil.example/x.js", apiKey: "k" },
      },
      ENDPOINT,
    );
    expect(out).toEqual({ quests: { base: "https://qaid.dev/api/quests", up: "q1" } });
  });

  it("drops a quest base on another origin than the endpoint", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const out = sanitizeRemoteConfig({ quests: { base: "https://evil.example/api/quests", up: "q1" } }, ENDPOINT);
    expect(out.quests).toBeUndefined();
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it("treats an unparseable base as another origin", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const out = sanitizeRemoteConfig({ quests: { base: "http://[bad" } }, ENDPOINT);
    expect(out.quests).toBeUndefined();
    vi.restoreAllMocks();
  });

  it("keeps quest ids with no base", () => {
    expect(sanitizeRemoteConfig({ quests: { up: "q1" } }, ENDPOINT)).toEqual({ quests: { up: "q1" } });
  });

  it("rejects a palette with an empty or non-string colour, and non-objects", () => {
    expect(sanitizeRemoteConfig({ annotationPalette: ["#f00", ""] }, ENDPOINT)).toEqual({});
    expect(sanitizeRemoteConfig({ annotationPalette: [] }, ENDPOINT)).toEqual({});
    expect(sanitizeRemoteConfig(null, ENDPOINT)).toEqual({});
    expect(sanitizeRemoteConfig([1, 2], ENDPOINT)).toEqual({});
    expect(sanitizeRemoteConfig({ colors: {} }, ENDPOINT)).toEqual({});
  });
});

describe("sanitizeThemeDocument", () => {
  it("keeps only the look", () => {
    const out = sanitizeThemeDocument(
      {
        positiveIcon: "<svg></svg>",
        negativeIcon: "<svg></svg>",
        targetIcon: "<svg></svg>",
        annotateIcon: "<svg></svg>",
        css: ".t{}",
        buttonClass: "t",
        colors: { positive: "#0f0" },
        buttonSize: "large",
        text: { tooltip: "Rate" },
        toolButtons: true,
        position: "top-left",
        captureVideo: true,
        quests: { up: "q1" },
      },
      ENDPOINT,
    );
    expect(out).toEqual({
      positiveIcon: "<svg></svg>",
      negativeIcon: "<svg></svg>",
      targetIcon: "<svg></svg>",
      annotateIcon: "<svg></svg>",
      css: ".t{}",
      buttonClass: "t",
      colors: { positive: "#0f0" },
      buttonSize: "large",
      text: { tooltip: "Rate" },
    });
  });
});

describe("mergeConfigs", () => {
  it("lets later layers win, merges nested objects, and never writes undefined", () => {
    const out = mergeConfigs(
      { position: "top-left", colors: { positive: "#111", negative: "#222" }, css: "a" },
      null,
      { colors: { positive: "#333", negative: undefined }, css: undefined, annotationPalette: ["#1"] },
      { annotationPalette: ["#2"], colors: undefined },
    );
    expect(out).toEqual({
      position: "top-left",
      colors: { positive: "#333", negative: "#222" },
      css: "a",
      annotationPalette: ["#2"],
    });
  });

  it("replaces a non-object earlier value of a nested key", () => {
    const out = mergeConfigs({ text: "x" } as never, { text: { tooltip: "t" } });
    expect(out).toEqual({ text: { tooltip: "t" } });
  });
});

describe("remoteConfigUrl / wantsRemote", () => {
  it("builds the config URL off the endpoint", () => {
    expect(remoteConfigUrl("https://qaid.dev/api/feedback/", "qd k")).toBe(
      "https://qaid.dev/api/feedback/config?apiKey=qd%20k",
    );
  });

  it("is on for remoteConfig or a themeUrl only", () => {
    expect(wantsRemote({ endpoint: ENDPOINT })).toBe(false);
    expect(wantsRemote({ endpoint: ENDPOINT, remoteConfig: false })).toBe(false);
    expect(wantsRemote({ endpoint: ENDPOINT, remoteConfig: true })).toBe(true);
    expect(wantsRemote({ endpoint: ENDPOINT, themeUrl: "/t" })).toBe(true);
  });
});

describe("resolveRemoteConfig", () => {
  let warn: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
    warn.mockRestore();
  });

  it("layers project config < theme < host", async () => {
    const fetchMock = routeFetch({
      [`${ENDPOINT}/config`]: () =>
        jsonResponse({ position: "top-left", buttonSize: "small", colors: { positive: "#p", negative: "#n" } }),
      "https://qaid.dev/api/themes/neon/embed": () =>
        jsonResponse({ buttonSize: "large", colors: { positive: "#theme" }, css: ".neon{}" }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const out = await resolveRemoteConfig({
      endpoint: ENDPOINT,
      apiKey: "key1",
      remoteConfig: true,
      themeUrl: "https://qaid.dev/api/themes/neon/embed",
      colors: { negative: "#host" },
    });
    expect(out.position).toBe("top-left");
    expect(out.buttonSize).toBe("large");
    expect(out.css).toBe(".neon{}");
    expect(out.colors).toEqual({ positive: "#theme", negative: "#host" });
    expect(out.endpoint).toBe(ENDPOINT);
    expect(fetchMock).toHaveBeenCalledWith(
      `${ENDPOINT}/config?apiKey=key1`,
      expect.objectContaining({ credentials: "omit" }),
    );
  });

  it("skips the project config without a key", async () => {
    const fetchMock = routeFetch({});
    vi.stubGlobal("fetch", fetchMock);
    const out = await resolveRemoteConfig({ endpoint: ENDPOINT, remoteConfig: true });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(out).toEqual({ endpoint: ENDPOINT, remoteConfig: true });
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("needs an apiKey"));
  });

  it("draws with the host config on a failed status or a network error", async () => {
    vi.stubGlobal(
      "fetch",
      routeFetch({
        [`${ENDPOINT}/config`]: () => new Response("x", { status: 500 }),
        "https://t.example/": () => Promise.reject(new TypeError("offline")),
      }),
    );
    const out = await resolveRemoteConfig({
      endpoint: ENDPOINT,
      apiKey: "k",
      remoteConfig: true,
      themeUrl: "https://t.example/",
      position: "top-right",
    });
    expect(out.position).toBe("top-right");
    expect(warn).toHaveBeenCalledTimes(2);
  });

  it("gives up after the timeout", async () => {
    vi.useFakeTimers();
    vi.stubGlobal("fetch", vi.fn(() => new Promise<Response>(() => {})));
    const pending = resolveRemoteConfig({ endpoint: ENDPOINT, themeUrl: "https://t.example/", remoteTimeoutMs: 50 });
    await vi.advanceTimersByTimeAsync(60);
    const out = await pending;
    expect(out.themeUrl).toBe("https://t.example/");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("Theme"), expect.any(Error));
  });

  it("works where AbortController is missing", async () => {
    vi.stubGlobal("AbortController", undefined);
    vi.stubGlobal("fetch", routeFetch({ "https://t.example/": () => jsonResponse({ css: ".a{}" }) }));
    const out = await resolveRemoteConfig({ endpoint: ENDPOINT, themeUrl: "https://t.example/" });
    expect(out.css).toBe(".a{}");
  });
});

describe("QaidFeedback with fetched settings", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    _resetStylesState();
    try {
      localStorage.clear();
    } catch {
      /* no storage */
    }
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("waits for the project config, then draws with it", async () => {
    let answer!: (r: Response) => void;
    vi.stubGlobal("fetch", vi.fn(() => new Promise<Response>((r) => (answer = r))));
    const embed = new QaidFeedback({ endpoint: ENDPOINT, apiKey: "k", remoteConfig: true });
    expect(document.querySelector("[data-qaid-embed]")).toBeNull();

    answer(jsonResponse({ buttonClass: "from-dashboard", css: ".from-dashboard{color:red}" }));
    await embed.ready;

    const root = document.querySelector("[data-qaid-embed]")!.shadowRoot!;
    expect(root.querySelector(".qaid-btn-up")?.classList.contains("from-dashboard")).toBe(true);
    expect(Array.from(root.querySelectorAll("style")).some((s) => s.textContent?.includes(".from-dashboard"))).toBe(true);
    embed.destroy();
    expect(document.querySelector("[data-qaid-embed]")).toBeNull();
  });

  it("draws nothing when destroyed before the answer", async () => {
    let answer!: (r: Response) => void;
    vi.stubGlobal("fetch", vi.fn(() => new Promise<Response>((r) => (answer = r))));
    const other = new QaidFeedback({ endpoint: ENDPOINT });
    const embed = new QaidFeedback({ endpoint: ENDPOINT, themeUrl: "https://t.example/" });
    embed.destroy();
    answer(jsonResponse({ buttonClass: "late" }));
    await embed.ready;
    expect(document.querySelectorAll("[data-qaid-embed]").length).toBe(1);
    // The pending instance's destroy left the other instance's shared styles.
    expect(document.getElementById("qaid-styles")).not.toBeNull();
    other.destroy();
  });

  it("draws at once when nothing is fetched", () => {
    const embed = new QaidFeedback({ endpoint: ENDPOINT });
    expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
    embed.destroy();
  });
});

describe("script tag attributes", () => {
  it("reads data-remote-config, data-theme-url and data-remote-timeout", () => {
    const s = document.createElement("script");
    s.setAttribute("data-endpoint", ENDPOINT);
    s.setAttribute("data-remote-config", "true");
    s.setAttribute("data-theme-url", "https://qaid.dev/api/themes/neon/embed");
    s.setAttribute("data-remote-timeout", "1500");
    const c = parseDataAttributes(s)!;
    expect(c.remoteConfig).toBe(true);
    expect(c.themeUrl).toBe("https://qaid.dev/api/themes/neon/embed");
    expect(c.remoteTimeoutMs).toBe(1500);
  });

  it("leaves them unset by default", () => {
    const s = document.createElement("script");
    s.setAttribute("data-endpoint", ENDPOINT);
    const c = parseDataAttributes(s)!;
    expect(c.remoteConfig).toBeUndefined();
    expect(c.themeUrl).toBeUndefined();
    expect(c.remoteTimeoutMs).toBeUndefined();
  });
});
