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

  describe("pinned, where the browser enforces import-map integrity", () => {
    const UMD_HASH = "sha384-umdhashumdhashumdhashumdhashumdhashumdhashumdhashumdhashumdhash";
    const LOADER_HASH = "sha384-loaderloaderloaderloaderloaderloaderloaderloaderloaderloaderload";
    const CHUNK_HASH = "sha384-chunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchunkchun";
    const MISMATCH = "sha384-nevernevernevernevernevernevernevernevernevernevernevernevernev";
    const PINNED = "https://unpkg.com/@qaiddev/thumbs-embed@1.14.0/dist/embed.js";
    const BASE = "https://unpkg.com/@qaiddev/thumbs-embed@1.14.0/dist/";
    const S = HTMLScriptElement as unknown as { supports?: (t: string) => boolean };
    let supportsDesc: PropertyDescriptor | undefined;

    beforeEach(() => {
      supportsDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement, "supports");
      vi.stubGlobal("__QAID_UMD_INTEGRITY__", UMD_HASH);
      vi.stubGlobal("__QAID_MODULE_INTEGRITY__", { "loader.js": LOADER_HASH, "chunks/core-x.js": CHUNK_HASH });
      vi.stubGlobal("__QAID_PROBE_MISMATCH__", MISMATCH);
      setModuleSupport(true);
    });

    afterEach(() => {
      if (supportsDesc) Object.defineProperty(HTMLScriptElement, "supports", supportsDesc);
      else delete S.supports;
      delete (window as unknown as Record<string, unknown>).__qaidEmbedTrustedTypes;
      vi.unstubAllGlobals();
    });

    function mapsImports(yes: boolean): void {
      Object.defineProperty(HTMLScriptElement, "supports", {
        value: (t: string) => yes && t === "importmap",
        configurable: true,
        writable: true,
      });
    }

    // happy-dom can't fetch, so it would fail the probe on its own. Keep the
    // probe out of the document and answer for the browser instead.
    async function boot(): Promise<HTMLScriptElement | null> {
      setCurrentScript(
        addLoaderTag(PINNED, { "data-endpoint": "/api/feedback", integrity: "sha384-customer", crossorigin: "anonymous" })
      );
      let probe: HTMLScriptElement | null = null;
      const real = Node.prototype.appendChild;
      const spy = vi.spyOn(Node.prototype, "appendChild").mockImplementation(function (this: Node, child: Node) {
        if (child instanceof HTMLScriptElement && /integrity-probe\.js$/.test(child.src)) {
          probe = child;
          return child;
        }
        return real.call(this, child);
      } as typeof Node.prototype.appendChild);
      try {
        await import("./embed-loader");
      } finally {
        spy.mockRestore();
      }
      return probe;
    }

    it("maps a hash for loader.js, every chunk, and a never-matching probe", async () => {
      mapsImports(true);
      const probe = await boot();
      const map = document.querySelector('script[type="importmap"]') as HTMLScriptElement;
      expect(JSON.parse(map.text)).toEqual({
        integrity: {
          [BASE + "loader.js"]: LOADER_HASH,
          [BASE + "chunks/core-x.js"]: CHUNK_HASH,
          [BASE + "integrity-probe.js"]: MISMATCH,
        },
      });
      expect(probe!.type).toBe("module");
      // Nothing that runs the embed loads until the probe has answered.
      expect(document.querySelector('script[src$="loader.js"]')).toBeNull();
      expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
    });

    it("a refused probe means the map is enforced: the progressive build, hash on loader.js", async () => {
      mapsImports(true);
      const probe = await boot();
      probe!.dispatchEvent(new Event("error"));
      const injected = document.querySelector('script[src$="loader.js"]') as HTMLScriptElement;
      expect(injected.type).toBe("module");
      expect(injected.integrity).toBe(LOADER_HASH);
      expect(injected.getAttribute("data-endpoint")).toBe("/api/feedback");
      expect(document.querySelector('script[src*="qaid.umd.cjs"]')).toBeNull();
    });

    it("a probe that runs means the map is ignored: the hashed UMD bundle, never unchecked chunks", async () => {
      mapsImports(true);
      const probe = await boot();
      probe!.dispatchEvent(new Event("load"));
      const injected = document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement;
      expect(injected.integrity).toBe(UMD_HASH);
      expect(document.querySelector('script[src$="loader.js"]')).toBeNull();
    });

    it("only one answer counts", async () => {
      mapsImports(true);
      const probe = await boot();
      probe!.dispatchEvent(new Event("load"));
      probe!.dispatchEvent(new Event("error"));
      expect(document.querySelectorAll('script[src*="qaid.umd.cjs"], script[src$="loader.js"]')).toHaveLength(1);
    });

    it("no import maps at all: straight to the hashed UMD bundle, no probe", async () => {
      mapsImports(false);
      const probe = await boot();
      expect(probe).toBeNull();
      expect(document.querySelector('script[type="importmap"]')).toBeNull();
      expect((document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement).integrity).toBe(UMD_HASH);
    });

    it("an unpinned tag never writes an import map", async () => {
      mapsImports(true);
      setCurrentScript(addLoaderTag(EMBED_SRC, { "data-endpoint": "/api/feedback" }));
      await import("./embed-loader");
      expect(document.querySelector('script[type="importmap"]')).toBeNull();
      expect((document.querySelector('script[type="module"]') as HTMLScriptElement).integrity).toBe("");
    });

    it("a Trusted Types policy from an older release that can't sign the map: hashed UMD", async () => {
      mapsImports(true);
      vi.stubGlobal("trustedTypes", { createPolicy: vi.fn() });
      (window as unknown as Record<string, unknown>).__qaidEmbedTrustedTypes = {
        policy: { createScriptURL: (u: string) => u },
        allowed: {},
      };
      const probe = await boot();
      expect(probe).toBeNull();
      expect(document.querySelector('script[type="importmap"]')).toBeNull();
      expect((document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement).integrity).toBe(UMD_HASH);
    });

    it("takes the probe back out of the document once it answers", async () => {
      mapsImports(true);
      const probe = await boot();
      document.head.appendChild(probe!);
      probe!.dispatchEvent(new Event("error"));
      expect(probe!.isConnected).toBe(false);
    });

    it("a policy that signs the map but refuses the probe URL: hashed UMD", async () => {
      mapsImports(true);
      vi.stubGlobal("trustedTypes", { createPolicy: vi.fn() });
      (window as unknown as Record<string, unknown>).__qaidEmbedTrustedTypes = {
        policy: {
          createScript: (t: string) => t,
          createScriptURL: (u: string) => {
            if (/integrity-probe\.js$/.test(u)) throw new TypeError("refused");
            return u;
          },
        },
        allowed: {},
        allowedScripts: {},
      };
      const probe = await boot();
      expect(probe).toBeNull();
      expect(document.querySelector('script[type="importmap"]')).not.toBeNull();
      expect((document.querySelector('script[src*="qaid.umd.cjs"]') as HTMLScriptElement).integrity).toBe(UMD_HASH);
    });

    it("signs the map through the qaid-embed policy", async () => {
      mapsImports(true);
      const createPolicy = vi.fn(
        (_n: string, rules: { createScriptURL: (u: string) => string; createScript: (t: string) => string }) => ({
          createScriptURL: (u: string) => rules.createScriptURL(u),
          createScript: (t: string) => rules.createScript(t),
        })
      );
      vi.stubGlobal("trustedTypes", { createPolicy });
      await boot();
      expect(document.querySelector('script[type="importmap"]')).not.toBeNull();
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
