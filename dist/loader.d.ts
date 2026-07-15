/**
 * Minimal ESM loader entry for progressive delivery.
 *
 * ```html
 * <script type="module" src="…/loader.js" data-endpoint="/api/feedback"></script>
 * ```
 *
 * Ships only the core (thumbs buttons, modal, element targeting, submit).
 * Screenshot capture, the annotation editor, and the video subsystem
 * (including redaction) load on demand as separate chunks the first time each
 * is used — so a visitor who only gives a thumbs-up never downloads them.
 *
 * The full programmatic API (createVideoRecorder, openAnnotationEditor, …)
 * lives on the package's main entry (`@qaiddev/thumbs-embed`).
 */
import { QaidFeedback } from "./embed";
export { QaidFeedback };
export type { FeedbackConfig } from "./types";
