const w = "https://qaid.dev/lib/html2canvas.min.js";
let a = null;
function g() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const n = document.createElement("canvas");
  return typeof n.getContext == "function" && !!n.getContext("2d");
}
function f() {
  return window.html2canvas ? Promise.resolve(!0) : a || (a = new Promise((n) => {
    if (!document.querySelector(
      `script[src="${w}"]`
    )) {
      const e = document.createElement("script");
      e.src = w, e.async = !0, document.head.appendChild(e);
    }
    const r = Date.now(), i = () => {
      if (window.html2canvas) {
        n(!0);
        return;
      }
      if (Date.now() - r > 1e4) {
        a = null, n(!1);
        return;
      }
      setTimeout(i, 50);
    };
    i();
  }), a);
}
async function L(n = {}) {
  const { quality: c = 0.8, maxWidth: r = 1280, maxHeight: i = 800 } = n;
  try {
    if (!await f() || !window.html2canvas)
      return console.warn("html2canvas failed to load"), null;
    const s = await window.html2canvas(document.body, {
      useCORS: !0,
      allowTaint: !1,
      logging: !1,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      x: window.scrollX,
      y: window.scrollY,
      ignoreElements: (t) => t instanceof HTMLElement ? t.classList.contains("qaid-buttons") || t.classList.contains("qaid-targeting-overlay") || t.classList.contains("qaid-modal-container") || t.classList.contains("qaid-bottom-sheet") || t.classList.contains("qaid-backdrop") || t.classList.contains("qaid-selected-marker") || t.classList.contains("qaid-tooltip-text") || t.classList.contains("qaid-recording-indicator") || t.classList.contains("qaid-video-preview") || t.className?.toString().startsWith?.("qaid-") : !1
    }), l = s.width, u = s.height, d = Math.min(r / l, i / u, 1);
    if (d < 1) {
      const t = Math.round(l * d), m = Math.round(u * d), o = document.createElement("canvas");
      o.width = t, o.height = m;
      const h = o.getContext("2d");
      return h ? (h.drawImage(s, 0, 0, t, m), o.toDataURL("image/webp", c)) : null;
    }
    return s.toDataURL("image/webp", c);
  } catch (e) {
    return console.warn("DOM screenshot capture failed:", e), null;
  }
}
export {
  L as captureDomScreenshot,
  g as isDomScreenshotSupported
};
//# sourceMappingURL=screenshot-dom-CME7tYRE.js.map
