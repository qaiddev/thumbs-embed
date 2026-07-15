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
export declare function isIOSDevice(): boolean;
/**
 * Decide the output canvas size and rotation needed to render a `frameW×frameH`
 * capture upright for a `viewportW×viewportH` viewport. When the frame and
 * viewport share an orientation, no rotation is applied (a straight re-encode,
 * which still strips the bad container rotation). Otherwise rotate 90°, its
 * direction chosen from the screen orientation angle.
 */
export declare function computeOrientationTransform(frameW: number, frameH: number, viewportW: number, viewportH: number, screenAngle: number): OrientationTransform;
/** Draw one video frame onto the canvas context, applying the transform. */
export declare function drawRotatedFrame(ctx: CanvasRenderingContext2D, source: CanvasImageSource, t: OrientationTransform): void;
export declare function waitForVideoDimensions(video: HTMLVideoElement): Promise<void>;
export declare function playSilently(video: HTMLVideoElement): Promise<void>;
/**
 * Build a canvas-backed, orientation-normalised copy of a display-capture
 * stream. Returns null when the browser can't support the canvas pipeline, in
 * which case the caller should record the original stream directly.
 */
export declare function buildOrientationCorrectedStream(displayStream: MediaStream, frameRate?: number): Promise<OrientationCorrectedStream | null>;
