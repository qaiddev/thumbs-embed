import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  rectFromPoints,
  drawShape,
  compositeAnnotations,
  openAnnotationEditor,
  AnnotationEditor,
  type Shape,
  type ShapeType,
  type AnnotationEditorOptions,
} from "./annotate";

/* ------------------------------------------------------------------ *
 * Canvas / Image mocks — happy-dom has no raster, so (as in
 * screenshot.test.ts) we spy on document.createElement to hand back real
 * <canvas> elements whose getContext/toDataURL are stubbed, and replace the
 * Image constructor with one that fires onload/onerror on the next tick.
 * ------------------------------------------------------------------ */

type MockCtx = Record<string, ReturnType<typeof vi.fn>> & {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
};

let mockCtx: MockCtx;
let getContextValue: unknown;
let toDataURLCalls: unknown[][];
const COMPOSITE_URL = "data:image/webp;base64,composited";

function newMockCtx(): MockCtx {
  return {
    save: vi.fn(),
    restore: vi.fn(),
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    strokeRect: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    strokeStyle: "",
    fillStyle: "",
    lineWidth: 0,
    lineJoin: "",
    lineCap: "",
  } as unknown as MockCtx;
}

function setupCanvasMock(): void {
  mockCtx = newMockCtx();
  getContextValue = mockCtx;
  toDataURLCalls = [];
  const orig = document.createElement.bind(document);
  vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
    const el = orig(tag);
    if (tag === "canvas") {
      const canvas = el as HTMLCanvasElement;
      vi.spyOn(canvas, "getContext").mockImplementation(
        () => getContextValue as CanvasRenderingContext2D | null
      );
      vi.spyOn(canvas, "toDataURL").mockImplementation((...args: unknown[]) => {
        toDataURLCalls.push(args);
        return COMPOSITE_URL;
      });
    }
    return el;
  });
}

class MockImage {
  onload: ((ev?: unknown) => void) | null = null;
  onerror: ((ev?: unknown) => void) | null = null;
  naturalWidth = 800;
  naturalHeight = 600;
  width = 0;
  height = 0;
  set src(value: string) {
    setTimeout(() => {
      if (value.includes("broken")) this.onerror?.(new Event("error"));
      else this.onload?.(new Event("load"));
    }, 0);
  }
}

const flush = (): Promise<void> => new Promise((r) => setTimeout(r, 0));

function fakePointer(clientX: number, clientY: number): PointerEvent {
  return {
    clientX,
    clientY,
    pointerId: 1,
    preventDefault: vi.fn(),
  } as unknown as PointerEvent;
}

function makeEditor(overrides: Partial<AnnotationEditorOptions> = {}): {
  editor: AnnotationEditor;
  root: HTMLDivElement;
  announce: ReturnType<typeof vi.fn>;
  applyVars: ReturnType<typeof vi.fn>;
  openDialog: ReturnType<typeof vi.fn>;
  closeDialog: ReturnType<typeof vi.fn>;
} {
  const root = document.createElement("div");
  document.body.appendChild(root);
  const announce = vi.fn();
  const applyVars = vi.fn();
  const openDialog = vi.fn();
  const closeDialog = vi.fn();
  const editor = new AnnotationEditor({
    dataUrl: "data:image/webp;base64,base",
    root,
    announce,
    applyVars,
    openDialog,
    closeDialog,
    ...overrides,
  });
  return { editor, root, announce, applyVars, openDialog, closeDialog };
}

/** Access private members in tests without fighting TS visibility. */
function priv(editor: AnnotationEditor): {
  canvas: HTMLCanvasElement;
  img: HTMLImageElement | null;
} {
  return editor as unknown as {
    canvas: HTMLCanvasElement;
    img: HTMLImageElement | null;
  };
}

const rect = (x1: number, y1: number, x2: number, y2: number): Shape => ({
  type: "rect",
  color: "#ef4444",
  strokeWidth: 4,
  points: [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ],
});

