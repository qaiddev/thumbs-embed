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
 * IMPORTANT: this file must stay ES5-clean and dependency-free. It is the one
 * script that also runs on the legacy browsers we fall back for, so it can't
 * use syntax (arrow fns, const/let, template literals) they'd choke on before
 * the fallback ever loads. Written with var/function on purpose.
 */

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

  if (supportsModules) {
    entry.type = "module";
    entry.src = base + "loader.js";
  } else {
    // Classic bundle: defer so it runs after the document is parsed, matching
    // the module entry's deferred timing.
    entry.defer = true;
    entry.src = base + "qaid.umd.cjs";
  }

  (document.head || document.documentElement).appendChild(entry);
})();
