/**
 * Minimal ESM loader entry for progressive delivery.
 *
 * ```html
 * <script type="module" src="…/loader.js" data-endpoint="/api/feedback"></script>
 * ```
 *
 * Ships only the core (the buttons, their styles, the config parser). The
 * click path (send flow, message box, element targeting) loads as separate
 * chunks when the pointer or focus reaches the buttons, or on idle. Screenshot
 * capture, the annotation editor, and the video subsystem (including
 * redaction) load on demand the first time each is used — so a visitor who
 * only gives a thumbs-up never downloads them.
 *
 * The full programmatic API (createVideoRecorder, openAnnotationEditor, …)
 * lives on the package's main entry (`@qaiddev/thumbs-embed`).
 */

import { QaidFeedback } from "./embed";
import { autoInit } from "./bootstrap";

export { QaidFeedback };
export type { FeedbackConfig } from "./types";

autoInit();
