/**
 * Script-tag bootstrapping: the JSON config block, the data-* attribute
 * fallback, and auto-init.
 *
 * This is the code path every copy-paste install goes through, so the whole
 * attribute surface is exercised here rather than only the handful of options
 * the embed tests happen to use.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { autoInit, parseDataAttributes, findOwnScript, findConfigBlock } from "./bootstrap";
import { QaidFeedback } from "./embed";
import type { FeedbackConfig } from "./types";

function scriptWith(attrs: Record<string, string>): HTMLScriptElement {
  const script = document.createElement("script");
  for (const [k, v] of Object.entries(attrs)) script.setAttribute(k, v);
  document.body.appendChild(script);
  return script;
}

function jsonConfigBlock(body: string): HTMLScriptElement {
  const script = document.createElement("script");
  script.setAttribute("type", "application/json");
  script.setAttribute("data-feedback-config", "");
  script.textContent = body;
  document.body.appendChild(script);
  return script;
}

function setCurrentScript(el: Element | null): void {
  Object.defineProperty(document, "currentScript", { value: el, configurable: true });
}

/** The embed's own classic tag: appended last, and document.currentScript. */
function ownTag(attrs: Record<string, string> = {}): HTMLScriptElement {
  const script = scriptWith(attrs);
  setCurrentScript(script);
  return script;
}

/** Every host the embed may have attached, plus our script tags. */
function cleanDom(): void {
  document
    .querySelectorAll(
      "script, [data-qaid-embed], [data-qaid-embed-overlay], style, #theme-css"
    )
    .forEach((el) => el.remove());
  document.body.innerHTML = "";
}

beforeEach(() => {
  cleanDom();
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ id: 1 }),
  }) as never;
});

afterEach(() => {
  setCurrentScript(null);
  cleanDom();
  vi.restoreAllMocks();
});

