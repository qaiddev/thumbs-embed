const jt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, $t = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, vo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, Qi = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8M8 14h5m-9 6l3.5-3.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"/>
</svg>`, mo = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', bo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, yo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, Eo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, Ho = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, Io = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, Ci = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, xo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v8m0 4h.01"/>
</svg>`, Lo = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`, Ko = "http://www.w3.org/2000/svg", pi = {};
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
  pi[e.toLowerCase()] = e;
const Ui = {};
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
  Ui[e.toLowerCase()] = e;
const So = /* @__PURE__ */ new Set(["title", "desc"]), Vr = 5e4, To = 1e3, Do = {
  lt: "<",
  gt: ">",
  amp: "&",
  quot: '"',
  apos: "'",
  nbsp: " "
};
function Nr(e) {
  return e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (A, t) => {
    if (t[0] === "#") {
      const r = t[1] === "x" || t[1] === "X" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
      return r > 0 && r <= 1114111 ? String.fromCodePoint(r) : "";
    }
    return Do[t.toLowerCase()] ?? A;
  });
}
const Gr = /url\(\s*(['"]?)#[A-Za-z_][\w.:-]*\1\s*\)/gi;
function ko(e, A) {
  const t = A.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase();
  if (/(java|vb)script:|data:|expression\(/.test(t)) return !1;
  const r = A.replace(Gr, "");
  return /url\(/.test(r.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase()) ? !1 : e === "clip-path" ? /^\s*none\s*$/i.test(A) || new RegExp(`^\\s*${Gr.source}\\s*$`, "i").test(A) : !0;
}
function Pr(e) {
  if (typeof e != "string" || typeof document > "u") return null;
  const A = e.trim();
  if (!A || A.length > Vr) return null;
  let t = null, r = !1, n = 0;
  const i = [];
  let s = 0;
  const o = () => i[i.length - 1];
  for (; s < A.length && !r; ) {
    const a = A.indexOf("<", s), c = a === -1 ? A.length : a;
    if (c > s) {
      const v = A.slice(s, c), U = o();
      if (U?.node && So.has(U.name))
        U.node.appendChild(document.createTextNode(Nr(v)));
      else if (!U && v.trim())
        return null;
    }
    if (a === -1) break;
    if (s = a, A.startsWith("<!--", s)) {
      const v = A.indexOf("-->", s + 4);
      if (v === -1) return null;
      s = v + 3;
      continue;
    }
    if (A.startsWith("<?", s)) {
      if (t) return null;
      const v = A.indexOf("?>", s + 2);
      if (v === -1) return null;
      s = v + 2;
      continue;
    }
    if (A.startsWith("<!", s))
      return null;
    if (A[s + 1] === "/") {
      const v = /^<\/\s*([A-Za-z][\w:.-]*)\s*>/.exec(A.slice(s, s + 200));
      if (!v) return null;
      s += v[0].length;
      const U = v[1].toLowerCase(), F = i.map((w) => w.name).lastIndexOf(U);
      F !== -1 && (i.length = F, F === 0 && (r = !0));
      continue;
    }
    const l = /^<([A-Za-z][\w:.-]*)/.exec(A.slice(s, s + 200));
    if (!l) return null;
    const d = l[1].toLowerCase();
    s += l[0].length;
    const g = [];
    let u = !1, f = !1;
    for (; s < A.length; ) {
      const v = /^\s*/.exec(A.slice(s, s + 1e3))[0];
      if (s += v.length, A.startsWith("/>", s)) {
        u = !0, f = !0, s += 2;
        break;
      }
      if (A[s] === ">") {
        f = !0, s += 1;
        break;
      }
      const U = /^([^\s=/>"'<]+)/.exec(A.slice(s, s + 200));
      if (!U) return null;
      const F = U[1];
      s += F.length;
      let w = "";
      const E = /^\s*=\s*/.exec(A.slice(s, s + 1e3));
      if (E) {
        s += E[0].length;
        const y = A[s];
        if (y === '"' || y === "'") {
          const b = A.indexOf(y, s + 1);
          if (b === -1) return null;
          w = A.slice(s + 1, b), s = b + 1;
        } else {
          const b = /^[^\s>]+/.exec(A.slice(s, s + Vr));
          if (!b) return null;
          w = b[0], w.endsWith("/") && A[s + w.length] === ">" && (w = w.slice(0, -1)), s += w.length;
        }
      }
      g.push([F, Nr(w)]);
    }
    if (!f || ++n > To) return null;
    const m = o();
    if (m) {
      if (!m.node) {
        u || i.push({ name: d, node: null });
        continue;
      }
    } else if (t || d !== "svg") return null;
    const Q = pi[d];
    if (!Q) {
      u || i.push({ name: d, node: null });
      continue;
    }
    const h = document.createElementNS(Ko, Q);
    for (const [v, U] of g) {
      const F = Ui[v.toLowerCase()];
      F && ko(F, U) && h.setAttribute(F, U);
    }
    m ? m.node.appendChild(h) : t = h, u ? m || (r = !0) : i.push({ name: d, node: h });
  }
  return t;
}
function MA(e, A) {
  return (e ? Pr(e) : null) ?? Pr(A);
}
function DA(e, A, t) {
  e.textContent = "", e.appendChild(MA(A, t));
}
const Mo = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}:where(button.qaid-btn-structural)>svg:where(:not(.qaid-icon):not([width])){width:var(--qaid-icon-size, 24px);height:var(--qaid-icon-size, 24px)}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:var(--qaid-font-size, 16px);font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}button.qaid-btn-record:hover{background:#dc2626;color:#fff}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid CanvasText;outline-offset:2px}}", Oo = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let he = 0;
const Ro = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn-feedback:hover{background:var(--qaid-marker,#6365f1);color:var(--qaid-marker-text,#fff)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", qo = {
  small: 36,
  medium: 48,
  large: 64
}, Vo = {
  small: 18,
  medium: 24,
  large: 32
};
function No(e, A, t) {
  const [r, n, i] = [e, A, t].map((s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * n + 0.0722 * i;
}
function Go(e) {
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
function Po(e) {
  const A = Go(e);
  return A && No(A.r, A.g, A.b) > 0.4 ? "black" : "white";
}
function _o(e = {}) {
  const {
    positiveColor: A = "rgb(0, 200, 83)",
    negativeColor: t = "rgb(255, 0, 0)",
    markerColor: r = "#6365f1",
    buttonSize: n = "medium",
    modalWidth: i = 400,
    backdropOpacity: s = 0.3,
    fontFamily: o = "system-ui, -apple-system, sans-serif",
    fontSize: a = 16
  } = e, c = qo[n], l = Vo[n], B = Po(r);
  return {
    "--qaid-positive": A,
    "--qaid-negative": t,
    "--qaid-marker": r,
    "--qaid-marker-text": B,
    "--qaid-btn-size": `${c}px`,
    "--qaid-icon-size": `${l}px`,
    "--qaid-modal-width": `${i}px`,
    "--qaid-backdrop-opacity": String(s),
    "--qaid-font-family": o,
    "--qaid-font-size": `${a}px`
  };
}
function Xo(e, A) {
  for (const [t, r] of Object.entries(A))
    e.style.setProperty(t, r);
}
function _r() {
  return Mo + Ro;
}
function Jo() {
  if (he++, he > 1) return;
  const e = document.createElement("style");
  e.id = "qaid-styles", e.textContent = Oo, document.head.appendChild(e);
}
function Wo() {
  he <= 0 || (he--, he === 0 && document.getElementById("qaid-styles")?.remove());
}
const Xr = "data-qaid-a11y-live", Yo = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;";
function Zo(e) {
  return e.ownerDocument || document;
}
function zo(e, A) {
  const t = A ? "assertive" : "polite", r = e.querySelector(
    `[${Xr}="${t}"]`
  );
  if (r) return r;
  const i = Zo(e).createElement("div");
  return i.setAttribute(Xr, t), i.setAttribute("role", A ? "alert" : "status"), i.setAttribute("aria-live", A ? "assertive" : "polite"), i.setAttribute("aria-atomic", "true"), i.style.cssText = Yo, e.appendChild(i), i;
}
function jo(e, A, t = {}) {
  const r = zo(e, !!t.assertive);
  r.textContent = "", r.textContent = A;
}
function $o(e, A, t, r = {}) {
  const n = r.gap ?? 8;
  let i = e.bottom + n;
  i + A.height > t.height - n && (i = e.top - A.height - n);
  let s = e.left;
  return s < n ? s = n : s + A.width > t.width - n && (s = t.width - A.width - n), i < n ? i = n : i + A.height > t.height - n && (i = t.height - A.height - n), { top: i, left: s };
}
const lA = "[redacted]", Jr = 1e3, Ht = /login|log-in|signin|sign-in|signup|sign-up|auth|token|password|passwd|session|oauth|2fa|mfa|credential/i, Aa = /token|key|secret|pass(word|wd)?|pwd|code|sess|auth|sig|otp|jwt|credential|ticket|nonce|state/i, Wr = "(?:password|passwd|pwd|pass|secret|token|access_token|refresh_token|id_token|api[_-]?key|apikey|client_secret|private[_-]?key|session(?:id)?|auth(?:orization)?|cookie|set-cookie|otp|pin|cvv|cvc|ssn)", ea = [
  // Authorization header values.
  [/\b(Bearer|Basic|Token|Digest)\s+[A-Za-z0-9._~+/=-]{8,}/gi, (e, A) => `${A} ${lA}`],
  // JWTs (header.payload[.signature]).
  [/\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}(?:\.[A-Za-z0-9_-]*)?/g, lA],
  // "password": "x"  /  'token': 'x'  (JSON and JS object text).
  [
    new RegExp(`(["']?${Wr}["']?\\s*:\\s*)(["'])(?:\\\\.|(?!\\2).)*\\2`, "gi"),
    (e, A, t) => `${A}${t}${lA}${t}`
  ],
  // password=x  /  token: x  (query strings, form bodies, log lines).
  [
    // The value is not a quote (the rule above) and not an auth scheme
    // (the Bearer rule already kept the scheme and cut the credential).
    new RegExp(`(\\b${Wr}\\s*[=:]\\s*)(?!["'\\s]|(?:Bearer|Basic|Token|Digest)\\s|\\[redacted\\])[^\\s&;,"'}]+`, "gi"),
    (e, A) => `${A}${lA}`
  ],
  // Card-number-like runs: 13 to 19 digits, optionally grouped by spaces or
  // dashes, that pass the Luhn check (so a Date.now() stays readable).
  [/\b\d(?:[ -]?\d){12,18}\b/g, (e) => ta(e.replace(/\D/g, "")) ? lA : e],
  // Long hex strings (API keys, hashes, session ids).
  [/\b[A-Fa-f0-9]{32,}\b/g, lA],
  // Long base64 / base64url / prefixed keys (sk_live_…, ghp_…): 32+
  // characters mixing upper case, lower case and digits. `/` is left out so
  // a script path in a stack trace stays readable.
  [/[A-Za-z0-9_+-]{32,}={0,2}/g, (e) => /\d/.test(e) && /[a-z]/.test(e) && /[A-Z]/.test(e) ? lA : e]
];
function ta(e) {
  let A = 0;
  for (let t = 0; t < e.length; t++) {
    let r = Number(e[e.length - 1 - t]);
    t % 2 === 1 && (r *= 2, r > 9 && (r -= 9)), A += r;
  }
  return A % 10 === 0;
}
function br(e) {
  let A = e;
  for (const [t, r] of ea)
    A = A.replace(t, r);
  return A;
}
function ra(e, A) {
  return e.length > A ? `${e.slice(0, A)}…[truncated]` : e;
}
function na(e) {
  return ra(br(e.slice(0, Jr * 2)), Jr);
}
function Yr(e) {
  let A = !1;
  for (const t of Array.from(new Set(e.keys())))
    Aa.test(t) && (e.set(t, lA), A = !0);
  return A;
}
function Zr(e) {
  let A;
  const t = "https://qaid.invalid";
  try {
    A = new URL(e, t);
  } catch {
    return br(e);
  }
  if (A.username = "", A.password = "", Yr(A.searchParams) && (A.search = A.search.replace(/%5Bredacted%5D/g, lA)), A.hash.includes("=")) {
    const i = new URLSearchParams(A.hash.slice(1));
    Yr(i) && (A.hash = i.toString().replace(/%5Bredacted%5D/g, lA));
  }
  const r = A.href;
  return !/^[a-z][a-z0-9+.-]*:/i.test(e) && !e.startsWith("//") && r.startsWith(t) ? r.slice(t.length) : r;
}
function ia(e) {
  try {
    const A = new URL(e, "https://qaid.invalid");
    return Ht.test(A.hostname) || Ht.test(A.pathname);
  } catch {
    return Ht.test(e);
  }
}
function zr(e, A, t) {
  if (t !== void 0)
    return A === 401 || A === 403 || ia(e) ? lA : br(t);
}
const sa = 20;
function oa(e) {
  const A = [], t = console.error, r = console.warn, n = console.log, i = (s, o) => {
    const a = {
      // Sent with the report: secrets replaced, length capped (see redact.ts).
      message: na(o.map((c) => String(c)).join(" ")),
      timestamp: Date.now(),
      level: s
    };
    A.length >= sa && A.shift(), A.push(a), e && e(a);
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
function aa(e = 640) {
  return typeof window < "u" && window.innerWidth < e;
}
function jr(e, A, t) {
  const r = t.map((i) => i.style.visibility);
  t.forEach((i) => i.style.visibility = "hidden");
  const n = document.elementFromPoint(e, A);
  return t.forEach((i, s) => i.style.visibility = r[s]), n;
}
function Ye(e) {
  return e ? e.hasAttribute("data-qaid-embed") || e.hasAttribute("data-qaid-embed-overlay") ? !0 : !!e.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function $r(e, A = 0) {
  const t = e.getBoundingClientRect();
  return {
    x: t.left - A,
    y: t.top - A,
    width: t.width + A * 2,
    height: t.height + A * 2
  };
}
const ca = "1.12.1", jA = `https://unpkg.com/@qaiddev/quests-embed@${ca}/dist/qaid-quests.js`, la = "sha384-ulTEyFqoUl1HNdNL8rFOB/mSItoy12PPegqJJIspDm0WtPK4/2jl3bRVrHoEtrm1", Ba = /^https:\/\/unpkg\.com\/@qaiddev\/quests-embed@\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?\//;
let An = !1;
function da(e) {
  if (!e) return jA;
  if (e === jA) return e;
  try {
    const A = typeof location < "u" ? location.href : void 0, t = new URL(e, A);
    if (Ba.test(t.href) && !/%2e|%2f|%5c/i.test(t.pathname) || A && t.origin === new URL(A).origin && (t.protocol === "https:" || t.protocol === "http:"))
      return t.href;
  } catch {
  }
  return An || (An = !0, console.warn(
    `[thumbs-embed] Ignoring quests moduleUrl "${e}": use a same-origin URL or https://unpkg.com/@qaiddev/quests-embed@<exact version>/…. Using ${jA}.`
  )), jA;
}
const ua = 3e3, ha = {
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
}, Fi = {
  offset: { x: "number", y: "number" },
  colors: { positive: "string", negative: "string", marker: "string" },
  text: "strings",
  videoOptions: { maxDuration: "number", redaction: "boolean" },
  screenshotOptions: { quality: "number", maxWidth: "number", maxHeight: "number" },
  quests: { base: "string", up: "string", down: "string", video: "string" }
}, ga = /* @__PURE__ */ new Set([
  "positiveIcon",
  "negativeIcon",
  "css",
  "buttonClass",
  "colors",
  "buttonSize",
  "text"
]), rt = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function vi(e, A) {
  return Array.isArray(A) ? typeof e == "string" && A.includes(e) : A === "number" ? typeof e == "number" && Number.isFinite(e) : typeof e === A;
}
function fa(e, A) {
  if (!rt(e)) return;
  const t = {};
  for (const [r, n] of Object.entries(e))
    (A === "strings" ? typeof n == "string" : r in A && vi(n, A[r])) && (t[r] = n);
  return Object.keys(t).length > 0 ? t : void 0;
}
function wa(e, A) {
  try {
    const t = typeof location < "u" ? location.href : void 0;
    return new URL(e, t).origin === new URL(A, t).origin;
  } catch {
    return !1;
  }
}
function mi(e, A) {
  if (!rt(e)) return {};
  const t = {};
  for (const [i, s] of Object.entries(ha))
    vi(e[i], s) && (t[i] = e[i]);
  for (const [i, s] of Object.entries(Fi)) {
    const o = fa(e[i], s);
    o && (t[i] = o);
  }
  const r = e.annotationPalette;
  Array.isArray(r) && r.length > 0 && r.every((i) => typeof i == "string" && i.trim()) && (t.annotationPalette = r);
  const n = t.quests;
  return n?.base && !wa(n.base, A) && (console.warn("[thumbs-embed] Ignoring a fetched quest base on another origin than the endpoint."), delete t.quests), t;
}
function Qa(e, A) {
  const t = mi(e, A);
  return Object.fromEntries(Object.entries(t).filter(([r]) => ga.has(r)));
}
function Ca(...e) {
  const A = {};
  for (const t of e)
    if (t) {
      for (const [r, n] of Object.entries(t))
        if (n !== void 0)
          if (r in Fi && rt(n)) {
            const s = { ...rt(A[r]) ? A[r] : {} };
            for (const [o, a] of Object.entries(n)) a !== void 0 && (s[o] = a);
            A[r] = s;
          } else
            A[r] = n;
    }
  return A;
}
function pa(e, A) {
  return `${e.replace(/\/+$/, "")}/config?apiKey=${encodeURIComponent(A)}`;
}
async function en(e, A, t) {
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
function Ua(e) {
  return e.remoteConfig === !0 || !!e.themeUrl;
}
async function Fa(e) {
  const A = e.remoteTimeoutMs ?? ua;
  let t = null;
  e.remoteConfig && (e.apiKey ? t = pa(e.endpoint, e.apiKey) : console.warn("[thumbs-embed] remoteConfig needs an apiKey; drawing without it."));
  const [r, n] = await Promise.all([
    t ? en(t, A, "Project config") : null,
    e.themeUrl ? en(e.themeUrl, A, "Theme") : null
  ]);
  return Ca(
    r ? mi(r, e.endpoint) : null,
    n ? Qa(n, e.endpoint) : null,
    e
  );
}
const tn = "qaid_visitor_id", rn = "qaid_hide_feedback", va = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#111827",
  "#ffffff"
];
function ma() {
  return typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches;
}
function Ar(e) {
  return e ? `${rn}_${e}` : rn;
}
function ba(e) {
  try {
    return localStorage.getItem(Ar(e)) === "1";
  } catch {
    return !1;
  }
}
function nn(e, A = !0) {
  try {
    A ? localStorage.setItem(Ar(e), "1") : localStorage.removeItem(Ar(e));
  } catch {
  }
}
function sn() {
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
function ya() {
  try {
    let e = localStorage.getItem(tn);
    return e || (e = sn(), localStorage.setItem(tn, e)), e;
  } catch {
    return sn();
  }
}
function on(e, A) {
  const t = document.createElement("style");
  t.setAttribute("data-qaid-feature", ""), t.textContent = A;
  const r = e.querySelectorAll("style[data-qaid-base], style[data-qaid-feature]"), n = r[r.length - 1];
  e.insertBefore(t, n ? n.nextSibling : e.firstChild);
}
function an(e) {
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
    annotationPalette: e.annotationPalette ?? va,
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
      moduleUrl: da(e.quests?.moduleUrl)
    }
  };
}
class Ea {
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
    this.config = an(A), this.boundKeyDown = this.handleKeyDown.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = ya(), Ua(A) ? this.ready = Fa(A).then((t) => {
      this.destroyed || (this.config = an(t), this.init());
    }) : this.init();
  }
  applyVars(A) {
    Xo(A, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(A, t = !1) {
    const r = this.overlayShadowRoot ?? this.shadowRoot;
    r && jo(r, A, { assertive: t });
  }
  /** Load the dialog a11y helpers; every surface that opens a dialog awaits this first. */
  async loadDialogA11y() {
    this.dialogModule ??= await Promise.resolve().then(() => hn);
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
    this.initialized = !0, Jo(), this.cssVars = _o({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && ba(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = oa((A) => {
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
    this.clickPathPrewarmed || (this.clickPathPrewarmed = !0, Promise.resolve().then(() => It).catch(() => {
    }), Promise.resolve().then(() => hn).catch(() => {
    }), Promise.resolve().then(() => fn).catch(() => {
    }), this.skipsTargeting() || Promise.resolve().then(() => wn).catch(() => {
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
    this.videoPrewarmed || (this.videoPrewarmed = !0, Promise.resolve().then(() => Qn).catch(() => {
    }), Promise.resolve().then(() => Si).catch(() => {
    }));
  }
  prewarmScreenshot() {
    this.screenshotPrewarmed || (this.screenshotPrewarmed = !0, (this.shouldCaptureViaDom() ? Promise.resolve().then(() => ki) : Promise.resolve().then(() => ns)).catch(() => {
    }), this.config.annotate && Promise.resolve().then(() => qi).catch(() => {
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
    Promise.resolve().then(() => mc).then((n) => {
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
    this.isMobile = aa();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let A = null;
    this.config.container && (A = document.querySelector(this.config.container)), A ? (A.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    if (t.setAttribute("data-qaid-base", ""), t.textContent = _r(), this.shadowRoot.appendChild(t), this.config.css) {
      const l = document.createElement("style");
      l.textContent = this.config.css, this.shadowRoot.appendChild(l);
    }
    const r = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${r}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${r}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: l, y: B } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${l}px` : this.buttonsContainer.style.left = `${l}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${B}px` : this.buttonsContainer.style.top = `${B}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer), this.buttonsContainer.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " " || l.key === "Spacebar") && (this.keyboardActivation = !0);
    }), this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = !1;
    }), this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = !1;
    });
    const n = () => this.prewarmClickPath();
    this.buttonsContainer.addEventListener("pointerenter", n), this.buttonsContainer.addEventListener("focusin", n);
    const i = !!this.config.buttonClass, s = i ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", a = this.config.text.tooltip || "Feedback for us?", c = document.createElement("div");
    if (c.className = "qaid-tooltip-text", c.textContent = a, this.applyVars(c), this.shadowRoot.appendChild(c), this.tooltipElement = c, this.config.singleButton) {
      const l = document.createElement("div");
      l.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-feedback` : "qaid-btn qaid-btn-feedback", B.setAttribute("aria-label", this.config.text.feedbackLabel), DA(B, this.config.feedbackIcon, Qi), B.addEventListener("click", (d) => this.handleThumbClick("neutral", d.currentTarget, d)), B.addEventListener("mouseenter", () => this.showTooltip(B)), B.addEventListener("mouseleave", () => this.hideTooltip()), l.appendChild(B), this.buttonsContainer.appendChild(l);
    } else if (!this.config.hideThumbs) {
      const l = document.createElement("div");
      l.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-up` : "qaid-btn qaid-btn-up", B.setAttribute("aria-label", this.config.text.positiveLabel), DA(B, this.config.positiveIcon, jt), B.addEventListener("click", (u) => this.handleThumbClick("up", u.currentTarget, u)), B.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(B);
      }), B.addEventListener("mouseleave", () => this.hideTooltip()), l.appendChild(B);
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const g = document.createElement("button");
      g.type = "button", g.className = i ? `${s} qaid-btn-down` : "qaid-btn qaid-btn-down", g.setAttribute("aria-label", this.config.text.negativeLabel), DA(g, this.config.negativeIcon, $t), g.addEventListener("click", (u) => this.handleThumbClick("down", u.currentTarget, u)), g.addEventListener("mouseenter", () => {
        this.prewarmQuests(), this.showTooltip(g);
      }), g.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(g), this.buttonsContainer.appendChild(l), this.buttonsContainer.appendChild(d);
    }
    if (this.config.captureVideo && this.videoSupported()) {
      const l = document.createElement("div");
      l.className = "qaid-tooltip-wrapper";
      const B = document.createElement("button");
      B.type = "button", B.className = i ? `${s} qaid-btn-record` : "qaid-btn qaid-btn-record", B.setAttribute("aria-label", this.config.text.recordLabel), DA(B, this.config.recordIcon, vo), B.addEventListener("click", () => {
        this.ensureRecording().then(
          (g) => this.config.videoOptions.redaction ? g.startPicking() : g.startRecording()
        );
      });
      const d = () => this.prewarmVideo();
      B.addEventListener("mouseenter", () => {
        d(), this.showTooltip(B);
      }), B.addEventListener("focus", d), B.addEventListener("touchstart", d, { passive: !0 }), B.addEventListener("mouseleave", () => this.hideTooltip()), l.appendChild(B), this.buttonsContainer.appendChild(l);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, DA(this.dismissBtn, null, mo), this.dismissBtn.addEventListener("click", (l) => {
      l.stopPropagation(), this.handleDismiss();
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
    A.setAttribute("data-qaid-base", ""), A.textContent = _r(), this.overlayShadowRoot.appendChild(A);
    for (const t of this.featureStyles) on(this.overlayShadowRoot, t);
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
        t && on(t, A);
    }
  }
  tooltipElement = null;
  showTooltip(A) {
    const t = this.tooltipElement;
    t.style.visibility = "hidden", t.classList.add("qaid-tooltip-visible");
    const r = A.getBoundingClientRect(), n = t.getBoundingClientRect(), { top: i, left: s } = $o(
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
    this.buttonsContainer.classList.add("qaid-dismissed"), nn(this.config.apiKey, !0);
  }
  handleThumbClick(A, t, r) {
    if (this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), nn(this.config.apiKey, !1)), this.prewarmClickPath(), this.skipsTargeting())
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
    return this.config.screenshotMethod === "dom" || ma();
  }
  /**
   * Run the send flow (send.ts, loaded on demand and pre-warmed before the
   * click): screenshot, markup, POST, then a linked quest or the message box.
   * If its chunk will not load, say so and reset rather than leave the
   * visitor stuck mid-flow.
   */
  async submitFeedback() {
    try {
      const [A] = await Promise.all([Promise.resolve().then(() => It), this.loadDialogA11y()]);
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
      return await (await Promise.resolve().then(() => It)).tryLaunchQuest(this.makeSendHost(), A, t);
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
        Promise.resolve().then(() => fn),
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
      const { TargetingController: A, styles: t } = await Promise.resolve().then(() => wn);
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
        Promise.resolve().then(() => Qn),
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
    if (this.destroyed = !0, !!this.initialized) {
      if (this.domObserver && (this.domObserver.disconnect(), this.domObserver = null), this.boundBeforeSwap && (document.removeEventListener("astro:before-swap", this.boundBeforeSwap), this.boundBeforeSwap = null), this.targeting?.destroy(), this.targeting = null, this.clearActiveThumb(), this.closeDialogA11y(), this.prewarmHandle !== null) {
        const A = window;
        this.prewarmIsTimeout ? clearTimeout(this.prewarmHandle) : A.cancelIdleCallback?.(this.prewarmHandle), this.prewarmHandle = null;
      }
      this.recording?.destroy(), this.recording = null, this.modal?.destroy(), this.modal = null, this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.dismissBtn = null, this.tooltipElement = null, Wo();
    }
  }
}
var Ha = "__qaidThumbsOrigin";
function bi(e) {
  return document.querySelector(e)?.textContent?.trim() ?? "";
}
const yi = Ha;
function cn(e) {
  const A = e.split(/[?#]/)[0];
  return A.substring(A.lastIndexOf("/") + 1);
}
function Ia(e) {
  const A = document.currentScript;
  if (A && A.tagName === "SCRIPT") return A;
  if (!e) return null;
  const t = Array.from(document.getElementsByTagName("script")).filter((o) => o.src), r = t.find((o) => o.src === e);
  if (r) return r;
  const n = t.filter((o) => o[yi]);
  if (n.length === 1) return n[0];
  const i = cn(e), s = t.filter((o) => cn(o.src) === i);
  return s.length === 1 ? s[0] : null;
}
function ln(e) {
  return !!e && e.tagName === "SCRIPT" && (e.getAttribute("type") || "").trim().toLowerCase() === "application/json";
}
function xa(e) {
  const A = e[yi], t = A && A.tagName === "SCRIPT" ? A : e, r = t.getAttribute("data-config-id") || e.getAttribute("data-config-id");
  if (r) {
    const n = document.getElementById(r);
    return ln(n) ? n : null;
  }
  for (const n of [t.previousElementSibling, t.nextElementSibling])
    if (ln(n) && n.hasAttribute("data-feedback-config")) return n;
  return null;
}
function La(e) {
  const A = xa(e);
  if (!A) return null;
  const t = A.textContent?.trim();
  if (!t) return null;
  try {
    const r = JSON.parse(t);
    return r.cssSelector && !r.css && (r.css = bi(r.cssSelector), delete r.cssSelector), r;
  } catch {
    return null;
  }
}
function Ei(e, A, t) {
  console.warn(`[thumbs-embed] Ignoring ${e}="${A}": expected ${t}.`);
}
function Ka(e) {
  const A = [];
  let t = 0, r = "";
  for (const n of e)
    n === "(" && t++, n === ")" && (t = Math.max(0, t - 1)), n === "," && t === 0 ? (A.push(r.trim()), r = "") : r += n;
  return A.push(r.trim()), A;
}
function Sa(e, A) {
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
    r = Ka(t);
  if (Array.isArray(r) && r.length > 0 && r.every((n) => typeof n == "string" && n.trim() !== ""))
    return r.map((n) => n.trim());
  Ei(e, A, "a JSON array of colours or a comma-separated list");
}
function be(e, A) {
  if (A !== null) {
    if (A.trim() === "") {
      Ei(e, A, "a non-empty label");
      return;
    }
    return A;
  }
}
function Ta(e) {
  const A = e.getAttribute("data-endpoint");
  if (!A) return null;
  const t = e.getAttribute("data-position"), r = e.getAttribute("data-zindex"), n = e.getAttribute("data-positive-color"), i = e.getAttribute("data-negative-color"), s = e.getAttribute("data-marker-color"), o = e.getAttribute("data-container"), a = e.getAttribute("data-button-class"), c = e.getAttribute("data-skip-targeting"), l = e.getAttribute("data-hide-confirmation"), B = e.getAttribute("data-single-button"), d = e.getAttribute("data-feedback-mode"), g = e.getAttribute("data-incognito"), u = e.getAttribute("data-button-size"), f = e.getAttribute("data-offset-x"), m = e.getAttribute("data-offset-y"), Q = e.getAttribute("data-modal-width"), h = e.getAttribute("data-backdrop-opacity"), v = e.getAttribute("data-font-family"), U = e.getAttribute("data-font-size"), F = e.getAttribute("data-tooltip"), w = e.getAttribute("data-modal-title"), E = e.getAttribute("data-confirmation-title"), y = e.getAttribute("data-confirmation-message"), b = e.getAttribute("data-confirmation-close"), D = e.getAttribute("data-error-title"), N = e.getAttribute("data-error-message"), _ = e.getAttribute("data-modal-subtitle"), x = e.getAttribute("data-placeholder"), O = e.getAttribute("data-submit-button"), sA = e.getAttribute("data-skip-button"), X = e.getAttribute("data-positive-icon"), J = e.getAttribute("data-negative-icon"), wA = e.getAttribute("data-feedback-icon"), j = e.getAttribute("data-feedback-label"), dA = e.getAttribute("data-api-key"), QA = e.getAttribute("data-capture-screenshot"), CA = e.getAttribute("data-annotate"), oA = e.getAttribute("data-annotation-color"), aA = e.getAttribute("data-screenshot-quality"), $ = e.getAttribute("data-screenshot-max-width"), uA = e.getAttribute("data-screenshot-max-height"), SA = e.getAttribute("data-capture-video"), Sr = e.getAttribute("data-video-redaction"), ao = e.getAttribute("data-hide-thumbs"), co = e.getAttribute("data-hide-dismiss"), Et = e.getAttribute("data-video-max-duration"), lo = e.getAttribute("data-screenshot-method"), Bo = e.getAttribute("data-direction"), Tr = e.getAttribute("data-css-selector"), uo = e.getAttribute("data-css"), Dr = be("data-positive-label", e.getAttribute("data-positive-label")), kr = be("data-negative-label", e.getAttribute("data-negative-label")), Mr = be("data-record-label", e.getAttribute("data-record-label")), Or = be("data-dismiss-label", e.getAttribute("data-dismiss-label")), ho = Sa(
    "data-annotation-palette",
    e.getAttribute("data-annotation-palette")
  ), go = e.getAttribute("data-record-icon"), Rr = e.getAttribute("data-quest-base"), fo = e.getAttribute("data-quest-up"), wo = e.getAttribute("data-quest-down"), Qo = e.getAttribute("data-quest-video"), Co = e.getAttribute("data-quest-api-key"), po = e.getAttribute("data-quest-module-url"), Uo = e.getAttribute("data-remote-config"), Fo = e.getAttribute("data-theme-url"), qr = e.getAttribute("data-remote-timeout");
  return {
    endpoint: A,
    remoteConfig: Uo === "true" ? !0 : void 0,
    themeUrl: Fo || void 0,
    remoteTimeoutMs: qr ? parseInt(qr, 10) : void 0,
    // Inline CSS wins over a selector, as `css` wins over `cssSelector` in
    // the JSON block.
    css: uo || (Tr ? bi(Tr) : void 0),
    apiKey: dA ?? void 0,
    captureScreenshot: QA === "true" ? !0 : void 0,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: CA === "false" ? !1 : void 0,
    annotationColor: oA ?? void 0,
    annotationPalette: ho,
    screenshotOptions: aA || $ || uA ? {
      quality: aA ? parseFloat(aA) : void 0,
      maxWidth: $ ? parseInt($, 10) : void 0,
      maxHeight: uA ? parseInt(uA, 10) : void 0
    } : void 0,
    container: o ?? void 0,
    buttonClass: a ?? void 0,
    direction: Bo ?? void 0,
    position: t ?? void 0,
    zIndex: r ? parseInt(r, 10) : void 0,
    skipTargeting: c === "true" ? !0 : void 0,
    hideConfirmation: l === "true" ? !0 : void 0,
    singleButton: B === "true" ? !0 : void 0,
    feedbackMode: d ?? void 0,
    incognito: g === "true" ? !0 : void 0,
    buttonSize: u ?? void 0,
    offset: f || m ? {
      x: f ? parseInt(f, 10) : void 0,
      y: m ? parseInt(m, 10) : void 0
    } : void 0,
    modalWidth: Q ? parseInt(Q, 10) : void 0,
    backdropOpacity: h ? parseFloat(h) : void 0,
    fontFamily: v ?? void 0,
    fontSize: U ? parseInt(U, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: i ?? void 0,
      marker: s ?? void 0
    },
    text: F || w || _ || x || O || sA || j || E || y || b || D || N || Dr || kr || Mr || Or ? {
      tooltip: F ?? void 0,
      modalTitle: w ?? void 0,
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
      positiveLabel: Dr,
      negativeLabel: kr,
      recordLabel: Mr,
      dismissLabel: Or
    } : void 0,
    positiveIcon: X ?? void 0,
    recordIcon: go ?? void 0,
    negativeIcon: J ?? void 0,
    feedbackIcon: wA ?? void 0,
    screenshotMethod: lo ?? void 0,
    captureVideo: SA === "true" ? !0 : void 0,
    hideThumbs: ao === "true" ? !0 : void 0,
    hideDismiss: co === "true" ? !0 : void 0,
    videoOptions: Et || Sr ? {
      maxDuration: Et ? parseInt(Et, 10) : void 0,
      redaction: Sr === "true" ? !0 : void 0
    } : void 0,
    quests: Rr ? {
      base: Rr,
      up: fo ?? void 0,
      down: wo ?? void 0,
      video: Qo ?? void 0,
      apiKey: Co ?? void 0,
      moduleUrl: po ?? void 0
    } : void 0
  };
}
function Da(e) {
  if (typeof document > "u") return;
  const A = Ia(e);
  if (!A) return;
  const t = () => {
    const r = La(A) ?? Ta(A);
    r?.endpoint && new Ea(r);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
const ka = 20, Bn = 4096;
function Hi(e) {
  const A = typeof e == "string" ? e : JSON.stringify(e);
  return A.length > Bn ? A.slice(0, Bn) + "…[truncated]" : A;
}
function dn(e, A) {
  e.length >= ka && e.shift(), e.push(A);
}
async function Ma(e) {
  try {
    const A = await e.clone().text();
    return Hi(A);
  } catch {
    return;
  }
}
function Oa() {
  const e = [], A = window.fetch;
  window.fetch = async function(n, i) {
    const s = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, o = i?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET"), a = await A.apply(window, [n, i]);
    if (a.status >= 400) {
      const c = zr(s, a.status, await Ma(a));
      dn(e, {
        url: Zr(s),
        method: o.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        responseBody: c,
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
      i.status >= 400 && dn(e, {
        url: Zr(i._qaid_url),
        method: i._qaid_method.toUpperCase(),
        status: i.status,
        statusText: i.statusText,
        responseBody: zr(i._qaid_url, i.status, Hi(i.responseText)),
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
function Ra() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function qa(e, A, t, r, n) {
  const i = e >= A, s = t >= r;
  return i === s ? { width: e, height: A, rotate: 0 } : { width: A, height: e, rotate: n === 270 ? -90 : 90 };
}
function Va(e, A, t) {
  if (t.rotate === 0) {
    e.drawImage(A, 0, 0, t.width, t.height);
    return;
  }
  e.save(), t.rotate === 90 ? (e.translate(t.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, t.height), e.rotate(-Math.PI / 2)), e.drawImage(A, 0, 0, t.height, t.width), e.restore();
}
function Na() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function Ii(e) {
  return new Promise((A) => {
    if (e.videoWidth > 0) {
      A();
      return;
    }
    e.addEventListener("loadedmetadata", () => A(), { once: !0 });
  });
}
async function xi(e) {
  try {
    await e.play();
  } catch {
  }
}
async function Ga(e, A = 15) {
  const t = document.createElement("canvas");
  if (typeof t.captureStream != "function") return null;
  const r = t.getContext("2d");
  if (!r) return null;
  const n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await Ii(n);
  const i = qa(
    n.videoWidth,
    n.videoHeight,
    window.innerWidth,
    window.innerHeight,
    Na()
  );
  t.width = i.width, t.height = i.height, await xi(n);
  let s = 0;
  const o = () => {
    Va(r, n, i), s = requestAnimationFrame(o);
  };
  o();
  const a = t.captureStream(A);
  return {
    stream: a,
    stop: () => {
      s && cancelAnimationFrame(s), s = 0, a.getTracks().forEach((c) => c.stop()), n.pause(), n.srcObject = null;
    }
  };
}
function Pa(e, A, t, r, n) {
  const i = Math.max(0, Math.min(r, e.left * A)), s = Math.max(0, Math.min(n, e.top * t)), o = Math.max(0, Math.min(r, (e.left + e.width) * A)), a = Math.max(0, Math.min(n, (e.top + e.height) * t)), c = o - i, l = a - s;
  return c <= 0 || l <= 0 ? null : { x: i, y: s, w: c, h: l };
}
function _a(e, A, t, r, n, i, s) {
  e.drawImage(A, 0, 0, r, n);
  const o = r / Math.max(1, window.innerWidth), a = n / Math.max(1, window.innerHeight);
  for (const c of t) {
    const l = Pa(
      c.getBoundingClientRect(),
      o,
      a,
      r,
      n
    );
    l && (e.save(), s ? (e.filter = `blur(${i}px)`, e.drawImage(A, l.x, l.y, l.w, l.h, l.x, l.y, l.w, l.h)) : (e.fillStyle = "#0b0b0b", e.fillRect(l.x, l.y, l.w, l.h)), e.restore());
  }
}
async function Xa(e, A, t = {}) {
  const r = t.frameRate ?? 15, n = t.blurRadius ?? 12, i = document.createElement("canvas");
  if (typeof i.captureStream != "function") return null;
  const s = i.getContext("2d");
  if (!s) return null;
  const o = "filter" in s, a = document.createElement("video");
  a.muted = !0, a.playsInline = !0, a.srcObject = e, await Ii(a), i.width = a.videoWidth, i.height = a.videoHeight, await xi(a);
  let c = 0;
  const l = () => {
    _a(
      s,
      a,
      A,
      i.width,
      i.height,
      n,
      o
    ), c = requestAnimationFrame(l);
  };
  l();
  const B = i.captureStream(r);
  return {
    stream: B,
    stop: () => {
      c && cancelAnimationFrame(c), c = 0, B.getTracks().forEach((d) => d.stop()), a.pause(), a.srcObject = null;
    }
  };
}
const Li = "This browser cannot blur the areas you picked, so the recording was not started.";
function Ja() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function Ki() {
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
function Wa(e = {}) {
  const A = e.maxDuration ?? 15, t = e.videoBitsPerSecond ?? 8e5, r = e.redactionElements ?? [], n = e.redactionBlurRadius;
  let i = null, s = null, o = null, a = null, c = [], l = null, B = null, d = null, g = 0, u = null, f = null, m = !1, Q = null;
  function h() {
    d !== null && (clearInterval(d), d = null), Q !== null && (clearTimeout(Q), Q = null), s && (s.stop(), s = null), o && (o.stop(), o = null), i && (i.getTracks().forEach((U) => U.stop()), i = null), a = null, c = [], l = null, B = null, u = null, f = null;
  }
  function v() {
    m || (m = !0, a && a.state !== "inactive" && a.stop());
  }
  return {
    async start() {
      m = !1, c = [];
      const U = Ki();
      if (!U)
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
      const F = i.getVideoTracks()[0], w = F?.getSettings?.()?.displaySurface;
      if (w === "monitor" || w === "window")
        throw i.getTracks().forEach((y) => y.stop()), i = null, new Error(
          "qaid records only the current tab — please share this tab, not a window or your whole screen."
        );
      F && F.addEventListener("ended", () => {
        v();
      });
      let E = i;
      if (Ra()) {
        const y = await Ga(i);
        y && (s = y, E = y.stream);
      }
      if (r.length > 0) {
        const y = await Xa(E, r, {
          blurRadius: n
        });
        if (!y)
          throw s && (s.stop(), s = null), i.getTracks().forEach((b) => b.stop()), i = null, new Error(Li);
        o = y, E = y.stream;
      }
      a = new MediaRecorder(E, {
        mimeType: U,
        videoBitsPerSecond: t
      }), a.ondataavailable = (y) => {
        y.data.size > 0 && c.push(y.data);
      }, a.onstop = () => {
        const y = new Blob(c, { type: U });
        u && u(y), B && B(y), s && (s.stop(), s = null), o && (o.stop(), o = null), i && i.getTracks().forEach((b) => b.stop());
      }, a.onerror = () => {
        f && f(new Error("MediaRecorder error"));
      }, a.start(1e3), g = Date.now(), d = setInterval(() => {
        const y = Math.floor((Date.now() - g) / 1e3);
        l && l(y);
      }, 1e3), Q = setTimeout(() => {
        v();
      }, A * 1e3);
    },
    stop() {
      return new Promise((U, F) => {
        u = U, f = F, v();
      });
    },
    onTick(U) {
      l = U;
    },
    onStop(U) {
      B = U;
    },
    destroy() {
      v(), h();
    }
  };
}
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REDACTION_UNAVAILABLE: Li,
  createVideoRecorder: Wa,
  getSupportedMimeType: Ki,
  isVideoRecordingSupported: Ja
}, Symbol.toStringTag, { value: "Module" }));
let WA = null;
const Ti = () => Promise.resolve().then(() => bg);
let Di = Ti;
function Ya(e) {
  Di = e ?? Ti, WA = null;
}
function Za() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const e = document.createElement("canvas");
  return typeof e.getContext == "function" && !!e.getContext("2d");
}
function za() {
  return WA || (WA = Di().then(
    (e) => e.default,
    () => (WA = null, null)
  ), WA);
}
async function ja(e = {}) {
  const { quality: A = 0.8, maxWidth: t = 1280, maxHeight: r = 800 } = e;
  try {
    const n = await za();
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
      ignoreElements: (c) => c instanceof HTMLElement ? c.classList.contains("qaid-buttons") || c.classList.contains("qaid-targeting-overlay") || c.classList.contains("qaid-modal-container") || c.classList.contains("qaid-bottom-sheet") || c.classList.contains("qaid-backdrop") || c.classList.contains("qaid-selected-marker") || c.classList.contains("qaid-tooltip-text") || c.classList.contains("qaid-recording-indicator") || c.classList.contains("qaid-video-preview") || c.className?.toString().startsWith?.("qaid-") : !1
    }), s = i.width, o = i.height, a = Math.min(t / s, r / o, 1);
    if (a < 1) {
      const c = Math.round(s * a), l = Math.round(o * a), B = document.createElement("canvas");
      B.width = c, B.height = l;
      const d = B.getContext("2d");
      return d ? (d.drawImage(i, 0, 0, c, l), B.toDataURL("image/webp", A)) : null;
    }
    return i.toDataURL("image/webp", A);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _setHtml2CanvasImporter: Ya,
  captureDomScreenshot: ja,
  isDomScreenshotSupported: Za
}, Symbol.toStringTag, { value: "Module" })), $a = ".qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .8125);line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .8125);font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}.qaid-annotate-colors{display:flex;gap:.25rem;align-items:center}button.qaid-annotate-swatch{width:28px;height:28px;min-width:28px;padding:0;border-radius:9999px;border:2px solid light-dark(#d1d5db,#4b5563);background:var(--qaid-swatch, #000);cursor:pointer;-webkit-appearance:none;appearance:none;transition:transform .1s,box-shadow .15s,border-color .15s}button.qaid-annotate-swatch:hover{transform:scale(1.12)}button.qaid-annotate-swatch[aria-pressed=true]{border-color:light-dark(#111827,#f9fafb);box-shadow:0 0 0 2px var(--qaid-swatch)}@media(forced-colors:active){button.qaid-annotate-swatch[aria-pressed=true]{outline:2px solid Highlight;outline-offset:1px}}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6365f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6365f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}", VA = 12, Ac = "#ef4444", ec = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], tc = {
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
function un(e) {
  return tc[e.toLowerCase()] ?? e;
}
const rc = 4, nc = 0.8, ic = {
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
function nt(e, A) {
  return {
    x: Math.min(e.x, A.x),
    y: Math.min(e.y, A.y),
    w: Math.abs(e.x - A.x),
    h: Math.abs(e.y - A.y)
  };
}
function sc(e) {
  if (e.type === "pen") return e.points.length < 2;
  const A = nt(e.points[0], e.points[1]);
  return A.w < 3 && A.h < 3;
}
function oc(e, A, t, r) {
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
function ac(e, A) {
  if (A.length !== 0) {
    e.beginPath(), e.moveTo(A[0].x, A[0].y);
    for (let t = 1; t < A.length; t++)
      e.lineTo(A[t].x, A[t].y);
    e.stroke();
  }
}
function cc(e, A, t, r, n) {
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
function it(e, A) {
  switch (e.save(), e.strokeStyle = A.color, e.fillStyle = A.color, e.lineWidth = A.strokeWidth, e.lineJoin = "round", e.lineCap = "round", A.type) {
    case "rect": {
      const t = nt(A.points[0], A.points[1]);
      e.strokeRect(t.x, t.y, t.w, t.h);
      break;
    }
    case "arrow":
      oc(e, A.points[0], A.points[1], A.strokeWidth);
      break;
    case "pen":
      ac(e, A.points);
      break;
    case "blur": {
      const t = nt(A.points[0], A.points[1]);
      cc(e, t.x, t.y, t.w, t.h);
      break;
    }
  }
  e.restore();
}
function Mi(e) {
  return new Promise((A, t) => {
    const r = new Image();
    r.onload = () => A(r), r.onerror = () => t(new Error("Failed to load screenshot")), r.src = e;
  });
}
async function Oi(e, A, t = {}) {
  const r = t.quality ?? nc;
  let n;
  try {
    n = await Mi(e);
  } catch {
    return e;
  }
  const i = document.createElement("canvas");
  i.width = n.naturalWidth || n.width || 1, i.height = n.naturalHeight || n.height || 1;
  const s = i.getContext("2d");
  if (!s) return e;
  s.drawImage(n, 0, 0, i.width, i.height);
  for (const o of A)
    it(s, o);
  return i.toDataURL("image/webp", r);
}
let lc = 0;
class Ri {
  shapes = [];
  tool = "rect";
  opts;
  labels;
  color;
  palette;
  strokeWidth;
  uid = `qaid-annotate-${++lc}`;
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
    this.opts = A, this.labels = { ...ic, ...A.labels ?? {} }, this.color = A.color ?? Ac, this.palette = (A.palette && A.palette.length ? A.palette : ec).slice(), this.palette.some((t) => t.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = A.strokeWidth ?? rc;
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
    const t = un(A), r = AA("button", {
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
    s.appendChild(this.toolButton("rect", bo, this.labels.rectangle)), s.appendChild(this.toolButton("arrow", yo, this.labels.arrow)), s.appendChild(this.toolButton("pen", Eo, this.labels.pen)), s.appendChild(this.toolButton("blur", Ho, this.labels.blur));
    const o = AA("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const B of this.palette) o.appendChild(this.swatchButton(B));
    this.undoBtn = this.actionButton("undo", Io, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const a = this.actionButton("skip", Lo, this.labels.skip, "qaid-annotate-skip"), c = this.actionButton("done", Ci, this.labels.done, "qaid-annotate-done"), l = AA("div", { class: "qaid-annotate-actions" });
    l.appendChild(this.undoBtn), l.appendChild(a), l.appendChild(c), this.toolbar.appendChild(s), this.toolbar.appendChild(o), this.toolbar.appendChild(l), this.container.appendChild(r), this.container.appendChild(n), this.container.appendChild(i), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: A,
      describedbyId: t
    }), this.opts.announce?.(this.labels.instructions), Mi(this.opts.dataUrl).then((B) => {
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
        it(A, t);
      this.current && it(A, this.current);
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
    const r = this.labels[Bc[A]];
    this.opts.announce?.(`${r} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(A) {
    this.color = A, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((r) => {
      r.setAttribute(
        "aria-pressed",
        (r.getAttribute("data-qaid-color") ?? "").toLowerCase() === A.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${un(A)} colour selected`);
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
    if (this.current = null, sc(A)) {
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
    const A = await Oi(this.opts.dataUrl, this.shapes, {
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
const Bc = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function dc(e) {
  return new Ri(e).open();
}
const uc = $a, qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: Ri,
  compositeAnnotations: Oi,
  drawShape: it,
  openAnnotationEditor: dc,
  rectFromPoints: nt,
  styles: uc
}, Symbol.toStringTag, { value: "Module" }));
Da(import.meta.url);
const hc = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function gc(e) {
  return e.hasAttribute("disabled") ? !0 : e.disabled === !0;
}
function fc(e) {
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
function er(e) {
  return Array.from(
    e.querySelectorAll(hc)
  ).filter((t) => !(t.getAttribute("tabindex") === "-1" || t instanceof HTMLInputElement && t.type === "hidden" || t instanceof HTMLAnchorElement && !t.getAttribute("href") || gc(t) || fc(t)));
}
function Vi(e) {
  let A = e.activeElement;
  for (; A && A.shadowRoot && A.shadowRoot.activeElement; )
    A = A.shadowRoot.activeElement;
  return A instanceof HTMLElement ? A : null;
}
function Ni(e) {
  const A = e.ownerDocument || document;
  let t = !1;
  const r = (i) => {
    if (i.key !== "Tab") return;
    const s = er(e);
    if (s.length === 0) {
      i.preventDefault(), e.focus();
      return;
    }
    const o = s[0], a = s[s.length - 1], c = Vi(A), l = c ? s.indexOf(c) !== -1 : !1;
    i.shiftKey ? (!l || c === o) && (i.preventDefault(), a.focus()) : (!l || c === a) && (i.preventDefault(), o.focus());
  };
  e.addEventListener("keydown", r);
  const n = er(e);
  return n.length > 0 ? n[0].focus() : (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), t = !0), e.focus()), {
    release() {
      e.removeEventListener("keydown", r), t && (e.removeAttribute("tabindex"), t = !1);
    }
  };
}
function Gi() {
  return Vi(document);
}
function Pi(e) {
  if (!(!e || typeof e.focus != "function"))
    try {
      e.focus();
    } catch {
    }
}
function _i(e, A = {}) {
  e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), A.labelledbyId && e.setAttribute("aria-labelledby", A.labelledbyId), A.describedbyId && e.setAttribute("aria-describedby", A.describedbyId), A.label && e.setAttribute("aria-label", A.label);
}
function wc(e, A) {
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
function Xi(e) {
  const t = (e.ownerDocument || document).body;
  if (!t) return () => {
  };
  const r = wc(e, t), n = [];
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
function Qc(e, A) {
  const t = Gi();
  _i(e, A);
  const r = Ni(e), n = Xi(e);
  return () => {
    r.release(), n(), Pi(t);
  };
}
const hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyDialog: _i,
  createFocusTrap: Ni,
  getFocusable: er,
  openDialog: Qc,
  restoreFocus: Pi,
  saveFocus: Gi,
  setBackgroundInert: Xi
}, Symbol.toStringTag, { value: "Module" }));
var Cc = "qaid-embed", gn = "__qaidEmbedTrustedTypes";
function pc() {
  if (typeof window > "u") return null;
  var e = window, A = e.trustedTypes;
  if (!A || typeof A.createPolicy != "function") return null;
  var t = e[gn];
  if (t) return t;
  var r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), i = null;
  try {
    i = A.createPolicy(Cc, {
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
    Object.defineProperty(e, gn, { value: s, configurable: !0 });
  } catch {
  }
  return s;
}
function Uc(e) {
  var A = pc();
  return !A || !A.policy ? e : (A.allowed[e] = !0, A.policy.createScriptURL(e));
}
function Ji(e, A) {
  return new Promise((t, r) => {
    const n = document.createElement("script");
    n.type = "module", n.integrity = A, n.crossOrigin = "anonymous";
    try {
      n.src = Uc(e);
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
const Wi = async (e) => (e === jA && await Ji(e, la), import(
  /* @vite-ignore */
  e
));
let Yi = Wi, YA = null, Ze = null;
const st = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
function Fc(e) {
  Yi = e ?? Wi, YA = null, Ze = null, st.clear(), ze.clear();
}
function Zi(e, A) {
  return `${e.replace(/\/+$/, "")}/${encodeURIComponent(A)}/definition`;
}
function vc(e) {
  if (st.has(e)) return Promise.resolve();
  const A = ze.get(e);
  if (A) return A;
  const t = fetch(e, { headers: { Accept: "application/json" } }).then((r) => r.ok ? r.json() : null).then((r) => {
    r && st.set(e, r);
  }).catch(() => {
  }).finally(() => {
    ze.delete(e);
  });
  return ze.set(e, t), t;
}
function zi(e) {
  return YA && Ze === e || (Ze = e, YA = Promise.resolve(Yi(e)).then((A) => {
    const t = A;
    if (!t || typeof t.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return t;
  }).catch((A) => {
    throw YA = null, Ze = null, A;
  })), YA;
}
async function ji(e) {
  const A = await zi(e.moduleUrl), t = e.base.replace(/\/+$/, ""), r = Zi(t, e.questId), n = (o) => o != null ? { feedbackId: o } : void 0;
  let i;
  const s = e.feedbackId;
  return s instanceof Promise ? i = A.QaidQuests.supports?.asyncMetadata ? s.then(n, () => {
  }) : n(await s.catch(() => null)) : i = n(s ?? null), new A.QaidQuests({
    endpoint: `${t}/responses`,
    configUrl: r,
    // Only a definition already in hand. One still loading is left to the
    // widget, which shows its own loading state instead of nothing.
    questionnaire: st.get(r),
    apiKey: e.apiKey || void 0,
    metadata: i,
    onClose: e.onClose
  });
}
const mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_QUESTS_MODULE_URL: jA,
  _setQuestsImporter: Fc,
  launchQuest: ji,
  loadQuestsModule: zi,
  prefetchQuestDefinition: vc,
  preloadVerifiedModule: Ji,
  questDefinitionUrl: Zi
}, Symbol.toStringTag, { value: "Module" }));
async function $i(e, A) {
  const t = e.ensureOverlayHost(), r = e.overlayShadowHost, n = r.style.pointerEvents;
  r.style.pointerEvents = "auto";
  try {
    const { openAnnotationEditor: i, styles: s } = await Promise.resolve().then(() => qi);
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
async function bc(e) {
  const { config: A, feedbackData: t, selectedBounds: r } = e;
  let n = null;
  if (A.captureScreenshot || A.feedbackMode === "annotate")
    try {
      if (e.shouldCaptureViaDom()) {
        const { captureDomScreenshot: B } = await Promise.resolve().then(() => ki);
        n = await B(A.screenshotOptions);
      } else {
        const { captureScreenshot: B } = await Promise.resolve().then(() => ns);
        n = await B(A.screenshotOptions);
      }
      n && e.announceMsg("Screenshot captured");
    } catch (B) {
      console.error("Screenshot capture failed:", B), n = null;
    }
  n && A.annotate && (n = await $i(e, n) ?? n);
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
    // Include element bounds and user agent for server-side screenshot fallback
    elementBounds: s,
    userAgent: navigator.userAgent
  }, a = yc(e, o);
  e.setFeedbackRecord(a);
  const c = a.then((B) => B?.id ?? null), l = t.feedbackType;
  if (l && l !== "neutral" && await As(e, l, c)) {
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
async function yc(e, A) {
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
async function As(e, A, t) {
  const r = e.config.quests, n = r.base && r[A] || "";
  if (!n) return !1;
  try {
    return e.activeQuest?.destroy(), e.activeQuest = await ji({
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
const It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  openAnnotationEditor: $i,
  submitFeedback: bc,
  tryLaunchQuest: As
}, Symbol.toStringTag, { value: "Module" })), es = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Ec(e, A, t, r, n) {
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
function Hc(e, A, t, r) {
  let i = e.x + e.width / 2 - t / 2;
  return i = Math.max(r, Math.min(i, A - t - r)), i;
}
function Ic(e, A, t, r = 24, n = 24) {
  const s = e.clickX - A - n / 2;
  return Math.max(r, Math.min(s, t - r - n / 2));
}
function xc(e, A, t, r = es) {
  const n = r.height + r.arrowHeight, i = Ec(
    e,
    t,
    n,
    r.gap,
    r.viewportPadding
  ), s = Hc(
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
function Lc(e, A, t, r = es) {
  const n = xc(e, A, t, r), i = Ic(
    e,
    n.left,
    r.width
  );
  return {
    modal: n,
    arrow: { left: i }
  };
}
const Kc = document;
function H(e, A, ...t) {
  const r = Kc.createElement(e);
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
const Sc = ".qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-type-static{width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, white)}.qaid-type-static svg{width:1.25rem;height:1.25rem}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875)}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:var(--qaid-font-size, 16px);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}.qaid-confirm{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;padding:.5rem 0}.qaid-confirm-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;color:#fff;background:var(--qaid-success, #22c55e);margin-bottom:.25rem;animation:qaid-confirm-pop .28s cubic-bezier(.34,1.56,.64,1)}.qaid-confirm-icon .qaid-icon{width:24px;height:24px}.qaid-confirm-error .qaid-confirm-icon{background:var(--qaid-error, #dc2626)}.qaid-confirm-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:600;color:var(--qaid-text, light-dark(#111827, #f9fafb))}.qaid-confirm-title:focus-visible{outline:2px solid var(--qaid-primary, #6365f1);outline-offset:3px;border-radius:4px}.qaid-confirm-message{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875);color:var(--qaid-text-muted, light-dark(#6b7280, #9ca3af))}.qaid-confirm .qaid-confirm-close{margin-top:.5rem;min-width:96px}@keyframes qaid-confirm-pop{0%{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){.qaid-confirm-icon{animation:none}}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-textarea:focus,button.qaid-btn-submit:focus{outline:2px solid CanvasText;outline-offset:2px}}";
function je(e, A) {
  return JSON.stringify(e.editToken ? { ...A, editToken: e.editToken } : A);
}
class Tc {
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
        body: je(A, { message: null })
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
    const A = this.host.ensureOverlayHost(), { modal: t, arrow: r } = Lc(
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
      MA(A.feedbackIcon, Qi)
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
      i ? MA(A.positiveIcon, jt) : MA(A.negativeIcon, $t)
    ), c = document.createDocumentFragment();
    return c.append(
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
    ), c;
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
      this.host.feedbackData.feedbackType = n, this.host.config.buttonClass ? (r.classList.toggle("qaid-btn-up", n === "up"), r.classList.toggle("qaid-btn-down", n === "down")) : (r.classList.toggle("qaid-type-up", n === "up"), r.classList.toggle("qaid-type-down", n === "down")), n === "up" ? DA(r, this.host.config.positiveIcon, jt) : DA(r, this.host.config.negativeIcon, $t);
      const i = n === "up" ? "Feedback type: positive" : "Feedback type: negative";
      r.setAttribute("aria-pressed", String(n === "up")), r.setAttribute("aria-label", i), this.host.announceMsg(i), this.host.whenFeedbackRecord().then((s) => {
        s?.id && fetch(`${this.host.config.endpoint}/${s.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: je(s, { feedbackType: n })
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
          body: je(r, { message: A })
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
          MA(null, A ? Ci : xo)
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
const Dc = Sc, fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalController: Tc,
  patchBody: je,
  styles: Dc
}, Symbol.toStringTag, { value: "Module" })), ts = ["data-comp", "data-qa", "data-testid", "data-id"];
function rs(e, A = document.body) {
  let t = e;
  for (; t && t !== A; ) {
    for (const r of ts) {
      const n = t.getAttribute(r);
      if (n)
        return `${r}="${n}"`;
    }
    t = t.parentElement;
  }
  return null;
}
function kc(e, A = 100) {
  const t = e.textContent?.trim().slice(0, A) || "";
  return t.length === A ? t + "..." : t;
}
function Mc(e) {
  let A = 1, t = e.previousElementSibling;
  for (; t; )
    A++, t = t.previousElementSibling;
  return A;
}
function Oc(e) {
  const A = [];
  let t = e;
  for (; t && t !== document.body && t !== document.documentElement; ) {
    const r = t.tagName.toLowerCase(), n = Mc(t);
    A.unshift(`${r}:nth-child(${n})`), t = t.parentElement;
  }
  return A.length > 0 ? `body > ${A.join(" > ")}` : "body";
}
function Rc(e) {
  return e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function qc(e) {
  const A = rs(e);
  return A ? `[${A}]` : e.id ? `#${Rc(e.id)}` : Oc(e);
}
function xt(e) {
  const A = kc(e), t = rs(e);
  return { selector: qc(e), text: A, dataAttr: t };
}
const Vc = [
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
  ...ts.map((e) => `[${e}]`)
].join(","), Nc = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function Gc(e) {
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !1;
  const A = e.ownerDocument?.defaultView;
  if (A && typeof A.getComputedStyle == "function") {
    const t = A.getComputedStyle(e);
    if (t.display === "none" || t.visibility === "hidden") return !1;
  }
  return !0;
}
function Pc(e = {}) {
  const A = e.root ?? document.body, t = e.selector ?? Vc, r = e.isExcluded ?? (() => !1), n = e.isVisible ?? Gc;
  return Array.from(A.querySelectorAll(t)).filter(
    (i) => !r(i) && n(i)
  );
}
function _c(e) {
  const A = e.candidates ?? Pc({
    root: e.root,
    selector: e.selector,
    isExcluded: e.isExcluded,
    isVisible: e.isVisible
  }), t = e.moveFocus ?? !0, r = e.eventTarget ?? document, n = /* @__PURE__ */ new Set();
  let i = -1, s = !1;
  const o = e.initial !== void 0 ? e.initial : typeof document < "u" ? document.activeElement : null;
  if (o) {
    const h = A.indexOf(o);
    h >= 0 && (i = h);
  }
  i < 0 && A.length > 0 && (i = 0);
  function a(h) {
    if (!t) return;
    const v = h;
    if (typeof v.focus == "function") {
      h.getAttribute("tabindex") === null && !Nc.test(h.tagName) && (h.setAttribute("tabindex", "-1"), n.add(h));
      try {
        v.focus();
      } catch {
      }
    }
  }
  function c() {
    const h = A[i];
    h && (a(h), e.onHighlight?.(h, i));
  }
  function l(h) {
    if (s || A.length === 0) return;
    const v = A.length;
    i = (h % v + v) % v, c();
  }
  function B() {
    l(i + 1);
  }
  function d() {
    l(i - 1);
  }
  function g() {
    return A[i] ?? null;
  }
  function u() {
    s || (s = !0, r.removeEventListener("keydown", Q, !0), n.forEach((h) => h.removeAttribute("tabindex")), n.clear());
  }
  function f() {
    if (s) return;
    const h = g();
    u(), h && e.onSelect(h);
  }
  function m() {
    s || (u(), e.onCancel?.());
  }
  function Q(h) {
    if (!s)
      switch (h.key) {
        case "Tab":
          h.preventDefault(), h.stopPropagation(), h.shiftKey ? d() : B();
          break;
        case "ArrowDown":
        case "ArrowRight":
          h.preventDefault(), h.stopPropagation(), B();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          h.preventDefault(), h.stopPropagation(), d();
          break;
        case "Enter":
        case " ":
        case "Spacebar":
          h.preventDefault(), h.stopPropagation(), f();
          break;
        case "Escape":
        case "Esc":
          h.preventDefault(), h.stopPropagation(), m();
          break;
      }
  }
  return r.addEventListener("keydown", Q, !0), i >= 0 && c(), {
    candidates: A,
    getIndex: () => i,
    getCurrent: g,
    next: B,
    prev: d,
    moveTo: l,
    select: f,
    cancel: m,
    handleKey: Q,
    stop: u
  };
}
const Xc = ".qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6365f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}@media(forced-colors:active){.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}", Jc = 12;
class Wc {
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
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = A, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = _c({
      isExcluded: (t) => Ye(t),
      onHighlight: (t) => {
        const r = t.getBoundingClientRect(), n = this.highlightBox;
        n && (n.style.transform = `translate(${r.left}px, ${r.top}px)`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, n.style.display = "block");
        const { text: i } = xt(t);
        this.host.announceMsg(`Targeting ${i || t.tagName.toLowerCase()}`);
      },
      onSelect: (t) => this.selectKeyboardTarget(t),
      onCancel: () => this.cancel()
    });
  }
  selectKeyboardTarget(A) {
    const t = $r(A, 8);
    Object.assign(this.host.selectedBounds, t, {
      clickX: t.x + t.width / 2,
      clickY: t.y + t.height / 2,
      visible: !0
    });
    const { selector: r, text: n } = xt(A);
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
      const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = jr(A, t, r);
      if (n && !Ye(n)) {
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
    this.touchStartPos = null, !(!t || !r || Math.hypot(t.clientX - r.x, t.clientY - r.y) > Jc) && (A.preventDefault(), this.selectAt(t.clientX, t.clientY));
  }
  /** Select the element under (x, y) and tear down targeting. */
  selectAt(A, t) {
    const r = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = jr(A, t, r);
    if (!n || Ye(n))
      return;
    const i = $r(n, 8);
    Object.assign(this.host.selectedBounds, i, { clickX: A, clickY: t, visible: !0 });
    const { selector: s, text: o } = xt(n);
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
const Yc = Xc, wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TargetingController: Wc,
  styles: Yc
}, Symbol.toStringTag, { value: "Module" })), Zc = ".qaid-recording-indicator{position:fixed;pointer-events:auto;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:calc(var(--qaid-font-size, 16px) * .75);font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .875);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-error{margin:0 0 .75rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;color:light-dark(#b91c1c,#fca5a5)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);color:light-dark(#6b7280,#9ca3af)}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}button.qaid-recording-stop{min-height:24px}.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}}";
class zc {
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
        this.networkCapture = Oa();
        const { createVideoRecorder: t } = await Promise.resolve().then(() => Si);
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
    if (!t || Ye(t) || this.redactPickerRoot?.contains(t)) return;
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
const jc = Zc, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RecordingController: zc,
  styles: jc
}, Symbol.toStringTag, { value: "Module" }));
async function $c(e = {}) {
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
    const a = s.width || o.videoWidth, c = s.height || o.videoHeight, l = Math.min(t / a, r / c, 1), B = Math.round(a * l), d = Math.round(c * l), g = document.createElement("canvas");
    g.width = B, g.height = d;
    const u = g.getContext("2d");
    return u ? (u.drawImage(o, 0, 0, B, d), i.stop(), g.toDataURL("image/webp", A)) : (i.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureScreenshot: $c
}, Symbol.toStringTag, { value: "Module" }));
var tr = function(e, A) {
  return tr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, tr(e, A);
};
function BA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  tr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var rr = function() {
  return rr = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i]);
    }
    return A;
  }, rr.apply(this, arguments);
};
function Z(e, A, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function o(l) {
      try {
        c(r.next(l));
      } catch (B) {
        s(B);
      }
    }
    function a(l) {
      try {
        c(r.throw(l));
      } catch (B) {
        s(B);
      }
    }
    function c(l) {
      l.done ? i(l.value) : n(l.value).then(o, a);
    }
    c((r = r.apply(e, [])).next());
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
  function o(c) {
    return function(l) {
      return a([c, l]);
    };
  }
  function a(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, n && (i = c[0] & 2 ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
      switch (n = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
        case 0:
        case 1:
          i = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, n = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = c;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(c);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = A.call(e, t);
    } catch (l) {
      c = [6, l], n = 0;
    } finally {
      r = i = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ye(e, A, t) {
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
), wt = function(e, A) {
  return vA.fromClientRect(e, A.getBoundingClientRect());
}, Al = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new vA(0, 0, r, n);
}, Qt = function(e) {
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
}, Cn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", el = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ee = 0; Ee < Cn.length; Ee++)
  el[Cn.charCodeAt(Ee)] = Ee;
var pn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var He = 0; He < pn.length; He++)
  oe[pn.charCodeAt(He)] = He;
var tl = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    i = oe[e.charCodeAt(r)], s = oe[e.charCodeAt(r + 1)], o = oe[e.charCodeAt(r + 2)], a = oe[e.charCodeAt(r + 3)], l[n++] = i << 2 | s >> 4, l[n++] = (s & 15) << 4 | o >> 2, l[n++] = (o & 3) << 6 | a & 63;
  return c;
}, rl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, nl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, RA = 5, yr = 11, Lt = 2, il = yr - RA, is = 65536 >> RA, sl = 1 << RA, Kt = sl - 1, ol = 1024 >> RA, al = is + ol, cl = al, ll = 32, Bl = cl + ll, dl = 65536 >> yr, ul = 1 << il, hl = ul - 1, Un = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, gl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, fl = function(e, A) {
  var t = tl(e), r = Array.isArray(t) ? nl(t) : new Uint32Array(t), n = Array.isArray(t) ? rl(t) : new Uint16Array(t), i = 24, s = Un(n, i / 2, r[4] / 2), o = r[5] === 2 ? Un(n, (i + r[4]) / 2) : gl(r, Math.ceil((i + r[4]) / 4));
  return new wl(r[0], r[1], r[2], r[3], s, o);
}, wl = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> RA], t = (t << Lt) + (A & Kt), this.data[t];
        if (A <= 65535)
          return t = this.index[is + (A - 55296 >> RA)], t = (t << Lt) + (A & Kt), this.data[t];
        if (A < this.highStart)
          return t = Bl - dl + (A >> yr), t = this.index[t], t += A >> RA & hl, t = this.index[t], t = (t << Lt) + (A & Kt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Fn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ql = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ie = 0; Ie < Fn.length; Ie++)
  Ql[Fn.charCodeAt(Ie)] = Ie;
var Cl = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", vn = 50, pl = 1, ss = 2, os = 3, Ul = 4, Fl = 5, mn = 7, as = 8, bn = 9, EA = 10, nr = 11, yn = 12, ir = 13, vl = 14, ae = 15, sr = 16, xe = 17, re = 18, ml = 19, En = 20, or = 21, ne = 22, St = 23, NA = 24, eA = 25, ce = 26, le = 27, GA = 28, bl = 29, kA = 30, yl = 31, Le = 32, Ke = 33, ar = 34, cr = 35, lr = 36, pe = 37, Br = 38, $e = 39, At = 40, Tt = 41, cs = 42, El = 43, Hl = [9001, 65288], ls = "!", I = "×", Se = "÷", dr = fl(Cl), pA = [kA, lr], ur = [pl, ss, os, Fl], Bs = [EA, as], Hn = [le, ce], Il = ur.concat(Bs), In = [Br, $e, At, ar, cr], xl = [ae, ir], Ll = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(i, s) {
    var o = dr.get(i);
    if (o > vn ? (n.push(!0), o -= vn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(s), t.push(sr);
    if (o === Ul || o === nr) {
      if (s === 0)
        return r.push(s), t.push(kA);
      var a = t[s - 1];
      return Il.indexOf(a) === -1 ? (r.push(r[s - 1]), t.push(a)) : (r.push(s), t.push(kA));
    }
    if (r.push(s), o === yl)
      return t.push(A === "strict" ? or : pe);
    if (o === cs || o === bl)
      return t.push(kA);
    if (o === El)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(pe) : t.push(kA);
    t.push(o);
  }), [r, t, n];
}, Dt = function(e, A, t, r) {
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
}, xn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === EA)
      t--;
    else
      return r;
  }
  return 0;
}, Kl = function(e, A, t, r, n) {
  if (t[r] === 0)
    return I;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return I;
  var s = i - 1, o = i + 1, a = A[i], c = s >= 0 ? A[s] : 0, l = A[o];
  if (a === ss && l === os)
    return I;
  if (ur.indexOf(a) !== -1)
    return ls;
  if (ur.indexOf(l) !== -1 || Bs.indexOf(l) !== -1)
    return I;
  if (xn(i, A) === as)
    return Se;
  if (dr.get(e[i]) === nr || (a === Le || a === Ke) && dr.get(e[o]) === nr || a === mn || l === mn || a === bn || [EA, ir, ae].indexOf(a) === -1 && l === bn || [xe, re, ml, NA, GA].indexOf(l) !== -1 || xn(i, A) === ne || Dt(St, ne, i, A) || Dt([xe, re], or, i, A) || Dt(yn, yn, i, A))
    return I;
  if (a === EA)
    return Se;
  if (a === St || l === St)
    return I;
  if (l === sr || a === sr)
    return Se;
  if ([ir, ae, or].indexOf(l) !== -1 || a === vl || c === lr && xl.indexOf(a) !== -1 || a === GA && l === lr || l === En || pA.indexOf(l) !== -1 && a === eA || pA.indexOf(a) !== -1 && l === eA || a === le && [pe, Le, Ke].indexOf(l) !== -1 || [pe, Le, Ke].indexOf(a) !== -1 && l === ce || pA.indexOf(a) !== -1 && Hn.indexOf(l) !== -1 || Hn.indexOf(a) !== -1 && pA.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [le, ce].indexOf(a) !== -1 && (l === eA || [ne, ae].indexOf(l) !== -1 && A[o + 1] === eA) || // ( OP | HY ) × NU
  [ne, ae].indexOf(a) !== -1 && l === eA || // NU ×	(NU | SY | IS)
  a === eA && [eA, GA, NA].indexOf(l) !== -1)
    return I;
  if ([eA, GA, NA, xe, re].indexOf(l) !== -1)
    for (var B = i; B >= 0; ) {
      var d = A[B];
      if (d === eA)
        return I;
      if ([GA, NA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if ([le, ce].indexOf(l) !== -1)
    for (var B = [xe, re].indexOf(a) !== -1 ? s : i; B >= 0; ) {
      var d = A[B];
      if (d === eA)
        return I;
      if ([GA, NA].indexOf(d) !== -1)
        B--;
      else
        break;
    }
  if (Br === a && [Br, $e, ar, cr].indexOf(l) !== -1 || [$e, ar].indexOf(a) !== -1 && [$e, At].indexOf(l) !== -1 || [At, cr].indexOf(a) !== -1 && l === At || In.indexOf(a) !== -1 && [En, ce].indexOf(l) !== -1 || In.indexOf(l) !== -1 && a === le || pA.indexOf(a) !== -1 && pA.indexOf(l) !== -1 || a === NA && pA.indexOf(l) !== -1 || pA.concat(eA).indexOf(a) !== -1 && l === ne && Hl.indexOf(e[o]) === -1 || pA.concat(eA).indexOf(l) !== -1 && a === re)
    return I;
  if (a === Tt && l === Tt) {
    for (var g = t[i], u = 1; g > 0 && (g--, A[g] === Tt); )
      u++;
    if (u % 2 !== 0)
      return I;
  }
  return a === Le && l === Ke ? I : Se;
}, Sl = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = Ll(e, A.lineBreak), r = t[0], n = t[1], i = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(o) {
    return [eA, kA, cs].indexOf(o) !== -1 ? pe : o;
  }));
  var s = A.wordBreak === "keep-all" ? i.map(function(o, a) {
    return o && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [r, n, s];
}, Tl = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === ls, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return M.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  })()
), Dl = function(e, A) {
  var t = Qt(e), r = Sl(t, A), n = r[0], i = r[1], s = r[2], o = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = I; c < o && (l = Kl(t, i, n, ++c, s)) === I; )
        ;
      if (l !== I || c === o) {
        var B = new Tl(t, l, a, c);
        return a = c, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, kl = 1, Ml = 2, ve = 4, Ln = 8, ot = 10, Kn = 47, ge = 92, Ol = 9, Rl = 32, Te = 34, ie = 61, ql = 35, Vl = 36, Nl = 37, De = 39, ke = 40, se = 41, Gl = 95, z = 45, Pl = 33, _l = 60, Xl = 62, Jl = 64, Wl = 91, Yl = 93, Zl = 61, zl = 123, Me = 63, jl = 125, Sn = 124, $l = 126, AB = 128, Tn = 65533, kt = 42, OA = 43, eB = 44, tB = 58, rB = 59, Ue = 46, nB = 0, iB = 8, sB = 11, oB = 14, aB = 31, cB = 127, hA = -1, ds = 48, us = 97, hs = 101, lB = 102, BB = 117, dB = 122, gs = 65, fs = 69, ws = 70, uB = 85, hB = 90, Y = function(e) {
  return e >= ds && e <= 57;
}, gB = function(e) {
  return e >= 55296 && e <= 57343;
}, PA = function(e) {
  return Y(e) || e >= gs && e <= ws || e >= us && e <= lB;
}, fB = function(e) {
  return e >= us && e <= dB;
}, wB = function(e) {
  return e >= gs && e <= hB;
}, QB = function(e) {
  return fB(e) || wB(e);
}, CB = function(e) {
  return e >= AB;
}, Oe = function(e) {
  return e === ot || e === Ol || e === Rl;
}, at = function(e) {
  return QB(e) || CB(e) || e === Gl;
}, Dn = function(e) {
  return at(e) || Y(e) || e === z;
}, pB = function(e) {
  return e >= nB && e <= iB || e === sB || e >= oB && e <= aB || e === cB;
}, yA = function(e, A) {
  return e !== ge ? !1 : A !== ot;
}, Re = function(e, A, t) {
  return e === z ? at(A) || yA(A, t) : at(e) ? !0 : !!(e === ge && yA(e, A));
}, Mt = function(e, A, t) {
  return e === OA || e === z ? Y(A) ? !0 : A === Ue && Y(t) : Y(e === Ue ? A : e);
}, UB = function(e) {
  var A = 0, t = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (t = -1), A++);
  for (var r = []; Y(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(M.apply(void 0, r), 10) : 0;
  e[A] === Ue && A++;
  for (var i = []; Y(e[A]); )
    i.push(e[A++]);
  var s = i.length, o = s ? parseInt(M.apply(void 0, i), 10) : 0;
  (e[A] === fs || e[A] === hs) && A++;
  var a = 1;
  (e[A] === OA || e[A] === z) && (e[A] === z && (a = -1), A++);
  for (var c = []; Y(e[A]); )
    c.push(e[A++]);
  var l = c.length ? parseInt(M.apply(void 0, c), 10) : 0;
  return t * (n + o * Math.pow(10, -s)) * Math.pow(10, a * l);
}, FB = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, vB = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, mB = {
  type: 4
  /* COMMA_TOKEN */
}, bB = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, yB = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, EB = {
  type: 21
  /* COLUMN_TOKEN */
}, HB = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, IB = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, xB = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, LB = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, KB = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, qe = {
  type: 23
  /* BAD_URL_TOKEN */
}, SB = {
  type: 1
  /* BAD_STRING_TOKEN */
}, TB = {
  type: 25
  /* CDO_TOKEN */
}, DB = {
  type: 24
  /* CDC_TOKEN */
}, kB = {
  type: 26
  /* COLON_TOKEN */
}, MB = {
  type: 27
  /* SEMICOLON_TOKEN */
}, OB = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, RB = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, qB = {
  type: 31
  /* WHITESPACE_TOKEN */
}, hr = {
  type: 32
  /* EOF_TOKEN */
}, Qs = (
  /** @class */
  (function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Qt(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== hr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Te:
          return this.consumeStringToken(Te);
        case ql:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Dn(t) || yA(r, n)) {
            var i = Re(t, r, n) ? Ml : kl, s = this.consumeName();
            return { type: 5, value: s, flags: i };
          }
          break;
        case Vl:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), bB;
          break;
        case De:
          return this.consumeStringToken(De);
        case ke:
          return FB;
        case se:
          return vB;
        case kt:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), KB;
          break;
        case OA:
          if (Mt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case eB:
          return mB;
        case z:
          var o = A, a = this.peekCodePoint(0), c = this.peekCodePoint(1);
          if (Mt(o, a, c))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Re(o, a, c))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (a === z && c === Xl)
            return this.consumeCodePoint(), this.consumeCodePoint(), DB;
          break;
        case Ue:
          if (Mt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Kn:
          if (this.peekCodePoint(0) === kt)
            for (this.consumeCodePoint(); ; ) {
              var l = this.consumeCodePoint();
              if (l === kt && (l = this.consumeCodePoint(), l === Kn))
                return this.consumeToken();
              if (l === hA)
                return this.consumeToken();
            }
          break;
        case tB:
          return kB;
        case rB:
          return MB;
        case _l:
          if (this.peekCodePoint(0) === Pl && this.peekCodePoint(1) === z && this.peekCodePoint(2) === z)
            return this.consumeCodePoint(), this.consumeCodePoint(), TB;
          break;
        case Jl:
          var B = this.peekCodePoint(0), d = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (Re(B, d, g)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case Wl:
          return OB;
        case ge:
          if (yA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Yl:
          return RB;
        case Zl:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), yB;
          break;
        case zl:
          return xB;
        case jl:
          return LB;
        case BB:
        case uB:
          var u = this.peekCodePoint(0), f = this.peekCodePoint(1);
          return u === OA && (PA(f) || f === Me) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Sn:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), HB;
          if (this.peekCodePoint(0) === Sn)
            return this.consumeCodePoint(), EB;
          break;
        case $l:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), IB;
          break;
        case hA:
          return hr;
      }
      return Oe(A) ? (this.consumeWhiteSpace(), qB) : Y(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : at(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: M(A) };
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
      for (var r = !1; t === Me && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(M.apply(void 0, A.map(function(a) {
          return a === Me ? ds : a;
        })), 16), i = parseInt(M.apply(void 0, A.map(function(a) {
          return a === Me ? ws : a;
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
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === ke ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === ke ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === hA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === De || t === Te) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === hA || this.peekCodePoint(0) === se) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), qe);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === hA || n === se)
          return { type: 22, value: M.apply(void 0, A) };
        if (Oe(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === hA || this.peekCodePoint(0) === se ? (this.consumeCodePoint(), { type: 22, value: M.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), qe);
        if (n === Te || n === De || n === ke || pB(n))
          return this.consumeBadUrlRemnants(), qe;
        if (n === ge)
          if (yA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), qe;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Oe(this.peekCodePoint(0)); )
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
        if (n === ot)
          return this._value.splice(0, r), SB;
        if (n === ge) {
          var i = this._value[r + 1];
          i !== hA && i !== void 0 && (i === ot ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : yA(n, i) && (t += this.consumeStringSlice(r), t += M(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = ve, r = this.peekCodePoint(0);
      for ((r === OA || r === z) && A.push(this.consumeCodePoint()); Y(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Ue && Y(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Ln; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === fs || r === hs) && ((n === OA || n === z) && Y(i) || Y(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Ln; Y(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [UB(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (Re(n, i, s)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return n === Nl ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (PA(A)) {
        for (var t = M(A); PA(this.peekCodePoint(0)) && t.length < 6; )
          t += M(this.consumeCodePoint());
        Oe(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || gB(r) || r > 1114111 ? Tn : r;
      }
      return A === hA ? Tn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Dn(t))
          A += M(t);
        else if (yA(t, this.peekCodePoint(0)))
          A += M(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  })()
), Cs = (
  /** @class */
  (function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Qs();
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
        if (r.type === 32 || NB(r, A))
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
      return typeof A > "u" ? hr : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  })()
), me = function(e) {
  return e.type === 15;
}, te = function(e) {
  return e.type === 17;
}, K = function(e) {
  return e.type === 20;
}, VB = function(e) {
  return e.type === 0;
}, gr = function(e, A) {
  return K(e) && e.value === A;
}, ps = function(e) {
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
}, NB = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, KA = function(e) {
  return e.type === 17 || e.type === 15;
}, R = function(e) {
  return e.type === 16 || KA(e);
}, Us = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, P = {
  type: 17,
  number: 0,
  flags: ve
}, Er = {
  type: 16,
  number: 50,
  flags: ve
}, HA = {
  type: 16,
  number: 100,
  flags: ve
}, Be = function(e, A, t) {
  var r = e[0], n = e[1];
  return [S(r, A), S(typeof n < "u" ? n : r, t)];
}, S = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (me(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Fs = "deg", vs = "grad", ms = "rad", bs = "turn", Ct = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Fs:
          return Math.PI * A.number / 180;
        case vs:
          return Math.PI / 200 * A.number;
        case ms:
          return A.number;
        case bs:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, ys = function(e) {
  return e.type === 15 && (e.unit === Fs || e.unit === vs || e.unit === ms || e.unit === bs);
}, Es = function(e) {
  var A = e.filter(K).map(function(t) {
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
      var t = GB[A.name];
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
}, kn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Mn = function(e, A) {
  var t = A.filter(ee);
  if (t.length === 3) {
    var r = t.map(kn), n = r[0], i = r[1], s = r[2];
    return IA(n, i, s, 1);
  }
  if (t.length === 4) {
    var o = t.map(kn), n = o[0], i = o[1], s = o[2], a = o[3];
    return IA(n, i, s, a);
  }
  return 0;
};
function Ot(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var On = function(e, A) {
  var t = A.filter(ee), r = t[0], n = t[1], i = t[2], s = t[3], o = (r.type === 17 ? nA(r.number) : Ct.parse(e, r)) / (Math.PI * 2), a = R(n) ? n.number / 100 : 0, c = R(i) ? i.number / 100 : 0, l = typeof s < "u" && R(s) ? S(s, 1) : 1;
  if (a === 0)
    return IA(c * 255, c * 255, c * 255, 1);
  var B = c <= 0.5 ? c * (a + 1) : c + a - c * a, d = c * 2 - B, g = Ot(d, B, o + 1 / 3), u = Ot(d, B, o), f = Ot(d, B, o - 1 / 3);
  return IA(g * 255, u * 255, f * 255, l);
}, GB = {
  hsl: On,
  hsla: On,
  rgb: Mn,
  rgba: Mn
}, fe = function(e, A) {
  return xA.parse(e, Cs.create(A).parseComponentValue());
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
}, PB = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (K(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, _B = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, pt = function(e, A) {
  var t = xA.parse(e, A[0]), r = A[1];
  return r && R(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Rn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = P), r.stop === null && (r.stop = HA);
  for (var n = [], i = 0, s = 0; s < e.length; s++) {
    var o = e[s].stop;
    if (o !== null) {
      var a = S(o, A);
      a > i ? n.push(a) : n.push(i), i = a;
    } else
      n.push(null);
  }
  for (var c = null, s = 0; s < n.length; s++) {
    var l = n[s];
    if (l === null)
      c === null && (c = s);
    else if (c !== null) {
      for (var B = s - c, d = n[c - 1], g = (l - d) / (B + 1), u = 1; u <= B; u++)
        n[c + u - 1] = g * u;
      c = null;
    }
  }
  return e.map(function(f, m) {
    var Q = f.color;
    return { color: Q, stop: Math.max(Math.min(1, n[m] / A), 0) };
  });
}, XB = function(e, A, t) {
  var r = A / 2, n = t / 2, i = S(e[0], A) - r, s = n - S(e[1], t);
  return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2);
}, JB = function(e, A, t) {
  var r = typeof e == "number" ? e : XB(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = A / 2, s = t / 2, o = n / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
  return [n, i - c, i + c, s - a, s + a];
}, cA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, qn = function(e, A, t, r, n) {
  var i = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return i.reduce(function(s, o) {
    var a = o[0], c = o[1], l = cA(t - a, r - c);
    return (n ? l < s.optimumDistance : l > s.optimumDistance) ? {
      optimumCorner: o,
      optimumDistance: l
    } : s;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, WB = function(e, A, t, r, n) {
  var i = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? i = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        i = s = Math.min(cA(A, t), cA(A, t - n), cA(A - r, t), cA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), a = qn(r, n, A, t, !0), c = a[0], l = a[1];
        i = cA(c - A, (l - t) / o), s = o * i;
      }
      break;
    case 1:
      e.shape === 0 ? i = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        i = s = Math.max(cA(A, t), cA(A, t - n), cA(A - r, t), cA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), B = qn(r, n, A, t, !1), c = B[0], l = B[1];
        i = cA(c - A, (l - t) / o), s = o * i;
      }
      break;
  }
  return Array.isArray(e.size) && (i = S(e.size[0], r), s = e.size.length === 2 ? S(e.size[1], n) : i), [i, s];
}, YB = function(e, A) {
  var t = nA(180), r = [];
  return gA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = Es(n);
        return;
      } else if (ys(s)) {
        t = Ct.parse(e, s);
        return;
      }
    }
    var o = pt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ve = function(e, A) {
  var t = nA(180), r = [];
  return gA(A).forEach(function(n, i) {
    if (i === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = Es(n);
        return;
      } else if (ys(s)) {
        t = (Ct.parse(e, s) + nA(270)) % nA(360);
        return;
      }
    }
    var o = pt(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ZB = function(e, A) {
  var t = nA(180), r = [], n = 1, i = 0, s = 3, o = [];
  return gA(A).forEach(function(a, c) {
    var l = a[0];
    if (c === 0) {
      if (K(l) && l.value === "linear") {
        n = 1;
        return;
      } else if (K(l) && l.value === "radial") {
        n = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        var B = xA.parse(e, l.values[0]);
        r.push({ stop: P, color: B });
      } else if (l.name === "to") {
        var B = xA.parse(e, l.values[0]);
        r.push({ stop: HA, color: B });
      } else if (l.name === "color-stop") {
        var d = l.values.filter(ee);
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
}, Hs = "closest-side", Is = "farthest-side", xs = "closest-corner", Ls = "farthest-corner", Ks = "circle", Ss = "ellipse", Ts = "cover", Ds = "contain", zB = function(e, A) {
  var t = 0, r = 3, n = [], i = [];
  return gA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0) {
      var c = !1;
      a = s.reduce(function(B, d) {
        if (c)
          if (K(d))
            switch (d.value) {
              case "center":
                return i.push(Er), B;
              case "top":
              case "left":
                return i.push(P), B;
              case "right":
              case "bottom":
                return i.push(HA), B;
            }
          else (R(d) || KA(d)) && i.push(d);
        else if (K(d))
          switch (d.value) {
            case Ks:
              return t = 0, !1;
            case Ss:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case Hs:
              return r = 0, !1;
            case Ts:
            case Is:
              return r = 1, !1;
            case Ds:
            case xs:
              return r = 2, !1;
            case Ls:
              return r = 3, !1;
          }
        else if (KA(d) || R(d))
          return Array.isArray(r) || (r = []), r.push(d), !1;
        return B;
      }, a);
    }
    if (a) {
      var l = pt(e, s);
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
}, Ne = function(e, A) {
  var t = 0, r = 3, n = [], i = [];
  return gA(A).forEach(function(s, o) {
    var a = !0;
    if (o === 0 ? a = s.reduce(function(l, B) {
      if (K(B))
        switch (B.value) {
          case "center":
            return i.push(Er), !1;
          case "top":
          case "left":
            return i.push(P), !1;
          case "right":
          case "bottom":
            return i.push(HA), !1;
        }
      else if (R(B) || KA(B))
        return i.push(B), !1;
      return l;
    }, a) : o === 1 && (a = s.reduce(function(l, B) {
      if (K(B))
        switch (B.value) {
          case Ks:
            return t = 0, !1;
          case Ss:
            return t = 1, !1;
          case Ds:
          case Hs:
            return r = 0, !1;
          case Is:
            return r = 1, !1;
          case xs:
            return r = 2, !1;
          case Ts:
          case Ls:
            return r = 3, !1;
        }
      else if (KA(B) || R(B))
        return Array.isArray(r) || (r = []), r.push(B), !1;
      return l;
    }, a)), a) {
      var c = pt(e, s);
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
}, jB = function(e) {
  return e.type === 1;
}, $B = function(e) {
  return e.type === 2;
}, Hr = {
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
      var r = ks[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Ad(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!ks[e.name]);
}
var ks = {
  "linear-gradient": YB,
  "-moz-linear-gradient": Ve,
  "-ms-linear-gradient": Ve,
  "-o-linear-gradient": Ve,
  "-webkit-linear-gradient": Ve,
  "radial-gradient": zB,
  "-moz-radial-gradient": Ne,
  "-ms-radial-gradient": Ne,
  "-o-radial-gradient": Ne,
  "-webkit-radial-gradient": Ne,
  "-webkit-gradient": ZB
}, ed = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ee(r) && Ad(r);
    }).map(function(r) {
      return Hr.parse(e, r);
    });
  }
}, td = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (K(t))
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
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(R);
    }).map(Us);
  }
}, nd = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(K).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(id);
  }
}, id = function(e) {
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
var sd = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return gA(A).map(function(t) {
      return t.filter(od);
    });
  }
}, od = function(e) {
  return K(e) || R(e);
}, Ut = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, ad = Ut("top"), cd = Ut("right"), ld = Ut("bottom"), Bd = Ut("left"), Ft = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Us(t.filter(R));
    }
  };
}, dd = Ft("top-left"), ud = Ft("top-right"), hd = Ft("bottom-right"), gd = Ft("bottom-left"), vt = function(e) {
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
}, fd = vt("top"), wd = vt("right"), Qd = vt("bottom"), Cd = vt("left"), mt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return me(t) ? t.number : 0;
    }
  };
}, pd = mt("top"), Ud = mt("right"), Fd = mt("bottom"), vd = mt("left"), md = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, bd = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "rtl" ? 1 : 0;
  }
}, yd = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(K).reduce(
      function(t, r) {
        return t | Ed(r.value);
      },
      0
      /* NONE */
    );
  }
}, Ed = function(e) {
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
}, Hd = {
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
}, Id = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, ct;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ct || (ct = {}));
var xd = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "strict" ? ct.STRICT : ct.NORMAL;
  }
}, Ld = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Vn = function(e, A) {
  return K(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : R(e) ? S(e, A) : A;
}, Kd = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Hr.parse(e, A);
  }
}, Sd = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "inside" ? 0 : 1;
  }
}, fr = {
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
}, bt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Td = bt("top"), Dd = bt("right"), kd = bt("bottom"), Md = bt("left"), Od = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(K).map(function(t) {
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
}, Rd = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    return A === "break-word" ? "break-word" : "normal";
  }
}, yt = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, qd = yt("top"), Vd = yt("right"), Nd = yt("bottom"), Gd = yt("left"), Pd = {
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
}, _d = {
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
}, Xd = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && gr(A[0], "none") ? [] : gA(A).map(function(t) {
      for (var r = {
        color: FA.TRANSPARENT,
        offsetX: P,
        offsetY: P,
        blur: P
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        KA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = xA.parse(e, s);
      }
      return r;
    });
  }
}, Jd = {
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
}, Wd = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = zd[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Yd = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Zd = function(e) {
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
}, zd = {
  matrix: Yd,
  matrix3d: Zd
}, Nn = {
  type: 16,
  number: 50,
  flags: ve
}, jd = [Nn, Nn], $d = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(R);
    return t.length !== 2 ? jd : [t[0], t[1]];
  }
}, Au = {
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
}, we;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(we || (we = {}));
var eu = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return we.BREAK_ALL;
      case "keep-all":
        return we.KEEP_ALL;
      default:
        return we.NORMAL;
    }
  }
}, tu = {
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
}, Ms = {
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
}, ru = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : 1;
  }
}, nu = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, iu = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(K).map(function(t) {
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
}, su = {
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
}, ou = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, au = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return te(A) ? A.number : K(A) && A.value === "bold" ? 700 : 400;
  }
}, cu = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(K).map(function(t) {
      return t.value;
    });
  }
}, lu = {
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
}, Bu = {
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
}, du = {
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
    for (var r = [], n = A.filter(ps), i = 0; i < n.length; i++) {
      var s = n[i], o = n[i + 1];
      if (s.type === 20) {
        var a = o && te(o) ? o.number : 1;
        r.push({ counter: s.value, increment: a });
      }
    }
    return r;
  }
}, uu = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(ps), n = 0; n < r.length; n++) {
      var i = r[n], s = r[n + 1];
      if (K(i) && i.value !== "none") {
        var o = s && te(s) ? s.number : 0;
        t.push({ counter: i.value, reset: o });
      }
    }
    return t;
  }
}, hu = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(me).map(function(t) {
      return Ms.parse(e, t);
    });
  }
}, gu = {
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
    var r = [], n = A.filter(VB);
    if (n.length % 2 !== 0)
      return null;
    for (var i = 0; i < n.length; i += 2) {
      var s = n[i].value, o = n[i + 1].value;
      r.push({ open: s, close: o });
    }
    return r;
  }
}, Gn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, fu = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && gr(A[0], "none") ? [] : gA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: P,
        offsetY: P,
        blur: P,
        spread: P,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var s = t[i];
        gr(s, "inset") ? r.inset = !0 : KA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = xA.parse(e, s);
      }
      return r;
    });
  }
}, wu = {
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
    return A.filter(K).forEach(function(n) {
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
}, Qu = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Cu = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return me(A) ? A.number : 0;
  }
}, pu = (
  /** @class */
  (function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = p(A, hu, t.animationDuration), this.backgroundClip = p(A, PB, t.backgroundClip), this.backgroundColor = p(A, _B, t.backgroundColor), this.backgroundImage = p(A, ed, t.backgroundImage), this.backgroundOrigin = p(A, td, t.backgroundOrigin), this.backgroundPosition = p(A, rd, t.backgroundPosition), this.backgroundRepeat = p(A, nd, t.backgroundRepeat), this.backgroundSize = p(A, sd, t.backgroundSize), this.borderTopColor = p(A, ad, t.borderTopColor), this.borderRightColor = p(A, cd, t.borderRightColor), this.borderBottomColor = p(A, ld, t.borderBottomColor), this.borderLeftColor = p(A, Bd, t.borderLeftColor), this.borderTopLeftRadius = p(A, dd, t.borderTopLeftRadius), this.borderTopRightRadius = p(A, ud, t.borderTopRightRadius), this.borderBottomRightRadius = p(A, hd, t.borderBottomRightRadius), this.borderBottomLeftRadius = p(A, gd, t.borderBottomLeftRadius), this.borderTopStyle = p(A, fd, t.borderTopStyle), this.borderRightStyle = p(A, wd, t.borderRightStyle), this.borderBottomStyle = p(A, Qd, t.borderBottomStyle), this.borderLeftStyle = p(A, Cd, t.borderLeftStyle), this.borderTopWidth = p(A, pd, t.borderTopWidth), this.borderRightWidth = p(A, Ud, t.borderRightWidth), this.borderBottomWidth = p(A, Fd, t.borderBottomWidth), this.borderLeftWidth = p(A, vd, t.borderLeftWidth), this.boxShadow = p(A, fu, t.boxShadow), this.color = p(A, md, t.color), this.direction = p(A, bd, t.direction), this.display = p(A, yd, t.display), this.float = p(A, Hd, t.cssFloat), this.fontFamily = p(A, su, t.fontFamily), this.fontSize = p(A, ou, t.fontSize), this.fontStyle = p(A, lu, t.fontStyle), this.fontVariant = p(A, cu, t.fontVariant), this.fontWeight = p(A, au, t.fontWeight), this.letterSpacing = p(A, Id, t.letterSpacing), this.lineBreak = p(A, xd, t.lineBreak), this.lineHeight = p(A, Ld, t.lineHeight), this.listStyleImage = p(A, Kd, t.listStyleImage), this.listStylePosition = p(A, Sd, t.listStylePosition), this.listStyleType = p(A, fr, t.listStyleType), this.marginTop = p(A, Td, t.marginTop), this.marginRight = p(A, Dd, t.marginRight), this.marginBottom = p(A, kd, t.marginBottom), this.marginLeft = p(A, Md, t.marginLeft), this.opacity = p(A, ru, t.opacity);
      var i = p(A, Od, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = p(A, Rd, t.overflowWrap), this.paddingTop = p(A, qd, t.paddingTop), this.paddingRight = p(A, Vd, t.paddingRight), this.paddingBottom = p(A, Nd, t.paddingBottom), this.paddingLeft = p(A, Gd, t.paddingLeft), this.paintOrder = p(A, wu, t.paintOrder), this.position = p(A, _d, t.position), this.textAlign = p(A, Pd, t.textAlign), this.textDecorationColor = p(A, nu, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = p(A, iu, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = p(A, Xd, t.textShadow), this.textTransform = p(A, Jd, t.textTransform), this.transform = p(A, Wd, t.transform), this.transformOrigin = p(A, $d, t.transformOrigin), this.visibility = p(A, Au, t.visibility), this.webkitTextStrokeColor = p(A, Qu, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = p(A, Cu, t.webkitTextStrokeWidth), this.wordBreak = p(A, eu, t.wordBreak), this.zIndex = p(A, tu, t.zIndex);
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
), Uu = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.content = p(A, Bu, t.content), this.quotes = p(A, gu, t.quotes);
    }
    return e;
  })()
), Pn = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.counterIncrement = p(A, du, t.counterIncrement), this.counterReset = p(A, uu, t.counterReset);
    }
    return e;
  })()
), p = function(e, A, t) {
  var r = new Qs(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var i = new Cs(r.read());
  switch (A.type) {
    case 2:
      var s = i.parseComponentValue();
      return A.parse(e, K(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, i.parseComponentValue());
    case 1:
      return A.parse(e, i.parseComponentValues());
    case 4:
      return i.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Ct.parse(e, i.parseComponentValue());
        case "color":
          return xA.parse(e, i.parseComponentValue());
        case "image":
          return Hr.parse(e, i.parseComponentValue());
        case "length":
          var o = i.parseComponentValue();
          return KA(o) ? o : P;
        case "length-percentage":
          var a = i.parseComponentValue();
          return R(a) ? a : P;
        case "time":
          return Ms.parse(e, i.parseComponentValue());
      }
      break;
  }
}, Fu = "data-html2canvas-debug", vu = function(e) {
  var A = e.getAttribute(Fu);
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
}, wr = function(e, A) {
  var t = vu(e);
  return t === 1 || A === t;
}, fA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, wr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new pu(A, window.getComputedStyle(t, null)), pr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = wt(this.context, t), wr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  })()
), mu = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", _n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", de = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ge = 0; Ge < _n.length; Ge++)
  de[_n.charCodeAt(Ge)] = Ge;
