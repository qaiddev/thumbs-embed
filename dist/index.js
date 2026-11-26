const Jr = /QAID_SECRET_[0-9A-Za-z]{16,}/g;
const Wr = /* @__PURE__ */ new Set();
function Oo(e) {
  if (e === null || typeof e != "object") return !1;
  const A = Object.getPrototypeOf(e);
  return A === Object.prototype || A === null;
}
function Ro(e) {
  const A = /* @__PURE__ */ new Set(), t = (n, i) => {
    if (typeof n == "string") {
      const s = n.match(Jr);
      if (!s) return n;
      for (const o of s) A.add(o);
      return n.replace(Jr, "").trim();
    }
    if (i >= 6) return n;
    if (Array.isArray(n)) return n.map((s) => t(s, i + 1));
    if (Oo(n)) {
      const s = {};
      for (const [o, a] of Object.entries(n)) s[o] = t(a, i + 1);
      return s;
    }
    return n;
  }, r = t(e, 0);
  return A.size === 0 ? { value: e, found: [] } : { value: r, found: [...A] };
}
function qo(e) {
  if (!e) return null;
  try {
    const A = typeof location < "u" ? location.href : void 0;
    return new URL("/api/leaked-key", new URL(e, A)).href;
  } catch {
    return null;
  }
}
async function No(e) {
  try {
    const A = globalThis.crypto?.subtle;
    if (!A) return null;
    const t = await A.digest("SHA-256", new TextEncoder().encode(e));
    return Array.from(new Uint8Array(t), (r) => r.toString(16).padStart(2, "0")).join("");
  } catch {
    return null;
  }
}
const Vo = "[qaid] A secret platform API key (QAID_SECRET_…) is in this embed's config. Anyone who opens this page can read it, and it can read and change your project's data. The embed ignored it, and qaid revoked it and emailed the project owner. Make a new platform key, keep it on your server, and use the embed key (QAID_PUB_…) here.";
function Go(e, A, t) {
  if (e.length === 0) return;
  try {
    console.error(Vo);
  } catch {
  }
  const r = qo(A);
  if (!r || typeof fetch != "function") return;
  const n = typeof location < "u" ? location.href : void 0;
  for (const i of e)
    Wr.has(i) || (Wr.add(i), No(i).then((s) => {
      const o = JSON.stringify(s ? { keyHash: s, pageUrl: n, source: t } : { key: i, pageUrl: n, source: t });
      return fetch(r, {
        method: "POST",
        // text/plain keeps this a simple request: no preflight.
        headers: { "Content-Type": "text/plain" },
        body: o,
        keepalive: !0,
        credentials: "omit"
      });
    }).catch(() => {
    }));
}
function Po(e, A) {
  try {
    const { value: t, found: r } = Ro(e);
    return Go(r, e.endpoint, A), t;
  } catch {
    return e;
  }
}
const nr = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, ir = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, _o = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, Ii = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8M8 14h5m-9 6l3.5-3.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"/>
</svg>`, Xo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>
</svg>`, Jo = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', Wo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, Yo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, xi = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, Zo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, zo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, Li = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, jo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v8m0 4h.01"/>
</svg>`, $o = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`, Aa = "http://www.w3.org/2000/svg", Si = {};
for (const e of [
  "svg",
  "g",
  "path",
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
  "title",
  "desc",
  "defs",
  "linearGradient",
  "radialGradient",
  "stop",
  "clipPath"
])
  Si[e.toLowerCase()] = e;
const Ki = {};
for (const e of [
  "viewBox",
  "width",
  "height",
  "preserveAspectRatio",
  "version",
  "fill",
  "fill-rule",
  "fill-opacity",
  "stroke",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-opacity",
  "clip-rule",
  "clip-path",
  "clipPathUnits",
  "opacity",
  "vector-effect",
  "shape-rendering",
  "d",
  "points",
  "x",
  "y",
  "x1",
  "y1",
  "x2",
  "y2",
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "fx",
  "fy",
  "transform",
  "class",
  "id",
  "offset",
  "stop-color",
  "stop-opacity",
  "gradientUnits",
  "gradientTransform",
  "spreadMethod",
  "aria-hidden",
  "aria-label",
  "focusable",
  "role"
])
  Ki[e.toLowerCase()] = e;