describe("parseDataAttributes", () => {
  it("returns null without an endpoint — nothing else can be inferred", () => {
    expect(parseDataAttributes(scriptWith({ "data-position": "top-left" }))).toBeNull();
  });

  it("returns only the endpoint when nothing else is set", () => {
    const config = parseDataAttributes(scriptWith({ "data-endpoint": "/api/feedback" }));

    expect(config?.endpoint).toBe("/api/feedback");
    // Every optional group stays undefined so the embed's own defaults win.
    expect(config?.colors).toEqual({
      positive: undefined,
      negative: undefined,
      marker: undefined,
    });
    expect(config?.text).toBeUndefined();
    expect(config?.offset).toBeUndefined();
    expect(config?.quests).toBeUndefined();
    expect(config?.videoOptions).toBeUndefined();
    expect(config?.screenshotOptions).toBeUndefined();
    expect(config?.skipTargeting).toBeUndefined();
    expect(config?.annotate).toBeUndefined();
  });

  it("maps the full attribute surface onto config", () => {
    const config = parseDataAttributes(
      scriptWith({
        "data-endpoint": "/api/feedback",
        "data-api-key": "qd_test",
        "data-position": "top-left",
        "data-direction": "horizontal",
        "data-zindex": "9001",
        "data-container": "#host",
        "data-button-class": "my-btn",
        "data-button-size": "large",
        "data-offset-x": "12",
        "data-offset-y": "34",
        "data-modal-width": "520",
        "data-backdrop-opacity": "0.75",
        "data-font-family": "Inter",
        "data-font-size": "18",
        "data-positive-color": "#0f0",
        "data-negative-color": "#f00",
        "data-marker-color": "#00f",
        "data-positive-icon": "<svg/>",
        "data-negative-icon": "<svg/>",
        "data-feedback-icon": "<svg/>",
        "data-skip-targeting": "true",
        "data-single-button": "true",
        "data-tool-buttons": "true",
        "data-target-icon": "<svg id='t'/>",
        "data-annotate-icon": "<svg id='a'/>",
        "data-target-label": "Aim",
        "data-annotate-label": "Sketch",
        "data-incognito": "true",
        "data-hide-thumbs": "true",
        "data-hide-dismiss": "true",
        "data-hide-confirmation": "true",
        "data-feedback-mode": "both",
        "data-capture-screenshot": "true",
        "data-screenshot-method": "dom",
        "data-screenshot-quality": "0.8",
        "data-screenshot-max-width": "1280",
        "data-screenshot-max-height": "720",
        "data-annotate": "false",
        "data-annotation-color": "#ff0",
        "data-capture-video": "true",
        "data-video-max-duration": "45",
        "data-video-redaction": "true",
        "data-tooltip": "Tell us",
        "data-modal-title": "Title",
        "data-modal-subtitle": "Subtitle",
        "data-placeholder": "Placeholder",
        "data-submit-button": "Send",
        "data-skip-button": "Nope",
        "data-feedback-label": "Feedback",
        "data-confirmation-title": "Done",
        "data-confirmation-message": "Got it",
        "data-confirmation-close": "Bye",
        "data-quest-base": "https://qaid.dev",
        "data-quest-up": "q-up",
        "data-quest-down": "q-down",
        "data-quest-video": "q-video",
        "data-quest-api-key": "qd_quest",
        "data-quest-module-url": "https://cdn/quests.js",
      })
    );

    expect(config).toMatchObject({
      endpoint: "/api/feedback",
      apiKey: "qd_test",
      position: "top-left",
      direction: "horizontal",
      zIndex: 9001,
      container: "#host",
      buttonClass: "my-btn",
      buttonSize: "large",
      offset: { x: 12, y: 34 },
      modalWidth: 520,
      backdropOpacity: 0.75,
      fontFamily: "Inter",
      fontSize: 18,
      colors: { positive: "#0f0", negative: "#f00", marker: "#00f" },
      skipTargeting: true,
      singleButton: true,
      toolButtons: true,
      targetIcon: "<svg id='t'/>",
      annotateIcon: "<svg id='a'/>",
      incognito: true,
      hideThumbs: true,
      hideDismiss: true,
      hideConfirmation: true,
      feedbackMode: "both",
      captureScreenshot: true,
      screenshotMethod: "dom",
      screenshotOptions: { quality: 0.8, maxWidth: 1280, maxHeight: 720 },
      annotationColor: "#ff0",
      captureVideo: true,
      videoOptions: { maxDuration: 45, redaction: true },
      text: {
        tooltip: "Tell us",
        modalTitle: "Title",
        modalSubtitle: "Subtitle",
        placeholder: "Placeholder",
        submitButton: "Send",
        skipButton: "Nope",
        feedbackLabel: "Feedback",
        targetLabel: "Aim",
        annotateLabel: "Sketch",
        confirmationTitle: "Done",
        confirmationMessage: "Got it",
        confirmationClose: "Bye",
      },
      quests: {
        base: "https://qaid.dev",
        up: "q-up",
        down: "q-down",
        video: "q-video",
        apiKey: "qd_quest",
        moduleUrl: "https://cdn/quests.js",
      },
    });
    // Annotation is on by default, so only an explicit "false" turns it off.
    expect(config?.annotate).toBe(false);
  });

  it("treats any value other than \"true\" as unset for boolean flags", () => {
    const config = parseDataAttributes(
      scriptWith({
        "data-endpoint": "/api/feedback",
        "data-hide-confirmation": "false",
        "data-skip-targeting": "yes",
        "data-annotate": "true",
      })
    );

    expect(config?.hideConfirmation).toBeUndefined();
    expect(config?.skipTargeting).toBeUndefined();
    // annotate only ever becomes false; "true" leaves it to the default.
    expect(config?.annotate).toBeUndefined();
  });

  it("builds partial groups from whichever members are present", () => {
    const onlyX = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-offset-x": "5" })
    );
    expect(onlyX?.offset).toEqual({ x: 5, y: undefined });

    const onlyDuration = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-video-max-duration": "30" })
    );
    expect(onlyDuration?.videoOptions).toEqual({ maxDuration: 30, redaction: undefined });

    const onlyQuality = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-screenshot-quality": "0.5" })
    );
    expect(onlyQuality?.screenshotOptions).toEqual({
      quality: 0.5,
      maxWidth: undefined,
      maxHeight: undefined,
    });
  });

  it("ignores quest ids when no quest base is configured", () => {
    const config = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-quest-up": "q-up" })
    );
    expect(config?.quests).toBeUndefined();
  });

  it("pulls theme CSS out of the element named by data-css-selector", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = "  .qaid-btn { color: red; }  ";
    document.body.appendChild(style);

    const config = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-css-selector": "#theme-css" })
    );

    expect(config?.css).toBe(".qaid-btn { color: red; }");
  });

  it("yields empty CSS when the selector matches nothing", () => {
    const config = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-css-selector": "#missing" })
    );
    expect(config?.css).toBe("");
  });
});

