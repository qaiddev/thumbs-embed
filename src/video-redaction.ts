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

import { waitForVideoDimensions, playSilently } from "./video-orientation";

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
export function mapRectToFrame(
  rect: { left: number; top: number; width: number; height: number },
  scaleX: number,
  scaleY: number,
  frameW: number,
  frameH: number
): Box | null {
  const x = Math.max(0, Math.min(frameW, rect.left * scaleX));
  const y = Math.max(0, Math.min(frameH, rect.top * scaleY));
  const right = Math.max(0, Math.min(frameW, (rect.left + rect.width) * scaleX));
  const bottom = Math.max(0, Math.min(frameH, (rect.top + rect.height) * scaleY));
  const w = right - x;
  const h = bottom - y;
  if (w <= 0 || h <= 0) return null;
  return { x, y, w, h };
}

/**
 * Draw one frame: the full capture, then each element's live bounding box
 * blurred on top. Exported for unit testing the per-frame logic without a real
 * capture stream. When the 2D context can't apply a blur filter, the region is
 * filled solid instead so sensitive content is still hidden.
 */
export function drawRedactedFrame(
  ctx: CanvasRenderingContext2D,
  video: CanvasImageSource,
  elements: Element[],
  frameW: number,
  frameH: number,
  blurRadius: number,
  supportsFilter: boolean
): void {
  ctx.drawImage(video, 0, 0, frameW, frameH);

  // The current-tab capture is the viewport, so this scale is ~devicePixelRatio;
  // deriving it live also absorbs viewport resizes mid-recording.
  const scaleX = frameW / Math.max(1, window.innerWidth);
  const scaleY = frameH / Math.max(1, window.innerHeight);

  for (const el of elements) {
    const box = mapRectToFrame(
      el.getBoundingClientRect(),
      scaleX,
      scaleY,
      frameW,
      frameH
    );
    if (!box) continue; // scrolled out of view

    ctx.save();
    if (supportsFilter) {
      ctx.filter = `blur(${blurRadius}px)`;
      // Re-sample just this region from the live frame so the blur source is
      // the region itself.
      ctx.drawImage(video, box.x, box.y, box.w, box.h, box.x, box.y, box.w, box.h);
    } else {
      // No canvas filter support — hide the region with a solid fill.
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(box.x, box.y, box.w, box.h);
    }
    ctx.restore();
  }
}

/**
 * Build a canvas-backed copy of a display-capture stream that blurs the live
 * bounding boxes of `elements`. Returns null when the browser can't support the
 * canvas pipeline (no `captureStream` / 2D context), in which case the caller
 * should record the original stream unredacted.
 */
export async function buildRedactedStream(
  displayStream: MediaStream,
  elements: Element[],
  options: RedactionOptions = {}
): Promise<RedactedStream | null> {
  const frameRate = options.frameRate ?? 15;
  const blurRadius = options.blurRadius ?? 12;

  const canvas = document.createElement("canvas");
  if (typeof canvas.captureStream !== "function") return null;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Feature-detect canvas blur; fall back to solid fill where unsupported.
  const supportsFilter = "filter" in ctx;

  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.srcObject = displayStream;

  await waitForVideoDimensions(video);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  await playSilently(video);

  let rafId = 0;
  const draw = (): void => {
    drawRedactedFrame(
      ctx,
      video,
      elements,
      canvas.width,
      canvas.height,
      blurRadius,
      supportsFilter
    );
    rafId = requestAnimationFrame(draw);
  };
  draw();

  const stream = canvas.captureStream(frameRate);

  return {
    stream,
    stop: (): void => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      stream.getTracks().forEach((t) => t.stop());
      video.pause();
      video.srcObject = null;
    },
  };
}