const ea = /* @__PURE__ */ new Set(["title", "desc"]), Yr = 5e4, ta = 1e3, ra = {
  lt: "<",
  gt: ">",
  amp: "&",
  quot: '"',
  apos: "'",
  nbsp: " "
};
function Zr(e) {
  return e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (A, t) => {
    if (t[0] === "#") {
      const r = t[1] === "x" || t[1] === "X" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
      return r > 0 && r <= 1114111 ? String.fromCodePoint(r) : "";
    }
    return ra[t.toLowerCase()] ?? A;
  });
}
const zr = /url\(\s*(['"]?)#[A-Za-z_][\w.:-]*\1\s*\)/gi;
function na(e, A) {
  const t = A.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase();
  if (/(java|vb)script:|data:|expression\(/.test(t)) return !1;
  const r = A.replace(zr, "");
  return /url\(/.test(r.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase()) ? !1 : e === "clip-path" ? /^\s*none\s*$/i.test(A) || new RegExp(`^\\s*${zr.source}\\s*$`, "i").test(A) : !0;
}
function jr(e) {
  if (typeof e != "string" || typeof document > "u") return null;
  const A = e.trim();
  if (!A || A.length > Yr) return null;
  let t = null, r = !1, n = 0;
  const i = [];
  let s = 0;
  const o = () => i[i.length - 1];
  for (; s < A.length && !r; ) {
    const a = A.indexOf("<", s), l = a === -1 ? A.length : a;
    if (l > s) {
      const p = A.slice(s, l), C = o();
      if (C?.node && ea.has(C.name))
        C.node.appendChild(document.createTextNode(Zr(p)));
      else if (!C && p.trim())
        return null;
    }
    if (a === -1) break;
    if (s = a, A.startsWith("<!--", s)) {
      const p = A.indexOf("-->", s + 4);
      if (p === -1) return null;
      s = p + 3;
      continue;
    }
    if (A.startsWith("<?", s)) {
      if (t) return null;
      const p = A.indexOf("?>", s + 2);
      if (p === -1) return null;
      s = p + 2;
      continue;
    }
    if (A.startsWith("<!", s))
      return null;
    if (A[s + 1] === "/") {
      const p = /^<\/\s*([A-Za-z][\w:.-]*)\s*>/.exec(A.slice(s, s + 200));
      if (!p) return null;
      s += p[0].length;
      const C = p[1].toLowerCase(), v = i.map((Q) => Q.name).lastIndexOf(C);
      v !== -1 && (i.length = v, v === 0 && (r = !0));
      continue;
    }
    const c = /^<([A-Za-z][\w:.-]*)/.exec(A.slice(s, s + 200));
    if (!c) return null;
    const d = c[1].toLowerCase();
    s += c[0].length;
    const f = [];
    let h = !1, w = !1;
    for (; s < A.length; ) {
      const p = /^\s*/.exec(A.slice(s, s + 1e3))[0];
      if (s += p.length, A.startsWith("/>", s)) {
        h = !0, w = !0, s += 2;
        break;
      }
      if (A[s] === ">") {
        w = !0, s += 1;
        break;
      }
      const C = /^([^\s=/>"'<]+)/.exec(A.slice(s, s + 200));
      if (!C) return null;
      const v = C[1];
      s += v.length;
      let Q = "";
      const E = /^\s*=\s*/.exec(A.slice(s, s + 1e3));
      if (E) {
        s += E[0].length;
        const y = A[s];
        if (y === '"' || y === "'") {
          const b = A.indexOf(y, s + 1);
          if (b === -1) return null;
          Q = A.slice(s + 1, b), s = b + 1;
        } else {
          const b = /^[^\s>]+/.exec(A.slice(s, s + Yr));
          if (!b) return null;
          Q = b[0], Q.endsWith("/") && A[s + Q.length] === ">" && (Q = Q.slice(0, -1)), s += Q.length;
        }
      }
      f.push([v, Zr(Q)]);
    }
    if (!w || ++n > ta) return null;
    const m = o();
    if (m) {
      if (!m.node) {
        h || i.push({ name: d, node: null });
        continue;
      }
    } else if (t || d !== "svg") return null;
    const g = Si[d];
    if (!g) {
      h || i.push({ name: d, node: null });
      continue;
    }
    const u = document.createElementNS(Aa, g);
    for (const [p, C] of f) {
      const v = Ki[p.toLowerCase()];
      v && na(v, C) && u.setAttribute(v, C);
    }
    m ? m.node.appendChild(u) : t = u, h ? m || (r = !0) : i.push({ name: d, node: u });
  }
  return t;
}
function MA(e, A) {
  return (e ? jr(e) : null) ?? jr(A);
}
function yA(e, A, t) {
  e.textContent = "", e.appendChild(MA(A, t));
}
const ia = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}:where(button.qaid-btn-structural)>svg:where(:not(.qaid-icon):not([width])){width:var(--qaid-icon-size, 24px);height:var(--qaid-icon-size, 24px)}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:var(--qaid-font-size, 16px);font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}button.qaid-btn-record:hover{background:#dc2626;color:#fff}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid CanvasText;outline-offset:2px}}", sa = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let he = 0;
const oa = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn-feedback:hover,button.qaid-btn-target:hover,button.qaid-btn-annotate:hover{background:var(--qaid-marker,#6365f1);color:var(--qaid-marker-text,#fff)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", aa = {
  small: 36,
  medium: 48,
  large: 64
}, ca = {
  small: 18,
  medium: 24,
  large: 32
};
function la(e, A, t) {
  const [r, n, i] = [e, A, t].map((s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * n + 0.0722 * i;
}
function Ba(e) {
  if (e.startsWith("#")) {
    const t = e.slice(1), r = t.length === 3 ? t.split("").map((i) => i + i).join("") : t, n = parseInt(r, 16);
    return {
      r: n >> 16 & 255,
      g: n >> 8 & 255,
      b: n & 255
    };
  }
  const A = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return A ? {
    r: parseInt(A[1]),
    g: parseInt(A[2]),
    b: parseInt(A[3])
  } : null;
}
function da(e) {
  const A = Ba(e);
  return A && la(A.r, A.g, A.b) > 0.4 ? "black" : "white";
}
function ua(e = {}) {
  const {
    positiveColor: A = "rgb(0, 200, 83)",
    negativeColor: t = "rgb(255, 0, 0)",
    markerColor: r = "#6365f1",
    buttonSize: n = "medium",
    modalWidth: i = 400,
    backdropOpacity: s = 0.3,
    fontFamily: o = "system-ui, -apple-system, sans-serif",
    fontSize: a = 16
  } = e, l = aa[n], c = ca[n], B = da(r);
  return {
    "--qaid-positive": A,
    "--qaid-negative": t,
    "--qaid-marker": r,
    "--qaid-marker-text": B,
    "--qaid-btn-size": `${l}px`,
    "--qaid-icon-size": `${c}px`,
    "--qaid-modal-width": `${i}px`,
    "--qaid-backdrop-opacity": String(s),
    "--qaid-font-family": o,
    "--qaid-font-size": `${a}px`
  };
}
function ha(e, A) {
  for (const [t, r] of Object.entries(A))
    e.style.setProperty(t, r);
}
function $r() {
  return ia + oa;
}
function ga() {
  if (he++, he > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = sa, document.head.appendChild(e);
}
function fa() {
  he <= 0 || (he--, he === 0 && document.getElementById("qaid-styles")?.remove());
}
const An = "data-qaid-a11y-live", wa = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;";
function Qa(e) {
  return e.ownerDocument || document;
}
function pa(e, A) {
  const t = A ? "assertive" : "polite", r = e.querySelector(
    `[${An}="${t}"]`
  );
  if (r) return r;
  const i = Qa(e).createElement("div");
  return i.setAttribute(An, t), i.setAttribute("role", A ? "alert" : "status"), i.setAttribute("aria-live", A ? "assertive" : "polite"), i.setAttribute("aria-atomic", "true"), i.style.cssText = wa, e.appendChild(i), i;
}
function Ca(e, A, t = {}) {
  const r = pa(e, !!t.assertive);
  r.textContent = "", r.textContent = A;
}
function Ua(e, A, t, r = {}) {
  const n = r.gap ?? 8;
  let i = e.bottom + n;
  i + A.height > t.height - n && (i = e.top - A.height - n);
  let s = e.left;
  return s < n ? s = n : s + A.width > t.width - n && (s = t.width - A.width - n), i < n ? i = n : i + A.height > t.height - n && (i = t.height - A.height - n), { top: i, left: s };
}
const cA = "[redacted]", en = 1e3, Tt = /login|log-in|signin|sign-in|signup|sign-up|auth|token|password|passwd|session|oauth|2fa|mfa|credential/i, Fa = /token|key|secret|pass(word|wd)?|pwd|code|sess|auth|sig|otp|jwt|credential|ticket|nonce|state/i, tn = "(?:password|passwd|pwd|pass|secret|token|access_token|refresh_token|id_token|api[_-]?key|apikey|client_secret|private[_-]?key|session(?:id)?|auth(?:orization)?|cookie|set-cookie|otp|pin|cvv|cvc|ssn)", ma = [
  // Authorization header values.
  [/\b(Bearer|Basic|Token|Digest)\s+[A-Za-z0-9._~+/=-]{8,}/gi, (e, A) => `${A} ${cA}`],
  // JWTs (header.payload[.signature]).
  [/\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}(?:\.[A-Za-z0-9_-]*)?/g, cA],
  // "password": "x"  /  'token': 'x'  (JSON and JS object text).
  [
    new RegExp(`(["']?${tn}["']?\\s*:\\s*)(["'])(?:\\\\.|(?!\\2).)*\\2`, "gi"),
    (e, A, t) => `${A}${t}${cA}${t}`
  ],
  // password=x  /  token: x  (query strings, form bodies, log lines).
  [
    // The value is not a quote (the rule above) and not an auth scheme
    // (the Bearer rule already kept the scheme and cut the credential).
    new RegExp(`(\\b${tn}\\s*[=:]\\s*)(?!["'\\s]|(?:Bearer|Basic|Token|Digest)\\s|\\[redacted\\])[^\\s&;,"'}]+`, "gi"),
    (e, A) => `${A}${cA}`
  ],
  // Card-number-like runs: 13 to 19 digits, optionally grouped by spaces or
  // dashes, that pass the Luhn check (so a Date.now() stays readable).
  [/\b\d(?:[ -]?\d){12,18}\b/g, (e) => va(e.replace(/\D/g, "")) ? cA : e],
  // Long hex strings (API keys, hashes, session ids).
  [/\b[A-Fa-f0-9]{32,}\b/g, cA],
  // Long base64 / base64url / prefixed keys (sk_live_…, ghp_…): 32+
  // characters mixing upper case, lower case and digits. `/` is left out so
  // a script path in a stack trace stays readable.
  [/[A-Za-z0-9_+-]{32,}={0,2}/g, (e) => /\d/.test(e) && /[a-z]/.test(e) && /[A-Z]/.test(e) ? cA : e]
];
function va(e) {
  let A = 0;
  for (let t = 0; t < e.length; t++) {
    let r = Number(e[e.length - 1 - t]);
    t % 2 === 1 && (r *= 2, r > 9 && (r -= 9)), A += r;
  }
  return A % 10 === 0;
}
function pt(e) {
  let A = e;
  for (const [t, r] of ma)
    A = A.replace(t, r);
  return A;
}
function Ti(e, A) {
  return e.length > A ? `${e.slice(0, A)}…[truncated]` : e;
}
function ba(e) {
  return Ti(pt(e.slice(0, en * 2)), en);
}
function rn(e) {
  let A = !1;
  for (const t of Array.from(new Set(e.keys())))
    Fa.test(t) && (e.set(t, cA), A = !0);
  return A;
}
function ge(e) {
  let A;
  const t = "https://qaid.invalid";
  try {
    A = new URL(e, t);
  } catch {
    return pt(e);
  }
  if (A.username = "", A.password = "", rn(A.searchParams) && (A.search = A.search.replace(/%5Bredacted%5D/g, cA)), A.hash.includes("=")) {
    const i = new URLSearchParams(A.hash.slice(1));
    rn(i) && (A.hash = i.toString().replace(/%5Bredacted%5D/g, cA));
  }
  const r = A.href;
  return !/^[a-z][a-z0-9+.-]*:/i.test(e) && !e.startsWith("//") && r.startsWith(t) ? r.slice(t.length) : r;
}
function ya(e) {
  try {
    const A = new URL(e, "https://qaid.invalid");
    return Tt.test(A.hostname) || Tt.test(A.pathname);
  } catch {
    return Tt.test(e);
  }
}
function nn(e, A, t) {
  if (t !== void 0)
    return A === 401 || A === 403 || ya(e) ? cA : pt(t);
}
const Ea = 20;
function Ha(e) {
  const A = [], t = console.error, r = console.warn, n = console.log, i = (s, o) => {
    const a = {
      // Sent with the report: secrets replaced, length capped (see redact.ts).
      message: ba(o.map((l) => String(l)).join(" ")),
      timestamp: Date.now(),
      level: s
    };
    A.length >= Ea && A.shift(), A.push(a), e && e(a);
  };
  return console.error = function(...s) {
    i("error", s), t.apply(console, s);
  }, console.warn = function(...s) {
    i("warn", s), r.apply(console, s);
  }, console.log = function(...s) {
    i("log", s), n.apply(console, s);
  }, {
    errors: A,
    restore: () => {
      console.error = t, console.warn = r, console.log = n;
    }
  };
}
const Ia = 50, xa = 3, sn = 25, La = 2e3, on = 2e3, an = 8e3, cn = "qaid_session_id";
function Sa(e) {
  try {
    let A = sessionStorage.getItem(cn);
    return A || (A = e(), sessionStorage.setItem(cn, A)), A;
  } catch {
    return e();
  }
}
function ln(e) {
  if (e instanceof Error)
    return { message: e.message || String(e), errorType: e.name, stack: e.stack };
  if (typeof e == "string") return { message: e };
  try {
    return { message: JSON.stringify(e) ?? String(e) };
  } catch {
    return { message: String(e) };
  }
}
function ye(e, A) {
  return e ? Ti(pt(e.slice(0, A * 2)), A) : void 0;
}
function Ka(e) {
  const A = { flush() {
  }, stop() {
  } }, t = e.sampleRate ?? 1;
  if (typeof window > "u" || Math.random() >= t) return A;
  const r = [], n = /* @__PURE__ */ new Map();
  let i = 0, s = !1, o = !1, a = null;
  const l = (g, u) => {
    const p = JSON.stringify({
      apiKey: e.apiKey,
      sessionId: e.sessionId,
      visitorId: e.visitorId,
      release: e.release,
      environment: e.environment,
      pageUrl: ge(window.location.href),
      events: g
    });
    try {
      if (u && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(e.endpoint, new Blob([p], { type: "text/plain" })))
        return;
      fetch(e.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: p,
        keepalive: !0,
        credentials: "omit"
      }).then((C) => {
        (C.status === 401 || C.status === 403 || C.status === 410) && (o = !0);
      }).catch(() => {
      });
    } catch {
    }
  }, c = (g) => {
    for (a && (clearTimeout(a), a = null); r.length && !o; ) l(r.splice(0, sn), g);
    r.length = 0;
  }, B = (g) => {
    if (s || o || i >= Ia) return;
    const u = `${g.kind}|${g.message}|${g.file ?? ""}|${g.line ?? 0}`, p = n.get(u) ?? 0;
    p >= xa || (n.set(u, p + 1), i++, r.push(g), r.length >= sn ? c(!1) : a || (a = setTimeout(() => c(!1), La)));
  }, d = () => ({
    occurredAt: (/* @__PURE__ */ new Date()).toISOString(),
    pageUrl: ge(window.location.href)
  }), f = (g) => {
    try {
      if (!g.message && !g.error) return;
      const u = ln(g.error ?? g.message);
      B({
        kind: "error",
        message: ye(u.message || g.message, on) ?? "Unknown error",
        errorType: u.errorType,
        stack: ye(u.stack, an),
        file: g.filename ? ge(g.filename) : void 0,
        line: g.lineno || void 0,
        column: g.colno || void 0,
        ...d()
      });
    } catch {
    }
  }, h = (g) => {
    try {
      const u = ln(g.reason);
      B({
        kind: "unhandledrejection",
        message: ye(u.message, on) ?? "Unhandled rejection",
        errorType: u.errorType,
        stack: ye(u.stack, an),
        ...d()
      });
    } catch {
    }
  }, w = () => c(!0), m = () => {
    document.visibilityState === "hidden" && c(!0);
  };
  return window.addEventListener("error", f), window.addEventListener("unhandledrejection", h), window.addEventListener("pagehide", w), document.addEventListener("visibilitychange", m), {
    flush: () => c(!1),
    stop: () => {
      s || (s = !0, window.removeEventListener("error", f), window.removeEventListener("unhandledrejection", h), window.removeEventListener("pagehide", w), document.removeEventListener("visibilitychange", m), c(!0));
    }
  };
}
function $(e, A, t) {
  const r = document.createElement(e);
  if (A)
    for (const [n, i] of Object.entries(A))
      n === "className" ? r.className = i : r.setAttribute(n, i);
  if (t)
    for (const n of t)
      typeof n == "string" ? r.appendChild(document.createTextNode(n)) : r.appendChild(n);
  return r;
}
function Ta(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function Bn(e, A, t) {
  const r = t.map((i) => i.style.visibility);
  t.forEach((i) => i.style.visibility = "hidden");
  const n = document.elementFromPoint(e, A);
  return t.forEach((i, s) => i.style.visibility = r[s]), n;
}
function ze(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function dn(e, A = 0) {
  const t = e.getBoundingClientRect();
  return {
    x: t.left - A,
    y: t.top - A,
    width: t.width + A * 2,
    height: t.height + A * 2
  };
}
const Da = "1.12.1", jA = `https://unpkg.com/@qaiddev/quests-embed@${Da}/dist/qaid-quests.js`, ka = "sha384-ulTEyFqoUl1HNdNL8rFOB/mSItoy12PPegqJJIspDm0WtPK4/2jl3bRVrHoEtrm1", Ma = /^https:\/\/unpkg\.com\/@qaiddev\/quests-embed@\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?\//;
let un = !1;
function Oa(e) {
  if (!e) return jA;
  if (e === jA) return e;
  try {
    const A = typeof location < "u" ? location.href : void 0, t = new URL(e, A);
    if (Ma.test(t.href) && !/%2e|%2f|%5c/i.test(t.pathname) || A && t.origin === new URL(A).origin && (t.protocol === "https:" || t.protocol === "http:"))
      return t.href;
  } catch {
  }
  return un || (un = !0, console.warn(
    `[thumbs-embed] Ignoring quests moduleUrl "${e}": use a same-origin URL or https://unpkg.com/@qaiddev/quests-embed@<exact version>/…. Using ${jA}.`
  )), jA;
}
const Ra = 3e3, qa = {
  buttonClass: "string",
  direction: ["horizontal", "vertical"],
  position: ["bottom-right", "bottom-left", "top-right", "top-left"],
  zIndex: "number",
  skipTargeting: "boolean",
  singleButton: "boolean",
  toolButtons: "boolean",
  feedbackMode: ["target", "annotate"],
  buttonSize: ["small", "medium", "large"],
  hideConfirmation: "boolean",
  modalWidth: "number",
  backdropOpacity: "number",
  fontFamily: "string",
  fontSize: "number",
  captureScreenshot: "boolean",
  annotate: "boolean",
  annotationColor: "string",
  captureVideo: "boolean",
  recordIcon: "string",
  incognito: "boolean",
  hideDismiss: "boolean",
  positiveIcon: "string",
  negativeIcon: "string",
  feedbackIcon: "string",
  targetIcon: "string",
  annotateIcon: "string",
  hideThumbs: "boolean",
  css: "string",
  screenshotMethod: ["dom", "permission"]
}, Di = {
  offset: { x: "number", y: "number" },
  colors: { positive: "string", negative: "string", marker: "string" },
  text: "strings",
  videoOptions: { maxDuration: "number", redaction: "boolean" },
  screenshotOptions: { quality: "number", maxWidth: "number", maxHeight: "number" },
  quests: { base: "string", up: "string", down: "string", video: "string" }
}, Na = /* @__PURE__ */ new Set([
  "positiveIcon",
  "negativeIcon",
  "targetIcon",
  "annotateIcon",
  "css",
  "buttonClass",
  "colors",
  "buttonSize",
  "text"
]), it = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function ki(e, A) {
  return Array.isArray(A) ? typeof e == "string" && A.includes(e) : A === "number" ? typeof e == "number" && Number.isFinite(e) : typeof e === A;
}
function Va(e, A) {
  if (!it(e)) return;
  const t = {};
  for (const [r, n] of Object.entries(e))
    (A === "strings" ? typeof n == "string" : r in A && ki(n, A[r])) && (t[r] = n);
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e, A) {
  try {
    const t = typeof location < "u" ? location.href : void 0;
    return new URL(e, t).origin === new URL(A, t).origin;
  } catch {
    return !1;
  }
}
function Mi(e, A) {
  if (!it(e)) return {};
  const t = {};
  for (const [i, s] of Object.entries(qa))
    ki(e[i], s) && (t[i] = e[i]);
  for (const [i, s] of Object.entries(Di)) {
    const o = Va(e[i], s);
    o && (t[i] = o);
  }
  const r = e.annotationPalette;
  Array.isArray(r) && r.length > 0 && r.every((i) => typeof i == "string" && i.trim()) && (t.annotationPalette = r);
  const n = t.quests;
  return n?.base && !Ga(n.base, A) && (console.warn("[thumbs-embed] Ignoring a fetched quest base on another origin than the endpoint."), delete t.quests), t;
}
function Pa(e, A) {
  const t = Mi(e, A);
  return Object.fromEntries(Object.entries(t).filter(([r]) => Na.has(r)));
}
function _a(...e) {
  const A = {};
  for (const t of e)
    if (t) {
      for (const [r, n] of Object.entries(t))
        if (n !== void 0)
          if (r in Di && it(n)) {
            const s = { ...it(A[r]) ? A[r] : {} };
            for (const [o, a] of Object.entries(n)) a !== void 0 && (s[o] = a);
            A[r] = s;
          } else
            A[r] = n;
    }
  return A;
}
function Xa(e, A) {
  return `${e.replace(/\/+$/, "")}/config?apiKey=${encodeURIComponent(A)}`;
}
async function hn(e, A, t) {
  const r = typeof AbortController < "u" ? new AbortController() : null;
  let n;
  const i = new Promise((s, o) => {
    n = setTimeout(() => {
      r?.abort(), o(new Error(`timed out after ${A} ms`));
    }, A);
  });
  try {
    const s = await Promise.race([
      fetch(e, {
        headers: { Accept: "application/json" },
        credentials: "omit",
        signal: r?.signal
      }),
      i
    ]);
    return s.ok ? await s.json() : (console.warn(`[thumbs-embed] ${t} fetch failed (${s.status}); drawing without it.`), null);
  } catch (s) {
    return console.warn(`[thumbs-embed] ${t} fetch error; drawing without it.`, s), null;
  } finally {
    clearTimeout(n);
  }
}
function Ja(e) {
  return e.remoteConfig === !0 || !!e.themeUrl;
}
async function Wa(e) {
  const A = e.remoteTimeoutMs ?? Ra;
  let t = null;
  e.remoteConfig && (e.apiKey ? t = Xa(e.endpoint, e.apiKey) : console.warn("[thumbs-embed] remoteConfig needs an apiKey; drawing without it."));
  const [r, n] = await Promise.all([
    t ? hn(t, A, "Project config") : null,
    e.themeUrl ? hn(e.themeUrl, A, "Theme") : null
  ]);
  return _a(
    r ? Mi(r, e.endpoint) : null,
    n ? Pa(n, e.endpoint) : null,
    e
  );
}
const gn = "qaid_visitor_id", fn = "qaid_hide_feedback", Ya = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#111827",
  "#ffffff"
];
function Za() {
  return typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches;
}
function sr(e) {
  return e ? `${fn}_${e}` : fn;
}
function za(e) {
  try {
    return localStorage.getItem(sr(e)) === "1";
  } catch {
    return !1;
  }
}
function wn(e, A = !0) {
  try {
    A ? localStorage.setItem(sr(e), "1") : localStorage.removeItem(sr(e));
  } catch {
  }
}
function or() {
  const e = typeof crypto < "u" ? crypto : void 0;
  if (e && typeof e.randomUUID == "function") return e.randomUUID();
  const A = new Uint8Array(16);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(A);
  else
    for (let r = 0; r < A.length; r++) A[r] = Math.floor(Math.random() * 256);
  A[6] = A[6] & 15 | 64, A[8] = A[8] & 63 | 128;
  const t = Array.from(A, (r) => r.toString(16).padStart(2, "0")).join("");
  return `${t.slice(0, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}-${t.slice(16, 20)}-${t.slice(20)}`;
}
function ja(e) {
  const A = e.replace(/\/+$/, "");
  if (/\/feedback$/.test(A)) return A.replace(/\/feedback$/, "/errors");
  try {
    return new URL("/api/errors", e).href;
  } catch {
    return "/api/errors";
  }
}
function $a() {
  try {
    let e = localStorage.getItem(gn);
    return e || (e = or(), localStorage.setItem(gn, e)), e;
  } catch {
    return or();
  }
}
function Qn(e, A) {
  const t = document.createElement("style");
  t.setAttribute("data-qaid-feature", ""), t.textContent = A;
  const r = e.querySelectorAll("style[data-qaid-base], style[data-qaid-feature]"), n = r[r.length - 1];
  e.insertBefore(t, n ? n.nextSibling : e.firstChild);
}
function pn(e) {
  return {
    endpoint: e.endpoint,
    apiKey: e.apiKey ?? "",
    container: e.container ?? "",
    buttonClass: e.buttonClass ?? "",
    direction: e.direction ?? "horizontal",
    position: e.position ?? "bottom-right",
    offset: {
      x: e.offset?.x ?? 16,
      y: e.offset?.y ?? 16
    },
    zIndex: e.zIndex ?? 50,
    skipTargeting: e.skipTargeting ?? !1,
    singleButton: e.singleButton ?? !1,
    feedbackMode: e.feedbackMode ?? "target",
    toolButtons: e.toolButtons ?? !1,
    colors: {
      positive: e.colors?.positive ?? "rgb(0, 200, 83)",
      negative: e.colors?.negative ?? "rgb(255, 0, 0)",
      marker: e.colors?.marker ?? "#6365f1"
    },
    buttonSize: e.buttonSize ?? "medium",
    text: {
      tooltip: e.text?.tooltip ?? "",
      modalTitle: e.text?.modalTitle ?? "Thank you for your feedback!",
      modalSubtitle: e.text?.modalSubtitle ?? "Would you like to add a message to help us understand your feedback better?",
      placeholder: e.text?.placeholder ?? "Optional: Tell us more about your experience...",
      submitButton: e.text?.submitButton ?? "Submit",
      skipButton: e.text?.skipButton ?? "Skip",
      positiveLabel: e.text?.positiveLabel ?? "Send positive feedback",
      negativeLabel: e.text?.negativeLabel ?? "Send negative feedback",
      recordLabel: e.text?.recordLabel ?? "Record a screen recording",
      dismissLabel: e.text?.dismissLabel ?? "Hide Feedback",
      feedbackLabel: e.text?.feedbackLabel ?? "Send feedback",
      targetLabel: e.text?.targetLabel ?? "Point at something on the page",
      annotateLabel: e.text?.annotateLabel ?? "Draw on a screenshot",
      confirmationTitle: e.text?.confirmationTitle ?? "Thank you!",
      confirmationMessage: e.text?.confirmationMessage ?? "Your feedback has been received.",
      confirmationClose: e.text?.confirmationClose ?? "Close",
      errorTitle: e.text?.errorTitle ?? "Message not sent",
      errorMessage: e.text?.errorMessage ?? "Something went wrong, so we did not get your message. Please try again later."
    },
    hideConfirmation: e.hideConfirmation ?? !1,
    modalWidth: e.modalWidth ?? 400,
    backdropOpacity: e.backdropOpacity ?? 0.3,
    fontFamily: e.fontFamily ?? "system-ui, -apple-system, sans-serif",
    fontSize: e.fontSize ?? 16,
    captureScreenshot: e.captureScreenshot ?? !1,
    annotate: e.annotate ?? !0,
    annotationColor: e.annotationColor ?? e.colors?.marker ?? "#6365f1",
    annotationPalette: e.annotationPalette ?? Ya,
    screenshotMethod: e.screenshotMethod ?? "permission",
    screenshotOptions: {
      quality: e.screenshotOptions?.quality ?? 0.8,
      maxWidth: e.screenshotOptions?.maxWidth ?? 1280,
      maxHeight: e.screenshotOptions?.maxHeight ?? 800
    },
    incognito: e.incognito ?? !1,
    hideDismiss: e.hideDismiss ?? !1,
    positiveIcon: e.positiveIcon ?? "",
    negativeIcon: e.negativeIcon ?? "",
    feedbackIcon: e.feedbackIcon ?? "",
    targetIcon: e.targetIcon ?? "",
    annotateIcon: e.annotateIcon ?? "",
    hideThumbs: e.hideThumbs ?? !1,
    css: e.css ?? "",
    captureVideo: e.captureVideo ?? !1,
    videoOptions: {
      maxDuration: e.videoOptions?.maxDuration ?? 15,
      redaction: e.videoOptions?.redaction ?? !1
    },
    recordIcon: e.recordIcon ?? "",
    quests: {
      base: e.quests?.base ?? "",
      up: e.quests?.up ?? "",
      down: e.quests?.down ?? "",
      video: e.quests?.video ?? "",
      // Quest service reuses the feedback API key unless overridden.
      apiKey: e.quests?.apiKey ?? e.apiKey ?? "",
      moduleUrl: Oa(e.quests?.moduleUrl)
    }
  };
}
class Ac {
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
  /**
   * This feedback's record (id + edit token), once its POST answers (null
   * if it failed). The message box and a linked quest open without waiting
   * for it; the PATCHes that need it wait on this instead.
   */
  feedbackRecordPromise = Promise.resolve(null);
  questsPrewarmed = !1;
  // A quest launched from a button (in place of the message box), if any.
  activeQuest = null;
  isMobile = !1;
  visitorId;
  sessionId;
  errorReporter = null;
  // Console capture
  consoleCapture = null;
  // Video recording — the whole subsystem lives in a lazily-loaded chunk
  // (recording.ts); a thumbs-only visitor never downloads it.
  recording = null;
  // Element targeting — also a lazily-loaded chunk (targeting.ts).
  targeting = null;
  // Preload-on-intent: warm the lazily-split feature chunks before first use.
  // The click path (send, message box, targeting) warms when the pointer or
  // focus reaches the buttons, or on idle, whichever comes first.
  clickPathPrewarmed = !1;
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
  dismissBtn = null;
  // Per-instance CSS variables
  cssVars = {};
  activeThumbBtn = null;
  /**
   * The flow the last button click chose: the config's `feedbackMode`, or the
   * tool button's own ("target" for the bullseye, "annotate" for the pencil).
   */
  activeMode = "target";
  /** The shared tooltip's text when a button has none of its own. */
  tooltipText = "";
  // Tracks whether the pending activation came from the keyboard (Enter/Space)
  // rather than a pointer, so targeting can avoid elementFromPoint(0,0).
  keyboardActivation = !1;
  // Accessibility: dialog focus management. The helpers load with the click
  // path; `dialogClose` undoes the open dialog (trap, inert, focus).
  dialogModule = null;
  dialogClose = null;
  // Unique id suffix for aria-labelledby/describedby references
  uid = Math.random().toString(36).slice(2, 9);
  // Bound event handlers
  boundKeyDown;
  boundResize;
  // Start with buttons slid off-screen (localStorage dismiss, no animation)
  _startDismissed = !1;
  // DOM persistence (survives framework client-side navigation)
  destroyed = !1;
  /**
   * Resolves once the buttons are drawn. Immediate unless the config asks for
   * fetched settings (`remoteConfig`, `themeUrl`); never rejects.
   */
  ready = Promise.resolve();
  /** False while fetched settings are pending: nothing is drawn yet. */
  initialized = !1;
  domObserver = null;
  boundBeforeSwap = null;
  constructor(A) {
    if (A = Po(A, "thumbs-embed"), this.config = pn(A), this.boundKeyDown = this.handleKeyDown.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = $a(), this.sessionId = Sa(or), A.captureErrors && A.apiKey) {
      const t = typeof A.captureErrors == "object" ? A.captureErrors : {};
      this.errorReporter = Ka({
        endpoint: t.endpoint ?? ja(A.endpoint),
        apiKey: A.apiKey,
        sessionId: this.sessionId,
        visitorId: this.visitorId,
        release: t.release,
        environment: t.environment,
        sampleRate: t.sampleRate
      });
    }
    Ja(A) ? this.ready = Wa(A).then((t) => {
      this.destroyed || (this.config = pn(t), this.init());
    }) : this.init();
  }
  applyVars(A) {
    ha(A, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(A, t = !1) {
    const r = this.overlayShadowRoot ?? this.shadowRoot;
    r && Ca(r, A, { assertive: t });
  }
  /** Load the dialog a11y helpers; every surface that opens a dialog awaits this first. */
  async loadDialogA11y() {
    this.dialogModule ??= await Promise.resolve().then(() => bn);
  }
  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path. Callers
   * reach it only after loadDialogA11y() has resolved.
   */
  openDialogA11y(A, t) {
    this.closeDialogA11y(), this.dialogClose = this.dialogModule.openDialog(A, t);
  }
  closeDialogA11y() {
    const A = this.dialogClose;
    this.dialogClose = null, A?.();
  }
  clearActiveThumb() {
    this.activeThumbBtn && (this.activeThumbBtn.setAttribute("aria-pressed", "false"), this.activeThumbBtn = null);
  }
  init() {
    this.initialized = !0, ga(), this.cssVars = ua({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && za(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = Ha((A) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors, this.observeDom(), this.schedulePrewarm(() => {
      this.prewarmClickPath(), this.config.captureVideo && this.videoSupported() && this.prewarmVideo(), this.config.captureScreenshot && this.prewarmScreenshot(), this.prewarmQuests();
    });
  }
  /**
   * Warm everything a thumb click needs: the send flow, the dialog helpers,
   * the message box, and targeting (unless it is skipped). Runs once, on the
   * first of: pointer or focus entering the buttons, or the idle callback.
   */
  prewarmClickPath() {
    this.clickPathPrewarmed || (this.clickPathPrewarmed = !0, Promise.resolve().then(() => Dt).catch(() => {
    }), Promise.resolve().then(() => bn).catch(() => {
    }), Promise.resolve().then(() => En).catch(() => {
    }), (this.config.toolButtons || !this.skipsTargeting()) && Promise.resolve().then(() => Hn).catch(() => {
    }));
  }
  /**
   * "annotate" mode and skipTargeting both go straight to the send flow. A
   * tool button names its own mode, and only "annotate" skips targeting then.
   */
  skipsTargeting(A = this.config.feedbackMode, t = !1) {
    return t ? A === "annotate" : this.config.skipTargeting || A === "annotate";
  }
  /**
   * Best-effort preload of a lazily-split feature chunk so its first use is
   * instant. Warming fetches + compiles (and defines) the module; the feature
   * modules have no load-time side effects, so this is safe. Errors are
   * swallowed — a failed preload just falls back to an on-demand load.
   */
  prewarmVideo() {
    this.videoPrewarmed || (this.videoPrewarmed = !0, Promise.resolve().then(() => In).catch(() => {
    }), Promise.resolve().then(() => Xi).catch(() => {
    }));
  }
  prewarmScreenshot() {
    this.screenshotPrewarmed || (this.screenshotPrewarmed = !0, (this.shouldCaptureViaDom() ? Promise.resolve().then(() => Yi) : Promise.resolve().then(() => ws)).catch(() => {
    }), this.config.annotate && Promise.resolve().then(() => $i).catch(() => {
    }));
  }
  /** Quest ids linked to any button, when quest launching is on. */
  linkedQuestIds() {
    const A = this.config.quests;
    return A.base ? [A.up, A.down, A.video].filter((t) => t) : [];
  }
  /**
   * Load the quests module and fetch every linked quest's definition, so a
   * click opens the quest with no network wait. Both are best-effort: a miss
   * just means the quest loads on click, as it always did.
   */
  prewarmQuests() {
    if (this.questsPrewarmed) return;
    const A = this.linkedQuestIds();
    if (A.length === 0) return;
    this.questsPrewarmed = !0;
    const { base: t, moduleUrl: r } = this.config.quests;
    Promise.resolve().then(() => zc).then((n) => {
      n.loadQuestsModule(r).catch(() => {
      });
      for (const i of A) n.prefetchQuestDefinition(n.questDefinitionUrl(t, i));
    }).catch(() => {
    });
  }
  /** Run fn when the main thread is idle; cancelled by destroy(). */
  schedulePrewarm(A) {
    const t = window, r = () => {
      this.destroyed || A();
    };
    typeof t.requestIdleCallback == "function" ? (this.prewarmIsTimeout = !1, this.prewarmHandle = t.requestIdleCallback(r, { timeout: 2e3 })) : (this.prewarmIsTimeout = !0, this.prewarmHandle = window.setTimeout(r, 1200));
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
    this.boundBeforeSwap = (A) => {
      const t = A.newDocument;
      !t || this.destroyed || (this.shadowHost && t.body.appendChild(this.shadowHost), this.overlayShadowHost && t.body.appendChild(this.overlayShadowHost));
    }, document.addEventListener("astro:before-swap", this.boundBeforeSwap), this.domObserver = new MutationObserver(() => {
      this.destroyed || (this.shadowHost && !this.shadowHost.isConnected && document.body.appendChild(this.shadowHost), this.overlayShadowHost && !this.overlayShadowHost.isConnected && document.body.appendChild(this.overlayShadowHost));
    }), this.domObserver.observe(document.body, { childList: !0 });
  }
  checkMobile() {
    this.isMobile = Ta();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let A = null;
    this.config.container && (A = document.querySelector(this.config.container)), A ? (A.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    if (t.setAttribute("data-qaid-base", ""), t.textContent = $r(), this.shadowRoot.appendChild(t), this.config.css) {
      const c = document.createElement("style");
      c.textContent = this.config.css, this.shadowRoot.appendChild(c);
    }
    const r = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${r}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${r}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: c, y: B } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${c}px` : this.buttonsContainer.style.left = `${c}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${B}px` : this.buttonsContainer.style.top = `${B}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer), this.buttonsContainer.addEventListener("keydown", (c) => {
      (c.key === "Enter" || c.key === " " || c.key === "Spacebar") && (this.keyboardActivation = !0);
    }), this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = !1;
    }), this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = !1;
    });
    const n = () => this.prewarmClickPath();
    this.buttonsContainer.addEventListener("pointerenter", n), this.buttonsContainer.addEventListener("focusin", n);
    const i = !!this.config.buttonClass, s = i ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", a = this.config.text.tooltip || "Feedback for us?";
    this.tooltipText = a;
    const l = document.createElement("div");
    if (l.className = "qaid-tooltip-text", l.textContent = a, this.applyVars(l), this.shadowRoot.appendChild(l), this.tooltipElement = l, this.config.toolButtons) {
      const c = (B, d, f, h, w) => {
        const m = document.createElement("div");
        m.className = "qaid-tooltip-wrapper";
        const g = document.createElement("button");
        g.type = "button", g.className = i ? `${s} ${d}` : `qaid-btn ${d}`, g.setAttribute("aria-label", f), yA(g, h, w), g.addEventListener(
          "click",
          (p) => this.handleThumbClick("neutral", p.currentTarget, p, B)
        );
        const u = this.config.text.tooltip || f;
        g.addEventListener("mouseenter", () => {
          B === "annotate" && this.prewarmScreenshot(), this.showTooltip(g, u);
        }), g.addEventListener("mouseleave", () => this.hideTooltip()), m.appendChild(g), this.buttonsContainer.appendChild(m);
      };
      c("target", "qaid-btn-target", this.config.text.targetLabel, this.config.targetIcon, Xo), c("annotate", "qaid-btn-annotate", this.config.text.annotateLabel, this.config.annotateIcon, xi);
    } else if (this.config.singleButton) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-feedback` : "qaid-btn qaid-btn-feedback", B.setAttribute("aria-label", this.config.text.feedbackLabel), yA(B, this.config.feedbackIcon, Ii), B.addEventListener("click", (d) => this.handleThumbClick("neutral", d.currentTarget, d)), B.addEventListener("mouseenter", () => this.showTooltip(B)), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B), this.buttonsContainer.appendChild(c);
    } else if (!this.config.hideThumbs) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-up` : "qaid-btn qaid-btn-up", B.setAttribute("aria-label", this.config.text.positiveLabel), yA(B, this.config.positiveIcon, nr), B.addEventListener("click", (h) => this.handleThumbClick("up", h.currentTarget, h)), B.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(B);
      }), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B);
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const f = document.createElement("button");
      f.type = "button", f.className = i ? `${s} qaid-btn-down` : "qaid-btn qaid-btn-down", f.setAttribute("aria-label", this.config.text.negativeLabel), yA(f, this.config.negativeIcon, ir), f.addEventListener("click", (h) => this.handleThumbClick("down", h.currentTarget, h)), f.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(f);
      }), f.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(f), this.buttonsContainer.appendChild(c), this.buttonsContainer.appendChild(d);
    }
    if (this.config.captureVideo && this.videoSupported()) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-record` : "qaid-btn qaid-btn-record", B.setAttribute("aria-label", this.config.text.recordLabel), yA(B, this.config.recordIcon, _o), B.addEventListener("click", () => {
        this.ensureRecording().then(
          (f) => this.config.videoOptions.redaction ? f.startPicking() : f.startRecording()
        );
      });
      const d = () => this.prewarmVideo();
      B.addEventListener("mouseenter", () => {
        d(), this.showTooltip(B);
      }), B.addEventListener("focus", d), B.addEventListener("touchstart", d, { passive: !0 }), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B), this.buttonsContainer.appendChild(c);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, yA(this.dismissBtn, null, Jo), this.dismissBtn.addEventListener("click", (c) => {
      c.stopPropagation(), this.handleDismiss();
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
    const A = document.createElement("style");
    A.setAttribute("data-qaid-base", ""), A.textContent = $r(), this.overlayShadowRoot.appendChild(A);
    for (const t of this.featureStyles) Qn(this.overlayShadowRoot, t);
    if (this.config.css) {
      const t = document.createElement("style");
      t.textContent = this.config.css, this.overlayShadowRoot.appendChild(t);
    }
    return this.overlayShadowRoot;
  }
  /** The styles of every feature chunk loaded so far, in load order. */
  featureStyles = [];
  /**
   * Add a feature chunk's styles to both shadow roots. The core stylesheet
   * styles only the buttons; the message box, targeting, video and markup
   * editor bring their own CSS with their chunk, so a page that never opens
   * them never downloads it.
   */
  addFeatureStyles(A) {
    if (!this.featureStyles.includes(A)) {
      this.featureStyles.push(A);
      for (const t of [this.shadowRoot, this.overlayShadowRoot])
        t && Qn(t, A);
    }
  }
  tooltipElement = null;
  showTooltip(A, t = this.tooltipText) {
    const r = this.tooltipElement;
    r.textContent = t, r.style.visibility = "hidden", r.classList.add("qaid-tooltip-visible");
    const n = A.getBoundingClientRect(), i = r.getBoundingClientRect(), { top: s, left: o } = Ua(
      n,
      i,
      { width: window.innerWidth, height: window.innerHeight }
    );
    r.style.top = `${s}px`, r.style.left = `${o}px`, r.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleDismiss() {
    this.buttonsContainer.classList.add("qaid-dismissed"), wn(this.config.apiKey, !0);
  }
  handleThumbClick(A, t, r, n) {
    const i = n ?? this.config.feedbackMode;
    if (this.activeMode = i, this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), wn(this.config.apiKey, !1)), this.prewarmClickPath(), this.skipsTargeting(i, n !== void 0))
      this.submitDirectFeedback(A, t);
    else {
      this.activeThumbBtn = t, t.setAttribute("aria-pressed", "true");
      const s = this.keyboardActivation;
      this.keyboardActivation = !1, this.ensureTargeting().then((o) => {
        this.destroyed || (s ? o.startKeyboard(A) : o.startPointer(A, r));
      });
    }
  }
  submitDirectFeedback(A, t) {
    this.feedbackData.feedbackType = A, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null;
    const r = t.getBoundingClientRect();
    this.selectedBounds = {
      x: r.left,
      y: r.top,
      width: r.width,
      height: r.height,
      clickX: r.left + r.width / 2,
      clickY: r.top + r.height / 2,
      visible: !1
    }, this.submitFeedback();
  }
  handleKeyDown(A) {
    if (A.key === "Escape") {
      if (this.recording?.handleEscape()) return;
      this.state === "TARGETING" ? this.targeting?.cancel() : this.state === "MODAL_OPEN" && this.modal?.close();
    }
  }
  /** Whether to capture the screenshot with the DOM/canvas method (html2canvas)
   *  instead of the permission-based Screen Capture API. Explicit "dom" wins;
   *  otherwise DOM is used on touch devices to avoid the getDisplayMedia prompt. */
  shouldCaptureViaDom() {
    return this.config.screenshotMethod === "dom" || Za();
  }
  /**
   * Run the send flow (send.ts, loaded on demand and pre-warmed before the
   * click): screenshot, markup, POST, then a linked quest or the message box.
   * If its chunk will not load, say so and reset rather than leave the
   * visitor stuck mid-flow.
   */
  async submitFeedback() {
    try {
      const [A] = await Promise.all([Promise.resolve().then(() => Dt), this.loadDialogA11y()]);
      await A.submitFeedback(this.makeSendHost());
    } catch (A) {
      console.error("Failed to send feedback:", A), this.announceMsg("Failed to send feedback", !0), this.resetFeedbackUi();
    }
  }
  /**
   * Launch the quest linked to `type` through the send chunk. Resolves false
   * when none is linked, or when the chunk or the quest will not load.
   */
  async tryLaunchQuest(A, t) {
    try {
      return await (await Promise.resolve().then(() => Dt)).tryLaunchQuest(this.makeSendHost(), A, t);
    } catch (r) {
      return console.error("Failed to launch quest:", r), !1;
    }
  }
  /** Narrow view of the embed the send flow talks back through. */
  makeSendHost() {
    const A = this;
    return {
      get config() {
        return A.config;
      },
      get mode() {
        return A.activeMode;
      },
      get visitorId() {
        return A.visitorId;
      },
      get sessionId() {
        return A.sessionId;
      },
      get feedbackData() {
        return A.feedbackData;
      },
      get selectedBounds() {
        return A.selectedBounds;
      },
      get destroyed() {
        return A.destroyed;
      },
      get overlayShadowHost() {
        return A.overlayShadowHost;
      },
      get activeQuest() {
        return A.activeQuest;
      },
      set activeQuest(t) {
        A.activeQuest = t;
      },
      setState: (t) => {
        A.state = t;
      },
      setFeedbackRecord: (t) => {
        A.feedbackRecordPromise = t;
      },
      shouldCaptureViaDom: () => A.shouldCaptureViaDom(),
      ensureOverlayHost: () => A.ensureOverlayHost(),
      ensureModal: () => A.ensureModal(),
      addFeatureStyles: (t) => A.addFeatureStyles(t),
      applyVars: (t) => A.applyVars(t),
      announceMsg: (t, r) => A.announceMsg(t, r),
      openDialogA11y: (t, r) => A.openDialogA11y(t, r),
      closeDialogA11y: () => A.closeDialogA11y(),
      resetFeedbackUi: () => A.resetFeedbackUi()
    };
  }
  /**
   * Reset the thumbs targeting/marker UI back to idle without opening or
   * closing the message modal. Shared by closeModal() and the quest-launch
   * path (which bypasses the modal entirely).
   */
  resetFeedbackUi() {
    this.targeting?.hideMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackRecordPromise = Promise.resolve(null), this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  /**
   * Lazily load and instantiate the modal controller. The message modal lives
   * in a separate chunk, fetched the first time it opens (and pre-warmed
   * before the click — see prewarmClickPath).
   */
  async ensureModal() {
    if (!this.modal) {
      const [{ ModalController: A, styles: t }] = await Promise.all([
        Promise.resolve().then(() => En),
        this.loadDialogA11y()
      ]);
      this.addFeatureStyles(t), this.modal = new A(this.makeModalHost());
    }
    return this.modal;
  }
  /** Narrow view of the embed the modal controller talks back through. */
  makeModalHost() {
    const A = this;
    return {
      get config() {
        return A.config;
      },
      get uid() {
        return A.uid;
      },
      get isMobile() {
        return A.isMobile;
      },
      get state() {
        return A.state;
      },
      get boundKeyDown() {
        return A.boundKeyDown;
      },
      get feedbackData() {
        return A.feedbackData;
      },
      get selectedBounds() {
        return A.selectedBounds;
      },
      whenFeedbackRecord: () => A.feedbackRecordPromise,
      ensureOverlayHost: () => A.ensureOverlayHost(),
      applyVars: (t) => A.applyVars(t),
      announceMsg: (t, r) => A.announceMsg(t, r),
      openDialogA11y: (t, r) => A.openDialogA11y(t, r),
      closeDialogA11y: () => A.closeDialogA11y(),
      resetFeedbackUi: () => A.resetFeedbackUi()
    };
  }
  /**
   * Lazily load and instantiate the targeting controller. The subsystem (with
   * element-selector) lives in a separate chunk, fetched the first time the
   * user targets — pre-warmed before the click (see prewarmClickPath).
   */
  async ensureTargeting() {
    if (!this.targeting) {
      const { TargetingController: A, styles: t } = await Promise.resolve().then(() => Hn);
      this.addFeatureStyles(t), this.targeting = new A(this.makeTargetingHost());
    }
    return this.targeting;
  }
  /** Narrow view of the embed the targeting controller talks back through. */
  makeTargetingHost() {
    const A = this;
    return {
      get config() {
        return A.config;
      },
      get cssVars() {
        return A.cssVars;
      },
      get state() {
        return A.state;
      },
      get shadowHost() {
        return A.shadowHost;
      },
      get overlayShadowHost() {
        return A.overlayShadowHost;
      },
      get boundKeyDown() {
        return A.boundKeyDown;
      },
      get feedbackData() {
        return A.feedbackData;
      },
      get selectedBounds() {
        return A.selectedBounds;
      },
      setState: (t) => {
        A.state = t;
      },
      ensureOverlayHost: () => A.ensureOverlayHost(),
      applyVars: (t) => A.applyVars(t),
      announceMsg: (t, r) => A.announceMsg(t, r),
      clearActiveThumb: () => A.clearActiveThumb(),
      submitFeedback: () => A.submitFeedback()
    };
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
      const [{ RecordingController: A, styles: t }] = await Promise.all([
        Promise.resolve().then(() => In),
        this.loadDialogA11y()
      ]);
      this.addFeatureStyles(t), this.recording = new A(this.makeRecordingHost());
    }
    return this.recording;
  }
  /** Narrow view of the embed the recording controller talks back through. */
  makeRecordingHost() {
    const A = this;
    return {
      get config() {
        return A.config;
      },
      get visitorId() {
        return A.visitorId;
      },
      get uid() {
        return A.uid;
      },
      get overlayShadowHost() {
        return A.overlayShadowHost;
      },
      get consoleCapture() {
        return A.consoleCapture;
      },
      get boundKeyDown() {
        return A.boundKeyDown;
      },
      get state() {
        return A.state;
      },
      setState: (t) => {
        A.state = t;
      },
      ensureOverlayHost: () => A.ensureOverlayHost(),
      applyVars: (t) => A.applyVars(t),
      announceMsg: (t, r) => A.announceMsg(t, r),
      openDialogA11y: (t, r) => A.openDialogA11y(t, r),
      closeDialogA11y: () => A.closeDialogA11y(),
      setButtonsDisabled: (t) => A.setButtonsDisabled(t),
      tryLaunchQuest: (t, r) => A.tryLaunchQuest(t, r)
    };
  }
  setButtonsDisabled(A) {
    if (!this.buttonsContainer) return;
    this.buttonsContainer.querySelectorAll("button.qaid-btn, button.qaid-btn-structural").forEach((r) => {
      A ? r.classList.contains("qaid-btn-record") || (r.disabled = !0, r.style.opacity = "0.5") : (r.disabled = !1, r.style.opacity = "");
    });
  }
  /**
   * Destroy the embed and clean up all resources
   */
  destroy() {
    if (this.destroyed = !0, this.errorReporter?.stop(), this.errorReporter = null, !!this.initialized) {
      if (this.domObserver && (this.domObserver.disconnect(), this.domObserver = null), this.boundBeforeSwap && (document.removeEventListener("astro:before-swap", this.boundBeforeSwap), this.boundBeforeSwap = null), this.targeting?.destroy(), this.targeting = null, this.clearActiveThumb(), this.closeDialogA11y(), this.prewarmHandle !== null) {
        const A = window;
        this.prewarmIsTimeout ? clearTimeout(this.prewarmHandle) : A.cancelIdleCallback?.(this.prewarmHandle), this.prewarmHandle = null;
      }
      this.recording?.destroy(), this.recording = null, this.modal?.destroy(), this.modal = null, this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.dismissBtn = null, this.tooltipElement = null, fa();
    }
  }
}
var ec = "__qaidThumbsOrigin";
function Oi(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
const Ri = ec;
function Cn(e) {
  const A = e.split(/[?#]/)[0];
  return A.substring(A.lastIndexOf("/") + 1);
}
function tc(e) {
  const A = document.currentScript;
  if (A && A.tagName === "SCRIPT") return A;
  if (!e) return null;
  const t = Array.from(document.getElementsByTagName("script")).filter((o) => o.src), r = t.find((o) => o.src === e);
  if (r) return r;
  const n = t.filter((o) => o[Ri]);
  if (n.length === 1) return n[0];
  const i = Cn(e), s = t.filter((o) => Cn(o.src) === i);
  return s.length === 1 ? s[0] : null;
}
function Un(e) {
  return !!e && e.tagName === "SCRIPT" && (e.getAttribute("type") || "").trim().toLowerCase() === "application/json";
}
function rc(e) {
  const A = e[Ri], t = A && A.tagName === "SCRIPT" ? A : e, r = t.getAttribute("data-config-id") || e.getAttribute("data-config-id");
  if (r) {
    const n = document.getElementById(r);
    return Un(n) ? n : null;
  }
  for (const n of [t.previousElementSibling, t.nextElementSibling])
    if (Un(n) && n.hasAttribute("data-feedback-config")) return n;
  return null;
}
function nc(e) {
  const A = rc(e);
  if (!A) return null;
  const t = A.textContent?.trim();
  if (!t) return null;
  try {
    const r = JSON.parse(t);
    return r.cssSelector && !r.css && (r.css = Oi(r.cssSelector), delete r.cssSelector), r;
  } catch {
    return null;
  }
}
function qi(e, A, t) {
  console.warn(`[thumbs-embed] Ignoring ${e}="${A}": expected ${t}.`);
}
function ic(e) {
  const A = [];
  let t = 0, r = "";
  for (const n of e)
    n === "(" && t++, n === ")" && (t = Math.max(0, t - 1)), n === "," && t === 0 ? (A.push(r.trim()), r = "") : r += n;
  return A.push(r.trim()), A;
}
function sc(e, A) {
  if (A === null) return;
  const t = A.trim();
  let r = null;
  if (t.startsWith("[") || t.startsWith("{"))
    try {
      r = JSON.parse(t);
    } catch {
      r = null;
    }
  else
    r = ic(t);
  if (Array.isArray(r) && r.length > 0 && r.every((n) => typeof n == "string" && n.trim() !== ""))
    return r.map((n) => n.trim());
  qi(e, A, "a JSON array of colours or a comma-separated list");
}
function Ee(e, A) {
  if (A !== null) {
    if (A.trim() === "") {
      qi(e, A, "a non-empty label");
      return;
    }
    return A;
  }
}
function oc(e) {
  const A = e.getAttribute("data-endpoint");
  if (!A) return null;
  const t = e.getAttribute("data-position"), r = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), i = e.getAttribute("data-negative-color"), s = e.getAttribute("data-marker-color"), o = e.getAttribute("data-container"), a = e.getAttribute("data-button-class"), l = e.getAttribute("data-skip-targeting"), c = e.getAttribute("data-hide-confirmation"), B = e.getAttribute("data-single-button"), d = e.getAttribute("data-feedback-mode"), f = e.getAttribute("data-incognito"), h = e.getAttribute("data-button-size"), w = e.getAttribute("data-offset-x"), m = e.getAttribute("data-offset-y"), g = e.getAttribute("data-modal-width"), u = e.getAttribute("data-backdrop-opacity"), p = e.getAttribute("data-font-family"), C = e.getAttribute("data-font-size"), v = e.getAttribute("data-tooltip"), Q = e.getAttribute("data-modal-title"), E = e.getAttribute("data-confirmation-title"), y = e.getAttribute("data-confirmation-message"), b = e.getAttribute("data-confirmation-close"), D = e.getAttribute("data-error-title"), V = e.getAttribute("data-error-message"), _ = e.getAttribute("data-modal-subtitle"), x = e.getAttribute("data-placeholder"), O = e.getAttribute("data-submit-button"), sA = e.getAttribute("data-skip-button"), X = e.getAttribute("data-positive-icon"), J = e.getAttribute("data-negative-icon"), fA = e.getAttribute("data-feedback-icon"), j = e.getAttribute("data-feedback-label"), BA = e.getAttribute("data-tool-buttons"), wA = e.getAttribute("data-target-icon"), QA = e.getAttribute("data-annotate-icon"), eA = e.getAttribute("data-target-label"), dA = e.getAttribute("data-annotate-label"), oA = e.getAttribute("data-api-key"), mA = e.getAttribute("data-capture-screenshot"), TA = e.getAttribute("data-annotate"), Fo = e.getAttribute("data-annotation-color"), xt = e.getAttribute("data-screenshot-quality"), Lt = e.getAttribute("data-screenshot-max-width"), St = e.getAttribute("data-screenshot-max-height"), mo = e.getAttribute("data-capture-video"), Rr = e.getAttribute("data-video-redaction"), vo = e.getAttribute("data-hide-thumbs"), bo = e.getAttribute("data-hide-dismiss"), Kt = e.getAttribute("data-video-max-duration"), yo = e.getAttribute("data-screenshot-method"), Eo = e.getAttribute("data-direction"), qr = e.getAttribute("data-css-selector"), Ho = e.getAttribute("data-css"), Nr = Ee("data-positive-label", e.getAttribute("data-positive-label")), Vr = Ee("data-negative-label", e.getAttribute("data-negative-label")), Gr = Ee("data-record-label", e.getAttribute("data-record-label")), Pr = Ee("data-dismiss-label", e.getAttribute("data-dismiss-label")), Io = sc(
    "data-annotation-palette",
    e.getAttribute("data-annotation-palette")
  ), xo = e.getAttribute("data-record-icon"), _r = e.getAttribute("data-quest-base"), Lo = e.getAttribute("data-quest-up"), So = e.getAttribute("data-quest-down"), Ko = e.getAttribute("data-quest-video"), To = e.getAttribute("data-quest-api-key"), Do = e.getAttribute("data-quest-module-url"), ko = e.getAttribute("data-remote-config"), Mo = e.getAttribute("data-theme-url"), Xr = e.getAttribute("data-remote-timeout");
  return {
    endpoint: A,
    remoteConfig: ko === "true" ? !0 : void 0,
    themeUrl: Mo || void 0,
    remoteTimeoutMs: Xr ? parseInt(Xr, 10) : void 0,
    // Inline CSS wins over a selector, as `css` wins over `cssSelector` in
    // the JSON block.
    css: Ho || (qr ? Oi(qr) : void 0),
    apiKey: oA ?? void 0,
    captureScreenshot: mA === "true" ? !0 : void 0,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: TA === "false" ? !1 : void 0,
    annotationColor: Fo ?? void 0,
    annotationPalette: Io,
    screenshotOptions: xt || Lt || St ? {
      quality: xt ? parseFloat(xt) : void 0,
      maxWidth: Lt ? parseInt(Lt, 10) : void 0,
      maxHeight: St ? parseInt(St, 10) : void 0
    } : void 0,
    container: o ?? void 0,
    buttonClass: a ?? void 0,
    direction: Eo ?? void 0,
    position: t ?? void 0,
    zIndex: r ? parseInt(r, 10) : void 0,
    skipTargeting: l === "true" ? !0 : void 0,
    hideConfirmation: c === "true" ? !0 : void 0,
    singleButton: B === "true" ? !0 : void 0,
    toolButtons: BA === "true" ? !0 : void 0,
    feedbackMode: d ?? void 0,
    incognito: f === "true" ? !0 : void 0,
    buttonSize: h ?? void 0,
    offset: w || m ? {
      x: w ? parseInt(w, 10) : void 0,
      y: m ? parseInt(m, 10) : void 0
    } : void 0,
    modalWidth: g ? parseInt(g, 10) : void 0,
    backdropOpacity: u ? parseFloat(u) : void 0,
    fontFamily: p ?? void 0,
    fontSize: C ? parseInt(C, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: i ?? void 0,
      marker: s ?? void 0
    },
    text: v || Q || _ || x || O || sA || j || eA || dA || E || y || b || D || V || Nr || Vr || Gr || Pr ? {
      tooltip: v ?? void 0,
      modalTitle: Q ?? void 0,
      modalSubtitle: _ ?? void 0,
      placeholder: x ?? void 0,
      submitButton: O ?? void 0,
      skipButton: sA ?? void 0,
      feedbackLabel: j ?? void 0,
      targetLabel: eA ?? void 0,
      annotateLabel: dA ?? void 0,
      confirmationTitle: E ?? void 0,
      confirmationMessage: y ?? void 0,
      confirmationClose: b ?? void 0,
      errorTitle: D ?? void 0,
      errorMessage: V ?? void 0,
      positiveLabel: Nr,
      negativeLabel: Vr,
      recordLabel: Gr,
      dismissLabel: Pr
    } : void 0,
    positiveIcon: X ?? void 0,
    recordIcon: xo ?? void 0,
    negativeIcon: J ?? void 0,
    feedbackIcon: fA ?? void 0,
    targetIcon: wA ?? void 0,
    annotateIcon: QA ?? void 0,
    screenshotMethod: yo ?? void 0,
    captureVideo: mo === "true" ? !0 : void 0,
    hideThumbs: vo === "true" ? !0 : void 0,
    hideDismiss: bo === "true" ? !0 : void 0,
    videoOptions: Kt || Rr ? {
      maxDuration: Kt ? parseInt(Kt, 10) : void 0,
      redaction: Rr === "true" ? !0 : void 0
    } : void 0,
    quests: _r ? {
      base: _r,
      up: Lo ?? void 0,
      down: So ?? void 0,
      video: Ko ?? void 0,
      apiKey: To ?? void 0,
      moduleUrl: Do ?? void 0
    } : void 0
  };
}
function ac(e) {
  if (typeof document > "u") return;
  const A = tc(e);
  if (!A) return;
  const t = () => {
    const r = nc(A) ?? oc(A);
    r?.endpoint && new Ac(r);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
const cc = 20, Fn = 4096;
function Ni(e) {
  const A = typeof e == "string" ? e : JSON.stringify(e);
  return A.length > Fn ? A.slice(0, Fn) + "…[truncated]" : A;
}
function mn(e, A) {
  e.length >= cc && e.shift(), e.push(A);
}
async function lc(e) {
  try {
    const A = await e.clone().text();
    return Ni(A);
  } catch {
    return;
  }
}
function Bc() {
  const e = [], A = window.fetch;
  window.fetch = async function(n, i) {
    const s = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, o = i?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET"), a = await A.apply(window, [n, i]);
    if (a.status >= 400) {
      const l = nn(s, a.status, await lc(a));
      mn(e, {
        url: ge(s),
        method: o.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        responseBody: l,
        timestamp: Date.now()
      });
    }
    return a;
  };
  const t = XMLHttpRequest.prototype.open, r = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, i, ...s) {
    return this._qaid_method = n, this._qaid_url = typeof i == "string" ? i : i.toString(), t.apply(this, [n, i, ...s]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const i = this;
    return i.addEventListener("load", function() {
      i.status >= 400 && mn(e, {
        url: ge(i._qaid_url),
        method: i._qaid_method.toUpperCase(),
        status: i.status,
        statusText: i.statusText,
        responseBody: nn(i._qaid_url, i.status, Ni(i.responseText)),
        timestamp: Date.now()
      });
    }), r.apply(this, [n]);
  }, {
    errors: e,
    restore: () => {
      window.fetch = A, XMLHttpRequest.prototype.open = t, XMLHttpRequest.prototype.send = r;
    }
  };
}
function dc() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function uc(e, A, t, r, n) {
  const i = e >= A, s = t >= r;
  return i === s ? { width: e, height: A, rotate: 0 } : { width: A, height: e, rotate: n === 270 ? -90 : 90 };
}
function hc(e, A, t) {
  if (t.rotate === 0) {
    e.drawImage(A, 0, 0, t.width, t.height);
    return;
  }
  e.save(), t.rotate === 90 ? (e.translate(t.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, t.height), e.rotate(-Math.PI / 2)), e.drawImage(A, 0, 0, t.height, t.width), e.restore();
}
function gc() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function Vi(e) {
  return new Promise((A) => {
    if (e.videoWidth > 0) {
      A();
      return;
    }
    e.addEventListener("loadedmetadata", () => A(), { once: !0 });
  });
}
async function Gi(e) {
  try {
    await e.play();
  } catch {
  }
}
async function fc(e, A = 15) {
  const t = document.createElement("canvas");
  if (typeof t.captureStream != "function") return null;
  const r = t.getContext("2d");
  if (!r) return null;
  const n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await Vi(n);
  const i = uc(
    n.videoWidth,
    n.videoHeight,
    window.innerWidth,
    window.innerHeight,
    gc()
  );
  t.width = i.width, t.height = i.height, await Gi(n);
  let s = 0;
  const o = () => {
    hc(r, n, i), s = requestAnimationFrame(o);
  };
  o();
  const a = t.captureStream(A);
  return {
    stream: a,
    stop: () => {
      s && cancelAnimationFrame(s), s = 0, a.getTracks().forEach((l) => l.stop()), n.pause(), n.srcObject = null;
    }
  };
}
function wc(e, A, t, r, n) {
  const i = Math.max(0, Math.min(r, e.left * A)), s = Math.max(0, Math.min(n, e.top * t)), o = Math.max(0, Math.min(r, (e.left + e.width) * A)), a = Math.max(0, Math.min(n, (e.top + e.height) * t)), l = o - i, c = a - s;
  return l <= 0 || c <= 0 ? null : { x: i, y: s, w: l, h: c };
}
function Qc(e, A, t, r, n, i, s) {
  e.drawImage(A, 0, 0, r, n);
  const o = r / Math.max(1, window.innerWidth), a = n / Math.max(1, window.innerHeight);
  for (const l of t) {
    const c = wc(
      l.getBoundingClientRect(),
      o,
      a,
      r,
      n
    );
    c && (e.save(), s ? (e.filter = `blur(${i}px)`, e.drawImage(A, c.x, c.y, c.w, c.h, c.x, c.y, c.w, c.h)) : (e.fillStyle = "#0b0b0b", e.fillRect(c.x, c.y, c.w, c.h)), e.restore());
  }
}
async function pc(e, A, t = {}) {
  const r = t.frameRate ?? 15, n = t.blurRadius ?? 12, i = document.createElement("canvas");
  if (typeof i.captureStream != "function") return null;
  const s = i.getContext("2d");
  if (!s) return null;
  const o = "filter" in s, a = document.createElement("video");
  a.muted = !0, a.playsInline = !0, a.srcObject = e, await Vi(a), i.width = a.videoWidth, i.height = a.videoHeight, await Gi(a);
  let l = 0;
  const c = () => {
    Qc(
      s,
      a,
      A,
      i.width,
      i.height,
      n,
      o
    ), l = requestAnimationFrame(c);
  };
  c();
  const B = i.captureStream(r);
  return {
    stream: B,
    stop: () => {
      l && cancelAnimationFrame(l), l = 0, B.getTracks().forEach((d) => d.stop()), a.pause(), a.srcObject = null;
    }
  };
}
const Pi = "This browser cannot blur the areas you picked, so the recording was not started.";
function Cc() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function _i() {
  if (typeof MediaRecorder > "u") return "";
  const e = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4"
  ];
  for (const A of e)
    if (MediaRecorder.isTypeSupported(A))
      return A;
  return "";
}
function Uc(e = {}) {
  const A = e.maxDuration ?? 15, t = e.videoBitsPerSecond ?? 8e5, r = e.redactionElements ?? [], n = e.redactionBlurRadius;
  let i = null, s = null, o = null, a = null, l = [], c = null, B = null, d = null, f = 0, h = null, w = null, m = !1, g = null;
  function u() {
    d !== null && (clearInterval(d), d = null), g !== null && (clearTimeout(g), g = null), s && (s.stop(), s = null), o && (o.stop(), o = null), i && (i.getTracks().forEach((C) => C.stop()), i = null), a = null, l = [], c = null, B = null, h = null, w = null;
  }
  function p() {
    m || (m = !0, a && a.state !== "inactive" && a.stop());
  }
  return {
    async start() {
      m = !1, l = [];
      const C = _i();
      if (!C)
        throw new Error("No supported video MIME type found");
      i = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15,
          displaySurface: "browser"
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0,
        selfBrowserSurface: "include",
        monitorTypeSurfaces: "exclude",
        surfaceSwitching: "exclude"
      });
      const v = i.getVideoTracks()[0], Q = v?.getSettings?.()?.displaySurface;
      if (Q === "monitor" || Q === "window")
        throw i.getTracks().forEach((y) => y.stop()), i = null, new Error(
          "qaid records only the current tab — please share this tab, not a window or your whole screen."
        );
      v && v.addEventListener("ended", () => {
        p();
      });
      let E = i;
      if (dc()) {
        const y = await fc(i);
        y && (s = y, E = y.stream);
      }
      if (r.length > 0) {
        const y = await pc(E, r, {
          blurRadius: n
        });
        if (!y)
          throw s && (s.stop(), s = null), i.getTracks().forEach((b) => b.stop()), i = null, new Error(Pi);
        o = y, E = y.stream;
      }
      a = new MediaRecorder(E, {
        mimeType: C,
        videoBitsPerSecond: t
      }), a.ondataavailable = (y) => {
        y.data.size > 0 && l.push(y.data);
      }, a.onstop = () => {
        const y = new Blob(l, { type: C });
        h && h(y), B && B(y), s && (s.stop(), s = null), o && (o.stop(), o = null), i && i.getTracks().forEach((b) => b.stop());
      }, a.onerror = () => {
        w && w(new Error("MediaRecorder error"));
      }, a.start(1e3), f = Date.now(), d = setInterval(() => {
        const y = Math.floor((Date.now() - f) / 1e3);
        c && c(y);
      }, 1e3), g = setTimeout(() => {
        p();
      }, A * 1e3);
    },
    stop() {
      return new Promise((C, v) => {
        h = C, w = v, p();
      });
    },
    onTick(C) {
      c = C;
    },
    onStop(C) {
      B = C;
    },
    destroy() {
      p(), u();
    }
  };
}
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REDACTION_UNAVAILABLE: Pi,
  createVideoRecorder: Uc,
  getSupportedMimeType: _i,
  isVideoRecordingSupported: Cc
}, Symbol.toStringTag, { value: "Module" }));
let WA = null;
const Ji = () => Promise.resolve().then(() => jg);
let Wi = Ji;
function Fc(e) {
  Wi = e ?? Ji, WA = null;
}
function mc() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function vc() {
  return WA || (WA = Wi().then(
    (e) => e.default,
    () => (WA = null, null)
  ), WA);
}
async function bc(e = {}) {
  const { quality: A = 0.8, maxWidth: t = 1280, maxHeight: r = 800 } = e;
  try {
    const n = await vc();
    if (!n)
      return console.warn("html2canvas failed to load"), null;
    const i = await n(document.body, {
      useCORS: !0,
      allowTaint: !1,
      logging: !1,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      x: window.scrollX,
      y: window.scrollY,
      ignoreElements: (l) => l instanceof HTMLElement ? l.classList.contains("qaid-buttons") || l.classList.contains("qaid-targeting-overlay") || l.classList.contains("qaid-modal-container") || l.classList.contains("qaid-bottom-sheet") || l.classList.contains("qaid-backdrop") || l.classList.contains("qaid-selected-marker") || l.classList.contains("qaid-tooltip-text") || l.classList.contains("qaid-recording-indicator") || l.classList.contains("qaid-video-preview") || l.className?.toString().startsWith?.("qaid-") : !1
    }), s = i.width, o = i.height, a = Math.min(t / s, r / o, 1);
    if (a < 1) {
      const l = Math.round(s * a), c = Math.round(o * a), B = document.createElement("canvas");
      B.width = l, B.height = c;
      const d = B.getContext("2d");
      return d ? (d.drawImage(i, 0, 0, l, c), B.toDataURL("image/webp", A)) : null;
    }
    return i.toDataURL("image/webp", A);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _setHtml2CanvasImporter: Fc,
  captureDomScreenshot: bc,
  isDomScreenshotSupported: mc
}, Symbol.toStringTag, { value: "Module" })), yc = ".qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .8125);line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .8125);font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}.qaid-annotate-colors{display:flex;gap:.25rem;align-items:center}button.qaid-annotate-swatch{width:28px;height:28px;min-width:28px;padding:0;border-radius:9999px;border:2px solid light-dark(#d1d5db,#4b5563);background:var(--qaid-swatch, #000);cursor:pointer;-webkit-appearance:none;appearance:none;transition:transform .1s,box-shadow .15s,border-color .15s}button.qaid-annotate-swatch:hover{transform:scale(1.12)}button.qaid-annotate-swatch[aria-pressed=true]{border-color:light-dark(#111827,#f9fafb);box-shadow:0 0 0 2px var(--qaid-swatch)}@media(forced-colors:active){button.qaid-annotate-swatch[aria-pressed=true]{outline:2px solid Highlight;outline-offset:1px}}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6365f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6365f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}", NA = 12, Ec = "#ef4444", Hc = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], Ic = {
  "#ef4444": "red",
  "#f59e0b": "amber",
  "#22c55e": "green",
  "#3b82f6": "blue",
  "#111827": "black",
  "#ffffff": "white",
  // The default marker (nudged from #6366f1 so white text on it clears 4.5:1);
  // the old value keeps its name for sites that pass it explicitly.
  "#6365f1": "indigo",
  "#6366f1": "indigo"
};
function vn(e) {
  return Ic[e.toLowerCase()] ?? e;
}
const xc = 4, Lc = 0.8, Sc = {
  title: "Annotate screenshot",
  instructions: "Draw on the screenshot to highlight or hide details, then choose Done to attach it or Skip to send the original.",
  rectangle: "Rectangle",
  arrow: "Arrow",
  pen: "Pen",
  blur: "Blur or redact",
  undo: "Undo last",
  skip: "Skip annotation",
  done: "Done",
  colors: "Drawing colour"
};
function st(e, A) {
  return {
    x: Math.min(e.x, A.x),
    y: Math.min(e.y, A.y),
    w: Math.abs(e.x - A.x),
    h: Math.abs(e.y - A.y)
  };
}
function Kc(e) {
  if (e.type === "pen") return e.points.length < 2;
  const A = st(e.points[0], e.points[1]);
  return A.w < 3 && A.h < 3;
}
function Tc(e, A, t, r) {
  e.beginPath(), e.moveTo(A.x, A.y), e.lineTo(t.x, t.y), e.stroke();
  const n = Math.atan2(t.y - A.y, t.x - A.x), i = Math.max(10, r * 3);
  e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(
    t.x - i * Math.cos(n - Math.PI / 6),
    t.y - i * Math.sin(n - Math.PI / 6)
  ), e.moveTo(t.x, t.y), e.lineTo(
    t.x - i * Math.cos(n + Math.PI / 6),
    t.y - i * Math.sin(n + Math.PI / 6)
  ), e.stroke();
}
function Dc(e, A) {
  if (A.length !== 0) {
    e.beginPath(), e.moveTo(A[0].x, A[0].y);
    for (let t = 1; t < A.length; t++)
      e.lineTo(A[t].x, A[t].y);
    e.stroke();
  }
}
function kc(e, A, t, r, n) {
  e.fillStyle = "rgb(15, 23, 42)", e.fillRect(A, t, r, n), e.fillStyle = "rgb(37, 47, 63)";
  for (let i = t; i < t + n; i += NA)
    for (let s = A; s < A + r; s += NA)
      (Math.floor((s - A) / NA) + Math.floor((i - t) / NA)) % 2 === 0 && e.fillRect(
        s,
        i,
        Math.min(NA, A + r - s),
        Math.min(NA, t + n - i)
      );
}
function ot(e, A) {
  switch (e.save(), e.strokeStyle = A.color, e.fillStyle = A.color, e.lineWidth = A.strokeWidth, e.lineJoin = "round", e.lineCap = "round", A.type) {
    case "rect": {
      const t = st(A.points[0], A.points[1]);
      e.strokeRect(t.x, t.y, t.w, t.h);
      break;
    }
    case "arrow":
      Tc(e, A.points[0], A.points[1], A.strokeWidth);
      break;
    case "pen":
      Dc(e, A.points);
      break;
    case "blur": {
      const t = st(A.points[0], A.points[1]);
      kc(e, t.x, t.y, t.w, t.h);
      break;
    }
  }
  e.restore();
}
function Zi(e) {
  return new Promise((A, t) => {
    const r = new Image();
    r.onload = () => A(r), r.onerror = () => t(new Error("Failed to load screenshot")), r.src = e;
  });
}
async function zi(e, A, t = {}) {
  const r = t.quality ?? Lc;
  let n;
  try {
    n = await Zi(e);
  } catch {
    return e;
  }
  const i = document.createElement("canvas");
  i.width = n.naturalWidth || n.width || 1, i.height = n.naturalHeight || n.height || 1;
  const s = i.getContext("2d");
  if (!s) return e;
  s.drawImage(n, 0, 0, i.width, i.height);
  for (const o of A)
    ot(s, o);
  return i.toDataURL("image/webp", r);
}
let Mc = 0;
class ji {
  shapes = [];
  /** Starts on the pen: drawing freehand is what most people reach for first. */
  tool = "pen";
  opts;
  labels;
  color;
  palette;
  strokeWidth;
  uid = `qaid-annotate-${++Mc}`;
  container;
  canvas;
  ctx = null;
  toolbar;
  undoBtn;
  img = null;
  drawing = !1;
  current = null;
  settled = !1;
  // Assigned in open() before any settle() is reachable (done/skip only fire
  // after the editor is mounted).
  resolveResult;
  constructor(A) {
    this.opts = A, this.labels = { ...Sc, ...A.labels ?? {} }, this.color = A.color ?? Ec, this.palette = (A.palette && A.palette.length ? A.palette : Hc).slice(), this.palette.some((t) => t.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = A.strokeWidth ?? xc;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const A = new Promise((t) => {
      this.resolveResult = t;
    });
    return this.mount(), A;
  }
  toolButton(A, t, r) {
    const n = $("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": A,
      "aria-pressed": A === this.tool ? "true" : "false",
      "aria-label": `${r} tool`,
      title: r
    });
    return n.append(
      MA(null, t),
      $("span", { class: "qaid-annotate-btn-text" }, [r])
    ), n;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(A) {
    const t = vn(A), r = $("button", {
      type: "button",
      class: "qaid-annotate-swatch",
      "data-qaid-color": A,
      "aria-pressed": A.toLowerCase() === this.color.toLowerCase() ? "true" : "false",
      "aria-label": `Draw in ${t}`,
      title: t
    });
    return r.style.setProperty("--qaid-swatch", A), r;
  }
  actionButton(A, t, r, n) {
    const i = $("button", {
      type: "button",
      class: `qaid-annotate-action ${n}`,
      "data-qaid-action": A,
      "aria-label": r,
      title: r
    });
    return i.append(
      MA(null, t),
      $("span", { class: "qaid-annotate-btn-text" }, [r])
    ), i;
  }
  mount() {
    const A = `${this.uid}-title`, t = `${this.uid}-desc`;
    this.container = $("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const r = $("h2", {
      id: A,
      class: "qaid-annotate-title"
    });
    r.textContent = this.labels.title;
    const n = $("p", {
      id: t,
      class: "qaid-annotate-desc"
    });
    n.textContent = this.labels.instructions;
    const i = $("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), i.appendChild(this.canvas), this.toolbar = $("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const s = $("div", { class: "qaid-annotate-tools" });
    s.appendChild(this.toolButton("rect", Wo, this.labels.rectangle)), s.appendChild(this.toolButton("arrow", Yo, this.labels.arrow)), s.appendChild(this.toolButton("pen", xi, this.labels.pen)), s.appendChild(this.toolButton("blur", Zo, this.labels.blur));
    const o = $("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const B of this.palette) o.appendChild(this.swatchButton(B));
    this.undoBtn = this.actionButton("undo", zo, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const a = this.actionButton("skip", $o, this.labels.skip, "qaid-annotate-skip"), l = this.actionButton("done", Li, this.labels.done, "qaid-annotate-done"), c = $("div", { class: "qaid-annotate-actions" });
    c.appendChild(this.undoBtn), c.appendChild(a), c.appendChild(l), this.toolbar.appendChild(s), this.toolbar.appendChild(o), this.toolbar.appendChild(c), this.container.appendChild(r), this.container.appendChild(n), this.container.appendChild(i), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: A,
      describedbyId: t
    }), this.opts.announce?.(this.labels.instructions), Zi(this.opts.dataUrl).then((B) => {
      this.img = B, this.canvas.width = B.naturalWidth || B.width || 1, this.canvas.height = B.naturalHeight || B.height || 1, this.redraw();
    }).catch(() => {
      this.img = null, this.redraw();
    });
  }
  /** Convert a pointer event's client coordinates into natural image pixels. */
  toImageCoords(A) {
    const t = this.canvas.getBoundingClientRect(), r = this.canvas.width / (t.width || this.canvas.width), n = this.canvas.height / (t.height || this.canvas.height);
    return {
      x: (A.clientX - t.left) * r,
      y: (A.clientY - t.top) * n
    };
  }
  /** Repaint the display canvas: base image (if loaded) then every shape. */
  redraw() {
    const A = this.ctx;
    if (A) {
      A.clearRect(0, 0, this.canvas.width, this.canvas.height), this.img && A.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      for (const t of this.shapes)
        ot(A, t);
      this.current && ot(A, this.current);
    }
  }
  /** Select the active drawing tool and reflect it on the toolbar. */
  selectTool(A) {
    this.tool = A, this.toolbar.querySelectorAll("[data-qaid-tool]").forEach((n) => {
      n.setAttribute(
        "aria-pressed",
        n.getAttribute("data-qaid-tool") === A ? "true" : "false"
      );
    });
    const r = this.labels[Oc[A]];
    this.opts.announce?.(`${r} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(A) {
    this.color = A, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((r) => {
      r.setAttribute(
        "aria-pressed",
        (r.getAttribute("data-qaid-color") ?? "").toLowerCase() === A.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${vn(A)} colour selected`);
  }
  onToolbarClick = (A) => {
    const r = A.target?.closest(
      "[data-qaid-tool],[data-qaid-action],[data-qaid-color]"
    );
    if (!r) return;
    const n = r.getAttribute("data-qaid-color");
    if (n) {
      this.selectColor(n);
      return;
    }
    const i = r.getAttribute("data-qaid-tool");
    if (i) {
      this.selectTool(i);
      return;
    }
    const s = r.getAttribute("data-qaid-action");
    s === "undo" ? this.undo() : s === "skip" ? this.skip() : s === "done" && this.done();
  };
  onPointerDown = (A) => {
    A.preventDefault?.(), this.drawing = !0;
    const t = this.toImageCoords(A);
    this.current = {
      type: this.tool,
      color: this.color,
      strokeWidth: this.strokeWidth,
      points: this.tool === "pen" ? [t] : [t, { ...t }]
    }, this.redraw();
  };
  onPointerMove = (A) => {
    if (!this.drawing || !this.current) return;
    const t = this.toImageCoords(A);
    this.current.type === "pen" ? this.current.points.push(t) : this.current.points[1] = t, this.redraw();
  };
  onPointerUp = () => {
    if (!this.drawing || !this.current) return;
    this.drawing = !1;
    const A = this.current;
    if (this.current = null, Kc(A)) {
      this.redraw();
      return;
    }
    this.shapes.push(A), this.undoBtn.disabled = !1, this.opts.announce?.("Annotation added"), this.redraw();
  };
  onKeyDown = (A) => {
    if (A.key === "Escape") {
      A.preventDefault(), this.skip();
      return;
    }
    if (A.key === "Enter") {
      const t = A.target;
      if (t?.getAttribute("data-qaid-tool") || t?.getAttribute("data-qaid-action"))
        return;
      A.preventDefault(), this.done();
    }
  };
  /** Remove the most recently added shape. */
  undo() {
    if (this.shapes.length === 0) {
      this.opts.announce?.("Nothing to undo");
      return;
    }
    this.shapes.pop(), this.undoBtn.disabled = this.shapes.length === 0, this.opts.announce?.("Removed last annotation"), this.redraw();
  }
  /** Composite the annotations and resolve with the new WebP data URL. */
  async done() {
    if (this.settled) return;
    const A = await zi(this.opts.dataUrl, this.shapes, {
      quality: this.opts.quality
    });
    this.opts.announce?.("Annotated screenshot attached"), this.settle(A);
  }
  /** Discard annotations and resolve with `null` (caller keeps the original). */
  skip() {
    this.settled || (this.opts.announce?.("Annotation skipped"), this.settle(null));
  }
  settle(A) {
    this.settled = !0, this.teardown(), this.resolveResult(A);
  }
  teardown() {
    this.toolbar.removeEventListener("click", this.onToolbarClick), this.canvas.removeEventListener("pointerdown", this.onPointerDown), this.container.removeEventListener("pointermove", this.onPointerMove), this.container.removeEventListener("pointerup", this.onPointerUp), this.container.removeEventListener("keydown", this.onKeyDown), this.opts.closeDialog?.(), this.container.remove();
  }
}
const Oc = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function Rc(e) {
  return new ji(e).open();
}
const qc = yc, $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: ji,
  compositeAnnotations: zi,
  drawShape: ot,
  openAnnotationEditor: Rc,
  rectFromPoints: st,
  styles: qc
}, Symbol.toStringTag, { value: "Module" }));
ac(import.meta.url);
const Nc = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function Vc(e) {
  return e.hasAttribute("disabled") ? !0 : e.disabled === !0;
}
function Gc(e) {
  let A = e;
  for (; A; ) {
    if (A.hasAttribute("hidden")) return !0;
    const t = A.style;
    if (t && (t.display === "none" || t.visibility === "hidden" || t.visibility === "collapse"))
      return !0;
    A = A.parentElement;
  }
  return !1;
}
function ar(e) {
  return Array.from(
    e.querySelectorAll(Nc)
  ).filter((t) => !(t.getAttribute("tabindex") === "-1" || t instanceof HTMLInputElement && t.type === "hidden" || t instanceof HTMLAnchorElement && !t.getAttribute("href") || Vc(t) || Gc(t)));
}
function As(e) {
  let A = e.activeElement;
  for (; A && A.shadowRoot && A.shadowRoot.activeElement; )
    A = A.shadowRoot.activeElement;
  return A instanceof HTMLElement ? A : null;
}
function es(e) {
  const A = e.ownerDocument || document;
  let t = !1;
  const r = (i) => {
    if (i.key !== "Tab") return;
    const s = ar(e);
    if (s.length === 0) {
      i.preventDefault(), e.focus();
      return;
    }
    const o = s[0], a = s[s.length - 1], l = As(A), c = l ? s.indexOf(l) !== -1 : !1;
    i.shiftKey ? (!c || l === o) && (i.preventDefault(), a.focus()) : (!c || l === a) && (i.preventDefault(), o.focus());
  };
  e.addEventListener("keydown", r);
  const n = ar(e);
  return n.length > 0 ? n[0].focus() : (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), t = !0), e.focus()), {
    release() {
      e.removeEventListener("keydown", r), t && (e.removeAttribute("tabindex"), t = !1);
    }
  };
}
function ts() {
  return As(document);
}
function rs(e) {
  if (!(!e || typeof e.focus != "function"))
    try {
      e.focus();
    } catch {
    }
}
function ns(e, A = {}) {
  e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), A.labelledbyId && e.setAttribute("aria-labelledby", A.labelledbyId), A.describedbyId && e.setAttribute("aria-describedby", A.describedbyId), A.label && e.setAttribute("aria-label", A.label);
}
function Pc(e, A) {
  let t = e;
  for (; t && t !== A; ) {
    const r = t.parentNode;
    if (r === A) return t;
    if (r && r.host) {
      t = r.host;
      continue;
    }
    if (!r) return null;
    t = r;
  }
  return null;
}
function is(e) {
  const t = (e.ownerDocument || document).body;
  if (!t) return () => {
  };
  const r = Pc(e, t), n = [];
  return Array.from(t.children).forEach((i) => {
    if (!(i instanceof HTMLElement) || r && i === r) return;
    const s = i.inert === !0, o = i.getAttribute("aria-hidden");
    s && o === "true" || (i.inert = !0, i.setAttribute("aria-hidden", "true"), n.push({ el: i, prevInert: s, prevAriaHidden: o }));
  }), function() {
    for (; n.length; ) {
      const s = n.pop();
      s.el.inert = s.prevInert, s.prevAriaHidden === null ? s.el.removeAttribute("aria-hidden") : s.el.setAttribute("aria-hidden", s.prevAriaHidden);
    }
  };
}
function _c(e, A) {
  const t = ts();
  ns(e, A);
  const r = es(e), n = is(e);
  return () => {
    r.release(), n(), rs(t);
  };
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyDialog: ns,
  createFocusTrap: es,
  getFocusable: ar,
  openDialog: _c,
  restoreFocus: rs,
  saveFocus: ts,
  setBackgroundInert: is
}, Symbol.toStringTag, { value: "Module" }));
var Xc = "qaid-embed", yn = "__qaidEmbedTrustedTypes";
function Jc() {
  if (typeof window > "u") return null;
  var e = window, A = e.trustedTypes;
  if (!A || typeof A.createPolicy != "function") return null;
  var t = e[yn];
  if (t) return t;
  var r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), i = null;
  try {
    i = A.createPolicy(Xc, {
      createScriptURL: function(o) {
        if (r[o] === !0) return o;
        throw new TypeError("qaid-embed: refused script URL " + o);
      },
      createScript: function(o) {
        if (n[o] === !0) return o;
        throw new TypeError("qaid-embed: refused inline script");
      }
    });
  } catch {
    i = null;
  }
  var s = { policy: i, allowed: r, allowedScripts: n };
  try {
    Object.defineProperty(e, yn, { value: s, configurable: !0 });
  } catch {
  }
  return s;
}
function Wc(e) {
  var A = Jc();
  return !A || !A.policy ? e : (A.allowed[e] = !0, A.policy.createScriptURL(e));
}
function ss(e, A) {
  return new Promise((t, r) => {
    const n = document.createElement("script");
    n.type = "module", n.integrity = A, n.crossOrigin = "anonymous";
    try {
      n.src = Wc(e);
    } catch {
      console.warn("[thumbs-embed] Trusted Types refused the quests module; add `trusted-types qaid-embed` to the page's CSP to check its hash."), t(!1);
      return;
    }
    n.addEventListener("load", () => {
      n.remove(), t(!0);
    }), n.addEventListener("error", () => {
      n.remove(), r(new Error(`quests module failed to load or failed its integrity check: ${e}`));
    }), (document.head || document.documentElement).appendChild(n);
  });
}
const os = async (e) => (e === jA && await ss(e, ka), import(
  /* @vite-ignore */
  e
));
let as = os, YA = null, je = null;
const at = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
function Yc(e) {
  as = e ?? os, YA = null, je = null, at.clear(), $e.clear();
}
function cs(e, A) {
  return `${e.replace(/\/+$/, "")}/${encodeURIComponent(A)}/definition`;
}
function Zc(e) {
  if (at.has(e)) return Promise.resolve();
  const A = $e.get(e);
  if (A) return A;
  const t = fetch(e, { headers: { Accept: "application/json" } }).then((r) => r.ok ? r.json() : null).then((r) => {
    r && at.set(e, r);
  }).catch(() => {
  }).finally(() => {
    $e.delete(e);
  });
  return $e.set(e, t), t;
}
function ls(e) {
  return YA && je === e || (je = e, YA = Promise.resolve(as(e)).then((A) => {
    const t = A;
    if (!t || typeof t.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return t;
  }).catch((A) => {
    throw YA = null, je = null, A;
  })), YA;
}
async function Bs(e) {
  const A = await ls(e.moduleUrl), t = e.base.replace(/\/+$/, ""), r = cs(t, e.questId), n = (o) => o != null ? { feedbackId: o } : void 0;
  let i;
  const s = e.feedbackId;
  return s instanceof Promise ? i = A.QaidQuests.supports?.asyncMetadata ? s.then(n, () => {
  }) : n(await s.catch(() => null)) : i = n(s ?? null), new A.QaidQuests({
    endpoint: `${t}/responses`,
    configUrl: r,
    // Only a definition already in hand. One still loading is left to the
    // widget, which shows its own loading state instead of nothing.
    questionnaire: at.get(r),
    apiKey: e.apiKey || void 0,
    metadata: i,
    onClose: e.onClose
  });
}
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_QUESTS_MODULE_URL: jA,
  _setQuestsImporter: Yc,
  launchQuest: Bs,
  loadQuestsModule: ls,
  prefetchQuestDefinition: Zc,
  preloadVerifiedModule: ss,
  questDefinitionUrl: cs
}, Symbol.toStringTag, { value: "Module" }));
async function ds(e, A) {
  const t = e.ensureOverlayHost(), r = e.overlayShadowHost, n = r.style.pointerEvents;
  r.style.pointerEvents = "auto";
  try {
    const { openAnnotationEditor: i, styles: s } = await Promise.resolve().then(() => $i);
    return e.addFeatureStyles(s), await i({
      dataUrl: A,
      root: t,
      quality: e.config.screenshotOptions.quality,
      color: e.config.annotationColor,
      palette: e.config.annotationPalette,
      applyVars: (o) => e.applyVars(o),
      announce: (o, a) => e.announceMsg(o, a),
      openDialog: (o, a) => e.openDialogA11y(o, a),
      closeDialog: () => e.closeDialogA11y()
    });
  } catch (i) {
    return console.error("Annotation editor failed to open:", i), null;
  } finally {
    r.style.pointerEvents = n;
  }
}
async function jc(e) {
  const { config: A, feedbackData: t, selectedBounds: r } = e;
  let n = null;
  if (A.captureScreenshot || e.mode === "annotate")
    try {
      if (e.shouldCaptureViaDom()) {
        const { captureDomScreenshot: B } = await Promise.resolve().then(() => Yi);
        n = await B(A.screenshotOptions);
      } else {
        const { captureScreenshot: B } = await Promise.resolve().then(() => ws);
        n = await B(A.screenshotOptions);
      }
      n && e.announceMsg("Screenshot captured");
    } catch (B) {
      console.error("Screenshot capture failed:", B), n = null;
    }
  n && A.annotate && (n = await ds(e, n) ?? n);
  const s = t.elementSelector ? {
    x: r.x,
    y: r.y,
    width: r.width,
    height: r.height
  } : null, o = {
    feedbackType: t.feedbackType,
    pageUrl: window.location.href,
    apiKey: A.apiKey || void 0,
    elementSelector: t.elementSelector,
    elementText: t.elementText,
    consoleErrors: [...t.consoleErrors],
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    clickX: r.clickX,
    clickY: r.clickY,
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    screenshot: n,
    visitorId: e.visitorId,
    metadata: { sessionId: e.sessionId },
    // Include element bounds and user agent for server-side screenshot fallback
    elementBounds: s,
    userAgent: navigator.userAgent
  }, a = $c(e, o);
  e.setFeedbackRecord(a);
  const l = a.then((B) => B?.id ?? null), c = t.feedbackType;
  if (c && c !== "neutral" && await us(e, c, l)) {
    e.resetFeedbackUi();
    return;
  }
  e.setState("MODAL_OPEN");
  try {
    const B = await e.ensureModal();
    if (e.destroyed) return;
    B.open(), e.overlayShadowHost && (e.overlayShadowHost.style.pointerEvents = "auto");
  } catch (B) {
    console.error("Failed to open the feedback modal:", B), e.announceMsg("Thank you for your feedback!", !0), e.resetFeedbackUi();
  }
}
async function $c(e, A) {
  try {
    const t = await fetch(e.config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
    if (t.ok) {
      const r = await t.json();
      return e.announceMsg("Feedback sent"), typeof r.editToken == "string" && r.editToken !== "" ? { id: r.id, editToken: r.editToken } : { id: r.id };
    }
  } catch (t) {
    console.error("Failed to submit feedback:", t), e.announceMsg("Failed to send feedback", !0);
  }
  return null;
}
async function us(e, A, t) {
  const r = e.config.quests, n = r.base && r[A] || "";
  if (!n) return !1;
  try {
    return e.activeQuest?.destroy(), e.activeQuest = await Bs({
      questId: n,
      base: r.base,
      apiKey: r.apiKey || void 0,
      moduleUrl: r.moduleUrl,
      feedbackId: t,
      onClose: () => {
        e.activeQuest = null;
      }
    }), !0;
  } catch (i) {
    return console.error("Failed to launch quest:", i), e.activeQuest = null, !1;
  }
}
const Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  openAnnotationEditor: ds,
  submitFeedback: jc,
  tryLaunchQuest: us
}, Symbol.toStringTag, { value: "Module" })), hs = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Al(e, A, t, r, n) {
  const i = e.y, s = A - (e.y + e.height);
  if (s >= t + r)
    return {
      top: e.y + e.height + r,
      position: "below"
    };
  if (i >= t + r)
    return {
      top: e.y - t - r,
      position: "above"
    };
  const o = s > i ? "below" : "above";
  let a;
  return o === "below" ? a = Math.min(
    e.y + e.height + r,
    A - t - n
  ) : a = Math.max(n, e.y - t - r), { top: a, position: o };
}
function el(e, A, t, r) {
  let i = e.x + e.width / 2 - t / 2;
  return i = Math.max(r, Math.min(i, A - t - r)), i;
}
function tl(e, A, t, r = 24, n = 24) {
  const s = e.clickX - A - n / 2;
  return Math.max(r, Math.min(s, t - r - n / 2));
}
function rl(e, A, t, r = hs) {
  const n = r.height + r.arrowHeight, i = Al(
    e,
    t,
    n,
    r.gap,
    r.viewportPadding
  ), s = el(
    e,
    A,
    r.width,
    r.viewportPadding
  );
  return {
    top: i.top,
    left: s,
    position: i.position
  };
}
function nl(e, A, t, r = hs) {
  const n = rl(e, A, t, r), i = tl(
    e,
    n.left,
    r.width
  );
  return {
    modal: n,
    arrow: { left: i }
  };
}
const il = document;
function H(e, A, ...t) {
  const r = il.createElement(e);
  if (A) {
    if (A.class && (r.className = A.class), A.style && (r.style.cssText = A.style), A.text != null && (r.textContent = A.text), A.attrs)
      for (const n in A.attrs) r.setAttribute(n, A.attrs[n]);
    if (A.on)
      for (const n in A.on) r.addEventListener(n, A.on[n]);
  }
  for (const n of t)
    n != null && n !== !1 && r.append(n);
  return r;
}
const sl = ".qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-type-static{width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, white)}.qaid-type-static svg{width:1.25rem;height:1.25rem}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875)}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:var(--qaid-font-size, 16px);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}.qaid-confirm{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;padding:.5rem 0}.qaid-confirm-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;color:#fff;background:var(--qaid-success, #22c55e);margin-bottom:.25rem;animation:qaid-confirm-pop .28s cubic-bezier(.34,1.56,.64,1)}.qaid-confirm-icon .qaid-icon{width:24px;height:24px}.qaid-confirm-error .qaid-confirm-icon{background:var(--qaid-error, #dc2626)}.qaid-confirm-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:600;color:var(--qaid-text, light-dark(#111827, #f9fafb))}.qaid-confirm-title:focus-visible{outline:2px solid var(--qaid-primary, #6365f1);outline-offset:3px;border-radius:4px}.qaid-confirm-message{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875);color:var(--qaid-text-muted, light-dark(#6b7280, #9ca3af))}.qaid-confirm .qaid-confirm-close{margin-top:.5rem;min-width:96px}@keyframes qaid-confirm-pop{0%{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){.qaid-confirm-icon{animation:none}}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-textarea:focus,button.qaid-btn-submit:focus{outline:2px solid CanvasText;outline-offset:2px}}";
function At(e, A) {
  return JSON.stringify(e.editToken ? { ...A, editToken: e.editToken } : A);
}
class ol {
  constructor(A) {
    this.host = A;
  }
  host;
  modalContainer = null;
  backdrop = null;
  /** Set once the message is sent, so closing does not PATCH over it. */
  finalized = !1;
  open() {
    this.finalized = !1;
    const A = this.host.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.host.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.close()), this.host.applyVars(this.backdrop), this.host.isMobile ? this.showBottomSheet() : this.showPositionedModal(), A.appendChild(this.backdrop), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close() {
    this.host.state === "MODAL_OPEN" && !this.finalized && (this.finalized = !0, this.host.whenFeedbackRecord().then((A) => {
      A?.id && fetch(`${this.host.config.endpoint}/${A.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: At(A, { message: null })
      }).catch((t) => console.error("Failed to finalize feedback:", t));
    })), this.teardown(), this.host.resetFeedbackUi();
  }
  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy() {
    this.teardown();
  }
  teardown() {
    this.host.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  showBottomSheet() {
    const A = this.host.ensureOverlayHost(), t = document.createElement("div");
    t.className = "qaid-bottom-sheet", t.style.zIndex = String(this.host.config.zIndex + 3), t.appendChild(
      H(
        "div",
        { class: "qaid-bottom-sheet-content" },
        H("div", { class: "qaid-bottom-sheet-handle" }),
        this.buildModalContent()
      )
    ), this.host.applyVars(t), A.appendChild(t), this.modalContainer = t, this.setupModalInteractions();
  }
  showPositionedModal() {
    const A = this.host.ensureOverlayHost(), { modal: t, arrow: r } = nl(
      this.host.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.host.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16
      }
    );
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${t.position}`, this.modalContainer.style.top = `${t.top}px`, this.modalContainer.style.left = `${t.left}px`, this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);
    const n = document.createElement("div");
    n.className = "qaid-modal-arrow", n.style.left = `${r.left}px`;
    const i = document.createElement("div");
    i.className = "qaid-modal-box", i.appendChild(this.buildModalContent()), this.modalContainer.appendChild(n), this.modalContainer.appendChild(i), this.host.applyVars(this.modalContainer), A.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  /**
   * The modal's contents, built as nodes rather than an HTML string.
   *
   * Every piece of copy (title, subtitle, placeholder, button) goes in as
   * text, so a `<`, `&` or `"` in a translation shows as written instead of
   * being parsed as markup or cutting an attribute short. Only the icons are
   * markup, because they are documented as SVG/HTML strings.
   */
  buildModalContent() {
    const { config: A, uid: t } = this.host, r = A.text, n = this.host.feedbackData.feedbackType, i = n === "up", s = A.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${A.buttonClass} ${i ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${i ? "qaid-type-up" : "qaid-type-down"}`, o = i ? "Feedback type: positive" : "Feedback type: negative", a = n === "neutral" ? H(
      "span",
      { class: "qaid-type-static", attrs: { "aria-hidden": "true" } },
      MA(A.feedbackIcon, Ii)
    ) : H(
      "button",
      {
        class: s,
        attrs: {
          type: "button",
          title: "Click to switch",
          "aria-pressed": String(i),
          "aria-label": o
        }
      },
      i ? MA(A.positiveIcon, nr) : MA(A.negativeIcon, ir)
    ), l = document.createDocumentFragment();
    return l.append(
      H(
        "div",
        { class: "qaid-modal-header" },
        a,
        H(
          "div",
          { class: "qaid-modal-header-text" },
          H("h3", {
            class: "qaid-modal-title",
            text: r.modalTitle,
            attrs: { id: `qaid-modal-title-${t}` }
          }),
          H("p", {
            class: "qaid-modal-subtitle",
            text: r.modalSubtitle,
            attrs: { id: `qaid-modal-subtitle-${t}` }
          })
        )
      ),
      H("textarea", {
        class: "qaid-textarea",
        attrs: { "aria-label": r.modalSubtitle, placeholder: r.placeholder }
      }),
      H(
        "div",
        { class: "qaid-btn-row" },
        H("button", {
          class: "qaid-btn-submit",
          text: r.skipButton,
          attrs: { type: "button" }
        })
      )
    ), l;
  }
  setupModalInteractions() {
    this.host.openDialogA11y(this.modalContainer, {
      labelledbyId: `qaid-modal-title-${this.host.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.host.uid}`
    });
    const A = this.modalContainer.querySelector(".qaid-textarea"), t = this.modalContainer.querySelector(".qaid-btn-submit");
    A && (setTimeout(() => A.focus(), 100), A.addEventListener("input", () => {
      t && (t.textContent = A.value.trim() ? this.host.config.text.submitButton : this.host.config.text.skipButton);
    })), t && t.addEventListener("click", () => {
      const n = A?.value.trim() || null;
      this.submitMessage(n);
    });
    const r = this.modalContainer.querySelector(".qaid-type-toggle");
    r && r.addEventListener("click", () => {
      const n = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = n, this.host.config.buttonClass ? (r.classList.toggle("qaid-btn-up", n === "up"), r.classList.toggle("qaid-btn-down", n === "down")) : (r.classList.toggle("qaid-type-up", n === "up"), r.classList.toggle("qaid-type-down", n === "down")), n === "up" ? yA(r, this.host.config.positiveIcon, nr) : yA(r, this.host.config.negativeIcon, ir);
      const i = n === "up" ? "Feedback type: positive" : "Feedback type: negative";
      r.setAttribute("aria-pressed", String(n === "up")), r.setAttribute("aria-label", i), this.host.announceMsg(i), this.host.whenFeedbackRecord().then((s) => {
        s?.id && fetch(`${this.host.config.endpoint}/${s.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: At(s, { feedbackType: n })
        }).catch((o) => console.error("Failed to update feedback type:", o));
      });
    });
  }
  async submitMessage(A) {
    let t = null;
    this.finalized = !0;
    const r = await this.host.whenFeedbackRecord();
    if (r?.id)
      try {
        const n = await fetch(`${this.host.config.endpoint}/${r.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: At(r, { message: A })
        });
        t = n.ok, n.ok || console.error("Failed to submit feedback message: HTTP", n.status);
      } catch (n) {
        console.error("Failed to submit feedback message:", n), t = !1;
      }
    if (t === !1) {
      this.showResult(!1);
      return;
    }
    if (t && !this.host.config.hideConfirmation) {
      this.showResult(!0);
      return;
    }
    this.close();
  }
  /**
   * Replace the modal's contents with the outcome: a checkmark and a short
   * acknowledgement, or an error mark and a "not sent" notice.
   *
   * The submit button that had focus is gone by this point, so focus moves to
   * the heading (WCAG 2.4.3) and the message is announced. Mirrors the quests
   * embed's thank-you screen so the two products confirm the same way. Copy
   * goes in as text, never markup.
   */
  showResult(A) {
    const t = this.modalContainer?.querySelector(".qaid-modal-box") ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content") ?? this.modalContainer;
    if (!t) {
      this.close();
      return;
    }
    const r = this.host.config.text, n = A ? r.confirmationTitle : r.errorTitle, i = A ? r.confirmationMessage : r.errorMessage, s = H("h3", {
      class: "qaid-confirm-title",
      text: n,
      attrs: { id: `qaid-confirm-title-${this.host.uid}`, tabindex: "-1" }
    });
    t.textContent = "", t.appendChild(
      H(
        "div",
        { class: A ? "qaid-confirm" : "qaid-confirm qaid-confirm-error" },
        H(
          "span",
          { class: "qaid-confirm-icon", attrs: { "aria-hidden": "true" } },
          MA(null, A ? Li : jo)
        ),
        s,
        H("p", { class: "qaid-confirm-message", text: i }),
        H("button", {
          class: "qaid-btn-submit qaid-confirm-close",
          text: r.confirmationClose,
          attrs: { type: "button" },
          on: { click: () => this.close() }
        })
      )
    ), requestAnimationFrame(() => s.focus()), this.host.announceMsg(`${n} ${i}`, !0);
  }
}
const al = sl, En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalController: ol,
  patchBody: At,
  styles: al
}, Symbol.toStringTag, { value: "Module" })), gs = ["data-comp", "data-qa", "data-testid", "data-id"];
function fs(e, A = document.body) {
  let t = e;
  for (; t && t !== A; ) {
    for (const r of gs) {
      const n = t.getAttribute(r);
      if (n)
        return `${r}="${n}"`;
    }
    t = t.parentElement;
  }
  return null;
}
function cl(e, A = 100) {
  const t = e.textContent?.trim().slice(0, A) || "";
  return t.length === A ? t + "..." : t;
}
function ll(e) {
  let A = 1, t = e.previousElementSibling;
  for (; t; )
    A++, t = t.previousElementSibling;
  return A;
}
function Bl(e) {
  const A = [];
  let t = e;
  for (; t && t !== document.body && t !== document.documentElement; ) {
    const r = t.tagName.toLowerCase(), n = ll(t);
    A.unshift(`${r}:nth-child(${n})`), t = t.parentElement;
  }
  return A.length > 0 ? `body > ${A.join(" > ")}` : "body";
}
function dl(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function ul(e) {
  const A = fs(e);
  return A ? `[${A}]` : e.id ? `#${dl(e.id)}` : Bl(e);
}
function kt(e) {
  const A = cl(e), t = fs(e);
  return { selector: ul(e), text: A, dataAttr: t };
}
const hl = [
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
  ...gs.map((e) => `[${e}]`)
].join(","), gl = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function fl(e) {
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !1;
  const A = e.ownerDocument?.defaultView;
  if (A && typeof A.getComputedStyle == "function") {
    const t = A.getComputedStyle(e);
    if (t.display === "none" || t.visibility === "hidden") return !1;
  }
  return !0;
}
function wl(e = {}) {
  const A = e.root ?? document.body, t = e.selector ?? hl, r = e.isExcluded ?? (() => !1), n = e.isVisible ?? fl;
  return Array.from(A.querySelectorAll(t)).filter(
    (i) => !r(i) && n(i)
  );
}
function Ql(e) {
  const A = e.candidates ?? wl({
    root: e.root,
    selector: e.selector,
    isExcluded: e.isExcluded,
    isVisible: e.isVisible
  }), t = e.moveFocus ?? !0, r = e.eventTarget ?? document, n = /* @__PURE__ */ new Set();
  let i = -1, s = !1;
  const o = e.initial !== void 0 ? e.initial : typeof document < "u" ? document.activeElement : null;
  if (o) {
    const u = A.indexOf(o);
    u >= 0 && (i = u);
  }
  i < 0 && A.length > 0 && (i = 0);
  function a(u) {
    if (!t) return;
    const p = u;
    if (typeof p.focus == "function") {
      u.getAttribute("tabindex") === null && !gl.test(u.tagName) && (u.setAttribute("tabindex", "-1"), n.add(u));
      try {
        p.focus();
      } catch {
      }
    }
  }
  function l() {
    const u = A[i];
    u && (a(u), e.onHighlight?.(u, i));
  }
  function c(u) {
    if (s || A.length === 0) return;
    const p = A.length;
    i = (u % p + p) % p, l();
  }
  function B() {
    c(i + 1);
  }
  function d() {
    c(i - 1);
  }
  function f() {
    return A[i] ?? null;
  }
  function h() {
    s || (s = !0, r.removeEventListener("keydown", g, !0), n.forEach((u) => u.removeAttribute("tabindex")), n.clear());
  }
  function w() {
    if (s) return;
    const u = f();
    h(), u && e.onSelect(u);
  }
  function m() {
    s || (h(), e.onCancel?.());
  }
  function g(u) {
    if (!s)
      switch (u.key) {
        case "Tab":
          u.preventDefault(), u.stopPropagation(), u.shiftKey ? d() : B();
          break;
        case "ArrowDown":
        case "ArrowRight":
          u.preventDefault(), u.stopPropagation(), B();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          u.preventDefault(), u.stopPropagation(), d();
          break;
        case "Enter":
        case " ":
        case "Spacebar":
          u.preventDefault(), u.stopPropagation(), w();
          break;
        case "Escape":
        case "Esc":
          u.preventDefault(), u.stopPropagation(), m();
          break;
      }
  }
  return r.addEventListener("keydown", g, !0), i >= 0 && l(), {
    candidates: A,
    getIndex: () => i,
    getCurrent: f,
    next: B,
    prev: d,
    moveTo: c,
    select: w,
    cancel: m,
    handleKey: g,
    stop: h
  };
}
const pl = ".qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6365f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}@media(forced-colors:active){.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}", Cl = 12;
class Ul {
  constructor(A) {
    this.host = A;
  }
  host;
  mousePos = { x: 0, y: 0 };
  touchStartPos = null;
  overlayContainer = null;
  captureLayer = null;
  crosshairH = null;
  crosshairV = null;
  scope = null;
  highlightBox = null;
  marker = null;
  keyboardController = null;
  boundMouseMove = (A) => this.handleMouseMove(A);
  boundClick = (A) => this.handleClick(A);
  boundTouchStart = (A) => this.handleTouchStart(A);
  boundTouchEnd = (A) => this.handleTouchEnd(A);
  startPointer(A, t) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = A, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, this.mousePos.x = t.clientX, this.mousePos.y = t.clientY, document.body.classList.add("qaid-targeting"), A === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.host.boundKeyDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("click", this.boundClick, !0), document.addEventListener("touchstart", this.boundTouchStart, { passive: !0 }), document.addEventListener("touchend", this.boundTouchEnd, { passive: !1 });
  }
  /**
   * Keyboard-driven targeting. Mirrors startPointer minus the mouse plumbing:
   * no `qaid-targeting` body class (keeps the cursor visible for keyboard
   * users), no mouse reticle, and no document mouse/click listeners. The
   * KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
   */
  startKeyboard(A) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = A, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = Ql({
      isExcluded: (t) => ze(t),
      onHighlight: (t) => {
        const r = t.getBoundingClientRect(), n = this.highlightBox;
        n && (n.style.transform = `translate(${r.left}px, ${r.top}px)`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, n.style.display = "block");
        const { text: i } = kt(t);
        this.host.announceMsg(`Targeting ${i || t.tagName.toLowerCase()}`);
      },
      onSelect: (t) => this.selectKeyboardTarget(t),
      onCancel: () => this.cancel()
    });
  }
  selectKeyboardTarget(A) {
    const t = dn(A, 8);
    Object.assign(this.host.selectedBounds, t, {
      clickX: t.x + t.width / 2,
      clickY: t.y + t.height / 2,
      visible: !0
    });
    const { selector: r, text: n } = kt(A);
    this.host.feedbackData.elementSelector = r, this.host.feedbackData.elementText = n, this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.keyboardController = null, this.host.clearActiveThumb(), this.host.setState("SELECTED"), this.showSelectedMarker(), this.host.submitFeedback();
  }
  createTargetingOverlay() {
    const A = this.host.ensureOverlayHost();
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.host.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer";
    const t = document.createElement("div");
    t.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope";
    for (const r of ["qaid-scope-ring", "qaid-scope-ring-inner", "qaid-scope-dot"]) {
      const n = document.createElement("div");
      n.className = r, this.scope.appendChild(n);
    }
    this.highlightBox = document.createElement("div"), this.highlightBox.className = "qaid-highlight-box", this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(t), this.overlayContainer.appendChild(this.highlightBox), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.crosshairH.style.top = `${this.mousePos.y}px`, this.crosshairV.style.left = `${this.mousePos.x}px`, this.scope.style.left = `${this.mousePos.x}px`, this.scope.style.top = `${this.mousePos.y}px`, this.host.applyVars(this.overlayContainer), A.appendChild(this.overlayContainer);
  }
  handleMouseMove(A) {
    this.updateReticleAt(A.clientX, A.clientY);
  }
  /** Move the crosshair/scope reticle and highlight the element under (x, y). */
  updateReticleAt(A, t) {
    if (this.mousePos.x = A, this.mousePos.y = t, this.crosshairH && (this.crosshairH.style.top = `${t}px`), this.crosshairV && (this.crosshairV.style.left = `${A}px`), this.scope && (this.scope.style.left = `${A}px`, this.scope.style.top = `${t}px`), this.captureLayer && this.host.shadowHost) {
      const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = Bn(A, t, r);
      if (n && !ze(n)) {
        if (this.highlightBox) {
          const i = n.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${i.left}px, ${i.top}px)`, this.highlightBox.style.width = `${i.width}px`, this.highlightBox.style.height = `${i.height}px`, this.highlightBox.style.display = "block";
        }
      } else this.highlightBox && (this.highlightBox.style.display = "none");
    }
  }
  handleClick(A) {
    A.preventDefault(), A.stopPropagation(), this.selectAt(A.clientX, A.clientY);
  }
  // ---- Touch targeting (iOS/iPadOS) ----
  handleTouchStart(A) {
    const t = A.touches[0];
    t && (this.touchStartPos = { x: t.clientX, y: t.clientY }, this.updateReticleAt(t.clientX, t.clientY));
  }
  handleTouchEnd(A) {
    const t = A.changedTouches[0], r = this.touchStartPos;
    this.touchStartPos = null, !(!t || !r || Math.hypot(t.clientX - r.x, t.clientY - r.y) > Cl) && (A.preventDefault(), this.selectAt(t.clientX, t.clientY));
  }
  /** Select the element under (x, y) and tear down targeting. */
  selectAt(A, t) {
    const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = Bn(A, t, r);
    if (!n || ze(n))
      return;
    const i = dn(n, 8);
    Object.assign(this.host.selectedBounds, i, { clickX: A, clickY: t, visible: !0 });
    const { selector: s, text: o } = kt(n);
    this.host.feedbackData.elementSelector = s, this.host.feedbackData.elementText = o, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.setState("SELECTED"), this.host.clearActiveThumb(), this.showSelectedMarker(), this.host.submitFeedback();
  }
  stopTargetingListeners() {
    this.removeTargetingOverlay(), this.touchStartPos = null, document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("touchstart", this.boundTouchStart), document.removeEventListener("touchend", this.boundTouchEnd), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  cancel() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.clearActiveThumb(), this.host.setState("IDLE"), this.host.feedbackData.feedbackType = null, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    const A = this.host.ensureOverlayHost();
    this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.host.selectedBounds.x}px`, this.marker.style.top = `${this.host.selectedBounds.y}px`, this.marker.style.width = `${this.host.selectedBounds.width}px`, this.marker.style.height = `${this.host.selectedBounds.height}px`, this.marker.style.zIndex = String(this.host.config.zIndex + 1), this.host.applyVars(this.marker), A.appendChild(this.marker);
  }
  hideMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  /** Full teardown for embed.destroy(). */
  destroy() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), this.hideMarker();
  }
}
const Fl = pl, Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TargetingController: Ul,
  styles: Fl
}, Symbol.toStringTag, { value: "Module" })), ml = ".qaid-recording-indicator{position:fixed;pointer-events:auto;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:calc(var(--qaid-font-size, 16px) * .75);font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .875);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-error{margin:0 0 .75rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;color:light-dark(#b91c1c,#fca5a5)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);color:light-dark(#6b7280,#9ca3af)}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}button.qaid-recording-stop{min-height:24px}.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}}";
class vl {
  constructor(A) {
    this.host = A;
  }
  host;
  videoRecorder = null;
  networkCapture = null;
  recordedBlob = null;
  recordingIndicator = null;
  videoPreview = null;
  isRecording = !1;
  isSendingVideo = !1;
  // Pre-recording redaction picking.
  redactPicks = [];
  redactPickerRoot = null;
  redactRafId = 0;
  boundRedactClick = (A) => this.handleRedactPickClick(A);
  /** Escape-key handler; returns true when it consumed the key. */
  handleEscape() {
    return this.isRecording ? (this.stopRecording(), !0) : this.videoPreview ? (this.cancelRecordingPreview(), !0) : this.redactPickerRoot ? (this.finishRedactionPicking(!1), !0) : !1;
  }
  destroy() {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null), this.redactPicks = [], this.cleanupRecording(), this.removeVideoPreview();
  }
  async startRecording(A = []) {
    if (!(this.isRecording || this.host.state !== "IDLE"))
      try {
        this.networkCapture = Bc();
        const { createVideoRecorder: t } = await Promise.resolve().then(() => Xi);
        this.videoRecorder = t({
          maxDuration: this.host.config.videoOptions.maxDuration,
          redactionElements: A
        }), this.videoRecorder.onTick((r) => {
          this.updateRecordingTimer(r);
        }), this.videoRecorder.onStop((r) => {
          this.isRecording && (this.recordedBlob = r, this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.host.setButtonsDisabled(!1), r && r.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.host.announceMsg("Recording started"), this.host.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.host.boundKeyDown);
      } catch (t) {
        t instanceof Error && /current tab|cannot blur/i.test(t.message) && this.host.announceMsg(t.message), this.cleanupRecording();
      }
  }
  async stopRecording() {
    if (!(!this.isRecording || !this.videoRecorder)) {
      this.isRecording = !1;
      try {
        this.recordedBlob = await this.videoRecorder.stop();
      } catch {
        this.recordedBlob = null;
      }
      this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
    }
  }
  /**
   * Pre-recording redaction picker. The user clicks page areas to blur; each
   * gets an outline that tracks its position, then "Start recording" hands the
   * picks to the recorder, which blurs their live bounding boxes so the
   * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
   */
  startPicking() {
    if (this.isRecording || this.host.state !== "IDLE") return;
    this.host.setState("REDACT_PICKING"), this.redactPicks = [];
    const A = this.host.ensureOverlayHost(), t = H("div", { style: "position:absolute;inset:0;" }), r = H(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      t,
      // Control bar — the only pointer-interactive part of the overlay.
      H(
        "div",
        {
          style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;pointer-events:auto;background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);"
        },
        H("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" }
        }),
        H("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!0) }
        }),
        H("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!1) }
        })
      )
    );
    A.appendChild(r), this.redactPickerRoot = r;
    const n = () => {
      this.renderRedactPicks(t), this.redactRafId = requestAnimationFrame(n);
    };
    n(), document.addEventListener("click", this.boundRedactClick, !0), document.addEventListener("keydown", this.host.boundKeyDown), this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }
  handleRedactPickClick(A) {
    const t = A.target instanceof Element ? A.target : null;
    if (!t || ze(t) || this.redactPickerRoot?.contains(t)) return;
    A.preventDefault(), A.stopPropagation();
    const r = this.redactPicks.indexOf(t);
    r >= 0 ? this.redactPicks.splice(r, 1) : this.redactPicks.push(t);
    const n = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (n) {
      const i = this.redactPicks.length;
      n.textContent = i === 0 ? "Click sensitive areas to blur" : `${i} area${i === 1 ? "" : "s"} will be blurred`;
    }
  }
  renderRedactPicks(A) {
    A.textContent = "";
    for (const t of this.redactPicks) {
      const r = t.getBoundingClientRect();
      r.width <= 0 || r.height <= 0 || A.appendChild(
        H("div", {
          style: `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;`
        })
      );
    }
  }
  finishRedactionPicking(A) {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), document.removeEventListener("keydown", this.host.boundKeyDown), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null);
    const t = this.redactPicks;
    this.redactPicks = [], this.host.setState("IDLE"), A && this.startRecording(t);
  }
  showRecordingIndicator() {
    const A = this.host.ensureOverlayHost();
    this.recordingIndicator = H(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      H("div", { class: "qaid-recording-dot" }),
      H("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration)
      }),
      H("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() }
      })
    ), this.host.applyVars(this.recordingIndicator), A.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(A) {
    if (!this.recordingIndicator) return;
    const t = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (t) {
      const r = Math.max(0, this.host.config.videoOptions.maxDuration - A);
      t.textContent = this.formatTime(r), r > 0 && r <= 5 && this.host.announceMsg(`${r} second${r === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(A) {
    const t = Math.floor(A / 60), r = A % 60;
    return `${t}:${r.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const A = this.host.ensureOverlayHost(), t = URL.createObjectURL(this.recordedBlob), r = `qaid-video-title-${this.host.uid}`, n = H("h3", { text: "Review your recording", attrs: { id: r } }), i = H("video");
    i.src = t, i.controls = !0, i.autoplay = !0, i.muted = !0;
    const s = H("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded"
      }
    }), o = H("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(s.value.trim() || null, o) }
    }), a = H(
      "div",
      { class: "qaid-video-preview-box" },
      n,
      i,
      s,
      H(
        "div",
        { class: "qaid-video-preview-actions" },
        H("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() }
        }),
        H("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview(), this.startRecording();
            }
          }
        }),
        o
      )
    );
    this.videoPreview = H(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      a
    ), this.host.applyVars(this.videoPreview), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), A.appendChild(this.videoPreview), this.host.openDialogA11y(a, { labelledbyId: n.id }), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.host.closeDialogA11y(), this.videoPreview) {
      const A = this.videoPreview.querySelector("video");
      A?.src && URL.revokeObjectURL(A.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  async submitVideoFeedback(A, t) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, t.disabled = !0, t.textContent = "Sending...";
    const r = new FormData();
    r.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), r.append("pageUrl", window.location.href), r.append("visitorId", this.host.visitorId), this.host.config.apiKey && r.append("apiKey", this.host.config.apiKey), A && r.append("message", A), this.host.consoleCapture && r.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors)), this.networkCapture && r.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let n = null, i = null;
    try {
      const s = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: r
      });
      if (s.ok) {
        this.host.announceMsg("Recording sent");
        try {
          n = (await s.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await s.text()), i = s.status === 413 ? "This recording is too large to send. Try a shorter one." : "Your recording could not be sent.";
    } catch (s) {
      console.error("Failed to submit video feedback:", s), i = "Your recording could not be sent. Check your connection and try again.";
    }
    if (this.isSendingVideo = !1, i) {
      this.showSendError(i, t);
      return;
    }
    this.removeVideoPreview(), this.cleanupRecording(), await this.host.tryLaunchQuest("video", n);
  }
  /**
   * Keep the preview open and say the upload failed. Closing it, as a success
   * does, told the visitor their recording had arrived when it had not. Send
   * is re-enabled for another try; Cancel and Re-record still work.
   */
  showSendError(A, t) {
    this.host.announceMsg(`Failed to send recording. ${A}`, !0), t.disabled = !1, t.textContent = "Send";
    const r = this.videoPreview?.querySelector(".qaid-video-preview-actions");
    if (r) {
      let n = this.videoPreview.querySelector(".qaid-video-error");
      n || (n = H("p", { class: "qaid-video-error" }), r.before(n)), n.textContent = A;
    }
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.host.setButtonsDisabled(!1), this.host.overlayShadowHost && this.host.state === "IDLE" && (this.host.overlayShadowHost.style.pointerEvents = "none");
  }
}
const bl = ml, In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RecordingController: vl,
  styles: bl
}, Symbol.toStringTag, { value: "Module" }));
async function yl(e = {}) {
  const { quality: A = 0.8, maxWidth: t = 1280, maxHeight: r = 800 } = e;
  try {
    if (!navigator.mediaDevices?.getDisplayMedia)
      return console.warn("Screen Capture API not available"), null;
    const n = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), i = n.getVideoTracks()[0], s = i.getSettings(), o = document.createElement("video");
    o.srcObject = n, o.muted = !0, await new Promise((w) => {
      o.onloadedmetadata = () => {
        o.play(), w();
      };
    }), await new Promise((w) => {
      const m = () => {
        o.readyState >= 2 ? w() : requestAnimationFrame(m);
      };
      m();
    }), await new Promise((w) => setTimeout(w, 100));
    const a = s.width || o.videoWidth, l = s.height || o.videoHeight, c = Math.min(t / a, r / l, 1), B = Math.round(a * c), d = Math.round(l * c), f = document.createElement("canvas");
    f.width = B, f.height = d;
    const h = f.getContext("2d");
    return h ? (h.drawImage(o, 0, 0, B, d), i.stop(), f.toDataURL("image/webp", A)) : (i.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureScreenshot: yl
}, Symbol.toStringTag, { value: "Module" }));
var cr = function(e, A) {
  return cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, cr(e, A);
};
function lA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  cr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var lr = function() {
  return lr = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i]);
    }
    return A;
  }, lr.apply(this, arguments);
};
function Z(e, A, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function o(c) {
      try {
        l(r.next(c));
      } catch (B) {
        s(B);
      }
    }
    function a(c) {
      try {
        l(r.throw(c));
      } catch (B) {
        s(B);
      }
    }
    function l(c) {
      c.done ? i(c.value) : n(c.value).then(o, a);
    }
    l((r = r.apply(e, [])).next());
  });
}
function W(e, A) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, n, i, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return a([l, c]);
    };
  }
  function a(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, n && (i = l[0] & 2 ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
      switch (n = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, n = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = l;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(l);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = A.call(e, t);
    } catch (c) {
      l = [6, c], n = 0;
    } finally {
      r = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function He(e, A, t) {
  if (arguments.length === 2) for (var r = 0, n = A.length, i; r < n; r++)
    (i || !(r in A)) && (i || (i = Array.prototype.slice.call(A, 0, r)), i[r] = A[r]);
  return e.concat(i || A);
}
var FA = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.left = A, this.top = t, this.width = r, this.height = n;
    }
    return e.prototype.add = function(A, t, r, n) {
      return new e(this.left + A, this.top + t, this.width + r, this.height + n);
    }, e.fromClientRect = function(A, t) {
      return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
    }, e.fromDOMRectList = function(A, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  })()
), Ct = function(e, A) {
  return FA.fromClientRect(e, A.getBoundingClientRect());
}, El = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new FA(0, 0, r, n);
}, Ut = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, M = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, i = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ie = 0; Ie < xn.length; Ie++)
  Hl[xn.charCodeAt(Ie)] = Ie;
var Ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var xe = 0; xe < Ln.length; xe++)
  oe[Ln.charCodeAt(xe)] = xe;
var Il = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = oe[e.charCodeAt(r)], s = oe[e.charCodeAt(r + 1)], o = oe[e.charCodeAt(r + 2)], a = oe[e.charCodeAt(r + 3)], c[n++] = i << 2 | s >> 4, c[n++] = (s & 15) << 4 | o >> 2, c[n++] = (o & 3) << 6 | a & 63;
  return l;
}, xl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Ll = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, RA = 5, Sr = 11, Mt = 2, Sl = Sr - RA, Qs = 65536 >> RA, Kl = 1 << RA, Ot = Kl - 1, Tl = 1024 >> RA, Dl = Qs + Tl, kl = Dl, Ml = 32, Ol = kl + Ml, Rl = 65536 >> Sr, ql = 1 << Sl, Nl = ql - 1, Sn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Vl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Gl = function(e, A) {
  var t = Il(e), r = Array.isArray(t) ? Ll(t) : new Uint32Array(t), n = Array.isArray(t) ? xl(t) : new Uint16Array(t), i = 24, s = Sn(n, i / 2, r[4] / 2), o = r[5] === 2 ? Sn(n, (i + r[4]) / 2) : Vl(r, Math.ceil((i + r[4]) / 4));
  return new Pl(r[0], r[1], r[2], r[3], s, o);
}, Pl = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> RA], t = (t << Mt) + (A & Ot), this.data[t];
        if (A <= 65535)
          return t = this.index[Qs + (A - 55296 >> RA)], t = (t << Mt) + (A & Ot), this.data[t];
        if (A < this.highStart)
          return t = Ol - Rl + (A >> Sr), t = this.index[t], t += A >> RA & Nl, t = this.index[t], t = (t << Mt) + (A & Ot), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _l = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Le = 0; Le < Kn.length; Le++)
  _l[Kn.charCodeAt(Le)] = Le;
