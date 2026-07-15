/**
 * iOS/iPadOS screen-recording orientation fix.
 *
 * On iOS/iPadOS, `getDisplayMedia` + `MediaRecorder` writes a device-orientation
 * rotation into the recorded file (even for screen captures). Players disagree
 * on whether to honour it — the widget's own preview `<video>` renders it
 * sideways, and so does the dashboard. Re-encoding the *live* decoded frames
 * (which carry no container rotation) through a canvas produces a file whose
 * pixels are already upright with no rotation metadata, so it renders the same
 * everywhere.
 *
 * If the live frames themselves come back with swapped dimensions (portrait
 * frame while the viewport is landscape, or vice versa), we additionally rotate
 * the canvas 90° to match the viewport. That branch only triggers on a clear
 * orientation mismatch, so a correctly-oriented recording is never rotated.
 */

export interface OrientationTransform {
  /** Output canvas width in px. */
  width: number;
  /** Output canvas height in px. */
  height: number;
  /** Clockwise rotation to apply while drawing: 0, 90, or -90. */
  rotate: 0 | 90 | -90;
}

export interface OrientationCorrectedStream {
  /** Canvas-sourced stream to hand to MediaRecorder. */
  stream: MediaStream;
  /** Stop drawing and release the canvas stream + source video. */
  stop: () => void;
}

/** True on iPhone/iPad/iPod, including iPadOS 13+ which reports as desktop Mac. */
export function isIOSDevice(): boolean {
  const ua = navigator.userAgent || "";
  return (
    /iP(hone|ad|od)/.test(ua) ||
    // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
    (navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1)
  );
}

/**
 * Decide the output canvas size and rotation needed to render a `frameW×frameH`
 * capture upright for a `viewportW×viewportH` viewport. When the frame and
 * viewport share an orientation, no rotation is applied (a straight re-encode,
 * which still strips the bad container rotation). Otherwise rotate 90°, its
 * direction chosen from the screen orientation angle.
 */
export function computeOrientationTransform(
  frameW: number,
  frameH: number,
  viewportW: number,
  viewportH: number,
  screenAngle: number
): OrientationTransform {
  const frameLandscape = frameW >= frameH;
  const viewportLandscape = viewportW >= viewportH;

  if (frameLandscape === viewportLandscape) {
    return { width: frameW, height: frameH, rotate: 0 };
  }

  // Landscape-secondary (angle 270) is turned the opposite way to primary (90).
  const rotate: 90 | -90 = screenAngle === 270 ? -90 : 90;
  return { width: frameH, height: frameW, rotate };
}

/** Draw one video frame onto the canvas context, applying the transform. */
export function drawRotatedFrame(
  ctx: CanvasRenderingContext2D,
  source: CanvasImageSource,
  t: OrientationTransform
): void {
  if (t.rotate === 0) {
    ctx.drawImage(source, 0, 0, t.width, t.height);
    return;
  }

  ctx.save();
  if (t.rotate === 90) {
    ctx.translate(t.width, 0);
    ctx.rotate(Math.PI / 2);
  } else {
    ctx.translate(0, t.height);
    ctx.rotate(-Math.PI / 2);
  }
  // The source is drawn at its natural (unrotated) extents, which are the
  // output dimensions swapped back.
  ctx.drawImage(source, 0, 0, t.height, t.width);
  ctx.restore();
}

function getScreenAngle(): number {
  const orientation =
    typeof screen !== "undefined" ? screen.orientation : undefined;
  return orientation && typeof orientation.angle === "number"
    ? orientation.angle
    : 0;
}

export function waitForVideoDimensions(video: HTMLVideoElement): Promise<void> {
  return new Promise<void>((resolve) => {
    if (video.videoWidth > 0) {
      resolve();
      return;
    }
    video.addEventListener("loadedmetadata", () => resolve(), { once: true });
  });
}

export async function playSilently(video: HTMLVideoElement): Promise<void> {
  try {
    await video.play();
  } catch {
    // Autoplay can reject without a gesture; the element still produces frames
    // for the canvas, so this is non-fatal.
  }
}

/**
 * Build a canvas-backed, orientation-normalised copy of a display-capture
 * stream. Returns null when the browser can't support the canvas pipeline, in
 * which case the caller should record the original stream directly.
 */
export async function buildOrientationCorrectedStream(
  displayStream: MediaStream,
  frameRate = 15
): Promise<OrientationCorrectedStream | null> {
  const canvas = document.createElement("canvas");
  if (typeof canvas.captureStream !== "function") return null;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.srcObject = displayStream;

  await waitForVideoDimensions(video);

  const transform = computeOrientationTransform(
    video.videoWidth,
    video.videoHeight,
    window.innerWidth,
    window.innerHeight,
    getScreenAngle()
  );
  canvas.width = transform.width;
  canvas.height = transform.height;

  await playSilently(video);

  let rafId = 0;
  const draw = (): void => {
    drawRotatedFrame(ctx, video, transform);
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
