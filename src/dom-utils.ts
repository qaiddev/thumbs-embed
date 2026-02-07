/**
 * DOM utility functions
 */

/**
 * Create an element with attributes and optional children
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Record<string, string>,
  children?: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);

  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "className") {
        el.className = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  if (children) {
    for (const child of children) {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    }
  }

  return el;
}

/**
 * Check if viewport width indicates mobile device
 */
export function isMobileViewport(breakpoint = 640): boolean {
  return typeof window !== "undefined" && window.innerWidth < breakpoint;
}

/**
 * Get element at point, temporarily hiding shadow hosts so elementFromPoint
 * sees through to the page elements underneath.
 * Uses visibility:hidden which skips the element in elementFromPoint without
 * triggering reflow.
 */
export function getElementAtPointUnderOverlay(
  x: number,
  y: number,
  hosts: HTMLElement[]
): Element | null {
  const saved = hosts.map((h) => h.style.visibility);
  hosts.forEach((h) => (h.style.visibility = "hidden"));
  const element = document.elementFromPoint(x, y);
  hosts.forEach((h, i) => (h.style.visibility = saved[i]));
  return element;
}

/**
 * Check if an element is part of the feedback embed
 * With shadow DOM, embed elements are inside shadow hosts marked with
 * data-qaid-embed or data-qaid-embed-overlay
 */
export function isEmbedElement(element: Element | null): boolean {
  if (!element) return false;
  // Check if the element itself is a shadow host
  if (element.hasAttribute("data-qaid-embed") || element.hasAttribute("data-qaid-embed-overlay")) return true;
  // Check ancestors for shadow host
  return !!element.closest("[data-qaid-embed], [data-qaid-embed-overlay]");
}

/**
 * Get element bounds with optional padding
 */
export function getElementBounds(
  element: Element,
  padding = 0
): { x: number; y: number; width: number; height: number } {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - padding,
    y: rect.top - padding,
    width: rect.width + padding * 2,
    height: rect.height + padding * 2,
  };
}

/**
 * Remove all elements with a specific class
 */
export function removeAllByClass(className: string): void {
  document.querySelectorAll(`.${className}`).forEach((el) => {
    el.classList.remove(className);
  });
}