var Xl = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Tn = 50, Jl = 1, ps = 2, Cs = 3, Wl = 4, Yl = 5, Dn = 7, Us = 8, kn = 9, HA = 10, Br = 11, Mn = 12, dr = 13, Zl = 14, ae = 15, ur = 16, Se = 17, re = 18, zl = 19, On = 20, hr = 21, ne = 22, Rt = 23, VA = 24, AA = 25, ce = 26, le = 27, GA = 28, jl = 29, kA = 30, $l = 31, Ke = 32, Te = 33, gr = 34, fr = 35, wr = 36, Ue = 37, Qr = 38, et = 39, tt = 40, qt = 41, Fs = 42, AB = 43, eB = [9001, 65288], ms = "!", I = "×", De = "÷", pr = Gl(Xl), pA = [kA, wr], Cr = [Jl, ps, Cs, Yl], vs = [HA, Us], Rn = [le, ce], tB = Cr.concat(vs), qn = [Qr, et, tt, gr, fr], rB = [ae, dr], nB = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(i, s) {
    var o = pr.get(i);
    if (o > Tn ? (n.push(!0), o -= Tn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(s), t.push(ur);
    if (o === Wl || o === Br) {
      if (s === 0)
        return r.push(s), t.push(kA);
      var a = t[s - 1];
      return tB.indexOf(a) === -1 ? (r.push(r[s - 1]), t.push(a)) : (r.push(s), t.push(kA));
    }
    if (r.push(s), o === $l)
      return t.push(A === "strict" ? hr : Ue);
    if (o === Fs || o === jl)
      return t.push(kA);
    if (o === AB)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Ue) : t.push(kA);
    t.push(o);
  }), [r, t, n];
}, Nt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var i = t; i <= r.length; ) {
      i++;
      var s = r[i];
      if (s === A)
        return !0;
      if (s !== HA)
        break;
    }
  if (n === HA)
    for (var i = t; i > 0; ) {
      i--;
      var o = r[i];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var a = t; a <= r.length; ) {
          a++;
          var s = r[a];
          if (s === A)
            return !0;
          if (s !== HA)
            break;
        }
      if (o !== HA)
        break;
    }
  return !1;
}, Nn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === HA)
      t--;
    else
      return r;
  }
  return 0;
}, iB = function(e, A, t, r, n) {
  if (t[r] === 0)
    return I;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return I;
  var s = i - 1, o = i + 1, a = A[i], l = s >= 0 ? A[s] : 0, c = A[o];
  if (a === ps && c === Cs)
    return I;
  if (Cr.indexOf(a) !== -1)
    return ms;
  if (Cr.indexOf(c) !== -1 || vs.indexOf(c) !== -1)
    return I;
  if (Nn(i, A) === Us)
    return De;
  if (pr.get(e[i]) === Br || (a === Ke || a === Te) && pr.get(e[o]) === Br || a === Dn || c === Dn || a === kn || [HA, dr, ae].indexOf(a) === -1 && c === kn || [Se, re, zl, VA, GA].indexOf(c) !== -1 || Nn(i, A) === ne || Nt(Rt, ne, i, A) || Nt([Se, re], hr, i, A) || Nt(Mn, Mn, i, A))
    return I;
  if (a === HA)
    return De;
  if (a === Rt || c === Rt)
    return I;
  if (c === ur || a === ur)
    return De;
  if ([dr, ae, hr].indexOf(c) !== -1 || a === Zl || l === wr && rB.indexOf(a) !== -1 || a === GA && c === wr || c === On || pA.indexOf(c) !== -1 && a === AA || pA.indexOf(a) !== -1 && c === AA || a === le && [Ue, Ke, Te].indexOf(c) !== -1 || [Ue, Ke, Te].indexOf(a) !== -1 && c === ce || pA.indexOf(a) !== -1 && Rn.indexOf(c) !== -1 || Rn.indexOf(a) !== -1 && pA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [le, ce].indexOf(a) !== -1 && (c === AA || [ne, ae].indexOf(c) !== -1 && A[o + 1] === AA) || // ( OP | HY ) × NU
  [ne, ae].indexOf(a) !== -1 && c === AA || // NU ×	(NU | SY | IS)
  a === AA && [AA, GA, VA].indexOf(c) !== -1)
    return I;
  if ([AA, GA, VA, Se, re].indexOf(c) !== -1)
    for (var B = i; B >= 0; ) {
      var d = A[B];
      if (d === AA)
        return I;
      if ([GA, VA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if ([le, ce].indexOf(c) !== -1)
    for (var B = [Se, re].indexOf(a) !== -1 ? s : i; B >= 0; ) {
      var d = A[B];
      if (d === AA)
        return I;
      if ([GA, VA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if (Qr === a && [Qr, et, gr, fr].indexOf(c) !== -1 || [et, gr].indexOf(a) !== -1 && [et, tt].indexOf(c) !== -1 || [tt, fr].indexOf(a) !== -1 && c === tt || qn.indexOf(a) !== -1 && [On, ce].indexOf(c) !== -1 || qn.indexOf(c) !== -1 && a === le || pA.indexOf(a) !== -1 && pA.indexOf(c) !== -1 || a === VA && pA.indexOf(c) !== -1 || pA.concat(AA).indexOf(a) !== -1 && c === ne && eB.indexOf(e[o]) === -1 || pA.concat(AA).indexOf(c) !== -1 && a === re)
    return I;
  if (a === qt && c === qt) {
    for (var f = t[i], h = 1; f > 0 && (f--, A[f] === qt); )
      h++;
    if (h % 2 !== 0)
      return I;
  }
  return a === Ke && c === Te ? I : De;
}, sB = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = nB(e, A.lineBreak), r = t[0], n = t[1], i = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(o) {
    return [AA, kA, Fs].indexOf(o) !== -1 ? Ue : o;
  }));
  var s = A.wordBreak === "keep-all" ? i.map(function(o, a) {
    return o && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [r, n, s];
}, oB = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === ms, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return M.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  })()
), aB = function(e, A) {
  var t = Ut(e), r = sB(t, A), n = r[0], i = r[1], s = r[2], o = t.length, a = 0, l = 0;
  return {
    next: function() {
      if (l >= o)
        return { done: !0, value: null };
      for (var c = I; l < o && (c = iB(t, i, n, ++l, s)) === I; )
        ;
      if (c !== I || l === o) {
        var B = new oB(t, c, a, l);
        return a = l, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, cB = 1, lB = 2, ve = 4, Vn = 8, ct = 10, Gn = 47, fe = 92, BB = 9, dB = 32, ke = 34, ie = 61, uB = 35, hB = 36, gB = 37, Me = 39, Oe = 40, se = 41, fB = 95, z = 45, wB = 33, QB = 60, pB = 62, CB = 64, UB = 91, FB = 93, mB = 61, vB = 123, Re = 63, bB = 125, Pn = 124, yB = 126, EB = 128, _n = 65533, Vt = 42, OA = 43, HB = 44, IB = 58, xB = 59, Fe = 46, LB = 0, SB = 8, KB = 11, TB = 14, DB = 31, kB = 127, uA = -1, bs = 48, ys = 97, Es = 101, MB = 102, OB = 117, RB = 122, Hs = 65, Is = 69, xs = 70, qB = 85, NB = 90, Y = function(e) {
  return e >= bs && e <= 57;
}, VB = function(e) {
  return e >= 55296 && e <= 57343;
}, PA = function(e) {
  return Y(e) || e >= Hs && e <= xs || e >= ys && e <= MB;
}, GB = function(e) {
  return e >= ys && e <= RB;
}, PB = function(e) {
  return e >= Hs && e <= NB;
}, _B = function(e) {
  return GB(e) || PB(e);
}, XB = function(e) {
  return e >= EB;
}, qe = function(e) {
  return e === ct || e === BB || e === dB;
}, lt = function(e) {
  return _B(e) || XB(e) || e === fB;
}, Xn = function(e) {
  return lt(e) || Y(e) || e === z;
}, JB = function(e) {
  return e >= LB && e <= SB || e === KB || e >= TB && e <= DB || e === kB;
}, EA = function(e, A) {
  return e !== fe ? !1 : A !== ct;
}, Ne = function(e, A, t) {
  return e === z ? lt(A) || EA(A, t) : lt(e) ? !0 : !!(e === fe && EA(e, A));
}, Gt = function(e, A, t) {
  return e === OA || e === z ? Y(A) ? !0 : A === Fe && Y(t) : Y(e === Fe ? A : e);
}, WB = function(e) {
  var A = 0, t = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (t = -1), A++);
  for (var r = []; Y(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(M.apply(void 0, r), 10) : 0;
  e[A] === Fe && A++;
  for (var i = []; Y(e[A]); )
    i.push(e[A++]);
  var s = i.length, o = s ? parseInt(M.apply(void 0, i), 10) : 0;
  (e[A] === Is || e[A] === Es) && A++;
  var a = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (a = -1), A++);
  for (var l = []; Y(e[A]); )
    l.push(e[A++]);
  var c = l.length ? parseInt(M.apply(void 0, l), 10) : 0;
  return t * (n + o * Math.pow(10, -s)) * Math.pow(10, a * c);
}, YB = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, ZB = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, zB = {
  type: 4
  /* COMMA_TOKEN */
}, jB = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, $B = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Ad = {
  type: 21
  /* COLUMN_TOKEN */
}, ed = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, td = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, rd = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, nd = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, id = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Ve = {
  type: 23
  /* BAD_URL_TOKEN */
}, sd = {
  type: 1
  /* BAD_STRING_TOKEN */
}, od = {
  type: 25
  /* CDO_TOKEN */
}, ad = {
  type: 24
  /* CDC_TOKEN */
}, cd = {
  type: 26
  /* COLON_TOKEN */
}, ld = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Bd = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, dd = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, ud = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Ur = {
  type: 32
  /* EOF_TOKEN */
}, Ls = (
  /** @class */
  (function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Ut(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Ur; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case ke:
          return this.consumeStringToken(ke);
        case uB:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Xn(t) || EA(r, n)) {
            var i = Ne(t, r, n) ? lB : cB, s = this.consumeName();
            return { type: 5, value: s, flags: i };
          }
          break;
        case hB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), jB;
          break;
        case Me:
          return this.consumeStringToken(Me);
        case Oe:
          return YB;
        case se:
          return ZB;
        case Vt:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), id;
          break;
        case OA:
          if (Gt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case HB:
          return zB;
        case z:
          var o = A, a = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Gt(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Ne(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (a === z && l === pB)
            return this.consumeCodePoint(), this.consumeCodePoint(), ad;
          break;
        case Fe:
          if (Gt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Gn:
          if (this.peekCodePoint(0) === Vt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Vt && (c = this.consumeCodePoint(), c === Gn))
                return this.consumeToken();
              if (c === uA)
                return this.consumeToken();
            }
          break;
        case IB:
          return cd;
        case xB:
          return ld;
        case QB:
          if (this.peekCodePoint(0) === wB && this.peekCodePoint(1) === z && this.peekCodePoint(2) === z)
            return this.consumeCodePoint(), this.consumeCodePoint(), od;
          break;
        case CB:
          var B = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Ne(B, d, f)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case UB:
          return Bd;
        case fe:
          if (EA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case FB:
          return dd;
        case mB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), $B;
          break;
        case vB:
          return rd;
        case bB:
          return nd;
        case OB:
        case qB:
          var h = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return h === OA && (PA(w) || w === Re) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Pn:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), ed;
          if (this.peekCodePoint(0) === Pn)
            return this.consumeCodePoint(), Ad;
          break;
        case yB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), td;
          break;
        case uA:
          return Ur;
      }
      return qe(A) ? (this.consumeWhiteSpace(), ud) : Y(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : lt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: M(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); PA(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Re && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(M.apply(void 0, A.map(function(a) {
          return a === Re ? bs : a;
        })), 16), i = parseInt(M.apply(void 0, A.map(function(a) {
          return a === Re ? xs : a;
        })), 16);
        return { type: 30, start: n, end: i };
      }
      var s = parseInt(M.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === z && PA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var o = []; PA(t) && o.length < 6; )
          o.push(t), t = this.consumeCodePoint();
        var i = parseInt(M.apply(void 0, o), 16);
        return { type: 30, start: s, end: i };
      } else
        return { type: 30, start: s, end: s };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Oe ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Oe ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === uA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Me || t === ke) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === uA || this.peekCodePoint(0) === se) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Ve);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === uA || n === se)
          return { type: 22, value: M.apply(void 0, A) };
        if (qe(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === uA || this.peekCodePoint(0) === se ? (this.consumeCodePoint(), { type: 22, value: M.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Ve);
        if (n === ke || n === Me || n === Oe || JB(n))
          return this.consumeBadUrlRemnants(), Ve;
        if (n === fe)
          if (EA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Ve;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; qe(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === se || A === uA)
          return;
        EA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += M.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === uA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === ct)
          return this._value.splice(0, r), sd;
        if (n === fe) {
          var i = this._value[r + 1];
          i !== uA && i !== void 0 && (i === ct ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : EA(n, i) && (t += this.consumeStringSlice(r), t += M(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = ve, r = this.peekCodePoint(0);
      for ((r === OA || r === z) && A.push(this.consumeCodePoint()); Y(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Fe && Y(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Vn; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === Is || r === Es) && ((n === OA || n === z) && Y(i) || Y(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Vn; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [WB(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (Ne(n, i, s)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return n === gB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (PA(A)) {
        for (var t = M(A); PA(this.peekCodePoint(0)) && t.length < 6; )
          t += M(this.consumeCodePoint());
        qe(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || VB(r) || r > 1114111 ? _n : r;
      }
      return A === uA ? _n : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Xn(t))
          A += M(t);
        else if (EA(t, this.peekCodePoint(0)))
          A += M(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  })()
), Ss = (
  /** @class */
  (function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Ls();
      return t.write(A), new e(t.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var t = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return A;
        A.push(t), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || gd(r, A))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var t = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? Ur : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  })()
), be = function(e) {
  return e.type === 15;
}, te = function(e) {
  return e.type === 17;
}, S = function(e) {
  return e.type === 20;
}, hd = function(e) {
  return e.type === 0;
}, Fr = function(e, A) {
  return S(e) && e.value === A;
}, Ks = function(e) {
  return e.type !== 31;
}, ee = function(e) {
  return e.type !== 31 && e.type !== 4;
}, hA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, gd = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, KA = function(e) {
  return e.type === 17 || e.type === 15;
}, R = function(e) {
  return e.type === 16 || KA(e);
}, Ts = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, P = {
  type: 17,
  number: 0,
  flags: ve
}, Kr = {
  type: 16,
  number: 50,
  flags: ve
}, IA = {
  type: 16,
  number: 100,
  flags: ve
}, Be = function(e, A, t) {
  var r = e[0], n = e[1];
  return [K(r, A), K(typeof n < "u" ? n : r, t)];
}, K = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (be(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Ds = "deg", ks = "grad", Ms = "rad", Os = "turn", Ft = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Ds:
          return Math.PI * A.number / 180;
        case ks:
          return Math.PI / 200 * A.number;
        case Ms:
          return A.number;
        case Os:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Rs = function(e) {
  return e.type === 15 && (e.unit === Ds || e.unit === ks || e.unit === Ms || e.unit === Os);
}, qs = function(e) {
  var A = e.filter(S).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [P, P];
    case "to top":
    case "bottom":
      return nA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [P, IA];
    case "to right":
    case "left":
      return nA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [IA, IA];
    case "to bottom":
    case "top":
      return nA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [IA, P];
    case "to left":
    case "right":
      return nA(270);
  }
  return 0;
}, nA = function(e) {
  return Math.PI * e / 180;
}, LA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = fd[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3);
        return xA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return xA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6);
        return xA(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return xA(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var o = UA[A.value.toUpperCase()];
      if (typeof o < "u")
        return o;
    }
    return UA.TRANSPARENT;
  }
}, SA = function(e) {
  return (255 & e) === 0;
}, N = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, xA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Jn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Wn = function(e, A) {
  var t = A.filter(ee);
  if (t.length === 3) {
    var r = t.map(Jn), n = r[0], i = r[1], s = r[2];
    return xA(n, i, s, 1);
  }
  if (t.length === 4) {
    var o = t.map(Jn), n = o[0], i = o[1], s = o[2], a = o[3];
    return xA(n, i, s, a);
  }
  return 0;
};
function Pt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Yn = function(e, A) {
  var t = A.filter(ee), r = t[0], n = t[1], i = t[2], s = t[3], o = (r.type === 17 ? nA(r.number) : Ft.parse(e, r)) / (Math.PI * 2), a = R(n) ? n.number / 100 : 0, l = R(i) ? i.number / 100 : 0, c = typeof s < "u" && R(s) ? K(s, 1) : 1;
  if (a === 0)
    return xA(l * 255, l * 255, l * 255, 1);
  var B = l <= 0.5 ? l * (a + 1) : l + a - l * a, d = l * 2 - B, f = Pt(d, B, o + 1 / 3), h = Pt(d, B, o), w = Pt(d, B, o - 1 / 3);
  return xA(f * 255, h * 255, w * 255, c);
}, fd = {
  hsl: Yn,
  hsla: Yn,
  rgb: Wn,
  rgba: Wn
}, we = function(e, A) {
  return LA.parse(e, Ss.create(A).parseComponentValue());
}, UA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, wd = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (S(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Qd = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, mt = function(e, A) {
  var t = LA.parse(e, A[0]), r = A[1];
  return r && R(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Zn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = P), r.stop === null && (r.stop = IA);
  for (var n = [], i = 0, s = 0; s < e.length; s++) {
    var o = e[s].stop;
    if (o !== null) {
      var a = K(o, A);
      a > i ? n.push(a) : n.push(i), i = a;
    } else
      n.push(null);
  }
  for (var l = null, s = 0; s < n.length; s++) {
    var c = n[s];
    if (c === null)
      l === null && (l = s);
    else if (l !== null) {
      for (var B = s - l, d = n[l - 1], f = (c - d) / (B + 1), h = 1; h <= B; h++)
        n[l + h - 1] = f * h;
      l = null;
    }
  }
  return e.map(function(w, m) {
    var g = w.color;
    return { color: g, stop: Math.max(Math.min(1, n[m] / A), 0) };
  });
}, pd = function(e, A, t) {
  var r = A / 2, n = t / 2, i = K(e[0], A) - r, s = n - K(e[1], t);
  return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2);
}, Cd = function(e, A, t) {
  var r = typeof e == "number" ? e : pd(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = A / 2, s = t / 2, o = n / 2, a = Math.sin(r - Math.PI / 2) * o, l = Math.cos(r - Math.PI / 2) * o;
  return [n, i - l, i + l, s - a, s + a];
}, aA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, zn = function(e, A, t, r, n) {
  var i = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return i.reduce(function(s, o) {
    var a = o[0], l = o[1], c = aA(t - a, r - l);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: o,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Ud = function(e, A, t, r, n) {
  var i = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? i = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        i = s = Math.min(aA(A, t), aA(A, t - n), aA(A - r, t), aA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), a = zn(r, n, A, t, !0), l = a[0], c = a[1];
        i = aA(l - A, (c - t) / o), s = o * i;
      }
      break;
    case 1:
      e.shape === 0 ? i = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        i = s = Math.max(aA(A, t), aA(A, t - n), aA(A - r, t), aA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), B = zn(r, n, A, t, !1), l = B[0], c = B[1];
        i = aA(l - A, (c - t) / o), s = o * i;
      }
      break;
  }
  return Array.isArray(e.size) && (i = K(e.size[0], r), s = e.size.length === 2 ? K(e.size[1], n) : i), [i, s];
}, Fd = function(e, A) {
  var t = nA(180), r = [];
  return hA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = qs(n);
        return;
      } else if (Rs(s)) {
        t = Ft.parse(e, s);
        return;
      }
    }
    var o = mt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ge = function(e, A) {
  var t = nA(180), r = [];
  return hA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = qs(n);
        return;
      } else if (Rs(s)) {
        t = (Ft.parse(e, s) + nA(270)) % nA(360);
        return;
      }
    }
    var o = mt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, md = function(e, A) {
  var t = nA(180), r = [], n = 1, i = 0, s = 3, o = [];
  return hA(A).forEach(function(a, l) {
    var c = a[0];
    if (l === 0) {
      if (S(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (S(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var B = LA.parse(e, c.values[0]);
        r.push({ stop: P, color: B });
      } else if (c.name === "to") {
        var B = LA.parse(e, c.values[0]);
        r.push({ stop: IA, color: B });
      } else if (c.name === "color-stop") {
        var d = c.values.filter(ee);
        if (d.length === 2) {
          var B = LA.parse(e, d[1]), f = d[0];
          te(f) && r.push({
            stop: { type: 16, number: f.number * 100, flags: f.flags },
            color: B
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + nA(180)) % nA(360),
    stops: r,
    type: n
  } : { size: s, shape: i, stops: r, position: o, type: n };
}, Ns = "closest-side", Vs = "farthest-side", Gs = "closest-corner", Ps = "farthest-corner", _s = "circle", Xs = "ellipse", Js = "cover", Ws = "contain", vd = function(e, A) {
  var t = 0, r = 3, n = [], i = [];
  return hA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0) {
      var l = !1;
      a = s.reduce(function(B, d) {
        if (l)
          if (S(d))
            switch (d.value) {
              case "center":
                return i.push(Kr), B;
              case "top":
              case "left":
                return i.push(P), B;
              case "right":
              case "bottom":
                return i.push(IA), B;
            }
          else (R(d) || KA(d)) && i.push(d);
        else if (S(d))
          switch (d.value) {
            case _s:
              return t = 0, !1;
            case Xs:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case Ns:
              return r = 0, !1;
            case Js:
            case Vs:
              return r = 1, !1;
            case Ws:
            case Gs:
              return r = 2, !1;
            case Ps:
              return r = 3, !1;
          }
        else if (KA(d) || R(d))
          return Array.isArray(r) || (r = []), r.push(d), !1;
        return B;
      }, a);
    }
    if (a) {
      var c = mt(e, s);
      n.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Pe = function(e, A) {
  var t = 0, r = 3, n = [], i = [];
  return hA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0 ? a = s.reduce(function(c, B) {
      if (S(B))
        switch (B.value) {
          case "center":
            return i.push(Kr), !1;
          case "top":
          case "left":
            return i.push(P), !1;
          case "right":
          case "bottom":
            return i.push(IA), !1;
        }
      else if (R(B) || KA(B))
        return i.push(B), !1;
      return c;
    }, a) : o === 1 && (a = s.reduce(function(c, B) {
      if (S(B))
        switch (B.value) {
          case _s:
            return t = 0, !1;
          case Xs:
            return t = 1, !1;
          case Ws:
          case Ns:
            return r = 0, !1;
          case Vs:
            return r = 1, !1;
          case Gs:
            return r = 2, !1;
          case Js:
          case Ps:
            return r = 3, !1;
        }
      else if (KA(B) || R(B))
        return Array.isArray(r) || (r = []), r.push(B), !1;
      return c;
    }, a)), a) {
      var l = mt(e, s);
      n.push(l);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, bd = function(e) {
  return e.type === 1;
}, yd = function(e) {
  return e.type === 2;
}, Tr = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var t = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      var r = Ys[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Ed(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ys[e.name]);
}
var Ys = {
  "linear-gradient": Fd,
  "-moz-linear-gradient": Ge,
  "-ms-linear-gradient": Ge,
  "-o-linear-gradient": Ge,
  "-webkit-linear-gradient": Ge,
  "radial-gradient": vd,
  "-moz-radial-gradient": Pe,
  "-ms-radial-gradient": Pe,
  "-o-radial-gradient": Pe,
  "-webkit-radial-gradient": Pe,
  "-webkit-gradient": md
}, Hd = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ee(r) && Ed(r);
    }).map(function(r) {
      return Tr.parse(e, r);
    });
  }
}, Id = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (S(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, xd = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return hA(A).map(function(t) {
      return t.filter(R);
    }).map(Ts);
  }
}, Ld = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return hA(A).map(function(t) {
      return t.filter(S).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Sd);
  }
}, Sd = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    default:
      return 0;
  }
}, Ae;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Ae || (Ae = {}));
var Kd = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return hA(A).map(function(t) {
      return t.filter(Td);
    });
  }
}, Td = function(e) {
  return S(e) || R(e);
}, vt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Dd = vt("top"), kd = vt("right"), Md = vt("bottom"), Od = vt("left"), bt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ts(t.filter(R));
    }
  };
}, Rd = bt("top-left"), qd = bt("top-right"), Nd = bt("bottom-right"), Vd = bt("bottom-left"), yt = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, Gd = yt("top"), Pd = yt("right"), _d = yt("bottom"), Xd = yt("left"), Et = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return be(t) ? t.number : 0;
    }
  };
}, Jd = Et("top"), Wd = Et("right"), Yd = Et("bottom"), Zd = Et("left"), zd = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, jd = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "rtl" ? 1 : 0;
  }
}, $d = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(S).reduce(
      function(t, r) {
        return t | Au(r.value);
      },
      0
      /* NONE */
    );
  }
}, Au = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, eu = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, tu = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Bt;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Bt || (Bt = {}));
var ru = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "strict" ? Bt.STRICT : Bt.NORMAL;
  }
}, nu = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, jn = function(e, A) {
  return S(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : R(e) ? K(e, A) : A;
}, iu = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Tr.parse(e, A);
  }
}, su = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "inside" ? 0 : 1;
  }
}, mr = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      default:
        return -1;
    }
  }
}, Ht = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, ou = Ht("top"), au = Ht("right"), cu = Ht("bottom"), lu = Ht("left"), Bu = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(S).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        default:
          return 0;
      }
    });
  }
}, du = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "break-word" ? "break-word" : "normal";
  }
}, It = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, uu = It("top"), hu = It("right"), gu = It("bottom"), fu = It("left"), wu = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      default:
        return 0;
    }
  }
}, Qu = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, pu = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Fr(A[0], "none") ? [] : hA(A).map(function(t) {
      for (var r = {
        color: UA.TRANSPARENT,
        offsetX: P,
        offsetY: P,
        blur: P
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        KA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = LA.parse(e, s);
      }
      return r;
    });
  }
}, Cu = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Uu = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = vu[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Fu = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, mu = function(e) {
  var A = e.filter(function(a) {
    return a.type === 17;
  }).map(function(a) {
    return a.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], i = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var s = A[12], o = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, i, s, o] : null;
}, vu = {
  matrix: Fu,
  matrix3d: mu
}, $n = {
  type: 16,
  number: 50,
  flags: ve
}, bu = [$n, $n], yu = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(R);
    return t.length !== 2 ? bu : [t[0], t[1]];
  }
}, Eu = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      default:
        return 0;
    }
  }
}, Qe;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Qe || (Qe = {}));
var Hu = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Qe.BREAK_ALL;
      case "keep-all":
        return Qe.KEEP_ALL;
      default:
        return Qe.NORMAL;
    }
  }
}, Iu = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (te(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Zs = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, xu = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : 1;
  }
}, Lu = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Su = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(S).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Ku = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [], r = [];
    return A.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, Tu = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Du = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : S(A) && A.value === "bold" ? 700 : 400;
  }
}, ku = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(S).map(function(t) {
      return t.value;
    });
  }
}, Mu = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      default:
        return "normal";
    }
  }
}, q = function(e, A) {
  return (e & A) !== 0;
}, Ou = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, Ru = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], n = A.filter(Ks), i = 0; i < n.length; i++) {
      var s = n[i], o = n[i + 1];
      if (s.type === 20) {
        var a = o && te(o) ? o.number : 1;
        r.push({ counter: s.value, increment: a });
      }
    }
    return r;
  }
}, qu = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(Ks), n = 0; n < r.length; n++) {
      var i = r[n], s = r[n + 1];
      if (S(i) && i.value !== "none") {
        var o = s && te(s) ? s.number : 0;
        t.push({ counter: i.value, reset: o });
      }
    }
    return t;
  }
}, Nu = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(be).map(function(t) {
      return Zs.parse(e, t);
    });
  }
}, Vu = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], n = A.filter(hd);
    if (n.length % 2 !== 0)
      return null;
    for (var i = 0; i < n.length; i += 2) {
      var s = n[i].value, o = n[i + 1].value;
      r.push({ open: s, close: o });
    }
    return r;
  }
}, Ai = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Gu = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Fr(A[0], "none") ? [] : hA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: P,
        offsetY: P,
        blur: P,
        spread: P,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        Fr(s, "inset") ? r.inset = !0 : KA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = LA.parse(e, s);
      }
      return r;
    });
  }
}, Pu = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return A.filter(S).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r.indexOf(n) === -1 && r.push(n);
    }), r;
  }
}, _u = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Xu = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return be(A) ? A.number : 0;
  }
}, Ju = (
  /** @class */
  (function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = F(A, Nu, t.animationDuration), this.backgroundClip = F(A, wd, t.backgroundClip), this.backgroundColor = F(A, Qd, t.backgroundColor), this.backgroundImage = F(A, Hd, t.backgroundImage), this.backgroundOrigin = F(A, Id, t.backgroundOrigin), this.backgroundPosition = F(A, xd, t.backgroundPosition), this.backgroundRepeat = F(A, Ld, t.backgroundRepeat), this.backgroundSize = F(A, Kd, t.backgroundSize), this.borderTopColor = F(A, Dd, t.borderTopColor), this.borderRightColor = F(A, kd, t.borderRightColor), this.borderBottomColor = F(A, Md, t.borderBottomColor), this.borderLeftColor = F(A, Od, t.borderLeftColor), this.borderTopLeftRadius = F(A, Rd, t.borderTopLeftRadius), this.borderTopRightRadius = F(A, qd, t.borderTopRightRadius), this.borderBottomRightRadius = F(A, Nd, t.borderBottomRightRadius), this.borderBottomLeftRadius = F(A, Vd, t.borderBottomLeftRadius), this.borderTopStyle = F(A, Gd, t.borderTopStyle), this.borderRightStyle = F(A, Pd, t.borderRightStyle), this.borderBottomStyle = F(A, _d, t.borderBottomStyle), this.borderLeftStyle = F(A, Xd, t.borderLeftStyle), this.borderTopWidth = F(A, Jd, t.borderTopWidth), this.borderRightWidth = F(A, Wd, t.borderRightWidth), this.borderBottomWidth = F(A, Yd, t.borderBottomWidth), this.borderLeftWidth = F(A, Zd, t.borderLeftWidth), this.boxShadow = F(A, Gu, t.boxShadow), this.color = F(A, zd, t.color), this.direction = F(A, jd, t.direction), this.display = F(A, $d, t.display), this.float = F(A, eu, t.cssFloat), this.fontFamily = F(A, Ku, t.fontFamily), this.fontSize = F(A, Tu, t.fontSize), this.fontStyle = F(A, Mu, t.fontStyle), this.fontVariant = F(A, ku, t.fontVariant), this.fontWeight = F(A, Du, t.fontWeight), this.letterSpacing = F(A, tu, t.letterSpacing), this.lineBreak = F(A, ru, t.lineBreak), this.lineHeight = F(A, nu, t.lineHeight), this.listStyleImage = F(A, iu, t.listStyleImage), this.listStylePosition = F(A, su, t.listStylePosition), this.listStyleType = F(A, mr, t.listStyleType), this.marginTop = F(A, ou, t.marginTop), this.marginRight = F(A, au, t.marginRight), this.marginBottom = F(A, cu, t.marginBottom), this.marginLeft = F(A, lu, t.marginLeft), this.opacity = F(A, xu, t.opacity);
      var i = F(A, Bu, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = F(A, du, t.overflowWrap), this.paddingTop = F(A, uu, t.paddingTop), this.paddingRight = F(A, hu, t.paddingRight), this.paddingBottom = F(A, gu, t.paddingBottom), this.paddingLeft = F(A, fu, t.paddingLeft), this.paintOrder = F(A, Pu, t.paintOrder), this.position = F(A, Qu, t.position), this.textAlign = F(A, wu, t.textAlign), this.textDecorationColor = F(A, Lu, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = F(A, Su, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = F(A, pu, t.textShadow), this.textTransform = F(A, Cu, t.textTransform), this.transform = F(A, Uu, t.transform), this.transformOrigin = F(A, yu, t.transformOrigin), this.visibility = F(A, Eu, t.visibility), this.webkitTextStrokeColor = F(A, _u, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = F(A, Xu, t.webkitTextStrokeWidth), this.wordBreak = F(A, Hu, t.wordBreak), this.zIndex = F(A, Iu, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return SA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return q(
        this.display,
        4
        /* INLINE */
      ) || q(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || q(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || q(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || q(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || q(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  })()
), Wu = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.content = F(A, Ou, t.content), this.quotes = F(A, Vu, t.quotes);
    }
    return e;
  })()
), ei = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.counterIncrement = F(A, Ru, t.counterIncrement), this.counterReset = F(A, qu, t.counterReset);
    }
    return e;
  })()
), F = function(e, A, t) {
  var r = new Ls(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var i = new Ss(r.read());
  switch (A.type) {
    case 2:
      var s = i.parseComponentValue();
      return A.parse(e, S(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, i.parseComponentValue());
    case 1:
      return A.parse(e, i.parseComponentValues());
    case 4:
      return i.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Ft.parse(e, i.parseComponentValue());
        case "color":
          return LA.parse(e, i.parseComponentValue());
        case "image":
          return Tr.parse(e, i.parseComponentValue());
        case "length":
          var o = i.parseComponentValue();
          return KA(o) ? o : P;
        case "length-percentage":
          var a = i.parseComponentValue();
          return R(a) ? a : P;
        case "time":
          return Zs.parse(e, i.parseComponentValue());
      }
      break;
  }
}, Yu = "data-html2canvas-debug", Zu = function(e) {
  var A = e.getAttribute(Yu);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, vr = function(e, A) {
  var t = Zu(e);
  return t === 1 || A === t;
}, gA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, vr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Ju(A, window.getComputedStyle(t, null)), Er(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ct(this.context, t), vr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  })()
), zu = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", de = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _e = 0; _e < ti.length; _e++)
  de[ti.charCodeAt(_e)] = _e;
var ju = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = de[e.charCodeAt(r)], s = de[e.charCodeAt(r + 1)], o = de[e.charCodeAt(r + 2)], a = de[e.charCodeAt(r + 3)], c[n++] = i << 2 | s >> 4, c[n++] = (s & 15) << 4 | o >> 2, c[n++] = (o & 3) << 6 | a & 63;
  return l;
}, $u = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Ah = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, qA = 5, Dr = 11, _t = 2, eh = Dr - qA, zs = 65536 >> qA, th = 1 << qA, Xt = th - 1, rh = 1024 >> qA, nh = zs + rh, ih = nh, sh = 32, oh = ih + sh, ah = 65536 >> Dr, ch = 1 << eh, lh = ch - 1, ri = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Bh = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, dh = function(e, A) {
  var t = ju(e), r = Array.isArray(t) ? Ah(t) : new Uint32Array(t), n = Array.isArray(t) ? $u(t) : new Uint16Array(t), i = 24, s = ri(n, i / 2, r[4] / 2), o = r[5] === 2 ? ri(n, (i + r[4]) / 2) : Bh(r, Math.ceil((i + r[4]) / 4));
  return new uh(r[0], r[1], r[2], r[3], s, o);
}, uh = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> qA], t = (t << _t) + (A & Xt), this.data[t];
        if (A <= 65535)
          return t = this.index[zs + (A - 55296 >> qA)], t = (t << _t) + (A & Xt), this.data[t];
        if (A < this.highStart)
          return t = oh - ah + (A >> Dr), t = this.index[t], t += A >> qA & lh, t = this.index[t], t = (t << _t) + (A & Xt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hh = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xe = 0; Xe < ni.length; Xe++)
  hh[ni.charCodeAt(Xe)] = Xe;
