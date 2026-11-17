/**
 * The progressive ESM entry (`dist/loader.js`): importing it both exports the
 * widget class and auto-initializes from the page's config tag.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("ESM loader entry (loader.ts)", () => {
  beforeEach(() => {
    vi.resetModules();
    document.body.innerHTML = "";
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ id: 1 }),
    }) as never;
  });

  // Runs first: the auto-initialized widget in the next test has no handle to
  // destroy it by, so nothing may be mounted before this assertion.
  it("exports QaidFeedback and mounts nothing when the page has no config", async () => {
    const mod = await import("./loader");

    expect(typeof mod.QaidFeedback).toBe("function");
    expect(document.querySelector("[data-qaid-embed]")).toBeNull();
  });

  it("auto-initializes from its own module tag on import", async () => {
    const tag = document.createElement("script");
    tag.type = "module";
    tag.setAttribute("data-endpoint", "/api/feedback");
    tag.setAttribute("data-api-key", "k1");
    // A module has no currentScript: the loader finds the tag whose src is
    // its own URL (import.meta.url).
    Object.defineProperty(tag, "src", { value: new URL("./loader.ts", import.meta.url).href });
    document.body.appendChild(tag);

    await import("./loader");

    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());
  });

  it("ignores a data-endpoint tag that is not its own", async () => {
    const decoy = document.createElement("script");
    decoy.setAttribute("data-endpoint", "https://attacker.example/collect");
    document.body.appendChild(decoy);
    // An earlier test's embed may have re-attached itself; count new ones.
    const before = document.querySelectorAll("[data-qaid-embed]").length;

    await import("./loader");
    await new Promise((r) => setTimeout(r, 20));

    expect(document.querySelectorAll("[data-qaid-embed]").length).toBe(before);
  });
});
