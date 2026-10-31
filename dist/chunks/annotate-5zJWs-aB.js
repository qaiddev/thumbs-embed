import { c as r, R as v, A as m, P as q, B as y, U as k, S as x, D as C } from "./core-CL1dwdaN.js";
const E = ".qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .8125);line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:calc(var(--qaid-font-size, 16px) * .8125);font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}.qaid-annotate-colors{display:flex;gap:.25rem;align-items:center}button.qaid-annotate-swatch{width:28px;height:28px;min-width:28px;padding:0;border-radius:9999px;border:2px solid light-dark(#d1d5db,#4b5563);background:var(--qaid-swatch, #000);cursor:pointer;-webkit-appearance:none;appearance:none;transition:transform .1s,box-shadow .15s,border-color .15s}button.qaid-annotate-swatch:hover{transform:scale(1.12)}button.qaid-annotate-swatch[aria-pressed=true]{border-color:light-dark(#111827,#f9fafb);box-shadow:0 0 0 2px var(--qaid-swatch)}@media(forced-colors:active){button.qaid-annotate-swatch[aria-pressed=true]{outline:2px solid Highlight;outline-offset:1px}}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6365f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6365f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}", d = 12, L = "#ef4444", A = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], I = {
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
function f(a) {
  return I[a.toLowerCase()] ?? a;
}
const T = 4, B = 0.8, D = {
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
function u(a, t) {
  return {
    x: Math.min(a.x, t.x),
    y: Math.min(a.y, t.y),
    w: Math.abs(a.x - t.x),
    h: Math.abs(a.y - t.y)
  };
}
function P(a) {
  if (a.type === "pen") return a.points.length < 2;
  const t = u(a.points[0], a.points[1]);
  return t.w < 3 && t.h < 3;
}
function M(a, t, e, n) {
  a.beginPath(), a.moveTo(t.x, t.y), a.lineTo(e.x, e.y), a.stroke();
  const o = Math.atan2(e.y - t.y, e.x - t.x), i = Math.max(10, n * 3);
  a.beginPath(), a.moveTo(e.x, e.y), a.lineTo(
    e.x - i * Math.cos(o - Math.PI / 6),
    e.y - i * Math.sin(o - Math.PI / 6)
  ), a.moveTo(e.x, e.y), a.lineTo(
    e.x - i * Math.cos(o + Math.PI / 6),
    e.y - i * Math.sin(o + Math.PI / 6)
  ), a.stroke();
}
function R(a, t) {
  if (t.length !== 0) {
    a.beginPath(), a.moveTo(t[0].x, t[0].y);
    for (let e = 1; e < t.length; e++)
      a.lineTo(t[e].x, t[e].y);
    a.stroke();
  }
}
function S(a, t, e, n, o) {
  a.fillStyle = "rgb(15, 23, 42)", a.fillRect(t, e, n, o), a.fillStyle = "rgb(37, 47, 63)";
  for (let i = e; i < e + o; i += d)
    for (let s = t; s < t + n; s += d)
      (Math.floor((s - t) / d) + Math.floor((i - e) / d)) % 2 === 0 && a.fillRect(
        s,
        i,
        Math.min(d, t + n - s),
        Math.min(d, e + o - i)
      );
}
function p(a, t) {
  switch (a.save(), a.strokeStyle = t.color, a.fillStyle = t.color, a.lineWidth = t.strokeWidth, a.lineJoin = "round", a.lineCap = "round", t.type) {
    case "rect": {
      const e = u(t.points[0], t.points[1]);
      a.strokeRect(e.x, e.y, e.w, e.h);
      break;
    }
    case "arrow":
      M(a, t.points[0], t.points[1], t.strokeWidth);
      break;
    case "pen":
      R(a, t.points);
      break;
    case "blur": {
      const e = u(t.points[0], t.points[1]);
      S(a, e.x, e.y, e.w, e.h);
      break;
    }
  }
  a.restore();
}
function b(a) {
  return new Promise((t, e) => {
    const n = new Image();
    n.onload = () => t(n), n.onerror = () => e(new Error("Failed to load screenshot")), n.src = a;
  });
}
async function _(a, t, e = {}) {
  const n = e.quality ?? B;
  let o;
  try {
    o = await b(a);
  } catch {
    return a;
  }
  const i = document.createElement("canvas");
  i.width = o.naturalWidth || o.width || 1, i.height = o.naturalHeight || o.height || 1;
  const s = i.getContext("2d");
  if (!s) return a;
  s.drawImage(o, 0, 0, i.width, i.height);
  for (const h of t)
    p(s, h);
  return i.toDataURL("image/webp", n);
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
    this.opts = t, this.labels = { ...D, ...t.labels ?? {} }, this.color = t.color ?? L, this.palette = (t.palette && t.palette.length ? t.palette : A).slice(), this.palette.some((e) => e.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = t.strokeWidth ?? T;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const t = new Promise((e) => {
      this.resolveResult = e;
    });
    return this.mount(), t;
  }
  toolButton(t, e, n) {
    const o = r("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": t,
      "aria-pressed": t === this.tool ? "true" : "false",
      "aria-label": `${n} tool`,
      title: n
    });
    return o.innerHTML = `${e}<span class="qaid-annotate-btn-text">${n}</span>`, o;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(t) {
    const e = f(t), n = r("button", {
      type: "button",
      class: "qaid-annotate-swatch",
      "data-qaid-color": t,
      "aria-pressed": t.toLowerCase() === this.color.toLowerCase() ? "true" : "false",
      "aria-label": `Draw in ${e}`,
      title: e
    });
    return n.style.setProperty("--qaid-swatch", t), n;
  }
  actionButton(t, e, n, o) {
    const i = r("button", {
      type: "button",
      class: `qaid-annotate-action ${o}`,
      "data-qaid-action": t,
      "aria-label": n,
      title: n
    });
    return i.innerHTML = `${e}<span class="qaid-annotate-btn-text">${n}</span>`, i;
  }
  mount() {
    const t = `${this.uid}-title`, e = `${this.uid}-desc`;
    this.container = r("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const n = r("h2", {
      id: t,
      class: "qaid-annotate-title"
    });
    n.textContent = this.labels.title;
    const o = r("p", {
      id: e,
      class: "qaid-annotate-desc"
    });
    o.textContent = this.labels.instructions;
    const i = r("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), i.appendChild(this.canvas), this.toolbar = r("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const s = r("div", { class: "qaid-annotate-tools" });
    s.appendChild(this.toolButton("rect", v, this.labels.rectangle)), s.appendChild(this.toolButton("arrow", m, this.labels.arrow)), s.appendChild(this.toolButton("pen", q, this.labels.pen)), s.appendChild(this.toolButton("blur", y, this.labels.blur));
    const h = r("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const l of this.palette) h.appendChild(this.swatchButton(l));
    this.undoBtn = this.actionButton("undo", k, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const g = this.actionButton("skip", x, this.labels.skip, "qaid-annotate-skip"), w = this.actionButton("done", C, this.labels.done, "qaid-annotate-done"), c = r("div", { class: "qaid-annotate-actions" });
    c.appendChild(this.undoBtn), c.appendChild(g), c.appendChild(w), this.toolbar.appendChild(s), this.toolbar.appendChild(h), this.toolbar.appendChild(c), this.container.appendChild(n), this.container.appendChild(o), this.container.appendChild(i), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: t,
      describedbyId: e
    }), this.opts.announce?.(this.labels.instructions), b(this.opts.dataUrl).then((l) => {
      this.img = l, this.canvas.width = l.naturalWidth || l.width || 1, this.canvas.height = l.naturalHeight || l.height || 1, this.redraw();
    }).catch(() => {
      this.img = null, this.redraw();
    });
  }
  /** Convert a pointer event's client coordinates into natural image pixels. */
  toImageCoords(t) {
    const e = this.canvas.getBoundingClientRect(), n = this.canvas.width / (e.width || this.canvas.width), o = this.canvas.height / (e.height || this.canvas.height);
    return {
      x: (t.clientX - e.left) * n,
      y: (t.clientY - e.top) * o
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
    this.tool = t, this.toolbar.querySelectorAll("[data-qaid-tool]").forEach((o) => {
      o.setAttribute(
        "aria-pressed",
        o.getAttribute("data-qaid-tool") === t ? "true" : "false"
      );
    });
    const n = this.labels[O[t]];
    this.opts.announce?.(`${n} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(t) {
    this.color = t, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((n) => {
      n.setAttribute(
        "aria-pressed",
        (n.getAttribute("data-qaid-color") ?? "").toLowerCase() === t.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${f(t)} colour selected`);
  }
  onToolbarClick = (t) => {
    const n = t.target?.closest(
      "[data-qaid-tool],[data-qaid-action],[data-qaid-color]"
    );
    if (!n) return;
    const o = n.getAttribute("data-qaid-color");
    if (o) {
      this.selectColor(o);
      return;
    }
    const i = n.getAttribute("data-qaid-tool");
    if (i) {
      this.selectTool(i);
      return;
    }
    const s = n.getAttribute("data-qaid-action");
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
function $(a) {
  return new U(a).open();
}
const z = E;
export {
  U as AnnotationEditor,
  _ as compositeAnnotations,
  p as drawShape,
  $ as openAnnotationEditor,
  u as rectFromPoints,
  z as styles
};
//# sourceMappingURL=annotate-5zJWs-aB.js.map