var gh = 1, Jt = 2, Wt = 3, ii = 4, si = 5, fh = 7, oi = 8, Yt = 9, Zt = 10, ai = 11, ci = 12, li = 13, Bi = 14, zt = 15, wh = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Qh = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, i = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, ph = dh(zu), tA = "×", jt = "÷", Ch = function(e) {
  return ph.get(e);
}, Uh = function(e, A, t) {
  var r = t - 2, n = A[r], i = A[t - 1], s = A[t];
  if (i === Jt && s === Wt)
    return tA;
  if (i === Jt || i === Wt || i === ii || s === Jt || s === Wt || s === ii)
    return jt;
  if (i === oi && [oi, Yt, ai, ci].indexOf(s) !== -1 || (i === ai || i === Yt) && (s === Yt || s === Zt) || (i === ci || i === Zt) && s === Zt || s === li || s === si || s === fh || i === gh)
    return tA;
  if (i === li && s === Bi) {
    for (; n === si; )
      n = A[--r];
    if (n === Bi)
      return tA;
  }
  if (i === zt && s === zt) {
    for (var o = 0; n === zt; )
      o++, n = A[--r];
    if (o % 2 === 0)
      return tA;
  }
  return jt;
}, Fh = function(e) {
  var A = wh(e), t = A.length, r = 0, n = 0, i = A.map(Ch);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = tA; r < t && (s = Uh(A, i, ++r)) === tA; )
        ;
      if (s !== tA || r === t) {
        var o = Qh.apply(null, A.slice(n, r));
        return n = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, mh = function(e) {
  for (var A = Fh(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, vh = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), i = Math.round(n.height);
      if (e.body.removeChild(r), i === A)
        return !0;
    }
  }
  return !1;
}, bh = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = Ut(r.data).map(function(a) {
    return M(a);
  }), i = 0, s = {}, o = n.every(function(a, l) {
    t.setStart(r, i), t.setEnd(r, i + a.length);
    var c = t.getBoundingClientRect();
    i += a.length;
    var B = c.x > s.x || c.y > s.y;
    return s = c, l === 0 ? !0 : B;
  });
  return e.body.removeChild(A), o;
}, yh = function() {
  return typeof new Image().crossOrigin < "u";
}, Eh = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Hh = function(e) {
  var A = new Image(), t = e.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, di = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Ih = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), i = A.toDataURL();
  n.src = i;
  var s = br(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ui(s).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var l = e.createElement("div");
    return l.style.backgroundImage = "url(" + i + ")", l.style.height = t + "px", di(a) ? ui(br(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), di(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, br = function(e, A, t, r, n) {
  var i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), o = document.createElementNS(i, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), s;
}, ui = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, G = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = vh(document);
    return Object.defineProperty(G, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = G.SUPPORT_RANGE_BOUNDS && bh(document);
    return Object.defineProperty(G, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Hh(document);
    return Object.defineProperty(G, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Ih(document) : Promise.resolve(!1);
    return Object.defineProperty(G, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = yh();
    return Object.defineProperty(G, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Eh();
    return Object.defineProperty(G, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(G, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(G, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, pe = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  })()
), xh = function(e, A, t, r) {
  var n = Kh(A, t), i = [], s = 0;
  return n.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (G.SUPPORT_RANGE_BOUNDS) {
        var a = hi(r, s, o.length).getClientRects();
        if (a.length > 1) {
          var l = kr(o), c = 0;
          l.forEach(function(d) {
            i.push(new pe(d, FA.fromDOMRectList(e, hi(r, c + s, d.length).getClientRects()))), c += d.length;
          });
        } else
          i.push(new pe(o, FA.fromDOMRectList(e, a)));
      } else {
        var B = r.splitText(o.length);
        i.push(new pe(o, Lh(e, r))), r = B;
      }
    else G.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    s += o.length;
  }), i;
}, Lh = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var i = Ct(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), i;
    }
  }
  return FA.EMPTY;
}, hi = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, kr = function(e) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return mh(e);
}, Sh = function(e, A) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Dh(e, A);
}, Kh = function(e, A) {
  return A.letterSpacing !== 0 ? kr(e) : Sh(e, A);
}, Th = [32, 160, 4961, 65792, 65793, 4153, 4241], Dh = function(e, A) {
  for (var t = aB(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var s = n.value.slice(), o = Ut(s), a = "";
      o.forEach(function(l) {
        Th.indexOf(l) === -1 ? a += M(l) : (a.length && r.push(a), r.push(M(l)), a = "");
      }), a.length && r.push(a);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, kh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.text = Mh(t.data, r.textTransform), this.textBounds = xh(A, this.text, r, t);
    }
    return e;
  })()
), Mh = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Oh, Rh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Oh = /(^|\s|:|-|\(|\))([a-z])/g, Rh = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, js = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  })(gA)
), $s = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  })(gA)
), Ao = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = new XMLSerializer(), s = Ct(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  })(gA)
), eo = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(gA)
), yr = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  })(gA)
), qh = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Nh = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Vh = function(e) {
  return e.width > e.height ? new FA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new FA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Gh = function(e) {
  var A = e.type === Ph ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, dt = "checkbox", ut = "radio", Ph = "password", gi = 707406591, Mr = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Gh(r), (n.type === dt || n.type === ut) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Vh(n.bounds)), n.type) {
        case dt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = qh;
          break;
        case ut:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Nh;
          break;
      }
      return n;
    }
    return A;
  })(gA)
), to = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return A;
  })(gA)
), ro = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(gA)
), no = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = so(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? we(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : UA.TRANSPARENT, s = r.contentWindow.document.body ? we(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : UA.TRANSPARENT;
          n.backgroundColor = SA(i) ? SA(s) ? n.styles.backgroundColor : s : i;
        }
      } catch {
      }
      return n;
    }
    return A;
  })(gA)
), _h = ["OL", "UL", "MENU"], rt = function(e, A, t, r) {
  for (var n = A.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, oo(n) && n.data.trim().length > 0)
      t.textNodes.push(new kh(e, n, t.styles));
    else if ($A(n))
      if (Bo(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(o) {
          return rt(e, o, t, r);
        });
      else {
        var s = io(e, n);
        s.styles.isVisible() && (Xh(n, s, r) ? s.flags |= 4 : Jh(s.styles) && (s.flags |= 2), _h.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? rt(e, n.shadowRoot, s, r) : !ht(n) && !ao(n) && !gt(n) && rt(e, n, s, r));
      }
}, io = function(e, A) {
  return Hr(A) ? new js(e, A) : co(A) ? new $s(e, A) : ao(A) ? new Ao(e, A) : Wh(A) ? new eo(e, A) : Yh(A) ? new yr(e, A) : Zh(A) ? new Mr(e, A) : gt(A) ? new to(e, A) : ht(A) ? new ro(e, A) : lo(A) ? new no(e, A) : new gA(e, A);
}, so = function(e, A) {
  var t = io(e, A);
  return t.flags |= 4, rt(e, A, t, t), t;
}, Xh = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Or(e) && t.styles.isTransparent();
}, Jh = function(e) {
  return e.isPositioned() || e.isFloating();
}, oo = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, $A = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Er = function(e) {
  return $A(e) && typeof e.style < "u" && !nt(e);
}, nt = function(e) {
  return typeof e.className == "object";
}, Wh = function(e) {
  return e.tagName === "LI";
}, Yh = function(e) {
  return e.tagName === "OL";
}, Zh = function(e) {
  return e.tagName === "INPUT";
}, zh = function(e) {
  return e.tagName === "HTML";
}, ao = function(e) {
  return e.tagName === "svg";
}, Or = function(e) {
  return e.tagName === "BODY";
}, co = function(e) {
  return e.tagName === "CANVAS";
}, fi = function(e) {
  return e.tagName === "VIDEO";
}, Hr = function(e) {
  return e.tagName === "IMG";
}, lo = function(e) {
  return e.tagName === "IFRAME";
}, wi = function(e) {
  return e.tagName === "STYLE";
}, jh = function(e) {
  return e.tagName === "SCRIPT";
}, ht = function(e) {
  return e.tagName === "TEXTAREA";
}, gt = function(e) {
  return e.tagName === "SELECT";
}, Bo = function(e) {
  return e.tagName === "SLOT";
}, Qi = function(e) {
  return e.tagName.indexOf("-") > 0;
}, $h = (
  /** @class */
  (function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var t = this.counters[A];
      return t && t.length ? t[t.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var t = this.counters[A];
      return t || [];
    }, e.prototype.pop = function(A) {
      var t = this;
      A.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, e.prototype.parse = function(A) {
      var t = this, r = A.counterIncrement, n = A.counterReset, i = !0;
      r !== null && r.forEach(function(o) {
        var a = t.counters[o.counter];
        a && o.increment !== 0 && (i = !1, a.length || a.push(1), a[Math.max(0, a.length - 1)] += o.increment);
      });
      var s = [];
      return i && n.forEach(function(o) {
        var a = t.counters[o.counter];
        s.push(o.counter), a || (a = t.counters[o.counter] = []), a.push(o.reset);
      }), s;
    }, e;
  })()
), pi = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Ci = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, Ag = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, eg = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, _A = function(e, A, t, r, n, i) {
  return e < A || e > t ? me(e, n, i.length > 0) : r.integers.reduce(function(s, o, a) {
    for (; e >= o; )
      e -= o, s += r.values[a];
    return s;
  }, "") + i;
}, uo = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, k = function(e, A, t, r, n) {
  var i = t - A + 1;
  return (e < 0 ? "-" : "") + (uo(Math.abs(e), i, r, function(s) {
    return M(Math.floor(s % i) + A);
  }) + n);
}, DA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return uo(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, ZA = 1, vA = 2, bA = 4, ue = 8, CA = function(e, A, t, r, n, i) {
  if (e < -9999 || e > 9999)
    return me(e, 4, n.length > 0);
  var s = Math.abs(e), o = n;
  if (s === 0)
    return A[0] + o;
  for (var a = 0; s > 0 && a <= 4; a++) {
    var l = s % 10;
    l === 0 && q(i, ZA) && o !== "" ? o = A[l] + o : l > 1 || l === 1 && a === 0 || l === 1 && a === 1 && q(i, vA) || l === 1 && a === 1 && q(i, bA) && e > 100 || l === 1 && a > 1 && q(i, ue) ? o = A[l] + (a > 0 ? t[a - 1] : "") + o : l === 1 && a > 0 && (o = t[a - 1] + o), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + o;
}, Ui = "十百千萬", Fi = "拾佰仟萬", mi = "マイナス", $t = "마이너스", me = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", i = t ? ", " : "", s = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var o = k(e, 48, 57, !0, r);
      return o.length < 4 ? "0" + o : o;
    case 4:
      return DA(e, "〇一二三四五六七八九", n);
    case 6:
      return _A(e, 1, 3999, pi, 3, r).toLowerCase();
    case 7:
      return _A(e, 1, 3999, pi, 3, r);
    case 8:
      return k(e, 945, 969, !1, r);
    case 9:
      return k(e, 97, 122, !1, r);
    case 10:
      return k(e, 65, 90, !1, r);
    case 11:
      return k(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return _A(e, 1, 9999, Ci, 3, r);
    case 35:
      return _A(e, 1, 9999, Ci, 3, r).toLowerCase();
    case 13:
      return k(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return k(e, 6112, 6121, !0, r);
    case 15:
      return DA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return DA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return CA(e, "零一二三四五六七八九", Ui, "負", n, vA | bA | ue);
    case 47:
      return CA(e, "零壹貳參肆伍陸柒捌玖", Fi, "負", n, ZA | vA | bA | ue);
    case 42:
      return CA(e, "零一二三四五六七八九", Ui, "负", n, vA | bA | ue);
    case 41:
      return CA(e, "零壹贰叁肆伍陆柒捌玖", Fi, "负", n, ZA | vA | bA | ue);
    case 26:
      return CA(e, "〇一二三四五六七八九", "十百千万", mi, n, 0);
    case 25:
      return CA(e, "零壱弐参四伍六七八九", "拾百千万", mi, n, ZA | vA | bA);
    case 31:
      return CA(e, "영일이삼사오육칠팔구", "십백천만", $t, i, ZA | vA | bA);
    case 33:
      return CA(e, "零一二三四五六七八九", "十百千萬", $t, i, 0);
    case 32:
      return CA(e, "零壹貳參四五六七八九", "拾百千", $t, i, ZA | vA | bA);
    case 18:
      return k(e, 2406, 2415, !0, r);
    case 20:
      return _A(e, 1, 19999, eg, 3, r);
    case 21:
      return k(e, 2790, 2799, !0, r);
    case 22:
      return k(e, 2662, 2671, !0, r);
    case 22:
      return _A(e, 1, 10999, Ag, 3, r);
    case 23:
      return DA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return DA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return k(e, 3302, 3311, !0, r);
    case 28:
      return DA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return DA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return k(e, 3792, 3801, !0, r);
    case 37:
      return k(e, 6160, 6169, !0, r);
    case 38:
      return k(e, 4160, 4169, !0, r);
    case 39:
      return k(e, 2918, 2927, !0, r);
    case 40:
      return k(e, 1776, 1785, !0, r);
    case 43:
      return k(e, 3046, 3055, !0, r);
    case 44:
      return k(e, 3174, 3183, !0, r);
    case 45:
      return k(e, 3664, 3673, !0, r);
    case 46:
      return k(e, 3872, 3881, !0, r);
    default:
      return k(e, 48, 57, !0, r);
  }
}, ho = "data-html2canvas-ignore", vi = (
  /** @class */
  (function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new $h(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = tg(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, o = n.contentWindow, a = o.document, l = ig(n).then(function() {
        return Z(r, void 0, void 0, function() {
          var c, B;
          return W(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(cg), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), c = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                d.sent(), d.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ng(a)] : [3, 4];
              case 3:
                d.sent(), d.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(a, B);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return a.open(), a.write(og(document.doctype) + "<html></html>"), ag(this.referenceElement.ownerDocument, i, s), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), l;
    }, e.prototype.createElementClone = function(A) {
      if (vr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (co(A))
        return this.createCanvasClone(A);
      if (fi(A))
        return this.createVideoClone(A);
      if (wi(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return Hr(t) && (Hr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Qi(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return Ar(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(i, s) {
            return s && typeof s.cssText == "string" ? i + s.cssText : i;
          }, ""), n = A.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError")
          throw i;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var t;
      if (this.options.inlineImages && A.ownerDocument) {
        var r = A.ownerDocument.createElement("img");
        try {
          return r.src = A.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var n = A.cloneNode(!1);
      try {
        n.width = A.width, n.height = A.height;
        var i = A.getContext("2d"), s = n.getContext("2d");
        if (s)
          if (!this.options.allowTaint && i)
            s.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var o = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (o) {
              var a = o.getContextAttributes();
              a?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            s.drawImage(A, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return n;
    }, e.prototype.createVideoClone = function(A) {
      var t = A.ownerDocument.createElement("canvas");
      t.width = A.offsetWidth, t.height = A.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var n = A.ownerDocument.createElement("canvas");
      return n.width = A.offsetWidth, n.height = A.offsetHeight, n;
    }, e.prototype.appendChildNode = function(A, t, r) {
      (!$A(t) || !jh(t) && !t.hasAttribute(ho) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !$A(t) || !wi(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling)
        if ($A(i) && Bo(i) && typeof i.assignedNodes == "function") {
          var s = i.assignedNodes();
          s.length && s.forEach(function(o) {
            return n.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (oo(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && $A(A) && (Er(A) || nt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
        this.referenceElement === A && Er(n) && (this.clonedReferenceElement = n), Or(n) && dg(n);
        var a = this.counters.parse(new ei(this.context, i)), l = this.resolvePseudoContent(A, n, s, Ce.BEFORE);
        Qi(A) && (t = !0), fi(A) || this.cloneChildNodes(A, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(A, n, o, Ce.AFTER);
        return c && n.appendChild(c), this.counters.pop(a), (i && (this.options.copyStyles || nt(A)) && !lo(A) || t) && Ar(i, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (ht(A) || gt(A)) && (ht(n) || gt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var i = this;
      if (r) {
        var s = r.content, o = t.ownerDocument;
        if (!(!o || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new ei(this.context, r));
          var a = new Wu(this.context, r), l = o.createElement("html2canvaspseudoelement");
          Ar(r, l), a.content.forEach(function(B) {
            if (B.type === 0)
              l.appendChild(o.createTextNode(B.value));
            else if (B.type === 22) {
              var d = o.createElement("img");
              d.src = B.value, d.style.opacity = "1", l.appendChild(d);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var f = B.values.filter(S);
                f.length && l.appendChild(o.createTextNode(A.getAttribute(f[0].value) || ""));
              } else if (B.name === "counter") {
                var h = B.values.filter(ee), w = h[0], m = h[1];
                if (w && S(w)) {
                  var g = i.counters.getCounterValue(w.value), u = m && S(m) ? mr.parse(i.context, m.value) : 3;
                  l.appendChild(o.createTextNode(me(g, u, !1)));
                }
              } else if (B.name === "counters") {
                var p = B.values.filter(ee), w = p[0], C = p[1], m = p[2];
                if (w && S(w)) {
                  var v = i.counters.getCounterValues(w.value), Q = m && S(m) ? mr.parse(i.context, m.value) : 3, E = C && C.type === 0 ? C.value : "", y = v.map(function(V) {
                    return me(V, Q, !1);
                  }).join(E);
                  l.appendChild(o.createTextNode(y));
                }
              }
            } else if (B.type === 20)
              switch (B.value) {
                case "open-quote":
                  l.appendChild(o.createTextNode(Ai(a.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  l.appendChild(o.createTextNode(Ai(a.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  l.appendChild(o.createTextNode(B.value));
              }
          }), l.className = Ir + " " + xr;
          var c = n === Ce.BEFORE ? " " + Ir : " " + xr;
          return nt(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  })()
), Ce;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ce || (Ce = {}));
var tg = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ho, "true"), e.body.appendChild(t), t;
}, rg = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, ng = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(rg));
}, ig = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var i = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(i), A(e));
      }, 50);
    };
  });
}, sg = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ar = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    sg.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, og = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, ag = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, cg = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, lg = ":before", Bg = ":after", Ir = "___html2canvas___pseudoelement_before", xr = "___html2canvas___pseudoelement_after", bi = `{
    content: "" !important;
    display: none !important;
}`, dg = function(e) {
  ug(e, "." + Ir + lg + bi + `
         .` + xr + Bg + bi);
}, ug = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, go = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var t = e._link;
      return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  })()
), hg = (
  /** @class */
  (function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (tr(A) || Qg(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Z(this, void 0, void 0, function() {
        var t, r, n, i, s = this;
        return W(this, function(o) {
          switch (o.label) {
            case 0:
              return t = go.isSameOrigin(A), r = !er(A) && this._options.useCORS === !0 && G.SUPPORT_CORS_IMAGES && !t, n = !er(A) && !t && !tr(A) && typeof this._options.proxy == "string" && G.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !er(A) && !tr(A) && !n && !r ? [
                2
                /*return*/
              ] : (i = A, n ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = o.sent(), o.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(a, l) {
                var c = new Image();
                c.onload = function() {
                  return a(c);
                }, c.onerror = l, (pg(i) || r) && (c.crossOrigin = "anonymous"), c.src = i, c.complete === !0 && setTimeout(function() {
                  return a(c);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return l("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
              })];
            case 3:
              return [2, o.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = A.substring(0, 256);
      return new Promise(function(i, s) {
        var o = G.SUPPORT_RESPONSE_TYPE ? "blob" : "text", a = new XMLHttpRequest();
        a.onload = function() {
          if (a.status === 200)
            if (o === "text")
              i(a.response);
            else {
              var B = new FileReader();
              B.addEventListener("load", function() {
                return i(B.result);
              }, !1), B.addEventListener("error", function(d) {
                return s(d);
              }, !1), B.readAsDataURL(a.response);
            }
          else
            s("Failed to proxy resource " + n + " with status code " + a.status);
        }, a.onerror = s;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r + l + "url=" + encodeURIComponent(A) + "&responseType=" + o), o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          a.timeout = c, a.ontimeout = function() {
            return s("Timed out (" + c + "ms) proxying " + n);
          };
        }
        a.send();
      });
    }, e;
  })()
), gg = /^data:image\/svg\+xml/i, fg = /^data:image\/.*;base64,/i, wg = /^data:image\/.*/i, Qg = function(e) {
  return G.SUPPORT_SVG_DRAWING || !Cg(e);
}, er = function(e) {
  return wg.test(e);
}, pg = function(e) {
  return fg.test(e);
}, tr = function(e) {
  return e.substr(0, 4) === "blob";
}, Cg = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || gg.test(e);
}, U = (
  /** @class */
  (function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  })()
), XA = function(e, A, t) {
  return new U(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, Je = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = XA(this.start, this.startControl, A), n = XA(this.startControl, this.endControl, A), i = XA(this.endControl, this.end, A), s = XA(r, n, A), o = XA(n, i, A), a = XA(s, o, A);
      return t ? new e(this.start, r, s, a) : new e(a, o, i, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  })()
), rA = function(e) {
  return e.type === 1;
}, Ug = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = Be(t.borderTopLeftRadius, r.width, r.height), i = n[0], s = n[1], o = Be(t.borderTopRightRadius, r.width, r.height), a = o[0], l = o[1], c = Be(t.borderBottomRightRadius, r.width, r.height), B = c[0], d = c[1], f = Be(t.borderBottomLeftRadius, r.width, r.height), h = f[0], w = f[1], m = [];
      m.push((i + a) / r.width), m.push((h + B) / r.width), m.push((s + w) / r.height), m.push((l + d) / r.height);
      var g = Math.max.apply(Math, m);
      g > 1 && (i /= g, s /= g, a /= g, l /= g, B /= g, d /= g, h /= g, w /= g);
      var u = r.width - a, p = r.height - d, C = r.width - B, v = r.height - w, Q = t.borderTopWidth, E = t.borderRightWidth, y = t.borderBottomWidth, b = t.borderLeftWidth, D = K(t.paddingTop, A.bounds.width), V = K(t.paddingRight, A.bounds.width), _ = K(t.paddingBottom, A.bounds.width), x = K(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + b / 3, r.top + Q / 3, i - b / 3, s - Q / 3, L.TOP_LEFT) : new U(r.left + b / 3, r.top + Q / 3), this.topRightBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + u, r.top + Q / 3, a - E / 3, l - Q / 3, L.TOP_RIGHT) : new U(r.left + r.width - E / 3, r.top + Q / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || d > 0 ? T(r.left + C, r.top + p, B - E / 3, d - y / 3, L.BOTTOM_RIGHT) : new U(r.left + r.width - E / 3, r.top + r.height - y / 3), this.bottomLeftBorderDoubleOuterBox = h > 0 || w > 0 ? T(r.left + b / 3, r.top + v, h - b / 3, w - y / 3, L.BOTTOM_LEFT) : new U(r.left + b / 3, r.top + r.height - y / 3), this.topLeftBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + b * 2 / 3, r.top + Q * 2 / 3, i - b * 2 / 3, s - Q * 2 / 3, L.TOP_LEFT) : new U(r.left + b * 2 / 3, r.top + Q * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + u, r.top + Q * 2 / 3, a - E * 2 / 3, l - Q * 2 / 3, L.TOP_RIGHT) : new U(r.left + r.width - E * 2 / 3, r.top + Q * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || d > 0 ? T(r.left + C, r.top + p, B - E * 2 / 3, d - y * 2 / 3, L.BOTTOM_RIGHT) : new U(r.left + r.width - E * 2 / 3, r.top + r.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = h > 0 || w > 0 ? T(r.left + b * 2 / 3, r.top + v, h - b * 2 / 3, w - y * 2 / 3, L.BOTTOM_LEFT) : new U(r.left + b * 2 / 3, r.top + r.height - y * 2 / 3), this.topLeftBorderStroke = i > 0 || s > 0 ? T(r.left + b / 2, r.top + Q / 2, i - b / 2, s - Q / 2, L.TOP_LEFT) : new U(r.left + b / 2, r.top + Q / 2), this.topRightBorderStroke = i > 0 || s > 0 ? T(r.left + u, r.top + Q / 2, a - E / 2, l - Q / 2, L.TOP_RIGHT) : new U(r.left + r.width - E / 2, r.top + Q / 2), this.bottomRightBorderStroke = B > 0 || d > 0 ? T(r.left + C, r.top + p, B - E / 2, d - y / 2, L.BOTTOM_RIGHT) : new U(r.left + r.width - E / 2, r.top + r.height - y / 2), this.bottomLeftBorderStroke = h > 0 || w > 0 ? T(r.left + b / 2, r.top + v, h - b / 2, w - y / 2, L.BOTTOM_LEFT) : new U(r.left + b / 2, r.top + r.height - y / 2), this.topLeftBorderBox = i > 0 || s > 0 ? T(r.left, r.top, i, s, L.TOP_LEFT) : new U(r.left, r.top), this.topRightBorderBox = a > 0 || l > 0 ? T(r.left + u, r.top, a, l, L.TOP_RIGHT) : new U(r.left + r.width, r.top), this.bottomRightBorderBox = B > 0 || d > 0 ? T(r.left + C, r.top + p, B, d, L.BOTTOM_RIGHT) : new U(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = h > 0 || w > 0 ? T(r.left, r.top + v, h, w, L.BOTTOM_LEFT) : new U(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || s > 0 ? T(r.left + b, r.top + Q, Math.max(0, i - b), Math.max(0, s - Q), L.TOP_LEFT) : new U(r.left + b, r.top + Q), this.topRightPaddingBox = a > 0 || l > 0 ? T(r.left + Math.min(u, r.width - E), r.top + Q, u > r.width + E ? 0 : Math.max(0, a - E), Math.max(0, l - Q), L.TOP_RIGHT) : new U(r.left + r.width - E, r.top + Q), this.bottomRightPaddingBox = B > 0 || d > 0 ? T(r.left + Math.min(C, r.width - b), r.top + Math.min(p, r.height - y), Math.max(0, B - E), Math.max(0, d - y), L.BOTTOM_RIGHT) : new U(r.left + r.width - E, r.top + r.height - y), this.bottomLeftPaddingBox = h > 0 || w > 0 ? T(r.left + b, r.top + Math.min(v, r.height - y), Math.max(0, h - b), Math.max(0, w - y), L.BOTTOM_LEFT) : new U(r.left + b, r.top + r.height - y), this.topLeftContentBox = i > 0 || s > 0 ? T(r.left + b + x, r.top + Q + D, Math.max(0, i - (b + x)), Math.max(0, s - (Q + D)), L.TOP_LEFT) : new U(r.left + b + x, r.top + Q + D), this.topRightContentBox = a > 0 || l > 0 ? T(r.left + Math.min(u, r.width + b + x), r.top + Q + D, u > r.width + b + x ? 0 : a - b + x, l - (Q + D), L.TOP_RIGHT) : new U(r.left + r.width - (E + V), r.top + Q + D), this.bottomRightContentBox = B > 0 || d > 0 ? T(r.left + Math.min(C, r.width - (b + x)), r.top + Math.min(p, r.height + Q + D), Math.max(0, B - (E + V)), d - (y + _), L.BOTTOM_RIGHT) : new U(r.left + r.width - (E + V), r.top + r.height - (y + _)), this.bottomLeftContentBox = h > 0 || w > 0 ? T(r.left + b + x, r.top + v, Math.max(0, h - (b + x)), w - (y + _), L.BOTTOM_LEFT) : new U(r.left + b + x, r.top + r.height - (y + _));
    }
    return e;
  })()
), L;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(L || (L = {}));
var T = function(e, A, t, r, n) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), s = t * i, o = r * i, a = e + t, l = A + r;
  switch (n) {
    case L.TOP_LEFT:
      return new Je(new U(e, l), new U(e, l - o), new U(a - s, A), new U(a, A));
    case L.TOP_RIGHT:
      return new Je(new U(e, A), new U(e + s, A), new U(a, l - o), new U(a, l));
    case L.BOTTOM_RIGHT:
      return new Je(new U(a, A), new U(a, A + o), new U(e + s, l), new U(e, l));
    case L.BOTTOM_LEFT:
    default:
      return new Je(new U(a, l), new U(a - s, l), new U(e, A + o), new U(e, A));
  }
}, ft = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Fg = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, wt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, mg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  })()
), We = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  })()
), vg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  })()
), bg = function(e) {
  return e.type === 0;
}, fo = function(e) {
  return e.type === 1;
}, yg = function(e) {
  return e.type === 2;
}, yi = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Eg = function(e, A, t, r, n) {
  return e.map(function(i, s) {
    switch (s) {
      case 0:
        return i.add(A, t);
      case 1:
        return i.add(A + r, t);
      case 2:
        return i.add(A + r, t + n);
      case 3:
        return i.add(A, t + n);
    }
    return i;
  });
}, wo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  })()
), Qo = (
  /** @class */
  (function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Ug(this.container), this.container.styles.opacity < 1 && this.effects.push(new vg(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new mg(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = ft(this.curves), o = wt(this.curves);
        yi(s, o) ? this.effects.push(new We(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new We(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new We(
          o,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var i = r.effects.filter(function(a) {
          return !fo(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = ft(r.curves), o = wt(r.curves);
            yi(s, o) || n.unshift(new We(
              o,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, i);
        r = r.parent;
      }
      return n.filter(function(a) {
        return q(a.target, A);
      });
    }, e;
  })()
), Lr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var i = q(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = q(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Qo(n, e);
    q(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(o);
    var a = q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (i || s) {
      var l = i || n.styles.isPositioned() ? t : A, c = new wo(o);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var B = n.styles.zIndex.order;
        if (B < 0) {
          var d = 0;
          l.negativeZIndex.some(function(h, w) {
            return B > h.element.container.styles.zIndex.order ? (d = w, !1) : d > 0;
          }), l.negativeZIndex.splice(d, 0, c);
        } else if (B > 0) {
          var f = 0;
          l.positiveZIndex.some(function(h, w) {
            return B >= h.element.container.styles.zIndex.order ? (f = w + 1, !1) : f > 0;
          }), l.positiveZIndex.splice(f, 0, c);
        } else
          l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
      Lr(o, c, i ? c : t, a);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), Lr(o, A, t, a);
    q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && po(n, a);
  });
}, po = function(e, A) {
  for (var t = e instanceof yr ? e.start : 1, r = e instanceof yr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var i = A[n];
    i.container instanceof eo && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = me(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Hg = function(e) {
  var A = new Qo(e, null), t = new wo(A), r = [];
  return Lr(A, t, t, r), po(A.container, r), t;
}, Ei = function(e, A) {
  switch (A) {
    case 0:
      return iA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return iA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return iA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return iA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Ig = function(e, A) {
  switch (A) {
    case 0:
      return iA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return iA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return iA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    default:
      return iA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, xg = function(e, A) {
  switch (A) {
    case 0:
      return iA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return iA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return iA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    default:
      return iA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Lg = function(e, A) {
  switch (A) {
    case 0:
      return Ye(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Ye(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Ye(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    default:
      return Ye(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Ye = function(e, A) {
  var t = [];
  return rA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), rA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, iA = function(e, A, t, r) {
  var n = [];
  return rA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), rA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), rA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), rA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Co = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Qt = function(e) {
  var A = e.styles, t = e.bounds, r = K(A.paddingLeft, t.width), n = K(A.paddingRight, t.width), i = K(A.paddingTop, t.width), s = K(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + i + s));
}, Sg = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Qt(A) : Co(A);
}, Kg = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Qt(A) : Co(A);
}, rr = function(e, A, t) {
  var r = Sg(zA(e.styles.backgroundOrigin, A), e), n = Kg(zA(e.styles.backgroundClip, A), e), i = Tg(zA(e.styles.backgroundSize, A), t, r), s = i[0], o = i[1], a = Be(zA(e.styles.backgroundPosition, A), r.width - s, r.height - o), l = Dg(zA(e.styles.backgroundRepeat, A), a, i, r, n), c = Math.round(r.left + a[0]), B = Math.round(r.top + a[1]);
  return [l, c, B, s, o];
}, JA = function(e) {
  return S(e) && e.value === Ae.AUTO;
}, Ze = function(e) {
  return typeof e == "number";
}, Tg = function(e, A, t) {
  var r = A[0], n = A[1], i = A[2], s = e[0], o = e[1];
  if (!s)
    return [0, 0];
  if (R(s) && o && R(o))
    return [K(s, t.width), K(o, t.height)];
  var a = Ze(i);
  if (S(s) && (s.value === Ae.CONTAIN || s.value === Ae.COVER)) {
    if (Ze(i)) {
      var l = t.width / t.height;
      return l < i != (s.value === Ae.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var c = Ze(r), B = Ze(n), d = c || B;
  if (JA(s) && (!o || JA(o))) {
    if (c && B)
      return [r, n];
    if (!a && !d)
      return [t.width, t.height];
    if (d && a) {
      var f = c ? r : n * i, h = B ? n : r / i;
      return [f, h];
    }
    var w = c ? r : t.width, m = B ? n : t.height;
    return [w, m];
  }
  if (a) {
    var g = 0, u = 0;
    return R(s) ? g = K(s, t.width) : R(o) && (u = K(o, t.height)), JA(s) ? g = u * i : (!o || JA(o)) && (u = g / i), [g, u];
  }
  var p = null, C = null;
  if (R(s) ? p = K(s, t.width) : o && R(o) && (C = K(o, t.height)), p !== null && (!o || JA(o)) && (C = c && B ? p / r * n : t.height), C !== null && JA(s) && (p = c && B ? C / n * r : t.width), p !== null && C !== null)
    return [p, C];
  throw new Error("Unable to calculate background-size for element");
}, zA = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Dg = function(e, A, t, r, n) {
  var i = A[0], s = A[1], o = t[0], a = t[1];
  switch (e) {
    case 2:
      return [
        new U(Math.round(r.left), Math.round(r.top + s)),
        new U(Math.round(r.left + r.width), Math.round(r.top + s)),
        new U(Math.round(r.left + r.width), Math.round(a + r.top + s)),
        new U(Math.round(r.left), Math.round(a + r.top + s))
      ];
    case 3:
      return [
        new U(Math.round(r.left + i), Math.round(r.top)),
        new U(Math.round(r.left + i + o), Math.round(r.top)),
        new U(Math.round(r.left + i + o), Math.round(r.height + r.top)),
        new U(Math.round(r.left + i), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new U(Math.round(r.left + i), Math.round(r.top + s)),
        new U(Math.round(r.left + i + o), Math.round(r.top + s)),
        new U(Math.round(r.left + i + o), Math.round(r.top + s + a)),
        new U(Math.round(r.left + i), Math.round(r.top + s + a))
      ];
    default:
      return [
        new U(Math.round(n.left), Math.round(n.top)),
        new U(Math.round(n.left + n.width), Math.round(n.top)),
        new U(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new U(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, kg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Hi = "Hidden Text", Mg = (
  /** @class */
  (function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = kg, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = A, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Hi)), r.appendChild(i), r.appendChild(n);
      var o = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Hi)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: o, middle: a };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  })()
), Uo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  })()
), Og = 1e4, Rg = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Mg(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), yg(t) && (this.ctx.globalAlpha = t.opacity), bg(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), fo(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return Z(this, void 0, void 0, function() {
        var r;
        return W(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(t) {
      return Z(this, void 0, void 0, function() {
        return W(this, function(r) {
          switch (r.label) {
            case 0:
              if (q(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var i = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var s = kr(t.text);
        s.reduce(function(o, a) {
          return i.ctx.fillText(a, o, t.bounds.top + n), o + i.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = Pg(t.fontFamily).join(", "), i = be(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return Z(this, void 0, void 0, function() {
        var n, i, s, o, a, l, c, B, d = this;
        return W(this, function(f) {
          return n = this.createFontStyle(r), i = n[0], s = n[1], o = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(s, o), l = a.baseline, c = a.middle, B = r.paintOrder, t.textBounds.forEach(function(h) {
            B.forEach(function(w) {
              switch (w) {
                case 0:
                  d.ctx.fillStyle = N(r.color), d.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  var m = r.textShadow;
                  m.length && h.text.trim().length && (m.slice(0).reverse().forEach(function(g) {
                    d.ctx.shadowColor = N(g.color), d.ctx.shadowOffsetX = g.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = g.offsetY.number * d.options.scale, d.ctx.shadowBlur = g.blur.number, d.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = N(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(g) {
                    switch (g) {
                      case 1:
                        d.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top + l), h.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top), h.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(h.bounds.left, Math.ceil(h.bounds.top + c), h.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && h.text.trim().length && (d.ctx.strokeStyle = N(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var i = Qt(t), s = wt(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, i, s, o, a, u, u, l, c, B, d, C, f, h, v, w, m, g, u, p, C, v;
        return W(this, function(Q) {
          switch (Q.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, i = r.styles, s = 0, o = r.textNodes, Q.label = 1;
            case 1:
              return s < o.length ? (a = o[s], [4, this.renderTextNode(a, i)]) : [3, 4];
            case 2:
              Q.sent(), Q.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(r instanceof js)) return [3, 8];
              Q.label = 5;
            case 5:
              return Q.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return u = Q.sent(), this.renderReplacedElement(r, n, u), [3, 8];
            case 7:
              return Q.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof $s && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Ao)) return [3, 12];
              Q.label = 9;
            case 9:
              return Q.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return u = Q.sent(), this.renderReplacedElement(r, n, u), [3, 12];
            case 11:
              return Q.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof no && r.tree ? (l = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, l.render(r.tree)]) : [3, 14];
            case 13:
              c = Q.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), Q.label = 14;
            case 14:
              if (r instanceof Mr && (B = Math.min(r.bounds.width, r.bounds.height), r.type === dt ? r.checked && (this.ctx.save(), this.path([
                new U(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79),
                new U(r.bounds.left + B * 0.16, r.bounds.top + B * 0.5549),
                new U(r.bounds.left + B * 0.27347, r.bounds.top + B * 0.44071),
                new U(r.bounds.left + B * 0.39694, r.bounds.top + B * 0.5649),
                new U(r.bounds.left + B * 0.72983, r.bounds.top + B * 0.23),
                new U(r.bounds.left + B * 0.84, r.bounds.top + B * 0.34085),
                new U(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = N(gi), this.ctx.fill(), this.ctx.restore()) : r.type === ut && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + B / 2, r.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = N(gi), this.ctx.fill(), this.ctx.restore())), qg(r) && r.value.length) {
                switch (d = this.createFontStyle(i), C = d[0], f = d[1], h = this.fontMetrics.getMetrics(C, f).baseline, this.ctx.font = C, this.ctx.fillStyle = N(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Vg(r.styles.textAlign), v = Qt(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += v.width / 2;
                    break;
                  case 2:
                    w += v.width;
                    break;
                }
                m = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new U(v.left, v.top),
                  new U(v.left + v.width, v.top),
                  new U(v.left + v.width, v.top + v.height),
                  new U(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new pe(r.value, m), i.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!q(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (g = r.styles.listStyleImage, g.type !== 0) return [3, 18];
              u = void 0, p = g.url, Q.label = 15;
            case 15:
              return Q.trys.push([15, 17, , 18]), [4, this.context.cache.match(p)];
            case 16:
              return u = Q.sent(), this.ctx.drawImage(u, r.bounds.left - (u.width + 10), r.bounds.top), [3, 18];
            case 17:
              return Q.sent(), this.context.logger.error("Error loading list-style-image " + p), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (C = this.createFontStyle(i)[0], this.ctx.font = C, this.ctx.fillStyle = N(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new FA(r.bounds.left, r.bounds.top + K(r.styles.paddingTop, r.bounds.width), r.bounds.width, jn(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new pe(t.listValue, v), i.letterSpacing, jn(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), Q.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, g, i, s, g, o, a, g, l, c, g, B, d, g, f, h, g, w, m, g;
        return W(this, function(u) {
          switch (u.label) {
            case 0:
              if (q(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              u.sent(), r = 0, n = t.negativeZIndex, u.label = 2;
            case 2:
              return r < n.length ? (g = n[r], [4, this.renderStack(g)]) : [3, 5];
            case 3:
              u.sent(), u.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              u.sent(), i = 0, s = t.nonInlineLevel, u.label = 7;
            case 7:
              return i < s.length ? (g = s[i], [4, this.renderNode(g)]) : [3, 10];
            case 8:
              u.sent(), u.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, u.label = 11;
            case 11:
              return o < a.length ? (g = a[o], [4, this.renderStack(g)]) : [3, 14];
            case 12:
              u.sent(), u.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, u.label = 15;
            case 15:
              return l < c.length ? (g = c[l], [4, this.renderStack(g)]) : [3, 18];
            case 16:
              u.sent(), u.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              B = 0, d = t.inlineLevel, u.label = 19;
            case 19:
              return B < d.length ? (g = d[B], [4, this.renderNode(g)]) : [3, 22];
            case 20:
              u.sent(), u.label = 21;
            case 21:
              return B++, [3, 19];
            case 22:
              f = 0, h = t.zeroOrAutoZIndexOrTransformedOrOpacity, u.label = 23;
            case 23:
              return f < h.length ? (g = h[f], [4, this.renderStack(g)]) : [3, 26];
            case 24:
              u.sent(), u.label = 25;
            case 25:
              return f++, [3, 23];
            case 26:
              w = 0, m = t.positiveZIndex, u.label = 27;
            case 27:
              return w < m.length ? (g = m[w], [4, this.renderStack(g)]) : [3, 30];
            case 28:
              u.sent(), u.label = 29;
            case 29:
              return w++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, A.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, i) {
        var s = rA(n) ? n.start : n;
        i === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y), rA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, i) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, i), this.ctx.fill(), this.ctx.translate(-n, -i);
    }, A.prototype.resizeImage = function(t, r, n) {
      var i;
      if (t.width === r && t.height === n)
        return t;
      var s = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, o = s.createElement("canvas");
      o.width = Math.max(1, r), o.height = Math.max(1, n);
      var a = o.getContext("2d");
      return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), o;
    }, A.prototype.renderBackgroundImage = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, i, s, o, a;
        return W(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var B, d, f, D, X, J, x, O, y, h, D, X, J, x, O, w, m, g, u, p, C, v, Q, E, y, b, D, V, _, x, O, sA, X, J, fA, j, BA, wA, QA, eA, dA, oA;
                return W(this, function(mA) {
                  switch (mA.label) {
                    case 0:
                      if (c.type !== 0) return [3, 5];
                      B = void 0, d = c.url, mA.label = 1;
                    case 1:
                      return mA.trys.push([1, 3, , 4]), [4, i.context.cache.match(d)];
                    case 2:
                      return B = mA.sent(), [3, 4];
                    case 3:
                      return mA.sent(), i.context.logger.error("Error loading background-image " + d), [3, 4];
                    case 4:
                      return B && (f = rr(t, r, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), D = f[0], X = f[1], J = f[2], x = f[3], O = f[4], y = i.ctx.createPattern(i.resizeImage(B, x, O), "repeat"), i.renderRepeat(D, y, X, J)), [3, 6];
                    case 5:
                      bd(c) ? (h = rr(t, r, [null, null, null]), D = h[0], X = h[1], J = h[2], x = h[3], O = h[4], w = Cd(c.angle, x, O), m = w[0], g = w[1], u = w[2], p = w[3], C = w[4], v = document.createElement("canvas"), v.width = x, v.height = O, Q = v.getContext("2d"), E = Q.createLinearGradient(g, p, u, C), Zn(c.stops, m).forEach(function(TA) {
                        return E.addColorStop(TA.stop, N(TA.color));
                      }), Q.fillStyle = E, Q.fillRect(0, 0, x, O), x > 0 && O > 0 && (y = i.ctx.createPattern(v, "repeat"), i.renderRepeat(D, y, X, J))) : yd(c) && (b = rr(t, r, [
                        null,
                        null,
                        null
                      ]), D = b[0], V = b[1], _ = b[2], x = b[3], O = b[4], sA = c.position.length === 0 ? [Kr] : c.position, X = K(sA[0], x), J = K(sA[sA.length - 1], O), fA = Ud(c, X, J, x, O), j = fA[0], BA = fA[1], j > 0 && BA > 0 && (wA = i.ctx.createRadialGradient(V + X, _ + J, 0, V + X, _ + J, j), Zn(c.stops, j * 2).forEach(function(TA) {
                        return wA.addColorStop(TA.stop, N(TA.color));
                      }), i.path(D), i.ctx.fillStyle = wA, j !== BA ? (QA = t.bounds.left + 0.5 * t.bounds.width, eA = t.bounds.top + 0.5 * t.bounds.height, dA = BA / j, oA = 1 / dA, i.ctx.save(), i.ctx.translate(QA, eA), i.ctx.transform(1, 0, 0, dA, 0, 0), i.ctx.translate(-QA, -eA), i.ctx.fillRect(V, oA * (_ - eA) + eA, x, O * oA), i.ctx.restore()) : i.ctx.fill())), mA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, s = 0, o = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return s < o.length ? (a = o[s], [5, n(a)]) : [3, 4];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, n) {
      return Z(this, void 0, void 0, function() {
        return W(this, function(i) {
          return this.path(Ei(n, r)), this.ctx.fillStyle = N(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, i) {
      return Z(this, void 0, void 0, function() {
        var s, o;
        return W(this, function(a) {
          switch (a.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = Ig(i, n), this.path(s), this.ctx.fillStyle = N(t), this.ctx.fill(), o = xg(i, n), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, i, s, o, a, l, c, B = this;
        return W(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !SA(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = Ng(zA(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), SA(r.backgroundColor) || (this.ctx.fillStyle = N(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                B.ctx.save();
                var h = ft(t.curves), w = f.inset ? 0 : Og, m = Eg(h, -w + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (B.path(h), B.ctx.clip(), B.mask(m)) : (B.mask(h), B.ctx.clip(), B.path(m)), B.ctx.shadowOffsetX = f.offsetX.number + w, B.ctx.shadowOffsetY = f.offsetY.number, B.ctx.shadowColor = N(f.color), B.ctx.shadowBlur = f.blur.number, B.ctx.fillStyle = f.inset ? N(f.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), d.label = 2;
            case 2:
              o = 0, a = 0, l = i, d.label = 3;
            case 3:
              return a < l.length ? (c = l[a], c.style !== 0 && !SA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                o,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return d.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                o,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return d.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, o, t.curves)];
            case 8:
              return d.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, o, t.curves)];
            case 10:
              d.sent(), d.label = 11;
            case 11:
              o++, d.label = 12;
            case 12:
              return a++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, i, s) {
      return Z(this, void 0, void 0, function() {
        var o, a, l, c, B, d, f, h, w, m, g, u, p, C, v, Q, v, Q;
        return W(this, function(E) {
          return this.ctx.save(), o = Lg(i, n), a = Ei(i, n), s === 2 && (this.path(a), this.ctx.clip()), rA(a[0]) ? (l = a[0].start.x, c = a[0].start.y) : (l = a[0].x, c = a[0].y), rA(a[1]) ? (B = a[1].end.x, d = a[1].end.y) : (B = a[1].x, d = a[1].y), n === 0 || n === 2 ? f = Math.abs(l - B) : f = Math.abs(c - d), this.ctx.beginPath(), s === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), h = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, s === 3 && (h = r, w = r), m = !0, f <= h * 2 ? m = !1 : f <= h * 2 + w ? (g = f / (2 * h + w), h *= g, w *= g) : (u = Math.floor((f + w) / (h + w)), p = (f - u * h) / (u - 1), C = (f - (u + 1) * h) / u, w = C <= 0 || Math.abs(w - p) < Math.abs(w - C) ? p : C), m && (s === 3 ? this.ctx.setLineDash([0, h + w]) : this.ctx.setLineDash([h, w])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = N(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (rA(a[0]) && (v = a[3], Q = a[0], this.ctx.beginPath(), this.formatPath([new U(v.end.x, v.end.y), new U(Q.start.x, Q.start.y)]), this.ctx.stroke()), rA(a[1]) && (v = a[1], Q = a[2], this.ctx.beginPath(), this.formatPath([new U(v.end.x, v.end.y), new U(Q.start.x, Q.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return Z(this, void 0, void 0, function() {
        var r;
        return W(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = N(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Hg(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  })(Uo)
), qg = function(e) {
  return e instanceof ro || e instanceof to ? !0 : e instanceof Mr && e.type !== ut && e.type !== dt;
}, Ng = function(e, A) {
  switch (e) {
    case 0:
      return ft(A);
    case 2:
      return Fg(A);
    default:
      return wt(A);
  }
}, Vg = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, Gg = ["-apple-system", "system-ui"], Pg = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Gg.indexOf(A) === -1;
  }) : e;
}, _g = (
  /** @class */
  (function(e) {
    lA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n;
        return W(this, function(i) {
          switch (i.label) {
            case 0:
              return r = br(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Xg(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = N(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  })(Uo)
), Xg = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Jg = (
  /** @class */
  (function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, He([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, He([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, He([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, He([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  })()
), Wg = (
  /** @class */
  (function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Jg({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new hg(this, A);
    }
    return e.instanceCount = 1, e;
  })()
), Yg = function(e, A) {
  return A === void 0 && (A = {}), Zg(e, A);
};
typeof window < "u" && go.setContext(window);
var Zg = function(e, A) {
  return Z(void 0, void 0, void 0, function() {
    var t, r, n, i, s, o, a, l, c, B, d, f, h, w, m, g, u, p, C, v, E, Q, E, y, b, D, V, _, x, O, sA, X, J, fA, j, BA, wA, QA, eA, dA;
    return W(this, function(oA) {
      switch (oA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (y = A.allowTaint) !== null && y !== void 0 ? y : !1,
            imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: A.proxy,
            useCORS: (D = A.useCORS) !== null && D !== void 0 ? D : !1
          }, i = lr({ logging: (V = A.logging) !== null && V !== void 0 ? V : !0, cache: A.cache }, n), s = {
            windowWidth: (_ = A.windowWidth) !== null && _ !== void 0 ? _ : r.innerWidth,
            windowHeight: (x = A.windowHeight) !== null && x !== void 0 ? x : r.innerHeight,
            scrollX: (O = A.scrollX) !== null && O !== void 0 ? O : r.pageXOffset,
            scrollY: (sA = A.scrollY) !== null && sA !== void 0 ? sA : r.pageYOffset
          }, o = new FA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), a = new Wg(i, o), l = (X = A.foreignObjectRendering) !== null && X !== void 0 ? X : !1, c = {
            allowTaint: (J = A.allowTaint) !== null && J !== void 0 ? J : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), B = new vi(a, e, c), d = B.clonedReferenceElement, d ? [4, B.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return f = oA.sent(), h = Or(d) || zh(d) ? El(d.ownerDocument) : Ct(a, d), w = h.width, m = h.height, g = h.left, u = h.top, p = zg(a, d, A.backgroundColor), C = {
            canvas: A.canvas,
            backgroundColor: p,
            scale: (j = (fA = A.scale) !== null && fA !== void 0 ? fA : r.devicePixelRatio) !== null && j !== void 0 ? j : 1,
            x: ((BA = A.x) !== null && BA !== void 0 ? BA : 0) + g,
            y: ((wA = A.y) !== null && wA !== void 0 ? wA : 0) + u,
            width: (QA = A.width) !== null && QA !== void 0 ? QA : Math.ceil(w),
            height: (eA = A.height) !== null && eA !== void 0 ? eA : Math.ceil(m)
          }, l ? (a.logger.debug("Document cloned, using foreign object rendering"), E = new _g(a, C), [4, E.render(d)]) : [3, 3];
        case 2:
          return v = oA.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + g + "," + u + " with size " + w + "x" + m + " using computed rendering"), a.logger.debug("Starting DOM parsing"), Q = so(a, d), p === Q.styles.backgroundColor && (Q.styles.backgroundColor = UA.TRANSPARENT), a.logger.debug("Starting renderer for element at " + C.x + "," + C.y + " with size " + C.width + "x" + C.height), E = new Rg(a, C), [4, E.render(Q)];
        case 4:
          v = oA.sent(), oA.label = 5;
        case 5:
          return (!((dA = A.removeContainer) !== null && dA !== void 0) || dA) && (vi.destroy(f) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, zg = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? we(e, getComputedStyle(r.documentElement).backgroundColor) : UA.TRANSPARENT, i = r.body ? we(e, getComputedStyle(r.body).backgroundColor) : UA.TRANSPARENT, s = typeof t == "string" ? we(e, t) : t === null ? UA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? SA(n) ? SA(i) ? s : i : n : s;
};
const jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yg
}, Symbol.toStringTag, { value: "Module" }));
export {
  ji as AnnotationEditor,
  Ac as QaidFeedback,
  bc as captureDomScreenshot,
  Bc as captureNetworkErrors,
  zi as compositeAnnotations,
  Uc as createVideoRecorder,
  ot as drawShape,
  _i as getSupportedMimeType,
  mc as isDomScreenshotSupported,
  Cc as isVideoRecordingSupported,
  Rc as openAnnotationEditor,
  st as rectFromPoints,
  Ka as startErrorReporting
};
//# sourceMappingURL=index.js.map
