/**
 * Element selector generation utilities
 */

/** Data attributes to look for (in priority order) */
export const DATA_ATTRS = ["data-comp", "data-qa", "data-testid", "data-id"];

export interface ElementInfo {
  selector: string;
  text: string;
  dataAttr: string | null;
}

/**
 * Find the first matching data attribute on an element or its ancestors
 */
export function findDataAttribute(
  element: Element,
  stopAt: Element = document.body
): string | null {
  let current: Element | null = element;

  while (current && current !== stopAt) {
    for (const attr of DATA_ATTRS) {
      const value = current.getAttribute(attr);
      if (value) {
        return `${attr}="${value}"`;
      }
    }
    current = current.parentElement;
  }

  return null;
}

/**
 * Get truncated text content from an element
 */
export function getTruncatedText(element: Element, maxLength = 100): string {
  const textContent = element.textContent?.trim().slice(0, maxLength) || "";
  return textContent.length === maxLength ? textContent + "..." : textContent;
}

/**
 * Get the nth-child index of an element among its siblings
 */
function getNthChildIndex(element: Element): number {
  let index = 1;
  let sibling = element.previousElementSibling;
  while (sibling) {
    index++;
    sibling = sibling.previousElementSibling;
  }
  return index;
}

/**
 * Generate an nth-child path from body to the element
 * This is always a valid CSS selector and uniquely identifies the element
 * Exported for testing
 */
export function generateNthChildPath(element: Element): string {
  const path: string[] = [];
  let current: Element | null = element;

  while (current && current !== document.body && current !== document.documentElement) {
    const tag = current.tagName.toLowerCase();
    const index = getNthChildIndex(current);
    path.unshift(`${tag}:nth-child(${index})`);
    current = current.parentElement;
  }

  return path.length > 0 ? `body > ${path.join(" > ")}` : "body";
}

/**
 * Escape special CSS characters in a string (for IDs with special chars)
 */
function escapeCSSIdentifier(str: string): string {
  return str.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}

/**
 * Generate a selector string for an element
 * Priority: data attribute > ID > nth-child path
 */
export function generateSelector(element: Element): string {
  // Try data attribute first (on element or ancestors) - most stable
  const dataAttr = findDataAttribute(element);
  if (dataAttr) {
    return `[${dataAttr}]`;
  }

  // Try ID (escaped for special characters)
  if (element.id) {
    return `#${escapeCSSIdentifier(element.id)}`;
  }

  // Fall back to nth-child path - always valid and unique
  return generateNthChildPath(element);
}

/**
 * Generate complete element info for feedback
 */
export function generateElementInfo(element: Element): ElementInfo {
  const text = getTruncatedText(element);
  const dataAttr = findDataAttribute(element);
  const selector = generateSelector(element);

  return { selector, text, dataAttr };
}

/* -------------------------------------------------------------------------- */
/* Keyboard element targeting                                                 */
/*                                                                            */
/* The mouse targeting path in embed.ts resolves the target with             */
/* elementFromPoint(clientX, clientY). A keyboard-activated thumb produces a  */
/* synthetic click at (0, 0), so a keyboard-only user can never point at a    */
/* real element. This controller provides a coordinate-free alternative:      */
/* Tab / arrow keys move a highlight between candidate elements (seeded from  */
/* document.activeElement), Enter / Space selects, Escape cancels. It never   */
/* hides the cursor — it drives the *native* focus ring instead, so both      */
/* sighted keyboard users and screen readers can follow the highlight.        */
/* -------------------------------------------------------------------------- */

/**
 * Default set of "targetable" elements for keyboard navigation: focusable
 * controls, ARIA-role'd nodes, common semantic content, and anything already
 * carrying one of the stable data attributes we key selectors off of.
 */
export const TARGETABLE_SELECTOR: string = [
  "a[href]",
  "button",
  "input:not([type=hidden])",
  "select",
  "textarea",
  "summary",
  "[tabindex]",
  "[role]",
  "img",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "label",
  ...DATA_ATTRS.map((attr) => `[${attr}]`),
].join(",");

/** Tag names that already take keyboard focus without an added tabindex. */
const NATIVELY_FOCUSABLE = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;