var bu = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, i, s, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    i = de[e.charCodeAt(r)], s = de[e.charCodeAt(r + 1)], o = de[e.charCodeAt(r + 2)], a = de[e.charCodeAt(r + 3)], l[n++] = i << 2 | s >> 4, l[n++] = (s & 15) << 4 | o >> 2, l[n++] = (o & 3) << 6 | a & 63;
  return c;
}, yu = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Eu = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, qA = 5, Ir = 11, Rt = 2, Hu = Ir - qA, Os = 65536 >> qA, Iu = 1 << qA, qt = Iu - 1, xu = 1024 >> qA, Lu = Os + xu, Ku = Lu, Su = 32, Tu = Ku + Su, Du = 65536 >> Ir, ku = 1 << Hu, Mu = ku - 1, Xn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Ou = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ru = function(e, A) {
  var t = bu(e), r = Array.isArray(t) ? Eu(t) : new Uint32Array(t), n = Array.isArray(t) ? yu(t) : new Uint16Array(t), i = 24, s = Xn(n, i / 2, r[4] / 2), o = r[5] === 2 ? Xn(n, (i + r[4]) / 2) : Ou(r, Math.ceil((i + r[4]) / 4));
  return new qu(r[0], r[1], r[2], r[3], s, o);
}, qu = (
  /** @class */
  (function() {
    function e(A, t, r, n, i, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> qA], t = (t << Rt) + (A & qt), this.data[t];
        if (A <= 65535)
          return t = this.index[Os + (A - 55296 >> qA)], t = (t << Rt) + (A & qt), this.data[t];
        if (A < this.highStart)
          return t = Tu - Du + (A >> Ir), t = this.index[t], t += A >> qA & Mu, t = this.index[t], t = (t << Rt) + (A & qt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Pe = 0; Pe < Jn.length; Pe++)
  Vu[Jn.charCodeAt(Pe)] = Pe;
var Nu = 1, Vt = 2, Nt = 3, Wn = 4, Yn = 5, Gu = 7, Zn = 8, Gt = 9, Pt = 10, zn = 11, jn = 12, $n = 13, Ai = 14, _t = 15, Pu = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((n & 1023) << 10) + (i & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, _u = function() {
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
}, Xu = Ru(mu), tA = "×", Xt = "÷", Ju = function(e) {
  return Xu.get(e);
}, Wu = function(e, A, t) {
  var r = t - 2, n = A[r], i = A[t - 1], s = A[t];
  if (i === Vt && s === Nt)
    return tA;
  if (i === Vt || i === Nt || i === Wn || s === Vt || s === Nt || s === Wn)
    return Xt;
  if (i === Zn && [Zn, Gt, zn, jn].indexOf(s) !== -1 || (i === zn || i === Gt) && (s === Gt || s === Pt) || (i === jn || i === Pt) && s === Pt || s === $n || s === Yn || s === Gu || i === Nu)
    return tA;
  if (i === $n && s === Ai) {
    for (; n === Yn; )
      n = A[--r];
    if (n === Ai)
      return tA;
  }
  if (i === _t && s === _t) {
    for (var o = 0; n === _t; )
      o++, n = A[--r];
    if (o % 2 === 0)
      return tA;
  }
  return Xt;
}, Yu = function(e) {
  var A = Pu(e), t = A.length, r = 0, n = 0, i = A.map(Ju);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = tA; r < t && (s = Wu(A, i, ++r)) === tA; )
        ;
      if (s !== tA || r === t) {
        var o = _u.apply(null, A.slice(n, r));
        return n = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Zu = function(e) {
  for (var A = Yu(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, zu = function(e) {
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
}, ju = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = Qt(r.data).map(function(a) {
    return M(a);
  }), i = 0, s = {}, o = n.every(function(a, c) {
    t.setStart(r, i), t.setEnd(r, i + a.length);
    var l = t.getBoundingClientRect();
    i += a.length;
    var B = l.x > s.x || l.y > s.y;
    return s = l, c === 0 ? !0 : B;
  });
  return e.body.removeChild(A), o;
}, $u = function() {
  return typeof new Image().crossOrigin < "u";
}, Ah = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, eh = function(e) {
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
}, ei = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, th = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), i = A.toDataURL();
  n.src = i;
  var s = Qr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ti(s).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var c = e.createElement("div");
    return c.style.backgroundImage = "url(" + i + ")", c.style.height = t + "px", ei(a) ? ti(Qr(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), ei(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Qr = function(e, A, t, r, n) {
  var i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), o = document.createElementNS(i, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), s;
}, ti = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, G = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = zu(document);
    return Object.defineProperty(G, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = G.SUPPORT_RANGE_BOUNDS && ju(document);
    return Object.defineProperty(G, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = eh(document);
    return Object.defineProperty(G, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? th(document) : Promise.resolve(!1);
    return Object.defineProperty(G, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = $u();
    return Object.defineProperty(G, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Ah();
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
}, Qe = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  })()
), rh = function(e, A, t, r) {
  var n = sh(A, t), i = [], s = 0;
  return n.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (G.SUPPORT_RANGE_BOUNDS) {
        var a = ri(r, s, o.length).getClientRects();
        if (a.length > 1) {
          var c = xr(o), l = 0;
          c.forEach(function(d) {
            i.push(new Qe(d, vA.fromDOMRectList(e, ri(r, l + s, d.length).getClientRects()))), l += d.length;
          });
        } else
          i.push(new Qe(o, vA.fromDOMRectList(e, a)));
      } else {
        var B = r.splitText(o.length);
        i.push(new Qe(o, nh(e, r))), r = B;
      }
    else G.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    s += o.length;
  }), i;
}, nh = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var i = wt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), i;
    }
  }
  return vA.EMPTY;
}, ri = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, xr = function(e) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Zu(e);
}, ih = function(e, A) {
  if (G.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return ah(e, A);
}, sh = function(e, A) {
  return A.letterSpacing !== 0 ? xr(e) : ih(e, A);
}, oh = [32, 160, 4961, 65792, 65793, 4153, 4241], ah = function(e, A) {
  for (var t = Dl(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var s = n.value.slice(), o = Qt(s), a = "";
      o.forEach(function(c) {
        oh.indexOf(c) === -1 ? a += M(c) : (a.length && r.push(a), r.push(M(c)), a = "");
      }), a.length && r.push(a);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, ch = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.text = lh(t.data, r.textTransform), this.textBounds = rh(A, this.text, r, t);
    }
    return e;
  })()
), lh = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Bh, dh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Bh = /(^|\s|:|-|\(|\))([a-z])/g, dh = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Rs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  })(fA)
), qs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  })(fA)
), Vs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = new XMLSerializer(), s = wt(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  })(fA)
), Ns = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(fA)
), Cr = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  })(fA)
), uh = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], hh = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], gh = function(e) {
  return e.width > e.height ? new vA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new vA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, fh = function(e) {
  var A = e.type === wh ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, lt = "checkbox", Bt = "radio", wh = "password", ni = 707406591, Lr = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = fh(r), (n.type === lt || n.type === Bt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = gh(n.bounds)), n.type) {
        case lt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = uh;
          break;
        case Bt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = hh;
          break;
      }
      return n;
    }
    return A;
  })(fA)
), Gs = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return A;
  })(fA)
), Ps = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(fA)
), _s = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Js(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? fe(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : FA.TRANSPARENT, s = r.contentWindow.document.body ? fe(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : FA.TRANSPARENT;
          n.backgroundColor = LA(i) ? LA(s) ? n.styles.backgroundColor : s : i;
        }
      } catch {
      }
      return n;
    }
    return A;
  })(fA)
), Qh = ["OL", "UL", "MENU"], et = function(e, A, t, r) {
  for (var n = A.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, Ws(n) && n.data.trim().length > 0)
      t.textNodes.push(new ch(e, n, t.styles));
    else if ($A(n))
      if (js(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(o) {
          return et(e, o, t, r);
        });
      else {
        var s = Xs(e, n);
        s.styles.isVisible() && (Ch(n, s, r) ? s.flags |= 4 : ph(s.styles) && (s.flags |= 2), Qh.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? et(e, n.shadowRoot, s, r) : !dt(n) && !Ys(n) && !ut(n) && et(e, n, s, r));
      }
}, Xs = function(e, A) {
  return Ur(A) ? new Rs(e, A) : Zs(A) ? new qs(e, A) : Ys(A) ? new Vs(e, A) : Uh(A) ? new Ns(e, A) : Fh(A) ? new Cr(e, A) : vh(A) ? new Lr(e, A) : ut(A) ? new Gs(e, A) : dt(A) ? new Ps(e, A) : zs(A) ? new _s(e, A) : new fA(e, A);
}, Js = function(e, A) {
  var t = Xs(e, A);
  return t.flags |= 4, et(e, A, t, t), t;
}, Ch = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Kr(e) && t.styles.isTransparent();
}, ph = function(e) {
  return e.isPositioned() || e.isFloating();
}, Ws = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, $A = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, pr = function(e) {
  return $A(e) && typeof e.style < "u" && !tt(e);
}, tt = function(e) {
  return typeof e.className == "object";
}, Uh = function(e) {
  return e.tagName === "LI";
}, Fh = function(e) {
  return e.tagName === "OL";
}, vh = function(e) {
  return e.tagName === "INPUT";
}, mh = function(e) {
  return e.tagName === "HTML";
}, Ys = function(e) {
  return e.tagName === "svg";
}, Kr = function(e) {
  return e.tagName === "BODY";
}, Zs = function(e) {
  return e.tagName === "CANVAS";
}, ii = function(e) {
  return e.tagName === "VIDEO";
}, Ur = function(e) {
  return e.tagName === "IMG";
}, zs = function(e) {
  return e.tagName === "IFRAME";
}, si = function(e) {
  return e.tagName === "STYLE";
}, bh = function(e) {
  return e.tagName === "SCRIPT";
}, dt = function(e) {
  return e.tagName === "TEXTAREA";
}, ut = function(e) {
  return e.tagName === "SELECT";
}, js = function(e) {
  return e.tagName === "SLOT";
}, oi = function(e) {
  return e.tagName.indexOf("-") > 0;
}, yh = (
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
), ai = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, ci = {
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
}, Eh = {
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
}, Hh = {
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
  return e < A || e > t ? Fe(e, n, i.length > 0) : r.integers.reduce(function(s, o, a) {
    for (; e >= o; )
      e -= o, s += r.values[a];
    return s;
  }, "") + i;
}, $s = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, k = function(e, A, t, r, n) {
  var i = t - A + 1;
  return (e < 0 ? "-" : "") + ($s(Math.abs(e), i, r, function(s) {
    return M(Math.floor(s % i) + A);
  }) + n);
}, TA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return $s(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, ZA = 1, mA = 2, bA = 4, ue = 8, UA = function(e, A, t, r, n, i) {
  if (e < -9999 || e > 9999)
    return Fe(e, 4, n.length > 0);
  var s = Math.abs(e), o = n;
  if (s === 0)
    return A[0] + o;
  for (var a = 0; s > 0 && a <= 4; a++) {
    var c = s % 10;
    c === 0 && q(i, ZA) && o !== "" ? o = A[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && q(i, mA) || c === 1 && a === 1 && q(i, bA) && e > 100 || c === 1 && a > 1 && q(i, ue) ? o = A[c] + (a > 0 ? t[a - 1] : "") + o : c === 1 && a > 0 && (o = t[a - 1] + o), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + o;
}, li = "十百千萬", Bi = "拾佰仟萬", di = "マイナス", Jt = "마이너스", Fe = function(e, A, t) {
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
      return _A(e, 1, 3999, ai, 3, r).toLowerCase();
    case 7:
      return _A(e, 1, 3999, ai, 3, r);
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
      return _A(e, 1, 9999, ci, 3, r);
    case 35:
      return _A(e, 1, 9999, ci, 3, r).toLowerCase();
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
      return UA(e, "零一二三四五六七八九", li, "負", n, mA | bA | ue);
    case 47:
      return UA(e, "零壹貳參肆伍陸柒捌玖", Bi, "負", n, ZA | mA | bA | ue);
    case 42:
      return UA(e, "零一二三四五六七八九", li, "负", n, mA | bA | ue);
    case 41:
      return UA(e, "零壹贰叁肆伍陆柒捌玖", Bi, "负", n, ZA | mA | bA | ue);
    case 26:
      return UA(e, "〇一二三四五六七八九", "十百千万", di, n, 0);
    case 25:
      return UA(e, "零壱弐参四伍六七八九", "拾百千万", di, n, ZA | mA | bA);
    case 31:
      return UA(e, "영일이삼사오육칠팔구", "십백천만", Jt, i, ZA | mA | bA);
    case 33:
      return UA(e, "零一二三四五六七八九", "十百千萬", Jt, i, 0);
    case 32:
      return UA(e, "零壹貳參四五六七八九", "拾百千", Jt, i, ZA | mA | bA);
    case 18:
      return k(e, 2406, 2415, !0, r);
    case 20:
      return _A(e, 1, 19999, Hh, 3, r);
    case 21:
      return k(e, 2790, 2799, !0, r);
    case 22:
      return k(e, 2662, 2671, !0, r);
    case 22:
      return _A(e, 1, 10999, Eh, 3, r);
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
}, Ao = "data-html2canvas-ignore", ui = (
  /** @class */
  (function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new yh(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = Ih(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, o = n.contentWindow, a = o.document, c = Kh(n).then(function() {
        return Z(r, void 0, void 0, function() {
          var l, B;
          return W(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(kh), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), l = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                d.sent(), d.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Lh(a)] : [3, 4];
              case 3:
                d.sent(), d.label = 4;
              case 4:
                return typeof l == "function" ? [2, Promise.resolve().then(function() {
                  return l(a, B);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return a.open(), a.write(Th(document.doctype) + "<html></html>"), Dh(this.referenceElement.ownerDocument, i, s), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
    }, e.prototype.createElementClone = function(A) {
      if (wr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Zs(A))
        return this.createCanvasClone(A);
      if (ii(A))
        return this.createVideoClone(A);
      if (si(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return Ur(t) && (Ur(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), oi(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return Wt(A.style, t), t;
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
      (!$A(t) || !bh(t) && !t.hasAttribute(Ao) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !$A(t) || !si(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling)
        if ($A(i) && js(i) && typeof i.assignedNodes == "function") {
          var s = i.assignedNodes();
          s.length && s.forEach(function(o) {
            return n.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (Ws(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && $A(A) && (pr(A) || tt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
        this.referenceElement === A && pr(n) && (this.clonedReferenceElement = n), Kr(n) && Rh(n);
        var a = this.counters.parse(new Pn(this.context, i)), c = this.resolvePseudoContent(A, n, s, Ce.BEFORE);
        oi(A) && (t = !0), ii(A) || this.cloneChildNodes(A, n, t), c && n.insertBefore(c, n.firstChild);
        var l = this.resolvePseudoContent(A, n, o, Ce.AFTER);
        return l && n.appendChild(l), this.counters.pop(a), (i && (this.options.copyStyles || tt(A)) && !zs(A) || t) && Wt(i, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (dt(A) || ut(A)) && (dt(n) || ut(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var i = this;
      if (r) {
        var s = r.content, o = t.ownerDocument;
        if (!(!o || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Pn(this.context, r));
          var a = new Uu(this.context, r), c = o.createElement("html2canvaspseudoelement");
          Wt(r, c), a.content.forEach(function(B) {
            if (B.type === 0)
              c.appendChild(o.createTextNode(B.value));
            else if (B.type === 22) {
              var d = o.createElement("img");
              d.src = B.value, d.style.opacity = "1", c.appendChild(d);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var g = B.values.filter(K);
                g.length && c.appendChild(o.createTextNode(A.getAttribute(g[0].value) || ""));
              } else if (B.name === "counter") {
                var u = B.values.filter(ee), f = u[0], m = u[1];
                if (f && K(f)) {
                  var Q = i.counters.getCounterValue(f.value), h = m && K(m) ? fr.parse(i.context, m.value) : 3;
                  c.appendChild(o.createTextNode(Fe(Q, h, !1)));
                }
              } else if (B.name === "counters") {
                var v = B.values.filter(ee), f = v[0], U = v[1], m = v[2];
                if (f && K(f)) {
                  var F = i.counters.getCounterValues(f.value), w = m && K(m) ? fr.parse(i.context, m.value) : 3, E = U && U.type === 0 ? U.value : "", y = F.map(function(N) {
                    return Fe(N, w, !1);
                  }).join(E);
                  c.appendChild(o.createTextNode(y));
                }
              }
            } else if (B.type === 20)
              switch (B.value) {
                case "open-quote":
                  c.appendChild(o.createTextNode(Gn(a.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  c.appendChild(o.createTextNode(Gn(a.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  c.appendChild(o.createTextNode(B.value));
              }
          }), c.className = Fr + " " + vr;
          var l = n === Ce.BEFORE ? " " + Fr : " " + vr;
          return tt(t) ? t.className.baseValue += l : t.className += l, c;
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
var Ih = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(Ao, "true"), e.body.appendChild(t), t;
}, xh = function(e) {
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
}, Lh = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(xh));
}, Kh = function(e) {
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
}, Sh = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Wt = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Sh.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Th = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Dh = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, kh = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Mh = ":before", Oh = ":after", Fr = "___html2canvas___pseudoelement_before", vr = "___html2canvas___pseudoelement_after", hi = `{
    content: "" !important;
    display: none !important;
}`, Rh = function(e) {
  qh(e, "." + Fr + Mh + hi + `
         .` + vr + Oh + hi);
}, qh = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, eo = (
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
), Vh = (
  /** @class */
  (function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (Zt(A) || _h(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Z(this, void 0, void 0, function() {
        var t, r, n, i, s = this;
        return W(this, function(o) {
          switch (o.label) {
            case 0:
              return t = eo.isSameOrigin(A), r = !Yt(A) && this._options.useCORS === !0 && G.SUPPORT_CORS_IMAGES && !t, n = !Yt(A) && !t && !Zt(A) && typeof this._options.proxy == "string" && G.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Yt(A) && !Zt(A) && !n && !r ? [
                2
                /*return*/
              ] : (i = A, n ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = o.sent(), o.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(a, c) {
                var l = new Image();
                l.onload = function() {
                  return a(l);
                }, l.onerror = c, (Xh(i) || r) && (l.crossOrigin = "anonymous"), l.src = i, l.complete === !0 && setTimeout(function() {
                  return a(l);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return c("Timed out (" + s._options.imageTimeout + "ms) loading image");
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
        var c = r.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r + c + "url=" + encodeURIComponent(A) + "&responseType=" + o), o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o), t._options.imageTimeout) {
          var l = t._options.imageTimeout;
          a.timeout = l, a.ontimeout = function() {
            return s("Timed out (" + l + "ms) proxying " + n);
          };
        }
        a.send();
      });
    }, e;
  })()
), Nh = /^data:image\/svg\+xml/i, Gh = /^data:image\/.*;base64,/i, Ph = /^data:image\/.*/i, _h = function(e) {
  return G.SUPPORT_SVG_DRAWING || !Jh(e);
}, Yt = function(e) {
  return Ph.test(e);
}, Xh = function(e) {
  return Gh.test(e);
}, Zt = function(e) {
  return e.substr(0, 4) === "blob";
}, Jh = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Nh.test(e);
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
}, _e = (
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
}, Wh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = Be(t.borderTopLeftRadius, r.width, r.height), i = n[0], s = n[1], o = Be(t.borderTopRightRadius, r.width, r.height), a = o[0], c = o[1], l = Be(t.borderBottomRightRadius, r.width, r.height), B = l[0], d = l[1], g = Be(t.borderBottomLeftRadius, r.width, r.height), u = g[0], f = g[1], m = [];
      m.push((i + a) / r.width), m.push((u + B) / r.width), m.push((s + f) / r.height), m.push((c + d) / r.height);
      var Q = Math.max.apply(Math, m);
      Q > 1 && (i /= Q, s /= Q, a /= Q, c /= Q, B /= Q, d /= Q, u /= Q, f /= Q);
      var h = r.width - a, v = r.height - d, U = r.width - B, F = r.height - f, w = t.borderTopWidth, E = t.borderRightWidth, y = t.borderBottomWidth, b = t.borderLeftWidth, D = S(t.paddingTop, A.bounds.width), N = S(t.paddingRight, A.bounds.width), _ = S(t.paddingBottom, A.bounds.width), x = S(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + b / 3, r.top + w / 3, i - b / 3, s - w / 3, L.TOP_LEFT) : new C(r.left + b / 3, r.top + w / 3), this.topRightBorderDoubleOuterBox = i > 0 || s > 0 ? T(r.left + h, r.top + w / 3, a - E / 3, c - w / 3, L.TOP_RIGHT) : new C(r.left + r.width - E / 3, r.top + w / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || d > 0 ? T(r.left + U, r.top + v, B - E / 3, d - y / 3, L.BOTTOM_RIGHT) : new C(r.left + r.width - E / 3, r.top + r.height - y / 3), this.bottomLeftBorderDoubleOuterBox = u > 0 || f > 0 ? T(r.left + b / 3, r.top + F, u - b / 3, f - y / 3, L.BOTTOM_LEFT) : new C(r.left + b / 3, r.top + r.height - y / 3), this.topLeftBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + b * 2 / 3, r.top + w * 2 / 3, i - b * 2 / 3, s - w * 2 / 3, L.TOP_LEFT) : new C(r.left + b * 2 / 3, r.top + w * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || s > 0 ? T(r.left + h, r.top + w * 2 / 3, a - E * 2 / 3, c - w * 2 / 3, L.TOP_RIGHT) : new C(r.left + r.width - E * 2 / 3, r.top + w * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || d > 0 ? T(r.left + U, r.top + v, B - E * 2 / 3, d - y * 2 / 3, L.BOTTOM_RIGHT) : new C(r.left + r.width - E * 2 / 3, r.top + r.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = u > 0 || f > 0 ? T(r.left + b * 2 / 3, r.top + F, u - b * 2 / 3, f - y * 2 / 3, L.BOTTOM_LEFT) : new C(r.left + b * 2 / 3, r.top + r.height - y * 2 / 3), this.topLeftBorderStroke = i > 0 || s > 0 ? T(r.left + b / 2, r.top + w / 2, i - b / 2, s - w / 2, L.TOP_LEFT) : new C(r.left + b / 2, r.top + w / 2), this.topRightBorderStroke = i > 0 || s > 0 ? T(r.left + h, r.top + w / 2, a - E / 2, c - w / 2, L.TOP_RIGHT) : new C(r.left + r.width - E / 2, r.top + w / 2), this.bottomRightBorderStroke = B > 0 || d > 0 ? T(r.left + U, r.top + v, B - E / 2, d - y / 2, L.BOTTOM_RIGHT) : new C(r.left + r.width - E / 2, r.top + r.height - y / 2), this.bottomLeftBorderStroke = u > 0 || f > 0 ? T(r.left + b / 2, r.top + F, u - b / 2, f - y / 2, L.BOTTOM_LEFT) : new C(r.left + b / 2, r.top + r.height - y / 2), this.topLeftBorderBox = i > 0 || s > 0 ? T(r.left, r.top, i, s, L.TOP_LEFT) : new C(r.left, r.top), this.topRightBorderBox = a > 0 || c > 0 ? T(r.left + h, r.top, a, c, L.TOP_RIGHT) : new C(r.left + r.width, r.top), this.bottomRightBorderBox = B > 0 || d > 0 ? T(r.left + U, r.top + v, B, d, L.BOTTOM_RIGHT) : new C(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = u > 0 || f > 0 ? T(r.left, r.top + F, u, f, L.BOTTOM_LEFT) : new C(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || s > 0 ? T(r.left + b, r.top + w, Math.max(0, i - b), Math.max(0, s - w), L.TOP_LEFT) : new C(r.left + b, r.top + w), this.topRightPaddingBox = a > 0 || c > 0 ? T(r.left + Math.min(h, r.width - E), r.top + w, h > r.width + E ? 0 : Math.max(0, a - E), Math.max(0, c - w), L.TOP_RIGHT) : new C(r.left + r.width - E, r.top + w), this.bottomRightPaddingBox = B > 0 || d > 0 ? T(r.left + Math.min(U, r.width - b), r.top + Math.min(v, r.height - y), Math.max(0, B - E), Math.max(0, d - y), L.BOTTOM_RIGHT) : new C(r.left + r.width - E, r.top + r.height - y), this.bottomLeftPaddingBox = u > 0 || f > 0 ? T(r.left + b, r.top + Math.min(F, r.height - y), Math.max(0, u - b), Math.max(0, f - y), L.BOTTOM_LEFT) : new C(r.left + b, r.top + r.height - y), this.topLeftContentBox = i > 0 || s > 0 ? T(r.left + b + x, r.top + w + D, Math.max(0, i - (b + x)), Math.max(0, s - (w + D)), L.TOP_LEFT) : new C(r.left + b + x, r.top + w + D), this.topRightContentBox = a > 0 || c > 0 ? T(r.left + Math.min(h, r.width + b + x), r.top + w + D, h > r.width + b + x ? 0 : a - b + x, c - (w + D), L.TOP_RIGHT) : new C(r.left + r.width - (E + N), r.top + w + D), this.bottomRightContentBox = B > 0 || d > 0 ? T(r.left + Math.min(U, r.width - (b + x)), r.top + Math.min(v, r.height + w + D), Math.max(0, B - (E + N)), d - (y + _), L.BOTTOM_RIGHT) : new C(r.left + r.width - (E + N), r.top + r.height - (y + _)), this.bottomLeftContentBox = u > 0 || f > 0 ? T(r.left + b + x, r.top + F, Math.max(0, u - (b + x)), f - (y + _), L.BOTTOM_LEFT) : new C(r.left + b + x, r.top + r.height - (y + _));
    }
    return e;
  })()
), L;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(L || (L = {}));
var T = function(e, A, t, r, n) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), s = t * i, o = r * i, a = e + t, c = A + r;
  switch (n) {
    case L.TOP_LEFT:
      return new _e(new C(e, c), new C(e, c - o), new C(a - s, A), new C(a, A));
    case L.TOP_RIGHT:
      return new _e(new C(e, A), new C(e + s, A), new C(a, c - o), new C(a, c));
    case L.BOTTOM_RIGHT:
      return new _e(new C(a, A), new C(a, A + o), new C(e + s, c), new C(e, c));
    case L.BOTTOM_LEFT:
    default:
      return new _e(new C(a, c), new C(a - s, c), new C(e, A + o), new C(e, A));
  }
}, ht = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Yh = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, gt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Zh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  })()
), Xe = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  })()
), zh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  })()
), jh = function(e) {
  return e.type === 0;
}, to = function(e) {
  return e.type === 1;
}, $h = function(e) {
  return e.type === 2;
}, gi = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Ag = function(e, A, t, r, n) {
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
}, ro = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  })()
), no = (
  /** @class */
  (function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Wh(this.container), this.container.styles.opacity < 1 && this.effects.push(new zh(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new Zh(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = ht(this.curves), o = gt(this.curves);
        gi(s, o) ? this.effects.push(new Xe(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new Xe(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Xe(
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
          return !to(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = ht(r.curves), o = gt(r.curves);
            gi(s, o) || n.unshift(new Xe(
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
), mr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var i = q(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = q(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new no(n, e);
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
      var c = i || n.styles.isPositioned() ? t : A, l = new ro(o);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var B = n.styles.zIndex.order;
        if (B < 0) {
          var d = 0;
          c.negativeZIndex.some(function(u, f) {
            return B > u.element.container.styles.zIndex.order ? (d = f, !1) : d > 0;
          }), c.negativeZIndex.splice(d, 0, l);
        } else if (B > 0) {
          var g = 0;
          c.positiveZIndex.some(function(u, f) {
            return B >= u.element.container.styles.zIndex.order ? (g = f + 1, !1) : g > 0;
          }), c.positiveZIndex.splice(g, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        n.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      mr(o, l, i ? l : t, a);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), mr(o, A, t, a);
    q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && io(n, a);
  });
}, io = function(e, A) {
  for (var t = e instanceof Cr ? e.start : 1, r = e instanceof Cr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var i = A[n];
    i.container instanceof Ns && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Fe(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, eg = function(e) {
  var A = new no(e, null), t = new ro(A), r = [];
  return mr(A, t, t, r), io(A.container, r), t;
}, fi = function(e, A) {
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
}, tg = function(e, A) {
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
}, rg = function(e, A) {
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
}, ng = function(e, A) {
  switch (A) {
    case 0:
      return Je(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Je(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Je(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    default:
      return Je(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Je = function(e, A) {
  var t = [];
  return rA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), rA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, iA = function(e, A, t, r) {
  var n = [];
  return rA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), rA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), rA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), rA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, so = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, ft = function(e) {
  var A = e.styles, t = e.bounds, r = S(A.paddingLeft, t.width), n = S(A.paddingRight, t.width), i = S(A.paddingTop, t.width), s = S(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + i + s));
}, ig = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? ft(A) : so(A);
}, sg = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? ft(A) : so(A);
}, zt = function(e, A, t) {
  var r = ig(zA(e.styles.backgroundOrigin, A), e), n = sg(zA(e.styles.backgroundClip, A), e), i = og(zA(e.styles.backgroundSize, A), t, r), s = i[0], o = i[1], a = Be(zA(e.styles.backgroundPosition, A), r.width - s, r.height - o), c = ag(zA(e.styles.backgroundRepeat, A), a, i, r, n), l = Math.round(r.left + a[0]), B = Math.round(r.top + a[1]);
  return [c, l, B, s, o];
}, JA = function(e) {
  return K(e) && e.value === Ae.AUTO;
}, We = function(e) {
  return typeof e == "number";
}, og = function(e, A, t) {
  var r = A[0], n = A[1], i = A[2], s = e[0], o = e[1];
  if (!s)
    return [0, 0];
  if (R(s) && o && R(o))
    return [S(s, t.width), S(o, t.height)];
  var a = We(i);
  if (K(s) && (s.value === Ae.CONTAIN || s.value === Ae.COVER)) {
    if (We(i)) {
      var c = t.width / t.height;
      return c < i != (s.value === Ae.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var l = We(r), B = We(n), d = l || B;
  if (JA(s) && (!o || JA(o))) {
    if (l && B)
      return [r, n];
    if (!a && !d)
      return [t.width, t.height];
    if (d && a) {
      var g = l ? r : n * i, u = B ? n : r / i;
      return [g, u];
    }
    var f = l ? r : t.width, m = B ? n : t.height;
    return [f, m];
  }
  if (a) {
    var Q = 0, h = 0;
    return R(s) ? Q = S(s, t.width) : R(o) && (h = S(o, t.height)), JA(s) ? Q = h * i : (!o || JA(o)) && (h = Q / i), [Q, h];
  }
  var v = null, U = null;
  if (R(s) ? v = S(s, t.width) : o && R(o) && (U = S(o, t.height)), v !== null && (!o || JA(o)) && (U = l && B ? v / r * n : t.height), U !== null && JA(s) && (v = l && B ? U / n * r : t.width), v !== null && U !== null)
    return [v, U];
  throw new Error("Unable to calculate background-size for element");
}, zA = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, ag = function(e, A, t, r, n) {
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
}, cg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", wi = "Hidden Text", lg = (
  /** @class */
  (function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = cg, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = A, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(wi)), r.appendChild(i), r.appendChild(n);
      var o = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(wi)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: o, middle: a };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  })()
), oo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  })()
), Bg = 1e4, dg = (
  /** @class */
  (function(e) {
    BA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new lg(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), $h(t) && (this.ctx.globalAlpha = t.opacity), jh(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), to(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
        var s = xr(t.text);
        s.reduce(function(o, a) {
          return i.ctx.fillText(a, o, t.bounds.top + n), o + i.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = wg(t.fontFamily).join(", "), i = me(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return Z(this, void 0, void 0, function() {
        var n, i, s, o, a, c, l, B, d = this;
        return W(this, function(g) {
          return n = this.createFontStyle(r), i = n[0], s = n[1], o = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(s, o), c = a.baseline, l = a.middle, B = r.paintOrder, t.textBounds.forEach(function(u) {
            B.forEach(function(f) {
              switch (f) {
                case 0:
                  d.ctx.fillStyle = V(r.color), d.renderTextWithLetterSpacing(u, r.letterSpacing, c);
                  var m = r.textShadow;
                  m.length && u.text.trim().length && (m.slice(0).reverse().forEach(function(Q) {
                    d.ctx.shadowColor = V(Q.color), d.ctx.shadowOffsetX = Q.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = Q.offsetY.number * d.options.scale, d.ctx.shadowBlur = Q.blur.number, d.renderTextWithLetterSpacing(u, r.letterSpacing, c);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = V(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(Q) {
                    switch (Q) {
                      case 1:
                        d.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top + c), u.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top), u.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(u.bounds.left, Math.ceil(u.bounds.top + l), u.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && u.text.trim().length && (d.ctx.strokeStyle = V(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(u.text, u.bounds.left, u.bounds.top + c)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var i = ft(t), s = gt(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, i, s, o, a, h, h, c, l, B, d, U, g, u, F, f, m, Q, h, v, U, F;
        return W(this, function(w) {
          switch (w.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, i = r.styles, s = 0, o = r.textNodes, w.label = 1;
            case 1:
              return s < o.length ? (a = o[s], [4, this.renderTextNode(a, i)]) : [3, 4];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(r instanceof Rs)) return [3, 8];
              w.label = 5;
            case 5:
              return w.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return h = w.sent(), this.renderReplacedElement(r, n, h), [3, 8];
            case 7:
              return w.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof qs && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Vs)) return [3, 12];
              w.label = 9;
            case 9:
              return w.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return h = w.sent(), this.renderReplacedElement(r, n, h), [3, 12];
            case 11:
              return w.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof _s && r.tree ? (c = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, c.render(r.tree)]) : [3, 14];
            case 13:
              l = w.sent(), r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), w.label = 14;
            case 14:
              if (r instanceof Lr && (B = Math.min(r.bounds.width, r.bounds.height), r.type === lt ? r.checked && (this.ctx.save(), this.path([
                new C(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79),
                new C(r.bounds.left + B * 0.16, r.bounds.top + B * 0.5549),
                new C(r.bounds.left + B * 0.27347, r.bounds.top + B * 0.44071),
                new C(r.bounds.left + B * 0.39694, r.bounds.top + B * 0.5649),
                new C(r.bounds.left + B * 0.72983, r.bounds.top + B * 0.23),
                new C(r.bounds.left + B * 0.84, r.bounds.top + B * 0.34085),
                new C(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = V(ni), this.ctx.fill(), this.ctx.restore()) : r.type === Bt && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + B / 2, r.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = V(ni), this.ctx.fill(), this.ctx.restore())), ug(r) && r.value.length) {
                switch (d = this.createFontStyle(i), U = d[0], g = d[1], u = this.fontMetrics.getMetrics(U, g).baseline, this.ctx.font = U, this.ctx.fillStyle = V(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = gg(r.styles.textAlign), F = ft(r), f = 0, r.styles.textAlign) {
                  case 1:
                    f += F.width / 2;
                    break;
                  case 2:
                    f += F.width;
                    break;
                }
                m = F.add(f, 0, 0, -F.height / 2 + 1), this.ctx.save(), this.path([
                  new C(F.left, F.top),
                  new C(F.left + F.width, F.top),
                  new C(F.left + F.width, F.top + F.height),
                  new C(F.left, F.top + F.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Qe(r.value, m), i.letterSpacing, u), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!q(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (Q = r.styles.listStyleImage, Q.type !== 0) return [3, 18];
              h = void 0, v = Q.url, w.label = 15;
            case 15:
              return w.trys.push([15, 17, , 18]), [4, this.context.cache.match(v)];
            case 16:
              return h = w.sent(), this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top), [3, 18];
            case 17:
              return w.sent(), this.context.logger.error("Error loading list-style-image " + v), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (U = this.createFontStyle(i)[0], this.ctx.font = U, this.ctx.fillStyle = V(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", F = new vA(r.bounds.left, r.bounds.top + S(r.styles.paddingTop, r.bounds.width), r.bounds.width, Vn(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Qe(t.listValue, F), i.letterSpacing, Vn(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), w.label = 20;
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
        var r, n, Q, i, s, Q, o, a, Q, c, l, Q, B, d, Q, g, u, Q, f, m, Q;
        return W(this, function(h) {
          switch (h.label) {
            case 0:
              if (q(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              h.sent(), r = 0, n = t.negativeZIndex, h.label = 2;
            case 2:
              return r < n.length ? (Q = n[r], [4, this.renderStack(Q)]) : [3, 5];
            case 3:
              h.sent(), h.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              h.sent(), i = 0, s = t.nonInlineLevel, h.label = 7;
            case 7:
              return i < s.length ? (Q = s[i], [4, this.renderNode(Q)]) : [3, 10];
            case 8:
              h.sent(), h.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, h.label = 11;
            case 11:
              return o < a.length ? (Q = a[o], [4, this.renderStack(Q)]) : [3, 14];
            case 12:
              h.sent(), h.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              c = 0, l = t.nonPositionedInlineLevel, h.label = 15;
            case 15:
              return c < l.length ? (Q = l[c], [4, this.renderStack(Q)]) : [3, 18];
            case 16:
              h.sent(), h.label = 17;
            case 17:
              return c++, [3, 15];
            case 18:
              B = 0, d = t.inlineLevel, h.label = 19;
            case 19:
              return B < d.length ? (Q = d[B], [4, this.renderNode(Q)]) : [3, 22];
            case 20:
              h.sent(), h.label = 21;
            case 21:
              return B++, [3, 19];
            case 22:
              g = 0, u = t.zeroOrAutoZIndexOrTransformedOrOpacity, h.label = 23;
            case 23:
              return g < u.length ? (Q = u[g], [4, this.renderStack(Q)]) : [3, 26];
            case 24:
              h.sent(), h.label = 25;
            case 25:
              return g++, [3, 23];
            case 26:
              f = 0, m = t.positiveZIndex, h.label = 27;
            case 27:
              return f < m.length ? (Q = m[f], [4, this.renderStack(Q)]) : [3, 30];
            case 28:
              h.sent(), h.label = 29;
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
        return W(this, function(c) {
          switch (c.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(l) {
                var B, d, g, D, X, J, x, O, y, u, D, X, J, x, O, f, m, Q, h, v, U, F, w, E, y, b, D, N, _, x, O, sA, X, J, wA, j, dA, QA, CA, oA, aA, $;
                return W(this, function(uA) {
                  switch (uA.label) {
                    case 0:
                      if (l.type !== 0) return [3, 5];
                      B = void 0, d = l.url, uA.label = 1;
                    case 1:
                      return uA.trys.push([1, 3, , 4]), [4, i.context.cache.match(d)];
                    case 2:
                      return B = uA.sent(), [3, 4];
                    case 3:
                      return uA.sent(), i.context.logger.error("Error loading background-image " + d), [3, 4];
                    case 4:
                      return B && (g = zt(t, r, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), D = g[0], X = g[1], J = g[2], x = g[3], O = g[4], y = i.ctx.createPattern(i.resizeImage(B, x, O), "repeat"), i.renderRepeat(D, y, X, J)), [3, 6];
                    case 5:
                      jB(l) ? (u = zt(t, r, [null, null, null]), D = u[0], X = u[1], J = u[2], x = u[3], O = u[4], f = JB(l.angle, x, O), m = f[0], Q = f[1], h = f[2], v = f[3], U = f[4], F = document.createElement("canvas"), F.width = x, F.height = O, w = F.getContext("2d"), E = w.createLinearGradient(Q, v, h, U), Rn(l.stops, m).forEach(function(SA) {
                        return E.addColorStop(SA.stop, V(SA.color));
                      }), w.fillStyle = E, w.fillRect(0, 0, x, O), x > 0 && O > 0 && (y = i.ctx.createPattern(F, "repeat"), i.renderRepeat(D, y, X, J))) : $B(l) && (b = zt(t, r, [
                        null,
                        null,
                        null
                      ]), D = b[0], N = b[1], _ = b[2], x = b[3], O = b[4], sA = l.position.length === 0 ? [Er] : l.position, X = S(sA[0], x), J = S(sA[sA.length - 1], O), wA = WB(l, X, J, x, O), j = wA[0], dA = wA[1], j > 0 && dA > 0 && (QA = i.ctx.createRadialGradient(N + X, _ + J, 0, N + X, _ + J, j), Rn(l.stops, j * 2).forEach(function(SA) {
                        return QA.addColorStop(SA.stop, V(SA.color));
                      }), i.path(D), i.ctx.fillStyle = QA, j !== dA ? (CA = t.bounds.left + 0.5 * t.bounds.width, oA = t.bounds.top + 0.5 * t.bounds.height, aA = dA / j, $ = 1 / aA, i.ctx.save(), i.ctx.translate(CA, oA), i.ctx.transform(1, 0, 0, aA, 0, 0), i.ctx.translate(-CA, -oA), i.ctx.fillRect(N, $ * (_ - oA) + oA, x, O * $), i.ctx.restore()) : i.ctx.fill())), uA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, s = 0, o = t.styles.backgroundImage.slice(0).reverse(), c.label = 1;
            case 1:
              return s < o.length ? (a = o[s], [5, n(a)]) : [3, 4];
            case 2:
              c.sent(), c.label = 3;
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
          return this.path(fi(n, r)), this.ctx.fillStyle = V(t), this.ctx.fill(), [
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
              return s = tg(i, n), this.path(s), this.ctx.fillStyle = V(t), this.ctx.fill(), o = rg(i, n), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Z(this, void 0, void 0, function() {
        var r, n, i, s, o, a, c, l, B = this;
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
              ], s = hg(zA(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), LA(r.backgroundColor) || (this.ctx.fillStyle = V(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                B.ctx.save();
                var u = ht(t.curves), f = g.inset ? 0 : Bg, m = Ag(u, -f + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (B.path(u), B.ctx.clip(), B.mask(m)) : (B.mask(u), B.ctx.clip(), B.path(m)), B.ctx.shadowOffsetX = g.offsetX.number + f, B.ctx.shadowOffsetY = g.offsetY.number, B.ctx.shadowColor = V(g.color), B.ctx.shadowBlur = g.blur.number, B.ctx.fillStyle = g.inset ? V(g.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), d.label = 2;
            case 2:
              o = 0, a = 0, c = i, d.label = 3;
            case 3:
              return a < c.length ? (l = c[a], l.style !== 0 && !LA(l.color) && l.width > 0 ? l.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                o,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return d.sent(), [3, 11];
            case 5:
              return l.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                o,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return d.sent(), [3, 11];
            case 7:
              return l.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, o, t.curves)];
            case 8:
              return d.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(l.color, o, t.curves)];
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
        var o, a, c, l, B, d, g, u, f, m, Q, h, v, U, F, w, F, w;
        return W(this, function(E) {
          return this.ctx.save(), o = ng(i, n), a = fi(i, n), s === 2 && (this.path(a), this.ctx.clip()), rA(a[0]) ? (c = a[0].start.x, l = a[0].start.y) : (c = a[0].x, l = a[0].y), rA(a[1]) ? (B = a[1].end.x, d = a[1].end.y) : (B = a[1].x, d = a[1].y), n === 0 || n === 2 ? g = Math.abs(c - B) : g = Math.abs(l - d), this.ctx.beginPath(), s === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), u = r < 3 ? r * 3 : r * 2, f = r < 3 ? r * 2 : r, s === 3 && (u = r, f = r), m = !0, g <= u * 2 ? m = !1 : g <= u * 2 + f ? (Q = g / (2 * u + f), u *= Q, f *= Q) : (h = Math.floor((g + f) / (u + f)), v = (g - h * u) / (h - 1), U = (g - (h + 1) * u) / h, f = U <= 0 || Math.abs(f - v) < Math.abs(f - U) ? v : U), m && (s === 3 ? this.ctx.setLineDash([0, u + f]) : this.ctx.setLineDash([u, f])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = V(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (rA(a[0]) && (F = a[3], w = a[0], this.ctx.beginPath(), this.formatPath([new C(F.end.x, F.end.y), new C(w.start.x, w.start.y)]), this.ctx.stroke()), rA(a[1]) && (F = a[1], w = a[2], this.ctx.beginPath(), this.formatPath([new C(F.end.x, F.end.y), new C(w.start.x, w.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = eg(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  })(oo)
), ug = function(e) {
  return e instanceof Ps || e instanceof Gs ? !0 : e instanceof Lr && e.type !== Bt && e.type !== lt;
}, hg = function(e, A) {
  switch (e) {
    case 0:
      return ht(A);
    case 2:
      return Yh(A);
    default:
      return gt(A);
  }
}, gg = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, fg = ["-apple-system", "system-ui"], wg = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return fg.indexOf(A) === -1;
  }) : e;
}, Qg = (
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
              return r = Qr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Cg(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  })(oo)
), Cg = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, pg = (
  /** @class */
  (function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, ye([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, ye([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, ye([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, ye([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  })()
), Ug = (
  /** @class */
  (function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new pg({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new Vh(this, A);
    }
    return e.instanceCount = 1, e;
  })()
), Fg = function(e, A) {
  return A === void 0 && (A = {}), vg(e, A);
};
typeof window < "u" && eo.setContext(window);
var vg = function(e, A) {
  return Z(void 0, void 0, void 0, function() {
    var t, r, n, i, s, o, a, c, l, B, d, g, u, f, m, Q, h, v, U, F, E, w, E, y, b, D, N, _, x, O, sA, X, J, wA, j, dA, QA, CA, oA, aA;
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
          }, i = rr({ logging: (N = A.logging) !== null && N !== void 0 ? N : !0, cache: A.cache }, n), s = {
            windowWidth: (_ = A.windowWidth) !== null && _ !== void 0 ? _ : r.innerWidth,
            windowHeight: (x = A.windowHeight) !== null && x !== void 0 ? x : r.innerHeight,
            scrollX: (O = A.scrollX) !== null && O !== void 0 ? O : r.pageXOffset,
            scrollY: (sA = A.scrollY) !== null && sA !== void 0 ? sA : r.pageYOffset
          }, o = new vA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), a = new Ug(i, o), c = (X = A.foreignObjectRendering) !== null && X !== void 0 ? X : !1, l = {
            allowTaint: (J = A.allowTaint) !== null && J !== void 0 ? J : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), B = new ui(a, e, l), d = B.clonedReferenceElement, d ? [4, B.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = $.sent(), u = Kr(d) || mh(d) ? Al(d.ownerDocument) : wt(a, d), f = u.width, m = u.height, Q = u.left, h = u.top, v = mg(a, d, A.backgroundColor), U = {
            canvas: A.canvas,
            backgroundColor: v,
            scale: (j = (wA = A.scale) !== null && wA !== void 0 ? wA : r.devicePixelRatio) !== null && j !== void 0 ? j : 1,
            x: ((dA = A.x) !== null && dA !== void 0 ? dA : 0) + Q,
            y: ((QA = A.y) !== null && QA !== void 0 ? QA : 0) + h,
            width: (CA = A.width) !== null && CA !== void 0 ? CA : Math.ceil(f),
            height: (oA = A.height) !== null && oA !== void 0 ? oA : Math.ceil(m)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), E = new Qg(a, U), [4, E.render(d)]) : [3, 3];
        case 2:
          return F = $.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + Q + "," + h + " with size " + f + "x" + m + " using computed rendering"), a.logger.debug("Starting DOM parsing"), w = Js(a, d), v === w.styles.backgroundColor && (w.styles.backgroundColor = FA.TRANSPARENT), a.logger.debug("Starting renderer for element at " + U.x + "," + U.y + " with size " + U.width + "x" + U.height), E = new dg(a, U), [4, E.render(w)];
        case 4:
          F = $.sent(), $.label = 5;
        case 5:
          return (!((aA = A.removeContainer) !== null && aA !== void 0) || aA) && (ui.destroy(g) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, F];
      }
    });
  });
}, mg = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? fe(e, getComputedStyle(r.documentElement).backgroundColor) : FA.TRANSPARENT, i = r.body ? fe(e, getComputedStyle(r.body).backgroundColor) : FA.TRANSPARENT, s = typeof t == "string" ? fe(e, t) : t === null ? FA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? LA(n) ? LA(i) ? s : i : n : s;
};
const bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ri as AnnotationEditor,
  Ea as QaidFeedback,
  ja as captureDomScreenshot,
  Oa as captureNetworkErrors,
  Oi as compositeAnnotations,
  Wa as createVideoRecorder,
  it as drawShape,
  Ki as getSupportedMimeType,
  Za as isDomScreenshotSupported,
  Ja as isVideoRecordingSupported,
  dc as openAnnotationEditor,
  nt as rectFromPoints
};
//# sourceMappingURL=index.js.map