beforeEach(() => {
  document.body.innerHTML = "";
  setupCanvasMock();
  vi.stubGlobal("Image", MockImage);
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

describe("rectFromPoints", () => {
  it("normalises corners regardless of drag direction", () => {
    expect(rectFromPoints({ x: 60, y: 80 }, { x: 10, y: 20 })).toEqual({
      x: 10,
      y: 20,
      w: 50,
      h: 60,
    });
  });
});

describe("drawShape", () => {
  it("strokes a rectangle from normalised bounds", () => {
    drawShape(mockCtx as unknown as CanvasRenderingContext2D, rect(60, 80, 10, 20));
    expect(mockCtx.save).toHaveBeenCalled();
    expect(mockCtx.restore).toHaveBeenCalled();
    expect(mockCtx.strokeRect).toHaveBeenCalledWith(10, 20, 50, 60);
    expect(mockCtx.strokeStyle).toBe("#ef4444");
  });

  it("draws an arrow shaft plus arrowhead", () => {
    drawShape(mockCtx as unknown as CanvasRenderingContext2D, {
      type: "arrow",
      color: "#ef4444",
      strokeWidth: 4,
      points: [
        { x: 0, y: 0 },
        { x: 40, y: 40 },
      ],
    });
    // Two beginPath (shaft + head), and multiple line segments.
    expect(mockCtx.beginPath.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(mockCtx.stroke.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(mockCtx.lineTo.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  it("draws a freehand pen path through every point", () => {
    drawShape(mockCtx as unknown as CanvasRenderingContext2D, {
      type: "pen",
      color: "#ef4444",
      strokeWidth: 4,
      points: [
        { x: 0, y: 0 },
        { x: 5, y: 5 },
        { x: 10, y: 2 },
      ],
    });
    expect(mockCtx.moveTo).toHaveBeenCalledWith(0, 0);
    expect(mockCtx.lineTo).toHaveBeenCalledWith(5, 5);
    expect(mockCtx.lineTo).toHaveBeenCalledWith(10, 2);
  });

  it("no-ops a pen path with no points", () => {
    drawShape(mockCtx as unknown as CanvasRenderingContext2D, {
      type: "pen",
      color: "#ef4444",
      strokeWidth: 4,
      points: [],
    });
    expect(mockCtx.moveTo).not.toHaveBeenCalled();
    expect(mockCtx.stroke).not.toHaveBeenCalled();
  });

  it("redacts a blur region with a filled mosaic", () => {
    drawShape(mockCtx as unknown as CanvasRenderingContext2D, {
      type: "blur",
      color: "#ef4444",
      strokeWidth: 4,
      points: [
        { x: 0, y: 0 },
        { x: 30, y: 30 },
      ],
    });
    // Base wash + at least one mosaic tile.
    expect(mockCtx.fillRect.mock.calls.length).toBeGreaterThan(1);
  });

  it("paints redaction fully opaque so nothing bleeds through", () => {
    // Record every fillStyle assigned while drawing a blur/redact shape.
    const styles: string[] = [];
    const recordingCtx = {
      save: () => {},
      restore: () => {},
      fillRect: () => {},
      strokeRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      set fillStyle(v: string) {
        styles.push(v);
      },
      get fillStyle() {
        return styles[styles.length - 1] ?? "";
      },
      strokeStyle: "",
      lineWidth: 0,
      lineJoin: "",
      lineCap: "",
    } as unknown as CanvasRenderingContext2D;

    drawShape(recordingCtx, {
      type: "blur",
      color: "#ef4444",
      strokeWidth: 4,
      points: [
        { x: 0, y: 0 },
        { x: 40, y: 40 },
      ],
    });

    const alphaOf = (s: string): number => {
      const m = s.match(/rgba?\(([^)]+)\)/);
      if (!m) return 1; // hex / named colours are opaque
      const parts = m[1].split(",").map((p) => p.trim());
      return parts.length >= 4 ? parseFloat(parts[3]) : 1;
    };

    const fills = styles.filter((s) => /rgb|#/.test(s));
    expect(fills.length).toBeGreaterThan(0);
    for (const s of fills) {
      // No translucent fills — redacted content must be fully covered.
      expect(alphaOf(s)).toBe(1);
    }
  });
});

describe("compositeAnnotations", () => {
  it("re-encodes the base image plus shapes to a WebP data URL", async () => {
    const out = await compositeAnnotations("data:image/webp;base64,base", [
      rect(0, 0, 20, 20),
    ], { quality: 0.7 });
    expect(mockCtx.drawImage).toHaveBeenCalled();
    expect(mockCtx.strokeRect).toHaveBeenCalled();
    expect(out).toBe(COMPOSITE_URL);
  });

  it("uses the default quality when none is supplied", async () => {
    await compositeAnnotations("data:image/webp;base64,base", []);
    expect(toDataURLCalls.at(-1)).toEqual(["image/webp", 0.8]);
  });

  it("falls back to natural=0 dimensions", async () => {
    class ZeroImage extends MockImage {
      naturalWidth = 0;
      naturalHeight = 0;
      width = 0;
      height = 0;
    }
    vi.stubGlobal("Image", ZeroImage);
    const out = await compositeAnnotations("data:image/webp;base64,base", []);
    expect(out).toBe(COMPOSITE_URL);
  });

  it("returns the original data URL when the image fails to load", async () => {
    const out = await compositeAnnotations("data:image/webp;base64,broken", [
      rect(0, 0, 20, 20),
    ]);
    expect(out).toBe("data:image/webp;base64,broken");
    expect(mockCtx.drawImage).not.toHaveBeenCalled();
  });

  it("returns the original data URL when no 2D context is available", async () => {
    getContextValue = null;
    const out = await compositeAnnotations("data:image/webp;base64,base", [
      rect(0, 0, 20, 20),
    ]);
    expect(out).toBe("data:image/webp;base64,base");
  });
});

describe("AnnotationEditor mounting & a11y", () => {
  it("builds a toolbar with all tools and actions and opens as a dialog", () => {
    const { editor, root, applyVars, openDialog, announce } = makeEditor();
    editor.open();

    const container = root.querySelector(".qaid-annotate")!;
    expect(container).not.toBeNull();
    expect(applyVars).toHaveBeenCalledWith(container);
    expect(openDialog).toHaveBeenCalledWith(
      container,
      expect.objectContaining({
        labelledbyId: expect.any(String),
        describedbyId: expect.any(String),
      })
    );
    expect(announce).toHaveBeenCalled();

    const toolbar = container.querySelector('[role="toolbar"]')!;
    expect(toolbar).not.toBeNull();
    expect(container.querySelectorAll("[data-qaid-tool]")).toHaveLength(4);
    expect(container.querySelector('[data-qaid-action="undo"]')).not.toBeNull();
    expect(container.querySelector('[data-qaid-action="skip"]')).not.toBeNull();
    expect(container.querySelector('[data-qaid-action="done"]')).not.toBeNull();
    // Undo starts disabled (nothing to undo).
    expect(
      container.querySelector<HTMLButtonElement>('[data-qaid-action="undo"]')!
        .disabled
    ).toBe(true);
    // Rectangle is the default active tool.
    expect(
      container
        .querySelector('[data-qaid-tool="rect"]')!
        .getAttribute("aria-pressed")
    ).toBe("true");

    editor.skip();
  });

  it("works without optional callbacks", () => {
    const root = document.createElement("div");
    document.body.appendChild(root);
    const editor = new AnnotationEditor({
      dataUrl: "data:image/webp;base64,base",
      root,
    });
    expect(() => {
      editor.open();
      editor.selectTool("arrow");
      editor.undo();
    }).not.toThrow();
    editor.skip();
  });

  it("draws the base image once it loads", async () => {
    const { editor } = makeEditor();
    editor.open();
    await flush();
    expect(priv(editor).canvas.width).toBe(800);
    expect(priv(editor).canvas.height).toBe(600);
    expect(mockCtx.drawImage).toHaveBeenCalled();
    editor.skip();
  });

  it("survives a screenshot that fails to decode", async () => {
    const { editor } = makeEditor({ dataUrl: "data:image/webp;base64,broken" });
    editor.open();
    await flush();
    expect(priv(editor).img).toBeNull();
    editor.skip();
  });

  it("early-returns from redraw when no 2D context exists", () => {
    getContextValue = null;
    const { editor } = makeEditor();
    editor.open();
    // No throw even though ctx is null.
    editor.onPointerDown(fakePointer(10, 10));
    editor.onPointerUp();
    expect(mockCtx.clearRect).not.toHaveBeenCalled();
    editor.skip();
  });
});

describe("AnnotationEditor tool selection", () => {
  it("selects a tool on toolbar click and reflects aria-pressed", () => {
    const { editor, root, announce } = makeEditor();
    editor.open();
    const arrowBtn = root.querySelector<HTMLButtonElement>(
      '[data-qaid-tool="arrow"]'
    )!;
    arrowBtn.click();
    expect(editor.tool).toBe("arrow");
    expect(arrowBtn.getAttribute("aria-pressed")).toBe("true");
    expect(
      root
        .querySelector('[data-qaid-tool="rect"]')!
        .getAttribute("aria-pressed")
    ).toBe("false");
    expect(announce).toHaveBeenCalledWith("Arrow tool selected");
    editor.skip();
  });

  it("announces the right label for each tool", () => {
    const { editor, announce } = makeEditor();
    editor.open();
    const tools: ShapeType[] = ["rect", "arrow", "pen", "blur"];
    for (const t of tools) editor.selectTool(t);
    expect(announce).toHaveBeenCalledWith("Rectangle tool selected");
    expect(announce).toHaveBeenCalledWith("Pen tool selected");
    expect(announce).toHaveBeenCalledWith("Blur or redact tool selected");
    editor.skip();
  });

  it("ignores clicks that miss a toolbar button", () => {
    const { editor, root } = makeEditor();
    editor.open();
    const toolbar = root.querySelector<HTMLDivElement>(".qaid-annotate-toolbar")!;
    // Clicking the toolbar background must not change the tool or throw.
    toolbar.click();
    expect(editor.tool).toBe("rect");
    editor.skip();
  });
});

describe("AnnotationEditor drawing", () => {
  it("adds a rectangle after a pointer drag", () => {
    const { editor, announce } = makeEditor();
    editor.open();
    editor.onPointerDown(fakePointer(10, 20));
    editor.onPointerMove(fakePointer(60, 80));
    editor.onPointerUp();
    expect(editor.shapes).toHaveLength(1);
    expect(editor.shapes[0].type).toBe("rect");
    expect(editor.shapes[0].points).toEqual([
      { x: 10, y: 20 },
      { x: 60, y: 80 },
    ]);
    expect(announce).toHaveBeenCalledWith("Annotation added");
    editor.skip();
  });

  it("captures a multi-point pen stroke", () => {
    const { editor } = makeEditor();
    editor.open();
    editor.selectTool("pen");
    editor.onPointerDown(fakePointer(0, 0));
    editor.onPointerMove(fakePointer(5, 5));
    editor.onPointerMove(fakePointer(10, 2));
    editor.onPointerUp();
    expect(editor.shapes).toHaveLength(1);
    expect(editor.shapes[0].type).toBe("pen");
    expect(editor.shapes[0].points).toHaveLength(3);
    editor.skip();
  });

  it("discards a degenerate click that is not a real drag", () => {
    const { editor } = makeEditor();
    editor.open();
    editor.onPointerDown(fakePointer(10, 10));
    editor.onPointerUp(); // no movement
    expect(editor.shapes).toHaveLength(0);
    editor.skip();
  });

  it("discards a pen tap with a single point", () => {
    const { editor } = makeEditor();
    editor.open();
    editor.selectTool("pen");
    editor.onPointerDown(fakePointer(10, 10));
    editor.onPointerUp();
    expect(editor.shapes).toHaveLength(0);
    editor.skip();
  });

  it("ignores pointer move / up when not drawing", () => {
    const { editor } = makeEditor();
    editor.open();
    editor.onPointerMove(fakePointer(5, 5));
    editor.onPointerUp();
    expect(editor.shapes).toHaveLength(0);
    editor.skip();
  });

  it("maps client coordinates through the canvas scale factor", () => {
    const { editor } = makeEditor();
    editor.open();
    const canvas = priv(editor).canvas;
    canvas.width = 800;
    canvas.height = 600;
    vi.spyOn(canvas, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      width: 400,
      height: 300,
    } as DOMRect);
    editor.onPointerDown(fakePointer(100, 60));
    editor.onPointerMove(fakePointer(200, 150));
    editor.onPointerUp();
    // scaleX = 800/400 = 2, scaleY = 600/300 = 2
    expect(editor.shapes[0].points).toEqual([
      { x: 200, y: 120 },
      { x: 400, y: 300 },
    ]);
    editor.skip();
  });
});

describe("AnnotationEditor undo", () => {
  it("removes the last shape and re-disables when empty", () => {
    const { editor, root, announce } = makeEditor();
    editor.open();
    editor.onPointerDown(fakePointer(0, 0));
    editor.onPointerMove(fakePointer(40, 40));
    editor.onPointerUp();
    const undoBtn = root.querySelector<HTMLButtonElement>(
      '[data-qaid-action="undo"]'
    )!;
    expect(undoBtn.disabled).toBe(false);

    undoBtn.click();
    expect(editor.shapes).toHaveLength(0);
    expect(undoBtn.disabled).toBe(true);
    expect(announce).toHaveBeenCalledWith("Removed last annotation");
    editor.skip();
  });

  it("announces when there is nothing to undo", () => {
    const { editor, announce } = makeEditor();
    editor.open();
    editor.undo();
    expect(announce).toHaveBeenCalledWith("Nothing to undo");
    editor.skip();
  });
});

describe("AnnotationEditor commit & skip", () => {
  it("composites and resolves on Done (toolbar click)", async () => {
    const { editor, root, announce } = makeEditor();
    const promise = editor.open();
    editor.onPointerDown(fakePointer(0, 0));
    editor.onPointerMove(fakePointer(40, 40));
    editor.onPointerUp();

    root.querySelector<HTMLButtonElement>('[data-qaid-action="done"]')!.click();
    const result = await promise;
    expect(result).toBe(COMPOSITE_URL);
    expect(announce).toHaveBeenCalledWith("Annotated screenshot attached");
    // Container removed on teardown.
    expect(root.querySelector(".qaid-annotate")).toBeNull();
  });

  it("resolves null on Skip (toolbar click)", async () => {
    const { editor, root, announce, closeDialog } = makeEditor();
    const promise = editor.open();
    root.querySelector<HTMLButtonElement>('[data-qaid-action="skip"]')!.click();
    const result = await promise;
    expect(result).toBeNull();
    expect(announce).toHaveBeenCalledWith("Annotation skipped");
    expect(closeDialog).toHaveBeenCalled();
  });

  it("commits on Enter and skips on Escape via the keyboard", async () => {
    const escEditor = makeEditor();
    const escPromise = escEditor.editor.open();
    escEditor.editor.onKeyDown({
      key: "Escape",
      preventDefault: vi.fn(),
      target: escEditor.root,
    } as unknown as KeyboardEvent);
    expect(await escPromise).toBeNull();

    const enterEditor = makeEditor();
    const enterPromise = enterEditor.editor.open();
    enterEditor.editor.onKeyDown({
      key: "Enter",
      preventDefault: vi.fn(),
      target: priv(enterEditor.editor).canvas,
    } as unknown as KeyboardEvent);
    expect(await enterPromise).toBe(COMPOSITE_URL);
  });

  it("lets Enter activate a focused tool button instead of committing", () => {
    const { editor, root } = makeEditor();
    editor.open();
    const doneSpy = vi.spyOn(editor, "done");
    const arrowBtn = root.querySelector<HTMLElement>('[data-qaid-tool="arrow"]')!;
    editor.onKeyDown({
      key: "Enter",
      preventDefault: vi.fn(),
      target: arrowBtn,
    } as unknown as KeyboardEvent);
    expect(doneSpy).not.toHaveBeenCalled();

    // An action button is likewise left to its native activation.
    const skipBtn = root.querySelector<HTMLElement>('[data-qaid-action="skip"]')!;
    editor.onKeyDown({
      key: "Enter",
      preventDefault: vi.fn(),
      target: skipBtn,
    } as unknown as KeyboardEvent);
    expect(doneSpy).not.toHaveBeenCalled();

    // An unrelated key is ignored.
    editor.onKeyDown({
      key: "a",
      preventDefault: vi.fn(),
      target: priv(editor).canvas,
    } as unknown as KeyboardEvent);
    editor.skip();
  });

  it("ignores repeated commit / skip once settled", async () => {
    const { editor } = makeEditor();
    const promise = editor.open();
    await editor.done();
    // Already settled — these must be no-ops (and not reject).
    await editor.done();
    editor.skip();
    expect(await promise).toBe(COMPOSITE_URL);
  });
});

describe("openAnnotationEditor", () => {
  it("mounts an editor and resolves null when skipped via the DOM", async () => {
    const root = document.createElement("div");
    document.body.appendChild(root);
    const promise = openAnnotationEditor({
      dataUrl: "data:image/webp;base64,base",
      root,
      openDialog: vi.fn(),
      closeDialog: vi.fn(),
    });
    root.querySelector<HTMLButtonElement>('[data-qaid-action="skip"]')!.click();
    expect(await promise).toBeNull();
  });
});

describe("AnnotationEditor colour swatches", () => {
  it("renders a swatch per palette colour with the active colour pre-selected", () => {
    const { editor, root } = makeEditor({
      color: "#3b82f6",
      palette: ["#ef4444", "#3b82f6", "#22c55e"],
    });
    editor.open();
    expect(root.querySelectorAll("[data-qaid-color]")).toHaveLength(3);
    expect(
      root.querySelector('[data-qaid-color="#3b82f6"]')!.getAttribute("aria-pressed")
    ).toBe("true");
    editor.skip();
  });

  it("ensures the active colour is offered even if absent from the palette", () => {
    const { editor, root } = makeEditor({ color: "#abcdef", palette: ["#ef4444"] });
    editor.open();
    expect(root.querySelector('[data-qaid-color="#abcdef"]')).not.toBeNull();
    expect(root.querySelectorAll("[data-qaid-color]")).toHaveLength(2);
    editor.skip();
  });

  it("falls back to a default palette when none is supplied", () => {
    const { editor, root } = makeEditor();
    editor.open();
    expect(root.querySelectorAll("[data-qaid-color]").length).toBeGreaterThanOrEqual(6);
    editor.skip();
  });

  it("switches the active colour on click and uses it for the next shape", () => {
    const { editor, root, announce } = makeEditor({ palette: ["#ef4444", "#22c55e"] });
    editor.open();
    const green = root.querySelector<HTMLButtonElement>('[data-qaid-color="#22c55e"]')!;
    green.click();
    expect(green.getAttribute("aria-pressed")).toBe("true");
    expect(
      root.querySelector('[data-qaid-color="#ef4444"]')!.getAttribute("aria-pressed")
    ).toBe("false");
    expect(announce).toHaveBeenCalledWith("green colour selected");

    editor.onPointerDown(fakePointer(10, 10));
    editor.onPointerMove(fakePointer(60, 60));
    editor.onPointerUp();
    expect(editor.shapes[editor.shapes.length - 1].color).toBe("#22c55e");
    editor.skip();
  });

  it("labels a known colour by name and an unknown one by its hex", () => {
    const { editor, root } = makeEditor({ palette: ["#ef4444", "#123456"] });
    editor.open();
    expect(
      root.querySelector('[data-qaid-color="#ef4444"]')!.getAttribute("aria-label")
    ).toBe("Draw in red");
    expect(
      root.querySelector('[data-qaid-color="#123456"]')!.getAttribute("aria-label")
    ).toBe("Draw in #123456");
    editor.skip();
  });
});

describe("AnnotationEditor tool labels", () => {
  it("shows a text label alongside each tool icon", () => {
    const { editor, root } = makeEditor();
    editor.open();
    expect(
      root.querySelector('[data-qaid-tool="rect"]')!.querySelector(".qaid-annotate-btn-text")
        ?.textContent
    ).toBe("Rectangle");
    expect(
      root.querySelector('[data-qaid-tool="blur"]')!.querySelector(".qaid-annotate-btn-text")
        ?.textContent
    ).toBe("Blur or redact");
    editor.skip();
  });
});
