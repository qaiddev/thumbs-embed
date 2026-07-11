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
/**
 * Normalise two drag corners into a top-left origin plus positive width/height,
 * regardless of the direction the user dragged.
 */
export declare function rectFromPoints(a: Point, b: Point): {
    x: number;
    y: number;
    w: number;
    h: number;
};
/**
 * Draw a single shape onto a 2D context in the shape's own (natural-pixel)
 * coordinates. Used both for the live editing preview and for the final
 * composite, so what the user sees is exactly what is submitted.
 */
export declare function drawShape(ctx: CanvasRenderingContext2D, shape: Shape): void;
/**
 * Composite the base screenshot and the drawn shapes into a new WebP data URL
 * at the image's natural size. Falls back to the original data URL if the image
 * can't be loaded or a 2D context isn't available (so a submission is never
 * lost). This is intentionally standalone so it can be unit-tested in isolation.
 */
export declare function compositeAnnotations(dataUrl: string, shapes: Shape[], opts?: {
    quality?: number;
}): Promise<string>;
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
    openDialog?: (container: HTMLElement, opts: {
        labelledbyId?: string;
        describedbyId?: string;
    }) => void;
    /** Tear down the dialog semantics and restore focus. */
    closeDialog?: () => void;
}
/**
 * Full-screen screenshot annotation editor. Construct it, call {@link open}
 * (which returns a promise resolving to the composited WebP, or `null` when the
 * user skips), and the controller manages its own DOM and teardown.
 */
export declare class AnnotationEditor {
    readonly shapes: Shape[];
    tool: ShapeType;
    private readonly opts;
    private readonly labels;
    private readonly color;
    private readonly strokeWidth;
    private readonly uid;
    private container;
    private canvas;
    private ctx;
    private toolbar;
    private undoBtn;
    private img;
    private drawing;
    private current;
    private settled;
    private resolveResult;
    constructor(opts: AnnotationEditorOptions);
    /** Mount the editor and resolve when the user commits (Done) or skips. */
    open(): Promise<string | null>;
    private toolButton;
    private actionButton;
    private mount;
    /** Convert a pointer event's client coordinates into natural image pixels. */
    private toImageCoords;
    /** Repaint the display canvas: base image (if loaded) then every shape. */
    redraw(): void;
    /** Select the active drawing tool and reflect it on the toolbar. */
    selectTool(tool: ShapeType): void;
    private onToolbarClick;
    onPointerDown: (e: PointerEvent) => void;
    onPointerMove: (e: PointerEvent) => void;
    onPointerUp: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
    /** Remove the most recently added shape. */
    undo(): void;
    /** Composite the annotations and resolve with the new WebP data URL. */
    done(): Promise<void>;
    /** Discard annotations and resolve with `null` (caller keeps the original). */
    skip(): void;
    private settle;
    private teardown;
}
/**
 * Open the annotation editor and resolve with the composited WebP data URL, or
 * `null` if the user skipped. Thin entry point used by the embed.
 */
export declare function openAnnotationEditor(opts: AnnotationEditorOptions): Promise<string | null>;
