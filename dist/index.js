const er = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, tr = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, xo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, mi = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8M8 14h5m-9 6l3.5-3.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"/>
</svg>`, Lo = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', So = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, Ko = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, To = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, Do = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, ko = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, bi = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, Mo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v8m0 4h.01"/>
</svg>`, Oo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`, Ro = "http://www.w3.org/2000/svg", yi = {};
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
  yi[e.toLowerCase()] = e;
const Ei = {};
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
  Ei[e.toLowerCase()] = e;
const qo = /* @__PURE__ */ new Set(["title", "desc"]), Pr = 5e4, Vo = 1e3, No = {
  lt: "<",
  gt: ">",
  amp: "&",
  quot: '"',
  apos: "'",
  nbsp: " "
};
function _r(e) {
  return e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (A, t) => {
    if (t[0] === "#") {
      const r = t[1] === "x" || t[1] === "X" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
      return r > 0 && r <= 1114111 ? String.fromCodePoint(r) : "";
    }
    return No[t.toLowerCase()] ?? A;
  });
}
const Xr = /url\(\s*(['"]?)#[A-Za-z_][\w.:-]*\1\s*\)/gi;
function Go(e, A) {
  const t = A.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase();
  if (/(java|vb)script:|data:|expression\(/.test(t)) return !1;
  const r = A.replace(Xr, "");
  return /url\(/.test(r.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase()) ? !1 : e === "clip-path" ? /^\s*none\s*$/i.test(A) || new RegExp(`^\\s*${Xr.source}\\s*$`, "i").test(A) : !0;
}
function Jr(e) {
  if (typeof e != "string" || typeof document > "u") return null;
  const A = e.trim();
  if (!A || A.length > Pr) return null;
  let t = null, r = !1, n = 0;
  const i = [];
  let s = 0;
  const o = () => i[i.length - 1];
  for (; s < A.length && !r; ) {
    const a = A.indexOf("<", s), l = a === -1 ? A.length : a;
    if (l > s) {
      const U = A.slice(s, l), p = o();
      if (p?.node && qo.has(p.name))
        p.node.appendChild(document.createTextNode(_r(U)));
      else if (!p && U.trim())
        return null;
    }
    if (a === -1) break;
    if (s = a, A.startsWith("<!--", s)) {
      const U = A.indexOf("-->", s + 4);
      if (U === -1) return null;
      s = U + 3;
      continue;
    }
    if (A.startsWith("<?", s)) {
      if (t) return null;
      const U = A.indexOf("?>", s + 2);
      if (U === -1) return null;
      s = U + 2;
      continue;
    }
    if (A.startsWith("<!", s))
      return null;
    if (A[s + 1] === "/") {
      const U = /^<\/\s*([A-Za-z][\w:.-]*)\s*>/.exec(A.slice(s, s + 200));
      if (!U) return null;
      s += U[0].length;
      const p = U[1].toLowerCase(), v = i.map((Q) => Q.name).lastIndexOf(p);
      v !== -1 && (i.length = v, v === 0 && (r = !0));
      continue;
    }
    const c = /^<([A-Za-z][\w:.-]*)/.exec(A.slice(s, s + 200));
    if (!c) return null;
    const d = c[1].toLowerCase();
    s += c[0].length;
    const g = [];
    let h = !1, f = !1;
    for (; s < A.length; ) {
      const U = /^\s*/.exec(A.slice(s, s + 1e3))[0];
      if (s += U.length, A.startsWith("/>", s)) {
        h = !0, f = !0, s += 2;
        break;
      }
      if (A[s] === ">") {
        f = !0, s += 1;
        break;
      }
      const p = /^([^\s=/>"'<]+)/.exec(A.slice(s, s + 200));
      if (!p) return null;
      const v = p[1];
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
          const b = /^[^\s>]+/.exec(A.slice(s, s + Pr));
          if (!b) return null;
          Q = b[0], Q.endsWith("/") && A[s + Q.length] === ">" && (Q = Q.slice(0, -1)), s += Q.length;
        }
      }
      g.push([v, _r(Q)]);
    }
    if (!f || ++n > Vo) return null;
    const m = o();
    if (m) {
      if (!m.node) {
        h || i.push({ name: d, node: null });
        continue;
      }
    } else if (t || d !== "svg") return null;
    const w = yi[d];
    if (!w) {
      h || i.push({ name: d, node: null });
      continue;
    }
    const u = document.createElementNS(Ro, w);
    for (const [U, p] of g) {
      const v = Ei[U.toLowerCase()];
      v && Go(v, p) && u.setAttribute(v, p);
    }
    m ? m.node.appendChild(u) : t = u, h ? m || (r = !0) : i.push({ name: d, node: u });
  }
  return t;
}
function MA(e, A) {
  return (e ? Jr(e) : null) ?? Jr(A);
}
function DA(e, A, t) {
  e.textContent = "", e.appendChild(MA(A, t));
}
const Po = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}:where(button.qaid-btn-structural)>svg:where(:not(.qaid-icon):not([width])){width:var(--qaid-icon-size, 24px);height:var(--qaid-icon-size, 24px)}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:var(--qaid-font-size, 16px);font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}button.qaid-btn-record:hover{background:#dc2626;color:#fff}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid CanvasText;outline-offset:2px}}", _o = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let he = 0;
const Xo = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn-feedback:hover{background:var(--qaid-marker,#6365f1);color:var(--qaid-marker-text,#fff)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", Jo = {
  small: 36,
  medium: 48,
  large: 64
}, Wo = {
  small: 18,
  medium: 24,
  large: 32
};
function Yo(e, A, t) {
  const [r, n, i] = [e, A, t].map((s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * n + 0.0722 * i;
}
function Zo(e) {
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
function zo(e) {
  const A = Zo(e);
  return A && Yo(A.r, A.g, A.b) > 0.4 ? "black" : "white";
}
function jo(e = {}) {
  const {
    positiveColor: A = "rgb(0, 200, 83)",
    negativeColor: t = "rgb(255, 0, 0)",
    markerColor: r = "#6365f1",
    buttonSize: n = "medium",
    modalWidth: i = 400,
    backdropOpacity: s = 0.3,
    fontFamily: o = "system-ui, -apple-system, sans-serif",
    fontSize: a = 16
  } = e, l = Jo[n], c = Wo[n], B = zo(r);
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
function $o(e, A) {
  for (const [t, r] of Object.entries(A))
    e.style.setProperty(t, r);
}
function Wr() {
  return Po + Xo;
}
function Aa() {
  if (he++, he > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = _o, document.head.appendChild(e);
}
function ea() {
  he <= 0 || (he--, he === 0 && document.getElementById("qaid-styles")?.remove());
}
const Yr = "data-qaid-a11y-live", ta = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;";
function ra(e) {
  return e.ownerDocument || document;
}
function na(e, A) {
  const t = A ? "assertive" : "polite", r = e.querySelector(
    `[${Yr}="${t}"]`
  );
  if (r) return r;
  const i = ra(e).createElement("div");
  return i.setAttribute(Yr, t), i.setAttribute("role", A ? "alert" : "status"), i.setAttribute("aria-live", A ? "assertive" : "polite"), i.setAttribute("aria-atomic", "true"), i.style.cssText = ta, e.appendChild(i), i;
}
function ia(e, A, t = {}) {
  const r = na(e, !!t.assertive);
  r.textContent = "", r.textContent = A;
}
function sa(e, A, t, r = {}) {
  const n = r.gap ?? 8;
  let i = e.bottom + n;
  i + A.height > t.height - n && (i = e.top - A.height - n);
  let s = e.left;
  return s < n ? s = n : s + A.width > t.width - n && (s = t.width - A.width - n), i < n ? i = n : i + A.height > t.height - n && (i = t.height - A.height - n), { top: i, left: s };
}
const lA = "[redacted]", Zr = 1e3, Lt = /login|log-in|signin|sign-in|signup|sign-up|auth|token|password|passwd|session|oauth|2fa|mfa|credential/i, oa = /token|key|secret|pass(word|wd)?|pwd|code|sess|auth|sig|otp|jwt|credential|ticket|nonce|state/i, zr = "(?:password|passwd|pwd|pass|secret|token|access_token|refresh_token|id_token|api[_-]?key|apikey|client_secret|private[_-]?key|session(?:id)?|auth(?:orization)?|cookie|set-cookie|otp|pin|cvv|cvc|ssn)", aa = [
  // Authorization header values.
  [/\b(Bearer|Basic|Token|Digest)\s+[A-Za-z0-9._~+/=-]{8,}/gi, (e, A) => `${A} ${lA}`],
  // JWTs (header.payload[.signature]).
  [/\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}(?:\.[A-Za-z0-9_-]*)?/g, lA],
  // "password": "x"  /  'token': 'x'  (JSON and JS object text).
  [
    new RegExp(`(["']?${zr}["']?\\s*:\\s*)(["'])(?:\\\\.|(?!\\2).)*\\2`, "gi"),
    (e, A, t) => `${A}${t}${lA}${t}`
  ],
  // password=x  /  token: x  (query strings, form bodies, log lines).
  [
    // The value is not a quote (the rule above) and not an auth scheme
    // (the Bearer rule already kept the scheme and cut the credential).
    new RegExp(`(\\b${zr}\\s*[=:]\\s*)(?!["'\\s]|(?:Bearer|Basic|Token|Digest)\\s|\\[redacted\\])[^\\s&;,"'}]+`, "gi"),
    (e, A) => `${A}${lA}`
  ],
  // Card-number-like runs: 13 to 19 digits, optionally grouped by spaces or
  // dashes, that pass the Luhn check (so a Date.now() stays readable).
  [/\b\d(?:[ -]?\d){12,18}\b/g, (e) => ca(e.replace(/\D/g, "")) ? lA : e],
  // Long hex strings (API keys, hashes, session ids).
  [/\b[A-Fa-f0-9]{32,}\b/g, lA],
  // Long base64 / base64url / prefixed keys (sk_live_…, ghp_…): 32+
  // characters mixing upper case, lower case and digits. `/` is left out so
  // a script path in a stack trace stays readable.
  [/[A-Za-z0-9_+-]{32,}={0,2}/g, (e) => /\d/.test(e) && /[a-z]/.test(e) && /[A-Z]/.test(e) ? lA : e]
];
function ca(e) {
  let A = 0;
  for (let t = 0; t < e.length; t++) {
    let r = Number(e[e.length - 1 - t]);
    t % 2 === 1 && (r *= 2, r > 9 && (r -= 9)), A += r;
  }
  return A % 10 === 0;
}
function pt(e) {
  let A = e;
  for (const [t, r] of aa)
    A = A.replace(t, r);
  return A;
}
function Hi(e, A) {
  return e.length > A ? `${e.slice(0, A)}…[truncated]` : e;
}
function la(e) {
  return Hi(pt(e.slice(0, Zr * 2)), Zr);
}
function jr(e) {
  let A = !1;
  for (const t of Array.from(new Set(e.keys())))
    oa.test(t) && (e.set(t, lA), A = !0);
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
  if (A.username = "", A.password = "", jr(A.searchParams) && (A.search = A.search.replace(/%5Bredacted%5D/g, lA)), A.hash.includes("=")) {
    const i = new URLSearchParams(A.hash.slice(1));
    jr(i) && (A.hash = i.toString().replace(/%5Bredacted%5D/g, lA));
  }
  const r = A.href;
  return !/^[a-z][a-z0-9+.-]*:/i.test(e) && !e.startsWith("//") && r.startsWith(t) ? r.slice(t.length) : r;
}
function Ba(e) {
  try {
    const A = new URL(e, "https://qaid.invalid");
    return Lt.test(A.hostname) || Lt.test(A.pathname);
  } catch {
    return Lt.test(e);
  }
}
function $r(e, A, t) {
  if (t !== void 0)
    return A === 401 || A === 403 || Ba(e) ? lA : pt(t);
}
const da = 20;
function ua(e) {
  const A = [], t = console.error, r = console.warn, n = console.log, i = (s, o) => {
    const a = {
      // Sent with the report: secrets replaced, length capped (see redact.ts).
      message: la(o.map((l) => String(l)).join(" ")),
      timestamp: Date.now(),
      level: s
    };
    A.length >= da && A.shift(), A.push(a), e && e(a);
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
const ha = 50, ga = 3, An = 25, fa = 2e3, en = 2e3, tn = 8e3, rn = "qaid_session_id";
function wa(e) {
  try {
    let A = sessionStorage.getItem(rn);
    return A || (A = e(), sessionStorage.setItem(rn, A)), A;
  } catch {
    return e();
  }
}
function nn(e) {
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
  return e ? Hi(pt(e.slice(0, A * 2)), A) : void 0;
}
function Qa(e) {
  const A = { flush() {
  }, stop() {
  } }, t = e.sampleRate ?? 1;
  if (typeof window > "u" || Math.random() >= t) return A;
  const r = [], n = /* @__PURE__ */ new Map();
  let i = 0, s = !1, o = !1, a = null;
  const l = (w, u) => {
    const U = JSON.stringify({
      apiKey: e.apiKey,
      sessionId: e.sessionId,
      visitorId: e.visitorId,
      release: e.release,
      environment: e.environment,
      pageUrl: ge(window.location.href),
      events: w
    });
    try {
      if (u && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(e.endpoint, new Blob([U], { type: "text/plain" })))
        return;
      fetch(e.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: U,
        keepalive: !0,
        credentials: "omit"
      }).then((p) => {
        (p.status === 401 || p.status === 403 || p.status === 410) && (o = !0);
      }).catch(() => {
      });
    } catch {
    }
  }, c = (w) => {
    for (a && (clearTimeout(a), a = null); r.length && !o; ) l(r.splice(0, An), w);
    r.length = 0;
  }, B = (w) => {
    if (s || o || i >= ha) return;
    const u = `${w.kind}|${w.message}|${w.file ?? ""}|${w.line ?? 0}`, U = n.get(u) ?? 0;
    U >= ga || (n.set(u, U + 1), i++, r.push(w), r.length >= An ? c(!1) : a || (a = setTimeout(() => c(!1), fa)));
  }, d = () => ({
    occurredAt: (/* @__PURE__ */ new Date()).toISOString(),
    pageUrl: ge(window.location.href)
  }), g = (w) => {
    try {
      if (!w.message && !w.error) return;
      const u = nn(w.error ?? w.message);
      B({
        kind: "error",
        message: ye(u.message || w.message, en) ?? "Unknown error",
        errorType: u.errorType,
        stack: ye(u.stack, tn),
        file: w.filename ? ge(w.filename) : void 0,
        line: w.lineno || void 0,
        column: w.colno || void 0,
        ...d()
      });
    } catch {
    }
  }, h = (w) => {
    try {
      const u = nn(w.reason);
      B({
        kind: "unhandledrejection",
        message: ye(u.message, en) ?? "Unhandled rejection",
        errorType: u.errorType,
        stack: ye(u.stack, tn),
        ...d()
      });
    } catch {
    }
  }, f = () => c(!0), m = () => {
    document.visibilityState === "hidden" && c(!0);
  };
  return window.addEventListener("error", g), window.addEventListener("unhandledrejection", h), window.addEventListener("pagehide", f), document.addEventListener("visibilitychange", m), {
    flush: () => c(!1),
    stop: () => {
      s || (s = !0, window.removeEventListener("error", g), window.removeEventListener("unhandledrejection", h), window.removeEventListener("pagehide", f), document.removeEventListener("visibilitychange", m), c(!0));
    }
  };
}
function AA(e, A, t) {
  const r = document.createElement(e);
  if (A)
    for (const [n, i] of Object.entries(A))
      n === "className" ? r.className = i : r.setAttribute(n, i);
  if (t)
    for (const n of t)
      typeof n == "string" ? r.appendChild(document.createTextNode(n)) : r.appendChild(n);
  return r;
}
function pa(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function sn(e, A, t) {
  const r = t.map((i) => i.style.visibility);
  t.forEach((i) => i.style.visibility = "hidden");
  const n = document.elementFromPoint(e, A);
  return t.forEach((i, s) => i.style.visibility = r[s]), n;
}
function ze(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function on(e, A = 0) {
  const t = e.getBoundingClientRect();
  return {
    x: t.left - A,
    y: t.top - A,
    width: t.width + A * 2,
    height: t.height + A * 2
  };
}
const Ca = "1.12.1", jA = `https://unpkg.com/@qaiddev/quests-embed@${Ca}/dist/qaid-quests.js`, Ua = "sha384-ulTEyFqoUl1HNdNL8rFOB/mSItoy12PPegqJJIspDm0WtPK4/2jl3bRVrHoEtrm1", Fa = /^https:\/\/unpkg\.com\/@qaiddev\/quests-embed@\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?\//;
let an = !1;
function va(e) {
  if (!e) return jA;
  if (e === jA) return e;
  try {
    const A = typeof location < "u" ? location.href : void 0, t = new URL(e, A);
    if (Fa.test(t.href) && !/%2e|%2f|%5c/i.test(t.pathname) || A && t.origin === new URL(A).origin && (t.protocol === "https:" || t.protocol === "http:"))
      return t.href;
  } catch {
  }
  return an || (an = !0, console.warn(
    `[thumbs-embed] Ignoring quests moduleUrl "${e}": use a same-origin URL or https://unpkg.com/@qaiddev/quests-embed@<exact version>/…. Using ${jA}.`
  )), jA;
}
const ma = 3e3, ba = {
  buttonClass: "string",
  direction: ["horizontal", "vertical"],
  position: ["bottom-right", "bottom-left", "top-right", "top-left"],
  zIndex: "number",
  skipTargeting: "boolean",
  singleButton: "boolean",
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
  hideThumbs: "boolean",
  css: "string",
  screenshotMethod: ["dom", "permission"]
}, Ii = {
  offset: { x: "number", y: "number" },
  colors: { positive: "string", negative: "string", marker: "string" },
  text: "strings",
  videoOptions: { maxDuration: "number", redaction: "boolean" },
  screenshotOptions: { quality: "number", maxWidth: "number", maxHeight: "number" },
  quests: { base: "string", up: "string", down: "string", video: "string" }
}, ya = /* @__PURE__ */ new Set([
  "positiveIcon",
  "negativeIcon",
  "css",
  "buttonClass",
  "colors",
  "buttonSize",
  "text"
]), it = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function xi(e, A) {
  return Array.isArray(A) ? typeof e == "string" && A.includes(e) : A === "number" ? typeof e == "number" && Number.isFinite(e) : typeof e === A;
}
function Ea(e, A) {
  if (!it(e)) return;
  const t = {};
  for (const [r, n] of Object.entries(e))
    (A === "strings" ? typeof n == "string" : r in A && xi(n, A[r])) && (t[r] = n);
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e, A) {
  try {
    const t = typeof location < "u" ? location.href : void 0;
    return new URL(e, t).origin === new URL(A, t).origin;
  } catch {
    return !1;
  }
}
function Li(e, A) {
  if (!it(e)) return {};
  const t = {};
  for (const [i, s] of Object.entries(ba))
    xi(e[i], s) && (t[i] = e[i]);
  for (const [i, s] of Object.entries(Ii)) {
    const o = Ea(e[i], s);
    o && (t[i] = o);
  }
  const r = e.annotationPalette;
  Array.isArray(r) && r.length > 0 && r.every((i) => typeof i == "string" && i.trim()) && (t.annotationPalette = r);
  const n = t.quests;
  return n?.base && !Ha(n.base, A) && (console.warn("[thumbs-embed] Ignoring a fetched quest base on another origin than the endpoint."), delete t.quests), t;
}
function Ia(e, A) {
  const t = Li(e, A);
  return Object.fromEntries(Object.entries(t).filter(([r]) => ya.has(r)));
}
function xa(...e) {
  const A = {};
  for (const t of e)
    if (t) {
      for (const [r, n] of Object.entries(t))
        if (n !== void 0)
          if (r in Ii && it(n)) {
            const s = { ...it(A[r]) ? A[r] : {} };
            for (const [o, a] of Object.entries(n)) a !== void 0 && (s[o] = a);
            A[r] = s;
          } else
            A[r] = n;
    }
  return A;
}
function La(e, A) {
  return `${e.replace(/\/+$/, "")}/config?apiKey=${encodeURIComponent(A)}`;
}
async function cn(e, A, t) {
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
function Sa(e) {
  return e.remoteConfig === !0 || !!e.themeUrl;
}
async function Ka(e) {
  const A = e.remoteTimeoutMs ?? ma;
  let t = null;
  e.remoteConfig && (e.apiKey ? t = La(e.endpoint, e.apiKey) : console.warn("[thumbs-embed] remoteConfig needs an apiKey; drawing without it."));
  const [r, n] = await Promise.all([
    t ? cn(t, A, "Project config") : null,
    e.themeUrl ? cn(e.themeUrl, A, "Theme") : null
  ]);
  return xa(
    r ? Li(r, e.endpoint) : null,
    n ? Ia(n, e.endpoint) : null,
    e
  );
}
const ln = "qaid_visitor_id", Bn = "qaid_hide_feedback", Ta = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#111827",
  "#ffffff"
];
function Da() {
  return typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches;
}
function rr(e) {
  return e ? `${Bn}_${e}` : Bn;
}
function ka(e) {
  try {
    return localStorage.getItem(rr(e)) === "1";
  } catch {
    return !1;
  }
}
function dn(e, A = !0) {
  try {
    A ? localStorage.setItem(rr(e), "1") : localStorage.removeItem(rr(e));
  } catch {
  }
}
function nr() {
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
function Ma(e) {
  const A = e.replace(/\/+$/, "");
  if (/\/feedback$/.test(A)) return A.replace(/\/feedback$/, "/errors");
  try {
    return new URL("/api/errors", e).href;
  } catch {
    return "/api/errors";
  }
}
function Oa() {
  try {
    let e = localStorage.getItem(ln);
    return e || (e = nr(), localStorage.setItem(ln, e)), e;
  } catch {
    return nr();
  }
}
function un(e, A) {
  const t = document.createElement("style");
  t.setAttribute("data-qaid-feature", ""), t.textContent = A;
  const r = e.querySelectorAll("style[data-qaid-base], style[data-qaid-feature]"), n = r[r.length - 1];
  e.insertBefore(t, n ? n.nextSibling : e.firstChild);
}
function hn(e) {
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
    annotationPalette: e.annotationPalette ?? Ta,
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
      moduleUrl: va(e.quests?.moduleUrl)
    }
  };
}
class Ra {
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
    if (this.config = hn(A), this.boundKeyDown = this.handleKeyDown.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Oa(), this.sessionId = wa(nr), A.captureErrors && A.apiKey) {
      const t = typeof A.captureErrors == "object" ? A.captureErrors : {};
      this.errorReporter = Qa({
        endpoint: t.endpoint ?? Ma(A.endpoint),
        apiKey: A.apiKey,
        sessionId: this.sessionId,
        visitorId: this.visitorId,
        release: t.release,
        environment: t.environment,
        sampleRate: t.sampleRate
      });
    }
    Sa(A) ? this.ready = Ka(A).then((t) => {
      this.destroyed || (this.config = hn(t), this.init());
    }) : this.init();
  }
  applyVars(A) {
    $o(A, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(A, t = !1) {
    const r = this.overlayShadowRoot ?? this.shadowRoot;
    r && ia(r, A, { assertive: t });
  }
  /** Load the dialog a11y helpers; every surface that opens a dialog awaits this first. */
  async loadDialogA11y() {
    this.dialogModule ??= await Promise.resolve().then(() => Cn);
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
    this.initialized = !0, Aa(), this.cssVars = jo({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && ka(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = ua((A) => {
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
    this.clickPathPrewarmed || (this.clickPathPrewarmed = !0, Promise.resolve().then(() => St).catch(() => {
    }), Promise.resolve().then(() => Cn).catch(() => {
    }), Promise.resolve().then(() => Fn).catch(() => {
    }), this.skipsTargeting() || Promise.resolve().then(() => vn).catch(() => {
    }));
  }
  /** "annotate" mode and skipTargeting both go straight to the send flow. */
  skipsTargeting() {
    return this.config.skipTargeting || this.config.feedbackMode === "annotate";
  }
  /**
   * Best-effort preload of a lazily-split feature chunk so its first use is
   * instant. Warming fetches + compiles (and defines) the module; the feature
   * modules have no load-time side effects, so this is safe. Errors are
   * swallowed — a failed preload just falls back to an on-demand load.
   */
  prewarmVideo() {
    this.videoPrewarmed || (this.videoPrewarmed = !0, Promise.resolve().then(() => mn).catch(() => {
    }), Promise.resolve().then(() => qi).catch(() => {
    }));
  }
  prewarmScreenshot() {
    this.screenshotPrewarmed || (this.screenshotPrewarmed = !0, (this.shouldCaptureViaDom() ? Promise.resolve().then(() => Gi) : Promise.resolve().then(() => Bs)).catch(() => {
    }), this.config.annotate && Promise.resolve().then(() => Ji).catch(() => {
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
    Promise.resolve().then(() => kc).then((n) => {
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
    this.isMobile = pa();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let A = null;
    this.config.container && (A = document.querySelector(this.config.container)), A ? (A.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    if (t.setAttribute("data-qaid-base", ""), t.textContent = Wr(), this.shadowRoot.appendChild(t), this.config.css) {
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
    const i = !!this.config.buttonClass, s = i ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", a = this.config.text.tooltip || "Feedback for us?", l = document.createElement("div");
    if (l.className = "qaid-tooltip-text", l.textContent = a, this.applyVars(l), this.shadowRoot.appendChild(l), this.tooltipElement = l, this.config.singleButton) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-feedback` : "qaid-btn qaid-btn-feedback", B.setAttribute("aria-label", this.config.text.feedbackLabel), DA(B, this.config.feedbackIcon, mi), B.addEventListener("click", (d) => this.handleThumbClick("neutral", d.currentTarget, d)), B.addEventListener("mouseenter", () => this.showTooltip(B)), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B), this.buttonsContainer.appendChild(c);
    } else if (!this.config.hideThumbs) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-up` : "qaid-btn qaid-btn-up", B.setAttribute("aria-label", this.config.text.positiveLabel), DA(B, this.config.positiveIcon, er), B.addEventListener("click", (h) => this.handleThumbClick("up", h.currentTarget, h)), B.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(B);
      }), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B);
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const g = document.createElement("button");
      g.type = "button", g.className = i ? `${s} qaid-btn-down` : "qaid-btn qaid-btn-down", g.setAttribute("aria-label", this.config.text.negativeLabel), DA(g, this.config.negativeIcon, tr), g.addEventListener("click", (h) => this.handleThumbClick("down", h.currentTarget, h)), g.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(g);
      }), g.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(g), this.buttonsContainer.appendChild(c), this.buttonsContainer.appendChild(d);
    }
    if (this.config.captureVideo && this.videoSupported()) {
      const c = document.createElement("div");
      c.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-record` : "qaid-btn qaid-btn-record", B.setAttribute("aria-label", this.config.text.recordLabel), DA(B, this.config.recordIcon, xo), B.addEventListener("click", () => {
        this.ensureRecording().then(
          (g) => this.config.videoOptions.redaction ? g.startPicking() : g.startRecording()
        );
      });
      const d = () => this.prewarmVideo();
      B.addEventListener("mouseenter", () => {
        d(), this.showTooltip(B);
      }), B.addEventListener("focus", d), B.addEventListener("touchstart", d, { passive: !0 }), B.addEventListener("mouseleave", () => this.hideTooltip()), c.appendChild(B), this.buttonsContainer.appendChild(c);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, DA(this.dismissBtn, null, Lo), this.dismissBtn.addEventListener("click", (c) => {
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
    A.setAttribute("data-qaid-base", ""), A.textContent = Wr(), this.overlayShadowRoot.appendChild(A);
    for (const t of this.featureStyles) un(this.overlayShadowRoot, t);
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
        t && un(t, A);
    }
  }
  tooltipElement = null;
  showTooltip(A) {
    const t = this.tooltipElement;
    t.style.visibility = "hidden", t.classList.add("qaid-tooltip-visible");
    const r = A.getBoundingClientRect(), n = t.getBoundingClientRect(), { top: i, left: s } = sa(
      r,
      n,
      { width: window.innerWidth, height: window.innerHeight }
    );
    t.style.top = `${i}px`, t.style.left = `${s}px`, t.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleDismiss() {
    this.buttonsContainer.classList.add("qaid-dismissed"), dn(this.config.apiKey, !0);
  }
  handleThumbClick(A, t, r) {
    if (this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), dn(this.config.apiKey, !1)), this.prewarmClickPath(), this.skipsTargeting())
      this.submitDirectFeedback(A, t);
    else {
      this.activeThumbBtn = t, t.setAttribute("aria-pressed", "true");
      const n = this.keyboardActivation;
      this.keyboardActivation = !1, this.ensureTargeting().then((i) => {
        this.destroyed || (n ? i.startKeyboard(A) : i.startPointer(A, r));
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
    return this.config.screenshotMethod === "dom" || Da();
  }
  /**
   * Run the send flow (send.ts, loaded on demand and pre-warmed before the
   * click): screenshot, markup, POST, then a linked quest or the message box.
   * If its chunk will not load, say so and reset rather than leave the
   * visitor stuck mid-flow.
   */
  async submitFeedback() {
    try {
      const [A] = await Promise.all([Promise.resolve().then(() => St), this.loadDialogA11y()]);
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
      return await (await Promise.resolve().then(() => St)).tryLaunchQuest(this.makeSendHost(), A, t);
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
        Promise.resolve().then(() => Fn),
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
      const { TargetingController: A, styles: t } = await Promise.resolve().then(() => vn);
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
        Promise.resolve().then(() => mn),
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
      this.recording?.destroy(), this.recording = null, this.modal?.destroy(), this.modal = null, this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.dismissBtn = null, this.tooltipElement = null, ea();
    }
  }
}
var qa = "__qaidThumbsOrigin";
function Si(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
const Ki = qa;
function gn(e) {
  const A = e.split(/[?#]/)[0];
  return A.substring(A.lastIndexOf("/") + 1);
}
function Va(e) {
  const A = document.currentScript;
  if (A && A.tagName === "SCRIPT") return A;
  if (!e) return null;
  const t = Array.from(document.getElementsByTagName("script")).filter((o) => o.src), r = t.find((o) => o.src === e);
  if (r) return r;
  const n = t.filter((o) => o[Ki]);
  if (n.length === 1) return n[0];
  const i = gn(e), s = t.filter((o) => gn(o.src) === i);
  return s.length === 1 ? s[0] : null;
}
function fn(e) {
  return !!e && e.tagName === "SCRIPT" && (e.getAttribute("type") || "").trim().toLowerCase() === "application/json";
}
function Na(e) {
  const A = e[Ki], t = A && A.tagName === "SCRIPT" ? A : e, r = t.getAttribute("data-config-id") || e.getAttribute("data-config-id");
  if (r) {
    const n = document.getElementById(r);
    return fn(n) ? n : null;
  }
  for (const n of [t.previousElementSibling, t.nextElementSibling])
    if (fn(n) && n.hasAttribute("data-feedback-config")) return n;
  return null;
}
function Ga(e) {
  const A = Na(e);
  if (!A) return null;
  const t = A.textContent?.trim();
  if (!t) return null;
  try {
    const r = JSON.parse(t);
    return r.cssSelector && !r.css && (r.css = Si(r.cssSelector), delete r.cssSelector), r;
  } catch {
    return null;
  }
}
function Ti(e, A, t) {
  console.warn(`[thumbs-embed] Ignoring ${e}="${A}": expected ${t}.`);
}
function Pa(e) {
  const A = [];
  let t = 0, r = "";
  for (const n of e)
    n === "(" && t++, n === ")" && (t = Math.max(0, t - 1)), n === "," && t === 0 ? (A.push(r.trim()), r = "") : r += n;
  return A.push(r.trim()), A;
}
function _a(e, A) {
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
    r = Pa(t);
  if (Array.isArray(r) && r.length > 0 && r.every((n) => typeof n == "string" && n.trim() !== ""))
    return r.map((n) => n.trim());
  Ti(e, A, "a JSON array of colours or a comma-separated list");
}
function Ee(e, A) {
  if (A !== null) {
    if (A.trim() === "") {
      Ti(e, A, "a non-empty label");
      return;
    }
    return A;
  }
}
function Xa(e) {
  const A = e.getAttribute("data-endpoint");
  if (!A) return null;
  const t = e.getAttribute("data-position"), r = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), i = e.getAttribute("data-negative-color"), s = e.getAttribute("data-marker-color"), o = e.getAttribute("data-container"), a = e.getAttribute("data-button-class"), l = e.getAttribute("data-skip-targeting"), c = e.getAttribute("data-hide-confirmation"), B = e.getAttribute("data-single-button"), d = e.getAttribute("data-feedback-mode"), g = e.getAttribute("data-incognito"), h = e.getAttribute("data-button-size"), f = e.getAttribute("data-offset-x"), m = e.getAttribute("data-offset-y"), w = e.getAttribute("data-modal-width"), u = e.getAttribute("data-backdrop-opacity"), U = e.getAttribute("data-font-family"), p = e.getAttribute("data-font-size"), v = e.getAttribute("data-tooltip"), Q = e.getAttribute("data-modal-title"), E = e.getAttribute("data-confirmation-title"), y = e.getAttribute("data-confirmation-message"), b = e.getAttribute("data-confirmation-close"), D = e.getAttribute("data-error-title"), N = e.getAttribute("data-error-message"), _ = e.getAttribute("data-modal-subtitle"), x = e.getAttribute("data-placeholder"), O = e.getAttribute("data-submit-button"), sA = e.getAttribute("data-skip-button"), X = e.getAttribute("data-positive-icon"), J = e.getAttribute("data-negative-icon"), wA = e.getAttribute("data-feedback-icon"), j = e.getAttribute("data-feedback-label"), dA = e.getAttribute("data-api-key"), QA = e.getAttribute("data-capture-screenshot"), pA = e.getAttribute("data-annotate"), oA = e.getAttribute("data-annotation-color"), aA = e.getAttribute("data-screenshot-quality"), $ = e.getAttribute("data-screenshot-max-width"), uA = e.getAttribute("data-screenshot-max-height"), KA = e.getAttribute("data-capture-video"), kr = e.getAttribute("data-video-redaction"), fo = e.getAttribute("data-hide-thumbs"), wo = e.getAttribute("data-hide-dismiss"), xt = e.getAttribute("data-video-max-duration"), Qo = e.getAttribute("data-screenshot-method"), po = e.getAttribute("data-direction"), Mr = e.getAttribute("data-css-selector"), Co = e.getAttribute("data-css"), Or = Ee("data-positive-label", e.getAttribute("data-positive-label")), Rr = Ee("data-negative-label", e.getAttribute("data-negative-label")), qr = Ee("data-record-label", e.getAttribute("data-record-label")), Vr = Ee("data-dismiss-label", e.getAttribute("data-dismiss-label")), Uo = _a(
    "data-annotation-palette",
    e.getAttribute("data-annotation-palette")
  ), Fo = e.getAttribute("data-record-icon"), Nr = e.getAttribute("data-quest-base"), vo = e.getAttribute("data-quest-up"), mo = e.getAttribute("data-quest-down"), bo = e.getAttribute("data-quest-video"), yo = e.getAttribute("data-quest-api-key"), Eo = e.getAttribute("data-quest-module-url"), Ho = e.getAttribute("data-remote-config"), Io = e.getAttribute("data-theme-url"), Gr = e.getAttribute("data-remote-timeout");
  return {
    endpoint: A,
    remoteConfig: Ho === "true" ? !0 : void 0,
    themeUrl: Io || void 0,
    remoteTimeoutMs: Gr ? parseInt(Gr, 10) : void 0,
    // Inline CSS wins over a selector, as `css` wins over `cssSelector` in
    // the JSON block.
    css: Co || (Mr ? Si(Mr) : void 0),
    apiKey: dA ?? void 0,
    captureScreenshot: QA === "true" ? !0 : void 0,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: pA === "false" ? !1 : void 0,
    annotationColor: oA ?? void 0,
    annotationPalette: Uo,
    screenshotOptions: aA || $ || uA ? {
      quality: aA ? parseFloat(aA) : void 0,
      maxWidth: $ ? parseInt($, 10) : void 0,
      maxHeight: uA ? parseInt(uA, 10) : void 0
    } : void 0,
    container: o ?? void 0,
    buttonClass: a ?? void 0,
    direction: po ?? void 0,
    position: t ?? void 0,
    zIndex: r ? parseInt(r, 10) : void 0,
    skipTargeting: l === "true" ? !0 : void 0,
    hideConfirmation: c === "true" ? !0 : void 0,
    singleButton: B === "true" ? !0 : void 0,
    feedbackMode: d ?? void 0,
    incognito: g === "true" ? !0 : void 0,
    buttonSize: h ?? void 0,
    offset: f || m ? {
      x: f ? parseInt(f, 10) : void 0,
      y: m ? parseInt(m, 10) : void 0
    } : void 0,
    modalWidth: w ? parseInt(w, 10) : void 0,
    backdropOpacity: u ? parseFloat(u) : void 0,
    fontFamily: U ?? void 0,
    fontSize: p ? parseInt(p, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: i ?? void 0,
      marker: s ?? void 0
    },
    text: v || Q || _ || x || O || sA || j || E || y || b || D || N || Or || Rr || qr || Vr ? {
      tooltip: v ?? void 0,
      modalTitle: Q ?? void 0,
      modalSubtitle: _ ?? void 0,
      placeholder: x ?? void 0,
      submitButton: O ?? void 0,
      skipButton: sA ?? void 0,
      feedbackLabel: j ?? void 0,
      confirmationTitle: E ?? void 0,
      confirmationMessage: y ?? void 0,
      confirmationClose: b ?? void 0,
      errorTitle: D ?? void 0,
      errorMessage: N ?? void 0,
      positiveLabel: Or,
      negativeLabel: Rr,
      recordLabel: qr,
      dismissLabel: Vr
    } : void 0,
    positiveIcon: X ?? void 0,
    recordIcon: Fo ?? void 0,
    negativeIcon: J ?? void 0,
    feedbackIcon: wA ?? void 0,
    screenshotMethod: Qo ?? void 0,
    captureVideo: KA === "true" ? !0 : void 0,
    hideThumbs: fo === "true" ? !0 : void 0,
    hideDismiss: wo === "true" ? !0 : void 0,
    videoOptions: xt || kr ? {
      maxDuration: xt ? parseInt(xt, 10) : void 0,
      redaction: kr === "true" ? !0 : void 0
    } : void 0,
    quests: Nr ? {
      base: Nr,
      up: vo ?? void 0,
      down: mo ?? void 0,
      video: bo ?? void 0,
      apiKey: yo ?? void 0,
      moduleUrl: Eo ?? void 0
    } : void 0
  };
}
function Ja(e) {
  if (typeof document > "u") return;
  const A = Va(e);
  if (!A) return;
  const t = () => {
    const r = Ga(A) ?? Xa(A);
    r?.endpoint && new Ra(r);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
const Wa = 20, wn = 4096;
function Di(e) {
  const A = typeof e == "string" ? e : JSON.stringify(e);
  return A.length > wn ? A.slice(0, wn) + "…[truncated]" : A;
}
function Qn(e, A) {
  e.length >= Wa && e.shift(), e.push(A);
}
async function Ya(e) {
  try {
    const A = await e.clone().text();
    return Di(A);
  } catch {
    return;
  }
}
function Za() {
  const e = [], A = window.fetch;
  window.fetch = async function(n, i) {
    const s = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, o = i?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET"), a = await A.apply(window, [n, i]);
    if (a.status >= 400) {
      const l = $r(s, a.status, await Ya(a));
      Qn(e, {
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
      i.status >= 400 && Qn(e, {
        url: ge(i._qaid_url),
        method: i._qaid_method.toUpperCase(),
        status: i.status,
        statusText: i.statusText,
        responseBody: $r(i._qaid_url, i.status, Di(i.responseText)),
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
function za() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function ja(e, A, t, r, n) {
  const i = e >= A, s = t >= r;
  return i === s ? { width: e, height: A, rotate: 0 } : { width: A, height: e, rotate: n === 270 ? -90 : 90 };
}
function $a(e, A, t) {
  if (t.rotate === 0) {
    e.drawImage(A, 0, 0, t.width, t.height);
    return;
  }
  e.save(), t.rotate === 90 ? (e.translate(t.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, t.height), e.rotate(-Math.PI / 2)), e.drawImage(A, 0, 0, t.height, t.width), e.restore();
}
function Ac() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function ki(e) {
  return new Promise((A) => {
    if (e.videoWidth > 0) {
      A();
      return;
    }
    e.addEventListener("loadedmetadata", () => A(), { once: !0 });
  });
}
async function Mi(e) {
  try {
    await e.play();
  } catch {
  }
}
async function ec(e, A = 15) {
  const t = document.createElement("canvas");
  if (typeof t.captureStream != "function") return null;
  const r = t.getContext("2d");
  if (!r) return null;
  const n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await ki(n);
  const i = ja(
    n.videoWidth,
    n.videoHeight,
    window.innerWidth,
    window.innerHeight,
    Ac()
  );
  t.width = i.width, t.height = i.height, await Mi(n);
  let s = 0;
  const o = () => {
    $a(r, n, i), s = requestAnimationFrame(o);
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
function tc(e, A, t, r, n) {
  const i = Math.max(0, Math.min(r, e.left * A)), s = Math.max(0, Math.min(n, e.top * t)), o = Math.max(0, Math.min(r, (e.left + e.width) * A)), a = Math.max(0, Math.min(n, (e.top + e.height) * t)), l = o - i, c = a - s;
  return l <= 0 || c <= 0 ? null : { x: i, y: s, w: l, h: c };
}
function rc(e, A, t, r, n, i, s) {
  e.drawImage(A, 0, 0, r, n);
  const o = r / Math.max(1, window.innerWidth), a = n / Math.max(1, window.innerHeight);
  for (const l of t) {
    const c = tc(
      l.getBoundingClientRect(),
      o,
      a,
      r,
      n
    );
    c && (e.save(), s ? (e.filter = `blur(${i}px)`, e.drawImage(A, c.x, c.y, c.w, c.h, c.x, c.y, c.w, c.h)) : (e.fillStyle = "#0b0b0b", e.fillRect(c.x, c.y, c.w, c.h)), e.restore());
  }
}
async function nc(e, A, t = {}) {
  const r = t.frameRate ?? 15, n = t.blurRadius ?? 12, i = document.createElement("canvas");
  if (typeof i.captureStream != "function") return null;
  const s = i.getContext("2d");
  if (!s) return null;
  const o = "filter" in s, a = document.createElement("video");
  a.muted = !0, a.playsInline = !0, a.srcObject = e, await ki(a), i.width = a.videoWidth, i.height = a.videoHeight, await Mi(a);
  let l = 0;
  const c = () => {
    rc(
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
const Oi = "This browser cannot blur the areas you picked, so the recording was not started.";
function ic() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function Ri() {
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
function sc(e = {}) {
  const A = e.maxDuration ?? 15, t = e.videoBitsPerSecond ?? 8e5, r = e.redactionElements ?? [], n = e.redactionBlurRadius;
  let i = null, s = null, o = null, a = null, l = [], c = null, B = null, d = null, g = 0, h = null, f = null, m = !1, w = null;
  function u() {
    d !== null && (clearInterval(d), d = null), w !== null && (clearTimeout(w), w = null), s && (s.stop(), s = null), o && (o.stop(), o = null), i && (i.getTracks().forEach((p) => p.stop()), i = null), a = null, l = [], c = null, B = null, h = null, f = null;
  }
  function U() {
    m || (m = !0, a && a.state !== "inactive" && a.stop());
  }
  return {
    async start() {
      m = !1, l = [];
      const p = Ri();
      if (!p)
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
        U();
      });
      let E = i;
      if (za()) {
        const y = await ec(i);
        y && (s = y, E = y.stream);
      }
      if (r.length > 0) {
        const y = await nc(E, r, {
          blurRadius: n
        });
        if (!y)
          throw s && (s.stop(), s = null), i.getTracks().forEach((b) => b.stop()), i = null, new Error(Oi);
        o = y, E = y.stream;
      }
      a = new MediaRecorder(E, {
        mimeType: p,
        videoBitsPerSecond: t
      }), a.ondataavailable = (y) => {
        y.data.size > 0 && l.push(y.data);
      }, a.onstop = () => {
        const y = new Blob(l, { type: p });
        h && h(y), B && B(y), s && (s.stop(), s = null), o && (o.stop(), o = null), i && i.getTracks().forEach((b) => b.stop());
      }, a.onerror = () => {
        f && f(new Error("MediaRecorder error"));
      }, a.start(1e3), g = Date.now(), d = setInterval(() => {
        const y = Math.floor((Date.now() - g) / 1e3);
        c && c(y);
      }, 1e3), w = setTimeout(() => {
        U();
      }, A * 1e3);
    },
    stop() {
      return new Promise((p, v) => {
        h = p, f = v, U();
      });
    },
    onTick(p) {
      c = p;
    },
    onStop(p) {
      B = p;
    },
    destroy() {
      U(), u();
    }
  };
}
const qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REDACTION_UNAVAILABLE: Oi,
  createVideoRecorder: sc,
  getSupportedMimeType: Ri,
  isVideoRecordingSupported: ic
}, Symbol.toStringTag, { value: "Module" }));
let WA = null;
const Vi = () => Promise.resolve().then(() => Mg);
let Ni = Vi;
function oc(e) {
  Ni = e ?? Vi, WA = null;
}
function ac() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function cc() {
  return WA || (WA = Ni().then(
    (e) => e.default,
    () => (WA = null, null)
  ), WA);
}
async function lc(e = {}) {
  const { quality: A = 0.8, maxWidth: t = 1280, maxHeight: r = 800 } = e;
  try {
    const n = await cc();
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
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _setHtml2CanvasImporter: oc,
  captureDomScreenshot: lc,
  isDomScreenshotSupported: ac
}, Symbol.toStringTag, { value: "Module" })), Bc = ".qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .8125);line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .8125);font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}.qaid-annotate-colors{display:flex;gap:.25rem;align-items:center}button.qaid-annotate-swatch{width:28px;height:28px;min-width:28px;padding:0;border-radius:9999px;border:2px solid light-dark(#d1d5db,#4b5563);background:var(--qaid-swatch, #000);cursor:pointer;-webkit-appearance:none;appearance:none;transition:transform .1s,box-shadow .15s,border-color .15s}button.qaid-annotate-swatch:hover{transform:scale(1.12)}button.qaid-annotate-swatch[aria-pressed=true]{border-color:light-dark(#111827,#f9fafb);box-shadow:0 0 0 2px var(--qaid-swatch)}@media(forced-colors:active){button.qaid-annotate-swatch[aria-pressed=true]{outline:2px solid Highlight;outline-offset:1px}}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6365f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6365f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}", VA = 12, dc = "#ef4444", uc = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], hc = {
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
function pn(e) {
  return hc[e.toLowerCase()] ?? e;
}
const gc = 4, fc = 0.8, wc = {
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
function Qc(e) {
  if (e.type === "pen") return e.points.length < 2;
  const A = st(e.points[0], e.points[1]);
  return A.w < 3 && A.h < 3;
}
function pc(e, A, t, r) {
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
function Cc(e, A) {
  if (A.length !== 0) {
    e.beginPath(), e.moveTo(A[0].x, A[0].y);
    for (let t = 1; t < A.length; t++)
      e.lineTo(A[t].x, A[t].y);
    e.stroke();
  }
}
function Uc(e, A, t, r, n) {
  e.fillStyle = "rgb(15, 23, 42)", e.fillRect(A, t, r, n), e.fillStyle = "rgb(37, 47, 63)";
  for (let i = t; i < t + n; i += VA)
    for (let s = A; s < A + r; s += VA)
      (Math.floor((s - A) / VA) + Math.floor((i - t) / VA)) % 2 === 0 && e.fillRect(
        s,
        i,
        Math.min(VA, A + r - s),
        Math.min(VA, t + n - i)
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
      pc(e, A.points[0], A.points[1], A.strokeWidth);
      break;
    case "pen":
      Cc(e, A.points);
      break;
    case "blur": {
      const t = st(A.points[0], A.points[1]);
      Uc(e, t.x, t.y, t.w, t.h);
      break;
    }
  }
  e.restore();
}
function Pi(e) {
  return new Promise((A, t) => {
    const r = new Image();
    r.onload = () => A(r), r.onerror = () => t(new Error("Failed to load screenshot")), r.src = e;
  });
}
async function _i(e, A, t = {}) {
  const r = t.quality ?? fc;
  let n;
  try {
    n = await Pi(e);
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
let Fc = 0;
class Xi {
  shapes = [];
  tool = "rect";
  opts;
  labels;
  color;
  palette;
  strokeWidth;
  uid = `qaid-annotate-${++Fc}`;
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
    this.opts = A, this.labels = { ...wc, ...A.labels ?? {} }, this.color = A.color ?? dc, this.palette = (A.palette && A.palette.length ? A.palette : uc).slice(), this.palette.some((t) => t.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = A.strokeWidth ?? gc;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const A = new Promise((t) => {
      this.resolveResult = t;
    });
    return this.mount(), A;
  }
  toolButton(A, t, r) {
    const n = AA("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": A,
      "aria-pressed": A === this.tool ? "true" : "false",
      "aria-label": `${r} tool`,
      title: r
    });
    return n.append(
      MA(null, t),
      AA("span", { class: "qaid-annotate-btn-text" }, [r])
    ), n;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(A) {
    const t = pn(A), r = AA("button", {
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
    const i = AA("button", {
      type: "button",
      class: `qaid-annotate-action ${n}`,
      "data-qaid-action": A,
      "aria-label": r,
      title: r
    });
    return i.append(
      MA(null, t),
      AA("span", { class: "qaid-annotate-btn-text" }, [r])
    ), i;
  }
  mount() {
    const A = `${this.uid}-title`, t = `${this.uid}-desc`;
    this.container = AA("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const r = AA("h2", {
      id: A,
      class: "qaid-annotate-title"
    });
    r.textContent = this.labels.title;
    const n = AA("p", {
      id: t,
      class: "qaid-annotate-desc"
    });
    n.textContent = this.labels.instructions;
    const i = AA("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), i.appendChild(this.canvas), this.toolbar = AA("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const s = AA("div", { class: "qaid-annotate-tools" });
    s.appendChild(this.toolButton("rect", So, this.labels.rectangle)), s.appendChild(this.toolButton("arrow", Ko, this.labels.arrow)), s.appendChild(this.toolButton("pen", To, this.labels.pen)), s.appendChild(this.toolButton("blur", Do, this.labels.blur));
    const o = AA("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const B of this.palette) o.appendChild(this.swatchButton(B));
    this.undoBtn = this.actionButton("undo", ko, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const a = this.actionButton("skip", Oo, this.labels.skip, "qaid-annotate-skip"), l = this.actionButton("done", bi, this.labels.done, "qaid-annotate-done"), c = AA("div", { class: "qaid-annotate-actions" });
    c.appendChild(this.undoBtn), c.appendChild(a), c.appendChild(l), this.toolbar.appendChild(s), this.toolbar.appendChild(o), this.toolbar.appendChild(c), this.container.appendChild(r), this.container.appendChild(n), this.container.appendChild(i), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: A,
      describedbyId: t
    }), this.opts.announce?.(this.labels.instructions), Pi(this.opts.dataUrl).then((B) => {
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
    const r = this.labels[vc[A]];
    this.opts.announce?.(`${r} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(A) {
    this.color = A, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((r) => {
      r.setAttribute(
        "aria-pressed",
        (r.getAttribute("data-qaid-color") ?? "").toLowerCase() === A.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${pn(A)} colour selected`);
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
    if (this.current = null, Qc(A)) {
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
    const A = await _i(this.opts.dataUrl, this.shapes, {
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
const vc = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function mc(e) {
  return new Xi(e).open();
}
const bc = Bc, Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: Xi,
  compositeAnnotations: _i,
  drawShape: ot,
  openAnnotationEditor: mc,
  rectFromPoints: st,
  styles: bc
}, Symbol.toStringTag, { value: "Module" }));
Ja(import.meta.url);
const yc = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function Ec(e) {
  return e.hasAttribute("disabled") ? !0 : e.disabled === !0;
}
function Hc(e) {
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
function ir(e) {
  return Array.from(
    e.querySelectorAll(yc)
  ).filter((t) => !(t.getAttribute("tabindex") === "-1" || t instanceof HTMLInputElement && t.type === "hidden" || t instanceof HTMLAnchorElement && !t.getAttribute("href") || Ec(t) || Hc(t)));
}
function Wi(e) {
  let A = e.activeElement;
  for (; A && A.shadowRoot && A.shadowRoot.activeElement; )
    A = A.shadowRoot.activeElement;
  return A instanceof HTMLElement ? A : null;
}
function Yi(e) {
  const A = e.ownerDocument || document;
  let t = !1;
  const r = (i) => {
    if (i.key !== "Tab") return;
    const s = ir(e);
    if (s.length === 0) {
      i.preventDefault(), e.focus();
      return;
    }
    const o = s[0], a = s[s.length - 1], l = Wi(A), c = l ? s.indexOf(l) !== -1 : !1;
    i.shiftKey ? (!c || l === o) && (i.preventDefault(), a.focus()) : (!c || l === a) && (i.preventDefault(), o.focus());
  };
  e.addEventListener("keydown", r);
  const n = ir(e);
  return n.length > 0 ? n[0].focus() : (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), t = !0), e.focus()), {
    release() {
      e.removeEventListener("keydown", r), t && (e.removeAttribute("tabindex"), t = !1);
    }
  };
}
function Zi() {
  return Wi(document);
}
function zi(e) {
  if (!(!e || typeof e.focus != "function"))
    try {
      e.focus();
    } catch {
    }
}
function ji(e, A = {}) {
  e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), A.labelledbyId && e.setAttribute("aria-labelledby", A.labelledbyId), A.describedbyId && e.setAttribute("aria-describedby", A.describedbyId), A.label && e.setAttribute("aria-label", A.label);
}
function Ic(e, A) {
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
function $i(e) {
  const t = (e.ownerDocument || document).body;
  if (!t) return () => {
  };
  const r = Ic(e, t), n = [];
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
function xc(e, A) {
  const t = Zi();
  ji(e, A);
  const r = Yi(e), n = $i(e);
  return () => {
    r.release(), n(), zi(t);
  };
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyDialog: ji,
  createFocusTrap: Yi,
  getFocusable: ir,
  openDialog: xc,
  restoreFocus: zi,
  saveFocus: Zi,
  setBackgroundInert: $i
}, Symbol.toStringTag, { value: "Module" }));
var Lc = "qaid-embed", Un = "__qaidEmbedTrustedTypes";
function Sc() {
  if (typeof window > "u") return null;
  var e = window, A = e.trustedTypes;
  if (!A || typeof A.createPolicy != "function") return null;
  var t = e[Un];
  if (t) return t;
  var r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), i = null;
  try {
    i = A.createPolicy(Lc, {
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
    Object.defineProperty(e, Un, { value: s, configurable: !0 });
  } catch {
  }
  return s;
}
function Kc(e) {
  var A = Sc();
  return !A || !A.policy ? e : (A.allowed[e] = !0, A.policy.createScriptURL(e));
}
function As(e, A) {
  return new Promise((t, r) => {
    const n = document.createElement("script");
    n.type = "module", n.integrity = A, n.crossOrigin = "anonymous";
    try {
      n.src = Kc(e);
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
const es = async (e) => (e === jA && await As(e, Ua), import(
  /* @vite-ignore */
  e
));
let ts = es, YA = null, je = null;
const at = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
function Tc(e) {
  ts = e ?? es, YA = null, je = null, at.clear(), $e.clear();
}
function rs(e, A) {
  return `${e.replace(/\/+$/, "")}/${encodeURIComponent(A)}/definition`;
}
function Dc(e) {
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
function ns(e) {
  return YA && je === e || (je = e, YA = Promise.resolve(ts(e)).then((A) => {
    const t = A;
    if (!t || typeof t.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return t;
  }).catch((A) => {
    throw YA = null, je = null, A;
  })), YA;
}
async function is(e) {
  const A = await ns(e.moduleUrl), t = e.base.replace(/\/+$/, ""), r = rs(t, e.questId), n = (o) => o != null ? { feedbackId: o } : void 0;
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
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_QUESTS_MODULE_URL: jA,
  _setQuestsImporter: Tc,
  launchQuest: is,
  loadQuestsModule: ns,
  prefetchQuestDefinition: Dc,
  preloadVerifiedModule: As,
  questDefinitionUrl: rs
}, Symbol.toStringTag, { value: "Module" }));
async function ss(e, A) {
  const t = e.ensureOverlayHost(), r = e.overlayShadowHost, n = r.style.pointerEvents;
  r.style.pointerEvents = "auto";
  try {
    const { openAnnotationEditor: i, styles: s } = await Promise.resolve().then(() => Ji);
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
async function Mc(e) {
  const { config: A, feedbackData: t, selectedBounds: r } = e;
  let n = null;
  if (A.captureScreenshot || A.feedbackMode === "annotate")
    try {
      if (e.shouldCaptureViaDom()) {
        const { captureDomScreenshot: B } = await Promise.resolve().then(() => Gi);
        n = await B(A.screenshotOptions);
      } else {
        const { captureScreenshot: B } = await Promise.resolve().then(() => Bs);
        n = await B(A.screenshotOptions);
      }
      n && e.announceMsg("Screenshot captured");
    } catch (B) {
      console.error("Screenshot capture failed:", B), n = null;
    }
  n && A.annotate && (n = await ss(e, n) ?? n);
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
  }, a = Oc(e, o);
  e.setFeedbackRecord(a);
  const l = a.then((B) => B?.id ?? null), c = t.feedbackType;
  if (c && c !== "neutral" && await os(e, c, l)) {
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
async function Oc(e, A) {
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
async function os(e, A, t) {
  const r = e.config.quests, n = r.base && r[A] || "";
  if (!n) return !1;
  try {
    return e.activeQuest?.destroy(), e.activeQuest = await is({
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
const St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  openAnnotationEditor: ss,
  submitFeedback: Mc,
  tryLaunchQuest: os
}, Symbol.toStringTag, { value: "Module" })), as = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Rc(e, A, t, r, n) {
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
function qc(e, A, t, r) {
  let i = e.x + e.width / 2 - t / 2;
  return i = Math.max(r, Math.min(i, A - t - r)), i;
}
function Vc(e, A, t, r = 24, n = 24) {
  const s = e.clickX - A - n / 2;
  return Math.max(r, Math.min(s, t - r - n / 2));
}
function Nc(e, A, t, r = as) {
  const n = r.height + r.arrowHeight, i = Rc(
    e,
    t,
    n,
    r.gap,
    r.viewportPadding
  ), s = qc(
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
function Gc(e, A, t, r = as) {
  const n = Nc(e, A, t, r), i = Vc(
    e,
    n.left,
    r.width
  );
  return {
    modal: n,
    arrow: { left: i }
  };
}
const Pc = document;
function H(e, A, ...t) {
  const r = Pc.createElement(e);
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
const _c = ".qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-type-static{width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, white)}.qaid-type-static svg{width:1.25rem;height:1.25rem}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875)}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:var(--qaid-font-size, 16px);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}.qaid-confirm{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;padding:.5rem 0}.qaid-confirm-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;color:#fff;background:var(--qaid-success, #22c55e);margin-bottom:.25rem;animation:qaid-confirm-pop .28s cubic-bezier(.34,1.56,.64,1)}.qaid-confirm-icon .qaid-icon{width:24px;height:24px}.qaid-confirm-error .qaid-confirm-icon{background:var(--qaid-error, #dc2626)}.qaid-confirm-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:600;color:var(--qaid-text, light-dark(#111827, #f9fafb))}.qaid-confirm-title:focus-visible{outline:2px solid var(--qaid-primary, #6365f1);outline-offset:3px;border-radius:4px}.qaid-confirm-message{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875);color:var(--qaid-text-muted, light-dark(#6b7280, #9ca3af))}.qaid-confirm .qaid-confirm-close{margin-top:.5rem;min-width:96px}@keyframes qaid-confirm-pop{0%{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){.qaid-confirm-icon{animation:none}}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-textarea:focus,button.qaid-btn-submit:focus{outline:2px solid CanvasText;outline-offset:2px}}";
function At(e, A) {
  return JSON.stringify(e.editToken ? { ...A, editToken: e.editToken } : A);
}
class Xc {
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
    const A = this.host.ensureOverlayHost(), { modal: t, arrow: r } = Gc(
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
      MA(A.feedbackIcon, mi)
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
      i ? MA(A.positiveIcon, er) : MA(A.negativeIcon, tr)
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
      this.host.feedbackData.feedbackType = n, this.host.config.buttonClass ? (r.classList.toggle("qaid-btn-up", n === "up"), r.classList.toggle("qaid-btn-down", n === "down")) : (r.classList.toggle("qaid-type-up", n === "up"), r.classList.toggle("qaid-type-down", n === "down")), n === "up" ? DA(r, this.host.config.positiveIcon, er) : DA(r, this.host.config.negativeIcon, tr);
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
          MA(null, A ? bi : Mo)
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
const Jc = _c, Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalController: Xc,
  patchBody: At,
  styles: Jc
}, Symbol.toStringTag, { value: "Module" })), cs = ["data-comp", "data-qa", "data-testid", "data-id"];
function ls(e, A = document.body) {
  let t = e;
  for (; t && t !== A; ) {
    for (const r of cs) {
      const n = t.getAttribute(r);
      if (n)
        return `${r}="${n}"`;
    }
    t = t.parentElement;
  }
  return null;
}
function Wc(e, A = 100) {
  const t = e.textContent?.trim().slice(0, A) || "";
  return t.length === A ? t + "..." : t;
}
function Yc(e) {
  let A = 1, t = e.previousElementSibling;
  for (; t; )
    A++, t = t.previousElementSibling;
  return A;
}
function Zc(e) {
  const A = [];
  let t = e;
  for (; t && t !== document.body && t !== document.documentElement; ) {
    const r = t.tagName.toLowerCase(), n = Yc(t);
    A.unshift(`${r}:nth-child(${n})`), t = t.parentElement;
  }
  return A.length > 0 ? `body > ${A.join(" > ")}` : "body";
}
function zc(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function jc(e) {
  const A = ls(e);
  return A ? `[${A}]` : e.id ? `#${zc(e.id)}` : Zc(e);
}
function Kt(e) {
  const A = Wc(e), t = ls(e);
  return { selector: jc(e), text: A, dataAttr: t };
}
const $c = [
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
  ...cs.map((e) => `[${e}]`)
].join(","), Al = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function el(e) {
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !1;
  const A = e.ownerDocument?.defaultView;
  if (A && typeof A.getComputedStyle == "function") {
    const t = A.getComputedStyle(e);
    if (t.display === "none" || t.visibility === "hidden") return !1;
  }
  return !0;
}
function tl(e = {}) {
  const A = e.root ?? document.body, t = e.selector ?? $c, r = e.isExcluded ?? (() => !1), n = e.isVisible ?? el;
  return Array.from(A.querySelectorAll(t)).filter(
    (i) => !r(i) && n(i)
  );
}
function rl(e) {
  const A = e.candidates ?? tl({
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
    const U = u;
    if (typeof U.focus == "function") {
      u.getAttribute("tabindex") === null && !Al.test(u.tagName) && (u.setAttribute("tabindex", "-1"), n.add(u));
      try {
        U.focus();
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
    const U = A.length;
    i = (u % U + U) % U, l();
  }
  function B() {
    c(i + 1);
  }
  function d() {
    c(i - 1);
  }
  function g() {
    return A[i] ?? null;
  }
  function h() {
    s || (s = !0, r.removeEventListener("keydown", w, !0), n.forEach((u) => u.removeAttribute("tabindex")), n.clear());
  }
  function f() {
    if (s) return;
    const u = g();
    h(), u && e.onSelect(u);
  }
  function m() {
    s || (h(), e.onCancel?.());
  }
  function w(u) {
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
          u.preventDefault(), u.stopPropagation(), f();
          break;
        case "Escape":
        case "Esc":
          u.preventDefault(), u.stopPropagation(), m();
          break;
      }
  }
  return r.addEventListener("keydown", w, !0), i >= 0 && l(), {
    candidates: A,
    getIndex: () => i,
    getCurrent: g,
    next: B,
    prev: d,
    moveTo: c,
    select: f,
    cancel: m,
    handleKey: w,
    stop: h
  };
}
const nl = ".qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6365f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}@media(forced-colors:active){.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}", il = 12;
class sl {
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
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = A, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = rl({
      isExcluded: (t) => ze(t),
      onHighlight: (t) => {
        const r = t.getBoundingClientRect(), n = this.highlightBox;
        n && (n.style.transform = `translate(${r.left}px, ${r.top}px)`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, n.style.display = "block");
        const { text: i } = Kt(t);
        this.host.announceMsg(`Targeting ${i || t.tagName.toLowerCase()}`);
      },
      onSelect: (t) => this.selectKeyboardTarget(t),
      onCancel: () => this.cancel()
    });
  }
  selectKeyboardTarget(A) {
    const t = on(A, 8);
    Object.assign(this.host.selectedBounds, t, {
      clickX: t.x + t.width / 2,
      clickY: t.y + t.height / 2,
      visible: !0
    });
    const { selector: r, text: n } = Kt(A);
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
      const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = sn(A, t, r);
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
    this.touchStartPos = null, !(!t || !r || Math.hypot(t.clientX - r.x, t.clientY - r.y) > il) && (A.preventDefault(), this.selectAt(t.clientX, t.clientY));
  }
  /** Select the element under (x, y) and tear down targeting. */
  selectAt(A, t) {
    const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = sn(A, t, r);
    if (!n || ze(n))
      return;
    const i = on(n, 8);
    Object.assign(this.host.selectedBounds, i, { clickX: A, clickY: t, visible: !0 });
    const { selector: s, text: o } = Kt(n);
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
const ol = nl, vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TargetingController: sl,
  styles: ol
}, Symbol.toStringTag, { value: "Module" })), al = ".qaid-recording-indicator{position:fixed;pointer-events:auto;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:calc(var(--qaid-font-size, 16px) * .75);font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .875);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-error{margin:0 0 .75rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;color:light-dark(#b91c1c,#fca5a5)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);color:light-dark(#6b7280,#9ca3af)}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}button.qaid-recording-stop{min-height:24px}.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}}";
class cl {
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
        this.networkCapture = Za();
        const { createVideoRecorder: t } = await Promise.resolve().then(() => qi);
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
const ll = al, mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RecordingController: cl,
  styles: ll
}, Symbol.toStringTag, { value: "Module" }));
async function Bl(e = {}) {
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
    o.srcObject = n, o.muted = !0, await new Promise((f) => {
      o.onloadedmetadata = () => {
        o.play(), f();
      };
    }), await new Promise((f) => {
      const m = () => {
        o.readyState >= 2 ? f() : requestAnimationFrame(m);
      };
      m();
    }), await new Promise((f) => setTimeout(f, 100));
    const a = s.width || o.videoWidth, l = s.height || o.videoHeight, c = Math.min(t / a, r / l, 1), B = Math.round(a * c), d = Math.round(l * c), g = document.createElement("canvas");
    g.width = B, g.height = d;
    const h = g.getContext("2d");
    return h ? (h.drawImage(o, 0, 0, B, d), i.stop(), g.toDataURL("image/webp", A)) : (i.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureScreenshot: Bl
}, Symbol.toStringTag, { value: "Module" }));
var sr = function(e, A) {
  return sr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, sr(e, A);
};
function BA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  sr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var or = function() {
  return or = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i]);
    }
    return A;
  }, or.apply(this, arguments);
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
var vA = (
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
  return vA.fromClientRect(e, A.getBoundingClientRect());
}, dl = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new vA(0, 0, r, n);
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
}, bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ul = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ie = 0; Ie < bn.length; Ie++)
  ul[bn.charCodeAt(Ie)] = Ie;
var yn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var xe = 0; xe < yn.length; xe++)
  oe[yn.charCodeAt(xe)] = xe;
var hl = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = oe[e.charCodeAt(r)], s = oe[e.charCodeAt(r + 1)], o = oe[e.charCodeAt(r + 2)], a = oe[e.charCodeAt(r + 3)], c[n++] = i << 2 | s >> 4, c[n++] = (s & 15) << 4 | o >> 2, c[n++] = (o & 3) << 6 | a & 63;
  return l;
}, gl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, fl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, RA = 5, Ir = 11, Tt = 2, wl = Ir - RA, ds = 65536 >> RA, Ql = 1 << RA, Dt = Ql - 1, pl = 1024 >> RA, Cl = ds + pl, Ul = Cl, Fl = 32, vl = Ul + Fl, ml = 65536 >> Ir, bl = 1 << wl, yl = bl - 1, En = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, El = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Hl = function(e, A) {
  var t = hl(e), r = Array.isArray(t) ? fl(t) : new Uint32Array(t), n = Array.isArray(t) ? gl(t) : new Uint16Array(t), i = 24, s = En(n, i / 2, r[4] / 2), o = r[5] === 2 ? En(n, (i + r[4]) / 2) : El(r, Math.ceil((i + r[4]) / 4));
  return new Il(r[0], r[1], r[2], r[3], s, o);
}, Il = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> RA], t = (t << Tt) + (A & Dt), this.data[t];
        if (A <= 65535)
          return t = this.index[ds + (A - 55296 >> RA)], t = (t << Tt) + (A & Dt), this.data[t];
        if (A < this.highStart)
          return t = vl - ml + (A >> Ir), t = this.index[t], t += A >> RA & yl, t = this.index[t], t = (t << Tt) + (A & Dt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Hn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Le = 0; Le < Hn.length; Le++)
  xl[Hn.charCodeAt(Le)] = Le;
var Ll = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", In = 50, Sl = 1, us = 2, hs = 3, Kl = 4, Tl = 5, xn = 7, gs = 8, Ln = 9, EA = 10, ar = 11, Sn = 12, cr = 13, Dl = 14, ae = 15, lr = 16, Se = 17, re = 18, kl = 19, Kn = 20, Br = 21, ne = 22, kt = 23, NA = 24, eA = 25, ce = 26, le = 27, GA = 28, Ml = 29, kA = 30, Ol = 31, Ke = 32, Te = 33, dr = 34, ur = 35, hr = 36, Ue = 37, gr = 38, et = 39, tt = 40, Mt = 41, fs = 42, Rl = 43, ql = [9001, 65288], ws = "!", I = "×", De = "÷", fr = Hl(Ll), CA = [kA, hr], wr = [Sl, us, hs, Tl], Qs = [EA, gs], Tn = [le, ce], Vl = wr.concat(Qs), Dn = [gr, et, tt, dr, ur], Nl = [ae, cr], Gl = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(i, s) {
    var o = fr.get(i);
    if (o > In ? (n.push(!0), o -= In) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(s), t.push(lr);
    if (o === Kl || o === ar) {
      if (s === 0)
        return r.push(s), t.push(kA);
      var a = t[s - 1];
      return Vl.indexOf(a) === -1 ? (r.push(r[s - 1]), t.push(a)) : (r.push(s), t.push(kA));
    }
    if (r.push(s), o === Ol)
      return t.push(A === "strict" ? Br : Ue);
    if (o === fs || o === Ml)
      return t.push(kA);
    if (o === Rl)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Ue) : t.push(kA);
    t.push(o);
  }), [r, t, n];
}, Ot = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var i = t; i <= r.length; ) {
      i++;
      var s = r[i];
      if (s === A)
        return !0;
      if (s !== EA)
        break;
    }
  if (n === EA)
    for (var i = t; i > 0; ) {
      i--;
      var o = r[i];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var a = t; a <= r.length; ) {
          a++;
          var s = r[a];
          if (s === A)
            return !0;
          if (s !== EA)
            break;
        }
      if (o !== EA)
        break;
    }
  return !1;
}, kn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === EA)
      t--;
    else
      return r;
  }
  return 0;
}, Pl = function(e, A, t, r, n) {
  if (t[r] === 0)
    return I;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return I;
  var s = i - 1, o = i + 1, a = A[i], l = s >= 0 ? A[s] : 0, c = A[o];
  if (a === us && c === hs)
    return I;
  if (wr.indexOf(a) !== -1)
    return ws;
  if (wr.indexOf(c) !== -1 || Qs.indexOf(c) !== -1)
    return I;
  if (kn(i, A) === gs)
    return De;
  if (fr.get(e[i]) === ar || (a === Ke || a === Te) && fr.get(e[o]) === ar || a === xn || c === xn || a === Ln || [EA, cr, ae].indexOf(a) === -1 && c === Ln || [Se, re, kl, NA, GA].indexOf(c) !== -1 || kn(i, A) === ne || Ot(kt, ne, i, A) || Ot([Se, re], Br, i, A) || Ot(Sn, Sn, i, A))
    return I;
  if (a === EA)
    return De;
  if (a === kt || c === kt)
    return I;
  if (c === lr || a === lr)
    return De;
  if ([cr, ae, Br].indexOf(c) !== -1 || a === Dl || l === hr && Nl.indexOf(a) !== -1 || a === GA && c === hr || c === Kn || CA.indexOf(c) !== -1 && a === eA || CA.indexOf(a) !== -1 && c === eA || a === le && [Ue, Ke, Te].indexOf(c) !== -1 || [Ue, Ke, Te].indexOf(a) !== -1 && c === ce || CA.indexOf(a) !== -1 && Tn.indexOf(c) !== -1 || Tn.indexOf(a) !== -1 && CA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [le, ce].indexOf(a) !== -1 && (c === eA || [ne, ae].indexOf(c) !== -1 && A[o + 1] === eA) || // ( OP | HY ) × NU
  [ne, ae].indexOf(a) !== -1 && c === eA || // NU ×	(NU | SY | IS)
  a === eA && [eA, GA, NA].indexOf(c) !== -1)
    return I;
  if ([eA, GA, NA, Se, re].indexOf(c) !== -1)
    for (var B = i; B >= 0; ) {
      var d = A[B];
      if (d === eA)
        return I;
      if ([GA, NA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if ([le, ce].indexOf(c) !== -1)
    for (var B = [Se, re].indexOf(a) !== -1 ? s : i; B >= 0; ) {
      var d = A[B];
      if (d === eA)
        return I;
      if ([GA, NA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if (gr === a && [gr, et, dr, ur].indexOf(c) !== -1 || [et, dr].indexOf(a) !== -1 && [et, tt].indexOf(c) !== -1 || [tt, ur].indexOf(a) !== -1 && c === tt || Dn.indexOf(a) !== -1 && [Kn, ce].indexOf(c) !== -1 || Dn.indexOf(c) !== -1 && a === le || CA.indexOf(a) !== -1 && CA.indexOf(c) !== -1 || a === NA && CA.indexOf(c) !== -1 || CA.concat(eA).indexOf(a) !== -1 && c === ne && ql.indexOf(e[o]) === -1 || CA.concat(eA).indexOf(c) !== -1 && a === re)
    return I;
  if (a === Mt && c === Mt) {
    for (var g = t[i], h = 1; g > 0 && (g--, A[g] === Mt); )
      h++;
    if (h % 2 !== 0)
      return I;
  }
  return a === Ke && c === Te ? I : De;
}, _l = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = Gl(e, A.lineBreak), r = t[0], n = t[1], i = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(o) {
    return [eA, kA, fs].indexOf(o) !== -1 ? Ue : o;
  }));
  var s = A.wordBreak === "keep-all" ? i.map(function(o, a) {
    return o && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [r, n, s];
}, Xl = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === ws, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return M.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  })()
), Jl = function(e, A) {
  var t = Ut(e), r = _l(t, A), n = r[0], i = r[1], s = r[2], o = t.length, a = 0, l = 0;
  return {
    next: function() {
      if (l >= o)
        return { done: !0, value: null };
      for (var c = I; l < o && (c = Pl(t, i, n, ++l, s)) === I; )
        ;
      if (c !== I || l === o) {
        var B = new Xl(t, c, a, l);
        return a = l, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Wl = 1, Yl = 2, me = 4, Mn = 8, ct = 10, On = 47, fe = 92, Zl = 9, zl = 32, ke = 34, ie = 61, jl = 35, $l = 36, AB = 37, Me = 39, Oe = 40, se = 41, eB = 95, z = 45, tB = 33, rB = 60, nB = 62, iB = 64, sB = 91, oB = 93, aB = 61, cB = 123, Re = 63, lB = 125, Rn = 124, BB = 126, dB = 128, qn = 65533, Rt = 42, OA = 43, uB = 44, hB = 58, gB = 59, Fe = 46, fB = 0, wB = 8, QB = 11, pB = 14, CB = 31, UB = 127, hA = -1, ps = 48, Cs = 97, Us = 101, FB = 102, vB = 117, mB = 122, Fs = 65, vs = 69, ms = 70, bB = 85, yB = 90, Y = function(e) {
  return e >= ps && e <= 57;
}, EB = function(e) {
  return e >= 55296 && e <= 57343;
}, PA = function(e) {
  return Y(e) || e >= Fs && e <= ms || e >= Cs && e <= FB;
}, HB = function(e) {
  return e >= Cs && e <= mB;
}, IB = function(e) {
  return e >= Fs && e <= yB;
}, xB = function(e) {
  return HB(e) || IB(e);
}, LB = function(e) {
  return e >= dB;
}, qe = function(e) {
  return e === ct || e === Zl || e === zl;
}, lt = function(e) {
  return xB(e) || LB(e) || e === eB;
}, Vn = function(e) {
  return lt(e) || Y(e) || e === z;
}, SB = function(e) {
  return e >= fB && e <= wB || e === QB || e >= pB && e <= CB || e === UB;
}, yA = function(e, A) {
  return e !== fe ? !1 : A !== ct;
}, Ve = function(e, A, t) {
  return e === z ? lt(A) || yA(A, t) : lt(e) ? !0 : !!(e === fe && yA(e, A));
}, qt = function(e, A, t) {
  return e === OA || e === z ? Y(A) ? !0 : A === Fe && Y(t) : Y(e === Fe ? A : e);
}, KB = function(e) {
  var A = 0, t = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (t = -1), A++);
  for (var r = []; Y(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(M.apply(void 0, r), 10) : 0;
  e[A] === Fe && A++;
  for (var i = []; Y(e[A]); )
    i.push(e[A++]);
  var s = i.length, o = s ? parseInt(M.apply(void 0, i), 10) : 0;
  (e[A] === vs || e[A] === Us) && A++;
  var a = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (a = -1), A++);
  for (var l = []; Y(e[A]); )
    l.push(e[A++]);
  var c = l.length ? parseInt(M.apply(void 0, l), 10) : 0;
  return t * (n + o * Math.pow(10, -s)) * Math.pow(10, a * c);
}, TB = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, DB = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, kB = {
  type: 4
  /* COMMA_TOKEN */
}, MB = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, OB = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, RB = {
  type: 21
  /* COLUMN_TOKEN */
}, qB = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, VB = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, NB = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, GB = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, PB = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Ne = {
  type: 23
  /* BAD_URL_TOKEN */
}, _B = {
  type: 1
  /* BAD_STRING_TOKEN */
}, XB = {
  type: 25
  /* CDO_TOKEN */
}, JB = {
  type: 24
  /* CDC_TOKEN */
}, WB = {
  type: 26
  /* COLON_TOKEN */
}, YB = {
  type: 27
  /* SEMICOLON_TOKEN */
}, ZB = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, zB = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, jB = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Qr = {
  type: 32
  /* EOF_TOKEN */
}, bs = (
  /** @class */
  (function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Ut(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Qr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case ke:
          return this.consumeStringToken(ke);
        case jl:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Vn(t) || yA(r, n)) {
            var i = Ve(t, r, n) ? Yl : Wl, s = this.consumeName();
            return { type: 5, value: s, flags: i };
          }
          break;
        case $l:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), MB;
          break;
        case Me:
          return this.consumeStringToken(Me);
        case Oe:
          return TB;
        case se:
          return DB;
        case Rt:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), PB;
          break;
        case OA:
          if (qt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case uB:
          return kB;
        case z:
          var o = A, a = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (qt(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Ve(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (a === z && l === nB)
            return this.consumeCodePoint(), this.consumeCodePoint(), JB;
          break;
        case Fe:
          if (qt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case On:
          if (this.peekCodePoint(0) === Rt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Rt && (c = this.consumeCodePoint(), c === On))
                return this.consumeToken();
              if (c === hA)
                return this.consumeToken();
            }
          break;
        case hB:
          return WB;
        case gB:
          return YB;
        case rB:
          if (this.peekCodePoint(0) === tB && this.peekCodePoint(1) === z && this.peekCodePoint(2) === z)
            return this.consumeCodePoint(), this.consumeCodePoint(), XB;
          break;
        case iB:
          var B = this.peekCodePoint(0), d = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (Ve(B, d, g)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case sB:
          return ZB;
        case fe:
          if (yA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case oB:
          return zB;
        case aB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), OB;
          break;
        case cB:
          return NB;
        case lB:
          return GB;
        case vB:
        case bB:
          var h = this.peekCodePoint(0), f = this.peekCodePoint(1);
          return h === OA && (PA(f) || f === Re) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Rn:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), qB;
          if (this.peekCodePoint(0) === Rn)
            return this.consumeCodePoint(), RB;
          break;
        case BB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), VB;
          break;
        case hA:
          return Qr;
      }
      return qe(A) ? (this.consumeWhiteSpace(), jB) : Y(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : lt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: M(A) };
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
          return a === Re ? ps : a;
        })), 16), i = parseInt(M.apply(void 0, A.map(function(a) {
          return a === Re ? ms : a;
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
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === hA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Me || t === ke) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === hA || this.peekCodePoint(0) === se) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Ne);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === hA || n === se)
          return { type: 22, value: M.apply(void 0, A) };
        if (qe(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === hA || this.peekCodePoint(0) === se ? (this.consumeCodePoint(), { type: 22, value: M.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Ne);
        if (n === ke || n === Me || n === Oe || SB(n))
          return this.consumeBadUrlRemnants(), Ne;
        if (n === fe)
          if (yA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Ne;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; qe(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === se || A === hA)
          return;
        yA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === hA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === ct)
          return this._value.splice(0, r), _B;
        if (n === fe) {
          var i = this._value[r + 1];
          i !== hA && i !== void 0 && (i === ct ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : yA(n, i) && (t += this.consumeStringSlice(r), t += M(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = me, r = this.peekCodePoint(0);
      for ((r === OA || r === z) && A.push(this.consumeCodePoint()); Y(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Fe && Y(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Mn; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === vs || r === Us) && ((n === OA || n === z) && Y(i) || Y(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Mn; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [KB(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (Ve(n, i, s)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return n === AB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (PA(A)) {
        for (var t = M(A); PA(this.peekCodePoint(0)) && t.length < 6; )
          t += M(this.consumeCodePoint());
        qe(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || EB(r) || r > 1114111 ? qn : r;
      }
      return A === hA ? qn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Vn(t))
          A += M(t);
        else if (yA(t, this.peekCodePoint(0)))
          A += M(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  })()
), ys = (
  /** @class */
  (function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new bs();
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
        if (r.type === 32 || Ad(r, A))
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
      return typeof A > "u" ? Qr : A;
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
}, $B = function(e) {
  return e.type === 0;
}, pr = function(e, A) {
  return S(e) && e.value === A;
}, Es = function(e) {
  return e.type !== 31;
}, ee = function(e) {
  return e.type !== 31 && e.type !== 4;
}, gA = function(e) {
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
}, Ad = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, SA = function(e) {
  return e.type === 17 || e.type === 15;
}, R = function(e) {
  return e.type === 16 || SA(e);
}, Hs = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, P = {
  type: 17,
  number: 0,
  flags: me
}, xr = {
  type: 16,
  number: 50,
  flags: me
}, HA = {
  type: 16,
  number: 100,
  flags: me
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
}, Is = "deg", xs = "grad", Ls = "rad", Ss = "turn", Ft = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Is:
          return Math.PI * A.number / 180;
        case xs:
          return Math.PI / 200 * A.number;
        case Ls:
          return A.number;
        case Ss:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ks = function(e) {
  return e.type === 15 && (e.unit === Is || e.unit === xs || e.unit === Ls || e.unit === Ss);
}, Ts = function(e) {
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
      return [P, HA];
    case "to right":
    case "left":
      return nA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HA, HA];
    case "to bottom":
    case "top":
      return nA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HA, P];
    case "to left":
    case "right":
      return nA(270);
  }
  return 0;
}, nA = function(e) {
  return Math.PI * e / 180;
}, xA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = ed[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3);
        return IA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), i = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return IA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6);
        return IA(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), i = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return IA(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var o = FA[A.value.toUpperCase()];
      if (typeof o < "u")
        return o;
    }
    return FA.TRANSPARENT;
  }
}, LA = function(e) {
  return (255 & e) === 0;
}, V = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, IA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Nn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Gn = function(e, A) {
  var t = A.filter(ee);
  if (t.length === 3) {
    var r = t.map(Nn), n = r[0], i = r[1], s = r[2];
    return IA(n, i, s, 1);
  }
  if (t.length === 4) {
    var o = t.map(Nn), n = o[0], i = o[1], s = o[2], a = o[3];
    return IA(n, i, s, a);
  }
  return 0;
};
function Vt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Pn = function(e, A) {
  var t = A.filter(ee), r = t[0], n = t[1], i = t[2], s = t[3], o = (r.type === 17 ? nA(r.number) : Ft.parse(e, r)) / (Math.PI * 2), a = R(n) ? n.number / 100 : 0, l = R(i) ? i.number / 100 : 0, c = typeof s < "u" && R(s) ? K(s, 1) : 1;
  if (a === 0)
    return IA(l * 255, l * 255, l * 255, 1);
  var B = l <= 0.5 ? l * (a + 1) : l + a - l * a, d = l * 2 - B, g = Vt(d, B, o + 1 / 3), h = Vt(d, B, o), f = Vt(d, B, o - 1 / 3);
  return IA(g * 255, h * 255, f * 255, c);
}, ed = {
  hsl: Pn,
  hsla: Pn,
  rgb: Gn,
  rgba: Gn
}, we = function(e, A) {
  return xA.parse(e, ys.create(A).parseComponentValue());
}, FA = {
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
}, td = {
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
}, rd = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, vt = function(e, A) {
  var t = xA.parse(e, A[0]), r = A[1];
  return r && R(r) ? { color: t, stop: r } : { color: t, stop: null };
}, _n = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = P), r.stop === null && (r.stop = HA);
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
      for (var B = s - l, d = n[l - 1], g = (c - d) / (B + 1), h = 1; h <= B; h++)
        n[l + h - 1] = g * h;
      l = null;
    }
  }
  return e.map(function(f, m) {
    var w = f.color;
    return { color: w, stop: Math.max(Math.min(1, n[m] / A), 0) };
  });
}, nd = function(e, A, t) {
  var r = A / 2, n = t / 2, i = K(e[0], A) - r, s = n - K(e[1], t);
  return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2);
}, id = function(e, A, t) {
  var r = typeof e == "number" ? e : nd(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = A / 2, s = t / 2, o = n / 2, a = Math.sin(r - Math.PI / 2) * o, l = Math.cos(r - Math.PI / 2) * o;
  return [n, i - l, i + l, s - a, s + a];
}, cA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Xn = function(e, A, t, r, n) {
  var i = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return i.reduce(function(s, o) {
    var a = o[0], l = o[1], c = cA(t - a, r - l);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: o,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, sd = function(e, A, t, r, n) {
  var i = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? i = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        i = s = Math.min(cA(A, t), cA(A, t - n), cA(A - r, t), cA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), a = Xn(r, n, A, t, !0), l = a[0], c = a[1];
        i = cA(l - A, (c - t) / o), s = o * i;
      }
      break;
    case 1:
      e.shape === 0 ? i = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        i = s = Math.max(cA(A, t), cA(A, t - n), cA(A - r, t), cA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), B = Xn(r, n, A, t, !1), l = B[0], c = B[1];
        i = cA(l - A, (c - t) / o), s = o * i;
      }
      break;
  }
  return Array.isArray(e.size) && (i = K(e.size[0], r), s = e.size.length === 2 ? K(e.size[1], n) : i), [i, s];
}, od = function(e, A) {
  var t = nA(180), r = [];
  return gA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = Ts(n);
        return;
      } else if (Ks(s)) {
        t = Ft.parse(e, s);
        return;
      }
    }
    var o = vt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ge = function(e, A) {
  var t = nA(180), r = [];
  return gA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = Ts(n);
        return;
      } else if (Ks(s)) {
        t = (Ft.parse(e, s) + nA(270)) % nA(360);
        return;
      }
    }
    var o = vt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ad = function(e, A) {
  var t = nA(180), r = [], n = 1, i = 0, s = 3, o = [];
  return gA(A).forEach(function(a, l) {
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
        var B = xA.parse(e, c.values[0]);
        r.push({ stop: P, color: B });
      } else if (c.name === "to") {
        var B = xA.parse(e, c.values[0]);
        r.push({ stop: HA, color: B });
      } else if (c.name === "color-stop") {
        var d = c.values.filter(ee);
        if (d.length === 2) {
          var B = xA.parse(e, d[1]), g = d[0];
          te(g) && r.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
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
}, Ds = "closest-side", ks = "farthest-side", Ms = "closest-corner", Os = "farthest-corner", Rs = "circle", qs = "ellipse", Vs = "cover", Ns = "contain", cd = function(e, A) {
  var t = 0, r = 3, n = [], i = [];
  return gA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0) {
      var l = !1;
      a = s.reduce(function(B, d) {
        if (l)
          if (S(d))
            switch (d.value) {
              case "center":
                return i.push(xr), B;
              case "top":
              case "left":
                return i.push(P), B;
              case "right":
              case "bottom":
                return i.push(HA), B;
            }
          else (R(d) || SA(d)) && i.push(d);
        else if (S(d))
          switch (d.value) {
            case Rs:
              return t = 0, !1;
            case qs:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case Ds:
              return r = 0, !1;
            case Vs:
            case ks:
              return r = 1, !1;
            case Ns:
            case Ms:
              return r = 2, !1;
            case Os:
              return r = 3, !1;
          }
        else if (SA(d) || R(d))
          return Array.isArray(r) || (r = []), r.push(d), !1;
        return B;
      }, a);
    }
    if (a) {
      var c = vt(e, s);
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
  return gA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0 ? a = s.reduce(function(c, B) {
      if (S(B))
        switch (B.value) {
          case "center":
            return i.push(xr), !1;
          case "top":
          case "left":
            return i.push(P), !1;
          case "right":
          case "bottom":
            return i.push(HA), !1;
        }
      else if (R(B) || SA(B))
        return i.push(B), !1;
      return c;
    }, a) : o === 1 && (a = s.reduce(function(c, B) {
      if (S(B))
        switch (B.value) {
          case Rs:
            return t = 0, !1;
          case qs:
            return t = 1, !1;
          case Ns:
          case Ds:
            return r = 0, !1;
          case ks:
            return r = 1, !1;
          case Ms:
            return r = 2, !1;
          case Vs:
          case Os:
            return r = 3, !1;
        }
      else if (SA(B) || R(B))
        return Array.isArray(r) || (r = []), r.push(B), !1;
      return c;
    }, a)), a) {
      var l = vt(e, s);
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
}, ld = function(e) {
  return e.type === 1;
}, Bd = function(e) {
  return e.type === 2;
}, Lr = {
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
      var r = Gs[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function dd(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Gs[e.name]);
}
var Gs = {
  "linear-gradient": od,
  "-moz-linear-gradient": Ge,
  "-ms-linear-gradient": Ge,
  "-o-linear-gradient": Ge,
  "-webkit-linear-gradient": Ge,
  "radial-gradient": cd,
  "-moz-radial-gradient": Pe,
  "-ms-radial-gradient": Pe,
  "-o-radial-gradient": Pe,
  "-webkit-radial-gradient": Pe,
  "-webkit-gradient": ad
}, ud = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ee(r) && dd(r);
    }).map(function(r) {
      return Lr.parse(e, r);
    });
  }
}, hd = {
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
}, gd = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(R);
    }).map(Hs);
  }
}, fd = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(S).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(wd);
  }
}, wd = function(e) {
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
var Qd = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(pd);
    });
  }
}, pd = function(e) {
  return S(e) || R(e);
}, mt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Cd = mt("top"), Ud = mt("right"), Fd = mt("bottom"), vd = mt("left"), bt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Hs(t.filter(R));
    }
  };
}, md = bt("top-left"), bd = bt("top-right"), yd = bt("bottom-right"), Ed = bt("bottom-left"), yt = function(e) {
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
}, Hd = yt("top"), Id = yt("right"), xd = yt("bottom"), Ld = yt("left"), Et = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return be(t) ? t.number : 0;
    }
  };
}, Sd = Et("top"), Kd = Et("right"), Td = Et("bottom"), Dd = Et("left"), kd = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Md = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "rtl" ? 1 : 0;
  }
}, Od = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(S).reduce(
      function(t, r) {
        return t | Rd(r.value);
      },
      0
      /* NONE */
    );
  }
}, Rd = function(e) {
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
}, qd = {
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
}, Vd = {
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
var Nd = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "strict" ? Bt.STRICT : Bt.NORMAL;
  }
}, Gd = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Jn = function(e, A) {
  return S(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : R(e) ? K(e, A) : A;
}, Pd = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Lr.parse(e, A);
  }
}, _d = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "inside" ? 0 : 1;
  }
}, Cr = {
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
}, Xd = Ht("top"), Jd = Ht("right"), Wd = Ht("bottom"), Yd = Ht("left"), Zd = {
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
}, zd = {
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
}, jd = It("top"), $d = It("right"), Au = It("bottom"), eu = It("left"), tu = {
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
}, ru = {
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
}, nu = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && pr(A[0], "none") ? [] : gA(A).map(function(t) {
      for (var r = {
        color: FA.TRANSPARENT,
        offsetX: P,
        offsetY: P,
        blur: P
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        SA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = xA.parse(e, s);
      }
      return r;
    });
  }
}, iu = {
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
}, su = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = cu[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, ou = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, au = function(e) {
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
}, cu = {
  matrix: ou,
  matrix3d: au
}, Wn = {
  type: 16,
  number: 50,
  flags: me
}, lu = [Wn, Wn], Bu = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(R);
    return t.length !== 2 ? lu : [t[0], t[1]];
  }
}, du = {
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
var uu = {
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
}, hu = {
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
}, Ps = {
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
}, gu = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : 1;
  }
}, fu = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, wu = {
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
}, Qu = {
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
}, pu = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Cu = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : S(A) && A.value === "bold" ? 700 : 400;
  }
}, Uu = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(S).map(function(t) {
      return t.value;
    });
  }
}, Fu = {
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
}, vu = {
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
}, mu = {
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
    for (var r = [], n = A.filter(Es), i = 0; i < n.length; i++) {
      var s = n[i], o = n[i + 1];
      if (s.type === 20) {
        var a = o && te(o) ? o.number : 1;
        r.push({ counter: s.value, increment: a });
      }
    }
    return r;
  }
}, bu = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(Es), n = 0; n < r.length; n++) {
      var i = r[n], s = r[n + 1];
      if (S(i) && i.value !== "none") {
        var o = s && te(s) ? s.number : 0;
        t.push({ counter: i.value, reset: o });
      }
    }
    return t;
  }
}, yu = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(be).map(function(t) {
      return Ps.parse(e, t);
    });
  }
}, Eu = {
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
    var r = [], n = A.filter($B);
    if (n.length % 2 !== 0)
      return null;
    for (var i = 0; i < n.length; i += 2) {
      var s = n[i].value, o = n[i + 1].value;
      r.push({ open: s, close: o });
    }
    return r;
  }
}, Yn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Hu = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && pr(A[0], "none") ? [] : gA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: P,
        offsetY: P,
        blur: P,
        spread: P,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        pr(s, "inset") ? r.inset = !0 : SA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = xA.parse(e, s);
      }
      return r;
    });
  }
}, Iu = {
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
}, xu = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Lu = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return be(A) ? A.number : 0;
  }
}, Su = (
  /** @class */
  (function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = F(A, yu, t.animationDuration), this.backgroundClip = F(A, td, t.backgroundClip), this.backgroundColor = F(A, rd, t.backgroundColor), this.backgroundImage = F(A, ud, t.backgroundImage), this.backgroundOrigin = F(A, hd, t.backgroundOrigin), this.backgroundPosition = F(A, gd, t.backgroundPosition), this.backgroundRepeat = F(A, fd, t.backgroundRepeat), this.backgroundSize = F(A, Qd, t.backgroundSize), this.borderTopColor = F(A, Cd, t.borderTopColor), this.borderRightColor = F(A, Ud, t.borderRightColor), this.borderBottomColor = F(A, Fd, t.borderBottomColor), this.borderLeftColor = F(A, vd, t.borderLeftColor), this.borderTopLeftRadius = F(A, md, t.borderTopLeftRadius), this.borderTopRightRadius = F(A, bd, t.borderTopRightRadius), this.borderBottomRightRadius = F(A, yd, t.borderBottomRightRadius), this.borderBottomLeftRadius = F(A, Ed, t.borderBottomLeftRadius), this.borderTopStyle = F(A, Hd, t.borderTopStyle), this.borderRightStyle = F(A, Id, t.borderRightStyle), this.borderBottomStyle = F(A, xd, t.borderBottomStyle), this.borderLeftStyle = F(A, Ld, t.borderLeftStyle), this.borderTopWidth = F(A, Sd, t.borderTopWidth), this.borderRightWidth = F(A, Kd, t.borderRightWidth), this.borderBottomWidth = F(A, Td, t.borderBottomWidth), this.borderLeftWidth = F(A, Dd, t.borderLeftWidth), this.boxShadow = F(A, Hu, t.boxShadow), this.color = F(A, kd, t.color), this.direction = F(A, Md, t.direction), this.display = F(A, Od, t.display), this.float = F(A, qd, t.cssFloat), this.fontFamily = F(A, Qu, t.fontFamily), this.fontSize = F(A, pu, t.fontSize), this.fontStyle = F(A, Fu, t.fontStyle), this.fontVariant = F(A, Uu, t.fontVariant), this.fontWeight = F(A, Cu, t.fontWeight), this.letterSpacing = F(A, Vd, t.letterSpacing), this.lineBreak = F(A, Nd, t.lineBreak), this.lineHeight = F(A, Gd, t.lineHeight), this.listStyleImage = F(A, Pd, t.listStyleImage), this.listStylePosition = F(A, _d, t.listStylePosition), this.listStyleType = F(A, Cr, t.listStyleType), this.marginTop = F(A, Xd, t.marginTop), this.marginRight = F(A, Jd, t.marginRight), this.marginBottom = F(A, Wd, t.marginBottom), this.marginLeft = F(A, Yd, t.marginLeft), this.opacity = F(A, gu, t.opacity);
      var i = F(A, Zd, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = F(A, zd, t.overflowWrap), this.paddingTop = F(A, jd, t.paddingTop), this.paddingRight = F(A, $d, t.paddingRight), this.paddingBottom = F(A, Au, t.paddingBottom), this.paddingLeft = F(A, eu, t.paddingLeft), this.paintOrder = F(A, Iu, t.paintOrder), this.position = F(A, ru, t.position), this.textAlign = F(A, tu, t.textAlign), this.textDecorationColor = F(A, fu, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = F(A, wu, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = F(A, nu, t.textShadow), this.textTransform = F(A, iu, t.textTransform), this.transform = F(A, su, t.transform), this.transformOrigin = F(A, Bu, t.transformOrigin), this.visibility = F(A, du, t.visibility), this.webkitTextStrokeColor = F(A, xu, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = F(A, Lu, t.webkitTextStrokeWidth), this.wordBreak = F(A, uu, t.wordBreak), this.zIndex = F(A, hu, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return LA(this.backgroundColor);
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
), Ku = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.content = F(A, vu, t.content), this.quotes = F(A, Eu, t.quotes);
    }
    return e;
  })()
), Zn = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.counterIncrement = F(A, mu, t.counterIncrement), this.counterReset = F(A, bu, t.counterReset);
    }
    return e;
  })()
), F = function(e, A, t) {
  var r = new bs(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var i = new ys(r.read());
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
          return xA.parse(e, i.parseComponentValue());
        case "image":
          return Lr.parse(e, i.parseComponentValue());
        case "length":
          var o = i.parseComponentValue();
          return SA(o) ? o : P;
        case "length-percentage":
          var a = i.parseComponentValue();
          return R(a) ? a : P;
        case "time":
          return Ps.parse(e, i.parseComponentValue());
      }
      break;
  }
}, Tu = "data-html2canvas-debug", Du = function(e) {
  var A = e.getAttribute(Tu);
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
}, Ur = function(e, A) {
  var t = Du(e);
  return t === 1 || A === t;
}, fA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Ur(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Su(A, window.getComputedStyle(t, null)), mr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ct(this.context, t), Ur(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  })()
), ku = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", zn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", de = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _e = 0; _e < zn.length; _e++)
  de[zn.charCodeAt(_e)] = _e;
