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

  it("does nothing outside a browser, where there is no document", async () => {
    setModuleSupport(true);
    setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));
    vi.stubGlobal("document", undefined);
    try {
      await import("./embed-loader");
    } finally {
      vi.unstubAllGlobals();
    }

    expect(document.querySelector('script[type="module"]')).toBeNull();
    expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
  });

  it("no-ops when it cannot find its own script tag", async () => {
    setModuleSupport(true);
    setCurrentScript(null); // and no embed.js tag in the DOM

    await import("./embed-loader");

    expect(document.querySelector('script[type="module"]')).toBeNull();
    expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
  });

  it("marks the injected tag with the customer's own tag, for the JSON block beside it", async () => {
    setModuleSupport(true);
    const self = addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" });
    setCurrentScript(self);

    await import("./embed-loader");

    const injected = document.querySelector('script[type="module"]') as HTMLScriptElement;
    expect((injected as unknown as Record<string, unknown>).__qaidThumbsOrigin).toBe(self);
    // A property, not an attribute: markup can't forge it.
    expect(injected.hasAttribute("__qaidThumbsOrigin")).toBe(false);
  });

  describe("pinned with integrity", () => {
    const UMD_HASH = "sha384-umdhashumdhashumdhashumdhashumdhashumdhashumdhashumdhashumdhash";

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it("loads the single-file UMD bundle with its baked-in hash, even where modules work", async () => {
      vi.stubGlobal("__QAID_UMD_INTEGRITY__", UMD_HASH);
      setModuleSupport(true);
      setCurrentScript(
        addLoaderTag("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/embed.js", {
          "data-endpoint": "/api/feedback",
          integrity: "sha384-whatevertheCustomerPinned",
          crossorigin: "anonymous",
        })
      );

      await import("./embed-loader");

      expect(document.querySelector('script[type="module"]')).toBeNull();
      const injected = document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement;
      expect(injected.src).toBe("https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/qaid.umd.cjs");
      expect(injected.integrity).toBe(UMD_HASH);
      expect(injected.crossOrigin).toBe("anonymous");
      expect(injected.getAttribute("data-endpoint")).toBe("/api/feedback");
      // The customer's integrity is for embed.js, never copied across.
      expect(injected.getAttribute("integrity")).toBe(UMD_HASH);
    });

    it("keeps the progressive ESM path when the tag has no integrity", async () => {
      vi.stubGlobal("__QAID_UMD_INTEGRITY__", UMD_HASH);
      setModuleSupport(true);
      setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));

      await import("./embed-loader");

      const injected = document.querySelector('script[type="module"]') as HTMLScriptElement;
      expect(injected.src).toContain("/dist/loader.js");
      expect(injected.integrity).toBe("");
    });

    it("a legacy browser without integrity gets the UMD bundle with no hash", async () => {
      vi.stubGlobal("__QAID_UMD_INTEGRITY__", UMD_HASH);
      setModuleSupport(false);
      setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));

      await import("./embed-loader");

      const injected = document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement;
      expect(injected.integrity).toBe("");
    });
  });

  describe("Trusted Types", () => {
    afterEach(() => {
      delete (window as unknown as Record<string, unknown>).__qaidEmbedTrustedTypes;
      vi.unstubAllGlobals();
    });

    it("sets the src through the qaid-embed policy", async () => {
      const createPolicy = vi.fn((_name: string, rules: { createScriptURL: (u: string) => string }) => ({
        createScriptURL: (u: string) => rules.createScriptURL(u),
      }));
      vi.stubGlobal("trustedTypes", { createPolicy });
      setModuleSupport(true);
      setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));

      await import("./embed-loader");

      expect(createPolicy).toHaveBeenCalledWith("qaid-embed", expect.any(Object));
      const injected = document.querySelector('script[type="module"]') as HTMLScriptElement;
      expect(injected.src).toContain("/dist/loader.js");
    });

    it("warns and loads nothing when the page refuses the URL", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      vi.stubGlobal("trustedTypes", {
        createPolicy: () => ({
          createScriptURL: () => {
            throw new TypeError("refused");
          },
        }),
      });
      setModuleSupport(true);
      setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));

      await import("./embed-loader");

      expect(document.querySelector('script[type="module"]')).toBeNull();
      expect(warn).toHaveBeenCalledWith(expect.stringContaining("trusted-types qaid-embed"));
      warn.mockRestore();
    });
  });
});
