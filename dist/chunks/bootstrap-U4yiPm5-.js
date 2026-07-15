import { i as nt, T as st, a as rt, R as dt } from "./annotate-BNibaDg3.js";
const lt = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}.qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:1rem;font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:.8125rem;line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:.8125rem;font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool{padding:0}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6366f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6366f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6366f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible,.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}button.qaid-recording-stop{min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible,.qaid-textarea:focus,button.qaid-btn-submit:focus,.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}", ct = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let b = 0;
const ut = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", ht = {
  small: 36,
  medium: 48,
  large: 64
}, pt = {
  small: 18,
  medium: 24,
  large: 32
};
function ft(e, t, i) {
  const [o, s, a] = [e, t, i].map((n) => (n = n / 255, n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)));
  return 0.2126 * o + 0.7152 * s + 0.0722 * a;
}
function bt(e) {
  if (e.startsWith("#")) {
    const i = e.slice(1), o = i.length === 3 ? i.split("").map((a) => a + a).join("") : i, s = parseInt(o, 16);
    return {
      r: s >> 16 & 255,
      g: s >> 8 & 255,
      b: s & 255
    };
  }
  const t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  } : null;
}
function mt(e) {
  const t = bt(e);
  return t && ft(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function gt(e = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: i = "rgb(255, 0, 0)",
    markerColor: o = "#6366f1",
    buttonSize: s = "medium",
    modalWidth: a = 400,
    backdropOpacity: n = 0.3,
    fontFamily: l = "system-ui, -apple-system, sans-serif",
    fontSize: c = 16
  } = e, d = ht[s], r = pt[s], h = mt(o);
  return {
    "--qaid-positive": t,
    "--qaid-negative": i,
    "--qaid-marker": o,
    "--qaid-marker-text": h,
    "--qaid-btn-size": `${d}px`,
    "--qaid-icon-size": `${r}px`,
    "--qaid-modal-width": `${a}px`,
    "--qaid-backdrop-opacity": String(n),
    "--qaid-font-family": l,
    "--qaid-font-size": `${c}px`
  };
}
function vt(e, t) {
  for (const [i, o] of Object.entries(t))
    e.style.setProperty(i, o);
}
function M() {
  return lt + ut;
}
function yt() {
  if (b++, b > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = ct, document.head.appendChild(e);
}
function wt() {
  b <= 0 || (b--, b === 0 && document.getElementById("qaid-styles").remove());
}
const B = "data-qaid-a11y-live", qt = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;", xt = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function kt(e) {
  return e.ownerDocument || document;
}
function St(e, t) {
  const i = t ? "assertive" : "polite", o = e.querySelector(
    `[${B}="${i}"]`
  );
  if (o) return o;
  const a = kt(e).createElement("div");
  return a.setAttribute(B, i), a.setAttribute("role", t ? "alert" : "status"), a.setAttribute("aria-live", t ? "assertive" : "polite"), a.setAttribute("aria-atomic", "true"), a.style.cssText = qt, e.appendChild(a), a;
}
function Ct(e, t, i = {}) {
  const o = St(e, !!i.assertive);
  o.textContent = "", o.textContent = t;
}
function At(e) {
  return e.hasAttribute("disabled") ? !0 : e.disabled === !0;
}
function Tt(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute("hidden")) return !0;
    const i = t.style;
    if (i && (i.display === "none" || i.visibility === "hidden" || i.visibility === "collapse"))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function O(e) {
  return Array.from(
    e.querySelectorAll(xt)
  ).filter((i) => !(i.getAttribute("tabindex") === "-1" || i instanceof HTMLInputElement && i.type === "hidden" || i instanceof HTMLAnchorElement && !i.getAttribute("href") || At(i) || Tt(i)));
}
function U(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t instanceof HTMLElement ? t : null;
}
function Dt(e) {
  const t = e.ownerDocument || document;
  let i = !1;
  const o = (a) => {
    if (a.key !== "Tab") return;
    const n = O(e);
    if (n.length === 0) {
      a.preventDefault(), e.focus();
      return;
    }
    const l = n[0], c = n[n.length - 1], d = U(t), r = d ? n.indexOf(d) !== -1 : !1;
    a.shiftKey ? (!r || d === l) && (a.preventDefault(), c.focus()) : (!r || d === c) && (a.preventDefault(), l.focus());
  };
  e.addEventListener("keydown", o);
  const s = O(e);
  return s.length > 0 ? s[0].focus() : (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), i = !0), e.focus()), {
    release() {
      e.removeEventListener("keydown", o), i && (e.removeAttribute("tabindex"), i = !1);
    }
  };
}
function It() {
  return U(document);
}
function Et(e) {
  if (!(!e || typeof e.focus != "function"))
    try {
      e.focus();
    } catch {
    }
}
function Ht(e, t = {}) {
  e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), t.labelledbyId && e.setAttribute("aria-labelledby", t.labelledbyId), t.describedbyId && e.setAttribute("aria-describedby", t.describedbyId), t.label && e.setAttribute("aria-label", t.label);
}
function zt(e, t) {
  let i = e;
  for (; i && i !== t; ) {
    const o = i.parentNode;
    if (o === t) return i;
    if (o && o.host) {
      i = o.host;
      continue;
    }
    if (!o) return null;
    i = o;
  }
  return null;
}
function Lt(e) {
  const i = (e.ownerDocument || document).body;
  if (!i) return () => {
  };
  const o = zt(e, i), s = [];
  return Array.from(i.children).forEach((a) => {
    if (!(a instanceof HTMLElement) || o && a === o) return;
    const n = a.inert === !0, l = a.getAttribute("aria-hidden");
    n && l === "true" || (a.inert = !0, a.setAttribute("aria-hidden", "true"), s.push({ el: a, prevInert: n, prevAriaHidden: l }));
  }), function() {
    for (; s.length; ) {
      const n = s.pop();
      n.el.inert = n.prevInert, n.prevAriaHidden === null ? n.el.removeAttribute("aria-hidden") : n.el.setAttribute("aria-hidden", n.prevAriaHidden);
    }
  };
}
const V = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Mt(e, t, i, o, s) {
  const a = e.y, n = t - (e.y + e.height);
  if (n >= i + o)
    return {
      top: e.y + e.height + o,
      position: "below"
    };
  if (a >= i + o)
    return {
      top: e.y - i - o,
      position: "above"
    };
  const l = n > a ? "below" : "above";
  let c;
  return l === "below" ? c = Math.min(
    e.y + e.height + o,
    t - i - s
  ) : c = Math.max(s, e.y - i - o), { top: c, position: l };
}
function Bt(e, t, i, o) {
  let a = e.x + e.width / 2 - i / 2;
  return a = Math.max(o, Math.min(a, t - i - o)), a;
}
function Ot(e, t, i, o = 24, s = 24) {
  const n = e.clickX - t - s / 2;
  return Math.max(o, Math.min(n, i - o - s / 2));
}
function Rt(e, t, i, o = V) {
  const s = o.height + o.arrowHeight, a = Mt(
    e,
    i,
    s,
    o.gap,
    o.viewportPadding
  ), n = Bt(
    e,
    t,
    o.width,
    o.viewportPadding
  );
  return {
    top: a.top,
    left: n,
    position: a.position
  };
}
function Pt(e, t, i, o = {}) {
  const s = o.gap ?? 8;
  let a = e.bottom + s;
  a + t.height > i.height - s && (a = e.top - t.height - s);
  let n = e.left;
  return n < s ? n = s : n + t.width > i.width - s && (n = i.width - t.width - s), a < s ? a = s : a + t.height > i.height - s && (a = i.height - t.height - s), { top: a, left: n };
}
function Zt(e, t, i, o = V) {
  const s = Rt(e, t, i, o), a = Ot(
    e,
    s.left,
    o.width
  );
  return {
    modal: s,
    arrow: { left: a }
  };
}
const Ft = 20;
function Ut(e) {
  const t = [], i = console.error, o = console.warn, s = console.log, a = (n, l) => {
    const c = {
      message: l.map((d) => String(d)).join(" "),
      timestamp: Date.now(),
      level: n
    };
    t.length >= Ft && t.shift(), t.push(c), e && e(c);
  };
  return console.error = function(...n) {
    a("error", n), i.apply(console, n);
  }, console.warn = function(...n) {
    a("warn", n), o.apply(console, n);
  }, console.log = function(...n) {
    a("log", n), s.apply(console, n);
  }, {
    errors: t,
    restore: () => {
      console.error = i, console.warn = o, console.log = s;
    }
  };
}
const Vt = "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js", Kt = (e) => (
  // The URL is a runtime value, not a static specifier — keep Vite from
  // trying to analyze/bundle it.
  import(
    /* @vite-ignore */
    e
  )
);
let _t = Kt, f = null, w = null;
function $t(e) {
  return f && w === e || (w = e, f = Promise.resolve(_t(e)).then((t) => {
    const i = t;
    if (!i || typeof i.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return i;
  }).catch((t) => {
    throw f = null, w = null, t;
  })), f;
}
async function Nt(e) {
  const t = await $t(e.moduleUrl), i = e.base.replace(/\/+$/, ""), o = e.feedbackId != null ? { feedbackId: e.feedbackId } : void 0;
  return new t.QaidQuests({
    endpoint: `${i}/responses`,
    configUrl: `${i}/${encodeURIComponent(e.questId)}/definition`,
    apiKey: e.apiKey || void 0,
    metadata: o,
    onClose: e.onClose
  });
}
const R = "qaid_visitor_id", P = "qaid_hide_feedback";
function jt() {
  return typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches;
}
function q(e) {
  return e ? `${P}_${e}` : P;
}
function Qt(e) {
  try {
    return localStorage.getItem(q(e)) === "1";
  } catch {
    return !1;
  }
}
function F(e, t = !0) {
  try {
    t ? localStorage.setItem(q(e), "1") : localStorage.removeItem(q(e));
  } catch {
  }
}
function Wt() {
  try {
    let e = localStorage.getItem(R);
    return e || (e = crypto.randomUUID(), localStorage.setItem(R, e)), e;
  } catch {
    return crypto.randomUUID();
  }
}
class Yt {
  config;
  state = "IDLE";
  feedbackData = {
    feedbackType: null,
    elementSelector: null,
    elementText: null,
    consoleErrors: []
  };
  selectedBounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    clickX: 0,
    clickY: 0,
    visible: !1
  };
  feedbackId = null;
  // A quest launched from a button (in place of the message box), if any.
  activeQuest = null;
  isMobile = !1;
  visitorId;
  // Console capture
  consoleCapture = null;
  // Video recording — the whole subsystem lives in a lazily-loaded chunk
  // (recording.ts); a thumbs-only visitor never downloads it.
  recording = null;
  // Element targeting — also a lazily-loaded chunk (targeting.ts).
  targeting = null;
  targetingPrewarmed = !1;
  // Preload-on-intent: warm the lazily-split feature chunks before first use.
  prewarmHandle = null;
  prewarmIsTimeout = !1;
  videoPrewarmed = !1;
  screenshotPrewarmed = !1;
  // Shadow DOM
  shadowHost = null;
  shadowRoot = null;
  // Overlay shadow DOM (always on document.body for full-page coverage)
  overlayShadowHost = null;
  overlayShadowRoot = null;
  // DOM elements (inside shadow root)
  buttonsContainer = null;
  isUserProvidedContainer = !1;
  // The message modal lives in a lazily-loaded chunk (modal.ts).
  modal = null;
  modalPrewarmed = !1;
  dismissBtn = null;
  // Per-instance CSS variables
  cssVars = {};
  activeThumbBtn = null;
  // Tracks whether the pending activation came from the keyboard (Enter/Space)
  // rather than a pointer, so targeting can avoid elementFromPoint(0,0).
  keyboardActivation = !1;
  // Accessibility: dialog focus management
  dialogTrigger = null;
  dialogTrap = null;
  dialogRestoreInert = null;
  // Unique id suffix for aria-labelledby/describedby references
  uid = Math.random().toString(36).slice(2, 9);
  // Bound event handlers
  boundKeyDown;
  boundResize;
  // Start with buttons slid off-screen (localStorage dismiss, no animation)
  _startDismissed = !1;
  // DOM persistence (survives framework client-side navigation)
  destroyed = !1;
  domObserver = null;
  boundBeforeSwap = null;
  constructor(t) {
    this.config = {
      endpoint: t.endpoint,
      apiKey: t.apiKey ?? "",
      container: t.container ?? "",
      buttonClass: t.buttonClass ?? "",
      direction: t.direction ?? "horizontal",
      position: t.position ?? "bottom-right",
      offset: {
        x: t.offset?.x ?? 16,
        y: t.offset?.y ?? 16
      },
      zIndex: t.zIndex ?? 50,
      skipTargeting: t.skipTargeting ?? !1,
      colors: {
        positive: t.colors?.positive ?? "rgb(0, 200, 83)",
        negative: t.colors?.negative ?? "rgb(255, 0, 0)",
        marker: t.colors?.marker ?? "#6366f1"
      },
      buttonSize: t.buttonSize ?? "medium",
      text: {
        tooltip: t.text?.tooltip ?? "",
        modalTitle: t.text?.modalTitle ?? "Thank you for your feedback!",
        modalSubtitle: t.text?.modalSubtitle ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: t.text?.placeholder ?? "Optional: Tell us more about your experience...",
        submitButton: t.text?.submitButton ?? "Submit",
        skipButton: t.text?.skipButton ?? "Skip",
        positiveLabel: t.text?.positiveLabel ?? "Send positive feedback",
        negativeLabel: t.text?.negativeLabel ?? "Send negative feedback",
        recordLabel: t.text?.recordLabel ?? "Record a screen recording",
        dismissLabel: t.text?.dismissLabel ?? "Hide Feedback"
      },
      modalWidth: t.modalWidth ?? 400,
      backdropOpacity: t.backdropOpacity ?? 0.3,
      fontFamily: t.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: t.fontSize ?? 16,
      captureScreenshot: t.captureScreenshot ?? !1,
      annotate: t.annotate ?? !0,
      screenshotMethod: t.screenshotMethod ?? "permission",
      screenshotOptions: {
        quality: t.screenshotOptions?.quality ?? 0.8,
        maxWidth: t.screenshotOptions?.maxWidth ?? 1280,
        maxHeight: t.screenshotOptions?.maxHeight ?? 800
      },
      incognito: t.incognito ?? !1,
      hideDismiss: t.hideDismiss ?? !1,
      positiveIcon: t.positiveIcon ?? "",
      negativeIcon: t.negativeIcon ?? "",
      hideThumbs: t.hideThumbs ?? !1,
      css: t.css ?? "",
      captureVideo: t.captureVideo ?? !1,
      videoOptions: {
        maxDuration: t.videoOptions?.maxDuration ?? 15,
        redaction: t.videoOptions?.redaction ?? !1
      },
      recordIcon: t.recordIcon ?? "",
      quests: {
        base: t.quests?.base ?? "",
        up: t.quests?.up ?? "",
        down: t.quests?.down ?? "",
        video: t.quests?.video ?? "",
        // Quest service reuses the feedback API key unless overridden.
        apiKey: t.quests?.apiKey ?? t.apiKey ?? "",
        moduleUrl: t.quests?.moduleUrl ?? Vt
      }
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Wt(), this.init();
  }
  applyVars(t) {
    vt(t, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(t, i = !1) {
    const o = this.overlayShadowRoot ?? this.shadowRoot;
    o && Ct(o, t, { assertive: i });
  }
  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path.
   */
  openDialogA11y(t, i) {
    this.dialogTrigger = It(), Ht(t, i), this.dialogTrap = Dt(t), this.dialogRestoreInert = Lt(t);
  }
  closeDialogA11y() {
    this.dialogTrap?.release(), this.dialogTrap = null, this.dialogRestoreInert && (this.dialogRestoreInert(), this.dialogRestoreInert = null), Et(this.dialogTrigger), this.dialogTrigger = null;
  }
  clearActiveThumb() {
    this.activeThumbBtn && (this.activeThumbBtn.setAttribute("aria-pressed", "false"), this.activeThumbBtn = null);
  }
  init() {
    yt(), this.cssVars = gt({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && Qt(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = Ut((t) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors, this.observeDom(), (this.config.captureVideo && this.videoSupported() || this.config.captureScreenshot) && this.schedulePrewarm(() => {
      this.config.captureVideo && this.videoSupported() && this.prewarmVideo(), this.config.captureScreenshot && this.prewarmScreenshot();
    });
  }
  /**
   * Best-effort preload of a lazily-split feature chunk so its first use is
   * instant. Warming fetches + compiles (and defines) the module; the feature
   * modules have no load-time side effects, so this is safe. Errors are
   * swallowed — a failed preload just falls back to an on-demand load.
   */
  prewarmVideo() {
    this.videoPrewarmed || (this.videoPrewarmed = !0, import("./recording--IwOtRL2.js").catch(() => {
    }), import("./video-BOYqf2Im.js").catch(() => {
    }));
  }
  prewarmScreenshot() {
    this.screenshotPrewarmed || (this.screenshotPrewarmed = !0, (this.shouldCaptureViaDom() ? import("./screenshot-dom-CME7tYRE.js") : import("./screenshot-BkOCLuS2.js")).catch(() => {
    }), this.config.annotate && import("./annotate-BNibaDg3.js").then((t) => t.f).catch(() => {
    }));
  }
  /** Run fn when the main thread is idle; cancelled by destroy(). */
  schedulePrewarm(t) {
    const i = window, o = () => {
      this.destroyed || t();
    };
    typeof i.requestIdleCallback == "function" ? (this.prewarmIsTimeout = !1, this.prewarmHandle = i.requestIdleCallback(o, { timeout: 2e3 })) : (this.prewarmIsTimeout = !0, this.prewarmHandle = window.setTimeout(o, 1200));
  }
  /**
   * Watch for the shadow hosts being removed from the DOM by framework
   * client-side navigation (e.g. Astro View Transitions swapping <body>
   * contents, or any SPA router that replaces DOM subtrees). If the host
   * is disconnected and destroy() wasn't called, re-append it.
   *
   * Also hooks into Astro's `astro:before-swap` when available, which
   * lets us carry elements into the new document before the swap happens
   * (avoids a flash of the widget disappearing and reappearing).
   */
  observeDom() {
    this.boundBeforeSwap = (t) => {
      const i = t.newDocument;
      !i || this.destroyed || (this.shadowHost && i.body.appendChild(this.shadowHost), this.overlayShadowHost && i.body.appendChild(this.overlayShadowHost));
    }, document.addEventListener("astro:before-swap", this.boundBeforeSwap), this.domObserver = new MutationObserver(() => {
      this.destroyed || (this.shadowHost && !this.shadowHost.isConnected && document.body.appendChild(this.shadowHost), this.overlayShadowHost && !this.overlayShadowHost.isConnected && document.body.appendChild(this.overlayShadowHost));
    }), this.domObserver.observe(document.body, { childList: !0 });
  }
  checkMobile() {
    this.isMobile = nt();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let t = null;
    this.config.container && (t = document.querySelector(this.config.container)), t ? (t.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const i = document.createElement("style");
    if (i.textContent = M(), this.shadowRoot.appendChild(i), this.config.css) {
      const d = document.createElement("style");
      d.textContent = this.config.css, this.shadowRoot.appendChild(d);
    }
    const o = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${o}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${o}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: d, y: r } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${d}px` : this.buttonsContainer.style.left = `${d}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${r}px` : this.buttonsContainer.style.top = `${r}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer), this.buttonsContainer.addEventListener("keydown", (d) => {
      (d.key === "Enter" || d.key === " " || d.key === "Spacebar") && (this.keyboardActivation = !0);
    }), this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = !1;
    }), this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = !1;
    });
    const s = !!this.config.buttonClass, a = s ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", l = this.config.text.tooltip || "Feedback for us?", c = document.createElement("div");
    if (c.className = "qaid-tooltip-text", c.textContent = l, this.applyVars(c), this.shadowRoot.appendChild(c), this.tooltipElement = c, !this.config.hideThumbs) {
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = s ? `${a} qaid-btn-up` : "qaid-btn qaid-btn-up", r.setAttribute("aria-label", this.config.text.positiveLabel), r.innerHTML = this.config.positiveIcon || st, r.addEventListener("click", (p) => this.handleThumbClick("up", p.currentTarget, p)), r.addEventListener("mouseenter", () => {
        this.prewarmTargeting(), this.showTooltip(r);
      }), r.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(r);
      const h = document.createElement("div");
      h.className = "qaid-tooltip-wrapper";
      const u = document.createElement("button");
      u.type = "button", u.className = s ? `${a} qaid-btn-down` : "qaid-btn qaid-btn-down", u.setAttribute("aria-label", this.config.text.negativeLabel), u.innerHTML = this.config.negativeIcon || rt, u.addEventListener("click", (p) => this.handleThumbClick("down", p.currentTarget, p)), u.addEventListener("mouseenter", () => {
        this.prewarmTargeting(), this.showTooltip(u);
      }), u.addEventListener("mouseleave", () => this.hideTooltip()), h.appendChild(u), this.buttonsContainer.appendChild(d), this.buttonsContainer.appendChild(h);
    }
    if (this.config.captureVideo && this.videoSupported()) {
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = s ? `${a} qaid-btn-record` : "qaid-btn qaid-btn-record", r.setAttribute("aria-label", this.config.text.recordLabel), r.innerHTML = this.config.recordIcon || dt, r.addEventListener("click", () => {
        this.ensureRecording().then(
          (u) => this.config.videoOptions.redaction ? u.startPicking() : u.startRecording()
        );
      });
      const h = () => this.prewarmVideo();
      r.addEventListener("mouseenter", () => {
        h(), this.showTooltip(r);
      }), r.addEventListener("focus", h), r.addEventListener("touchstart", h, { passive: !0 }), r.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(r), this.buttonsContainer.appendChild(d);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, this.dismissBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', this.dismissBtn.addEventListener("click", (d) => {
      d.stopPropagation(), this.handleDismiss();
    }), this.buttonsContainer.insertBefore(this.dismissBtn, this.buttonsContainer.firstChild), this._startDismissed && this.buttonsContainer.classList.add("qaid-dismissed"));
  }
  /**
   * Lazily create a separate overlay shadow host on document.body.
   * This host contains all full-page elements (targeting overlay, marker,
   * backdrop, modal, recording indicator, video preview) so they escape
   * clip-path / transform containing blocks in user containers.
   */
  ensureOverlayHost() {
    if (this.overlayShadowRoot) return this.overlayShadowRoot;
    this.overlayShadowHost = document.createElement("div"), this.overlayShadowHost.setAttribute("data-qaid-embed-overlay", ""), this.overlayShadowHost.style.position = "fixed", this.overlayShadowHost.style.inset = "0", this.overlayShadowHost.style.pointerEvents = "none", this.overlayShadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.overlayShadowHost), this.overlayShadowRoot = this.overlayShadowHost.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    if (t.textContent = M(), this.overlayShadowRoot.appendChild(t), this.config.css) {
      const i = document.createElement("style");
      i.textContent = this.config.css, this.overlayShadowRoot.appendChild(i);
    }
    return this.overlayShadowRoot;
  }
  tooltipElement = null;
  showTooltip(t) {
    const i = this.tooltipElement;
    i.style.visibility = "hidden", i.classList.add("qaid-tooltip-visible");
    const o = t.getBoundingClientRect(), s = i.getBoundingClientRect(), { top: a, left: n } = Pt(
      o,
      s,
      { width: window.innerWidth, height: window.innerHeight }
    );
    i.style.top = `${a}px`, i.style.left = `${n}px`, i.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleDismiss() {
    this.buttonsContainer.classList.add("qaid-dismissed"), F(this.config.apiKey, !0);
  }
  handleThumbClick(t, i, o) {
    if (this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), F(this.config.apiKey, !1)), this.prewarmModal(), this.config.skipTargeting)
      this.submitDirectFeedback(t, i);
    else {
      this.activeThumbBtn = i, i.setAttribute("aria-pressed", "true");
      const s = this.keyboardActivation;
      this.keyboardActivation = !1, this.ensureTargeting().then((a) => {
        this.destroyed || (s ? a.startKeyboard(t) : a.startPointer(t, o));
      });
    }
  }
  submitDirectFeedback(t, i) {
    this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null;
    const o = i.getBoundingClientRect();
    this.selectedBounds = {
      x: o.left,
      y: o.top,
      width: o.width,
      height: o.height,
      clickX: o.left + o.width / 2,
      clickY: o.top + o.height / 2,
      visible: !1
    }, this.submitFeedback();
  }
  handleKeyDown(t) {
    if (t.key === "Escape") {
      if (this.recording?.handleEscape()) return;
      this.state === "TARGETING" ? this.targeting?.cancel() : this.state === "MODAL_OPEN" && this.modal?.close();
    }
  }
  /** Whether to capture the screenshot with the DOM/canvas method (html2canvas)
   *  instead of the permission-based Screen Capture API. Explicit "dom" wins;
   *  otherwise DOM is used on touch devices to avoid the getDisplayMedia prompt. */
  shouldCaptureViaDom() {
    return this.config.screenshotMethod === "dom" || jt();
  }
  /**
   * Open the full-screen annotation editor over the captured screenshot,
   * reusing the overlay shadow host and the shared dialog a11y helpers.
   * Resolves with the composited WebP data URL, or null when the user skips
   * (caller keeps the original). Pointer events on the overlay host are
   * enabled while the editor is open and restored on close.
   */
  async openAnnotationEditor(t) {
    const i = this.ensureOverlayHost(), o = this.overlayShadowHost, s = o.style.pointerEvents;
    o.style.pointerEvents = "auto";
    try {
      const { openAnnotationEditor: a } = await import("./annotate-BNibaDg3.js").then((n) => n.f);
      return await a({
        dataUrl: t,
        root: i,
        quality: this.config.screenshotOptions.quality,
        color: this.config.colors.marker,
        applyVars: (n) => this.applyVars(n),
        announce: (n, l) => this.announceMsg(n, l),
        openDialog: (n, l) => this.openDialogA11y(n, l),
        closeDialog: () => this.closeDialogA11y()
      });
    } finally {
      o.style.pointerEvents = s;
    }
  }
  async submitFeedback() {
    let t = null;
    if (this.config.captureScreenshot) {
      if (this.shouldCaptureViaDom()) {
        const { captureDomScreenshot: n } = await import("./screenshot-dom-CME7tYRE.js");
        t = await n(this.config.screenshotOptions);
      } else {
        const { captureScreenshot: n } = await import("./screenshot-BkOCLuS2.js");
        t = await n(this.config.screenshotOptions);
      }
      t && this.announceMsg("Screenshot captured");
    }
    t && this.config.annotate && (t = await this.openAnnotationEditor(t) ?? t);
    const i = this.feedbackData.elementSelector ? {
      x: this.selectedBounds.x,
      y: this.selectedBounds.y,
      width: this.selectedBounds.width,
      height: this.selectedBounds.height
    } : null, o = {
      feedbackType: this.feedbackData.feedbackType,
      pageUrl: window.location.href,
      apiKey: this.config.apiKey || void 0,
      elementSelector: this.feedbackData.elementSelector,
      elementText: this.feedbackData.elementText,
      consoleErrors: [...this.feedbackData.consoleErrors],
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      clickX: this.selectedBounds.clickX,
      clickY: this.selectedBounds.clickY,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      screenshot: t,
      visitorId: this.visitorId,
      // Include element bounds and user agent for server-side screenshot fallback
      elementBounds: i,
      userAgent: navigator.userAgent
    };
    try {
      const n = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o)
      });
      if (n.ok) {
        const l = await n.json();
        this.feedbackId = l.id, this.announceMsg("Feedback sent");
      }
    } catch (n) {
      console.error("Failed to submit feedback:", n), this.announceMsg("Failed to send feedback", !0);
    }
    const s = this.feedbackData.feedbackType;
    if (s && await this.tryLaunchQuest(s, this.feedbackId)) {
      this.resetFeedbackUi();
      return;
    }
    this.state = "MODAL_OPEN";
    const a = await this.ensureModal();
    this.destroyed || (a.open(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"));
  }
  /**
   * Quest id linked to `type`, or "" when quest launching is disabled
   * (no `base`) or this button has no quest configured.
   */
  questIdFor(t) {
    const i = this.config.quests;
    return i.base && i[t] || "";
  }
  /**
   * Launch the quest linked to `type`, if any. Resolves `true` when a quest
   * was configured and the widget launched; `false` when no quest is
   * configured or the widget failed to load (caller falls back to its
   * normal UI). The created feedback record id is passed through so the
   * quest response can be joined back to it server-side.
   */
  async tryLaunchQuest(t, i) {
    const o = this.questIdFor(t);
    if (!o) return !1;
    try {
      return this.activeQuest?.destroy(), this.activeQuest = await Nt({
        questId: o,
        base: this.config.quests.base,
        apiKey: this.config.quests.apiKey || void 0,
        moduleUrl: this.config.quests.moduleUrl,
        feedbackId: i,
        onClose: () => {
          this.activeQuest = null;
        }
      }), !0;
    } catch (s) {
      return console.error("Failed to launch quest:", s), this.activeQuest = null, !1;
    }
  }
  /**
   * Reset the thumbs targeting/marker UI back to idle without opening or
   * closing the message modal. Shared by closeModal() and the quest-launch
   * path (which bypasses the modal entirely).
   */
  resetFeedbackUi() {
    this.targeting?.hideMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  /**
   * Lazily load and instantiate the modal controller. The message modal lives
   * in a separate chunk, fetched the first time it opens (and pre-warmed while
   * the user targets an element — see prewarmModal).
   */
  async ensureModal() {
    if (!this.modal) {
      const { ModalController: t } = await import("./modal-BX5wqy4s.js");
      this.modal = new t(this.makeModalHost());
    }
    return this.modal;
  }
  /** Narrow view of the embed the modal controller talks back through. */
  makeModalHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get uid() {
        return t.uid;
      },
      get isMobile() {
        return t.isMobile;
      },
      get state() {
        return t.state;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get feedbackData() {
        return t.feedbackData;
      },
      get selectedBounds() {
        return t.selectedBounds;
      },
      get feedbackId() {
        return t.feedbackId;
      },
      setFeedbackId: (i) => {
        t.feedbackId = i;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (i) => t.applyVars(i),
      announceMsg: (i, o) => t.announceMsg(i, o),
      openDialogA11y: (i, o) => t.openDialogA11y(i, o),
      closeDialogA11y: () => t.closeDialogA11y(),
      resetFeedbackUi: () => t.resetFeedbackUi()
    };
  }
  /** Warm the modal chunk while the user is targeting, so it opens instantly. */
  prewarmModal() {
    this.modalPrewarmed || (this.modalPrewarmed = !0, import("./modal-BX5wqy4s.js").catch(() => {
    }));
  }
  /**
   * Lazily load and instantiate the targeting controller. The subsystem (with
   * element-selector) lives in a separate chunk, fetched the first time the
   * user targets — pre-warmed on thumb-button hover (see prewarmTargeting).
   */
  async ensureTargeting() {
    if (!this.targeting) {
      const { TargetingController: t } = await import("./targeting-DwdDr9Cm.js");
      this.targeting = new t(this.makeTargetingHost());
    }
    return this.targeting;
  }
  /** Narrow view of the embed the targeting controller talks back through. */
  makeTargetingHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get cssVars() {
        return t.cssVars;
      },
      get state() {
        return t.state;
      },
      get shadowHost() {
        return t.shadowHost;
      },
      get overlayShadowHost() {
        return t.overlayShadowHost;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get feedbackData() {
        return t.feedbackData;
      },
      get selectedBounds() {
        return t.selectedBounds;
      },
      setState: (i) => {
        t.state = i;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (i) => t.applyVars(i),
      announceMsg: (i, o) => t.announceMsg(i, o),
      clearActiveThumb: () => t.clearActiveThumb(),
      submitFeedback: () => t.submitFeedback()
    };
  }
  /** Warm the targeting chunk on thumb-button hover, before the click. */
  prewarmTargeting() {
    this.targetingPrewarmed || this.config.skipTargeting || (this.targetingPrewarmed = !0, import("./targeting-DwdDr9Cm.js").catch(() => {
    }));
  }
  // ==================== Video Recording ====================
  /**
   * Cheap synchronous capability check so the record button can render without
   * pulling in the (lazily-loaded) video subsystem. Mirrors
   * isVideoRecordingSupported() in video-capture.ts.
   */
  videoSupported() {
    return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
  }
  /**
   * Lazily load and instantiate the recording controller. The whole recording
   * subsystem lives in a separate chunk, fetched only the first time the record
   * button is used (and pre-warmed on hover — see prewarmVideo).
   */
  async ensureRecording() {
    if (!this.recording) {
      const { RecordingController: t } = await import("./recording--IwOtRL2.js");
      this.recording = new t(this.makeRecordingHost());
    }
    return this.recording;
  }
  /** Narrow view of the embed the recording controller talks back through. */
  makeRecordingHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get visitorId() {
        return t.visitorId;
      },
      get uid() {
        return t.uid;
      },
      get overlayShadowHost() {
        return t.overlayShadowHost;
      },
      get consoleCapture() {
        return t.consoleCapture;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get state() {
        return t.state;
      },
      setState: (i) => {
        t.state = i;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (i) => t.applyVars(i),
      announceMsg: (i, o) => t.announceMsg(i, o),
      openDialogA11y: (i, o) => t.openDialogA11y(i, o),
      closeDialogA11y: () => t.closeDialogA11y(),
      setButtonsDisabled: (i) => t.setButtonsDisabled(i),
      tryLaunchQuest: (i, o) => t.tryLaunchQuest(i, o)
    };
  }
  setButtonsDisabled(t) {
    if (!this.buttonsContainer) return;
    this.buttonsContainer.querySelectorAll("button.qaid-btn, button.qaid-btn-structural").forEach((o) => {
      t ? o.classList.contains("qaid-btn-record") || (o.disabled = !0, o.style.opacity = "0.5") : (o.disabled = !1, o.style.opacity = "");
    });
  }
  /**
   * Destroy the embed and clean up all resources
   */
  destroy() {
    if (this.destroyed = !0, this.domObserver && (this.domObserver.disconnect(), this.domObserver = null), this.boundBeforeSwap && (document.removeEventListener("astro:before-swap", this.boundBeforeSwap), this.boundBeforeSwap = null), this.targeting?.destroy(), this.targeting = null, this.clearActiveThumb(), this.closeDialogA11y(), this.prewarmHandle !== null) {
      const t = window;
      this.prewarmIsTimeout ? clearTimeout(this.prewarmHandle) : t.cancelIdleCallback?.(this.prewarmHandle), this.prewarmHandle = null;
    }
    this.recording?.destroy(), this.recording = null, this.modal?.destroy(), this.modal = null, this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.dismissBtn = null, this.tooltipElement = null, wt();
  }
}
function K(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
function Xt() {
  const e = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!e) return null;
  const t = e.textContent?.trim();
  if (!t) return null;
  try {
    const i = JSON.parse(t);
    return i.cssSelector && !i.css && (i.css = K(i.cssSelector), delete i.cssSelector), i;
  } catch {
    return null;
  }
}
function Gt(e) {
  const t = e.getAttribute("data-endpoint");
  if (!t) return null;
  const i = e.getAttribute("data-position"), o = e.getAttribute("data-zindex"), s = e.getAttribute("data-positive-color"), a = e.getAttribute("data-negative-color"), n = e.getAttribute("data-marker-color"), l = e.getAttribute("data-container"), c = e.getAttribute("data-button-class"), d = e.getAttribute("data-skip-targeting"), r = e.getAttribute("data-incognito"), h = e.getAttribute("data-button-size"), u = e.getAttribute("data-offset-x"), p = e.getAttribute("data-offset-y"), x = e.getAttribute("data-modal-width"), k = e.getAttribute("data-backdrop-opacity"), _ = e.getAttribute("data-font-family"), S = e.getAttribute("data-font-size"), C = e.getAttribute("data-tooltip"), A = e.getAttribute("data-modal-title"), T = e.getAttribute("data-modal-subtitle"), D = e.getAttribute("data-placeholder"), I = e.getAttribute("data-submit-button"), E = e.getAttribute("data-skip-button"), $ = e.getAttribute("data-positive-icon"), N = e.getAttribute("data-negative-icon"), j = e.getAttribute("data-api-key"), Q = e.getAttribute("data-capture-screenshot"), W = e.getAttribute("data-annotate"), m = e.getAttribute("data-screenshot-quality"), g = e.getAttribute("data-screenshot-max-width"), v = e.getAttribute("data-screenshot-max-height"), Y = e.getAttribute("data-capture-video"), H = e.getAttribute("data-video-redaction"), X = e.getAttribute("data-hide-thumbs"), G = e.getAttribute("data-hide-dismiss"), y = e.getAttribute("data-video-max-duration"), J = e.getAttribute("data-screenshot-method"), Z = e.getAttribute("data-direction"), z = e.getAttribute("data-css-selector"), L = e.getAttribute("data-quest-base"), tt = e.getAttribute("data-quest-up"), et = e.getAttribute("data-quest-down"), it = e.getAttribute("data-quest-video"), ot = e.getAttribute("data-quest-api-key"), at = e.getAttribute("data-quest-module-url");
  return {
    endpoint: t,
    css: z ? K(z) : void 0,
    apiKey: j ?? void 0,
    captureScreenshot: Q === "true" ? !0 : void 0,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: W === "false" ? !1 : void 0,
    screenshotOptions: m || g || v ? {
      quality: m ? parseFloat(m) : void 0,
      maxWidth: g ? parseInt(g, 10) : void 0,
      maxHeight: v ? parseInt(v, 10) : void 0
    } : void 0,
    container: l ?? void 0,
    buttonClass: c ?? void 0,
    direction: Z ?? void 0,
    position: i ?? void 0,
    zIndex: o ? parseInt(o, 10) : void 0,
    skipTargeting: d === "true" ? !0 : void 0,
    incognito: r === "true" ? !0 : void 0,
    buttonSize: h ?? void 0,
    offset: u || p ? {
      x: u ? parseInt(u, 10) : void 0,
      y: p ? parseInt(p, 10) : void 0
    } : void 0,
    modalWidth: x ? parseInt(x, 10) : void 0,
    backdropOpacity: k ? parseFloat(k) : void 0,
    fontFamily: _ ?? void 0,
    fontSize: S ? parseInt(S, 10) : void 0,
    colors: {
      positive: s ?? void 0,
      negative: a ?? void 0,
      marker: n ?? void 0
    },
    text: C || A || T || D || I || E ? {
      tooltip: C ?? void 0,
      modalTitle: A ?? void 0,
      modalSubtitle: T ?? void 0,
      placeholder: D ?? void 0,
      submitButton: I ?? void 0,
      skipButton: E ?? void 0
    } : void 0,
    positiveIcon: $ ?? void 0,
    negativeIcon: N ?? void 0,
    screenshotMethod: J ?? void 0,
    captureVideo: Y === "true" ? !0 : void 0,
    hideThumbs: X === "true" ? !0 : void 0,
    hideDismiss: G === "true" ? !0 : void 0,
    videoOptions: y || H ? {
      maxDuration: y ? parseInt(y, 10) : void 0,
      redaction: H === "true" ? !0 : void 0
    } : void 0,
    quests: L ? {
      base: L,
      up: tt ?? void 0,
      down: et ?? void 0,
      video: it ?? void 0,
      apiKey: ot ?? void 0,
      moduleUrl: at ?? void 0
    } : void 0
  };
}
function te() {
  if (typeof document > "u") return;
  const e = () => {
    const t = document.currentScript ?? document.querySelector("script[data-endpoint]"), i = Xt(), o = t ? Gt(t) : null, s = i ?? o;
    s?.endpoint && new Yt(s);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  Yt as Q,
  te as a,
  Zt as c
};
//# sourceMappingURL=bootstrap-U4yiPm5-.js.map
