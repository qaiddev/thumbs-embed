/**
 * Screenshot annotation / markup editor for the thumbs embed.
 *
 * After a screenshot is captured the user can draw on it — rectangles, arrows,
 * a freehand pen, and a blur/redact box — in a full-screen, focus-trapped,
 * WCAG 2.2 AA dialog rendered inside the embed's overlay shadow root. On "Done"
 * the base image and the vector shapes are composited into a fresh WebP data
 * URL (so downstream code is unchanged); on "Skip"/Escape the original is kept.
 *
 * The geometry and compositing are kept as pure-ish exported functions
 * (`drawShape`, `rectFromPoints`, `compositeAnnotations`) so they can be tested
 * without a real rendering engine — happy-dom has no raster, so tests assert on
 * spied canvas-context calls rather than pixels. The {@link AnnotationEditor}
 * controller keeps the DOM wiring thin and its interactive methods are public
 * so they can be driven directly in tests.
 */

import { createElement } from "./dom-utils";
import {
  RECTANGLE_ICON,
  ARROW_ICON,
  PENCIL_ICON,
  BLUR_ICON,
  UNDO_ICON,
  DONE_ICON,
  SKIP_ICON,
} from "./icons";

/** The four drawing tools. */
export type ShapeType = "rect" | "arrow" | "pen" | "blur";

/** A point in the screenshot's natural-pixel coordinate space. */
export interface Point {
  x: number;
  y: number;
}

/**
 * A single vector annotation. `rect`, `arrow` and `blur` use `points[0]` as the
 * drag start and `points[1]` as the drag end; `pen` uses every point in order.
 */
export interface Shape {
  type: ShapeType;
  color: string;
  strokeWidth: number;
  points: Point[];
}

/** Tile size (natural px) for the mosaic drawn by the blur/redact tool. */
const BLUR_TILE = 12;

/** Default stroke colour: a high-visibility red that reads on most screenshots. */
const DEFAULT_STROKE = "#ef4444";
/** Default stroke width in natural pixels. */
const DEFAULT_STROKE_WIDTH = 4;
/** Default WebP quality for the re-encoded composite. */
const DEFAULT_QUALITY = 0.8;

/** Human-readable labels for the toolbar / announcements (all overridable). */
export interface AnnotationLabels {
  title: string;
  instructions: string;
  rectangle: string;
  arrow: string;
  pen: string;
  blur: string;
  undo: string;
  skip: string;
  done: string;
}

const DEFAULT_LABELS: AnnotationLabels = {
  title: "Annotate screenshot",
  instructions:
    "Draw on the screenshot to highlight or hide details, then choose Done to attach it or Skip to send the original.",
  rectangle: "Rectangle",
  arrow: "Arrow",
  pen: "Pen",
  blur: "Blur or redact",
  undo: "Undo last",
  skip: "Skip annotation",
  done: "Done",
};

/**
 * Normalise two drag corners into a top-left origin plus positive width/height,
 * regardless of the direction the user dragged.
 */
export function rectFromPoints(
  a: Point,
  b: Point
): { x: number; y: number; w: number; h: number } {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    w: Math.abs(a.x - b.x),
    h: Math.abs(a.y - b.y),
  };
}

