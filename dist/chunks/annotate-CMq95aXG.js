const j = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, W = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, $ = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, H = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8M8 14h5m-9 6l3.5-3.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"/>
</svg>`, m = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, C = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, y = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, q = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, E = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, L = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, M = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`;
function r(n, t, e) {
  const o = document.createElement(n);
  if (t)
    for (const [s, i] of Object.entries(t))
      s === "className" ? o.className = i : o.setAttribute(s, i);
  return o;
}
function F(n = 640) {
  return typeof window < "u" && window.innerWidth < n;
}
function K(n, t, e) {
  const o = e.map((i) => i.style.visibility);
  e.forEach((i) => i.style.visibility = "hidden");
  const s = document.elementFromPoint(n, t);
  return e.forEach((i, a) => i.style.visibility = o[a]), s;
}
function z(n) {
  return n ? n.hasAttribute("data-qaid-embed") || n.hasAttribute("data-qaid-embed-overlay") ? !0 : !!n.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function V(n, t = 0) {
  const e = n.getBoundingClientRect();
  return {
    x: e.left - t,
    y: e.top - t,
    width: e.width + t * 2,
    height: e.height + t * 2
  };
}
const h = 12, A = "#ef4444", B = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], T = {
  "#ef4444": "red",
  "#f59e0b": "amber",
  "#22c55e": "green",
  "#3b82f6": "blue",
  "#111827": "black",
  "#ffffff": "white",
  "#6366f1": "indigo"
};
function w(n) {
  return T[n.toLowerCase()] ?? n;
}
const I = 4, D = 0.8, P = {
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
function u(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    w: Math.abs(n.x - t.x),
    h: Math.abs(n.y - t.y)
  };
}
function x(n) {
  if (n.type === "pen") return n.points.length < 2;
  const t = u(n.points[0], n.points[1]);
  return t.w < 3 && t.h < 3;
}
function _(n, t, e, o) {
  n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(e.x, e.y), n.stroke();
  const s = Math.atan2(e.y - t.y, e.x - t.x), i = Math.max(10, o * 3);
  n.beginPath(), n.moveTo(e.x, e.y), n.lineTo(
    e.x - i * Math.cos(s - Math.PI / 6),
    e.y - i * Math.sin(s - Math.PI / 6)
  ), n.moveTo(e.x, e.y), n.lineTo(
    e.x - i * Math.cos(s + Math.PI / 6),
    e.y - i * Math.sin(s + Math.PI / 6)
  ), n.stroke();
}
function O(n, t) {
  if (t.length !== 0) {
    n.beginPath(), n.moveTo(t[0].x, t[0].y);
    for (let e = 1; e < t.length; e++)
      n.lineTo(t[e].x, t[e].y);
    n.stroke();
  }
}
function R(n, t, e, o, s) {
  n.fillStyle = "rgb(15, 23, 42)", n.fillRect(t, e, o, s), n.fillStyle = "rgb(37, 47, 63)";
  for (let i = e; i < e + s; i += h)
    for (let a = t; a < t + o; a += h)
      (Math.floor((a - t) / h) + Math.floor((i - e) / h)) % 2 === 0 && n.fillRect(
        a,
        i,
        Math.min(h, t + o - a),
        Math.min(h, e + s - i)
      );
}
function p(n, t) {
  switch (n.save(), n.strokeStyle = t.color, n.fillStyle = t.color, n.lineWidth = t.strokeWidth, n.lineJoin = "round", n.lineCap = "round", t.type) {
    case "rect": {
      const e = u(t.points[0], t.points[1]);
      n.strokeRect(e.x, e.y, e.w, e.h);
      break;
    }
    case "arrow":
      _(n, t.points[0], t.points[1], t.strokeWidth);
      break;
    case "pen":
      O(n, t.points);
      break;
    case "blur": {
      const e = u(t.points[0], t.points[1]);
      R(n, e.x, e.y, e.w, e.h);
      break;
    }
  }
  n.restore();
}
function v(n) {
  return new Promise((t, e) => {
    const o = new Image();
    o.onload = () => t(o), o.onerror = () => e(new Error("Failed to load screenshot")), o.src = n;
  });
}
async function g(n, t, e = {}) {
  const o = e.quality ?? D;
  let s;
  try {
    s = await v(n);
  } catch {
    return n;
  }
  const i = document.createElement("canvas");
  i.width = s.naturalWidth || s.width || 1, i.height = s.naturalHeight || s.height || 1;
  const a = i.getContext("2d");
  if (!a) return n;
  a.drawImage(s, 0, 0, i.width, i.height);
  for (const c of t)
    p(a, c);
  return i.toDataURL("image/webp", o);
}
let N = 0;
class f {
  shapes = [];
  tool = "rect";
  opts;
  labels;
  color;
  palette;
  strokeWidth;
  uid = `qaid-annotate-${++N}`;
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
  constructor(t) {
    this.opts = t, this.labels = { ...P, ...t.labels ?? {} }, this.color = t.color ?? A, this.palette = (t.palette && t.palette.length ? t.palette : B).slice(), this.palette.some((e) => e.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = t.strokeWidth ?? I;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const t = new Promise((e) => {
      this.resolveResult = e;
    });
    return this.mount(), t;
  }
  toolButton(t, e, o) {
    const s = r("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": t,
      "aria-pressed": t === this.tool ? "true" : "false",
      "aria-label": `${o} tool`,
      title: o
    });
    return s.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, s;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(t) {
    const e = w(t), o = r("button", {
      type: "button",
      class: "qaid-annotate-swatch",
      "data-qaid-color": t,
      "aria-pressed": t.toLowerCase() === this.color.toLowerCase() ? "true" : "false",
      "aria-label": `Draw in ${e}`,
      title: e
    });
    return o.style.setProperty("--qaid-swatch", t), o;
  }
  actionButton(t, e, o, s) {
    const i = r("button", {
      type: "button",
      class: `qaid-annotate-action ${s}`,
      "data-qaid-action": t,
      "aria-label": o,
      title: o
    });
    return i.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, i;
  }
  mount() {
    const t = `${this.uid}-title`, e = `${this.uid}-desc`;
    this.container = r("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const o = r("h2", {
      id: t,
      class: "qaid-annotate-title"
    });
    o.textContent = this.labels.title;
    const s = r("p", {
      id: e,
      class: "qaid-annotate-desc"
    });
    s.textContent = this.labels.instructions;
    const i = r("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), i.appendChild(this.canvas), this.toolbar = r("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const a = r("div", { class: "qaid-annotate-tools" });
    a.appendChild(this.toolButton("rect", m, this.labels.rectangle)), a.appendChild(this.toolButton("arrow", C, this.labels.arrow)), a.appendChild(this.toolButton("pen", y, this.labels.pen)), a.appendChild(this.toolButton("blur", q, this.labels.blur));
    const c = r("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const l of this.palette) c.appendChild(this.swatchButton(l));
    this.undoBtn = this.actionButton("undo", E, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const b = this.actionButton("skip", M, this.labels.skip, "qaid-annotate-skip"), k = this.actionButton("done", L, this.labels.done, "qaid-annotate-done"), d = r("div", { class: "qaid-annotate-actions" });
    d.appendChild(this.undoBtn), d.appendChild(b), d.appendChild(k), this.toolbar.appendChild(a), this.toolbar.appendChild(c), this.toolbar.appendChild(d), this.container.appendChild(o), this.container.appendChild(s), this.container.appendChild(i), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: t,
      describedbyId: e
    }), this.opts.announce?.(this.labels.instructions), v(this.opts.dataUrl).then((l) => {
      this.img = l, this.canvas.width = l.naturalWidth || l.width || 1, this.canvas.height = l.naturalHeight || l.height || 1, this.redraw();
    }).catch(() => {
      this.img = null, this.redraw();
    });
  }
  /** Convert a pointer event's client coordinates into natural image pixels. */
  toImageCoords(t) {
    const e = this.canvas.getBoundingClientRect(), o = this.canvas.width / (e.width || this.canvas.width), s = this.canvas.height / (e.height || this.canvas.height);
    return {
      x: (t.clientX - e.left) * o,
      y: (t.clientY - e.top) * s
    };
  }
  /** Repaint the display canvas: base image (if loaded) then every shape. */
  redraw() {
    const t = this.ctx;
    if (t) {
      t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.img && t.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      for (const e of this.shapes)
        p(t, e);
      this.current && p(t, this.current);
    }
  }
  /** Select the active drawing tool and reflect it on the toolbar. */
  selectTool(t) {
    this.tool = t, this.toolbar.querySelectorAll("[data-qaid-tool]").forEach((s) => {
      s.setAttribute(
        "aria-pressed",
        s.getAttribute("data-qaid-tool") === t ? "true" : "false"
      );
    });
    const o = this.labels[S[t]];
    this.opts.announce?.(`${o} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(t) {
    this.color = t, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((o) => {
      o.setAttribute(
        "aria-pressed",
        (o.getAttribute("data-qaid-color") ?? "").toLowerCase() === t.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${w(t)} colour selected`);
  }
  onToolbarClick = (t) => {
    const o = t.target?.closest(
      "[data-qaid-tool],[data-qaid-action],[data-qaid-color]"
    );
    if (!o) return;
    const s = o.getAttribute("data-qaid-color");
    if (s) {
      this.selectColor(s);
      return;
    }
    const i = o.getAttribute("data-qaid-tool");
    if (i) {
      this.selectTool(i);
      return;
    }
    const a = o.getAttribute("data-qaid-action");
    a === "undo" ? this.undo() : a === "skip" ? this.skip() : a === "done" && this.done();
  };
  onPointerDown = (t) => {
    t.preventDefault?.(), this.drawing = !0;
    const e = this.toImageCoords(t);
    this.current = {
      type: this.tool,
      color: this.color,
      strokeWidth: this.strokeWidth,
      points: this.tool === "pen" ? [e] : [e, { ...e }]
    }, this.redraw();
  };
  onPointerMove = (t) => {
    if (!this.drawing || !this.current) return;
    const e = this.toImageCoords(t);
    this.current.type === "pen" ? this.current.points.push(e) : this.current.points[1] = e, this.redraw();
  };
  onPointerUp = () => {
    if (!this.drawing || !this.current) return;
    this.drawing = !1;
    const t = this.current;
    if (this.current = null, x(t)) {
      this.redraw();
      return;
    }
    this.shapes.push(t), this.undoBtn.disabled = !1, this.opts.announce?.("Annotation added"), this.redraw();
  };
  onKeyDown = (t) => {
    if (t.key === "Escape") {
      t.preventDefault(), this.skip();
      return;
    }
    if (t.key === "Enter") {
      const e = t.target;
      if (e?.getAttribute("data-qaid-tool") || e?.getAttribute("data-qaid-action"))
        return;
      t.preventDefault(), this.done();
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
    const t = await g(this.opts.dataUrl, this.shapes, {
      quality: this.opts.quality
    });
    this.opts.announce?.("Annotated screenshot attached"), this.settle(t);
  }
  /** Discard annotations and resolve with `null` (caller keeps the original). */
  skip() {
    this.settled || (this.opts.announce?.("Annotation skipped"), this.settle(null));
  }
  settle(t) {
    this.settled = !0, this.teardown(), this.resolveResult(t);
  }
  teardown() {
    this.toolbar.removeEventListener("click", this.onToolbarClick), this.canvas.removeEventListener("pointerdown", this.onPointerDown), this.container.removeEventListener("pointermove", this.onPointerMove), this.container.removeEventListener("pointerup", this.onPointerUp), this.container.removeEventListener("keydown", this.onKeyDown), this.opts.closeDialog?.(), this.container.remove();
  }
}
const S = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function U(n) {
  return new f(n).open();
}
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: f,
  compositeAnnotations: g,
  drawShape: p,
  openAnnotationEditor: U,
  rectFromPoints: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  L as D,
  H as F,
  $ as R,
  j as T,
  W as a,
  z as b,
  K as c,
  Y as d,
  V as g,
  F as i
};
//# sourceMappingURL=annotate-CMq95aXG.js.map