/**
 * The options that used to need the JSON config block. Every option that can
 * be written as text now has an attribute.
 */
describe("attributes for the options that once needed the JSON block", () => {
  const cases: Array<[string, string, Partial<FeedbackConfig>]> = [
    ["data-positive-label", "Loved it", { text: { positiveLabel: "Loved it" } }],
    ["data-negative-label", "Hated it", { text: { negativeLabel: "Hated it" } }],
    ["data-record-label", "Record your screen", { text: { recordLabel: "Record your screen" } }],
    ["data-dismiss-label", "Hide these buttons", { text: { dismissLabel: "Hide these buttons" } }],
    ["data-annotation-palette", '["#f00","#0f0"]', { annotationPalette: ["#f00", "#0f0"] }],
    [
      "data-annotation-palette",
      "#f00, rgb(0, 128, 0) ,#00f",
      { annotationPalette: ["#f00", "rgb(0, 128, 0)", "#00f"] },
    ],
    ["data-annotation-palette", "#123456", { annotationPalette: ["#123456"] }],
    ["data-record-icon", '<svg class="rec"></svg>', { recordIcon: '<svg class="rec"></svg>' }],
    ["data-css", ".qaid-btn { color: red; }", { css: ".qaid-btn { color: red; }" }],
  ];

  it.each(cases)("%s=%s", (attr, value, expected) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = parseDataAttributes(scriptWith({ "data-endpoint": "/e", [attr]: value }));

    expect(config).toMatchObject(expected);
    expect(warn).not.toHaveBeenCalled();
  });

  const invalid: Array<[string, string]> = [
    ["data-annotation-palette", "[not json"],
    ["data-annotation-palette", '{"a":"#f00"}'],
    ["data-annotation-palette", "[]"],
    ["data-annotation-palette", '["#f00", 3]'],
    ["data-annotation-palette", '["#f00", " "]'],
    ["data-annotation-palette", "#f00,,#0f0"],
    ["data-annotation-palette", ""],
    ["data-positive-label", ""],
    ["data-negative-label", "   "],
    ["data-record-label", ""],
    ["data-dismiss-label", " "],
  ];

  it.each(invalid)("ignores %s=%j with one warning naming the attribute", (attr, value) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = parseDataAttributes(scriptWith({ "data-endpoint": "/e", [attr]: value }));

    expect(config?.annotationPalette).toBeUndefined();
    expect(config?.text).toBeUndefined();
    expect(warn).toHaveBeenCalledOnce();
    expect(String(warn.mock.calls[0]![0])).toContain(attr);
  });

  it("keeps the good labels when one is empty", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = parseDataAttributes(
      scriptWith({
        "data-endpoint": "/e",
        "data-positive-label": "Yes",
        "data-negative-label": "",
      })
    );

    expect(config?.text?.positiveLabel).toBe("Yes");
    expect(config?.text?.negativeLabel).toBeUndefined();
    expect(warn).toHaveBeenCalledOnce();
  });

  it("prefers data-css over data-css-selector, as the JSON block prefers css", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = ".from-selector {}";
    document.body.appendChild(style);

    const config = parseDataAttributes(
      scriptWith({
        "data-endpoint": "/e",
        "data-css": ".inline {}",
        "data-css-selector": "#theme-css",
      })
    );

    expect(config?.css).toBe(".inline {}");
  });

  it("falls back to data-css-selector when data-css is empty", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = ".from-selector {}";
    document.body.appendChild(style);

    const config = parseDataAttributes(
      scriptWith({ "data-endpoint": "/e", "data-css": "", "data-css-selector": "#theme-css" })
    );

    expect(config?.css).toBe(".from-selector {}");
  });

  it("carries the screen-reader labels all the way to the rendered buttons", () => {
    const config = parseDataAttributes(
      scriptWith({
        "data-endpoint": "/api/feedback",
        "data-positive-label": "Loved it",
        "data-negative-label": "Hated it",
        "data-dismiss-label": "Hide these buttons",
      })
    );
    const embed = new QaidFeedback(config as FeedbackConfig);
    try {
      // Hosts from earlier tests can survive the DOM cleanup (the embed
      // re-attaches its host), so find ours by what it rendered.
      const shadow = Array.from(document.querySelectorAll("[data-qaid-embed]"))
        .map((host) => host.shadowRoot)
        .find((root) => root?.querySelector('.qaid-btn-up[aria-label="Loved it"]'));

      expect(shadow).toBeTruthy();
      expect(shadow!.querySelector(".qaid-btn-down")?.getAttribute("aria-label")).toBe("Hated it");
      expect(shadow!.querySelector(".qaid-dismiss-btn")?.getAttribute("aria-label")).toBe(
        "Hide these buttons"
      );
    } finally {
      embed.destroy();
    }
  });
});

