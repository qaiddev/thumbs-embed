/**
 * @qaiddev/thumbs-embed - Standalone Feedback Embed
 *
 * A zero-dependency feedback embed with element targeting.
 *
 * Usage via ES module:
 * ```typescript
 * import { QaidFeedback } from '@qaiddev/thumbs-embed';
 *
 * const embed = new QaidFeedback({
 *   endpoint: '/api/feedback'
 * });
 * ```
 *
 * Usage via script tag:
 * ```html
 * <script src="feedback.umd.cjs" data-endpoint="/api/feedback"></script>
 * ```
 *
 * Or manually initialize:
 * ```html
 * <script src="feedback.umd.cjs"></script>
 * <script>
 *   const embed = new QaidFeedback.QaidFeedback({
 *     endpoint: '/api/feedback'
 *   });
 * </script>
 * ```
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
