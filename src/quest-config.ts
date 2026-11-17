/**
 * Where the quests module comes from.
 *
 * The default is one exact release on unpkg, never a floating `@1`: a
 * floating tag would run whatever is published next on every partner page.
 * Its sha384 is checked before the module runs (see quest-launcher.ts), so a
 * changed file on the CDN refuses to load instead of running.
 */

/** The quests-embed release this thumbs-embed release opens quests with. */
export const QUESTS_VERSION = "1.11.0";

/** Default ES-module URL for the quests embed: one exact release on unpkg. */
export const DEFAULT_QUESTS_MODULE_URL =
  `https://unpkg.com/@qaiddev/quests-embed@${QUESTS_VERSION}/dist/qaid-quests.js`;

/**
 * Subresource Integrity of {@link DEFAULT_QUESTS_MODULE_URL}: the sha384 of
 * quests-embed's `dist/qaid-quests.js` at {@link QUESTS_VERSION}. Change the
 * two together.
 */
export const DEFAULT_QUESTS_MODULE_INTEGRITY =
  "sha384-w5xVbyvdrJUM+he0J0AFPtdzfem3CLSbVKUydXWcMAP28z2anhQmlNgWGulyY7kl";

const PINNED_UNPKG =
  /^https:\/\/unpkg\.com\/@qaiddev\/quests-embed@\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?\//;

let warned = false;

/**
 * The module URL to use for a configured `moduleUrl`. A custom URL is kept
 * only when it is same-origin with the page (self-hosting) or one exact
 * quests-embed release on unpkg over https. Anything else, a floating
 * version or another host, is refused with one warning and the default used.
 */
export function resolveQuestsModuleUrl(moduleUrl: string | null | undefined): string {
  if (!moduleUrl) return DEFAULT_QUESTS_MODULE_URL;
  if (moduleUrl === DEFAULT_QUESTS_MODULE_URL) return moduleUrl;
  try {
    const page = typeof location !== "undefined" ? location.href : undefined;
    // Judge the URL the browser will actually fetch: resolving first turns
    // `…@1.11.0/../../other-pkg/x.js` (or its %2e%2e spelling) into
    // `https://unpkg.com/other-pkg/x.js`, which the pin must refuse.
    const url = new URL(moduleUrl, page);
    if (PINNED_UNPKG.test(url.href) && !/%2e|%2f|%5c/i.test(url.pathname)) return url.href;
    if (
      page &&
      url.origin === new URL(page).origin &&
      (url.protocol === "https:" || url.protocol === "http:")
    ) {
      return url.href;
    }
  } catch {
    /* not a URL: refused below */
  }
  if (!warned) {
    warned = true;
    console.warn(
      `[thumbs-embed] Ignoring quests moduleUrl "${moduleUrl}": use a same-origin URL or ` +
        `https://unpkg.com/@qaiddev/quests-embed@<exact version>/…. Using ${DEFAULT_QUESTS_MODULE_URL}.`
    );
  }
  return DEFAULT_QUESTS_MODULE_URL;
}

/** @internal Test seam: let the next refusal warn again. */
export function _resetQuestsModuleWarning(): void {
  warned = false;
}