/**
 * Best-effort visibility test used to keep invisible nodes out of the keyboard
 * candidate list. Deliberately layout-free (no getBoundingClientRect) so it is
 * stable in headless/test environments: it only rejects nodes that are
 * explicitly hidden via the `hidden` attribute, `aria-hidden`, or a computed
 * `display:none` / `visibility:hidden`.
 */
export function isElementVisible(element: Element): boolean {
  if (element.hasAttribute("hidden")) return false;
  if (element.getAttribute("aria-hidden") === "true") return false;
  const view = element.ownerDocument?.defaultView;
  if (view && typeof view.getComputedStyle === "function") {
    const style = view.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden") return false;
  }
  return true;
}

export interface CollectTargetableOptions {
  /** Where to search for candidates (default `document.body`). */
  root?: ParentNode;
  /** CSS selector for candidate elements (default {@link TARGETABLE_SELECTOR}). */
  selector?: string;
  /** Return true to drop an element (e.g. the embed's own shadow hosts). */
  isExcluded?: (element: Element) => boolean;
  /** Visibility predicate (default {@link isElementVisible}). */
  isVisible?: (element: Element) => boolean;
}

/**
 * Collect the ordered list of elements a keyboard user can target. Document
 * order matches the natural Tab order closely enough for feedback targeting.
 */
export function collectTargetableElements(
  options: CollectTargetableOptions = {}
): Element[] {
  const root = options.root ?? document.body;
  const selector = options.selector ?? TARGETABLE_SELECTOR;
  const isExcluded = options.isExcluded ?? (() => false);
  const isVisible = options.isVisible ?? isElementVisible;

  return Array.from(root.querySelectorAll(selector)).filter(
    (element) => !isExcluded(element) && isVisible(element)
  );
}

export interface KeyboardTargetingOptions {
  /**
   * Explicit candidate list. When omitted, candidates are collected via
   * {@link collectTargetableElements} using `root` / `selector` / `isExcluded`
   * / `isVisible`.
   */
  candidates?: Element[];
  /** Passed through to {@link collectTargetableElements} when `candidates` is omitted. */
  root?: ParentNode;
  /** Passed through to {@link collectTargetableElements} when `candidates` is omitted. */
  selector?: string;
  /** Passed through to {@link collectTargetableElements} when `candidates` is omitted. */
  isExcluded?: (element: Element) => boolean;
  /** Passed through to {@link collectTargetableElements} when `candidates` is omitted. */
  isVisible?: (element: Element) => boolean;
  /**
   * Element to start the highlight on. Defaults to `document.activeElement`
   * when it is one of the candidates, otherwise the first candidate.
   */
  initial?: Element | null;
  /**
   * Move native focus to the highlighted element (default true). This is what
   * keeps a screen reader / focus ring on the highlight; non-focusable nodes
   * get a temporary `tabindex="-1"` that is removed on {@link stop}. The cursor
   * is never hidden.
   */
  moveFocus?: boolean;
  /** Where the keydown listener is attached (default `document`). */
  eventTarget?: Document | HTMLElement;
  /** Fired whenever the highlighted candidate changes (and once on start). */
  onHighlight?: (element: Element, index: number) => void;
  /** Fired when the user commits a selection (Enter / Space). Auto-stops first. */
  onSelect: (element: Element) => void;
  /** Fired when the user cancels (Escape). Auto-stops first. */
  onCancel?: () => void;
}

export interface KeyboardTargetingController {
  /** The (frozen) candidate list being navigated. */
  readonly candidates: readonly Element[];
  /** Index of the highlighted candidate, or -1 when there are none. */
  getIndex(): number;
  /** The highlighted candidate, or null when there are none. */
  getCurrent(): Element | null;
  /** Highlight the next candidate (wraps to the first). */
  next(): void;
  /** Highlight the previous candidate (wraps to the last). */
  prev(): void;
  /** Highlight a specific index (wraps out-of-range values). */
  moveTo(index: number): void;
  /** Commit the current candidate (fires onSelect) and stop. */
  select(): void;
  /** Cancel (fires onCancel) and stop. */
  cancel(): void;
  /**
   * Handle a keydown. Wired automatically to `eventTarget`; exposed so a host
   * can forward events from another surface (e.g. the embed's shadow root).
   */
  handleKey(event: KeyboardEvent): void;
  /** Remove the listener and restore any temporary tabindex. Idempotent. */
  stop(): void;
}

