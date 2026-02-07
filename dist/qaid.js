var tt = Object.defineProperty;
var et = (e, t, o) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var h = (e, t, o) => et(e, typeof t != "symbol" ? t + "" : t, o);
const T = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, I = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, it = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, ot = ".qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;top:0;right:0;bottom:0;left:0;cursor:crosshair;pointer-events:auto;z-index:9999}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;top:10px;right:10px;bottom:10px;left:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;top:20px;right:20px;bottom:20px;left:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}", nt = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}.qaid-highlight{outline:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent)!important;outline-offset:2px!important;box-shadow:inset 0 0 0 9999px color-mix(in srgb,var(--qaid-negative) 8%,transparent)!important;transition:outline .1s ease!important}body.qaid-targeting.qaid-type-up .qaid-highlight{outline-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)!important;box-shadow:inset 0 0 0 9999px color-mix(in srgb,var(--qaid-positive) 8%,transparent)!important}";
let q = 0;
const at = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", st = {
  small: 36,
  medium: 48,
  large: 64
}, rt = {
  small: 18,
  medium: 24,
  large: 32
};
function dt(e, t, o) {
  const [i, n, a] = [e, t, o].map((s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)));
  return 0.2126 * i + 0.7152 * n + 0.0722 * a;
}
function ct(e) {
  if (e.startsWith("#")) {
    const o = e.slice(1), i = o.length === 3 ? o.split("").map((a) => a + a).join("") : o, n = parseInt(i, 16);
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
function lt(e) {
  const t = ct(e);
  return t && dt(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function ht(e = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: o = "rgb(255, 0, 0)",
    markerColor: i = "#6366f1",
    buttonSize: n = "medium",
    modalWidth: a = 400,
    backdropOpacity: s = 0.3,
    fontFamily: l = "system-ui, -apple-system, sans-serif",
    fontSize: d = 16
  } = e, r = st[n], c = rt[n], u = lt(i);
  return {
    "--qaid-positive": t,
    "--qaid-negative": o,
    "--qaid-marker": i,
    "--qaid-marker-text": u,
    "--qaid-btn-size": `${r}px`,
    "--qaid-icon-size": `${c}px`,
    "--qaid-modal-width": `${a}px`,
    "--qaid-backdrop-opacity": String(s),
    "--qaid-font-family": l,
    "--qaid-font-size": `${d}px`
  };
}
function ut(e, t) {
  for (const [o, i] of Object.entries(t))
    e.style.setProperty(o, i);
}
function A() {
  return ot + at;
}
function pt() {
  if (q++, q > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = nt, document.head.appendChild(e);
}
function mt() {
  if (!(q <= 0) && (q--, q === 0)) {
    const e = document.getElementById("qaid-styles");
    e && e.remove();
  }
}
const ft = ["data-comp", "data-qa", "data-testid", "data-id"];
function F(e, t = document.body) {
  let o = e;
  for (; o && o !== t; ) {
    for (const i of ft) {
      const n = o.getAttribute(i);
      if (n)
        return `${i}="${n}"`;
    }
    o = o.parentElement;
  }
  return null;
}
function gt(e, t = 100) {
  var i;
  const o = ((i = e.textContent) == null ? void 0 : i.trim().slice(0, t)) || "";
  return o.length === t ? o + "..." : o;
}
function bt(e) {
  let t = 1, o = e.previousElementSibling;
  for (; o; )
    t++, o = o.previousElementSibling;
  return t;
}
function vt(e) {
  const t = [];
  let o = e;
  for (; o && o !== document.body && o !== document.documentElement; ) {
    const i = o.tagName.toLowerCase(), n = bt(o);
    t.unshift(`${i}:nth-child(${n})`), o = o.parentElement;
  }
  return t.length > 0 ? `body > ${t.join(" > ")}` : "body";
}
function yt(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function wt(e) {
  const t = F(e);
  return t ? `[${t}]` : e.id ? `#${yt(e.id)}` : vt(e);
}
function qt(e) {
  const t = gt(e), o = F(e);
  return { selector: wt(e), text: t, dataAttr: o };
}
const W = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function xt(e, t, o, i, n) {
  const a = e.y, s = t - (e.y + e.height);
  if (s >= o + i)
    return {
      top: e.y + e.height + i,
      position: "below"
    };
  if (a >= o + i)
    return {
      top: e.y - o - i,
      position: "above"
    };
  const l = s > a ? "below" : "above";
  let d;
  return l === "below" ? d = Math.min(
    e.y + e.height + i,
    t - o - n
  ) : d = Math.max(n, e.y - o - i), { top: d, position: l };
}
function kt(e, t, o, i) {
  let a = e.x + e.width / 2 - o / 2;
  return a = Math.max(i, Math.min(a, t - o - i)), a;
}
function Ct(e, t, o, i = 24, n = 24) {
  const s = e.clickX - t - n / 2;
  return Math.max(i, Math.min(s, o - i - n / 2));
}
function St(e, t, o, i = W) {
  const n = i.height + i.arrowHeight, a = xt(
    e,
    o,
    n,
    i.gap,
    i.viewportPadding
  ), s = kt(
    e,
    t,
    i.width,
    i.viewportPadding
  );
  return {
    top: a.top,
    left: s,
    position: a.position
  };
}
function Et(e, t, o, i = W) {
  const n = St(e, t, o, i), a = Ct(
    e,
    n.left,
    i.width
  );
  return {
    modal: n,
    arrow: { left: a }
  };
}
const Tt = 20;
function It(e) {
  const t = [], o = console.error, i = console.warn, n = console.log, a = (s, l) => {
    const d = {
      message: l.map((r) => String(r)).join(" "),
      timestamp: Date.now(),
      level: s
    };
    t.length >= Tt && t.shift(), t.push(d), e && e(d);
  };
  return console.error = function(...s) {
    a("error", s), o.apply(console, s);
  }, console.warn = function(...s) {
    a("warn", s), i.apply(console, s);
  }, console.log = function(...s) {
    a("log", s), n.apply(console, s);
  }, {
    errors: t,
    restore: () => {
      console.error = o, console.warn = i, console.log = n;
    }
  };
}
const Lt = 20, O = 4096;
function k(e) {
  if (e == null) return;
  const t = typeof e == "string" ? e : JSON.stringify(e);
  return t.length > O ? t.slice(0, O) + "…[truncated]" : t;
}
function P(e, t) {
  e.length >= Lt && e.shift(), e.push(t);
}
async function Ht(e) {
  try {
    const t = await e.clone().text();
    return k(t);
  } catch {
    return;
  }
}
function Rt() {
  const e = [], t = window.fetch;
  window.fetch = async function(n, a) {
    const s = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, l = (a == null ? void 0 : a.method) ?? (typeof n == "object" && "method" in n ? n.method : "GET");
    let d;
    a != null && a.body && (d = k(a.body));
    const r = await t.apply(window, [n, a]);
    if (r.status >= 400) {
      const c = await Ht(r);
      P(e, {
        url: s,
        method: l.toUpperCase(),
        status: r.status,
        statusText: r.statusText,
        requestBody: d,
        responseBody: c,
        timestamp: Date.now()
      });
    }
    return r;
  };
  const o = XMLHttpRequest.prototype.open, i = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, a, ...s) {
    return this._qaid_method = n, this._qaid_url = typeof a == "string" ? a : a.toString(), o.apply(this, [n, a, ...s]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const a = this, s = n ? k(n) : void 0;
    return a.addEventListener("load", function() {
      a.status >= 400 && P(e, {
        url: a._qaid_url,
        method: a._qaid_method.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        requestBody: s,
        responseBody: k(a.responseText),
        timestamp: Date.now()
      });
    }), i.apply(this, [n]);
  }, {
    errors: e,
    restore: () => {
      window.fetch = t, XMLHttpRequest.prototype.open = o, XMLHttpRequest.prototype.send = i;
    }
  };
}
function Dt() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function Mt() {
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
function zt(e = {}) {
  const t = e.maxDuration ?? 15, o = e.videoBitsPerSecond ?? 8e5;
  let i = null, n = null, a = [], s = null, l = null, d = null, r = 0, c = null, u = null, p = !1, f = null;
  function b() {
    d !== null && (clearInterval(d), d = null), f !== null && (clearTimeout(f), f = null), i && (i.getTracks().forEach((m) => m.stop()), i = null), n = null, a = [], s = null, l = null, c = null, u = null;
  }
  function g() {
    p || (p = !0, n && n.state !== "inactive" && n.stop());
  }
  return {
    async start() {
      p = !1, a = [];
      const m = Mt();
      if (!m)
        throw new Error("No supported video MIME type found");
      i = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0
      });
      const v = i.getVideoTracks()[0];
      v && v.addEventListener("ended", () => {
        g();
      }), n = new MediaRecorder(i, {
        mimeType: m,
        videoBitsPerSecond: o
      }), n.ondataavailable = (y) => {
        y.data.size > 0 && a.push(y.data);
      }, n.onstop = () => {
        const y = new Blob(a, { type: m });
        c && c(y), l && l(y), i && i.getTracks().forEach((x) => x.stop());
      }, n.onerror = () => {
        u && u(new Error("MediaRecorder error"));
      }, n.start(1e3), r = Date.now(), d = setInterval(() => {
        const y = Math.floor((Date.now() - r) / 1e3);
        s && s(y);
      }, 1e3), f = setTimeout(() => {
        g();
      }, t * 1e3);
    },
    stop() {
      return new Promise((m, v) => {
        c = m, u = v, g();
      });
    },
    onTick(m) {
      s = m;
    },
    onStop(m) {
      l = m;
    },
    destroy() {
      g(), b();
    }
  };
}
function Bt(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function $(e, t, o) {
  const i = o.map((a) => a.style.visibility);
  o.forEach((a) => a.style.visibility = "hidden");
  const n = document.elementFromPoint(e, t);
  return o.forEach((a, s) => a.style.visibility = i[s]), n;
}
function N(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function At(e, t = 0) {
  const o = e.getBoundingClientRect();
  return {
    x: o.left - t,
    y: o.top - t,
    width: o.width + t * 2,
    height: o.height + t * 2
  };
}
function L(e) {
  document.querySelectorAll(`.${e}`).forEach((t) => {
    t.classList.remove(e);
  });
}
async function Ot(e = {}) {
  var n;
  const { quality: t = 1, maxWidth: o = 1280, maxHeight: i = 800 } = e;
  try {
    if (!((n = navigator.mediaDevices) != null && n.getDisplayMedia))
      return console.warn("Screen Capture API not available"), null;
    const a = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), s = a.getVideoTracks()[0], l = s.getSettings(), d = document.createElement("video");
    d.srcObject = a, d.muted = !0, await new Promise((m) => {
      d.onloadedmetadata = () => {
        d.play(), m();
      };
    }), await new Promise((m) => {
      const v = () => {
        d.readyState >= 2 ? m() : requestAnimationFrame(v);
      };
      v();
    }), await new Promise((m) => setTimeout(m, 100));
    const r = l.width || d.videoWidth, c = l.height || d.videoHeight, u = Math.min(o / r, i / c, 1), p = Math.round(r * u), f = Math.round(c * u), b = document.createElement("canvas");
    b.width = p, b.height = f;
    const g = b.getContext("2d");
    return g ? (g.drawImage(d, 0, 0, p, f), s.stop(), b.toDataURL("image/webp", t)) : (s.stop(), null);
  } catch (a) {
    return console.warn("Screenshot capture failed:", a), null;
  }
}
const V = "https://qaid.dev/lib/html2canvas.min.js", Pt = 1e4, $t = 50;
let w = null;
function jt() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function Nt() {
  return window.html2canvas ? Promise.resolve(!0) : w || (w = new Promise((e) => {
    if (!document.querySelector(
      `script[src="${V}"]`
    )) {
      const n = document.createElement("script");
      n.src = V, n.async = !0, document.head.appendChild(n);
    }
    const o = Date.now(), i = () => {
      if (window.html2canvas) {
        e(!0);
        return;
      }
      if (Date.now() - o > Pt) {
        w = null, e(!1);
        return;
      }
      setTimeout(i, $t);
    };
    i();
  }), w);
}
async function Vt(e = {}) {
  const { quality: t = 0.8, maxWidth: o = 1280, maxHeight: i = 800 } = e;
  try {
    if (!await Nt() || !window.html2canvas)
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
      ignoreElements: (r) => {
        var c, u, p;
        return r instanceof HTMLElement ? r.classList.contains("qaid-buttons") || r.classList.contains("qaid-targeting-overlay") || r.classList.contains("qaid-modal-container") || r.classList.contains("qaid-bottom-sheet") || r.classList.contains("qaid-backdrop") || r.classList.contains("qaid-selected-marker") || r.classList.contains("qaid-tooltip-text") || r.classList.contains("qaid-recording-indicator") || r.classList.contains("qaid-video-preview") || ((p = (c = r.className) == null ? void 0 : (u = c.toString()).startsWith) == null ? void 0 : p.call(u, "qaid-")) : !1;
      }
    }), s = a.width, l = a.height, d = Math.min(o / s, i / l, 1);
    if (d < 1) {
      const r = Math.round(s * d), c = Math.round(l * d), u = document.createElement("canvas");
      u.width = r, u.height = c;
      const p = u.getContext("2d");
      return p ? (p.drawImage(a, 0, 0, r, c), u.toDataURL("image/webp", t)) : null;
    }
    return a.toDataURL("image/webp", t);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const U = "qaid_visitor_id";
function Ut() {
  try {
    let e = localStorage.getItem(U);
    return e || (e = crypto.randomUUID(), localStorage.setItem(U, e)), e;
  } catch {
    return crypto.randomUUID();
  }
}
class Ft {
  constructor(t) {
    h(this, "config");
    h(this, "state", "IDLE");
    h(this, "feedbackData", {
      feedbackType: null,
      elementSelector: null,
      elementText: null,
      consoleErrors: []
    });
    h(this, "selectedBounds", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      clickX: 0,
      clickY: 0,
      visible: !1
    });
    h(this, "feedbackId", null);
    h(this, "mousePos", { x: 0, y: 0 });
    h(this, "lastHighlighted", null);
    h(this, "isMobile", !1);
    h(this, "visitorId");
    // Console capture
    h(this, "consoleCapture", null);
    // Video recording
    h(this, "videoRecorder", null);
    h(this, "networkCapture", null);
    h(this, "recordedBlob", null);
    h(this, "recordingIndicator", null);
    h(this, "videoPreview", null);
    h(this, "isRecording", !1);
    h(this, "isSendingVideo", !1);
    // Shadow DOM
    h(this, "shadowHost", null);
    h(this, "shadowRoot", null);
    // Overlay shadow DOM (always on document.body for full-page coverage)
    h(this, "overlayShadowHost", null);
    h(this, "overlayShadowRoot", null);
    // DOM elements (inside shadow root)
    h(this, "buttonsContainer", null);
    h(this, "isUserProvidedContainer", !1);
    h(this, "overlayContainer", null);
    h(this, "captureLayer", null);
    h(this, "crosshairH", null);
    h(this, "crosshairV", null);
    h(this, "scope", null);
    h(this, "marker", null);
    h(this, "modalContainer", null);
    h(this, "backdrop", null);
    // Per-instance CSS variables
    h(this, "cssVars", {});
    // Bound event handlers
    h(this, "boundKeyDown");
    h(this, "boundMouseMove");
    h(this, "boundClick");
    h(this, "boundResize");
    h(this, "tooltipElement", null);
    var o, i, n, a, s, l, d, r, c, u, p, f, b, g, m;
    this.config = {
      endpoint: t.endpoint,
      apiKey: t.apiKey ?? "",
      container: t.container ?? "",
      buttonClass: t.buttonClass ?? "",
      direction: t.direction ?? "horizontal",
      position: t.position ?? "bottom-right",
      offset: {
        x: ((o = t.offset) == null ? void 0 : o.x) ?? 16,
        y: ((i = t.offset) == null ? void 0 : i.y) ?? 16
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
        tooltip: ((l = t.text) == null ? void 0 : l.tooltip) ?? "",
        modalTitle: ((d = t.text) == null ? void 0 : d.modalTitle) ?? "Thank you for your feedback!",
        modalSubtitle: ((r = t.text) == null ? void 0 : r.modalSubtitle) ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: ((c = t.text) == null ? void 0 : c.placeholder) ?? "Optional: Tell us more about your experience...",
        submitButton: ((u = t.text) == null ? void 0 : u.submitButton) ?? "Submit",
        skipButton: ((p = t.text) == null ? void 0 : p.skipButton) ?? "Skip"
      },
      modalWidth: t.modalWidth ?? 400,
      backdropOpacity: t.backdropOpacity ?? 0.3,
      fontFamily: t.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: t.fontSize ?? 16,
      captureScreenshot: t.captureScreenshot ?? !1,
      screenshotMethod: t.screenshotMethod ?? "permission",
      screenshotOptions: {
        quality: ((f = t.screenshotOptions) == null ? void 0 : f.quality) ?? 0.8,
        maxWidth: ((b = t.screenshotOptions) == null ? void 0 : b.maxWidth) ?? 1280,
        maxHeight: ((g = t.screenshotOptions) == null ? void 0 : g.maxHeight) ?? 800
      },
      incognito: t.incognito ?? !1,
      positiveIcon: t.positiveIcon ?? "",
      negativeIcon: t.negativeIcon ?? "",
      hideThumbs: t.hideThumbs ?? !1,
      css: t.css ?? "",
      captureVideo: t.captureVideo ?? !1,
      videoOptions: {
        maxDuration: ((m = t.videoOptions) == null ? void 0 : m.maxDuration) ?? 15
      },
      recordIcon: t.recordIcon ?? ""
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundMouseMove = this.handleMouseMove.bind(this), this.boundClick = this.handleClick.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Ut(), this.init();
  }
  applyVars(t) {
    ut(t, this.cssVars);
  }
  init() {
    pt(), this.cssVars = ht({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = It((t) => {
      var o;
      this.feedbackData.consoleErrors = ((o = this.consoleCapture) == null ? void 0 : o.errors) ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors;
  }
  checkMobile() {
    this.isMobile = Bt();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let t = null;
    this.config.container && (t = document.querySelector(this.config.container)), t ? (t.appendChild(this.shadowHost), this.isUserProvidedContainer = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const o = document.createElement("style");
    if (o.textContent = A(), this.shadowRoot.appendChild(o), this.config.css) {
      const r = document.createElement("style");
      r.textContent = this.config.css, this.shadowRoot.appendChild(r);
    }
    const i = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${i}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${i}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: r, y: c } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${r}px` : this.buttonsContainer.style.left = `${r}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${c}px` : this.buttonsContainer.style.top = `${c}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer);
    const n = !!this.config.buttonClass, a = n ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", l = this.config.text.tooltip || "Feedback for us?", d = document.createElement("div");
    if (d.className = "qaid-tooltip-text", d.textContent = l, this.applyVars(d), this.shadowRoot.appendChild(d), this.tooltipElement = d, !this.config.hideThumbs) {
      const r = document.createElement("div");
      r.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${a} qaid-btn-up` : "qaid-btn qaid-btn-up", c.innerHTML = this.config.positiveIcon || T, c.addEventListener("click", (f) => this.handleThumbClick("up", f.currentTarget)), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), r.appendChild(c);
      const u = document.createElement("div");
      u.className = "qaid-tooltip-wrapper";
      const p = document.createElement("button");
      p.type = "button", p.className = n ? `${a} qaid-btn-down` : "qaid-btn qaid-btn-down", p.innerHTML = this.config.negativeIcon || I, p.addEventListener("click", (f) => this.handleThumbClick("down", f.currentTarget)), p.addEventListener("mouseenter", () => this.showTooltip(p)), p.addEventListener("mouseleave", () => this.hideTooltip()), u.appendChild(p), this.buttonsContainer.appendChild(r), this.buttonsContainer.appendChild(u);
    }
    if (this.config.captureVideo && Dt()) {
      const r = document.createElement("div");
      r.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${a} qaid-btn-record` : "qaid-btn qaid-btn-record", c.innerHTML = this.config.recordIcon || it, c.addEventListener("click", () => this.startRecording()), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), r.appendChild(c), this.buttonsContainer.appendChild(r);
    }
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
    if (t.textContent = A(), this.overlayShadowRoot.appendChild(t), this.config.css) {
      const o = document.createElement("style");
      o.textContent = this.config.css, this.overlayShadowRoot.appendChild(o);
    }
    return this.overlayShadowRoot;
  }
  showTooltip(t) {
    if (!this.tooltipElement) return;
    const o = this.tooltipElement, i = 8;
    o.style.visibility = "hidden", o.classList.add("qaid-tooltip-visible");
    const n = t.getBoundingClientRect(), a = o.getBoundingClientRect(), s = window.innerWidth, l = window.innerHeight;
    let d, r;
    d = n.bottom + i, d + a.height > l - i && (d = n.top - a.height - i), r = n.left, r < i ? r = i : r + a.width > s - i && (r = s - a.width - i), d < i ? d = i : d + a.height > l - i && (d = l - a.height - i), o.style.top = `${d}px`, o.style.left = `${r}px`, o.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement && this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleThumbClick(t, o) {
    this.config.skipTargeting ? this.submitDirectFeedback(t, o) : this.startTargeting(t);
  }
  submitDirectFeedback(t, o) {
    this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null;
    const i = o.getBoundingClientRect();
    this.selectedBounds = {
      x: i.left,
      y: i.top,
      width: i.width,
      height: i.height,
      clickX: i.left + i.width / 2,
      clickY: i.top + i.height / 2,
      visible: !1
    }, this.submitFeedback();
  }
  startTargeting(t) {
    this.state = "TARGETING", this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), document.addEventListener("keydown", this.boundKeyDown);
  }
  createTargetingOverlay() {
    const t = this.ensureOverlayHost();
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer", this.captureLayer.addEventListener("mousemove", this.boundMouseMove), this.captureLayer.addEventListener("click", this.boundClick);
    const o = document.createElement("div");
    o.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope", this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `, this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(o), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.applyVars(this.overlayContainer), t.appendChild(this.overlayContainer);
  }
  handleKeyDown(t) {
    t.key === "Escape" && (this.isRecording ? this.stopRecording() : this.videoPreview ? this.cancelRecordingPreview() : this.state === "TARGETING" ? this.cancelTargeting() : this.state === "MODAL_OPEN" && this.closeModal());
  }
  handleMouseMove(t) {
    if (this.mousePos.x = t.clientX, this.mousePos.y = t.clientY, this.crosshairH && (this.crosshairH.style.top = `${t.clientY}px`), this.crosshairV && (this.crosshairV.style.left = `${t.clientX}px`), this.scope && (this.scope.style.left = `${t.clientX}px`, this.scope.style.top = `${t.clientY}px`), this.captureLayer && this.shadowHost) {
      const o = [this.shadowHost, this.overlayShadowHost].filter(Boolean), i = $(
        t.clientX,
        t.clientY,
        o
      );
      i && !N(i) ? (this.lastHighlighted && this.lastHighlighted !== i && this.lastHighlighted.classList.remove("qaid-highlight"), i.classList.add("qaid-highlight"), this.lastHighlighted = i) : this.lastHighlighted && (this.lastHighlighted.classList.remove("qaid-highlight"), this.lastHighlighted = null);
    }
  }
  handleClick(t) {
    if (!this.captureLayer || !this.shadowHost) return;
    const o = [this.shadowHost, this.overlayShadowHost].filter(Boolean), i = $(
      t.clientX,
      t.clientY,
      o
    );
    if (!i || N(i))
      return;
    i.classList.remove("qaid-highlight");
    const n = At(i, 8);
    this.selectedBounds = {
      ...n,
      clickX: t.clientX,
      clickY: t.clientY,
      visible: !0
    };
    const { selector: a, text: s } = qt(i);
    this.feedbackData.elementSelector = a, this.feedbackData.elementText = s, L("qaid-highlight"), this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "SELECTED", this.showSelectedMarker(), this.submitFeedback();
  }
  cancelTargeting() {
    L("qaid-highlight"), this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), document.removeEventListener("keydown", this.boundKeyDown), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, this.lastHighlighted = null;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    if (!this.selectedBounds.visible) return;
    const t = this.ensureOverlayHost();
    this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.selectedBounds.x}px`, this.marker.style.top = `${this.selectedBounds.y}px`, this.marker.style.width = `${this.selectedBounds.width}px`, this.marker.style.height = `${this.selectedBounds.height}px`, this.marker.style.zIndex = String(this.config.zIndex + 1), this.applyVars(this.marker), t.appendChild(this.marker);
  }
  hideSelectedMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  async submitFeedback() {
    if (!this.feedbackData.feedbackType) return;
    let t = null;
    this.config.captureScreenshot && (this.config.screenshotMethod === "dom" ? t = await Vt(this.config.screenshotOptions) : t = await Ot(this.config.screenshotOptions));
    const o = this.feedbackData.elementSelector ? {
      x: this.selectedBounds.x,
      y: this.selectedBounds.y,
      width: this.selectedBounds.width,
      height: this.selectedBounds.height
    } : null, i = {
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
      elementBounds: o,
      userAgent: navigator.userAgent
    };
    try {
      const n = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(i)
      });
      if (n.ok) {
        const a = await n.json();
        this.feedbackId = a.id;
      }
    } catch (n) {
      console.error("Failed to submit feedback:", n);
    }
    this.state = "MODAL_OPEN", this.showModal(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto");
  }
  showModal() {
    const t = this.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.closeModal()), this.applyVars(this.backdrop), this.isMobile ? this.showBottomSheet() : this.showPositionedModal(), t.appendChild(this.backdrop), document.addEventListener("keydown", this.boundKeyDown);
  }
  showBottomSheet() {
    const t = this.ensureOverlayHost(), o = document.createElement("div");
    o.className = "qaid-bottom-sheet", o.style.zIndex = String(this.config.zIndex + 3), o.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.applyVars(o), t.appendChild(o), this.modalContainer = o, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.ensureOverlayHost(), { modal: o, arrow: i } = Et(
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
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${o.position}`, this.modalContainer.style.top = `${o.top}px`, this.modalContainer.style.left = `${o.left}px`, this.modalContainer.style.zIndex = String(this.config.zIndex + 3);
    const n = document.createElement("div");
    n.className = "qaid-modal-arrow", n.style.left = `${i.left}px`;
    const a = document.createElement("div");
    a.className = "qaid-modal-box", a.innerHTML = this.getModalContent(), this.modalContainer.appendChild(n), this.modalContainer.appendChild(a), this.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.feedbackData.feedbackType === "up", o = this.config.positiveIcon || T, i = this.config.negativeIcon || I;
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${this.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.config.buttonClass} ${t ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${t ? "qaid-type-up" : "qaid-type-down"}`}" title="Click to switch">
          ${t ? o : i}
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
    const t = this.modalContainer.querySelector(".qaid-textarea"), o = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      o && (o.textContent = t.value.trim() ? this.config.text.submitButton : this.config.text.skipButton);
    })), o && o.addEventListener("click", () => {
      const n = (t == null ? void 0 : t.value.trim()) || null;
      this.submitMessage(n);
    });
    const i = this.modalContainer.querySelector(".qaid-type-toggle");
    i && i.addEventListener("click", () => {
      const n = this.feedbackData.feedbackType === "up" ? "down" : "up";
      this.feedbackData.feedbackType = n, this.config.buttonClass ? (i.classList.toggle("qaid-btn-up", n === "up"), i.classList.toggle("qaid-btn-down", n === "down")) : (i.classList.toggle("qaid-type-up", n === "up"), i.classList.toggle("qaid-type-down", n === "down"));
      const a = this.config.positiveIcon || T, s = this.config.negativeIcon || I;
      i.innerHTML = n === "up" ? a : s, this.feedbackId && fetch(`${this.config.endpoint}/${this.feedbackId}`, {
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
      } catch (o) {
        console.error("Failed to submit feedback message:", o);
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
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.boundKeyDown), this.hideSelectedMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  // ==================== Video Recording ====================
  async startRecording() {
    if (!(this.isRecording || this.state !== "IDLE"))
      try {
        this.networkCapture = Rt(), this.videoRecorder = zt({
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
    const t = this.ensureOverlayHost();
    this.recordingIndicator = document.createElement("div"), this.recordingIndicator.className = "qaid-recording-indicator", this.recordingIndicator.style.zIndex = String(this.config.zIndex + 100);
    const o = document.createElement("div");
    o.className = "qaid-recording-dot";
    const i = document.createElement("span");
    i.className = "qaid-recording-time", i.textContent = this.formatTime(this.config.videoOptions.maxDuration);
    const n = document.createElement("button");
    n.type = "button", n.className = "qaid-recording-stop", n.textContent = "Stop", n.addEventListener("click", () => this.stopRecording()), this.recordingIndicator.appendChild(o), this.recordingIndicator.appendChild(i), this.recordingIndicator.appendChild(n), this.applyVars(this.recordingIndicator), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const o = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (o) {
      const i = Math.max(0, this.config.videoOptions.maxDuration - t);
      o.textContent = this.formatTime(i);
    }
  }
  formatTime(t) {
    const o = Math.floor(t / 60), i = t % 60;
    return `${o}:${i.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    if (!this.recordedBlob) return;
    const t = this.ensureOverlayHost(), o = URL.createObjectURL(this.recordedBlob);
    this.videoPreview = document.createElement("div"), this.videoPreview.className = "qaid-video-preview", this.videoPreview.style.zIndex = String(this.config.zIndex + 100);
    const i = document.createElement("div");
    i.className = "qaid-video-preview-box";
    const n = document.createElement("h3");
    n.textContent = "Review your recording";
    const a = document.createElement("video");
    a.src = o, a.controls = !0, a.autoplay = !0, a.muted = !0;
    const s = document.createElement("textarea");
    s.placeholder = "Optional: Describe the issue you recorded...";
    const l = document.createElement("div");
    l.className = "qaid-video-preview-actions";
    const d = document.createElement("button");
    d.type = "button", d.className = "qaid-video-btn qaid-video-btn-cancel", d.textContent = "Cancel", d.addEventListener("click", () => this.cancelRecordingPreview());
    const r = document.createElement("button");
    r.type = "button", r.className = "qaid-video-btn qaid-video-btn-rerecord", r.textContent = "Re-record", r.addEventListener("click", () => {
      this.cancelRecordingPreview(), this.startRecording();
    });
    const c = document.createElement("button");
    c.type = "button", c.className = "qaid-video-btn qaid-video-btn-send", c.textContent = "Send", c.addEventListener("click", () => {
      const u = s.value.trim() || null;
      this.submitVideoFeedback(u, c);
    }), l.appendChild(d), l.appendChild(r), l.appendChild(c), i.appendChild(n), i.appendChild(a), i.appendChild(s), i.appendChild(l), this.videoPreview.appendChild(i), this.applyVars(this.videoPreview), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), document.addEventListener("keydown", this.boundKeyDown);
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
  async submitVideoFeedback(t, o) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, o.disabled = !0, o.textContent = "Sending...";
    const i = new FormData();
    i.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), i.append("pageUrl", window.location.href), i.append("visitorId", this.visitorId), this.config.apiKey && i.append("apiKey", this.config.apiKey), t && i.append("message", t), this.consoleCapture && i.append("consoleErrors", JSON.stringify(this.consoleCapture.errors)), this.networkCapture && i.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    try {
      const n = await fetch(`${this.config.endpoint}/video`, {
        method: "POST",
        body: i
      });
      n.ok || console.error("Failed to submit video feedback:", await n.text());
    } catch (n) {
      console.error("Failed to submit video feedback:", n);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording();
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.setButtonsDisabled(!1), this.overlayShadowHost && this.state === "IDLE" && (this.overlayShadowHost.style.pointerEvents = "none");
  }
  setButtonsDisabled(t) {
    if (!this.buttonsContainer) return;
    this.buttonsContainer.querySelectorAll("button.qaid-btn, button.qaid-btn-structural").forEach((i) => {
      t ? i.classList.contains("qaid-btn-record") || (i.disabled = !0, i.style.opacity = "0.5") : (i.disabled = !1, i.style.opacity = "");
    });
  }
  /**
   * Destroy the embed and clean up all resources
   */
  destroy() {
    this.cleanupRecording(), this.removeVideoPreview(), this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), L("qaid-highlight"), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.overlayContainer = null, this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null, this.marker = null, this.modalContainer = null, this.backdrop = null, this.tooltipElement = null, mt();
  }
}
function _(e) {
  var o;
  const t = document.querySelector(e);
  return ((o = t == null ? void 0 : t.textContent) == null ? void 0 : o.trim()) ?? "";
}
function Wt() {
  var o;
  const e = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!e) return null;
  const t = (o = e.textContent) == null ? void 0 : o.trim();
  if (!t) return null;
  try {
    const i = JSON.parse(t);
    return i.cssSelector && !i.css && (i.css = _(i.cssSelector), delete i.cssSelector), i;
  } catch {
    return null;
  }
}
function _t(e) {
  const t = e.getAttribute("data-endpoint");
  if (!t) return null;
  const o = e.getAttribute("data-position"), i = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), a = e.getAttribute("data-negative-color"), s = e.getAttribute("data-marker-color"), l = e.getAttribute("data-container"), d = e.getAttribute("data-button-class"), r = e.getAttribute("data-skip-targeting"), c = e.getAttribute("data-incognito"), u = e.getAttribute("data-button-size"), p = e.getAttribute("data-offset-x"), f = e.getAttribute("data-offset-y"), b = e.getAttribute("data-modal-width"), g = e.getAttribute("data-backdrop-opacity"), m = e.getAttribute("data-font-family"), v = e.getAttribute("data-font-size"), y = e.getAttribute("data-tooltip"), x = e.getAttribute("data-modal-title"), H = e.getAttribute("data-modal-subtitle"), R = e.getAttribute("data-placeholder"), D = e.getAttribute("data-submit-button"), M = e.getAttribute("data-skip-button"), X = e.getAttribute("data-positive-icon"), j = e.getAttribute("data-negative-icon"), K = e.getAttribute("data-api-key"), Y = e.getAttribute("data-capture-screenshot"), C = e.getAttribute("data-screenshot-quality"), S = e.getAttribute("data-screenshot-max-width"), E = e.getAttribute("data-screenshot-max-height"), J = e.getAttribute("data-capture-video"), G = e.getAttribute("data-hide-thumbs"), z = e.getAttribute("data-video-max-duration"), Z = e.getAttribute("data-screenshot-method"), Q = e.getAttribute("data-direction"), B = e.getAttribute("data-css-selector");
  return {
    endpoint: t,
    css: B ? _(B) : void 0,
    apiKey: K ?? void 0,
    captureScreenshot: Y === "true" ? !0 : void 0,
    screenshotOptions: C || S || E ? {
      quality: C ? parseFloat(C) : void 0,
      maxWidth: S ? parseInt(S, 10) : void 0,
      maxHeight: E ? parseInt(E, 10) : void 0
    } : void 0,
    container: l ?? void 0,
    buttonClass: d ?? void 0,
    direction: Q ?? void 0,
    position: o ?? void 0,
    zIndex: i ? parseInt(i, 10) : void 0,
    skipTargeting: r === "true" ? !0 : void 0,
    incognito: c === "true" ? !0 : void 0,
    buttonSize: u ?? void 0,
    offset: p || f ? {
      x: p ? parseInt(p, 10) : void 0,
      y: f ? parseInt(f, 10) : void 0
    } : void 0,
    modalWidth: b ? parseInt(b, 10) : void 0,
    backdropOpacity: g ? parseFloat(g) : void 0,
    fontFamily: m ?? void 0,
    fontSize: v ? parseInt(v, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: a ?? void 0,
      marker: s ?? void 0
    },
    text: y || x || H || R || D || M ? {
      tooltip: y ?? void 0,
      modalTitle: x ?? void 0,
      modalSubtitle: H ?? void 0,
      placeholder: R ?? void 0,
      submitButton: D ?? void 0,
      skipButton: M ?? void 0
    } : void 0,
    positiveIcon: X ?? void 0,
    negativeIcon: j ?? void 0,
    screenshotMethod: Z ?? void 0,
    captureVideo: J === "true" ? !0 : void 0,
    hideThumbs: G === "true" ? !0 : void 0,
    videoOptions: z ? {
      maxDuration: parseInt(z, 10)
    } : void 0
  };
}
if (typeof document < "u") {
  const e = () => {
    const t = document.currentScript, o = Wt(), i = t ? _t(t) : null, n = o ?? i;
    n != null && n.endpoint && new Ft(n);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  Ft as QaidFeedback,
  Vt as captureDomScreenshot,
  Rt as captureNetworkErrors,
  zt as createVideoRecorder,
  Mt as getSupportedMimeType,
  jt as isDomScreenshotSupported,
  Dt as isVideoRecordingSupported
};
//# sourceMappingURL=qaid.js.map
