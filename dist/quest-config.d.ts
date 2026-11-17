/**
 * Where the quests module comes from.
 *
 * The default is one exact release on unpkg, never a floating `@1`: a
 * floating tag would run whatever is published next on every partner page.
 * Its sha384 is checked before the module runs (see quest-launcher.ts), so a
 * changed file on the CDN refuses to load instead of running.
 */
/** The quests-embed release this thumbs-embed release opens quests with. */
export declare const QUESTS_VERSION = "1.11.0";
/** Default ES-module URL for the quests embed: one exact release on unpkg. */
export declare const DEFAULT_QUESTS_MODULE_URL = "https://unpkg.com/@qaiddev/quests-embed@1.11.0/dist/qaid-quests.js";
/**
 * Subresource Integrity of {@link DEFAULT_QUESTS_MODULE_URL}: the sha384 of
 * quests-embed's `dist/qaid-quests.js` at {@link QUESTS_VERSION}. Change the
 * two together.
 */
export declare const DEFAULT_QUESTS_MODULE_INTEGRITY = "sha384-w5xVbyvdrJUM+he0J0AFPtdzfem3CLSbVKUydXWcMAP28z2anhQmlNgWGulyY7kl";
/**
 * The module URL to use for a configured `moduleUrl`. A custom URL is kept
 * only when it is same-origin with the page (self-hosting) or one exact
 * quests-embed release on unpkg over https. Anything else, a floating
 * version or another host, is refused with one warning and the default used.
 */
export declare function resolveQuestsModuleUrl(moduleUrl: string | null | undefined): string;
/** @internal Test seam: let the next refusal warn again. */
export declare function _resetQuestsModuleWarning(): void;
