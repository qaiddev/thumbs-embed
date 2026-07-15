import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const EMBED_SRC = "https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js";

function addLoaderTag(src: string, data: Record<string, string> = {}): HTMLScriptElement {
  const s = document.createElement("script");
  s.src = src;
  Object.keys(data).forEach((k) => s.setAttribute(k, data[k]));
  document.head.appendChild(s);
  return s;
}

function setCurrentScript(el: HTMLScriptElement | null): void {
  Object.defineProperty(document, "currentScript", { value: el, configurable: true });
}

describe("single-tag embed loader (embed-loader.ts)", () => {
  let noModuleDesc: PropertyDescriptor | undefined;

  beforeEach(() => {
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    vi.resetModules();
    noModuleDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "noModule");
  });

  afterEach(() => {
    if (noModuleDesc) {
      Object.defineProperty(HTMLScriptElement.prototype, "noModule", noModuleDesc);
    } else {
      delete (HTMLScriptElement.prototype as Record<string, unknown>).noModule;
    }
    setCurrentScript(null);
  });

  // Toggle the standard ES-module support signal (`'noModule' in the prototype`).
  function setModuleSupport(supported: boolean): void {
    if (supported) {
      Object.defineProperty(HTMLScriptElement.prototype, "noModule", {
        value: false,
        configurable: true,
        writable: true,
      });
    } else {
      delete (HTMLScriptElement.prototype as Record<string, unknown>).noModule;
    }
  }

  it("injects the ESM module loader when modules are supported", async () => {
    setModuleSupport(true);
    setCurrentScript(
      addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback", "data-api-key": "k1" })
    );

    await import("./embed-loader");

    const injected = document.querySelector('script[type="module"]') as HTMLScriptElement | null;
    expect(injected).not.toBeNull();
    expect(injected!.src).toBe("https://unpkg.com/@qaiddev/thumbs-embed/dist/loader.js");
    expect(injected!.getAttribute("data-endpoint")).toBe("/api/feedback");
    expect(injected!.getAttribute("data-api-key")).toBe("k1");
    // Modern path must not also pull the UMD bundle.
    expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
  });

  it("injects the deferred classic UMD bundle when modules are unsupported", async () => {
    setModuleSupport(false);
    setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));

    await import("./embed-loader");

    const injected = document.querySelector(
      'script[src*="qaid.umd.cjs"]'
    ) as HTMLScriptElement | null;
    expect(injected).not.toBeNull();
    expect(injected!.src).toBe("https://unpkg.com/@qaiddev/thumbs-embed/dist/qaid.umd.cjs");
    expect(injected!.type).not.toBe("module");
    expect(injected!.defer).toBe(true);
    expect(injected!.getAttribute("data-endpoint")).toBe("/api/feedback");
    // Legacy path must not also pull the module loader.
    expect(document.querySelector('script[type="module"]')).toBeNull();
  });

  it("preserves a CDN version pin when deriving the base URL", async () => {
    setModuleSupport(true);
    setCurrentScript(
      addLoaderTag("https://unpkg.com/@qaiddev/thumbs-embed@1.5.1/dist/embed.js", {
        "data-endpoint": "/x",
      })
    );

    await import("./embed-loader");

    const injected = document.querySelector('script[type="module"]') as HTMLScriptElement | null;
    expect(injected!.src).toBe(
      "https://unpkg.com/@qaiddev/thumbs-embed@1.5.1/dist/loader.js"
    );
  });

  it("falls back to locating its own tag when currentScript is null", async () => {
    setModuleSupport(true);
    addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" });
    setCurrentScript(null); // e.g. a deferred/async execution context

    await import("./embed-loader");

    const injected = document.querySelector('script[type="module"]') as HTMLScriptElement | null;
    expect(injected).not.toBeNull();
    expect(injected!.src).toContain("/dist/loader.js");
  });

  it("no-ops when it cannot find its own script tag", async () => {
    setModuleSupport(true);
    setCurrentScript(null); // and no embed.js tag in the DOM

    await import("./embed-loader");

    expect(document.querySelector('script[type="module"]')).toBeNull();
    expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
  });
});
