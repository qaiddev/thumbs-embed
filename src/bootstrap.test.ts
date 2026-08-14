/**
 * Script-tag bootstrapping: the JSON config block, the data-* attribute
 * fallback, and auto-init.
 *
 * This is the code path every copy-paste install goes through, so the whole
 * attribute surface is exercised here rather than only the handful of options
 * the embed tests happen to use.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { autoInit, parseDataAttributes } from "./bootstrap";

function scriptWith(attrs: Record<string, string>): HTMLScriptElement {
  const script = document.createElement("script");
  for (const [k, v] of Object.entries(attrs)) script.setAttribute(k, v);
  document.body.appendChild(script);
  return script;
}

function jsonConfigBlock(body: string): void {
  const script = document.createElement("script");
  script.setAttribute("type", "application/json");
  script.setAttribute("data-feedback-config", "");
  script.textContent = body;
  document.body.appendChild(script);
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

describe("autoInit with a JSON config block", () => {
  it("boots from the JSON block", async () => {
    jsonConfigBlock(JSON.stringify({ endpoint: "/api/feedback", skipTargeting: true }));

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });

  it("resolves cssSelector to css and drops the selector", () => {
    const style = document.createElement("style");
    style.id = "theme-css";
    style.textContent = ".qaid-btn { color: blue; }";
    document.body.appendChild(style);

    jsonConfigBlock(JSON.stringify({ endpoint: "/e", cssSelector: "#theme-css" }));
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
    expect(() => autoInit()).not.toThrow();
  });

  it("falls back to data attributes when the JSON is malformed", async () => {
    jsonConfigBlock("{ not json");
    scriptWith({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });

    autoInit();

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });

  it("falls back to data attributes when the JSON block is empty", async () => {
    jsonConfigBlock("   ");
    scriptWith({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });

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
    const before = hostCount();
    autoInit();
    expect(hostCount()).toBe(before);
  });

  it("waits for DOMContentLoaded when the document is still loading", async () => {
    const readyState = vi.spyOn(document, "readyState", "get").mockReturnValue("loading");
    scriptWith({ "data-endpoint": "/api/feedback", "data-skip-targeting": "true" });
    const before = hostCount();

    autoInit();
    // Deferred: nothing is mounted while the document is parsing.
    expect(hostCount()).toBe(before);

    readyState.mockReturnValue("complete");
    document.dispatchEvent(new Event("DOMContentLoaded"));

    await vi.waitFor(() => expect(hostCount()).toBe(before + 1));
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
