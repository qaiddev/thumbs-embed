/**
 * SVG icon sanitizer.
 *
 * Icons (`positiveIcon`, `negativeIcon`, `feedbackIcon`, `recordIcon`) are
 * SVG strings the site owner supplies, and a theme can carry them from a
 * public gallery someone else wrote. They used to go straight into
 * `innerHTML`, so an icon could carry `<script>`, `onload=` or a
 * `javascript:` link into the partner's page.
 *
 * This module never hands markup to the browser's HTML parser. A small
 * tokenizer reads the string, keeps only the elements and attributes on the
 * allowlists below, and builds the result with `document.createElementNS`.
 * That also keeps the embed free of innerHTML sinks, so it runs on pages that
 * enforce Trusted Types. Anything that is not a well-formed `<svg>` root
 * comes back as `null`; `iconNode` then draws the built-in icon instead.
 */
/**
 * Whether an attribute value is safe to keep. No script URLs anywhere, and a
 * `url(…)` only when it points at an id inside the icon (`url(#grad)`).
 * `clip-path` takes nothing but such a reference (or `none`).
 */
export declare function isSafeValue(attr: string, value: string): boolean;
/**
 * Parse an SVG string into a detached, allowlisted `<svg>` element, or
 * `null` when the string is not one.
 */
export declare function sanitizeSvg(markup: unknown): SVGSVGElement | null;
/**
 * The icon to draw: the sanitized `markup`, or the built-in `fallback` when
 * `markup` is missing or not an SVG. The fallback is one of the embed's own
 * constants and always parses.
 */
export declare function iconNode(markup: string | null | undefined, fallback: string): SVGSVGElement;
/** Replace an element's content with an icon (see {@link iconNode}). */
export declare function setIcon(el: Element, markup: string | null | undefined, fallback: string): void;
