/**
 * Auto-initialization from a `<script>` tag.
 *
 * Shared by both delivery entries: the legacy UMD/API entry (`index.ts`) and
 * the minimal ESM loader (`loader.ts`). Kept out of `index.ts` so the loader
 * can auto-init without pulling in `index.ts`'s feature re-exports — that
 * re-export graph is what anchors screenshot/video/annotate into the main
 * chunk and defeats code-splitting.
 */
import type { FeedbackConfig } from "./types";
/**
 * Parse config from data-* attributes. Every option that can be written as
 * text has one, so the JSON config block is a choice, not a requirement.
 *
 * Exported for tests: index.ts does not re-export it, so this is not public API.
 */
export declare function parseDataAttributes(script: HTMLScriptElement): Partial<FeedbackConfig> | null;
/**
 * Initialize a QaidFeedback instance from the current `<script>` tag's JSON
 * config block or data-* attributes. Safe to call in any environment — it
 * no-ops when there is no document or no endpoint config.
 */
export declare function autoInit(): void;
