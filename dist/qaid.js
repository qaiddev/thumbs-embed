const I = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, A = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, bt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, gt = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible,.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}button.qaid-recording-stop{min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible,.qaid-textarea:focus,button.qaid-btn-submit:focus,.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}", vt = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let k = 0;
const yt = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", wt = {
  small: 36,
  medium: 48,
  large: 64
}, xt = {
  small: 18,
  medium: 24,
  large: 32
};
function qt(e, t, i) {
  const [o, n, s] = [e, t, i].map((a) => (a = a / 255, a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)));
  return 0.2126 * o + 0.7152 * n + 0.0722 * s;
}
function kt(e) {
  if (e.startsWith("#")) {
    const i = e.slice(1), o = i.length === 3 ? i.split("").map((s) => s + s).join("") : i, n = parseInt(o, 16);
    return {
      r: n >> 16 & 255,
      g: n >> 8 & 255,
      b: n & 255
    };
  }
  const t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  } : null;
}
function Ct(e) {
  const t = kt(e);
  return t && qt(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function St(e = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: i = "rgb(255, 0, 0)",
    markerColor: o = "#6366f1",
    buttonSize: n = "medium",
    modalWidth: s = 400,
    backdropOpacity: a = 0.3,
    fontFamily: d = "system-ui, -apple-system, sans-serif",
    fontSize: l = 16
  } = e, r = wt[n], c = xt[n], p = Ct(o);
  return {
    "--qaid-positive": t,
    "--qaid-negative": i,
    "--qaid-marker": o,
    "--qaid-marker-text": p,
    "--qaid-btn-size": `${r}px`,
    "--qaid-icon-size": `${c}px`,
    "--qaid-modal-width": `${s}px`,
    "--qaid-backdrop-opacity": String(a),
    "--qaid-font-family": d,
    "--qaid-font-size": `${l}px`
  };
}
function Et(e, t) {
  for (const [i, o] of Object.entries(t))
    e.style.setProperty(i, o);
}
function N() {
  return gt + yt;
}
function Tt() {
  if (k++, k > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = vt, document.head.appendChild(e);
}
function Lt() {
  k <= 0 || (k--, k === 0 && document.getElementById("qaid-styles").remove());
}
const G = ["data-comp", "data-qa", "data-testid", "data-id"];
function J(e, t = document.body) {
  let i = e;
  for (; i && i !== t; ) {
    for (const o of G) {
      const n = i.getAttribute(o);
      if (n)
        return `${o}="${n}"`;
    }
    i = i.parentElement;
  }
  return null;
}
function It(e, t = 100) {
  const i = e.textContent?.trim().slice(0, t) || "";
  return i.length === t ? i + "..." : i;
}
function At(e) {
  let t = 1, i = e.previousElementSibling;
  for (; i; )
    t++, i = i.previousElementSibling;
  return t;
}
function Dt(e) {
  const t = [];
  let i = e;
  for (; i && i !== document.body && i !== document.documentElement; ) {
    const o = i.tagName.toLowerCase(), n = At(i);
    t.unshift(`${o}:nth-child(${n})`), i = i.parentElement;
  }
  return t.length > 0 ? `body > ${t.join(" > ")}` : "body";
}
function Mt(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function Rt(e) {
  const t = J(e);
  return t ? `[${t}]` : e.id ? `#${Mt(e.id)}` : Dt(e);
}
function D(e) {
  const t = It(e), i = J(e);
  return { selector: Rt(e), text: t, dataAttr: i };
}
const Ht = [
  "a[href]",
  "button",
  "input:not([type=hidden])",
  "select",
  "textarea",
  "summary",
  "[tabindex]",
  "[role]",
  "img",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "label",
  ...G.map((e) => `[${e}]`)
].join(","), Bt = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function Pt(e) {
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !1;
  const t = e.ownerDocument?.defaultView;
  if (t && typeof t.getComputedStyle == "function") {
    const i = t.getComputedStyle(e);
    if (i.display === "none" || i.visibility === "hidden") return !1;
  }
  return !0;
}
function zt(e = {}) {
  const t = e.root ?? document.body, i = e.selector ?? Ht, o = e.isExcluded ?? (() => !1), n = e.isVisible ?? Pt;
  return Array.from(t.querySelectorAll(i)).filter(
    (s) => !o(s) && n(s)
  );
}
function Ot(e) {
  const t = e.candidates ?? zt({
    root: e.root,
    selector: e.selector,
    isExcluded: e.isExcluded,
    isVisible: e.isVisible
  }), i = e.moveFocus ?? !0, o = e.eventTarget ?? document, n = /* @__PURE__ */ new Set();
  let s = -1, a = !1;
  const d = e.initial !== void 0 ? e.initial : typeof document < "u" ? document.activeElement : null;
  if (d) {
    const h = t.indexOf(d);
    h >= 0 && (s = h);
  }
  s < 0 && t.length > 0 && (s = 0);
  function l(h) {
    if (!i) return;
    const w = h;
    if (typeof w.focus == "function") {
      h.getAttribute("tabindex") === null && !Bt.test(h.tagName) && (h.setAttribute("tabindex", "-1"), n.add(h));
      try {
        w.focus();
      } catch {
      }
    }
  }
  function r() {
    const h = t[s];
    h && (l(h), e.onHighlight?.(h, s));
  }
  function c(h) {
    if (a || t.length === 0) return;
    const w = t.length;
    s = (h % w + w) % w, r();
  }
  function p() {
    c(s + 1);
  }
  function u() {
    c(s - 1);
  }
  function m() {
    return t[s] ?? null;
  }
  function b() {
    a || (a = !0, o.removeEventListener("keydown", f, !0), n.forEach((h) => h.removeAttribute("tabindex")), n.clear());
  }
  function v() {
    if (a) return;
    const h = m();
    b(), h && e.onSelect(h);
  }
  function y() {
    a || (b(), e.onCancel?.());
  }
  function f(h) {
    if (!a)
      switch (h.key) {
        case "Tab":
          h.preventDefault(), h.stopPropagation(), h.shiftKey ? u() : p();
          break;
        case "ArrowDown":
        case "ArrowRight":
          h.preventDefault(), h.stopPropagation(), p();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          h.preventDefault(), h.stopPropagation(), u();
          break;
        case "Enter":
        case " ":
        case "Spacebar":
          h.preventDefault(), h.stopPropagation(), v();
          break;
        case "Escape":
        case "Esc":
          h.preventDefault(), h.stopPropagation(), y();
          break;
      }
  }
  return o.addEventListener("keydown", f, !0), s >= 0 && r(), {
    candidates: t,
    getIndex: () => s,
    getCurrent: m,
    next: p,
    prev: u,
    moveTo: c,
    select: v,
    cancel: y,
    handleKey: f,
    stop: b
  };
}
const F = "data-qaid-a11y-live", $t = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;", Nt = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function Ft(e) {
  return e.ownerDocument || document;
}
function Vt(e, t) {
  const i = t ? "assertive" : "polite", o = e.querySelector(
    `[${F}="${i}"]`
  );
  if (o) return o;
  const s = Ft(e).createElement("div");
  return s.setAttribute(F, i), s.setAttribute("role", t ? "alert" : "status"), s.setAttribute("aria-live", t ? "assertive" : "polite"), s.setAttribute("aria-atomic", "true"), s.style.cssText = $t, e.appendChild(s), s;
}
function Ut(e, t, i = {}) {
  const o = Vt(e, !!i.assertive);
  o.textContent = "", o.textContent = t;
}
function _t(e) {
  return e.hasAttribute("disabled") ? !0 : e.disabled === !0;
}
function Kt(e) {
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
function V(e) {
  return Array.from(
    e.querySelectorAll(Nt)
  ).filter((i) => !(i.getAttribute("tabindex") === "-1" || i instanceof HTMLInputElement && i.type === "hidden" || i instanceof HTMLAnchorElement && !i.getAttribute("href") || _t(i) || Kt(i)));
}
function Z(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t instanceof HTMLElement ? t : null;
}
function jt(e) {
  const t = e.ownerDocument || document;
  let i = !1;
  const o = (s) => {
    if (s.key !== "Tab") return;
    const a = V(e);
    if (a.length === 0) {
      s.preventDefault(), e.focus();
      return;
    }
    const d = a[0], l = a[a.length - 1], r = Z(t), c = r ? a.indexOf(r) !== -1 : !1;
    s.shiftKey ? (!c || r === d) && (s.preventDefault(), l.focus()) : (!c || r === l) && (s.preventDefault(), d.focus());
  };
  e.addEventListener("keydown", o);
  const n = V(e);
  return n.length > 0 ? n[0].focus() : (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), i = !0), e.focus()), {
    release() {
      e.removeEventListener("keydown", o), i && (e.removeAttribute("tabindex"), i = !1);
    }
  };
}
function Xt() {
  return Z(document);
}
function Wt(e) {
  if (!(!e || typeof e.focus != "function"))
    try {
      e.focus();
    } catch {
    }
}
function Yt(e, t = {}) {
  e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), t.labelledbyId && e.setAttribute("aria-labelledby", t.labelledbyId), t.describedbyId && e.setAttribute("aria-describedby", t.describedbyId), t.label && e.setAttribute("aria-label", t.label);
}
function Qt(e, t) {
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
function Gt(e) {
  const i = (e.ownerDocument || document).body;
  if (!i) return () => {
  };
  const o = Qt(e, i), n = [];
  return Array.from(i.children).forEach((s) => {
    if (!(s instanceof HTMLElement) || o && s === o) return;
    const a = s.inert === !0, d = s.getAttribute("aria-hidden");
    a && d === "true" || (s.inert = !0, s.setAttribute("aria-hidden", "true"), n.push({ el: s, prevInert: a, prevAriaHidden: d }));
  }), function() {
    for (; n.length; ) {
      const a = n.pop();
      a.el.inert = a.prevInert, a.prevAriaHidden === null ? a.el.removeAttribute("aria-hidden") : a.el.setAttribute("aria-hidden", a.prevAriaHidden);
    }
  };
}
const tt = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Jt(e, t, i, o, n) {
  const s = e.y, a = t - (e.y + e.height);
  if (a >= i + o)
    return {
      top: e.y + e.height + o,
      position: "below"
    };
  if (s >= i + o)
    return {
      top: e.y - i - o,
      position: "above"
    };
  const d = a > s ? "below" : "above";
  let l;
  return d === "below" ? l = Math.min(
    e.y + e.height + o,
    t - i - n
  ) : l = Math.max(n, e.y - i - o), { top: l, position: d };
}
function Zt(e, t, i, o) {
  let s = e.x + e.width / 2 - i / 2;
  return s = Math.max(o, Math.min(s, t - i - o)), s;
}
function te(e, t, i, o = 24, n = 24) {
  const a = e.clickX - t - n / 2;
  return Math.max(o, Math.min(a, i - o - n / 2));
}
function ee(e, t, i, o = tt) {
  const n = o.height + o.arrowHeight, s = Jt(
    e,
    i,
    n,
    o.gap,
    o.viewportPadding
  ), a = Zt(
    e,
    t,
    o.width,
    o.viewportPadding
  );
  return {
    top: s.top,
    left: a,
    position: s.position
  };
}
function ie(e, t, i, o = {}) {
  const n = o.gap ?? 8;
  let s = e.bottom + n;
  s + t.height > i.height - n && (s = e.top - t.height - n);
  let a = e.left;
  return a < n ? a = n : a + t.width > i.width - n && (a = i.width - t.width - n), s < n ? s = n : s + t.height > i.height - n && (s = i.height - t.height - n), { top: s, left: a };
}
function oe(e, t, i, o = tt) {
  const n = ee(e, t, i, o), s = te(
    e,
    n.left,
    o.width
  );
  return {
    modal: n,
    arrow: { left: s }
  };
}
const ne = 20;
function se(e) {
  const t = [], i = console.error, o = console.warn, n = console.log, s = (a, d) => {
    const l = {
      message: d.map((r) => String(r)).join(" "),
      timestamp: Date.now(),
      level: a
    };
    t.length >= ne && t.shift(), t.push(l), e && e(l);
  };
  return console.error = function(...a) {
    s("error", a), i.apply(console, a);
  }, console.warn = function(...a) {
    s("warn", a), o.apply(console, a);
  }, console.log = function(...a) {
    s("log", a), n.apply(console, a);
  }, {
    errors: t,
    restore: () => {
      console.error = i, console.warn = o, console.log = n;
    }
  };
}
const ae = 20, U = 4096;
function S(e) {
  const t = typeof e == "string" ? e : JSON.stringify(e);
  return t.length > U ? t.slice(0, U) + "…[truncated]" : t;
}
function _(e, t) {
  e.length >= ae && e.shift(), e.push(t);
}
async function re(e) {
  try {
    const t = await e.clone().text();
    return S(t);
  } catch {
    return;
  }
}
function de() {
  const e = [], t = window.fetch;
  window.fetch = async function(n, s) {
    const a = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, d = s?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET");
    let l;
    s?.body && (l = S(s.body));
    const r = await t.apply(window, [n, s]);
    if (r.status >= 400) {
      const c = await re(r);
      _(e, {
        url: a,
        method: d.toUpperCase(),
        status: r.status,
        statusText: r.statusText,
        requestBody: l,
        responseBody: c,
        timestamp: Date.now()
      });
    }
    return r;
  };
  const i = XMLHttpRequest.prototype.open, o = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, s, ...a) {
    return this._qaid_method = n, this._qaid_url = typeof s == "string" ? s : s.toString(), i.apply(this, [n, s, ...a]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const s = this, a = n ? S(n) : void 0;
    return s.addEventListener("load", function() {
      s.status >= 400 && _(e, {
        url: s._qaid_url,
        method: s._qaid_method.toUpperCase(),
        status: s.status,
        statusText: s.statusText,
        requestBody: a,
        responseBody: S(s.responseText),
        timestamp: Date.now()
      });
    }), o.apply(this, [n]);
  }, {
    errors: e,
    restore: () => {
      window.fetch = t, XMLHttpRequest.prototype.open = i, XMLHttpRequest.prototype.send = o;
    }
  };
}
function ce() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function le(e, t, i, o, n) {
  const s = e >= t, a = i >= o;
  return s === a ? { width: e, height: t, rotate: 0 } : { width: t, height: e, rotate: n === 270 ? -90 : 90 };
}
function he(e, t, i) {
  if (i.rotate === 0) {
    e.drawImage(t, 0, 0, i.width, i.height);
    return;
  }
  e.save(), i.rotate === 90 ? (e.translate(i.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, i.height), e.rotate(-Math.PI / 2)), e.drawImage(t, 0, 0, i.height, i.width), e.restore();
}
function ue() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function pe(e) {
  return new Promise((t) => {
    if (e.videoWidth > 0) {
      t();
      return;
    }
    e.addEventListener("loadedmetadata", () => t(), { once: !0 });
  });
}
async function me(e) {
  try {
    await e.play();
  } catch {
  }
}
async function fe(e, t = 15) {
  const i = document.createElement("canvas");
  if (typeof i.captureStream != "function") return null;
  const o = i.getContext("2d");
  if (!o) return null;
  const n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await pe(n);
  const s = le(
    n.videoWidth,
    n.videoHeight,
    window.innerWidth,
    window.innerHeight,
    ue()
  );
  i.width = s.width, i.height = s.height, await me(n);
  let a = 0;
  const d = () => {
    he(o, n, s), a = requestAnimationFrame(d);
  };
  d();
  const l = i.captureStream(t);
  return {
    stream: l,
    stop: () => {
      a && cancelAnimationFrame(a), a = 0, l.getTracks().forEach((r) => r.stop()), n.pause(), n.srcObject = null;
    }
  };
}
function be() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function ge() {
  if (typeof MediaRecorder > "u") return "";
  const e = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4"
  ];
  for (const t of e)
    if (MediaRecorder.isTypeSupported(t))
      return t;
  return "";
}
function ve(e = {}) {
  const t = e.maxDuration ?? 15, i = e.videoBitsPerSecond ?? 8e5;
  let o = null, n = null, s = null, a = [], d = null, l = null, r = null, c = 0, p = null, u = null, m = !1, b = null;
  function v() {
    r !== null && (clearInterval(r), r = null), b !== null && (clearTimeout(b), b = null), n && (n.stop(), n = null), o && (o.getTracks().forEach((f) => f.stop()), o = null), s = null, a = [], d = null, l = null, p = null, u = null;
  }
  function y() {
    m || (m = !0, s && s.state !== "inactive" && s.stop());
  }
  return {
    async start() {
      m = !1, a = [];
      const f = ge();
      if (!f)
        throw new Error("No supported video MIME type found");
      o = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0
      });
      const h = o.getVideoTracks()[0];
      h && h.addEventListener("ended", () => {
        y();
      });
      let w = o;
      if (ce()) {
        const g = await fe(o);
        g && (n = g, w = g.stream);
      }
      s = new MediaRecorder(w, {
        mimeType: f,
        videoBitsPerSecond: i
      }), s.ondataavailable = (g) => {
        g.data.size > 0 && a.push(g.data);
      }, s.onstop = () => {
        const g = new Blob(a, { type: f });
        p && p(g), l && l(g), n && (n.stop(), n = null), o && o.getTracks().forEach((C) => C.stop());
      }, s.onerror = () => {
        u && u(new Error("MediaRecorder error"));
      }, s.start(1e3), c = Date.now(), r = setInterval(() => {
        const g = Math.floor((Date.now() - c) / 1e3);
        d && d(g);
      }, 1e3), b = setTimeout(() => {
        y();
      }, t * 1e3);
    },
    stop() {
      return new Promise((f, h) => {
        p = f, u = h, y();
      });
    },
    onTick(f) {
      d = f;
    },
    onStop(f) {
      l = f;
    },
    destroy() {
      y(), v();
    }
  };
}
function ye(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function K(e, t, i) {
  const o = i.map((s) => s.style.visibility);
  i.forEach((s) => s.style.visibility = "hidden");
  const n = document.elementFromPoint(e, t);
  return i.forEach((s, a) => s.style.visibility = o[a]), n;
}
function M(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function j(e, t = 0) {
  const i = e.getBoundingClientRect();
  return {
    x: i.left - t,
    y: i.top - t,
    width: i.width + t * 2,
    height: i.height + t * 2
  };
}
async function we(e = {}) {
  const { quality: t = 1, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!navigator.mediaDevices?.getDisplayMedia)
      return console.warn("Screen Capture API not available"), null;
    const n = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), s = n.getVideoTracks()[0], a = s.getSettings(), d = document.createElement("video");
    d.srcObject = n, d.muted = !0, await new Promise((v) => {
      d.onloadedmetadata = () => {
        d.play(), v();
      };
    }), await new Promise((v) => {
      const y = () => {
        d.readyState >= 2 ? v() : requestAnimationFrame(y);
      };
      y();
    }), await new Promise((v) => setTimeout(v, 100));
    const l = a.width || d.videoWidth, r = a.height || d.videoHeight, c = Math.min(i / l, o / r, 1), p = Math.round(l * c), u = Math.round(r * c), m = document.createElement("canvas");
    m.width = p, m.height = u;
    const b = m.getContext("2d");
    return b ? (b.drawImage(d, 0, 0, p, u), s.stop(), m.toDataURL("image/webp", t)) : (s.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const X = "https://qaid.dev/lib/html2canvas.min.js", xe = 1e4, qe = 50;
let x = null;
function Pe() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function ke() {
  return window.html2canvas ? Promise.resolve(!0) : x || (x = new Promise((e) => {
    if (!document.querySelector(
      `script[src="${X}"]`
    )) {
      const n = document.createElement("script");
      n.src = X, n.async = !0, document.head.appendChild(n);
    }
    const i = Date.now(), o = () => {
      if (window.html2canvas) {
        e(!0);
        return;
      }
      if (Date.now() - i > xe) {
        x = null, e(!1);
        return;
      }
      setTimeout(o, qe);
    };
    o();
  }), x);
}
async function Ce(e = {}) {
  const { quality: t = 0.8, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!await ke() || !window.html2canvas)
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
      ignoreElements: (r) => r instanceof HTMLElement ? r.classList.contains("qaid-buttons") || r.classList.contains("qaid-targeting-overlay") || r.classList.contains("qaid-modal-container") || r.classList.contains("qaid-bottom-sheet") || r.classList.contains("qaid-backdrop") || r.classList.contains("qaid-selected-marker") || r.classList.contains("qaid-tooltip-text") || r.classList.contains("qaid-recording-indicator") || r.classList.contains("qaid-video-preview") || r.className?.toString().startsWith?.("qaid-") : !1
    }), a = s.width, d = s.height, l = Math.min(i / a, o / d, 1);
    if (l < 1) {
      const r = Math.round(a * l), c = Math.round(d * l), p = document.createElement("canvas");
      p.width = r, p.height = c;
      const u = p.getContext("2d");
      return u ? (u.drawImage(s, 0, 0, r, c), p.toDataURL("image/webp", t)) : null;
    }
    return s.toDataURL("image/webp", t);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const Se = "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js", Ee = (e) => (
  // The URL is a runtime value, not a static specifier — keep Vite from
  // trying to analyze/bundle it.
  import(
    /* @vite-ignore */
    e
  )
);
let Te = Ee, q = null, R = null;
function Le(e) {
  return q && R === e || (R = e, q = Promise.resolve(Te(e)).then((t) => {
    const i = t;
    if (!i || typeof i.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return i;
  }).catch((t) => {
    throw q = null, R = null, t;
  })), q;
}
async function Ie(e) {
  const t = await Le(e.moduleUrl), i = e.base.replace(/\/+$/, ""), o = e.feedbackId != null ? { feedbackId: e.feedbackId } : void 0;
  return new t.QaidQuests({
    endpoint: `${i}/responses`,
    configUrl: `${i}/${encodeURIComponent(e.questId)}/definition`,
    apiKey: e.apiKey || void 0,
    metadata: o,
    onClose: e.onClose
  });
}
const W = "qaid_visitor_id", Y = "qaid_hide_feedback", Ae = 12;
function H(e) {
  return e ? `${Y}_${e}` : Y;
}
function De(e) {
  try {
    return localStorage.getItem(H(e)) === "1";
  } catch {
    return !1;
  }
}
function Q(e, t = !0) {
  try {
    t ? localStorage.setItem(H(e), "1") : localStorage.removeItem(H(e));
  } catch {
  }
}
function Me() {
  try {
    let e = localStorage.getItem(W);
    return e || (e = crypto.randomUUID(), localStorage.setItem(W, e)), e;
  } catch {
    return crypto.randomUUID();
  }
}
class Re {
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
  mousePos = { x: 0, y: 0 };
  isMobile = !1;
  visitorId;
  // Console capture
  consoleCapture = null;
  // Video recording
  videoRecorder = null;
  networkCapture = null;
  recordedBlob = null;
  recordingIndicator = null;
  videoPreview = null;
  isRecording = !1;
  isSendingVideo = !1;
  // Shadow DOM
  shadowHost = null;
  shadowRoot = null;
  // Overlay shadow DOM (always on document.body for full-page coverage)
  overlayShadowHost = null;
  overlayShadowRoot = null;
  // DOM elements (inside shadow root)
  buttonsContainer = null;
  isUserProvidedContainer = !1;
  overlayContainer = null;
  captureLayer = null;
  crosshairH = null;
  crosshairV = null;
  scope = null;
  highlightBox = null;
  marker = null;
  modalContainer = null;
  backdrop = null;
  dismissBtn = null;
  // Per-instance CSS variables
  cssVars = {};
  // Keyboard element-targeting
  keyboardController = null;
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
  boundMouseMove;
  boundClick;
  // Touch equivalents for targeting. iOS/iPadOS does not synthesise `click`
  // (or `mousemove`) for taps on non-interactive page elements, so targeting
  // must be driven by touch events there.
  boundTouchStart;
  boundTouchEnd;
  // Where the current targeting touch began, to tell a tap from a scroll.
  touchStartPos = null;
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
        maxDuration: t.videoOptions?.maxDuration ?? 15
      },
      recordIcon: t.recordIcon ?? "",
      quests: {
        base: t.quests?.base ?? "",
        up: t.quests?.up ?? "",
        down: t.quests?.down ?? "",
        video: t.quests?.video ?? "",
        // Quest service reuses the feedback API key unless overridden.
        apiKey: t.quests?.apiKey ?? t.apiKey ?? "",
        moduleUrl: t.quests?.moduleUrl ?? Se
      }
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundMouseMove = this.handleMouseMove.bind(this), this.boundClick = this.handleClick.bind(this), this.boundTouchStart = this.handleTouchStart.bind(this), this.boundTouchEnd = this.handleTouchEnd.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Me(), this.init();
  }
  applyVars(t) {
    Et(t, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(t, i = !1) {
    const o = this.overlayShadowRoot ?? this.shadowRoot;
    o && Ut(o, t, { assertive: i });
  }
  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path.
   */
  openDialogA11y(t, i) {
    this.dialogTrigger = Xt(), Yt(t, i), this.dialogTrap = jt(t), this.dialogRestoreInert = Gt(t);
  }
  closeDialogA11y() {
    this.dialogTrap?.release(), this.dialogTrap = null, this.dialogRestoreInert && (this.dialogRestoreInert(), this.dialogRestoreInert = null), Wt(this.dialogTrigger), this.dialogTrigger = null;
  }
  clearActiveThumb() {
    this.activeThumbBtn && (this.activeThumbBtn.setAttribute("aria-pressed", "false"), this.activeThumbBtn = null);
  }
  init() {
    Tt(), this.cssVars = St({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && De(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = se((t) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors, this.observeDom();
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
    this.isMobile = ye();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let t = null;
    this.config.container && (t = document.querySelector(this.config.container)), t ? (t.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const i = document.createElement("style");
    if (i.textContent = N(), this.shadowRoot.appendChild(i), this.config.css) {
      const r = document.createElement("style");
      r.textContent = this.config.css, this.shadowRoot.appendChild(r);
    }
    const o = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${o}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${o}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: r, y: c } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${r}px` : this.buttonsContainer.style.left = `${r}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${c}px` : this.buttonsContainer.style.top = `${c}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer), this.buttonsContainer.addEventListener("keydown", (r) => {
      (r.key === "Enter" || r.key === " " || r.key === "Spacebar") && (this.keyboardActivation = !0);
    }), this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = !1;
    }), this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = !1;
    });
    const n = !!this.config.buttonClass, s = n ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", d = this.config.text.tooltip || "Feedback for us?", l = document.createElement("div");
    if (l.className = "qaid-tooltip-text", l.textContent = d, this.applyVars(l), this.shadowRoot.appendChild(l), this.tooltipElement = l, !this.config.hideThumbs) {
      const r = document.createElement("div");
      r.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${s} qaid-btn-up` : "qaid-btn qaid-btn-up", c.setAttribute("aria-label", this.config.text.positiveLabel), c.innerHTML = this.config.positiveIcon || I, c.addEventListener("click", (m) => this.handleThumbClick("up", m.currentTarget, m)), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), r.appendChild(c);
      const p = document.createElement("div");
      p.className = "qaid-tooltip-wrapper";
      const u = document.createElement("button");
      u.type = "button", u.className = n ? `${s} qaid-btn-down` : "qaid-btn qaid-btn-down", u.setAttribute("aria-label", this.config.text.negativeLabel), u.innerHTML = this.config.negativeIcon || A, u.addEventListener("click", (m) => this.handleThumbClick("down", m.currentTarget, m)), u.addEventListener("mouseenter", () => this.showTooltip(u)), u.addEventListener("mouseleave", () => this.hideTooltip()), p.appendChild(u), this.buttonsContainer.appendChild(r), this.buttonsContainer.appendChild(p);
    }
    if (this.config.captureVideo && be()) {
      const r = document.createElement("div");
      r.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${s} qaid-btn-record` : "qaid-btn qaid-btn-record", c.setAttribute("aria-label", this.config.text.recordLabel), c.innerHTML = this.config.recordIcon || bt, c.addEventListener("click", () => this.startRecording()), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), r.appendChild(c), this.buttonsContainer.appendChild(r);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, this.dismissBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', this.dismissBtn.addEventListener("click", (r) => {
      r.stopPropagation(), this.handleDismiss();
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
    if (t.textContent = N(), this.overlayShadowRoot.appendChild(t), this.config.css) {
      const i = document.createElement("style");
      i.textContent = this.config.css, this.overlayShadowRoot.appendChild(i);
    }
    return this.overlayShadowRoot;
  }
  tooltipElement = null;
  showTooltip(t) {
    const i = this.tooltipElement;
    i.style.visibility = "hidden", i.classList.add("qaid-tooltip-visible");
    const o = t.getBoundingClientRect(), n = i.getBoundingClientRect(), { top: s, left: a } = ie(
      o,
      n,
      { width: window.innerWidth, height: window.innerHeight }
    );
    i.style.top = `${s}px`, i.style.left = `${a}px`, i.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleDismiss() {
    this.buttonsContainer.classList.add("qaid-dismissed"), Q(this.config.apiKey, !0);
  }
  handleThumbClick(t, i, o) {
    if (this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), Q(this.config.apiKey, !1)), this.config.skipTargeting)
      this.submitDirectFeedback(t, i);
    else {
      this.activeThumbBtn = i, i.setAttribute("aria-pressed", "true");
      const n = this.keyboardActivation;
      this.keyboardActivation = !1, n ? this.startKeyboardTargetingFlow(t) : this.startTargeting(t, o);
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
  startTargeting(t, i) {
    this.state = "TARGETING", this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, this.mousePos.x = i.clientX, this.mousePos.y = i.clientY, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.boundKeyDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("click", this.boundClick, !0), document.addEventListener("touchstart", this.boundTouchStart, { passive: !0 }), document.addEventListener("touchend", this.boundTouchEnd, { passive: !1 });
  }
  /**
   * Keyboard-driven targeting. Mirrors startTargeting minus the mouse
   * plumbing: no `qaid-targeting` body class (keeps the cursor visible for
   * keyboard users), no mouse reticle, and no document mouse/click listeners.
   * The KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
   */
  startKeyboardTargetingFlow(t) {
    this.state = "TARGETING", this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = Ot({
      isExcluded: (i) => M(i),
      onHighlight: (i) => {
        const o = i.getBoundingClientRect(), n = this.highlightBox;
        n && (n.style.transform = `translate(${o.left}px, ${o.top}px)`, n.style.width = `${o.width}px`, n.style.height = `${o.height}px`, n.style.display = "block");
        const { text: s } = D(i);
        this.announceMsg(`Targeting ${s || i.tagName.toLowerCase()}`);
      },
      onSelect: (i) => this.selectKeyboardTarget(i),
      onCancel: () => this.cancelTargeting()
    });
  }
  selectKeyboardTarget(t) {
    const i = j(t, 8);
    this.selectedBounds = {
      ...i,
      clickX: i.x + i.width / 2,
      clickY: i.y + i.height / 2,
      visible: !0
    };
    const { selector: o, text: n } = D(t);
    this.feedbackData.elementSelector = o, this.feedbackData.elementText = n, this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.keyboardController = null, this.clearActiveThumb(), this.state = "SELECTED", this.showSelectedMarker(), this.submitFeedback();
  }
  createTargetingOverlay() {
    const t = this.ensureOverlayHost();
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer";
    const i = document.createElement("div");
    i.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope", this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `, this.highlightBox = document.createElement("div"), this.highlightBox.className = "qaid-highlight-box", this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(i), this.overlayContainer.appendChild(this.highlightBox), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.crosshairH.style.top = `${this.mousePos.y}px`, this.crosshairV.style.left = `${this.mousePos.x}px`, this.scope.style.left = `${this.mousePos.x}px`, this.scope.style.top = `${this.mousePos.y}px`, this.applyVars(this.overlayContainer), t.appendChild(this.overlayContainer);
  }
  handleKeyDown(t) {
    t.key === "Escape" && (this.isRecording ? this.stopRecording() : this.videoPreview ? this.cancelRecordingPreview() : this.state === "TARGETING" ? this.cancelTargeting() : this.state === "MODAL_OPEN" && this.closeModal());
  }
  handleMouseMove(t) {
    this.updateReticleAt(t.clientX, t.clientY);
  }
  /** Move the crosshair/scope reticle and highlight the element under (x, y).
   *  Shared by the mouse (hover) and touch (drag) targeting paths. */
  updateReticleAt(t, i) {
    if (this.mousePos.x = t, this.mousePos.y = i, this.crosshairH && (this.crosshairH.style.top = `${i}px`), this.crosshairV && (this.crosshairV.style.left = `${t}px`), this.scope && (this.scope.style.left = `${t}px`, this.scope.style.top = `${i}px`), this.captureLayer && this.shadowHost) {
      const o = [this.shadowHost, this.overlayShadowHost].filter(Boolean), n = K(t, i, o);
      if (n && !M(n)) {
        if (this.highlightBox) {
          const s = n.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${s.left}px, ${s.top}px)`, this.highlightBox.style.width = `${s.width}px`, this.highlightBox.style.height = `${s.height}px`, this.highlightBox.style.display = "block";
        }
      } else
        this.highlightBox && (this.highlightBox.style.display = "none");
    }
  }
  handleClick(t) {
    t.preventDefault(), t.stopPropagation(), this.selectAt(t.clientX, t.clientY);
  }
  // ---- Touch targeting (iOS/iPadOS) ----
  // iOS/iPadOS taps on non-interactive elements don't fire click, so touch
  // drives targeting here. Scrolling stays enabled (the page may need to scroll
  // to bring the target into view); a low-movement touch is treated as a tap
  // that selects, distinguishing it from a scroll/drag.
  handleTouchStart(t) {
    const i = t.touches[0];
    i && (this.touchStartPos = { x: i.clientX, y: i.clientY }, this.updateReticleAt(i.clientX, i.clientY));
  }
  handleTouchEnd(t) {
    const i = t.changedTouches[0], o = this.touchStartPos;
    this.touchStartPos = null, !(!i || !o || Math.hypot(i.clientX - o.x, i.clientY - o.y) > Ae) && (t.preventDefault(), this.selectAt(i.clientX, i.clientY));
  }
  /** Select the element under (x, y) and tear down targeting.
   *  Shared by the mouse (click) and touch (touchend) targeting paths. */
  selectAt(t, i) {
    const o = [this.shadowHost, this.overlayShadowHost].filter(Boolean), n = K(t, i, o);
    if (!n || M(n))
      return;
    const s = j(n, 8);
    this.selectedBounds = {
      ...s,
      clickX: t,
      clickY: i,
      visible: !0
    };
    const { selector: a, text: d } = D(n);
    this.feedbackData.elementSelector = a, this.feedbackData.elementText = d, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.state = "SELECTED", this.clearActiveThumb(), this.showSelectedMarker(), this.submitFeedback();
  }
  /** Remove the targeting overlay and every mouse/touch/keyboard listener the
   *  pointer-targeting flow attaches to the document. */
  stopTargetingListeners() {
    this.removeTargetingOverlay(), this.touchStartPos = null, document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("touchstart", this.boundTouchStart), document.removeEventListener("touchend", this.boundTouchEnd), document.removeEventListener("keydown", this.boundKeyDown);
  }
  cancelTargeting() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.clearActiveThumb(), this.state = "IDLE", this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    const t = this.ensureOverlayHost();
    this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.selectedBounds.x}px`, this.marker.style.top = `${this.selectedBounds.y}px`, this.marker.style.width = `${this.selectedBounds.width}px`, this.marker.style.height = `${this.selectedBounds.height}px`, this.marker.style.zIndex = String(this.config.zIndex + 1), this.applyVars(this.marker), t.appendChild(this.marker);
  }
  hideSelectedMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  async submitFeedback() {
    let t = null;
    this.config.captureScreenshot && (this.config.screenshotMethod === "dom" ? t = await Ce(this.config.screenshotOptions) : t = await we(this.config.screenshotOptions), t && this.announceMsg("Screenshot captured"));
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
      const s = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o)
      });
      if (s.ok) {
        const a = await s.json();
        this.feedbackId = a.id, this.announceMsg("Feedback sent");
      }
    } catch (s) {
      console.error("Failed to submit feedback:", s), this.announceMsg("Failed to send feedback", !0);
    }
    const n = this.feedbackData.feedbackType;
    if (n && await this.tryLaunchQuest(n, this.feedbackId)) {
      this.resetFeedbackUi();
      return;
    }
    this.state = "MODAL_OPEN", this.showModal(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto");
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
      return this.activeQuest?.destroy(), this.activeQuest = await Ie({
        questId: o,
        base: this.config.quests.base,
        apiKey: this.config.quests.apiKey || void 0,
        moduleUrl: this.config.quests.moduleUrl,
        feedbackId: i,
        onClose: () => {
          this.activeQuest = null;
        }
      }), !0;
    } catch (n) {
      return console.error("Failed to launch quest:", n), this.activeQuest = null, !1;
    }
  }
  /**
   * Reset the thumbs targeting/marker UI back to idle without opening or
   * closing the message modal. Shared by closeModal() and the quest-launch
   * path (which bypasses the modal entirely).
   */
  resetFeedbackUi() {
    this.hideSelectedMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  showModal() {
    const t = this.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.closeModal()), this.applyVars(this.backdrop), this.isMobile ? this.showBottomSheet() : this.showPositionedModal(), t.appendChild(this.backdrop), document.addEventListener("keydown", this.boundKeyDown);
  }
  showBottomSheet() {
    const t = this.ensureOverlayHost(), i = document.createElement("div");
    i.className = "qaid-bottom-sheet", i.style.zIndex = String(this.config.zIndex + 3), i.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.applyVars(i), t.appendChild(i), this.modalContainer = i, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.ensureOverlayHost(), { modal: i, arrow: o } = oe(
      this.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16
      }
    );
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${i.position}`, this.modalContainer.style.top = `${i.top}px`, this.modalContainer.style.left = `${i.left}px`, this.modalContainer.style.zIndex = String(this.config.zIndex + 3);
    const n = document.createElement("div");
    n.className = "qaid-modal-arrow", n.style.left = `${o.left}px`;
    const s = document.createElement("div");
    s.className = "qaid-modal-box", s.innerHTML = this.getModalContent(), this.modalContainer.appendChild(n), this.modalContainer.appendChild(s), this.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.feedbackData.feedbackType === "up", i = this.config.positiveIcon || I, o = this.config.negativeIcon || A;
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${this.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.config.buttonClass} ${t ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${t ? "qaid-type-up" : "qaid-type-down"}`}" title="Click to switch" aria-pressed="${t}" aria-label="${t ? "Feedback type: positive" : "Feedback type: negative"}">
          ${t ? i : o}
        </button>
        <div class="qaid-modal-header-text">
          <h3 class="qaid-modal-title" id="qaid-modal-title-${this.uid}">${this.config.text.modalTitle}</h3>
          <p class="qaid-modal-subtitle" id="qaid-modal-subtitle-${this.uid}">${this.config.text.modalSubtitle}</p>
        </div>
      </div>
      <textarea class="qaid-textarea" aria-label="${this.config.text.modalSubtitle}" placeholder="${this.config.text.placeholder}"></textarea>
      <div class="qaid-btn-row">
        <button type="button" class="qaid-btn-submit">${this.config.text.skipButton}</button>
      </div>
    `;
  }
  setupModalInteractions() {
    this.openDialogA11y(this.modalContainer, {
      labelledbyId: `qaid-modal-title-${this.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.uid}`
    });
    const t = this.modalContainer.querySelector(".qaid-textarea"), i = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      i && (i.textContent = t.value.trim() ? this.config.text.submitButton : this.config.text.skipButton);
    })), i && i.addEventListener("click", () => {
      const n = t?.value.trim() || null;
      this.submitMessage(n);
    });
    const o = this.modalContainer.querySelector(".qaid-type-toggle");
    o && o.addEventListener("click", () => {
      const n = this.feedbackData.feedbackType === "up" ? "down" : "up";
      this.feedbackData.feedbackType = n, this.config.buttonClass ? (o.classList.toggle("qaid-btn-up", n === "up"), o.classList.toggle("qaid-btn-down", n === "down")) : (o.classList.toggle("qaid-type-up", n === "up"), o.classList.toggle("qaid-type-down", n === "down"));
      const s = this.config.positiveIcon || I, a = this.config.negativeIcon || A;
      o.innerHTML = n === "up" ? s : a;
      const d = n === "up" ? "Feedback type: positive" : "Feedback type: negative";
      o.setAttribute("aria-pressed", String(n === "up")), o.setAttribute("aria-label", d), this.announceMsg(d), this.feedbackId && fetch(`${this.config.endpoint}/${this.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: n })
      }).catch((l) => console.error("Failed to update feedback type:", l));
    });
  }
  async submitMessage(t) {
    if (this.feedbackId) {
      try {
        await fetch(`${this.config.endpoint}/${this.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        });
      } catch (i) {
        console.error("Failed to submit feedback message:", i);
      }
      this.feedbackId = null;
    }
    this.closeModal();
  }
  closeModal() {
    this.state === "MODAL_OPEN" && this.feedbackId && fetch(`${this.config.endpoint}/${this.feedbackId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: null })
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.boundKeyDown), this.resetFeedbackUi();
  }
  // ==================== Video Recording ====================
  async startRecording() {
    if (!(this.isRecording || this.state !== "IDLE"))
      try {
        this.networkCapture = de(), this.videoRecorder = ve({
          maxDuration: this.config.videoOptions.maxDuration
        }), this.videoRecorder.onTick((t) => {
          this.updateRecordingTimer(t);
        }), this.videoRecorder.onStop((t) => {
          this.isRecording && (this.recordedBlob = t, this.isRecording = !1, this.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.boundKeyDown), this.setButtonsDisabled(!1), t && t.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.announceMsg("Recording started"), this.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.boundKeyDown);
      } catch {
        this.cleanupRecording();
      }
  }
  async stopRecording() {
    try {
      this.recordedBlob = await this.videoRecorder.stop();
    } catch {
      this.recordedBlob = null;
    }
    this.isRecording = !1, this.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
  }
  showRecordingIndicator() {
    const t = this.ensureOverlayHost();
    this.recordingIndicator = document.createElement("div"), this.recordingIndicator.className = "qaid-recording-indicator", this.recordingIndicator.style.zIndex = String(this.config.zIndex + 100);
    const i = document.createElement("div");
    i.className = "qaid-recording-dot";
    const o = document.createElement("span");
    o.className = "qaid-recording-time", o.textContent = this.formatTime(this.config.videoOptions.maxDuration);
    const n = document.createElement("button");
    n.type = "button", n.className = "qaid-recording-stop", n.textContent = "Stop", n.addEventListener("click", () => this.stopRecording()), this.recordingIndicator.appendChild(i), this.recordingIndicator.appendChild(o), this.recordingIndicator.appendChild(n), this.applyVars(this.recordingIndicator), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const i = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (i) {
      const o = Math.max(0, this.config.videoOptions.maxDuration - t);
      i.textContent = this.formatTime(o), o > 0 && o <= 5 && this.announceMsg(`${o} second${o === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(t) {
    const i = Math.floor(t / 60), o = t % 60;
    return `${i}:${o.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const t = this.ensureOverlayHost(), i = URL.createObjectURL(this.recordedBlob);
    this.videoPreview = document.createElement("div"), this.videoPreview.className = "qaid-video-preview", this.videoPreview.style.zIndex = String(this.config.zIndex + 100);
    const o = document.createElement("div");
    o.className = "qaid-video-preview-box";
    const n = document.createElement("h3");
    n.textContent = "Review your recording", n.id = `qaid-video-title-${this.uid}`;
    const s = document.createElement("video");
    s.src = i, s.controls = !0, s.autoplay = !0, s.muted = !0;
    const a = document.createElement("textarea");
    a.placeholder = "Optional: Describe the issue you recorded...", a.setAttribute("aria-label", "Describe the issue you recorded");
    const d = document.createElement("div");
    d.className = "qaid-video-preview-actions";
    const l = document.createElement("button");
    l.type = "button", l.className = "qaid-video-btn qaid-video-btn-cancel", l.textContent = "Cancel", l.addEventListener("click", () => this.cancelRecordingPreview());
    const r = document.createElement("button");
    r.type = "button", r.className = "qaid-video-btn qaid-video-btn-rerecord", r.textContent = "Re-record", r.addEventListener("click", () => {
      this.cancelRecordingPreview(), this.startRecording();
    });
    const c = document.createElement("button");
    c.type = "button", c.className = "qaid-video-btn qaid-video-btn-send", c.textContent = "Send", c.addEventListener("click", () => {
      const p = a.value.trim() || null;
      this.submitVideoFeedback(p, c);
    }), d.appendChild(l), d.appendChild(r), d.appendChild(c), o.appendChild(n), o.appendChild(s), o.appendChild(a), o.appendChild(d), this.videoPreview.appendChild(o), this.applyVars(this.videoPreview), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), this.openDialogA11y(o, { labelledbyId: n.id }), document.addEventListener("keydown", this.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.closeDialogA11y(), this.videoPreview) {
      const t = this.videoPreview.querySelector("video");
      t?.src && URL.revokeObjectURL(t.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.boundKeyDown);
  }
  async submitVideoFeedback(t, i) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, i.disabled = !0, i.textContent = "Sending...";
    const o = new FormData();
    o.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), o.append("pageUrl", window.location.href), o.append("visitorId", this.visitorId), this.config.apiKey && o.append("apiKey", this.config.apiKey), t && o.append("message", t), this.consoleCapture && o.append("consoleErrors", JSON.stringify(this.consoleCapture.errors)), this.networkCapture && o.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let n = null;
    try {
      const s = await fetch(`${this.config.endpoint}/video`, {
        method: "POST",
        body: o
      });
      if (s.ok) {
        this.announceMsg("Recording sent");
        try {
          n = (await s.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await s.text()), this.announceMsg("Failed to send recording", !0);
    } catch (s) {
      console.error("Failed to submit video feedback:", s), this.announceMsg("Failed to send recording", !0);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording(), await this.tryLaunchQuest("video", n);
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.setButtonsDisabled(!1), this.overlayShadowHost && this.state === "IDLE" && (this.overlayShadowHost.style.pointerEvents = "none");
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
    this.destroyed = !0, this.domObserver && (this.domObserver.disconnect(), this.domObserver = null), this.boundBeforeSwap && (document.removeEventListener("astro:before-swap", this.boundBeforeSwap), this.boundBeforeSwap = null), this.keyboardController?.stop(), this.keyboardController = null, this.clearActiveThumb(), this.closeDialogA11y(), this.cleanupRecording(), this.removeVideoPreview(), this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("touchstart", this.boundTouchStart), document.removeEventListener("touchend", this.boundTouchEnd), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.overlayContainer = null, this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null, this.marker = null, this.modalContainer = null, this.backdrop = null, this.dismissBtn = null, this.tooltipElement = null, Lt();
  }
}
function et(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
function He() {
  const e = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!e) return null;
  const t = e.textContent?.trim();
  if (!t) return null;
  try {
    const i = JSON.parse(t);
    return i.cssSelector && !i.css && (i.css = et(i.cssSelector), delete i.cssSelector), i;
  } catch {
    return null;
  }
}
function Be(e) {
  const t = e.getAttribute("data-endpoint");
  if (!t) return null;
  const i = e.getAttribute("data-position"), o = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), s = e.getAttribute("data-negative-color"), a = e.getAttribute("data-marker-color"), d = e.getAttribute("data-container"), l = e.getAttribute("data-button-class"), r = e.getAttribute("data-skip-targeting"), c = e.getAttribute("data-incognito"), p = e.getAttribute("data-button-size"), u = e.getAttribute("data-offset-x"), m = e.getAttribute("data-offset-y"), b = e.getAttribute("data-modal-width"), v = e.getAttribute("data-backdrop-opacity"), y = e.getAttribute("data-font-family"), f = e.getAttribute("data-font-size"), h = e.getAttribute("data-tooltip"), w = e.getAttribute("data-modal-title"), g = e.getAttribute("data-modal-subtitle"), C = e.getAttribute("data-placeholder"), B = e.getAttribute("data-submit-button"), P = e.getAttribute("data-skip-button"), it = e.getAttribute("data-positive-icon"), ot = e.getAttribute("data-negative-icon"), nt = e.getAttribute("data-api-key"), st = e.getAttribute("data-capture-screenshot"), E = e.getAttribute("data-screenshot-quality"), T = e.getAttribute("data-screenshot-max-width"), L = e.getAttribute("data-screenshot-max-height"), at = e.getAttribute("data-capture-video"), rt = e.getAttribute("data-hide-thumbs"), dt = e.getAttribute("data-hide-dismiss"), z = e.getAttribute("data-video-max-duration"), ct = e.getAttribute("data-screenshot-method"), lt = e.getAttribute("data-direction"), O = e.getAttribute("data-css-selector"), $ = e.getAttribute("data-quest-base"), ht = e.getAttribute("data-quest-up"), ut = e.getAttribute("data-quest-down"), pt = e.getAttribute("data-quest-video"), mt = e.getAttribute("data-quest-api-key"), ft = e.getAttribute("data-quest-module-url");
  return {
    endpoint: t,
    css: O ? et(O) : void 0,
    apiKey: nt ?? void 0,
    captureScreenshot: st === "true" ? !0 : void 0,
    screenshotOptions: E || T || L ? {
      quality: E ? parseFloat(E) : void 0,
      maxWidth: T ? parseInt(T, 10) : void 0,
      maxHeight: L ? parseInt(L, 10) : void 0
    } : void 0,
    container: d ?? void 0,
    buttonClass: l ?? void 0,
    direction: lt ?? void 0,
    position: i ?? void 0,
    zIndex: o ? parseInt(o, 10) : void 0,
    skipTargeting: r === "true" ? !0 : void 0,
    incognito: c === "true" ? !0 : void 0,
    buttonSize: p ?? void 0,
    offset: u || m ? {
      x: u ? parseInt(u, 10) : void 0,
      y: m ? parseInt(m, 10) : void 0
    } : void 0,
    modalWidth: b ? parseInt(b, 10) : void 0,
    backdropOpacity: v ? parseFloat(v) : void 0,
    fontFamily: y ?? void 0,
    fontSize: f ? parseInt(f, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: s ?? void 0,
      marker: a ?? void 0
    },
    text: h || w || g || C || B || P ? {
      tooltip: h ?? void 0,
      modalTitle: w ?? void 0,
      modalSubtitle: g ?? void 0,
      placeholder: C ?? void 0,
      submitButton: B ?? void 0,
      skipButton: P ?? void 0
    } : void 0,
    positiveIcon: it ?? void 0,
    negativeIcon: ot ?? void 0,
    screenshotMethod: ct ?? void 0,
    captureVideo: at === "true" ? !0 : void 0,
    hideThumbs: rt === "true" ? !0 : void 0,
    hideDismiss: dt === "true" ? !0 : void 0,
    videoOptions: z ? {
      maxDuration: parseInt(z, 10)
    } : void 0,
    quests: $ ? {
      base: $,
      up: ht ?? void 0,
      down: ut ?? void 0,
      video: pt ?? void 0,
      apiKey: mt ?? void 0,
      moduleUrl: ft ?? void 0
    } : void 0
  };
}
if (typeof document < "u") {
  const e = () => {
    const t = document.currentScript, i = He(), o = t ? Be(t) : null, n = i ?? o;
    n?.endpoint && new Re(n);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  Re as QaidFeedback,
  Ce as captureDomScreenshot,
  de as captureNetworkErrors,
  ve as createVideoRecorder,
  ge as getSupportedMimeType,
  Pe as isDomScreenshotSupported,
  be as isVideoRecordingSupported
};
//# sourceMappingURL=qaid.js.map
