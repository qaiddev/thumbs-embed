/**
 * @qaiddev/thumbs-embed - Standalone Feedback Embed
 *
 * A zero-dependency feedback embed with element targeting.
 *
 * Usage via ES module:
 * ```typescript
 * import { QaidFeedback } from '@qaiddev/thumbs-embed';
 *
 * const embed = new QaidFeedback({ endpoint: '/api/feedback' });
 * ```
 *
 * Usage via script tag (full bundle):
 * ```html
 * <script src="qaid.umd.cjs" data-endpoint="/api/feedback"></script>
 * ```
 *
 * For progressive loading (small core + on-demand screenshot/video/redaction
 * chunks), load the ESM loader instead:
 * ```html
 * <script type="module" src="…/loader.js" data-endpoint="/api/feedback"></script>
 * ```
 *
 * This entry re-exports the full public API. Because those re-exports pull the
 * feature modules into this chunk, this entry is the "full" bundle; the
 * `loader` entry stays lean so its features split into on-demand chunks.
 */
import { QaidFeedback } from "./embed";
export { QaidFeedback };
export type { FeedbackConfig, QuestsLaunchConfig, ResolvedFeedbackConfig, ConsoleError, NetworkError, FeedbackData, SelectedBounds, FeedbackPayload, FeedbackResponse, FeedbackMessagePayload, } from "./types";
export { captureNetworkErrors } from "./network-capture";
export type { NetworkCapture } from "./network-capture";
export { createVideoRecorder, isVideoRecordingSupported, getSupportedMimeType } from "./video-capture";
export type { VideoRecorder, VideoRecorderOptions } from "./video-capture";
export { captureDomScreenshot, isDomScreenshotSupported } from "./screenshot-dom";
export type { DomScreenshotOptions } from "./screenshot-dom";
export { openAnnotationEditor, compositeAnnotations, drawShape, rectFromPoints, AnnotationEditor, } from "./annotate";
export type { Shape, ShapeType, Point, AnnotationLabels, AnnotationEditorOptions, } from "./annotate";
