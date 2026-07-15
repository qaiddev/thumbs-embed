/**
 * Live video redaction.
 *
 * Blurs the on-screen bounding boxes of chosen elements while the current tab
 * is recorded. Every frame re-reads each element's `getBoundingClientRect()`,
 * so the blur tracks the content as the page scrolls or reflows — no pixel
 * tracking and no post-recording re-encode. The captured frame is the tab's
 * viewport (video-capture restricts capture to the current tab), so viewport
 * CSS coordinates map onto the frame with a single scale factor.
 *
 * The display stream is drawn to a canvas, the tracked regions are blurred on
 * top, and MediaRecorder records the canvas stream instead of the raw capture —
 * mirroring the iOS orientation pipeline in `video-orientation.ts`.
 */
export interface RedactedStream {
    /** Canvas-sourced stream to hand to MediaRecorder. */
    stream: MediaStream;
    /** Stop drawing and release the canvas stream + source video. */
    stop: () => void;
}
export interface RedactionOptions {
    /** Output frame rate of the redacted stream. Default: 15. */
    frameRate?: number;
    /** Gaussian blur radius in px applied to each region. Default: 12. */
    blurRadius?: number;
}
interface Box {
    x: number;
    y: number;
    w: number;
    h: number;
}
/**
 * Map a viewport rect (CSS px, from `getBoundingClientRect()`) onto the
 * captured frame, clamped to the frame bounds. Returns null when the rect is
 * fully outside the viewport (the element scrolled away) or has no area.
 */
export declare function mapRectToFrame(rect: {
    left: number;
    top: number;
    width: number;
    height: number;
}, scaleX: number, scaleY: number, frameW: number, frameH: number): Box | null;
/**
 * Draw one frame: the full capture, then each element's live bounding box
 * blurred on top. Exported for unit testing the per-frame logic without a real
 * capture stream. When the 2D context can't apply a blur filter, the region is
 * filled solid instead so sensitive content is still hidden.
 */
export declare function drawRedactedFrame(ctx: CanvasRenderingContext2D, video: CanvasImageSource, elements: Element[], frameW: number, frameH: number, blurRadius: number, supportsFilter: boolean): void;
/**
 * Build a canvas-backed copy of a display-capture stream that blurs the live
 * bounding boxes of `elements`. Returns null when the browser can't support the
 * canvas pipeline (no `captureStream` / 2D context), in which case the caller
 * should record the original stream unredacted.
 */
export declare function buildRedactedStream(displayStream: MediaStream, elements: Element[], options?: RedactionOptions): Promise<RedactedStream | null>;
export {};