/** A drag/shape too small to be a deliberate mark (a click, not a drag). */
function isDegenerate(shape: Shape): boolean {
  if (shape.type === "pen") return shape.points.length < 2;
  const r = rectFromPoints(shape.points[0], shape.points[1]);
  return r.w < 3 && r.h < 3;
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  from: Point,
  to: Point,
  width: number
): void {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();

  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const head = Math.max(10, width * 3);
  ctx.beginPath();
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(
    to.x - head * Math.cos(angle - Math.PI / 6),
    to.y - head * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(
    to.x - head * Math.cos(angle + Math.PI / 6),
    to.y - head * Math.sin(angle + Math.PI / 6)
  );
  ctx.stroke();
}

function drawPen(ctx: CanvasRenderingContext2D, points: Point[]): void {
  if (points.length === 0) return;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
}

/**
 * Redact a region so the underlying content is GONE from the composite — not
 * merely dimmed. Both fills are fully opaque (no alpha), so nothing bleeds
 * through; the two-tone mosaic just gives it a recognisable "redacted" texture.
 * There is no real Gaussian blur (it can't be verified without a raster), and a
 * translucent wash would leave sensitive text faintly legible — so this paints
 * solid.
 */
function drawBlur(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
): void {
  ctx.fillStyle = "rgb(15, 23, 42)";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgb(37, 47, 63)";
  for (let ty = y; ty < y + h; ty += BLUR_TILE) {
    for (let tx = x; tx < x + w; tx += BLUR_TILE) {
      const checker =
        (Math.floor((tx - x) / BLUR_TILE) + Math.floor((ty - y) / BLUR_TILE)) %
          2 ===
        0;
      if (checker) {
        ctx.fillRect(
          tx,
          ty,
          Math.min(BLUR_TILE, x + w - tx),
          Math.min(BLUR_TILE, y + h - ty)
        );
      }
    }
  }
}

/**
 * Draw a single shape onto a 2D context in the shape's own (natural-pixel)
 * coordinates. Used both for the live editing preview and for the final
 * composite, so what the user sees is exactly what is submitted.
 */
export function drawShape(ctx: CanvasRenderingContext2D, shape: Shape): void {
  ctx.save();
  ctx.strokeStyle = shape.color;
  ctx.fillStyle = shape.color;
  ctx.lineWidth = shape.strokeWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  switch (shape.type) {
    case "rect": {
      const r = rectFromPoints(shape.points[0], shape.points[1]);
      ctx.strokeRect(r.x, r.y, r.w, r.h);
      break;
    }
    case "arrow":
      drawArrow(ctx, shape.points[0], shape.points[1], shape.strokeWidth);
      break;
    case "pen":
      drawPen(ctx, shape.points);
      break;
    case "blur": {
      const r = rectFromPoints(shape.points[0], shape.points[1]);
      drawBlur(ctx, r.x, r.y, r.w, r.h);
      break;
    }
  }

  ctx.restore();
}

/** Load an image from a data URL. Resolves with the element once decoded. */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = (): void => resolve(img);
    img.onerror = (): void => reject(new Error("Failed to load screenshot"));
    img.src = src;
  });
}

/**
 * Composite the base screenshot and the drawn shapes into a new WebP data URL
 * at the image's natural size. Falls back to the original data URL if the image
 * can't be loaded or a 2D context isn't available (so a submission is never
 * lost). This is intentionally standalone so it can be unit-tested in isolation.
 */
export async function compositeAnnotations(
  dataUrl: string,
  shapes: Shape[],
  opts: { quality?: number } = {}
): Promise<string> {
  const quality = opts.quality ?? DEFAULT_QUALITY;

  let img: HTMLImageElement;
  try {
    img = await loadImage(dataUrl);
  } catch {
    return dataUrl;
  }

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width || 1;
  canvas.height = img.naturalHeight || img.height || 1;

  const ctx = canvas.getContext("2d");
  if (!ctx) return dataUrl;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  for (const shape of shapes) {
    drawShape(ctx, shape);
  }

  return canvas.toDataURL("image/webp", quality);
}

/** Options for {@link AnnotationEditor} / {@link openAnnotationEditor}. */
export interface AnnotationEditorOptions {
  /** The captured screenshot as a WebP data URL. */
  dataUrl: string;
  /** Shadow root (or element) the editor is mounted into. */
  root: ShadowRoot | HTMLElement;
  /** WebP quality for the re-encoded composite. */
  quality?: number;
  /** Default stroke colour for rectangle/arrow/pen. */
  color?: string;
  /** Default stroke width. */
  strokeWidth?: number;
  /** Label overrides. */
  labels?: Partial<AnnotationLabels>;
  /** Apply the embed's per-instance `--qaid-*` CSS variables to the container. */
  applyVars?: (el: HTMLElement) => void;
  /** Announce a message via the embed's live regions. */
  announce?: (message: string, assertive?: boolean) => void;
  /** Turn the container into an accessible modal dialog (focus trap + inert). */
  openDialog?: (
    container: HTMLElement,
    opts: { labelledbyId?: string; describedbyId?: string }
  ) => void;
  /** Tear down the dialog semantics and restore focus. */
  closeDialog?: () => void;
}

let editorSeq = 0;

/**
 * Full-screen screenshot annotation editor. Construct it, call {@link open}
 * (which returns a promise resolving to the composited WebP, or `null` when the
 * user skips), and the controller manages its own DOM and teardown.
 */
export class AnnotationEditor {
  readonly shapes: Shape[] = [];
  tool: ShapeType = "rect";

  private readonly opts: AnnotationEditorOptions;
  private readonly labels: AnnotationLabels;
  private readonly color: string;
  private readonly strokeWidth: number;
  private readonly uid = `qaid-annotate-${++editorSeq}`;

  private container!: HTMLDivElement;
  private canvas!: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private toolbar!: HTMLDivElement;
  private undoBtn!: HTMLButtonElement;
  private img: HTMLImageElement | null = null;

  private drawing = false;
  private current: Shape | null = null;
  private settled = false;
  // Assigned in open() before any settle() is reachable (done/skip only fire
  // after the editor is mounted).
  private resolveResult!: (value: string | null) => void;

