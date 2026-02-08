const E = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, T = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, Z = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, Q = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}", tt = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let w = 0;
const et = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", it = {
  small: 36,
  medium: 48,
  large: 64
}, ot = {
  small: 18,
  medium: 24,
  large: 32
};
function nt(e, t, i) {
  const [o, n, a] = [e, t, i].map((r) => (r = r / 255, r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)));
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
function st(e) {
  const t = at(e);
  return t && nt(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function rt(e = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: i = "rgb(255, 0, 0)",
    markerColor: o = "#6366f1",
    buttonSize: n = "medium",
    modalWidth: a = 400,
    backdropOpacity: r = 0.3,
    fontFamily: l = "system-ui, -apple-system, sans-serif",
    fontSize: d = 16
  } = e, s = it[n], c = ot[n], h = st(o);
  return {
    "--qaid-positive": t,
    "--qaid-negative": i,
    "--qaid-marker": o,
    "--qaid-marker-text": h,
    "--qaid-btn-size": `${s}px`,
    "--qaid-icon-size": `${c}px`,
    "--qaid-modal-width": `${a}px`,
    "--qaid-backdrop-opacity": String(r),
    "--qaid-font-family": l,
    "--qaid-font-size": `${d}px`
  };
}
function dt(e, t) {
  for (const [i, o] of Object.entries(t))
    e.style.setProperty(i, o);
}
function z() {
  return Q + et;
}
function ct() {
  if (w++, w > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = tt, document.head.appendChild(e);
}
function lt() {
  if (!(w <= 0) && (w--, w === 0)) {
    const e = document.getElementById("qaid-styles");
    e && e.remove();
  }
}
const ht = ["data-comp", "data-qa", "data-testid", "data-id"];
function V(e, t = document.body) {
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
  const i = e.textContent?.trim().slice(0, t) || "";
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
  const t = V(e);
  return t ? `[${t}]` : e.id ? `#${ft(e.id)}` : mt(e);
}
function bt(e) {
  const t = ut(e), i = V(e);
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
  const a = e.y, r = t - (e.y + e.height);
  if (r >= i + o)
    return {
      top: e.y + e.height + o,
      position: "below"
    };
  if (a >= i + o)
    return {
      top: e.y - i - o,
      position: "above"
    };
  const l = r > a ? "below" : "above";
  let d;
  return l === "below" ? d = Math.min(
    e.y + e.height + o,
    t - i - n
  ) : d = Math.max(n, e.y - i - o), { top: d, position: l };
}
function yt(e, t, i, o) {
  let a = e.x + e.width / 2 - i / 2;
  return a = Math.max(o, Math.min(a, t - i - o)), a;
}
function wt(e, t, i, o = 24, n = 24) {
  const r = e.clickX - t - n / 2;
  return Math.max(o, Math.min(r, i - o - n / 2));
}
function xt(e, t, i, o = U) {
  const n = o.height + o.arrowHeight, a = vt(
    e,
    i,
    n,
    o.gap,
    o.viewportPadding
  ), r = yt(
    e,
    t,
    o.width,
    o.viewportPadding
  );
  return {
    top: a.top,
    left: r,
    position: a.position
  };
}
function qt(e, t, i, o = U) {
  const n = xt(e, t, i, o), a = wt(
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
  const t = [], i = console.error, o = console.warn, n = console.log, a = (r, l) => {
    const d = {
      message: l.map((s) => String(s)).join(" "),
      timestamp: Date.now(),
      level: r
    };
    t.length >= kt && t.shift(), t.push(d), e && e(d);
  };
  return console.error = function(...r) {
    a("error", r), i.apply(console, r);
  }, console.warn = function(...r) {
    a("warn", r), o.apply(console, r);
  }, console.log = function(...r) {
    a("log", r), n.apply(console, r);
  }, {
    errors: t,
    restore: () => {
      console.error = i, console.warn = o, console.log = n;
    }
  };
}
const St = 20, B = 4096;
function q(e) {
  if (e == null) return;
  const t = typeof e == "string" ? e : JSON.stringify(e);
  return t.length > B ? t.slice(0, B) + "…[truncated]" : t;
}
function P(e, t) {
  e.length >= St && e.shift(), e.push(t);
}
async function Et(e) {
  try {
    const t = await e.clone().text();
    return q(t);
  } catch {
    return;
  }
}
function Tt() {
  const e = [], t = window.fetch;
  window.fetch = async function(n, a) {
    const r = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, l = a?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET");
    let d;
    a?.body && (d = q(a.body));
    const s = await t.apply(window, [n, a]);
    if (s.status >= 400) {
      const c = await Et(s);
      P(e, {
        url: r,
        method: l.toUpperCase(),
        status: s.status,
        statusText: s.statusText,
        requestBody: d,
        responseBody: c,
        timestamp: Date.now()
      });
    }
    return s;
  };
  const i = XMLHttpRequest.prototype.open, o = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, a, ...r) {
    return this._qaid_method = n, this._qaid_url = typeof a == "string" ? a : a.toString(), i.apply(this, [n, a, ...r]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const a = this, r = n ? q(n) : void 0;
    return a.addEventListener("load", function() {
      a.status >= 400 && P(e, {
        url: a._qaid_url,
        method: a._qaid_method.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        requestBody: r,
        responseBody: q(a.responseText),
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
function Rt(e = {}) {
  const t = e.maxDuration ?? 15, i = e.videoBitsPerSecond ?? 8e5;
  let o = null, n = null, a = [], r = null, l = null, d = null, s = 0, c = null, h = null, u = !1, p = null;
  function b() {
    d !== null && (clearInterval(d), d = null), p !== null && (clearTimeout(p), p = null), o && (o.getTracks().forEach((m) => m.stop()), o = null), n = null, a = [], r = null, l = null, c = null, h = null;
  }
  function f() {
    u || (u = !0, n && n.state !== "inactive" && n.stop());
  }
  return {
    async start() {
      u = !1, a = [];
      const m = Lt();
      if (!m)
        throw new Error("No supported video MIME type found");
      o = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0
      });
      const v = o.getVideoTracks()[0];
      v && v.addEventListener("ended", () => {
        f();
      }), n = new MediaRecorder(o, {
        mimeType: m,
        videoBitsPerSecond: i
      }), n.ondataavailable = (g) => {
        g.data.size > 0 && a.push(g.data);
      }, n.onstop = () => {
        const g = new Blob(a, { type: m });
        c && c(g), l && l(g), o && o.getTracks().forEach((x) => x.stop());
      }, n.onerror = () => {
        h && h(new Error("MediaRecorder error"));
      }, n.start(1e3), s = Date.now(), d = setInterval(() => {
        const g = Math.floor((Date.now() - s) / 1e3);
        r && r(g);
      }, 1e3), p = setTimeout(() => {
        f();
      }, t * 1e3);
    },
    stop() {
      return new Promise((m, v) => {
        c = m, h = v, f();
      });
    },
    onTick(m) {
      r = m;
    },
    onStop(m) {
      l = m;
    },
    destroy() {
      f(), b();
    }
  };
}
function Mt(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function A(e, t, i) {
  const o = i.map((a) => a.style.visibility);
  i.forEach((a) => a.style.visibility = "hidden");
  const n = document.elementFromPoint(e, t);
  return i.forEach((a, r) => a.style.visibility = o[r]), n;
}
function O(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function Dt(e, t = 0) {
  const i = e.getBoundingClientRect();
  return {
    x: i.left - t,
    y: i.top - t,
    width: i.width + t * 2,
    height: i.height + t * 2
  };
}
async function Ht(e = {}) {
  const { quality: t = 1, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!navigator.mediaDevices?.getDisplayMedia)
      return console.warn("Screen Capture API not available"), null;
    const n = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), a = n.getVideoTracks()[0], r = a.getSettings(), l = document.createElement("video");
    l.srcObject = n, l.muted = !0, await new Promise((f) => {
      l.onloadedmetadata = () => {
        l.play(), f();
      };
    }), await new Promise((f) => {
      const m = () => {
        l.readyState >= 2 ? f() : requestAnimationFrame(m);
      };
      m();
    }), await new Promise((f) => setTimeout(f, 100));
    const d = r.width || l.videoWidth, s = r.height || l.videoHeight, c = Math.min(i / d, o / s, 1), h = Math.round(d * c), u = Math.round(s * c), p = document.createElement("canvas");
    p.width = h, p.height = u;
    const b = p.getContext("2d");
    return b ? (b.drawImage(l, 0, 0, h, u), a.stop(), p.toDataURL("image/webp", t)) : (a.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const $ = "https://qaid.dev/lib/html2canvas.min.js", zt = 1e4, Bt = 50;
let y = null;
function Ut() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function Pt() {
  return window.html2canvas ? Promise.resolve(!0) : y || (y = new Promise((e) => {
    if (!document.querySelector(
      `script[src="${$}"]`
    )) {
      const n = document.createElement("script");
      n.src = $, n.async = !0, document.head.appendChild(n);
    }
    const i = Date.now(), o = () => {
      if (window.html2canvas) {
        e(!0);
        return;
      }
      if (Date.now() - i > zt) {
        y = null, e(!1);
        return;
      }
      setTimeout(o, Bt);
    };
    o();
  }), y);
}
async function At(e = {}) {
  const { quality: t = 0.8, maxWidth: i = 1280, maxHeight: o = 800 } = e;
  try {
    if (!await Pt() || !window.html2canvas)
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
      ignoreElements: (s) => s instanceof HTMLElement ? s.classList.contains("qaid-buttons") || s.classList.contains("qaid-targeting-overlay") || s.classList.contains("qaid-modal-container") || s.classList.contains("qaid-bottom-sheet") || s.classList.contains("qaid-backdrop") || s.classList.contains("qaid-selected-marker") || s.classList.contains("qaid-tooltip-text") || s.classList.contains("qaid-recording-indicator") || s.classList.contains("qaid-video-preview") || s.className?.toString().startsWith?.("qaid-") : !1
    }), r = a.width, l = a.height, d = Math.min(i / r, o / l, 1);
    if (d < 1) {
      const s = Math.round(r * d), c = Math.round(l * d), h = document.createElement("canvas");
      h.width = s, h.height = c;
      const u = h.getContext("2d");
      return u ? (u.drawImage(a, 0, 0, s, c), h.toDataURL("image/webp", t)) : null;
    }
    return a.toDataURL("image/webp", t);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const N = "qaid_visitor_id";
function Ot() {
  try {
    let e = localStorage.getItem(N);
    return e || (e = crypto.randomUUID(), localStorage.setItem(N, e)), e;
  } catch {
    return crypto.randomUUID();
  }
}
class $t {
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
  // Per-instance CSS variables
  cssVars = {};
  // Bound event handlers
  boundKeyDown;
  boundMouseMove;
  boundClick;
  boundResize;
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
        skipButton: t.text?.skipButton ?? "Skip"
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
      positiveIcon: t.positiveIcon ?? "",
      negativeIcon: t.negativeIcon ?? "",
      hideThumbs: t.hideThumbs ?? !1,
      css: t.css ?? "",
      captureVideo: t.captureVideo ?? !1,
      videoOptions: {
        maxDuration: t.videoOptions?.maxDuration ?? 15
      },
      recordIcon: t.recordIcon ?? ""
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundMouseMove = this.handleMouseMove.bind(this), this.boundClick = this.handleClick.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Ot(), this.init();
  }
  applyVars(t) {
    dt(t, this.cssVars);
  }
  init() {
    ct(), this.cssVars = rt({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = Ct((t) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors;
  }
  checkMobile() {
    this.isMobile = Mt();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let t = null;
    this.config.container && (t = document.querySelector(this.config.container)), t ? (t.appendChild(this.shadowHost), this.isUserProvidedContainer = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const i = document.createElement("style");
    if (i.textContent = z(), this.shadowRoot.appendChild(i), this.config.css) {
      const s = document.createElement("style");
      s.textContent = this.config.css, this.shadowRoot.appendChild(s);
    }
    const o = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${o}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${o}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: s, y: c } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${s}px` : this.buttonsContainer.style.left = `${s}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${c}px` : this.buttonsContainer.style.top = `${c}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer);
    const n = !!this.config.buttonClass, a = n ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", l = this.config.text.tooltip || "Feedback for us?", d = document.createElement("div");
    if (d.className = "qaid-tooltip-text", d.textContent = l, this.applyVars(d), this.shadowRoot.appendChild(d), this.tooltipElement = d, !this.config.hideThumbs) {
      const s = document.createElement("div");
      s.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${a} qaid-btn-up` : "qaid-btn qaid-btn-up", c.innerHTML = this.config.positiveIcon || E, c.addEventListener("click", (p) => this.handleThumbClick("up", p.currentTarget, p)), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), s.appendChild(c);
      const h = document.createElement("div");
      h.className = "qaid-tooltip-wrapper";
      const u = document.createElement("button");
      u.type = "button", u.className = n ? `${a} qaid-btn-down` : "qaid-btn qaid-btn-down", u.innerHTML = this.config.negativeIcon || T, u.addEventListener("click", (p) => this.handleThumbClick("down", p.currentTarget, p)), u.addEventListener("mouseenter", () => this.showTooltip(u)), u.addEventListener("mouseleave", () => this.hideTooltip()), h.appendChild(u), this.buttonsContainer.appendChild(s), this.buttonsContainer.appendChild(h);
    }
    if (this.config.captureVideo && It()) {
      const s = document.createElement("div");
      s.className = "qaid-tooltip-wrapper";
      const c = document.createElement("button");
      c.type = "button", c.className = n ? `${a} qaid-btn-record` : "qaid-btn qaid-btn-record", c.innerHTML = this.config.recordIcon || Z, c.addEventListener("click", () => this.startRecording()), c.addEventListener("mouseenter", () => this.showTooltip(c)), c.addEventListener("mouseleave", () => this.hideTooltip()), s.appendChild(c), this.buttonsContainer.appendChild(s);
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
    if (t.textContent = z(), this.overlayShadowRoot.appendChild(t), this.config.css) {
      const i = document.createElement("style");
      i.textContent = this.config.css, this.overlayShadowRoot.appendChild(i);
    }
    return this.overlayShadowRoot;
  }
  tooltipElement = null;
  showTooltip(t) {
    if (!this.tooltipElement) return;
    const i = this.tooltipElement, o = 8;
    i.style.visibility = "hidden", i.classList.add("qaid-tooltip-visible");
    const n = t.getBoundingClientRect(), a = i.getBoundingClientRect(), r = window.innerWidth, l = window.innerHeight;
    let d, s;
    d = n.bottom + o, d + a.height > l - o && (d = n.top - a.height - o), s = n.left, s < o ? s = o : s + a.width > r - o && (s = r - a.width - o), d < o ? d = o : d + a.height > l - o && (d = l - a.height - o), i.style.top = `${d}px`, i.style.left = `${s}px`, i.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement && this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleThumbClick(t, i, o) {
    this.config.skipTargeting ? this.submitDirectFeedback(t, i) : this.startTargeting(t, o);
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
    this.state = "TARGETING", this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1, this.mousePos.x = i.clientX, this.mousePos.y = i.clientY, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.boundKeyDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("click", this.boundClick, !0);
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
    if (this.mousePos.x = t.clientX, this.mousePos.y = t.clientY, this.crosshairH && (this.crosshairH.style.top = `${t.clientY}px`), this.crosshairV && (this.crosshairV.style.left = `${t.clientX}px`), this.scope && (this.scope.style.left = `${t.clientX}px`, this.scope.style.top = `${t.clientY}px`), this.captureLayer && this.shadowHost) {
      const i = [this.shadowHost, this.overlayShadowHost].filter(Boolean), o = A(
        t.clientX,
        t.clientY,
        i
      );
      if (o && !O(o)) {
        if (this.highlightBox) {
          const n = o.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${n.left}px, ${n.top}px)`, this.highlightBox.style.width = `${n.width}px`, this.highlightBox.style.height = `${n.height}px`, this.highlightBox.style.display = "block";
        }
      } else
        this.highlightBox && (this.highlightBox.style.display = "none");
    }
  }
  handleClick(t) {
    if (this.state !== "TARGETING" || !this.shadowHost) return;
    t.preventDefault(), t.stopPropagation();
    const i = [this.shadowHost, this.overlayShadowHost].filter(Boolean), o = A(
      t.clientX,
      t.clientY,
      i
    );
    if (!o || O(o))
      return;
    const n = Dt(o, 8);
    this.selectedBounds = {
      ...n,
      clickX: t.clientX,
      clickY: t.clientY,
      visible: !0
    };
    const { selector: a, text: r } = bt(o);
    this.feedbackData.elementSelector = a, this.feedbackData.elementText = r, this.removeTargetingOverlay(), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.state = "SELECTED", this.showSelectedMarker(), this.submitFeedback();
  }
  cancelTargeting() {
    this.removeTargetingOverlay(), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.state = "IDLE", this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
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
    this.config.captureScreenshot && (this.config.screenshotMethod === "dom" ? t = await At(this.config.screenshotOptions) : t = await Ht(this.config.screenshotOptions));
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
    this.state = "MODAL_OPEN", this.showModal(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto");
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
    const t = this.ensureOverlayHost(), { modal: i, arrow: o } = qt(
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
    const a = document.createElement("div");
    a.className = "qaid-modal-box", a.innerHTML = this.getModalContent(), this.modalContainer.appendChild(n), this.modalContainer.appendChild(a), this.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.feedbackData.feedbackType === "up", i = this.config.positiveIcon || E, o = this.config.negativeIcon || T;
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
      const n = t?.value.trim() || null;
      this.submitMessage(n);
    });
    const o = this.modalContainer.querySelector(".qaid-type-toggle");
    o && o.addEventListener("click", () => {
      const n = this.feedbackData.feedbackType === "up" ? "down" : "up";
      this.feedbackData.feedbackType = n, this.config.buttonClass ? (o.classList.toggle("qaid-btn-up", n === "up"), o.classList.toggle("qaid-btn-down", n === "down")) : (o.classList.toggle("qaid-type-up", n === "up"), o.classList.toggle("qaid-type-down", n === "down"));
      const a = this.config.positiveIcon || E, r = this.config.negativeIcon || T;
      o.innerHTML = n === "up" ? a : r, this.feedbackId && fetch(`${this.config.endpoint}/${this.feedbackId}`, {
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
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.boundKeyDown), this.hideSelectedMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  // ==================== Video Recording ====================
  async startRecording() {
    if (!(this.isRecording || this.state !== "IDLE"))
      try {
        this.networkCapture = Tt(), this.videoRecorder = Rt({
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
    const t = this.ensureOverlayHost(), i = URL.createObjectURL(this.recordedBlob);
    this.videoPreview = document.createElement("div"), this.videoPreview.className = "qaid-video-preview", this.videoPreview.style.zIndex = String(this.config.zIndex + 100);
    const o = document.createElement("div");
    o.className = "qaid-video-preview-box";
    const n = document.createElement("h3");
    n.textContent = "Review your recording";
    const a = document.createElement("video");
    a.src = i, a.controls = !0, a.autoplay = !0, a.muted = !0;
    const r = document.createElement("textarea");
    r.placeholder = "Optional: Describe the issue you recorded...";
    const l = document.createElement("div");
    l.className = "qaid-video-preview-actions";
    const d = document.createElement("button");
    d.type = "button", d.className = "qaid-video-btn qaid-video-btn-cancel", d.textContent = "Cancel", d.addEventListener("click", () => this.cancelRecordingPreview());
    const s = document.createElement("button");
    s.type = "button", s.className = "qaid-video-btn qaid-video-btn-rerecord", s.textContent = "Re-record", s.addEventListener("click", () => {
      this.cancelRecordingPreview(), this.startRecording();
    });
    const c = document.createElement("button");
    c.type = "button", c.className = "qaid-video-btn qaid-video-btn-send", c.textContent = "Send", c.addEventListener("click", () => {
      const h = r.value.trim() || null;
      this.submitVideoFeedback(h, c);
    }), l.appendChild(d), l.appendChild(s), l.appendChild(c), o.appendChild(n), o.appendChild(a), o.appendChild(r), o.appendChild(l), this.videoPreview.appendChild(o), this.applyVars(this.videoPreview), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), document.addEventListener("keydown", this.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.videoPreview) {
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
    this.cleanupRecording(), this.removeVideoPreview(), this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.overlayContainer = null, this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null, this.marker = null, this.modalContainer = null, this.backdrop = null, this.tooltipElement = null, lt();
  }
}
function _(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
function Nt() {
  const e = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!e) return null;
  const t = e.textContent?.trim();
  if (!t) return null;
  try {
    const i = JSON.parse(t);
    return i.cssSelector && !i.css && (i.css = _(i.cssSelector), delete i.cssSelector), i;
  } catch {
    return null;
  }
}
function Vt(e) {
  const t = e.getAttribute("data-endpoint");
  if (!t) return null;
  const i = e.getAttribute("data-position"), o = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), a = e.getAttribute("data-negative-color"), r = e.getAttribute("data-marker-color"), l = e.getAttribute("data-container"), d = e.getAttribute("data-button-class"), s = e.getAttribute("data-skip-targeting"), c = e.getAttribute("data-incognito"), h = e.getAttribute("data-button-size"), u = e.getAttribute("data-offset-x"), p = e.getAttribute("data-offset-y"), b = e.getAttribute("data-modal-width"), f = e.getAttribute("data-backdrop-opacity"), m = e.getAttribute("data-font-family"), v = e.getAttribute("data-font-size"), g = e.getAttribute("data-tooltip"), x = e.getAttribute("data-modal-title"), I = e.getAttribute("data-modal-subtitle"), L = e.getAttribute("data-placeholder"), R = e.getAttribute("data-submit-button"), M = e.getAttribute("data-skip-button"), F = e.getAttribute("data-positive-icon"), W = e.getAttribute("data-negative-icon"), X = e.getAttribute("data-api-key"), j = e.getAttribute("data-capture-screenshot"), k = e.getAttribute("data-screenshot-quality"), C = e.getAttribute("data-screenshot-max-width"), S = e.getAttribute("data-screenshot-max-height"), K = e.getAttribute("data-capture-video"), Y = e.getAttribute("data-hide-thumbs"), D = e.getAttribute("data-video-max-duration"), J = e.getAttribute("data-screenshot-method"), G = e.getAttribute("data-direction"), H = e.getAttribute("data-css-selector");
  return {
    endpoint: t,
    css: H ? _(H) : void 0,
    apiKey: X ?? void 0,
    captureScreenshot: j === "true" ? !0 : void 0,
    screenshotOptions: k || C || S ? {
      quality: k ? parseFloat(k) : void 0,
      maxWidth: C ? parseInt(C, 10) : void 0,
      maxHeight: S ? parseInt(S, 10) : void 0
    } : void 0,
    container: l ?? void 0,
    buttonClass: d ?? void 0,
    direction: G ?? void 0,
    position: i ?? void 0,
    zIndex: o ? parseInt(o, 10) : void 0,
    skipTargeting: s === "true" ? !0 : void 0,
    incognito: c === "true" ? !0 : void 0,
    buttonSize: h ?? void 0,
    offset: u || p ? {
      x: u ? parseInt(u, 10) : void 0,
      y: p ? parseInt(p, 10) : void 0
    } : void 0,
    modalWidth: b ? parseInt(b, 10) : void 0,
    backdropOpacity: f ? parseFloat(f) : void 0,
    fontFamily: m ?? void 0,
    fontSize: v ? parseInt(v, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: a ?? void 0,
      marker: r ?? void 0
    },
    text: g || x || I || L || R || M ? {
      tooltip: g ?? void 0,
      modalTitle: x ?? void 0,
      modalSubtitle: I ?? void 0,
      placeholder: L ?? void 0,
      submitButton: R ?? void 0,
      skipButton: M ?? void 0
    } : void 0,
    positiveIcon: F ?? void 0,
    negativeIcon: W ?? void 0,
    screenshotMethod: J ?? void 0,
    captureVideo: K === "true" ? !0 : void 0,
    hideThumbs: Y === "true" ? !0 : void 0,
    videoOptions: D ? {
      maxDuration: parseInt(D, 10)
    } : void 0
  };
}
if (typeof document < "u") {
  const e = () => {
    const t = document.currentScript, i = Nt(), o = t ? Vt(t) : null, n = i ?? o;
    n?.endpoint && new $t(n);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  $t as QaidFeedback,
  At as captureDomScreenshot,
  Tt as captureNetworkErrors,
  Rt as createVideoRecorder,
  Lt as getSupportedMimeType,
  Ut as isDomScreenshotSupported,
  It as isVideoRecordingSupported
};
//# sourceMappingURL=qaid.js.map