describe("autoInit with a JSON config block", () => {
  it("boots from the JSON block", async () => {
    jsonConfigBlock(JSON.stringify({ endpoint: "/api/feedback", skipTargeting: true }));
    ownTag();

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });

  it("resolves cssSelector to css and drops the selector", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = ".qaid-btn { color: blue; }";
    document.body.appendChild(style);

    jsonConfigBlock(JSON.stringify({ endpoint: "/e", cssSelector: "#theme-css" }));
    ownTag();
    // Nothing throws and the embed mounts; the resolution itself is asserted
    // through parseDataAttributes' equivalent above.
    expect(() => autoInit()).not.toThrow();
  });

  it("leaves an explicit css alone when both are given", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = ".from-selector {}";
    document.body.appendChild(style);

    jsonConfigBlock(
      JSON.stringify({ endpoint: "/e", css: ".explicit {}", cssSelector: "#theme-css" })
    );
    ownTag();
    expect(() => autoInit()).not.toThrow();
  });

  it("does not read (or warn about) attributes when a JSON block wins", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    jsonConfigBlock(JSON.stringify({ endpoint: "/api/feedback", skipTargeting: true }));
    ownTag({ "data-endpoint": "/api/feedback", "data-annotation-palette": "[bad" });

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
    const ignored = warn.mock.calls.filter((c) => String(c[0]).includes("data-annotation-palette"));
    expect(ignored).toHaveLength(0);
  });

  it("falls back to data attributes when the JSON is malformed", async () => {
    jsonConfigBlock("{ not json");
    ownTag({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });

  it("falls back to data attributes when the JSON block is empty", async () => {
    jsonConfigBlock("   ");
    ownTag({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });
});

/**
 * These assert that *no new* embed appears rather than that none exists: the
 * embed re-attaches its shadow host when external code removes it, so hosts
 * created by earlier tests in this file survive the DOM cleanup.
 */
const hostCount = () => document.querySelectorAll("[data-qaid-embed]").length;

describe("autoInit", () => {
  it("does nothing when there is no config at all", () => {
    const before = hostCount();
    autoInit();
    expect(hostCount()).toBe(before);
  });

  it("does nothing when the config has no endpoint", () => {
    jsonConfigBlock(JSON.stringify({ position: "top-left" }));
    ownTag();
    const before = hostCount();
    autoInit();
    expect(hostCount()).toBe(before);
  });

  it("waits for DOMContentLoaded when the document is still loading", async () => {
    const readyState = vi.spyOn(document, "readyState", "get").mockReturnValue("loading");
    ownTag({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });
    const before = hostCount();

    autoInit();
    // currentScript is gone by DOMContentLoaded; the tag was found already.
    setCurrentScript(null);
    // Deferred: nothing is mounted while the document is parsing.
    expect(hostCount()).toBe(before);

    readyState.mockReturnValue("complete");
    document.dispatchEvent(new Event("DOMContentLoaded"));

    await vi.waitFor(() => expect(hostCount()).toBe(before + 1));
  });
});

describe("finding the embed's own tag", () => {
  it("is document.currentScript for a classic script", () => {
    const tag = ownTag();
    expect(findOwnScript()).toBe(tag);
  });

  it("is nothing without currentScript or a module URL", () => {
    scriptWith({ "data-endpoint": "/api/feedback" });
    expect(findOwnScript()).toBeNull();
  });

  it("is the tag whose src is the module's own URL", () => {
    const other = scriptWith({ src: "https://cdn.example/other.js" });
    const mine = scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js" });
    expect(findOwnScript("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js")).toBe(mine);
    expect(findOwnScript("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js")).not.toBe(other);
  });

  it("after a CDN redirect, is the one tag embed.js injected", () => {
    const origin = scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js" });
    const injected = scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed/dist/loader.js" });
    (injected as unknown as Record<string, unknown>).__qaidThumbsOrigin = origin;
    // A second loader.js tag would make the file-name match ambiguous.
    scriptWith({ src: "https://elsewhere.example/loader.js" });
    expect(findOwnScript("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js")).toBe(injected);
  });

  it("after a redirect without embed.js, is the one tag with the same file name", () => {
    const mine = scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed@1/dist/loader.js?v=1" });
    expect(findOwnScript("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js")).toBe(mine);
  });

  it("is nothing when two tags could be it", () => {
    scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed@1/dist/loader.js" });
    scriptWith({ src: "https://attacker.example/loader.js", "data-endpoint": "https://attacker.example" });
    expect(findOwnScript("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/loader.js")).toBeNull();
  });
});

describe("finding the embed's JSON config block", () => {
  it("takes the block right before the tag", () => {
    const block = jsonConfigBlock("{}");
    const tag = scriptWith({});
    expect(findConfigBlock(tag)).toBe(block);
  });

  it("takes the block right after the tag", () => {
    const tag = scriptWith({});
    const block = jsonConfigBlock("{}");
    expect(findConfigBlock(tag)).toBe(block);
  });

  it("ignores a decoy block elsewhere on the page", () => {
    const decoy = jsonConfigBlock(JSON.stringify({ endpoint: "https://attacker.example/collect" }));
    document.body.appendChild(document.createElement("p"));
    const tag = scriptWith({ "data-endpoint": "/api/feedback" });
    expect(findConfigBlock(tag)).toBeNull();
    expect(decoy.isConnected).toBe(true);
  });

  it("ignores an adjacent JSON block that is not marked data-feedback-config", () => {
    const block = document.createElement("script");
    block.type = "application/json";
    block.textContent = "{}";
    document.body.appendChild(block);
    const tag = scriptWith({});
    expect(findConfigBlock(tag)).toBeNull();
  });

  it("takes the element data-config-id names, wherever it is", () => {
    const named = document.createElement("script");
    named.type = "application/json";
    named.id = "my-qaid-config";
    named.textContent = "{}";
    document.body.appendChild(named);
    document.body.appendChild(document.createElement("p"));
    jsonConfigBlock("{}"); // adjacent, but the name wins
    const tag = scriptWith({ "data-config-id": "my-qaid-config" });
    expect(findConfigBlock(tag)).toBe(named);
  });

  it("refuses a data-config-id that names something other than a JSON block", () => {
    const div = document.createElement("div");
    div.id = "not-json";
    document.body.appendChild(div);
    const tag = scriptWith({ "data-config-id": "not-json" });
    expect(findConfigBlock(tag)).toBeNull();
    expect(findConfigBlock(scriptWith({ "data-config-id": "missing" }))).toBeNull();
  });

  it("looks beside the customer's embed.js tag, not the tag it injected", () => {
    const block = jsonConfigBlock("{}");
    const origin = scriptWith({ src: "https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js" });
    const injected = document.createElement("script");
    document.head.appendChild(injected);
    (injected as unknown as Record<string, unknown>).__qaidThumbsOrigin = origin;
    expect(findConfigBlock(injected)).toBe(block);
  });

  it("autoInit boots from the tag's attributes when only a decoy block exists", async () => {
    const decoy = jsonConfigBlock(JSON.stringify({ endpoint: "https://attacker.example/collect" }));
    document.body.appendChild(document.createElement("p"));
    ownTag({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });
    const fetchMock = global.fetch as unknown as ReturnType<typeof vi.fn>;
    const before = hostCount();

    autoInit();

    await vi.waitFor(() => expect(hostCount()).toBe(before + 1));
    expect(decoy.isConnected).toBe(true);
    const urls = fetchMock.mock.calls.map((c) => String(c[0]));
    expect(urls.some((u) => u.includes("attacker.example"))).toBe(false);
  });

  it("autoInit does nothing from a decoy block when its own tag has no config", () => {
    jsonConfigBlock(JSON.stringify({ endpoint: "https://attacker.example/collect" }));
    document.body.appendChild(document.createElement("p"));
    ownTag();
    const before = hostCount();
    autoInit();
    expect(hostCount()).toBe(before);
  });
});

describe("autoInit outside a browser", () => {
  it("no-ops when there is no document", () => {
    const real = globalThis.document;
    // The loader entry is imported in SSR bundles too, where this guard is
    // the only thing standing between a build and a ReferenceError.
    vi.stubGlobal("document", undefined);
    try {
      expect(() => autoInit()).not.toThrow();
    } finally {
      vi.stubGlobal("document", real);
    }
  });
});