/**
 * Start a keyboard element-targeting session. The returned controller wires its
 * own capture-phase keydown listener on `eventTarget` and emits the initial
 * highlight synchronously before returning.
 */
export function startKeyboardTargeting(
  options: KeyboardTargetingOptions
): KeyboardTargetingController {
  const candidates =
    options.candidates ??
    collectTargetableElements({
      root: options.root,
      selector: options.selector,
      isExcluded: options.isExcluded,
      isVisible: options.isVisible,
    });

  const moveFocus = options.moveFocus ?? true;
  const target: EventTarget = options.eventTarget ?? document;
  const addedTabindex = new Set<Element>();

  let index = -1;
  let stopped = false;

  // Seed the highlight from the currently focused element when it is a
  // candidate; this makes "Tab to a control, then hit the thumb" land on that
  // control rather than the top of the page.
  const seed =
    options.initial !== undefined
      ? options.initial
      : typeof document !== "undefined"
        ? document.activeElement
        : null;
  if (seed) {
    const seedIndex = candidates.indexOf(seed);
    if (seedIndex >= 0) index = seedIndex;
  }
  if (index < 0 && candidates.length > 0) index = 0;

  function focusCurrent(element: Element): void {
    if (!moveFocus) return;
    const focusable = element as HTMLElement;
    if (typeof focusable.focus !== "function") return;
    // Make non-focusable content (p, img, li, …) programmatically focusable so
    // the native focus ring and AT follow the highlight. Never hide the cursor.
    if (
      element.getAttribute("tabindex") === null &&
      !NATIVELY_FOCUSABLE.test(element.tagName)
    ) {
      element.setAttribute("tabindex", "-1");
      addedTabindex.add(element);
    }
    try {
      focusable.focus();
    } catch {
      /* focus can throw in detached/headless cases — highlight still works */
    }
  }

  function emitHighlight(): void {
    const element = candidates[index];
    if (!element) return;
    focusCurrent(element);
    options.onHighlight?.(element, index);
  }

  function moveTo(nextIndex: number): void {
    if (stopped || candidates.length === 0) return;
    const len = candidates.length;
    index = ((nextIndex % len) + len) % len; // wrap in both directions
    emitHighlight();
  }

  function next(): void {
    moveTo(index + 1);
  }

  function prev(): void {
    moveTo(index - 1);
  }

  function getCurrent(): Element | null {
    return candidates[index] ?? null;
  }

  function stop(): void {
    if (stopped) return;
    stopped = true;
    target.removeEventListener("keydown", handleKey as EventListener, true);
    addedTabindex.forEach((element) => element.removeAttribute("tabindex"));
    addedTabindex.clear();
  }

  function select(): void {
    if (stopped) return;
    const element = getCurrent();
    stop();
    if (element) options.onSelect(element);
  }

  function cancel(): void {
    if (stopped) return;
    stop();
    options.onCancel?.();
  }

  function handleKey(event: KeyboardEvent): void {
    if (stopped) return;
    switch (event.key) {
      case "Tab":
        event.preventDefault();
        event.stopPropagation();
        if (event.shiftKey) prev();
        else next();
        break;
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        event.stopPropagation();
        next();
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        event.stopPropagation();
        prev();
        break;
      case "Enter":
      case " ":
      case "Spacebar": // legacy key value
        event.preventDefault();
        event.stopPropagation();
        select();
        break;
      case "Escape":
      case "Esc": // legacy key value
        event.preventDefault();
        event.stopPropagation();
        cancel();
        break;
      default:
        break;
    }
  }

  target.addEventListener("keydown", handleKey as EventListener, true);

  // Emit the initial highlight so the caller can position its highlight box.
  if (index >= 0) emitHighlight();

  return {
    candidates,
    getIndex: () => index,
    getCurrent,
    next,
    prev,
    moveTo,
    select,
    cancel,
    handleKey,
    stop,
  };
}
