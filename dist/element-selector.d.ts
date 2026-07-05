/**
 * Element selector generation utilities
 */
/** Data attributes to look for (in priority order) */
export declare const DATA_ATTRS: string[];
export interface ElementInfo {
    selector: string;
    text: string;
    dataAttr: string | null;
}
/**
 * Find the first matching data attribute on an element or its ancestors
 */
export declare function findDataAttribute(element: Element, stopAt?: Element): string | null;
/**
 * Get truncated text content from an element
 */
export declare function getTruncatedText(element: Element, maxLength?: number): string;
/**
 * Generate an nth-child path from body to the element
 * This is always a valid CSS selector and uniquely identifies the element
 * Exported for testing
 */
export declare function generateNthChildPath(element: Element): string;
/**
 * Generate a selector string for an element
 * Priority: data attribute > ID > nth-child path
 */
export declare function generateSelector(element: Element): string;
/**
 * Generate complete element info for feedback
 */
export declare function generateElementInfo(element: Element): ElementInfo;
/**
 * Default set of "targetable" elements for keyboard navigation: focusable
 * controls, ARIA-role'd nodes, common semantic content, and anything already
 * carrying one of the stable data attributes we key selectors off of.
 */
export declare const TARGETABLE_SELECTOR: string;
/**
 * Best-effort visibility test used to keep invisible nodes out of the keyboard
 * candidate list. Deliberately layout-free (no getBoundingClientRect) so it is
 * stable in headless/test environments: it only rejects nodes that are
 * explicitly hidden via the `hidden` attribute, `aria-hidden`, or a computed
 * `display:none` / `visibility:hidden`.
 */
export declare function isElementVisible(element: Element): boolean;
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
export declare function collectTargetableElements(options?: CollectTargetableOptions): Element[];
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
export declare function startKeyboardTargeting(options: KeyboardTargetingOptions): KeyboardTargetingController;
