import { c as r, R as v, A as C, P as y, B as m, U as q, S as k, D as E } from "./core-2nGsCcZq.js";
const h = 12, L = "#ef4444", A = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], T = {
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
function b(n) {
  return T[n.toLowerCase()] ?? n;
}
const B = 4, D = 0.8, I = {
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
function P(n) {
  if (n.type === "pen") return n.points.length < 2;
  const t = u(n.points[0], n.points[1]);
  return t.w < 3 && t.h < 3;
}
function M(n, t, e, o) {
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
function R(n, t) {
  if (t.length !== 0) {
    n.beginPath(), n.moveTo(t[0].x, t[0].y);
    for (let e = 1; e < t.length; e++)
      n.lineTo(t[e].x, t[e].y);
    n.stroke();
  }
}
function S(n, t, e, o, i) {
  n.fillStyle = "rgb(15, 23, 42)", n.fillRect(t, e, o, i), n.fillStyle = "rgb(37, 47, 63)";
  for (let s = e; s < e + i; s += h)
    for (let a = t; a < t + o; a += h)
      (Math.floor((a - t) / h) + Math.floor((s - e) / h)) % 2 === 0 && n.fillRect(
        a,
        s,
        Math.min(h, t + o - a),
        Math.min(h, e + i - s)
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
      M(n, t.points[0], t.points[1], t.strokeWidth);
      break;
    case "pen":
      R(n, t.points);
      break;
    case "blur": {
      const e = u(t.points[0], t.points[1]);
      S(n, e.x, e.y, e.w, e.h);
      break;
    }
  }
  n.restore();
}
function f(n) {
  return new Promise((t, e) => {
    const o = new Image();
    o.onload = () => t(o), o.onerror = () => e(new Error("Failed to load screenshot")), o.src = n;
  });
}
async function _(n, t, e = {}) {
  const o = e.quality ?? D;
  let i;
  try {
    i = await f(n);
  } catch {
    return n;
  }
  const s = document.createElement("canvas");
  s.width = i.naturalWidth || i.width || 1, s.height = i.naturalHeight || i.height || 1;
  const a = s.getContext("2d");
  if (!a) return n;
  a.drawImage(i, 0, 0, s.width, s.height);
  for (const c of t)
    p(a, c);
  return s.toDataURL("image/webp", o);
}
let N = 0;
class U {
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
    this.opts = t, this.labels = { ...I, ...t.labels ?? {} }, this.color = t.color ?? L, this.palette = (t.palette && t.palette.length ? t.palette : A).slice(), this.palette.some((e) => e.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = t.strokeWidth ?? B;
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
    return i.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, i;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(t) {
    const e = b(t), o = r("button", {
      type: "button",
      class: "qaid-annotate-swatch",
      "data-qaid-color": t,
      "aria-pressed": t.toLowerCase() === this.color.toLowerCase() ? "true" : "false",
      "aria-label": `Draw in ${e}`,
      title: e
    });
    return o.style.setProperty("--qaid-swatch", t), o;
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
    a.appendChild(this.toolButton("rect", v, this.labels.rectangle)), a.appendChild(this.toolButton("arrow", C, this.labels.arrow)), a.appendChild(this.toolButton("pen", y, this.labels.pen)), a.appendChild(this.toolButton("blur", m, this.labels.blur));
    const c = r("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const l of this.palette) c.appendChild(this.swatchButton(l));
    this.undoBtn = this.actionButton("undo", q, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const w = this.actionButton("skip", k, this.labels.skip, "qaid-annotate-skip"), g = this.actionButton("done", E, this.labels.done, "qaid-annotate-done"), d = r("div", { class: "qaid-annotate-actions" });
    d.appendChild(this.undoBtn), d.appendChild(w), d.appendChild(g), this.toolbar.appendChild(a), this.toolbar.appendChild(c), this.toolbar.appendChild(d), this.container.appendChild(o), this.container.appendChild(i), this.container.appendChild(s), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: t,
      describedbyId: e
    }), this.opts.announce?.(this.labels.instructions), f(this.opts.dataUrl).then((l) => {
      this.img = l, this.canvas.width = l.naturalWidth || l.width || 1, this.canvas.height = l.naturalHeight || l.height || 1, this.redraw();
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
    const o = this.labels[O[t]];
    this.opts.announce?.(`${o} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(t) {
    this.color = t, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((o) => {
      o.setAttribute(
        "aria-pressed",
        (o.getAttribute("data-qaid-color") ?? "").toLowerCase() === t.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${b(t)} colour selected`);
  }
  onToolbarClick = (t) => {
    const o = t.target?.closest(
      "[data-qaid-tool],[data-qaid-action],[data-qaid-color]"
    );
    if (!o) return;
    const i = o.getAttribute("data-qaid-color");
    if (i) {
      this.selectColor(i);
      return;
    }
    const s = o.getAttribute("data-qaid-tool");
    if (s) {
      this.selectTool(s);
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
    if (this.current = null, P(t)) {
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
    const t = await _(this.opts.dataUrl, this.shapes, {
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
const O = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function $(n) {
  return new U(n).open();
}
export {
  U as AnnotationEditor,
  _ as compositeAnnotations,
  p as drawShape,
  $ as openAnnotationEditor,
  u as rectFromPoints
};
//# sourceMappingURL=annotate-BTLeFQa0.js.map
