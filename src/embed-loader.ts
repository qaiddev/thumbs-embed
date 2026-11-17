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
 * Pinned with Subresource Integrity (`integrity="sha384-…"` on this tag), it
 * loads the single-file UMD bundle instead, with that file's own sha384 baked
 * in at build time (vite.config.embed.ts). `import()` can't carry a hash, so
 * the code-split ESM build's lazy chunks could not be checked; the one-file
 * bundle can, so every byte of the embed's JavaScript is verified.
 *
 * IMPORTANT: this file must stay ES5-clean and dependency-free. It is the one
 * script that also runs on the legacy browsers we fall back for, so it can't
 * use syntax (arrow fns, const/let, template literals) they'd choke on before
 * the fallback ever loads. Written with var/function on purpose.
 */

import { trustedScriptUrl } from "./trusted-types";
import { ORIGIN_KEY_NAME } from "./origin-key";

/** sha384 of qaid.umd.cjs, set by vite.config.embed.ts. Empty in tests. */
declare const __QAID_UMD_INTEGRITY__: string | undefined;

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
  var pinned = !!self.getAttribute("integrity") && !!umdIntegrity;

  var url: string;
  if (supportsModules && !pinned) {
    entry.type = "module";
    url = base + "loader.js";
  } else {
    // Classic bundle: defer so it runs after the document is parsed, matching
    // the module entry's deferred timing.
    entry.defer = true;
    url = base + "qaid.umd.cjs";
    if (pinned) {
      entry.integrity = umdIntegrity;
      entry.crossOrigin = "anonymous";
    }
  }

  try {
    entry.src = trustedScriptUrl(url);
  } catch (e) {
    // A Trusted Types page that doesn't allow the qaid-embed policy.
    if (typeof console !== "undefined") {
      console.warn("[thumbs-embed] Trusted Types blocked " + url + ". Add `trusted-types qaid-embed` to the page's CSP.");
    }
    return;
  }

  (document.head || document.documentElement).appendChild(entry);
})();