var Mu = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = de[e.charCodeAt(r)], s = de[e.charCodeAt(r + 1)], o = de[e.charCodeAt(r + 2)], a = de[e.charCodeAt(r + 3)], c[n++] = i << 2 | s >> 4, c[n++] = (s & 15) << 4 | o >> 2, c[n++] = (o & 3) << 6 | a & 63;
  return l;
}, Ou = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Ru = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, qA = 5, Sr = 11, Nt = 2, qu = Sr - qA, _s = 65536 >> qA, Vu = 1 << qA, Gt = Vu - 1, Nu = 1024 >> qA, Gu = _s + Nu, Pu = Gu, _u = 32, Xu = Pu + _u, Ju = 65536 >> Sr, Wu = 1 << qu, Yu = Wu - 1, jn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Zu = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, zu = function(e, A) {
  var t = Mu(e), r = Array.isArray(t) ? Ru(t) : new Uint32Array(t), n = Array.isArray(t) ? Ou(t) : new Uint16Array(t), i = 24, s = jn(n, i / 2, r[4] / 2), o = r[5] === 2 ? jn(n, (i + r[4]) / 2) : Zu(r, Math.ceil((i + r[4]) / 4));
  return new ju(r[0], r[1], r[2], r[3], s, o);
}, ju = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> qA], t = (t << Nt) + (A & Gt), this.data[t];
        if (A <= 65535)
          return t = this.index[_s + (A - 55296 >> qA)], t = (t << Nt) + (A & Gt), this.data[t];
        if (A < this.highStart)
          return t = Xu - Ju + (A >> Sr), t = this.index[t], t += A >> qA & Yu, t = this.index[t], t = (t << Nt) + (A & Gt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), $n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $u = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xe = 0; Xe < $n.length; Xe++)
  $u[$n.charCodeAt(Xe)] = Xe;
