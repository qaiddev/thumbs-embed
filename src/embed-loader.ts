/**
 * Single-tag embed loader (`dist/embed.js`).
 *
 * A drop-in classic `<script>` that works in every browser. It feature-detects
 * ES-module support and injects the right build, so the page author never has
 * to think about compatibility:
 *
 *   - modern browsers → the progressive ESM loader (`loader.js`): a small core,
 *     with screenshot / video / annotation / targeting loading on demand.
 *   - older browsers  → the all-in-one UMD bundle (`qaid.umd.cjs`).
 *
 * The injected build initializes itself from the `data-*` attributes copied
 * across from this tag (or from a `<script type="application/json">` config
 * block already on the page), so exactly one embed is created either way.
 *
 * Usage:
 *   <script src="https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js"
 *           data-endpoint="/api/feedback"></script>
 *
 * (Distinct from `loader.ts`/`loader.js`, the ESM-only progressive entry this
 * one delegates to on modern browsers.)
 *
 * Pinned with Subresource Integrity (`integrity="sha384-…"` on this tag),
 * every file it loads after itself is hash-checked too, with hashes baked in
 * at build time (vite.config.embed.ts):
 *
 *   - Where the browser enforces import-map `integrity` (Chrome 127+,
 *     Safari 18+, Firefox 138+), it adds an import map listing the sha384 of
 *     loader.js and every lazy chunk, then loads the small progressive build.
 *     The browser refuses any chunk whose bytes differ.
 *   - Everywhere else it loads the single-file UMD bundle with its own hash.
 *
 * No browser lets a page ask whether import-map integrity is enforced, so it
 * finds out: the map also lists integrity-probe.js under a hash that can never
 * match, and it loads that file first. A browser that enforces the map refuses
 * it (onerror: take the progressive build); one that ignores the map, or a
 * page whose CSP blocks the inline map, runs it (onload: take the UMD bundle).
 * A refusal means the check is live, never that it is missing, so a pinned tag
 * never loads an unchecked file. The cost is one tiny request and one console
 * line about the probe's digest.
 *
 * IMPORTANT: this file must stay ES5-clean and dependency-free. It is the one
 * script that also runs on the legacy browsers we fall back for, so it can't
 * use syntax (arrow fns, const/let, template literals) they'd choke on before
 * the fallback ever loads. Written with var/function on purpose.
 */

import { trustedScript, trustedScriptUrl } from "./trusted-types";
import { ORIGIN_KEY_NAME } from "./origin-key";

/** sha384 of qaid.umd.cjs, set by vite.config.embed.ts. Empty in tests. */
declare const __QAID_UMD_INTEGRITY__: string | undefined;
/** sha384 of loader.js and every chunk, keyed by path under dist/. Empty in tests. */
declare const __QAID_MODULE_INTEGRITY__: Record<string, string> | undefined;
/** A sha384 integrity-probe.js never has. */
declare const __QAID_PROBE_MISMATCH__: string | undefined;

/** The probe file, beside embed.js. */
var PROBE_FILE = "integrity-probe.js";

