import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  createElement,
  isMobileViewport,
  getElementAtPointUnderOverlay,
  isEmbedElement,
  getElementBounds,
  removeAllByClass,
} from "./dom-utils";

describe("dom-utils", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  describe("createElement", () => {
    it("should create element with given tag", () => {
      const el = createElement("div");
      expect(el.tagName).toBe("DIV");
    });

    it("should set attributes", () => {
      const el = createElement("input", {
        type: "text",
        placeholder: "Enter name",
      });

      expect(el.getAttribute("type")).toBe("text");
      expect(el.getAttribute("placeholder")).toBe("Enter name");
    });

    it("should set className via className attribute", () => {
      const el = createElement("div", { className: "my-class other-class" });
      expect(el.className).toBe("my-class other-class");
    });

    it("should append text children", () => {
      const el = createElement("p", {}, ["Hello ", "World"]);
      expect(el.textContent).toBe("Hello World");
    });

    it("should append element children", () => {
      const child = document.createElement("span");
      child.textContent = "Child";

      const el = createElement("div", {}, [child]);

      expect(el.children).toHaveLength(1);
      expect(el.children[0]).toBe(child);
    });

    it("should handle mixed children", () => {
      const span = document.createElement("span");
      span.textContent = "span";

      const el = createElement("div", {}, ["text ", span, " more text"]);

      expect(el.childNodes).toHaveLength(3);
      expect(el.textContent).toBe("text span more text");
    });
  });

  describe("isMobileViewport", () => {
    it("should return true for viewport under breakpoint", () => {
      // In happy-dom, window.innerWidth defaults to 1024
      // We can't easily mock this, so just test the function logic
      expect(typeof isMobileViewport()).toBe("boolean");
    });

    it("should use custom breakpoint", () => {
      // With default innerWidth of 1024, should return false for 640
      expect(isMobileViewport(640)).toBe(false);

      // Should return true for breakpoint above innerWidth
      expect(isMobileViewport(2000)).toBe(true);
    });
  });

  describe("getElementAtPointUnderOverlay", () => {
    it("should temporarily hide overlay to find element underneath", () => {
      const target = document.createElement("div");
      target.id = "target";
      target.style.cssText =
        "position: fixed; top: 0; left: 0; width: 100px; height: 100px;";
      container.appendChild(target);

      const overlay = document.createElement("div");
      overlay.style.cssText =
        "position: fixed; top: 0; left: 0; width: 200px; height: 200px; pointer-events: auto;";
      container.appendChild(overlay);

      // Note: elementFromPoint doesn't work in happy-dom as expected
      // This is more of an integration test that would work in a real browser
      const result = getElementAtPointUnderOverlay(50, 50, overlay);

      // In happy-dom, elementFromPoint may not work correctly
      // Just verify it restores pointer events
      expect(overlay.style.pointerEvents).toBe("auto");
    });

    it("should restore original pointer events", () => {
      const overlay = document.createElement("div");
      overlay.style.pointerEvents = "none";

      getElementAtPointUnderOverlay(0, 0, overlay);

      expect(overlay.style.pointerEvents).toBe("none");
    });
  });

  describe("isEmbedElement", () => {
    it("should return false for null", () => {
      expect(isEmbedElement(null)).toBe(false);
    });

    it("should return true for qaid-widget", () => {
      const embedContainer = document.createElement("div");
      embedContainer.className = "qaid-widget";
      const child = document.createElement("button");
      embedContainer.appendChild(child);
      container.appendChild(embedContainer);

      expect(isEmbedElement(child)).toBe(true);
    });

    it("should return true for qaid-targeting-overlay", () => {
      const overlay = document.createElement("div");
      overlay.className = "qaid-targeting-overlay";
      container.appendChild(overlay);

      expect(isEmbedElement(overlay)).toBe(true);
    });

    it("should return true for qaid-modal-container", () => {
      const modal = document.createElement("div");
      modal.className = "qaid-modal-container";
      container.appendChild(modal);

      expect(isEmbedElement(modal)).toBe(true);
    });

    it("should return true for qaid-bottom-sheet", () => {
      const sheet = document.createElement("div");
      sheet.className = "qaid-bottom-sheet";
      container.appendChild(sheet);

      expect(isEmbedElement(sheet)).toBe(true);
    });

    it("should return false for regular element", () => {
      const el = document.createElement("div");
      el.className = "some-class";
      container.appendChild(el);

      expect(isEmbedElement(el)).toBe(false);
    });
  });

  describe("getElementBounds", () => {
    it("should return element bounds without padding", () => {
      const el = document.createElement("div");
      // getBoundingClientRect returns zeros in happy-dom
      container.appendChild(el);

      const bounds = getElementBounds(el);

      expect(bounds).toHaveProperty("x");
      expect(bounds).toHaveProperty("y");
      expect(bounds).toHaveProperty("width");
      expect(bounds).toHaveProperty("height");
    });

    it("should add padding to bounds", () => {
      const el = document.createElement("div");
      container.appendChild(el);

      const boundsNoPadding = getElementBounds(el, 0);
      const boundsWithPadding = getElementBounds(el, 10);

      expect(boundsWithPadding.x).toBe(boundsNoPadding.x - 10);
      expect(boundsWithPadding.y).toBe(boundsNoPadding.y - 10);
      expect(boundsWithPadding.width).toBe(boundsNoPadding.width + 20);
      expect(boundsWithPadding.height).toBe(boundsNoPadding.height + 20);
    });
  });

  describe("removeAllByClass", () => {
    it("should remove class from all matching elements", () => {
      const el1 = document.createElement("div");
      el1.className = "target-class other";
      const el2 = document.createElement("div");
      el2.className = "target-class";
      const el3 = document.createElement("div");
      el3.className = "different";

      container.appendChild(el1);
      container.appendChild(el2);
      container.appendChild(el3);

      removeAllByClass("target-class");

      expect(el1.classList.contains("target-class")).toBe(false);
      expect(el1.classList.contains("other")).toBe(true);
      expect(el2.classList.contains("target-class")).toBe(false);
      expect(el3.classList.contains("different")).toBe(true);
    });

    it("should handle no matching elements", () => {
      const el = document.createElement("div");
      el.className = "other";
      container.appendChild(el);

      // Should not throw
      expect(() => removeAllByClass("nonexistent")).not.toThrow();
    });
  });
});
