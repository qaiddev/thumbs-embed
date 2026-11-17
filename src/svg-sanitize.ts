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

const SVG_NS = "http://www.w3.org/2000/svg";

/** Allowed elements, keyed by lower case so `lineargradient` maps back. */
const ELEMENTS: Record<string, string> = {};
for (const name of [
  "svg", "g", "path", "circle", "ellipse", "rect", "line", "polyline", "polygon",
  "title", "desc", "defs", "linearGradient", "radialGradient", "stop", "clipPath",
]) {
  ELEMENTS[name.toLowerCase()] = name;
}

/** Allowed attributes (presentation, geometry, a11y), keyed by lower case. */
const ATTRIBUTES: Record<string, string> = {};
for (const name of [
  "viewBox", "width", "height", "preserveAspectRatio", "version",
  "fill", "fill-rule", "fill-opacity", "stroke", "stroke-width", "stroke-linecap",
  "stroke-linejoin", "stroke-miterlimit", "stroke-dasharray", "stroke-dashoffset",
  "stroke-opacity", "clip-rule", "clip-path", "clipPathUnits", "opacity",
  "vector-effect", "shape-rendering",
  "d", "points", "x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "fx", "fy",
  "transform", "class", "id", "offset", "stop-color", "stop-opacity",
  "gradientUnits", "gradientTransform", "spreadMethod",
  "aria-hidden", "aria-label", "focusable", "role",
]) {
  ATTRIBUTES[name.toLowerCase()] = name;
}

/** Elements whose text is kept (an icon's accessible name). */
const TEXT_ELEMENTS = new Set(["title", "desc"]);

/** Big enough for any real icon; bounds the work a hostile string can cause. */
const MAX_LENGTH = 50_000;
const MAX_ELEMENTS = 1_000;

const NAMED_ENTITIES: Record<string, string> = {
  lt: "<",
  gt: ">",
  amp: "&",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(value: string): string {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, body: string) => {
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X"
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10);
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : "";
    }
    return NAMED_ENTITIES[body.toLowerCase()] ?? whole;
  });
}

