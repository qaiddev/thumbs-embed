const O = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, N = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, S = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, f = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, k = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, m = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, y = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, C = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, q = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, E = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`;
function r(n, t, e) {
  const o = document.createElement(n);
  if (t)
    for (const [i, s] of Object.entries(t))
      i === "className" ? o.className = s : o.setAttribute(i, s);
  return o;
}
function U(n = 640) {
  return typeof window < "u" && window.innerWidth < n;
}
function W(n, t, e) {
  const o = e.map((s) => s.style.visibility);
  e.forEach((s) => s.style.visibility = "hidden");
  const i = document.elementFromPoint(n, t);
  return e.forEach((s, a) => s.style.visibility = o[a]), i;
}
function j(n) {
  return n ? n.hasAttribute("data-qaid-embed") || n.hasAttribute("data-qaid-embed-overlay") ? !0 : !!n.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function H(n, t = 0) {
  const e = n.getBoundingClientRect();
  return {
    x: e.left - t,
    y: e.top - t,
    width: e.width + t * 2,
    height: e.height + t * 2
  };
}
const l = 12, M = "#ef4444", B = 4, L = 0.8, A = {
  title: "Annotate screenshot",
  instructions: "Draw on the screenshot to highlight or hide details, then choose Done to attach it or Skip to send the original.",
  rectangle: "Rectangle",
  arrow: "Arrow",
  pen: "Pen",
  blur: "Blur or redact",
  undo: "Undo last",
  skip: "Skip annotation",
  done: "Done"
};
function u(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    w: Math.abs(n.x - t.x),
    h: Math.abs(n.y - t.y)
  };
}
function I(n) {
  if (n.type === "pen") return n.points.length < 2;
  const t = u(n.points[0], n.points[1]);
  return t.w < 3 && t.h < 3;
}
function T(n, t, e, o) {
  n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(e.x, e.y), n.stroke();
  const i = Math.atan2(e.y - t.y, e.x - t.x), s = Math.max(10, o * 3);
  n.beginPath(), n.moveTo(e.x, e.y), n.lineTo(
    e.x - s * Math.cos(i - Math.PI / 6),
    e.y - s * Math.sin(i - Math.PI / 6)
  ), n.moveTo(e.x, e.y), n.lineTo(
    e.x - s * Math.cos(i + Math.PI / 6),
    e.y - s * Math.sin(i + Math.PI / 6)
  ), n.stroke();
}
function P(n, t) {
  if (t.length !== 0) {
    n.beginPath(), n.moveTo(t[0].x, t[0].y);
    for (let e = 1; e < t.length; e++)
      n.lineTo(t[e].x, t[e].y);
    n.stroke();
  }
}
function x(n, t, e, o, i) {
  n.fillStyle = "rgb(15, 23, 42)", n.fillRect(t, e, o, i), n.fillStyle = "rgb(37, 47, 63)";
  for (let s = e; s < e + i; s += l)
    for (let a = t; a < t + o; a += l)
      (Math.floor((a - t) / l) + Math.floor((s - e) / l)) % 2 === 0 && n.fillRect(
        a,
        s,
        Math.min(l, t + o - a),
        Math.min(l, e + i - s)
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
      T(n, t.points[0], t.points[1], t.strokeWidth);
      break;
    case "pen":
      P(n, t.points);
      break;
    case "blur": {
      const e = u(t.points[0], t.points[1]);
      x(n, e.x, e.y, e.w, e.h);
      break;
    }
  }
  n.restore();
}
function w(n) {
  return new Promise((t, e) => {
    const o = new Image();
    o.onload = () => t(o), o.onerror = () => e(new Error("Failed to load screenshot")), o.src = n;
  });
}
async function v(n, t, e = {}) {
  const o = e.quality ?? L;
  let i;
  try {
    i = await w(n);
  } catch {
    return n;
  }
  const s = document.createElement("canvas");
  s.width = i.naturalWidth || i.width || 1, s.height = i.naturalHeight || i.height || 1;
  const a = s.getContext("2d");
  if (!a) return n;
  a.drawImage(i, 0, 0, s.width, s.height);
  for (const d of t)
    p(a, d);
  return s.toDataURL("image/webp", o);
}
let D = 0;
class g {
  shapes = [];
  tool = "rect";
  opts;
  labels;
  color;
  strokeWidth;
  uid = `qaid-annotate-${++D}`;
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
    this.opts = t, this.labels = { ...A, ...t.labels ?? {} }, this.color = t.color ?? M, this.strokeWidth = t.strokeWidth ?? B;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const t = new Promise((e) => {
      this.resolveResult = e;
    });
    return this.mount(), t;
  }
  toolButton(t, e, o) {
    const i = r("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": t,
      "aria-pressed": t === this.tool ? "true" : "false",
      "aria-label": `${o} tool`,
      title: o
    });
    return i.innerHTML = e, i;
  }
  actionButton(t, e, o, i) {
    const s = r("button", {
      type: "button",
      class: `qaid-annotate-action ${i}`,
      "data-qaid-action": t,
      "aria-label": o,
      title: o
    });
    return s.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, s;
  }
  mount() {
    const t = `${this.uid}-title`, e = `${this.uid}-desc`;
    this.container = r("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const o = r("h2", {
      id: t,
      class: "qaid-annotate-title"
    });
    o.textContent = this.labels.title;
    const i = r("p", {
      id: e,
      class: "qaid-annotate-desc"
    });
    i.textContent = this.labels.instructions;
    const s = r("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), s.appendChild(this.canvas), this.toolbar = r("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const a = r("div", { class: "qaid-annotate-tools" });
    a.appendChild(this.toolButton("rect", f, this.labels.rectangle)), a.appendChild(this.toolButton("arrow", k, this.labels.arrow)), a.appendChild(this.toolButton("pen", m, this.labels.pen)), a.appendChild(this.toolButton("blur", y, this.labels.blur)), this.undoBtn = this.actionButton("undo", C, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const d = this.actionButton("skip", E, this.labels.skip, "qaid-annotate-skip"), b = this.actionButton("done", q, this.labels.done, "qaid-annotate-done"), c = r("div", { class: "qaid-annotate-actions" });
    c.appendChild(this.undoBtn), c.appendChild(d), c.appendChild(b), this.toolbar.appendChild(a), this.toolbar.appendChild(c), this.container.appendChild(o), this.container.appendChild(i), this.container.appendChild(s), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: t,
      describedbyId: e
    }), this.opts.announce?.(this.labels.instructions), w(this.opts.dataUrl).then((h) => {
      this.img = h, this.canvas.width = h.naturalWidth || h.width || 1, this.canvas.height = h.naturalHeight || h.height || 1, this.redraw();
    }).catch(() => {
      this.img = null, this.redraw();
    });
  }
  /** Convert a pointer event's client coordinates into natural image pixels. */
  toImageCoords(t) {
    const e = this.canvas.getBoundingClientRect(), o = this.canvas.width / (e.width || this.canvas.width), i = this.canvas.height / (e.height || this.canvas.height);
    return {
      x: (t.clientX - e.left) * o,
      y: (t.clientY - e.top) * i
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
    this.tool = t, this.toolbar.querySelectorAll("[data-qaid-tool]").forEach((i) => {
      i.setAttribute(
        "aria-pressed",
        i.getAttribute("data-qaid-tool") === t ? "true" : "false"
      );
    });
    const o = this.labels[_[t]];
    this.opts.announce?.(`${o} tool selected`);
  }
  onToolbarClick = (t) => {
    const o = t.target?.closest("[data-qaid-tool],[data-qaid-action]");
    if (!o) return;
    const i = o.getAttribute("data-qaid-tool");
    if (i) {
      this.selectTool(i);
      return;
    }
    const s = o.getAttribute("data-qaid-action");
    s === "undo" ? this.undo() : s === "skip" ? this.skip() : s === "done" && this.done();
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
    if (this.current = null, I(t)) {
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
    const t = await v(this.opts.dataUrl, this.shapes, {
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
const _ = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function R(n) {
  return new g(n).open();
}
const $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: g,
  compositeAnnotations: v,
  drawShape: p,
  openAnnotationEditor: R,
  rectFromPoints: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  g as A,
  S as R,
  O as T,
  N as a,
  j as b,
  v as c,
  p as d,
  W as e,
  $ as f,
  H as g,
  U as i,
  R as o,
  u as r
};
//# sourceMappingURL=annotate-BNibaDg3.js.map