var Ah = 1, Pt = 2, _t = 3, Ai = 4, ei = 5, eh = 7, ti = 8, Xt = 9, Jt = 10, ri = 11, ni = 12, ii = 13, si = 14, Wt = 15, th = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, rh = function() {
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
}, nh = zu(ku), tA = "×", Yt = "÷", ih = function(e) {
  return nh.get(e);
}, sh = function(e, A, t) {
  var r = t - 2, n = A[r], i = A[t - 1], s = A[t];
  if (i === Pt && s === _t)
    return tA;
  if (i === Pt || i === _t || i === Ai || s === Pt || s === _t || s === Ai)
    return Yt;
  if (i === ti && [ti, Xt, ri, ni].indexOf(s) !== -1 || (i === ri || i === Xt) && (s === Xt || s === Jt) || (i === ni || i === Jt) && s === Jt || s === ii || s === ei || s === eh || i === Ah)
    return tA;
  if (i === ii && s === si) {
    for (; n === ei; )
      n = A[--r];
    if (n === si)
      return tA;
  }
  if (i === Wt && s === Wt) {
    for (var o = 0; n === Wt; )
      o++, n = A[--r];
    if (o % 2 === 0)
      return tA;
  }
  return Yt;
}, oh = function(e) {
  var A = th(e), t = A.length, r = 0, n = 0, i = A.map(ih);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = tA; r < t && (s = sh(A, i, ++r)) === tA; )
        ;
      if (s !== tA || r === t) {
        var o = rh.apply(null, A.slice(n, r));
        return n = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, ah = function(e) {
  for (var A = oh(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, ch = function(e) {
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
}, lh = function(e) {
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
}, Bh = function() {
  return typeof new Image().crossOrigin < "u";
}, dh = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, uh = function(e) {
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
}, oi = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, hh = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), i = A.toDataURL();
  n.src = i;
  var s = Fr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ai(s).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var l = e.createElement("div");
    return l.style.backgroundImage = "url(" + i + ")", l.style.height = t + "px", oi(a) ? ai(Fr(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), oi(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Fr = function(e, A, t, r, n) {
  var i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), o = document.createElementNS(i, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), s;
}, ai = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, G = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = ch(document);
    return Object.defineProperty(G, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = G.SUPPORT_RANGE_BOUNDS && lh(document);
    return Object.defineProperty(G, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = uh(document);
    return Object.defineProperty(G, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? hh(document) : Promise.resolve(!1);
    return Object.defineProperty(G, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Bh();
    return Object.defineProperty(G, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = dh();
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
), gh = function(e, A, t, r) {
  var n = Qh(A, t), i = [], s = 0;
  return n.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (G.SUPPORT_RANGE_BOUNDS) {
        var a = ci(r, s, o.length).getClientRects();
        if (a.length > 1) {
          var l = Kr(o), c = 0;
          l.forEach(function(d) {
            i.push(new pe(d, vA.fromDOMRectList(e, ci(r, c + s, d.length).getClientRects()))), c += d.length;
          });
        } else
          i.push(new pe(o, vA.fromDOMRectList(e, a)));
      } else {
        var B = r.splitText(o.length);
        i.push(new pe(o, fh(e, r))), r = B;
      }
    else G.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    s += o.length;
  }), i;
}, fh = function(e, A) {
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
  return vA.EMPTY;
}, ci = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Kr = function(e) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return ah(e);
}, wh = function(e, A) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Ch(e, A);
}, Qh = function(e, A) {
  return A.letterSpacing !== 0 ? Kr(e) : wh(e, A);
}, ph = [32, 160, 4961, 65792, 65793, 4153, 4241], Ch = function(e, A) {
  for (var t = Jl(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var s = n.value.slice(), o = Ut(s), a = "";
      o.forEach(function(l) {
        ph.indexOf(l) === -1 ? a += M(l) : (a.length && r.push(a), r.push(M(l)), a = "");
      }), a.length && r.push(a);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, Uh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.text = Fh(t.data, r.textTransform), this.textBounds = gh(A, this.text, r, t);
    }
    return e;
  })()
), Fh = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(vh, mh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, vh = /(^|\s|:|-|\(|\))([a-z])/g, mh = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Xs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  })(fA)
), Js = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  })(fA)
), Ws = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = new XMLSerializer(), s = Ct(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  })(fA)
), Ys = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(fA)
), vr = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  })(fA)
), bh = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], yh = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Eh = function(e) {
  return e.width > e.height ? new vA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new vA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Hh = function(e) {
  var A = e.type === Ih ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, dt = "checkbox", ut = "radio", Ih = "password", li = 707406591, Tr = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Hh(r), (n.type === dt || n.type === ut) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Eh(n.bounds)), n.type) {
        case dt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = bh;
          break;
        case ut:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = yh;
          break;
      }
      return n;
    }
    return A;
  })(fA)
), Zs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return A;
  })(fA)
), zs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(fA)
), js = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Ao(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? we(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : FA.TRANSPARENT, s = r.contentWindow.document.body ? we(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : FA.TRANSPARENT;
          n.backgroundColor = LA(i) ? LA(s) ? n.styles.backgroundColor : s : i;
        }
      } catch {
      }
      return n;
    }
    return A;
  })(fA)
), xh = ["OL", "UL", "MENU"], rt = function(e, A, t, r) {
  for (var n = A.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, eo(n) && n.data.trim().length > 0)
      t.textNodes.push(new Uh(e, n, t.styles));
    else if ($A(n))
      if (io(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(o) {
          return rt(e, o, t, r);
        });
      else {
        var s = $s(e, n);
        s.styles.isVisible() && (Lh(n, s, r) ? s.flags |= 4 : Sh(s.styles) && (s.flags |= 2), xh.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? rt(e, n.shadowRoot, s, r) : !ht(n) && !to(n) && !gt(n) && rt(e, n, s, r));
      }
}, $s = function(e, A) {
  return br(A) ? new Xs(e, A) : ro(A) ? new Js(e, A) : to(A) ? new Ws(e, A) : Kh(A) ? new Ys(e, A) : Th(A) ? new vr(e, A) : Dh(A) ? new Tr(e, A) : gt(A) ? new Zs(e, A) : ht(A) ? new zs(e, A) : no(A) ? new js(e, A) : new fA(e, A);
}, Ao = function(e, A) {
  var t = $s(e, A);
  return t.flags |= 4, rt(e, A, t, t), t;
}, Lh = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Dr(e) && t.styles.isTransparent();
}, Sh = function(e) {
  return e.isPositioned() || e.isFloating();
}, eo = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, $A = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, mr = function(e) {
  return $A(e) && typeof e.style < "u" && !nt(e);
}, nt = function(e) {
  return typeof e.className == "object";
}, Kh = function(e) {
  return e.tagName === "LI";
}, Th = function(e) {
  return e.tagName === "OL";
}, Dh = function(e) {
  return e.tagName === "INPUT";
}, kh = function(e) {
  return e.tagName === "HTML";
}, to = function(e) {
  return e.tagName === "svg";
}, Dr = function(e) {
  return e.tagName === "BODY";
}, ro = function(e) {
  return e.tagName === "CANVAS";
}, Bi = function(e) {
  return e.tagName === "VIDEO";
}, br = function(e) {
  return e.tagName === "IMG";
}, no = function(e) {
  return e.tagName === "IFRAME";
}, di = function(e) {
  return e.tagName === "STYLE";
}, Mh = function(e) {
  return e.tagName === "SCRIPT";
}, ht = function(e) {
  return e.tagName === "TEXTAREA";
}, gt = function(e) {
  return e.tagName === "SELECT";
}, io = function(e) {
  return e.tagName === "SLOT";
}, ui = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Oh = (
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
), hi = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, gi = {
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
}, Rh = {
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
}, qh = {
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
  return e < A || e > t ? ve(e, n, i.length > 0) : r.integers.reduce(function(s, o, a) {
    for (; e >= o; )
      e -= o, s += r.values[a];
    return s;
  }, "") + i;
}, so = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, k = function(e, A, t, r, n) {
  var i = t - A + 1;
  return (e < 0 ? "-" : "") + (so(Math.abs(e), i, r, function(s) {
    return M(Math.floor(s % i) + A);
  }) + n);
}, TA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return so(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, ZA = 1, mA = 2, bA = 4, ue = 8, UA = function(e, A, t, r, n, i) {
  if (e < -9999 || e > 9999)
    return ve(e, 4, n.length > 0);
  var s = Math.abs(e), o = n;
  if (s === 0)
    return A[0] + o;
  for (var a = 0; s > 0 && a <= 4; a++) {
    var l = s % 10;
    l === 0 && q(i, ZA) && o !== "" ? o = A[l] + o : l > 1 || l === 1 && a === 0 || l === 1 && a === 1 && q(i, mA) || l === 1 && a === 1 && q(i, bA) && e > 100 || l === 1 && a > 1 && q(i, ue) ? o = A[l] + (a > 0 ? t[a - 1] : "") + o : l === 1 && a > 0 && (o = t[a - 1] + o), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + o;
}, fi = "十百千萬", wi = "拾佰仟萬", Qi = "マイナス", Zt = "마이너스", ve = function(e, A, t) {
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
      return TA(e, "〇一二三四五六七八九", n);
    case 6:
      return _A(e, 1, 3999, hi, 3, r).toLowerCase();
    case 7:
      return _A(e, 1, 3999, hi, 3, r);
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
      return _A(e, 1, 9999, gi, 3, r);
    case 35:
      return _A(e, 1, 9999, gi, 3, r).toLowerCase();
    case 13:
      return k(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return k(e, 6112, 6121, !0, r);
    case 15:
      return TA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return TA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return UA(e, "零一二三四五六七八九", fi, "負", n, mA | bA | ue);
    case 47:
      return UA(e, "零壹貳參肆伍陸柒捌玖", wi, "負", n, ZA | mA | bA | ue);
    case 42:
      return UA(e, "零一二三四五六七八九", fi, "负", n, mA | bA | ue);
    case 41:
      return UA(e, "零壹贰叁肆伍陆柒捌玖", wi, "负", n, ZA | mA | bA | ue);
    case 26:
      return UA(e, "〇一二三四五六七八九", "十百千万", Qi, n, 0);
    case 25:
      return UA(e, "零壱弐参四伍六七八九", "拾百千万", Qi, n, ZA | mA | bA);
    case 31:
      return UA(e, "영일이삼사오육칠팔구", "십백천만", Zt, i, ZA | mA | bA);
    case 33:
      return UA(e, "零一二三四五六七八九", "十百千萬", Zt, i, 0);
    case 32:
      return UA(e, "零壹貳參四五六七八九", "拾百千", Zt, i, ZA | mA | bA);
    case 18:
      return k(e, 2406, 2415, !0, r);
    case 20:
      return _A(e, 1, 19999, qh, 3, r);
    case 21:
      return k(e, 2790, 2799, !0, r);
    case 22:
      return k(e, 2662, 2671, !0, r);
    case 22:
      return _A(e, 1, 10999, Rh, 3, r);
    case 23:
      return TA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return TA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return k(e, 3302, 3311, !0, r);
    case 28:
      return TA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return TA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
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
}, oo = "data-html2canvas-ignore", pi = (
  /** @class */
  (function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Oh(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = Vh(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, o = n.contentWindow, a = o.document, l = Ph(n).then(function() {
        return Z(r, void 0, void 0, function() {
          var c, B;
          return W(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(Wh), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), c = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                d.sent(), d.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Gh(a)] : [3, 4];
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
      return a.open(), a.write(Xh(document.doctype) + "<html></html>"), Jh(this.referenceElement.ownerDocument, i, s), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), l;
    }, e.prototype.createElementClone = function(A) {
      if (Ur(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (ro(A))
        return this.createCanvasClone(A);
      if (Bi(A))
        return this.createVideoClone(A);
      if (di(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return br(t) && (br(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), ui(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return zt(A.style, t), t;
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
      (!$A(t) || !Mh(t) && !t.hasAttribute(oo) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !$A(t) || !di(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling)
        if ($A(i) && io(i) && typeof i.assignedNodes == "function") {
          var s = i.assignedNodes();
          s.length && s.forEach(function(o) {
            return n.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (eo(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && $A(A) && (mr(A) || nt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
        this.referenceElement === A && mr(n) && (this.clonedReferenceElement = n), Dr(n) && zh(n);
        var a = this.counters.parse(new Zn(this.context, i)), l = this.resolvePseudoContent(A, n, s, Ce.BEFORE);
        ui(A) && (t = !0), Bi(A) || this.cloneChildNodes(A, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(A, n, o, Ce.AFTER);
        return c && n.appendChild(c), this.counters.pop(a), (i && (this.options.copyStyles || nt(A)) && !no(A) || t) && zt(i, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (ht(A) || gt(A)) && (ht(n) || gt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var i = this;
      if (r) {
        var s = r.content, o = t.ownerDocument;
        if (!(!o || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Zn(this.context, r));
          var a = new Ku(this.context, r), l = o.createElement("html2canvaspseudoelement");
          zt(r, l), a.content.forEach(function(B) {
            if (B.type === 0)
              l.appendChild(o.createTextNode(B.value));
            else if (B.type === 22) {
              var d = o.createElement("img");
              d.src = B.value, d.style.opacity = "1", l.appendChild(d);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var g = B.values.filter(S);
                g.length && l.appendChild(o.createTextNode(A.getAttribute(g[0].value) || ""));
              } else if (B.name === "counter") {
                var h = B.values.filter(ee), f = h[0], m = h[1];
                if (f && S(f)) {
                  var w = i.counters.getCounterValue(f.value), u = m && S(m) ? Cr.parse(i.context, m.value) : 3;
                  l.appendChild(o.createTextNode(ve(w, u, !1)));
                }
              } else if (B.name === "counters") {
                var U = B.values.filter(ee), f = U[0], p = U[1], m = U[2];
                if (f && S(f)) {
                  var v = i.counters.getCounterValues(f.value), Q = m && S(m) ? Cr.parse(i.context, m.value) : 3, E = p && p.type === 0 ? p.value : "", y = v.map(function(N) {
                    return ve(N, Q, !1);
                  }).join(E);
                  l.appendChild(o.createTextNode(y));
                }
              }
            } else if (B.type === 20)
              switch (B.value) {
                case "open-quote":
                  l.appendChild(o.createTextNode(Yn(a.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  l.appendChild(o.createTextNode(Yn(a.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  l.appendChild(o.createTextNode(B.value));
              }
          }), l.className = yr + " " + Er;
          var c = n === Ce.BEFORE ? " " + yr : " " + Er;
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
var Vh = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(oo, "true"), e.body.appendChild(t), t;
}, Nh = function(e) {
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
}, Gh = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Nh));
}, Ph = function(e) {
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
}, _h = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], zt = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    _h.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Xh = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Jh = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Wh = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Yh = ":before", Zh = ":after", yr = "___html2canvas___pseudoelement_before", Er = "___html2canvas___pseudoelement_after", Ci = `{
    content: "" !important;
    display: none !important;
}`, zh = function(e) {
  jh(e, "." + yr + Yh + Ci + `
         .` + Er + Zh + Ci);
}, jh = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, ao = (
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
), $h = (
  /** @class */
  (function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || ($t(A) || rg(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Z(this, void 0, void 0, function() {
        var t, r, n, i, s = this;
        return W(this, function(o) {
          switch (o.label) {
            case 0:
              return t = ao.isSameOrigin(A), r = !jt(A) && this._options.useCORS === !0 && G.SUPPORT_CORS_IMAGES && !t, n = !jt(A) && !t && !$t(A) && typeof this._options.proxy == "string" && G.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !jt(A) && !$t(A) && !n && !r ? [
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
                }, c.onerror = l, (ng(i) || r) && (c.crossOrigin = "anonymous"), c.src = i, c.complete === !0 && setTimeout(function() {
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
), Ag = /^data:image\/svg\+xml/i, eg = /^data:image\/.*;base64,/i, tg = /^data:image\/.*/i, rg = function(e) {
  return G.SUPPORT_SVG_DRAWING || !ig(e);
}, jt = function(e) {
  return tg.test(e);
}, ng = function(e) {
  return eg.test(e);
}, $t = function(e) {
  return e.substr(0, 4) === "blob";
}, ig = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Ag.test(e);
}, C = (
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
  return new C(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
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
}, sg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = Be(t.borderTopLeftRadius, r.width, r.height), i = n[0], s = n[1], o = Be(t.borderTopRightRadius, r.width, r.height), a = o[0], l = o[1], c = Be(t.borderBottomRightRadius, r.width, r.height), B = c[0], d = c[1], g = Be(t.borderBottomLeftRadius, r.width, r.height), h = g[0], f = g[1], m = [];
      m.push((i + a) / r.width), m.push((h + B) / r.width), m.push((s + f) / r.height), m.push((l + d) / r.height);
      var w = Math.max.apply(Math, m);
      w > 1 && (i /= w, s /= w, a /= w, l /= w, B /= w, d /= w, h /= w, f /= w);
      var u = r.width - a, U = r.height - d, p = r.width - B, v = r.height - f, Q = t.borderTopWidth, E = t.borderRightWidth, y = t.borderBottomWidth, b = t.borderLeftWidth, D = K(t.paddingTop, A.bounds.width), N = K(t.paddingRight, A.bounds.width), _ = K(t.paddingBottom, A.bounds.width), x = K(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + b / 3, r.top + Q / 3, i - b / 3, s - Q / 3, L.TOP_LEFT) : new C(r.left + b / 3, r.top + Q / 3), this.topRightBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + u, r.top + Q / 3, a - E / 3, l - Q / 3, L.TOP_RIGHT) : new C(r.left + r.width - E / 3, r.top + Q / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || d > 0 ? T(r.left + p, r.top + U, B - E / 3, d - y / 3, L.BOTTOM_RIGHT) : new C(r.left + r.width - E / 3, r.top + r.height - y / 3), this.bottomLeftBorderDoubleOuterBox = h > 0 || f > 0 ? T(r.left + b / 3, r.top + v, h - b / 3, f - y / 3, L.BOTTOM_LEFT) : new C(r.left + b / 3, r.top + r.height - y / 3), this.topLeftBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + b * 2 / 3, r.top + Q * 2 / 3, i - b * 2 / 3, s - Q * 2 / 3, L.TOP_LEFT) : new C(r.left + b * 2 / 3, r.top + Q * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + u, r.top + Q * 2 / 3, a - E * 2 / 3, l - Q * 2 / 3, L.TOP_RIGHT) : new C(r.left + r.width - E * 2 / 3, r.top + Q * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || d > 0 ? T(r.left + p, r.top + U, B - E * 2 / 3, d - y * 2 / 3, L.BOTTOM_RIGHT) : new C(r.left + r.width - E * 2 / 3, r.top + r.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = h > 0 || f > 0 ? T(r.left + b * 2 / 3, r.top + v, h - b * 2 / 3, f - y * 2 / 3, L.BOTTOM_LEFT) : new C(r.left + b * 2 / 3, r.top + r.height - y * 2 / 3), this.topLeftBorderStroke = i > 0 || s > 0 ? T(r.left + b / 2, r.top + Q / 2, i - b / 2, s - Q / 2, L.TOP_LEFT) : new C(r.left + b / 2, r.top + Q / 2), this.topRightBorderStroke = i > 0 || s > 0 ? T(r.left + u, r.top + Q / 2, a - E / 2, l - Q / 2, L.TOP_RIGHT) : new C(r.left + r.width - E / 2, r.top + Q / 2), this.bottomRightBorderStroke = B > 0 || d > 0 ? T(r.left + p, r.top + U, B - E / 2, d - y / 2, L.BOTTOM_RIGHT) : new C(r.left + r.width - E / 2, r.top + r.height - y / 2), this.bottomLeftBorderStroke = h > 0 || f > 0 ? T(r.left + b / 2, r.top + v, h - b / 2, f - y / 2, L.BOTTOM_LEFT) : new C(r.left + b / 2, r.top + r.height - y / 2), this.topLeftBorderBox = i > 0 || s > 0 ? T(r.left, r.top, i, s, L.TOP_LEFT) : new C(r.left, r.top), this.topRightBorderBox = a > 0 || l > 0 ? T(r.left + u, r.top, a, l, L.TOP_RIGHT) : new C(r.left + r.width, r.top), this.bottomRightBorderBox = B > 0 || d > 0 ? T(r.left + p, r.top + U, B, d, L.BOTTOM_RIGHT) : new C(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = h > 0 || f > 0 ? T(r.left, r.top + v, h, f, L.BOTTOM_LEFT) : new C(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || s > 0 ? T(r.left + b, r.top + Q, Math.max(0, i - b), Math.max(0, s - Q), L.TOP_LEFT) : new C(r.left + b, r.top + Q), this.topRightPaddingBox = a > 0 || l > 0 ? T(r.left + Math.min(u, r.width - E), r.top + Q, u > r.width + E ? 0 : Math.max(0, a - E), Math.max(0, l - Q), L.TOP_RIGHT) : new C(r.left + r.width - E, r.top + Q), this.bottomRightPaddingBox = B > 0 || d > 0 ? T(r.left + Math.min(p, r.width - b), r.top + Math.min(U, r.height - y), Math.max(0, B - E), Math.max(0, d - y), L.BOTTOM_RIGHT) : new C(r.left + r.width - E, r.top + r.height - y), this.bottomLeftPaddingBox = h > 0 || f > 0 ? T(r.left + b, r.top + Math.min(v, r.height - y), Math.max(0, h - b), Math.max(0, f - y), L.BOTTOM_LEFT) : new C(r.left + b, r.top + r.height - y), this.topLeftContentBox = i > 0 || s > 0 ? T(r.left + b + x, r.top + Q + D, Math.max(0, i - (b + x)), Math.max(0, s - (Q + D)), L.TOP_LEFT) : new C(r.left + b + x, r.top + Q + D), this.topRightContentBox = a > 0 || l > 0 ? T(r.left + Math.min(u, r.width + b + x), r.top + Q + D, u > r.width + b + x ? 0 : a - b + x, l - (Q + D), L.TOP_RIGHT) : new C(r.left + r.width - (E + N), r.top + Q + D), this.bottomRightContentBox = B > 0 || d > 0 ? T(r.left + Math.min(p, r.width - (b + x)), r.top + Math.min(U, r.height + Q + D), Math.max(0, B - (E + N)), d - (y + _), L.BOTTOM_RIGHT) : new C(r.left + r.width - (E + N), r.top + r.height - (y + _)), this.bottomLeftContentBox = h > 0 || f > 0 ? T(r.left + b + x, r.top + v, Math.max(0, h - (b + x)), f - (y + _), L.BOTTOM_LEFT) : new C(r.left + b + x, r.top + r.height - (y + _));
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
      return new Je(new C(e, l), new C(e, l - o), new C(a - s, A), new C(a, A));
    case L.TOP_RIGHT:
      return new Je(new C(e, A), new C(e + s, A), new C(a, l - o), new C(a, l));
    case L.BOTTOM_RIGHT:
      return new Je(new C(a, A), new C(a, A + o), new C(e + s, l), new C(e, l));
    case L.BOTTOM_LEFT:
    default:
      return new Je(new C(a, l), new C(a - s, l), new C(e, A + o), new C(e, A));
  }
}, ft = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, og = function(e) {
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
}, ag = (
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
), cg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  })()
), lg = function(e) {
  return e.type === 0;
}, co = function(e) {
  return e.type === 1;
}, Bg = function(e) {
  return e.type === 2;
}, Ui = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, dg = function(e, A, t, r, n) {
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
}, lo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  })()
), Bo = (
  /** @class */
  (function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new sg(this.container), this.container.styles.opacity < 1 && this.effects.push(new cg(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new ag(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = ft(this.curves), o = wt(this.curves);
        Ui(s, o) ? this.effects.push(new We(
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
          return !co(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = ft(r.curves), o = wt(r.curves);
            Ui(s, o) || n.unshift(new We(
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
), Hr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var i = q(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = q(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Bo(n, e);
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
      var l = i || n.styles.isPositioned() ? t : A, c = new lo(o);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var B = n.styles.zIndex.order;
        if (B < 0) {
          var d = 0;
          l.negativeZIndex.some(function(h, f) {
            return B > h.element.container.styles.zIndex.order ? (d = f, !1) : d > 0;
          }), l.negativeZIndex.splice(d, 0, c);
        } else if (B > 0) {
          var g = 0;
          l.positiveZIndex.some(function(h, f) {
            return B >= h.element.container.styles.zIndex.order ? (g = f + 1, !1) : g > 0;
          }), l.positiveZIndex.splice(g, 0, c);
        } else
          l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
      Hr(o, c, i ? c : t, a);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), Hr(o, A, t, a);
    q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && uo(n, a);
  });
}, uo = function(e, A) {
  for (var t = e instanceof vr ? e.start : 1, r = e instanceof vr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var i = A[n];
    i.container instanceof Ys && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = ve(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, ug = function(e) {
  var A = new Bo(e, null), t = new lo(A), r = [];
  return Hr(A, t, t, r), uo(A.container, r), t;
}, Fi = function(e, A) {
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
}, hg = function(e, A) {
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
}, gg = function(e, A) {
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
}, fg = function(e, A) {
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
}, ho = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Qt = function(e) {
  var A = e.styles, t = e.bounds, r = K(A.paddingLeft, t.width), n = K(A.paddingRight, t.width), i = K(A.paddingTop, t.width), s = K(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + i + s));
}, wg = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Qt(A) : ho(A);
}, Qg = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Qt(A) : ho(A);
}, Ar = function(e, A, t) {
  var r = wg(zA(e.styles.backgroundOrigin, A), e), n = Qg(zA(e.styles.backgroundClip, A), e), i = pg(zA(e.styles.backgroundSize, A), t, r), s = i[0], o = i[1], a = Be(zA(e.styles.backgroundPosition, A), r.width - s, r.height - o), l = Cg(zA(e.styles.backgroundRepeat, A), a, i, r, n), c = Math.round(r.left + a[0]), B = Math.round(r.top + a[1]);
  return [l, c, B, s, o];
}, JA = function(e) {
  return S(e) && e.value === Ae.AUTO;
}, Ze = function(e) {
  return typeof e == "number";
}, pg = function(e, A, t) {
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
      var g = c ? r : n * i, h = B ? n : r / i;
      return [g, h];
    }
    var f = c ? r : t.width, m = B ? n : t.height;
    return [f, m];
  }
  if (a) {
    var w = 0, u = 0;
    return R(s) ? w = K(s, t.width) : R(o) && (u = K(o, t.height)), JA(s) ? w = u * i : (!o || JA(o)) && (u = w / i), [w, u];
  }
  var U = null, p = null;
  if (R(s) ? U = K(s, t.width) : o && R(o) && (p = K(o, t.height)), U !== null && (!o || JA(o)) && (p = c && B ? U / r * n : t.height), p !== null && JA(s) && (U = c && B ? p / n * r : t.width), U !== null && p !== null)
    return [U, p];
  throw new Error("Unable to calculate background-size for element");
}, zA = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Cg = function(e, A, t, r, n) {
  var i = A[0], s = A[1], o = t[0], a = t[1];
  switch (e) {
    case 2:
      return [
        new C(Math.round(r.left), Math.round(r.top + s)),
        new C(Math.round(r.left + r.width), Math.round(r.top + s)),
        new C(Math.round(r.left + r.width), Math.round(a + r.top + s)),
        new C(Math.round(r.left), Math.round(a + r.top + s))
      ];
    case 3:
      return [
        new C(Math.round(r.left + i), Math.round(r.top)),
        new C(Math.round(r.left + i + o), Math.round(r.top)),
        new C(Math.round(r.left + i + o), Math.round(r.height + r.top)),
        new C(Math.round(r.left + i), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new C(Math.round(r.left + i), Math.round(r.top + s)),
        new C(Math.round(r.left + i + o), Math.round(r.top + s)),
        new C(Math.round(r.left + i + o), Math.round(r.top + s + a)),
        new C(Math.round(r.left + i), Math.round(r.top + s + a))
      ];
    default:
      return [
        new C(Math.round(n.left), Math.round(n.top)),
        new C(Math.round(n.left + n.width), Math.round(n.top)),
        new C(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new C(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Ug = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", vi = "Hidden Text", Fg = (
  /** @class */
  (function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = Ug, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = A, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(vi)), r.appendChild(i), r.appendChild(n);
      var o = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(vi)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: o, middle: a };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  })()
), go = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  })()
), vg = 1e4, mg = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Fg(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Bg(t) && (this.ctx.globalAlpha = t.opacity), lg(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), co(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
        var s = Kr(t.text);
        s.reduce(function(o, a) {
          return i.ctx.fillText(a, o, t.bounds.top + n), o + i.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = Ig(t.fontFamily).join(", "), i = be(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return Z(this, void 0, void 0, function() {
        var n, i, s, o, a, l, c, B, d = this;
        return W(this, function(g) {
          return n = this.createFontStyle(r), i = n[0], s = n[1], o = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(s, o), l = a.baseline, c = a.middle, B = r.paintOrder, t.textBounds.forEach(function(h) {
            B.forEach(function(f) {
              switch (f) {
                case 0:
                  d.ctx.fillStyle = V(r.color), d.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  var m = r.textShadow;
                  m.length && h.text.trim().length && (m.slice(0).reverse().forEach(function(w) {
                    d.ctx.shadowColor = V(w.color), d.ctx.shadowOffsetX = w.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = w.offsetY.number * d.options.scale, d.ctx.shadowBlur = w.blur.number, d.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = V(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(w) {
                    switch (w) {
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
                  r.webkitTextStrokeWidth && h.text.trim().length && (d.ctx.strokeStyle = V(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var r, n, i, s, o, a, u, u, l, c, B, d, p, g, h, v, f, m, w, u, U, p, v;
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
              if (!(r instanceof Xs)) return [3, 8];
              Q.label = 5;
            case 5:
              return Q.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return u = Q.sent(), this.renderReplacedElement(r, n, u), [3, 8];
            case 7:
              return Q.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Js && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Ws)) return [3, 12];
              Q.label = 9;
            case 9:
              return Q.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return u = Q.sent(), this.renderReplacedElement(r, n, u), [3, 12];
            case 11:
              return Q.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof js && r.tree ? (l = new A(this.context, {
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
              if (r instanceof Tr && (B = Math.min(r.bounds.width, r.bounds.height), r.type === dt ? r.checked && (this.ctx.save(), this.path([
                new C(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79),
                new C(r.bounds.left + B * 0.16, r.bounds.top + B * 0.5549),
                new C(r.bounds.left + B * 0.27347, r.bounds.top + B * 0.44071),
                new C(r.bounds.left + B * 0.39694, r.bounds.top + B * 0.5649),
                new C(r.bounds.left + B * 0.72983, r.bounds.top + B * 0.23),
                new C(r.bounds.left + B * 0.84, r.bounds.top + B * 0.34085),
                new C(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = V(li), this.ctx.fill(), this.ctx.restore()) : r.type === ut && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + B / 2, r.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = V(li), this.ctx.fill(), this.ctx.restore())), bg(r) && r.value.length) {
                switch (d = this.createFontStyle(i), p = d[0], g = d[1], h = this.fontMetrics.getMetrics(p, g).baseline, this.ctx.font = p, this.ctx.fillStyle = V(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Eg(r.styles.textAlign), v = Qt(r), f = 0, r.styles.textAlign) {
                  case 1:
                    f += v.width / 2;
                    break;
                  case 2:
                    f += v.width;
                    break;
                }
                m = v.add(f, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new C(v.left, v.top),
                  new C(v.left + v.width, v.top),
                  new C(v.left + v.width, v.top + v.height),
                  new C(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new pe(r.value, m), i.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!q(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (w = r.styles.listStyleImage, w.type !== 0) return [3, 18];
              u = void 0, U = w.url, Q.label = 15;
            case 15:
              return Q.trys.push([15, 17, , 18]), [4, this.context.cache.match(U)];
            case 16:
              return u = Q.sent(), this.ctx.drawImage(u, r.bounds.left - (u.width + 10), r.bounds.top), [3, 18];
            case 17:
              return Q.sent(), this.context.logger.error("Error loading list-style-image " + U), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (p = this.createFontStyle(i)[0], this.ctx.font = p, this.ctx.fillStyle = V(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new vA(r.bounds.left, r.bounds.top + K(r.styles.paddingTop, r.bounds.width), r.bounds.width, Jn(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new pe(t.listValue, v), i.letterSpacing, Jn(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), Q.label = 20;
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
        var r, n, w, i, s, w, o, a, w, l, c, w, B, d, w, g, h, w, f, m, w;
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
              return r < n.length ? (w = n[r], [4, this.renderStack(w)]) : [3, 5];
            case 3:
              u.sent(), u.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              u.sent(), i = 0, s = t.nonInlineLevel, u.label = 7;
            case 7:
              return i < s.length ? (w = s[i], [4, this.renderNode(w)]) : [3, 10];
            case 8:
              u.sent(), u.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, u.label = 11;
            case 11:
              return o < a.length ? (w = a[o], [4, this.renderStack(w)]) : [3, 14];
            case 12:
              u.sent(), u.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, u.label = 15;
            case 15:
              return l < c.length ? (w = c[l], [4, this.renderStack(w)]) : [3, 18];
            case 16:
              u.sent(), u.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              B = 0, d = t.inlineLevel, u.label = 19;
            case 19:
              return B < d.length ? (w = d[B], [4, this.renderNode(w)]) : [3, 22];
            case 20:
              u.sent(), u.label = 21;
            case 21:
              return B++, [3, 19];
            case 22:
              g = 0, h = t.zeroOrAutoZIndexOrTransformedOrOpacity, u.label = 23;
            case 23:
              return g < h.length ? (w = h[g], [4, this.renderStack(w)]) : [3, 26];
            case 24:
              u.sent(), u.label = 25;
            case 25:
              return g++, [3, 23];
            case 26:
              f = 0, m = t.positiveZIndex, u.label = 27;
            case 27:
              return f < m.length ? (w = m[f], [4, this.renderStack(w)]) : [3, 30];
            case 28:
              u.sent(), u.label = 29;
            case 29:
              return f++, [3, 27];
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
                var B, d, g, D, X, J, x, O, y, h, D, X, J, x, O, f, m, w, u, U, p, v, Q, E, y, b, D, N, _, x, O, sA, X, J, wA, j, dA, QA, pA, oA, aA, $;
                return W(this, function(uA) {
                  switch (uA.label) {
                    case 0:
                      if (c.type !== 0) return [3, 5];
                      B = void 0, d = c.url, uA.label = 1;
                    case 1:
                      return uA.trys.push([1, 3, , 4]), [4, i.context.cache.match(d)];
                    case 2:
                      return B = uA.sent(), [3, 4];
                    case 3:
                      return uA.sent(), i.context.logger.error("Error loading background-image " + d), [3, 4];
                    case 4:
                      return B && (g = Ar(t, r, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), D = g[0], X = g[1], J = g[2], x = g[3], O = g[4], y = i.ctx.createPattern(i.resizeImage(B, x, O), "repeat"), i.renderRepeat(D, y, X, J)), [3, 6];
                    case 5:
                      ld(c) ? (h = Ar(t, r, [null, null, null]), D = h[0], X = h[1], J = h[2], x = h[3], O = h[4], f = id(c.angle, x, O), m = f[0], w = f[1], u = f[2], U = f[3], p = f[4], v = document.createElement("canvas"), v.width = x, v.height = O, Q = v.getContext("2d"), E = Q.createLinearGradient(w, U, u, p), _n(c.stops, m).forEach(function(KA) {
                        return E.addColorStop(KA.stop, V(KA.color));
                      }), Q.fillStyle = E, Q.fillRect(0, 0, x, O), x > 0 && O > 0 && (y = i.ctx.createPattern(v, "repeat"), i.renderRepeat(D, y, X, J))) : Bd(c) && (b = Ar(t, r, [
                        null,
                        null,
                        null
                      ]), D = b[0], N = b[1], _ = b[2], x = b[3], O = b[4], sA = c.position.length === 0 ? [xr] : c.position, X = K(sA[0], x), J = K(sA[sA.length - 1], O), wA = sd(c, X, J, x, O), j = wA[0], dA = wA[1], j > 0 && dA > 0 && (QA = i.ctx.createRadialGradient(N + X, _ + J, 0, N + X, _ + J, j), _n(c.stops, j * 2).forEach(function(KA) {
                        return QA.addColorStop(KA.stop, V(KA.color));
                      }), i.path(D), i.ctx.fillStyle = QA, j !== dA ? (pA = t.bounds.left + 0.5 * t.bounds.width, oA = t.bounds.top + 0.5 * t.bounds.height, aA = dA / j, $ = 1 / aA, i.ctx.save(), i.ctx.translate(pA, oA), i.ctx.transform(1, 0, 0, aA, 0, 0), i.ctx.translate(-pA, -oA), i.ctx.fillRect(N, $ * (_ - oA) + oA, x, O * $), i.ctx.restore()) : i.ctx.fill())), uA.label = 6;
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
          return this.path(Fi(n, r)), this.ctx.fillStyle = V(t), this.ctx.fill(), [
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
              return s = hg(i, n), this.path(s), this.ctx.fillStyle = V(t), this.ctx.fill(), o = gg(i, n), this.path(o), this.ctx.fill(), [
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
              )), r = t.container.styles, n = !LA(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = yg(zA(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), LA(r.backgroundColor) || (this.ctx.fillStyle = V(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                B.ctx.save();
                var h = ft(t.curves), f = g.inset ? 0 : vg, m = dg(h, -f + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (B.path(h), B.ctx.clip(), B.mask(m)) : (B.mask(h), B.ctx.clip(), B.path(m)), B.ctx.shadowOffsetX = g.offsetX.number + f, B.ctx.shadowOffsetY = g.offsetY.number, B.ctx.shadowColor = V(g.color), B.ctx.shadowBlur = g.blur.number, B.ctx.fillStyle = g.inset ? V(g.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), d.label = 2;
            case 2:
              o = 0, a = 0, l = i, d.label = 3;
            case 3:
              return a < l.length ? (c = l[a], c.style !== 0 && !LA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
        var o, a, l, c, B, d, g, h, f, m, w, u, U, p, v, Q, v, Q;
        return W(this, function(E) {
          return this.ctx.save(), o = fg(i, n), a = Fi(i, n), s === 2 && (this.path(a), this.ctx.clip()), rA(a[0]) ? (l = a[0].start.x, c = a[0].start.y) : (l = a[0].x, c = a[0].y), rA(a[1]) ? (B = a[1].end.x, d = a[1].end.y) : (B = a[1].x, d = a[1].y), n === 0 || n === 2 ? g = Math.abs(l - B) : g = Math.abs(c - d), this.ctx.beginPath(), s === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), h = r < 3 ? r * 3 : r * 2, f = r < 3 ? r * 2 : r, s === 3 && (h = r, f = r), m = !0, g <= h * 2 ? m = !1 : g <= h * 2 + f ? (w = g / (2 * h + f), h *= w, f *= w) : (u = Math.floor((g + f) / (h + f)), U = (g - u * h) / (u - 1), p = (g - (u + 1) * h) / u, f = p <= 0 || Math.abs(f - U) < Math.abs(f - p) ? U : p), m && (s === 3 ? this.ctx.setLineDash([0, h + f]) : this.ctx.setLineDash([h, f])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = V(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (rA(a[0]) && (v = a[3], Q = a[0], this.ctx.beginPath(), this.formatPath([new C(v.end.x, v.end.y), new C(Q.start.x, Q.start.y)]), this.ctx.stroke()), rA(a[1]) && (v = a[1], Q = a[2], this.ctx.beginPath(), this.formatPath([new C(v.end.x, v.end.y), new C(Q.start.x, Q.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = ug(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  })(go)
), bg = function(e) {
  return e instanceof zs || e instanceof Zs ? !0 : e instanceof Tr && e.type !== ut && e.type !== dt;
}, yg = function(e, A) {
  switch (e) {
    case 0:
      return ft(A);
    case 2:
      return og(A);
    default:
      return wt(A);
  }
}, Eg = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, Hg = ["-apple-system", "system-ui"], Ig = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Hg.indexOf(A) === -1;
  }) : e;
}, xg = (
  /** @class */
  (function(e) {
    BA(A, e);
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
              return r = Fr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Lg(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  })(go)
), Lg = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Sg = (
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
), Kg = (
  /** @class */
  (function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Sg({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new $h(this, A);
    }
    return e.instanceCount = 1, e;
  })()
), Tg = function(e, A) {
  return A === void 0 && (A = {}), Dg(e, A);
};
typeof window < "u" && ao.setContext(window);
var Dg = function(e, A) {
  return Z(void 0, void 0, void 0, function() {
    var t, r, n, i, s, o, a, l, c, B, d, g, h, f, m, w, u, U, p, v, E, Q, E, y, b, D, N, _, x, O, sA, X, J, wA, j, dA, QA, pA, oA, aA;
    return W(this, function($) {
      switch ($.label) {
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
          }, i = or({ logging: (N = A.logging) !== null && N !== void 0 ? N : !0, cache: A.cache }, n), s = {
            windowWidth: (_ = A.windowWidth) !== null && _ !== void 0 ? _ : r.innerWidth,
            windowHeight: (x = A.windowHeight) !== null && x !== void 0 ? x : r.innerHeight,
            scrollX: (O = A.scrollX) !== null && O !== void 0 ? O : r.pageXOffset,
            scrollY: (sA = A.scrollY) !== null && sA !== void 0 ? sA : r.pageYOffset
          }, o = new vA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), a = new Kg(i, o), l = (X = A.foreignObjectRendering) !== null && X !== void 0 ? X : !1, c = {
            allowTaint: (J = A.allowTaint) !== null && J !== void 0 ? J : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), B = new pi(a, e, c), d = B.clonedReferenceElement, d ? [4, B.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = $.sent(), h = Dr(d) || kh(d) ? dl(d.ownerDocument) : Ct(a, d), f = h.width, m = h.height, w = h.left, u = h.top, U = kg(a, d, A.backgroundColor), p = {
            canvas: A.canvas,
            backgroundColor: U,
            scale: (j = (wA = A.scale) !== null && wA !== void 0 ? wA : r.devicePixelRatio) !== null && j !== void 0 ? j : 1,
            x: ((dA = A.x) !== null && dA !== void 0 ? dA : 0) + w,
            y: ((QA = A.y) !== null && QA !== void 0 ? QA : 0) + u,
            width: (pA = A.width) !== null && pA !== void 0 ? pA : Math.ceil(f),
            height: (oA = A.height) !== null && oA !== void 0 ? oA : Math.ceil(m)
          }, l ? (a.logger.debug("Document cloned, using foreign object rendering"), E = new xg(a, p), [4, E.render(d)]) : [3, 3];
        case 2:
          return v = $.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + w + "," + u + " with size " + f + "x" + m + " using computed rendering"), a.logger.debug("Starting DOM parsing"), Q = Ao(a, d), U === Q.styles.backgroundColor && (Q.styles.backgroundColor = FA.TRANSPARENT), a.logger.debug("Starting renderer for element at " + p.x + "," + p.y + " with size " + p.width + "x" + p.height), E = new mg(a, p), [4, E.render(Q)];
        case 4:
          v = $.sent(), $.label = 5;
        case 5:
          return (!((aA = A.removeContainer) !== null && aA !== void 0) || aA) && (pi.destroy(g) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, kg = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? we(e, getComputedStyle(r.documentElement).backgroundColor) : FA.TRANSPARENT, i = r.body ? we(e, getComputedStyle(r.body).backgroundColor) : FA.TRANSPARENT, s = typeof t == "string" ? we(e, t) : t === null ? FA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? LA(n) ? LA(i) ? s : i : n : s;
};
const Mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xi as AnnotationEditor,
  Ra as QaidFeedback,
  lc as captureDomScreenshot,
  Za as captureNetworkErrors,
  _i as compositeAnnotations,
  sc as createVideoRecorder,
  ot as drawShape,
  Ri as getSupportedMimeType,
  ac as isDomScreenshotSupported,
  ic as isVideoRecordingSupported,
  mc as openAnnotationEditor,
  st as rectFromPoints,
  Qa as startErrorReporting
};
//# sourceMappingURL=index.js.map