(function () {
  if (typeof document === "undefined") return;

  // Locate this script tag: prefer document.currentScript (valid for a plain
  // classic script), else find the last <script> whose src looks like embed.js.
  function findSelf(): HTMLScriptElement | null {
    var cur = document.currentScript as HTMLScriptElement | null;
    if (cur && cur.src) return cur;
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].src || "";
      if (src.indexOf("thumbs-embed") !== -1 && /\/embed(\.min)?\.js(\?|#|$)/.test(src)) {
        return scripts[i];
      }
    }
    return null;
  }

  var self = findSelf();
  if (!self || !self.src) return;

  // Base = the directory that holds embed.js, e.g.
  // "https://unpkg.com/@qaiddev/thumbs-embed/dist/". loader.js's own relative
  // chunk imports then resolve against the same (CDN-versioned) base.
  var base = self.src.substring(0, self.src.lastIndexOf("/") + 1);

  var supportsModules = "noModule" in HTMLScriptElement.prototype;

  var entry = document.createElement("script");

  // Carry the config across so the injected build's auto-init sees it.
  var attrs = self.attributes;
  for (var j = 0; j < attrs.length; j++) {
    var a = attrs[j];
    if (a.name.indexOf("data-") === 0) entry.setAttribute(a.name, a.value);
  }

  // Lets the injected build find this tag, for the JSON config block beside
  // it. A property, not an attribute, so page markup can't fake it.
  (entry as unknown as Record<string, unknown>)[ORIGIN_KEY_NAME] = self;

  var umdIntegrity = typeof __QAID_UMD_INTEGRITY__ === "string" ? __QAID_UMD_INTEGRITY__ : "";
  var moduleIntegrity =
    typeof __QAID_MODULE_INTEGRITY__ === "object" && __QAID_MODULE_INTEGRITY__ ? __QAID_MODULE_INTEGRITY__ : null;
  var probeMismatch = typeof __QAID_PROBE_MISMATCH__ === "string" ? __QAID_PROBE_MISMATCH__ : "";
  var pinned = !!self.getAttribute("integrity") && !!umdIntegrity;

  function warn(message: string): void {
    if (typeof console !== "undefined") console.warn("[thumbs-embed] " + message);
  }

  function setSrc(el: HTMLScriptElement, url: string): boolean {
    try {
      el.src = trustedScriptUrl(url);
      return true;
    } catch (e) {
      // A Trusted Types page that doesn't allow the qaid-embed policy.
      warn("Trusted Types blocked " + url + ". Add `trusted-types qaid-embed` to the page's CSP.");
      return false;
    }
  }

  function append(el: HTMLElement): void {
    (document.head || document.documentElement).appendChild(el);
  }

  function loadModules(hash: string): void {
    entry.type = "module";
    if (hash) {
      entry.integrity = hash;
      entry.crossOrigin = "anonymous";
    }
    if (setSrc(entry, base + "loader.js")) append(entry);
  }

  function loadUmd(hash: string): void {
    // Classic bundle: defer so it runs after the document is parsed, matching
    // the module entry's deferred timing.
    entry.defer = true;
    if (hash) {
      entry.integrity = hash;
      entry.crossOrigin = "anonymous";
    }
    if (setSrc(entry, base + "qaid.umd.cjs")) append(entry);
  }

  function canMapImports(): boolean {
    var S = HTMLScriptElement as unknown as { supports?: (type: string) => boolean };
    return typeof S.supports === "function" && S.supports("importmap");
  }

  // Pinned on a module browser: try the hashed progressive build, else UMD.
  function loadPinned(): void {
    var hashes = moduleIntegrity as Record<string, string>;
    var map: { integrity: Record<string, string> } = { integrity: {} };
    for (var path in hashes) {
      if (Object.prototype.hasOwnProperty.call(hashes, path)) map.integrity[base + path] = hashes[path];
    }
    map.integrity[base + PROBE_FILE] = probeMismatch;

    var importMap = document.createElement("script");
    importMap.type = "importmap";
    try {
      importMap.text = trustedScript(JSON.stringify(map));
    } catch (e) {
      loadUmd(umdIntegrity);
      return;
    }
    append(importMap);

    var probe = document.createElement("script");
    probe.type = "module";
    probe.crossOrigin = "anonymous";
    var settled = false;
    function settle(enforced: boolean): void {
      if (settled) return;
      settled = true;
      if (probe.parentNode) probe.parentNode.removeChild(probe);
      if (enforced) loadModules(hashes["loader.js"]);
      else loadUmd(umdIntegrity);
    }
    probe.onerror = function () {
      settle(true);
    };
    probe.onload = function () {
      settle(false);
    };
    try {
      probe.src = trustedScriptUrl(base + PROBE_FILE);
    } catch (e) {
      loadUmd(umdIntegrity);
      return;
    }
    append(probe);
  }

  if (!supportsModules) {
    loadUmd(pinned ? umdIntegrity : "");
  } else if (!pinned) {
    loadModules("");
  } else if (moduleIntegrity && moduleIntegrity["loader.js"] && probeMismatch && canMapImports()) {
    loadPinned();
  } else {
    loadUmd(umdIntegrity);
  }
})();
