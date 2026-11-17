import { describe, it, expect, vi, afterEach } from "vitest";
import {
  DEFAULT_QUESTS_MODULE_URL,
  DEFAULT_QUESTS_MODULE_INTEGRITY,
  QUESTS_VERSION,
  resolveQuestsModuleUrl,
  _resetQuestsModuleWarning,
} from "./quest-config";

afterEach(() => {
  _resetQuestsModuleWarning();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("the default quests module", () => {
  it("is one exact release, never a floating major", () => {
    expect(QUESTS_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
    expect(DEFAULT_QUESTS_MODULE_URL).toBe(
      `https://unpkg.com/@qaiddev/quests-embed@${QUESTS_VERSION}/dist/qaid-quests.js`
    );
  });

  it("carries a sha384 integrity", () => {
    expect(DEFAULT_QUESTS_MODULE_INTEGRITY).toMatch(/^sha384-[A-Za-z0-9+/]{64}$/);
  });
});

describe("resolveQuestsModuleUrl", () => {
  it("uses the default when nothing is set", () => {
    expect(resolveQuestsModuleUrl(undefined)).toBe(DEFAULT_QUESTS_MODULE_URL);
    expect(resolveQuestsModuleUrl("")).toBe(DEFAULT_QUESTS_MODULE_URL);
    expect(resolveQuestsModuleUrl(DEFAULT_QUESTS_MODULE_URL)).toBe(DEFAULT_QUESTS_MODULE_URL);
  });

  it("accepts another exact quests-embed release on unpkg", () => {
    const url = "https://unpkg.com/@qaiddev/quests-embed@1.9.3/dist/qaid-quests.js";
    expect(resolveQuestsModuleUrl(url)).toBe(url);
    const pre = "https://unpkg.com/@qaiddev/quests-embed@2.0.0-beta.1/dist/qaid-quests.js";
    expect(resolveQuestsModuleUrl(pre)).toBe(pre);
  });

  it("accepts a same-origin (self-hosted) copy, resolved against the page", () => {
    expect(resolveQuestsModuleUrl("/vendor/qaid-quests.js")).toBe(
      new URL("/vendor/qaid-quests.js", location.href).href
    );
  });

  it.each([
    "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js",
    "https://unpkg.com/@qaiddev/quests-embed/dist/qaid-quests.js",
    "http://unpkg.com/@qaiddev/quests-embed@1.9.3/dist/qaid-quests.js",
    "https://cdn.attacker.example/qaid-quests.js",
    "data:text/javascript,alert(1)",
    "javascript:alert(1)",
    "http://[bad",
  ])("refuses %s, warning once", (url) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(resolveQuestsModuleUrl(url)).toBe(DEFAULT_QUESTS_MODULE_URL);
    expect(resolveQuestsModuleUrl(url)).toBe(DEFAULT_QUESTS_MODULE_URL);
    expect(warn).toHaveBeenCalledTimes(1);
  });

  it("refuses a relative URL when there is no page to resolve it against", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.stubGlobal("location", undefined);
    expect(resolveQuestsModuleUrl("/vendor/qaid-quests.js")).toBe(DEFAULT_QUESTS_MODULE_URL);
  });
});
