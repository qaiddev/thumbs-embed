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
