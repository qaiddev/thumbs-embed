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
