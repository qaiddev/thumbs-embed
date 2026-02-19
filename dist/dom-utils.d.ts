/**
 * DOM utility functions
 */
/**
 * Create an element with attributes and optional children
 */
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, attrs?: Record<string, string>, children?: (Node | string)[]): HTMLElementTagNameMap[K];
/**
 * Check if viewport width indicates mobile device
 */
export declare function isMobileViewport(breakpoint?: number): boolean;
/**
 * Get element at point, temporarily hiding shadow hosts so elementFromPoint
 * sees through to the page elements underneath.
 * Uses visibility:hidden which skips the element in elementFromPoint without
 * triggering reflow.
 */
export declare function getElementAtPointUnderOverlay(x: number, y: number, hosts: HTMLElement[]): Element | null;
/**
 * Check if an element is part of the feedback embed
 * With shadow DOM, embed elements are inside shadow hosts marked with
 * data-qaid-embed or data-qaid-embed-overlay
 */
export declare function isEmbedElement(element: Element | null): boolean;
/**
 * Get element bounds with optional padding
 */
export declare function getElementBounds(element: Element, padding?: number): {
    x: number;
    y: number;
    width: number;
    height: number;
};
/**
 * Remove all elements with a specific class
 */
export declare function removeAllByClass(className: string): void;
