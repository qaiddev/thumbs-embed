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
 * The `<script>` tag that loaded this copy of the embed, or null.
 *
 * A classic script has `document.currentScript`. A module has its own URL
 * (`import.meta.url`, passed in as `selfUrl`) instead: the tag whose `src` is
 * that URL. A CDN redirect (unpkg's `@1` → `@1.13.0`) changes the URL, so
 * failing an exact match we take the one tag embed.js injected, then the one
 * tag with the same file name. More than one candidate is ambiguous and
 * finds nothing: the embed never guesses which tag's config to trust.
 */
export declare function findOwnScript(selfUrl?: string): HTMLScriptElement | null;
/**
 * The JSON config block that belongs to this embed's tag: the element its
 * `data-config-id` names, else a `data-feedback-config` block right before or
 * right after the tag. A block anywhere else on the page is ignored, so
 * markup injected elsewhere can't swap the endpoint, icons or module URL.
 *
 * For the embed.js install the tag that counts is the customer's own
 * `embed.js` tag, not the one it injected into `<head>`.
 */
export declare function findConfigBlock(own: HTMLScriptElement): HTMLScriptElement | null;
/**
 * Parse config from data-* attributes. Every option that can be written as
 * text has one, so the JSON config block is a choice, not a requirement.
 *
 * Exported for tests: index.ts does not re-export it, so this is not public API.
 */
export declare function parseDataAttributes(script: HTMLScriptElement): Partial<FeedbackConfig> | null;
/**
 * Initialize a QaidFeedback instance from the embed's own `<script>` tag: its
 * JSON config block or its data-* attributes. Safe to call in any
 * environment — it no-ops when there is no document, when the embed's own tag
 * can't be found (an npm import in a bundle), or when there is no endpoint.
 *
 * @param selfUrl the running module's URL (`import.meta.url`), used to find
 *   the tag when `document.currentScript` is null (ES modules).
 */
export declare function autoInit(selfUrl?: string): void;
