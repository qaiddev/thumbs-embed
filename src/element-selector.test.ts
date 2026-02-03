import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  DATA_ATTRS,
  findDataAttribute,
  getTruncatedText,
  generateSelector,
  generateElementInfo,
  generateNthChildPath,
} from "./element-selector";

describe("element-selector", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  describe("DATA_ATTRS", () => {
    it("should have the expected data attributes in priority order", () => {
      expect(DATA_ATTRS).toEqual([
        "data-comp",
        "data-qa",
        "data-testid",
        "data-id",
      ]);
    });
  });

  describe("findDataAttribute", () => {
    it("should return null when no data attribute is found", () => {
      const el = document.createElement("div");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBeNull();
    });

    it("should find data-comp attribute on element", () => {
      const el = document.createElement("div");
      el.setAttribute("data-comp", "MyComponent");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBe('data-comp="MyComponent"');
    });

    it("should find data-testid attribute on element", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "test-button");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBe('data-testid="test-button"');
    });

    it("should find data attribute on ancestor", () => {
      const parent = document.createElement("div");
      parent.setAttribute("data-qa", "parent-qa");
      const child = document.createElement("span");
      parent.appendChild(child);
      container.appendChild(parent);

      expect(findDataAttribute(child)).toBe('data-qa="parent-qa"');
    });

    it("should prefer closer ancestor data attributes", () => {
      const grandparent = document.createElement("div");
      grandparent.setAttribute("data-testid", "grandparent");
      const parent = document.createElement("div");
      parent.setAttribute("data-testid", "parent");
      const child = document.createElement("span");

      grandparent.appendChild(parent);
      parent.appendChild(child);
      container.appendChild(grandparent);

      expect(findDataAttribute(child)).toBe('data-testid="parent"');
    });

    it("should respect priority order of data attributes", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "test");
      el.setAttribute("data-comp", "comp");
      container.appendChild(el);

      // data-comp has higher priority than data-testid
      expect(findDataAttribute(el)).toBe('data-comp="comp"');
    });

    it("should stop at the specified stopAt element", () => {
      const outer = document.createElement("div");
      outer.setAttribute("data-testid", "outer");
      const inner = document.createElement("div");
      const child = document.createElement("span");

      outer.appendChild(inner);
      inner.appendChild(child);
      container.appendChild(outer);

      // Stop at inner, should not find outer's data attribute
      expect(findDataAttribute(child, inner)).toBeNull();
    });
  });

  describe("getTruncatedText", () => {
    it("should return empty string for element with no text", () => {
      const el = document.createElement("div");
      expect(getTruncatedText(el)).toBe("");
    });

    it("should return trimmed text for short content", () => {
      const el = document.createElement("div");
      el.textContent = "  Hello World  ";
      expect(getTruncatedText(el)).toBe("Hello World");
    });

    it("should truncate text longer than maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(150);
      const result = getTruncatedText(el, 100);
      expect(result).toBe("A".repeat(100) + "...");
    });

    it("should not add ellipsis for text exactly at maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(100);
      const result = getTruncatedText(el, 100);
      expect(result).toBe("A".repeat(100) + "...");
    });

    it("should use custom maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(50);
      const result = getTruncatedText(el, 20);
      expect(result).toBe("A".repeat(20) + "...");
    });
  });

  describe("generateNthChildPath", () => {
    it("should generate path for single element", () => {
      const el = document.createElement("div");
      container.appendChild(el);
      const path = generateNthChildPath(el);
      expect(path).toMatch(/^body > div:nth-child\(\d+\) > div:nth-child\(1\)$/);
    });

    it("should generate path for nested elements", () => {
      const parent = document.createElement("section");
      const child = document.createElement("p");
      parent.appendChild(child);
      container.appendChild(parent);

      const path = generateNthChildPath(child);
      expect(path).toContain("section:nth-child");
      expect(path).toContain("p:nth-child(1)");
    });

    it("should correctly index siblings", () => {
      const first = document.createElement("span");
      const second = document.createElement("span");
      const third = document.createElement("span");
      container.appendChild(first);
      container.appendChild(second);
      container.appendChild(third);

      expect(generateNthChildPath(first)).toContain("span:nth-child(1)");
      expect(generateNthChildPath(second)).toContain("span:nth-child(2)");
      expect(generateNthChildPath(third)).toContain("span:nth-child(3)");
    });

    it("should produce valid CSS selector", () => {
      const el = document.createElement("button");
      el.className = "text-[9px] hover:bg-blue"; // Problematic Tailwind classes
      container.appendChild(el);

      const path = generateNthChildPath(el);
      // Should not throw when used as selector
      expect(() => document.querySelector(path)).not.toThrow();
      expect(document.querySelector(path)).toBe(el);
    });
  });

  describe("generateSelector", () => {
    it("should return data attribute selector when available", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "my-button");
      container.appendChild(el);
      expect(generateSelector(el)).toBe('[data-testid="my-button"]');
    });

    it("should return ID selector when no data attribute", () => {
      const el = document.createElement("div");
      el.id = "unique-id";
      container.appendChild(el);
      expect(generateSelector(el)).toBe("#unique-id");
    });

    it("should return nth-child path when no ID or data attribute", () => {
      const el = document.createElement("button");
      el.className = "primary-btn hover:bg-blue";
      container.appendChild(el);
      const selector = generateSelector(el);
      expect(selector).toContain("body >");
      expect(selector).toContain("button:nth-child");
    });

    it("should handle elements with problematic class names", () => {
      const el = document.createElement("span");
      el.className = "text-[9px] lg:block hover:text-white";
      container.appendChild(el);
      const selector = generateSelector(el);
      // Should produce valid selector
      expect(() => document.querySelector(selector)).not.toThrow();
      expect(document.querySelector(selector)).toBe(el);
    });

    it("should prefer data attribute over ID", () => {
      const el = document.createElement("div");
      el.id = "my-id";
      el.setAttribute("data-comp", "MyComp");
      container.appendChild(el);
      expect(generateSelector(el)).toBe('[data-comp="MyComp"]');
    });

    it("should escape special characters in IDs", () => {
      const el = document.createElement("div");
      el.id = "my:special[id]";
      container.appendChild(el);
      const selector = generateSelector(el);
      expect(() => document.querySelector(selector)).not.toThrow();
    });
  });

  describe("generateElementInfo", () => {
    it("should return complete element info", () => {
      const el = document.createElement("button");
      el.setAttribute("data-testid", "submit-btn");
      el.textContent = "Submit Form";
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info).toEqual({
        selector: '[data-testid="submit-btn"]',
        text: "Submit Form",
        dataAttr: 'data-testid="submit-btn"',
      });
    });

    it("should handle element with no data attribute", () => {
      const el = document.createElement("div");
      el.id = "content";
      el.textContent = "Some content";
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info).toEqual({
        selector: "#content",
        text: "Some content",
        dataAttr: null,
      });
    });

    it("should truncate long text content", () => {
      const el = document.createElement("p");
      el.textContent = "X".repeat(200);
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info.text).toBe("X".repeat(100) + "...");
    });
  });
});