  constructor(opts: AnnotationEditorOptions) {
    this.opts = opts;
    this.labels = { ...DEFAULT_LABELS, ...(opts.labels ?? {}) };
    this.color = opts.color ?? DEFAULT_STROKE;
    this.strokeWidth = opts.strokeWidth ?? DEFAULT_STROKE_WIDTH;
  }

  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open(): Promise<string | null> {
    const promise = new Promise<string | null>((resolve) => {
      this.resolveResult = resolve;
    });
    this.mount();
    return promise;
  }

  private toolButton(tool: ShapeType, icon: string, label: string): HTMLButtonElement {
    const btn = createElement("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": tool,
      "aria-pressed": tool === this.tool ? "true" : "false",
      "aria-label": `${label} tool`,
      title: label,
    });
    btn.innerHTML = icon;
    return btn;
  }

  private actionButton(
    action: string,
    icon: string,
    label: string,
    extraClass: string
  ): HTMLButtonElement {
    const btn = createElement("button", {
      type: "button",
      class: `qaid-annotate-action ${extraClass}`,
      "data-qaid-action": action,
      "aria-label": label,
      title: label,
    });
    btn.innerHTML = `${icon}<span class="qaid-annotate-btn-text">${label}</span>`;
    return btn;
  }

  private mount(): void {
    const titleId = `${this.uid}-title`;
    const descId = `${this.uid}-desc`;

    this.container = createElement("div", { class: "qaid-annotate" });
    this.opts.applyVars?.(this.container);

    const title = createElement("h2", {
      id: titleId,
      class: "qaid-annotate-title",
    });
    title.textContent = this.labels.title;

    const desc = createElement("p", {
      id: descId,
      class: "qaid-annotate-desc",
    });
    desc.textContent = this.labels.instructions;

    const stage = createElement("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas");
    this.canvas.className = "qaid-annotate-canvas";
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.canvas.setAttribute("role", "img");
    this.canvas.setAttribute("aria-label", this.labels.title);
    this.ctx = this.canvas.getContext("2d");
    stage.appendChild(this.canvas);

    this.toolbar = createElement("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title,
    });

    const tools = createElement("div", { class: "qaid-annotate-tools" });
    tools.appendChild(this.toolButton("rect", RECTANGLE_ICON, this.labels.rectangle));
    tools.appendChild(this.toolButton("arrow", ARROW_ICON, this.labels.arrow));
    tools.appendChild(this.toolButton("pen", PENCIL_ICON, this.labels.pen));
    tools.appendChild(this.toolButton("blur", BLUR_ICON, this.labels.blur));

    this.undoBtn = this.actionButton("undo", UNDO_ICON, this.labels.undo, "qaid-annotate-undo");
    this.undoBtn.disabled = true;

    const skipBtn = this.actionButton("skip", SKIP_ICON, this.labels.skip, "qaid-annotate-skip");
    const doneBtn = this.actionButton("done", DONE_ICON, this.labels.done, "qaid-annotate-done");

    const actions = createElement("div", { class: "qaid-annotate-actions" });
    actions.appendChild(this.undoBtn);
    actions.appendChild(skipBtn);
    actions.appendChild(doneBtn);

    this.toolbar.appendChild(tools);
    this.toolbar.appendChild(actions);

    this.container.appendChild(title);
    this.container.appendChild(desc);
    this.container.appendChild(stage);
    this.container.appendChild(this.toolbar);
    this.opts.root.appendChild(this.container);

    this.toolbar.addEventListener("click", this.onToolbarClick);
    this.canvas.addEventListener("pointerdown", this.onPointerDown);
    this.container.addEventListener("pointermove", this.onPointerMove);
    this.container.addEventListener("pointerup", this.onPointerUp);
    this.container.addEventListener("keydown", this.onKeyDown);

    this.opts.openDialog?.(this.container, {
      labelledbyId: titleId,
      describedbyId: descId,
    });
    this.opts.announce?.(this.labels.instructions);

    loadImage(this.opts.dataUrl)
      .then((img) => {
        this.img = img;
        this.canvas.width = img.naturalWidth || img.width || 1;
        this.canvas.height = img.naturalHeight || img.height || 1;
        this.redraw();
      })
      .catch(() => {
        this.img = null;
        this.redraw();
      });
  }

  /** Convert a pointer event's client coordinates into natural image pixels. */
  private toImageCoords(e: { clientX: number; clientY: number }): Point {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / (rect.width || this.canvas.width);
    const scaleY = this.canvas.height / (rect.height || this.canvas.height);
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  /** Repaint the display canvas: base image (if loaded) then every shape. */
  redraw(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.img) {
      ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
    }
    for (const shape of this.shapes) {
      drawShape(ctx, shape);
    }
    if (this.current) {
      drawShape(ctx, this.current);
    }
  }

  /** Select the active drawing tool and reflect it on the toolbar. */
  selectTool(tool: ShapeType): void {
    this.tool = tool;
    const buttons = this.toolbar.querySelectorAll<HTMLButtonElement>("[data-qaid-tool]");
    buttons.forEach((btn) => {
      btn.setAttribute(
        "aria-pressed",
        btn.getAttribute("data-qaid-tool") === tool ? "true" : "false"
      );
    });
    const label = this.labels[LABEL_KEY[tool]];
    this.opts.announce?.(`${label} tool selected`);
  }

  private onToolbarClick = (e: Event): void => {
    const target = e.target as HTMLElement | null;
    const btn = target?.closest<HTMLElement>("[data-qaid-tool],[data-qaid-action]");
    if (!btn) return;
    const tool = btn.getAttribute("data-qaid-tool");
    if (tool) {
      this.selectTool(tool as ShapeType);
      return;
    }
    const action = btn.getAttribute("data-qaid-action");
    if (action === "undo") this.undo();
    else if (action === "skip") this.skip();
    else if (action === "done") void this.done();
  };

  onPointerDown = (e: PointerEvent): void => {
    e.preventDefault?.();
    this.drawing = true;
    const p = this.toImageCoords(e);
    this.current = {
      type: this.tool,
      color: this.color,
      strokeWidth: this.strokeWidth,
      points: this.tool === "pen" ? [p] : [p, { ...p }],
    };
    this.redraw();
  };

  onPointerMove = (e: PointerEvent): void => {
    if (!this.drawing || !this.current) return;
    const p = this.toImageCoords(e);
    if (this.current.type === "pen") {
      this.current.points.push(p);
    } else {
      this.current.points[1] = p;
    }
    this.redraw();
  };

  onPointerUp = (): void => {
    if (!this.drawing || !this.current) return;
    this.drawing = false;
    const shape = this.current;
    this.current = null;
    if (isDegenerate(shape)) {
      this.redraw();
      return;
    }
    this.shapes.push(shape);
    this.undoBtn.disabled = false;
    this.opts.announce?.("Annotation added");
    this.redraw();
  };

  onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      e.preventDefault();
      this.skip();
      return;
    }
    if (e.key === "Enter") {
      const target = e.target as HTMLElement | null;
      // Let Enter activate a focused tool/action button natively.
      if (target?.getAttribute("data-qaid-tool") || target?.getAttribute("data-qaid-action")) {
        return;
      }
      e.preventDefault();
      void this.done();
    }
  };

  /** Remove the most recently added shape. */
  undo(): void {
    if (this.shapes.length === 0) {
      this.opts.announce?.("Nothing to undo");
      return;
    }
    this.shapes.pop();
    this.undoBtn.disabled = this.shapes.length === 0;
    this.opts.announce?.("Removed last annotation");
    this.redraw();
  }

  /** Composite the annotations and resolve with the new WebP data URL. */
  async done(): Promise<void> {
    if (this.settled) return;
    const out = await compositeAnnotations(this.opts.dataUrl, this.shapes, {
      quality: this.opts.quality,
    });
    this.opts.announce?.("Annotated screenshot attached");
    this.settle(out);
  }

  /** Discard annotations and resolve with `null` (caller keeps the original). */
  skip(): void {
    if (this.settled) return;
    this.opts.announce?.("Annotation skipped");
    this.settle(null);
  }

  private settle(value: string | null): void {
    this.settled = true;
    this.teardown();
    this.resolveResult(value);
  }

  private teardown(): void {
    this.toolbar.removeEventListener("click", this.onToolbarClick);
    this.canvas.removeEventListener("pointerdown", this.onPointerDown);
    this.container.removeEventListener("pointermove", this.onPointerMove);
    this.container.removeEventListener("pointerup", this.onPointerUp);
    this.container.removeEventListener("keydown", this.onKeyDown);
    this.opts.closeDialog?.();
    this.container.remove();
  }
}

/** Maps a tool id to its label key, for announcements. */
const LABEL_KEY: Record<ShapeType, keyof AnnotationLabels> = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur",
};

/**
 * Open the annotation editor and resolve with the composited WebP data URL, or
 * `null` if the user skipped. Thin entry point used by the embed.
 */
export function openAnnotationEditor(
  opts: AnnotationEditorOptions
): Promise<string | null> {
  return new AnnotationEditor(opts).open();
}