const LOCAL_URL = /url\(\s*(['"]?)#[A-Za-z_][\w.:-]*\1\s*\)/gi;

/**
 * Whether an attribute value is safe to keep. No script URLs anywhere, and a
 * `url(…)` only when it points at an id inside the icon (`url(#grad)`).
 * `clip-path` takes nothing but such a reference (or `none`).
 */
export function isSafeValue(attr: string, value: string): boolean {
  // Strip what browsers ignore inside URLs and CSS, so `java\tscript:` and
  // `u\nrl(` can't slip past the checks.
  // eslint-disable-next-line no-control-regex
  const squashed = value.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase();
  if (/(java|vb)script:|data:|expression\(/.test(squashed)) return false;
  const withoutLocal = value.replace(LOCAL_URL, "");
  // eslint-disable-next-line no-control-regex
  if (/url\(/.test(withoutLocal.replace(/[\u0000- \u007f-\u009f]+/g, "").toLowerCase())) {
    return false;
  }
  if (attr === "clip-path") {
    return /^\s*none\s*$/i.test(value) || new RegExp(`^\\s*${LOCAL_URL.source}\\s*$`, "i").test(value);
  }
  return true;
}

interface Frame {
  name: string;
  /** null while inside an element that was dropped. */
  node: Element | null;
}

/**
 * Parse an SVG string into a detached, allowlisted `<svg>` element, or
 * `null` when the string is not one.
 */
export function sanitizeSvg(markup: unknown): SVGSVGElement | null {
  if (typeof markup !== "string" || typeof document === "undefined") return null;
  const src = markup.trim();
  if (!src || src.length > MAX_LENGTH) return null;

  let root: SVGSVGElement | null = null;
  let rootClosed = false;
  let count = 0;
  const stack: Frame[] = [];
  let i = 0;

  const top = (): Frame | undefined => stack[stack.length - 1];

  while (i < src.length) {
    if (rootClosed) break;
    const lt = src.indexOf("<", i);
    const textEnd = lt === -1 ? src.length : lt;
    if (textEnd > i) {
      const text = src.slice(i, textEnd);
      const frame = top();
      if (frame?.node && TEXT_ELEMENTS.has(frame.name)) {
        frame.node.appendChild(document.createTextNode(decodeEntities(text)));
      } else if (!frame && text.trim()) {
        return null; // text outside the root
      }
    }
    if (lt === -1) break;
    i = lt;

    if (src.startsWith("<!--", i)) {
      const end = src.indexOf("-->", i + 4);
      if (end === -1) return null;
      i = end + 3;
      continue;
    }
    if (src.startsWith("<?", i)) {
      // The XML prolog (`<?xml version="1.0"?>`), only before the root.
      if (root) return null;
      const end = src.indexOf("?>", i + 2);
      if (end === -1) return null;
      i = end + 2;
      continue;
    }
    if (src.startsWith("<!", i)) {
      // DOCTYPE (and with it entity definitions) or CDATA: never in an icon.
      return null;
    }

    if (src[i + 1] === "/") {
      const m = /^<\/\s*([A-Za-z][\w:.-]*)\s*>/.exec(src.slice(i, i + 200));
      if (!m) return null;
      i += m[0].length;
      const name = m[1].toLowerCase();
      // Pop to the matching open element; a stray close tag is ignored.
      const at = stack.map((f) => f.name).lastIndexOf(name);
      if (at !== -1) {
        stack.length = at;
        if (at === 0) rootClosed = true;
      }
      continue;
    }

    // Start tag.
    const nameMatch = /^<([A-Za-z][\w:.-]*)/.exec(src.slice(i, i + 200));
    if (!nameMatch) return null;
    const rawName = nameMatch[1];
    const lowerName = rawName.toLowerCase();
    i += nameMatch[0].length;

    const attrs: Array<[string, string]> = [];
    let selfClosing = false;
    let closed = false;
    while (i < src.length) {
      const ws = /^\s*/.exec(src.slice(i, i + 1000))![0];
      i += ws.length;
      if (src.startsWith("/>", i)) {
        selfClosing = true;
        closed = true;
        i += 2;
        break;
      }
      if (src[i] === ">") {
        closed = true;
        i += 1;
        break;
      }
      const attrMatch = /^([^\s=/>"'<]+)/.exec(src.slice(i, i + 200));
      if (!attrMatch) return null;
      const attrName = attrMatch[1];
      i += attrName.length;
      let value = "";
      const eq = /^\s*=\s*/.exec(src.slice(i, i + 1000));
      if (eq) {
        i += eq[0].length;
        const quote = src[i];
        if (quote === '"' || quote === "'") {
          const end = src.indexOf(quote, i + 1);
          if (end === -1) return null;
          value = src.slice(i + 1, end);
          i = end + 1;
        } else {
          const bare = /^[^\s>]+/.exec(src.slice(i, i + MAX_LENGTH));
          if (!bare) return null;
          value = bare[0];
          if (value.endsWith("/") && src[i + value.length] === ">") value = value.slice(0, -1);
          i += value.length;
        }
      }
      attrs.push([attrName, decodeEntities(value)]);
    }
    if (!closed) return null;

    if (++count > MAX_ELEMENTS) return null;

    const parent = top();
    if (!parent) {
      if (root || lowerName !== "svg") return null;
    } else if (!parent.node) {
      if (!selfClosing) stack.push({ name: lowerName, node: null });
      continue;
    }

    const canonical = ELEMENTS[lowerName];
    if (!canonical) {
      // Not allowed: drop it and everything inside it.
      if (!selfClosing) stack.push({ name: lowerName, node: null });
      continue;
    }

    const el = document.createElementNS(SVG_NS, canonical);
    for (const [name, value] of attrs) {
      const attr = ATTRIBUTES[name.toLowerCase()];
      if (!attr) continue; // on*, href, xlink:*, style, xmlns, …
      if (!isSafeValue(attr, value)) continue;
      el.setAttribute(attr, value);
    }

    if (parent) {
      parent.node!.appendChild(el);
    } else {
      root = el as SVGSVGElement;
    }
    if (selfClosing) {
      if (!parent) rootClosed = true;
    } else {
      stack.push({ name: lowerName, node: el });
    }
  }

  return root;
}

/**
 * The icon to draw: the sanitized `markup`, or the built-in `fallback` when
 * `markup` is missing or not an SVG. The fallback is one of the embed's own
 * constants and always parses.
 */
export function iconNode(markup: string | null | undefined, fallback: string): SVGSVGElement {
  return (markup ? sanitizeSvg(markup) : null) ?? (sanitizeSvg(fallback) as SVGSVGElement);
}

/** Replace an element's content with an icon (see {@link iconNode}). */
export function setIcon(el: Element, markup: string | null | undefined, fallback: string): void {
  el.textContent = "";
  el.appendChild(iconNode(markup, fallback));
}
