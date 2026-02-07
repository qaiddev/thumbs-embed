var Z = Object.defineProperty;
var Q = (e, t, i) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var l = (e, t, i) => Q(e, typeof t != "symbol" ? t + "" : t, i);
const S = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, I = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, tt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, et = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}.qaid-widget,.qaid-widget *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-widget.qaid-auto-container{position:fixed;z-index:50;display:flex;gap:.5rem}.qaid-widget.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-widget.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-widget.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-widget.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-widget.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-widget.qaid-incognito:hover{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;top:0;right:0;bottom:0;left:0;cursor:crosshair;pointer-events:auto;z-index:9999}.qaid-banner{position:fixed;top:0;left:0;right:0;padding:.75rem 1rem;text-align:center;z-index:10000;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-slideDown .2s ease-out}.qaid-banner-up{background:color-mix(in srgb,var(--qaid-positive) 90%,transparent);color:#fff}.qaid-banner-down{background:color-mix(in srgb,var(--qaid-negative) 90%,transparent);color:#fff}.qaid-banner-text{font-weight:500}.qaid-banner-hint{margin-left:.5rem;opacity:.75}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;top:10px;right:10px;bottom:10px;left:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;top:20px;right:20px;bottom:20px;left:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-highlight{outline:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent)!important;outline-offset:2px!important;background-color:color-mix(in srgb,var(--qaid-negative) 10%,transparent)!important;transition:outline .1s ease,background-color .1s ease}body.qaid-targeting.qaid-type-up .qaid-highlight{outline-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)!important;background-color:color-mix(in srgb,var(--qaid-positive) 10%,transparent)!important}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}";
let q = 0;
const it = {
  small: 36,
  medium: 48,
  large: 64
}, ot = {
  small: 18,
  medium: 24,
  large: 32
};
function nt(e, t, i) {
  const [o, n, a] = [e, t, i].map((s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)));
  return 0.2126 * o + 0.7152 * n + 0.0722 * a;
}
function at(e) {
  if (e.startsWith("#")) {
    const i = e.slice(1), o = i.length === 3 ? i.split("").map((a) => a + a).join("") : i, n = parseInt(o, 16);
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
function rt(e) {
  const t = at(e);
  return t && nt(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function st(e = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: i = "rgb(255, 0, 0)",
    markerColor: o = "#6366f1",
    buttonSize: n = "medium",
    modalWidth: a = 400,
    backdropOpacity: s = 0.3,
    fontFamily: c = "system-ui, -apple-system, sans-serif",
    fontSize: r = 16
  } = e, d = it[n], h = ot[n], u = rt(o);
  return {
    "--qaid-positive": t,
    "--qaid-negative": i,
    "--qaid-marker": o,
    "--qaid-marker-text": u,
    "--qaid-btn-size": `${d}px`,
    "--qaid-icon-size": `${h}px`,
    "--qaid-modal-width": `${a}px`,
    "--qaid-backdrop-opacity": String(s),
    "--qaid-font-family": c,
    "--qaid-font-size": `${r}px`
  };
}
function dt(e, t) {
  for (const [i, o] of Object.entries(t))
    e.style.setProperty(i, o);
}
function ct() {
  if (q++, q > 1) return;
  const e = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-positive);color:#fff}button.qaid-btn-down:hover{background:var(--qaid-negative);color:#fff}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", t = document.createElement("style");
  t.id = "qaid-styles", t.textContent = et + e, document.head.appendChild(t);
}
function lt() {
  if (!(q <= 0) && (q--, q === 0)) {
    const e = document.getElementById("qaid-styles");
    e && e.remove();
  }
}
const ht = ["data-comp", "data-qa", "data-testid", "data-id"];
function F(e, t = document.body) {
  let i = e;
  for (; i && i !== t; ) {
    for (const o of ht) {
      const n = i.getAttribute(o);
      if (n)
        return `${o}="${n}"`;
    }
    i = i.parentElement;
  }
  return null;
}
function ut(e, t = 100) {
  var o;
  const i = ((o = e.textContent) == null ? void 0 : o.trim().slice(0, t)) || "";
  return i.length === t ? i + "..." : i;
}
function pt(e) {
  let t = 1, i = e.previousElementSibling;
  for (; i; )
    t++, i = i.previousElementSibling;
  return t;
}
function mt(e) {
  const t = [];
  let i = e;
  for (; i && i !== document.body && i !== document.documentElement; ) {
    const o = i.tagName.toLowerCase(), n = pt(i);
    t.unshift(`${o}:nth-child(${n})`), i = i.parentElement;
  }
  return t.length > 0 ? `body > ${t.join(" > ")}` : "body";
}
function ft(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function gt(e) {
  const t = F(e);
  return t ? `[${t}]` : e.id ? `#${ft(e.id)}` : mt(e);
}
function bt(e) {
  const t = ut(e), i = F(e);
  return { selector: gt(e), text: t, dataAttr: i };
}
const U = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function vt(e, t, i, o, n) {
  const a = e.y, s = t - (e.y + e.height);
  if (s >= i + o)
    return {
      top: e.y + e.height + o,
      position: "below"
    };
  if (a >= i + o)
    return {
      top: e.y - i - o,
      position: "above"
    };
  const c = s > a ? "below" : "above";
  let r;
  return c === "below" ? r = Math.min(
    e.y + e.height + o,
    t - i - n
  ) : r = Math.max(n, e.y - i - o), { top: r, position: c };
}
function yt(e, t, i, o) {
  let a = e.x + e.width / 2 - i / 2;
  return a = Math.max(o, Math.min(a, t - i - o)), a;
}
function wt(e, t, i, o = 24, n = 24) {
  const s = e.clickX - t - n / 2;
  return Math.max(o, Math.min(s, i - o - n / 2));
}
function qt(e, t, i, o = U) {
  const n = o.height + o.arrowHeight, a = vt(
    e,
    i,
    n,
    o.gap,
    o.viewportPadding
  ), s = yt(
    e,
    t,
    o.width,
    o.viewportPadding
  );
  return {
    top: a.top,
    left: s,
    position: a.position
  };
}
function xt(e, t, i, o = U) {
  const n = qt(e, t, i, o), a = wt(
    e,
    n.left,
    o.width
  );
  return {
    modal: n,
    arrow: { left: a }
  };
}
const kt = 20;
function Ct(e) {
  const t = [], i = console.error, o = console.warn, n = console.log, a = (s, c) => {
    const r = {
      message: c.map((d) => String(d)).join(" "),
      timestamp: Date.now(),
      level: s
    };
    t.length >= kt && t.shift(), t.push(r), e && e(r);
  };
  return console.error = function(...s) {
    a("error", s), i.apply(console, s);
  }, console.warn = function(...s) {
    a("warn", s), o.apply(console, s);
  }, console.log = function(...s) {
    a("log", s), n.apply(console, s);
  }, {
    errors: t,
    restore: () => {
      console.error = i, console.warn = o, console.log = n;
    }
  };
}
const Et = 20, O = 4096;
function k(e) {
  if (e == null) return;
  const t = typeof e == "string" ? e : JSON.stringify(e);
  return t.length > O ? t.slice(0, O) + "…[truncated]" : t;
}
function H(e, t) {
  e.length >= Et && e.shift(), e.push(t);
}
async function Tt(e) {
  try {
    const t = await e.clone().text();
    return k(t);
  } catch {
    return;
  }
}
function St() {
  const e = [], t = window.fetch;
  window.fetch = async function(n, a) {
    const s = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, c = (a == null ? void 0 : a.method) ?? (typeof n == "object" && "method" in n ? n.method : "GET");
    let r;
    a != null && a.body && (r = k(a.body));
    const d = await t.apply(window, [n, a]);
    if (d.status >= 400) {
      const h = await Tt(d);
      H(e, {
        url: s,
        method: c.toUpperCase(),
        status: d.status,
        statusText: d.statusText,
        requestBody: r,
        responseBody: h,
        timestamp: Date.now()
      });
    }
    return d;
  };
  const i = XMLHttpRequest.prototype.open, o = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, a, ...s) {
    return this._qaid_method = n, this._qaid_url = typeof a == "string" ? a : a.toString(), i.apply(this, [n, a, ...s]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const a = this, s = n ? k(n) : void 0;
    return a.addEventListener("load", function() {
      a.status >= 400 && H(e, {
        url: a._qaid_url,
        method: a._qaid_method.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        requestBody: s,
        responseBody: k(a.responseText),
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
function It() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function Lt() {
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
function Mt(e = {}) {
  const t = e.maxDuration ?? 15, i = e.videoBitsPerSecond ?? 8e5;
  let o = null, n = null, a = [], s = null, c = null, r = null, d = 0, h = null, u = null, m = !1, f = null;
  function y() {
    r !== null && (clearInterval(r), r = null), f !== null && (clearTimeout(f), f = null), o && (o.getTracks().forEach((p) => p.stop()), o = null), n = null, a = [], s = null, c = null, h = null, u = null;
  }
  function g() {
    m || (m = !0, n && n.state !== "inactive" && n.stop());
  }
  return {
    async start() {
      m = !1, a = [];
      const p = Lt();
      if (!p)
        throw new Error("No supported video MIME type found");
      o = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0
      });
      const b = o.getVideoTracks()[0];
      b && b.addEventListener("ended", () => {
        g();
      }), n = new MediaRecorder(o, {
        mimeType: p,
        videoBitsPerSecond: i
      }), n.ondataavailable = (v) => {
        v.data.size > 0 && a.push(v.data);
      }, n.onstop = () => {
        const v = new Blob(a, { type: p });
        h && h(v), c && c(v), o && o.getTracks().forEach((x) => x.stop());
      }, n.onerror = () => {
        u && u(new Error("MediaRecorder error"));
      }, n.start(1e3), d = Date.now(), r = setInterval(() => {
        const v = Math.floor((Date.now() - d) / 1e3);
        s && s(v);
      }, 1e3), f = setTimeout(() => {
        g();
      }, t * 1e3);
    },
    stop() {
      return new Promise((p, b) => {
        h = p, u = b, g();
      });
    },
    onTick(p) {
      s = p;
    },
    onStop(p) {
      c = p;
    },
    destroy() {
      g(), y();
    }
  };
}
function Dt(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function $(e, t, i) {
  const o = i.style.pointerEvents;
  i.style.pointerEvents = "none";
  const n = document.elementFromPoint(e, t);
  return i.style.pointerEvents = o, n;
}
function N(e) {
  return e ? !!(e.closest(".qaid-widget") || e.closest(".qaid-targeting-overlay") || e.closest(".qaid-modal-container") || e.closest(".qaid-bottom-sheet")) : !1;
}
function zt(e, t = 0) {
  const i = e.getBoundingClientRect();
  return {
    x: i.left - t,
    y: i.top - t,
    width: i.width + t * 2,
    height: i.height + t * 2
  };
}
function L(e) {
  document.querySelectorAll(`.${e}`).forEach((t) => {
    t.classList.remove(e);
  });
}
async function Rt(e = {}) {
  var n;
  const { quality: t = 1, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!((n = navigator.mediaDevices) != null && n.getDisplayMedia))
      return console.warn("Screen Capture API not available"), null;
    const a = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), s = a.getVideoTracks()[0], c = s.getSettings(), r = document.createElement("video");
    r.srcObject = a, r.muted = !0, await new Promise((p) => {
      r.onloadedmetadata = () => {
        r.play(), p();
      };
    }), await new Promise((p) => {
      const b = () => {
        r.readyState >= 2 ? p() : requestAnimationFrame(b);
      };
      b();
    }), await new Promise((p) => setTimeout(p, 100));
    const d = c.width || r.videoWidth, h = c.height || r.videoHeight, u = Math.min(i / d, o / h, 1), m = Math.round(d * u), f = Math.round(h * u), y = document.createElement("canvas");
    y.width = m, y.height = f;
    const g = y.getContext("2d");
    return g ? (g.drawImage(r, 0, 0, m, f), s.stop(), y.toDataURL("image/webp", t)) : (s.stop(), null);
  } catch (a) {
    return console.warn("Screenshot capture failed:", a), null;
  }
}
const V = "https://qaid.dev/lib/html2canvas.min.js", Bt = 1e4, Pt = 50;
let w = null;
function Ft() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function At() {
  return window.html2canvas ? Promise.resolve(!0) : w || (w = new Promise((e) => {
    if (!document.querySelector(
      `script[src="${V}"]`
    )) {
      const n = document.createElement("script");
      n.src = V, n.async = !0, document.head.appendChild(n);
    }
    const i = Date.now(), o = () => {
      if (window.html2canvas) {
        e(!0);
        return;
      }
      if (Date.now() - i > Bt) {
        w = null, e(!1);
        return;
      }
      setTimeout(o, Pt);
    };
    o();
  }), w);
}
async function Ot(e = {}) {
  const { quality: t = 0.8, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!await At() || !window.html2canvas)
      return console.warn("html2canvas failed to load"), null;
    const a = await window.html2canvas(document.body, {
      useCORS: !0,
      allowTaint: !1,
      logging: !1,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      x: window.scrollX,
      y: window.scrollY,
      ignoreElements: (d) => {
        var h, u, m;
        return d instanceof HTMLElement ? d.classList.contains("qaid-widget") || d.classList.contains("qaid-targeting-overlay") || d.classList.contains("qaid-modal-container") || d.classList.contains("qaid-bottom-sheet") || d.classList.contains("qaid-backdrop") || d.classList.contains("qaid-selected-marker") || d.classList.contains("qaid-tooltip-text") || d.classList.contains("qaid-recording-indicator") || d.classList.contains("qaid-video-preview") || ((m = (h = d.className) == null ? void 0 : (u = h.toString()).startsWith) == null ? void 0 : m.call(u, "qaid-")) : !1;
      }
    }), s = a.width, c = a.height, r = Math.min(i / s, o / c, 1);
    if (r < 1) {
      const d = Math.round(s * r), h = Math.round(c * r), u = document.createElement("canvas");
      u.width = d, u.height = h;
      const m = u.getContext("2d");
      return m ? (m.drawImage(a, 0, 0, d, h), u.toDataURL("image/webp", t)) : null;
    }
    return a.toDataURL("image/webp", t);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const W = "qaid_visitor_id";
function Ht() {
  try {
    let e = localStorage.getItem(W);
    return e || (e = crypto.randomUUID(), localStorage.setItem(W, e)), e;
  } catch {
    return crypto.randomUUID();
  }
}
class $t {
  constructor(t) {
    l(this, "config");
    l(this, "state", "IDLE");
    l(this, "feedbackData", {
      feedbackType: null,
      elementSelector: null,
      elementText: null,
      consoleErrors: []
    });
    l(this, "selectedBounds", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      clickX: 0,
      clickY: 0,
      visible: !1
    });
    l(this, "feedbackId", null);
    l(this, "mousePos", { x: 0, y: 0 });
    l(this, "lastHighlighted", null);
    l(this, "isMobile", !1);
    l(this, "visitorId");
    // Console capture
    l(this, "consoleCapture", null);
    // Video recording
    l(this, "videoRecorder", null);
    l(this, "networkCapture", null);
    l(this, "recordedBlob", null);
    l(this, "recordingIndicator", null);
    l(this, "videoPreview", null);
    l(this, "isRecording", !1);
    l(this, "isSendingVideo", !1);
    // DOM elements
    l(this, "container", null);
    l(this, "isUserProvidedContainer", !1);
    l(this, "overlayContainer", null);
    l(this, "captureLayer", null);
    l(this, "crosshairH", null);
    l(this, "crosshairV", null);
    l(this, "scope", null);
    l(this, "marker", null);
    l(this, "modalContainer", null);
    l(this, "backdrop", null);
    // Per-instance CSS variables
    l(this, "cssVars", {});
    // Bound event handlers
    l(this, "boundKeyDown");
    l(this, "boundMouseMove");
    l(this, "boundClick");
    l(this, "boundResize");
    l(this, "tooltipElement", null);
    var i, o, n, a, s, c, r, d, h, u, m, f, y, g, p, b, v;
    this.config = {
      endpoint: t.endpoint,
      apiKey: t.apiKey ?? "",
      container: t.container ?? "",
      buttonClass: t.buttonClass ?? "",
      position: t.position ?? "bottom-right",
      offset: {
        x: ((i = t.offset) == null ? void 0 : i.x) ?? 16,
        y: ((o = t.offset) == null ? void 0 : o.y) ?? 16
      },
      zIndex: t.zIndex ?? 50,
      skipTargeting: t.skipTargeting ?? !1,
      colors: {
        positive: ((n = t.colors) == null ? void 0 : n.positive) ?? "rgb(0, 200, 83)",
        negative: ((a = t.colors) == null ? void 0 : a.negative) ?? "rgb(255, 0, 0)",
        marker: ((s = t.colors) == null ? void 0 : s.marker) ?? "#6366f1"
      },
      buttonSize: t.buttonSize ?? "medium",
      text: {
        tooltip: ((c = t.text) == null ? void 0 : c.tooltip) ?? "",
        bannerText: ((r = t.text) == null ? void 0 : r.bannerText) ?? "Click on any element to target it with your feedback",
        bannerHint: ((d = t.text) == null ? void 0 : d.bannerHint) ?? "(Press Escape to cancel)",
        modalTitle: ((h = t.text) == null ? void 0 : h.modalTitle) ?? "Thank you for your feedback!",
        modalSubtitle: ((u = t.text) == null ? void 0 : u.modalSubtitle) ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: ((m = t.text) == null ? void 0 : m.placeholder) ?? "Optional: Tell us more about your experience...",
        submitButton: ((f = t.text) == null ? void 0 : f.submitButton) ?? "Submit",
        skipButton: ((y = t.text) == null ? void 0 : y.skipButton) ?? "Skip"
      },
      modalWidth: t.modalWidth ?? 400,
      backdropOpacity: t.backdropOpacity ?? 0.3,
      fontFamily: t.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: t.fontSize ?? 16,
      captureScreenshot: t.captureScreenshot ?? !1,
      screenshotMethod: t.screenshotMethod ?? "permission",
      screenshotOptions: {
        quality: ((g = t.screenshotOptions) == null ? void 0 : g.quality) ?? 0.8,
        maxWidth: ((p = t.screenshotOptions) == null ? void 0 : p.maxWidth) ?? 1280,
        maxHeight: ((b = t.screenshotOptions) == null ? void 0 : b.maxHeight) ?? 800
      },
      incognito: t.incognito ?? !1,
      positiveIcon: t.positiveIcon ?? "",
      negativeIcon: t.negativeIcon ?? "",
      hideThumbs: t.hideThumbs ?? !1,
      captureVideo: t.captureVideo ?? !1,
      videoOptions: {
        maxDuration: ((v = t.videoOptions) == null ? void 0 : v.maxDuration) ?? 15
      },
      recordIcon: t.recordIcon ?? ""
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundMouseMove = this.handleMouseMove.bind(this), this.boundClick = this.handleClick.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Ht(), this.init();
  }
  applyVars(t) {
    dt(t, this.cssVars);
  }
  init() {
    ct(), this.cssVars = st({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = Ct((t) => {
      var i;
      this.feedbackData.consoleErrors = ((i = this.consoleCapture) == null ? void 0 : i.errors) ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors;
  }
  checkMobile() {
    this.isMobile = Dt();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    let t = null;
    if (this.config.container && (t = document.querySelector(this.config.container)), t)
      this.container = t, this.container.classList.add("qaid-widget", `qaid-${this.config.position}`), this.config.incognito && this.container.classList.add("qaid-incognito"), this.isUserProvidedContainer = !0;
    else {
      this.container = document.createElement("div"), this.container.className = `qaid-widget qaid-auto-container qaid-${this.config.position}${this.config.incognito ? " qaid-incognito" : ""}`, this.container.style.zIndex = String(this.config.zIndex);
      const { x: c, y: r } = this.config.offset;
      this.config.position.includes("right") ? this.container.style.right = `${c}px` : this.container.style.left = `${c}px`, this.config.position.includes("bottom") ? this.container.style.bottom = `${r}px` : this.container.style.top = `${r}px`, document.body.appendChild(this.container);
    }
    this.applyVars(this.container);
    const i = !!this.config.buttonClass, o = i ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", n = (this.config.skipTargeting, "Feedback for us?"), a = this.config.text.tooltip || n, s = document.createElement("div");
    if (s.className = "qaid-tooltip-text", s.textContent = a, this.applyVars(s), document.body.appendChild(s), this.tooltipElement = s, !this.config.hideThumbs) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = i ? `${o} qaid-btn-up` : "qaid-btn qaid-btn-up", r.innerHTML = this.config.positiveIcon || S, r.addEventListener("click", (u) => this.handleThumbClick("up", u.currentTarget)), r.addEventListener("mouseenter", () => this.showTooltip(r)), r.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(r);
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const h = document.createElement("button");
      h.type = "button", h.className = i ? `${o} qaid-btn-down` : "qaid-btn qaid-btn-down", h.innerHTML = this.config.negativeIcon || I, h.addEventListener("click", (u) => this.handleThumbClick("down", u.currentTarget)), h.addEventListener("mouseenter", () => this.showTooltip(h)), h.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(h), this.container.appendChild(c), this.container.appendChild(d);
    }
    if (this.config.captureVideo && It()) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = i ? `${o} qaid-btn-record` : "qaid-btn qaid-btn-record", r.innerHTML = this.config.recordIcon || tt, r.addEventListener("click", () => this.startRecording()), r.addEventListener("mouseenter", () => this.showTooltip(r)), r.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(r), this.container.appendChild(c);
    }
  }
  showTooltip(t) {
    if (!this.tooltipElement) return;
    const i = this.tooltipElement, o = 8;
    i.style.visibility = "hidden", i.classList.add("qaid-tooltip-visible");
    const n = t.getBoundingClientRect(), a = i.getBoundingClientRect(), s = window.innerWidth, c = window.innerHeight;
    let r, d;
    r = n.bottom + o, r + a.height > c - o && (r = n.top - a.height - o), d = n.left, d < o ? d = o : d + a.width > s - o && (d = s - a.width - o), r < o ? r = o : r + a.height > c - o && (r = c - a.height - o), i.style.top = `${r}px`, i.style.left = `${d}px`, i.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement && this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleThumbClick(t, i) {
    this.config.skipTargeting ? this.submitDirectFeedback(t, i) : this.startTargeting(t);
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
  startTargeting(t) {
    this.state = "TARGETING", this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.boundKeyDown);
  }
  createTargetingOverlay() {
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer", this.captureLayer.addEventListener("mousemove", this.boundMouseMove), this.captureLayer.addEventListener("click", this.boundClick);
    const t = document.createElement("div");
    t.className = `qaid-banner qaid-banner-${this.feedbackData.feedbackType}`, t.innerHTML = `
      <span class="qaid-banner-text">${this.config.text.bannerText}</span>
      <span class="qaid-banner-hint">${this.config.text.bannerHint}</span>
    `;
    const i = document.createElement("div");
    i.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope", this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `, this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(t), this.overlayContainer.appendChild(i), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.applyVars(this.overlayContainer), document.body.appendChild(this.overlayContainer);
  }
  handleKeyDown(t) {
    t.key === "Escape" && (this.isRecording ? this.stopRecording() : this.videoPreview ? this.cancelRecordingPreview() : this.state === "TARGETING" ? this.cancelTargeting() : this.state === "MODAL_OPEN" && this.closeModal());
  }
  handleMouseMove(t) {
    if (this.mousePos.x = t.clientX, this.mousePos.y = t.clientY, this.crosshairH && (this.crosshairH.style.top = `${t.clientY}px`), this.crosshairV && (this.crosshairV.style.left = `${t.clientX}px`), this.scope && (this.scope.style.left = `${t.clientX}px`, this.scope.style.top = `${t.clientY}px`), this.captureLayer) {
      const i = $(
        t.clientX,
        t.clientY,
        this.captureLayer
      );
      i && !N(i) ? (this.lastHighlighted && this.lastHighlighted !== i && this.lastHighlighted.classList.remove("qaid-highlight"), i.classList.add("qaid-highlight"), this.lastHighlighted = i) : this.lastHighlighted && (this.lastHighlighted.classList.remove("qaid-highlight"), this.lastHighlighted = null);
    }
  }
  handleClick(t) {
    if (!this.captureLayer) return;
    const i = $(
      t.clientX,
      t.clientY,
      this.captureLayer
    );
    if (!i || N(i))
      return;
    i.classList.remove("qaid-highlight");
    const o = zt(i, 8);
    this.selectedBounds = {
      ...o,
      clickX: t.clientX,
      clickY: t.clientY,
      visible: !0
    };
    const { selector: n, text: a } = bt(i);
    this.feedbackData.elementSelector = n, this.feedbackData.elementText = a, L("qaid-highlight"), this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.state = "SELECTED", this.showSelectedMarker(), this.submitFeedback();
  }
  cancelTargeting() {
    L("qaid-highlight"), this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), document.removeEventListener("keydown", this.boundKeyDown), this.state = "IDLE", this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, this.lastHighlighted = null;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    this.selectedBounds.visible && (this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.selectedBounds.x}px`, this.marker.style.top = `${this.selectedBounds.y}px`, this.marker.style.width = `${this.selectedBounds.width}px`, this.marker.style.height = `${this.selectedBounds.height}px`, this.marker.style.zIndex = String(this.config.zIndex + 1), this.applyVars(this.marker), document.body.appendChild(this.marker));
  }
  hideSelectedMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  async submitFeedback() {
    if (!this.feedbackData.feedbackType) return;
    let t = null;
    this.config.captureScreenshot && (this.config.screenshotMethod === "dom" ? t = await Ot(this.config.screenshotOptions) : t = await Rt(this.config.screenshotOptions));
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
        const a = await n.json();
        this.feedbackId = a.id;
      }
    } catch (n) {
      console.error("Failed to submit feedback:", n);
    }
    this.state = "MODAL_OPEN", this.showModal();
  }
  showModal() {
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.closeModal()), this.applyVars(this.backdrop), this.isMobile ? this.showBottomSheet() : this.showPositionedModal(), document.body.appendChild(this.backdrop), document.addEventListener("keydown", this.boundKeyDown);
  }
  showBottomSheet() {
    const t = document.createElement("div");
    t.className = "qaid-bottom-sheet", t.style.zIndex = String(this.config.zIndex + 3), t.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.applyVars(t), document.body.appendChild(t), this.modalContainer = t, this.setupModalInteractions();
  }
  showPositionedModal() {
    const { modal: t, arrow: i } = xt(
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
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${t.position}`, this.modalContainer.style.top = `${t.top}px`, this.modalContainer.style.left = `${t.left}px`, this.modalContainer.style.zIndex = String(this.config.zIndex + 3);
    const o = document.createElement("div");
    o.className = "qaid-modal-arrow", o.style.left = `${i.left}px`;
    const n = document.createElement("div");
    n.className = "qaid-modal-box", n.innerHTML = this.getModalContent(), this.modalContainer.appendChild(o), this.modalContainer.appendChild(n), this.applyVars(this.modalContainer), document.body.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.feedbackData.feedbackType === "up", i = this.config.positiveIcon || S, o = this.config.negativeIcon || I;
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${this.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.config.buttonClass} ${t ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${t ? "qaid-type-up" : "qaid-type-down"}`}" title="Click to switch">
          ${t ? i : o}
        </button>
        <div class="qaid-modal-header-text">
          <h3 class="qaid-modal-title">${this.config.text.modalTitle}</h3>
          <p class="qaid-modal-subtitle">${this.config.text.modalSubtitle}</p>
        </div>
      </div>
      <textarea class="qaid-textarea" placeholder="${this.config.text.placeholder}"></textarea>
      <div class="qaid-btn-row">
        <button type="button" class="qaid-btn-submit">${this.config.text.skipButton}</button>
      </div>
    `;
  }
  setupModalInteractions() {
    if (!this.modalContainer) return;
    const t = this.modalContainer.querySelector(".qaid-textarea"), i = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      i && (i.textContent = t.value.trim() ? this.config.text.submitButton : this.config.text.skipButton);
    })), i && i.addEventListener("click", () => {
      const n = (t == null ? void 0 : t.value.trim()) || null;
      this.submitMessage(n);
    });
    const o = this.modalContainer.querySelector(".qaid-type-toggle");
    o && o.addEventListener("click", () => {
      const n = this.feedbackData.feedbackType === "up" ? "down" : "up";
      this.feedbackData.feedbackType = n, this.config.buttonClass ? (o.classList.toggle("qaid-btn-up", n === "up"), o.classList.toggle("qaid-btn-down", n === "down")) : (o.classList.toggle("qaid-type-up", n === "up"), o.classList.toggle("qaid-type-down", n === "down"));
      const a = this.config.positiveIcon || S, s = this.config.negativeIcon || I;
      o.innerHTML = n === "up" ? a : s, this.feedbackId && fetch(`${this.config.endpoint}/${this.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: n })
      }).catch((c) => console.error("Failed to update feedback type:", c));
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
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.boundKeyDown), this.hideSelectedMarker(), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  // ==================== Video Recording ====================
  async startRecording() {
    if (!(this.isRecording || this.state !== "IDLE"))
      try {
        this.networkCapture = St(), this.videoRecorder = Mt({
          maxDuration: this.config.videoOptions.maxDuration
        }), this.videoRecorder.onTick((t) => {
          this.updateRecordingTimer(t);
        }), this.videoRecorder.onStop((t) => {
          this.isRecording && (this.recordedBlob = t, this.isRecording = !1, this.removeRecordingIndicator(), document.removeEventListener("keydown", this.boundKeyDown), this.setButtonsDisabled(!1), t && t.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.boundKeyDown);
      } catch {
        this.cleanupRecording();
      }
  }
  async stopRecording() {
    if (!(!this.isRecording || !this.videoRecorder)) {
      try {
        this.recordedBlob = await this.videoRecorder.stop();
      } catch {
        this.recordedBlob = null;
      }
      this.isRecording = !1, this.removeRecordingIndicator(), document.removeEventListener("keydown", this.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
    }
  }
  showRecordingIndicator() {
    this.recordingIndicator = document.createElement("div"), this.recordingIndicator.className = "qaid-recording-indicator", this.recordingIndicator.style.zIndex = String(this.config.zIndex + 100);
    const t = document.createElement("div");
    t.className = "qaid-recording-dot";
    const i = document.createElement("span");
    i.className = "qaid-recording-time", i.textContent = this.formatTime(this.config.videoOptions.maxDuration);
    const o = document.createElement("button");
    o.type = "button", o.className = "qaid-recording-stop", o.textContent = "Stop", o.addEventListener("click", () => this.stopRecording()), this.recordingIndicator.appendChild(t), this.recordingIndicator.appendChild(i), this.recordingIndicator.appendChild(o), this.applyVars(this.recordingIndicator), document.body.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const i = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (i) {
      const o = Math.max(0, this.config.videoOptions.maxDuration - t);
      i.textContent = this.formatTime(o);
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
    if (!this.recordedBlob) return;
    const t = URL.createObjectURL(this.recordedBlob);
    this.videoPreview = document.createElement("div"), this.videoPreview.className = "qaid-video-preview", this.videoPreview.style.zIndex = String(this.config.zIndex + 100);
    const i = document.createElement("div");
    i.className = "qaid-video-preview-box";
    const o = document.createElement("h3");
    o.textContent = "Review your recording";
    const n = document.createElement("video");
    n.src = t, n.controls = !0, n.autoplay = !0, n.muted = !0;
    const a = document.createElement("textarea");
    a.placeholder = "Optional: Describe the issue you recorded...";
    const s = document.createElement("div");
    s.className = "qaid-video-preview-actions";
    const c = document.createElement("button");
    c.type = "button", c.className = "qaid-video-btn qaid-video-btn-cancel", c.textContent = "Cancel", c.addEventListener("click", () => this.cancelRecordingPreview());
    const r = document.createElement("button");
    r.type = "button", r.className = "qaid-video-btn qaid-video-btn-rerecord", r.textContent = "Re-record", r.addEventListener("click", () => {
      this.cancelRecordingPreview(), this.startRecording();
    });
    const d = document.createElement("button");
    d.type = "button", d.className = "qaid-video-btn qaid-video-btn-send", d.textContent = "Send", d.addEventListener("click", () => {
      const h = a.value.trim() || null;
      this.submitVideoFeedback(h, d);
    }), s.appendChild(c), s.appendChild(r), s.appendChild(d), i.appendChild(o), i.appendChild(n), i.appendChild(a), i.appendChild(s), this.videoPreview.appendChild(i), this.applyVars(this.videoPreview), document.body.appendChild(this.videoPreview), document.addEventListener("keydown", this.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.videoPreview) {
      const t = this.videoPreview.querySelector("video");
      t != null && t.src && URL.revokeObjectURL(t.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.boundKeyDown);
  }
  async submitVideoFeedback(t, i) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, i.disabled = !0, i.textContent = "Sending...";
    const o = new FormData();
    o.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), o.append("pageUrl", window.location.href), o.append("visitorId", this.visitorId), this.config.apiKey && o.append("apiKey", this.config.apiKey), t && o.append("message", t), this.consoleCapture && o.append("consoleErrors", JSON.stringify(this.consoleCapture.errors)), this.networkCapture && o.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    try {
      const n = await fetch(`${this.config.endpoint}/video`, {
        method: "POST",
        body: o
      });
      n.ok || console.error("Failed to submit video feedback:", await n.text());
    } catch (n) {
      console.error("Failed to submit video feedback:", n);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording();
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.setButtonsDisabled(!1);
  }
  setButtonsDisabled(t) {
    if (!this.container) return;
    this.container.querySelectorAll("button.qaid-btn, button.qaid-btn-structural").forEach((o) => {
      t ? o.classList.contains("qaid-btn-record") || (o.disabled = !0, o.style.opacity = "0.5") : (o.disabled = !1, o.style.opacity = "");
    });
  }
  /**
   * Destroy the embed and clean up all resources
   */
  destroy() {
    this.cleanupRecording(), this.removeVideoPreview(), this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), L("qaid-highlight"), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.container && (this.isUserProvidedContainer ? (this.container.innerHTML = "", this.container.classList.remove("qaid-widget", `qaid-${this.config.position}`, "qaid-incognito")) : this.container.remove(), this.container = null), this.removeTargetingOverlay(), this.hideSelectedMarker(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), this.tooltipElement && (this.tooltipElement.remove(), this.tooltipElement = null), lt();
  }
}
function Nt() {
  var i;
  const e = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!e) return null;
  const t = (i = e.textContent) == null ? void 0 : i.trim();
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
function Vt(e) {
  const t = e.getAttribute("data-endpoint");
  if (!t) return null;
  const i = e.getAttribute("data-position"), o = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), a = e.getAttribute("data-negative-color"), s = e.getAttribute("data-marker-color"), c = e.getAttribute("data-container"), r = e.getAttribute("data-button-class"), d = e.getAttribute("data-skip-targeting"), h = e.getAttribute("data-incognito"), u = e.getAttribute("data-button-size"), m = e.getAttribute("data-offset-x"), f = e.getAttribute("data-offset-y"), y = e.getAttribute("data-modal-width"), g = e.getAttribute("data-backdrop-opacity"), p = e.getAttribute("data-font-family"), b = e.getAttribute("data-font-size"), v = e.getAttribute("data-tooltip"), x = e.getAttribute("data-banner-text"), M = e.getAttribute("data-banner-hint"), D = e.getAttribute("data-modal-title"), z = e.getAttribute("data-modal-subtitle"), R = e.getAttribute("data-placeholder"), B = e.getAttribute("data-submit-button"), P = e.getAttribute("data-skip-button"), X = e.getAttribute("data-positive-icon"), _ = e.getAttribute("data-negative-icon"), j = e.getAttribute("data-api-key"), K = e.getAttribute("data-capture-screenshot"), C = e.getAttribute("data-screenshot-quality"), E = e.getAttribute("data-screenshot-max-width"), T = e.getAttribute("data-screenshot-max-height"), Y = e.getAttribute("data-capture-video"), J = e.getAttribute("data-hide-thumbs"), A = e.getAttribute("data-video-max-duration"), G = e.getAttribute("data-screenshot-method");
  return {
    endpoint: t,
    apiKey: j ?? void 0,
    captureScreenshot: K === "true" ? !0 : void 0,
    screenshotOptions: C || E || T ? {
      quality: C ? parseFloat(C) : void 0,
      maxWidth: E ? parseInt(E, 10) : void 0,
      maxHeight: T ? parseInt(T, 10) : void 0
    } : void 0,
    container: c ?? void 0,
    buttonClass: r ?? void 0,
    position: i ?? void 0,
    zIndex: o ? parseInt(o, 10) : void 0,
    skipTargeting: d === "true" ? !0 : void 0,
    incognito: h === "true" ? !0 : void 0,
    buttonSize: u ?? void 0,
    offset: m || f ? {
      x: m ? parseInt(m, 10) : void 0,
      y: f ? parseInt(f, 10) : void 0
    } : void 0,
    modalWidth: y ? parseInt(y, 10) : void 0,
    backdropOpacity: g ? parseFloat(g) : void 0,
    fontFamily: p ?? void 0,
    fontSize: b ? parseInt(b, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: a ?? void 0,
      marker: s ?? void 0
    },
    text: v || x || M || D || z || R || B || P ? {
      tooltip: v ?? void 0,
      bannerText: x ?? void 0,
      bannerHint: M ?? void 0,
      modalTitle: D ?? void 0,
      modalSubtitle: z ?? void 0,
      placeholder: R ?? void 0,
      submitButton: B ?? void 0,
      skipButton: P ?? void 0
    } : void 0,
    positiveIcon: X ?? void 0,
    negativeIcon: _ ?? void 0,
    screenshotMethod: G ?? void 0,
    captureVideo: Y === "true" ? !0 : void 0,
    hideThumbs: J === "true" ? !0 : void 0,
    videoOptions: A ? {
      maxDuration: parseInt(A, 10)
    } : void 0
  };
}
if (typeof document < "u") {
  const e = () => {
    const t = document.currentScript, i = Nt(), o = t ? Vt(t) : null, n = i ?? o;
    n != null && n.endpoint && new $t(n);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  $t as FeedbackEmbed,
  Ot as captureDomScreenshot,
  St as captureNetworkErrors,
  Mt as createVideoRecorder,
  Lt as getSupportedMimeType,
  Ft as isDomScreenshotSupported,
  It as isVideoRecordingSupported
};
//# sourceMappingURL=qaid.js.map
