/**
 * Nano DOM factory — a purpose-built, construction-only helper for this embed.
 *
 * The embed builds all of its UI imperatively inside a Shadow DOM. That means
 * the same create → set class/style/attrs → wire events → append dance repeats
 * across every button, overlay, modal, and recording control. `h()` collapses
 * that dance into a single declarative expression.
 *
 * It is deliberately NOT a framework: no reactivity, no virtual DOM, no runtime
 * state. It only constructs. That fits what the embed actually needs (one-shot
 * DOM construction plus a few imperative updates), adds no dependency, and
 * keeps the package zero-dependency. Aliasing `document` here also lets the
 * minifier mangle the call site, which the global `document.createElement`
 * can't be.
 */

const d = document;

export interface ElProps {
  /** className */
  class?: string;
  /** Inline styles as a cssText string. */
  style?: string;
  /** innerHTML — for icons / trusted SVG markup. */
  html?: string;
  /** textContent. */
  text?: string;
  /** Attributes set via setAttribute (aria-*, data-*, type, role, …). */
  attrs?: Record<string, string>;
  /** Event listeners keyed by type. */
  on?: Record<string, (e: Event) => void>;
}

type Child = Node | string | null | undefined | false;

/**
 * Create an element, apply props, and append children. Falsy children are
 * skipped so conditional content reads cleanly (`cond && h(...)`).
 */
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props?: ElProps | null,
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const el = d.createElement(tag);
  if (props) {
    if (props.class) el.className = props.class;
    if (props.style) el.style.cssText = props.style;
    if (props.html != null) el.innerHTML = props.html;
    if (props.text != null) el.textContent = props.text;
    if (props.attrs) {
      for (const k in props.attrs) el.setAttribute(k, props.attrs[k]);
    }
    if (props.on) {
      for (const k in props.on) el.addEventListener(k, props.on[k]);
    }
  }
  for (const child of children) {
    if (child != null && child !== false) el.append(child);
  }
  return el;
}
