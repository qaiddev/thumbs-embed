import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { injectStyles, removeStyles } from "./styles";

describe("styles", () => {
  beforeEach(() => {
    // Clean up any existing styles
    const existing = document.getElementById("qaid-styles");
    if (existing) {
      existing.remove();
    }
  });

  afterEach(() => {
    removeStyles();
  });

  describe("injectStyles", () => {
    it("should inject styles into document head", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style).not.toBeNull();
      expect(style?.tagName).toBe("STYLE");
    });

    it("should only inject styles once", () => {
      injectStyles();
      injectStyles();
      injectStyles();

      const styles = document.querySelectorAll("#qaid-styles");
      expect(styles).toHaveLength(1);
    });

    it("should include default colors", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain("rgb(0, 200, 83)");
      expect(style?.textContent).toContain("rgb(255, 0, 0)");
    });

    it("should use custom colors", () => {
      injectStyles({
        positiveColor: "rgb(100, 200, 50)",
        negativeColor: "rgb(200, 50, 100)",
      });

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain("rgb(100, 200, 50)");
      expect(style?.textContent).toContain("rgb(200, 50, 100)");
    });

    it("should still include button styles when skipButtonStyles is true (deprecated option)", () => {
      injectStyles({ skipButtonStyles: true });

      const style = document.getElementById("qaid-styles");
      // Should have structural styles
      expect(style?.textContent).toContain(".qaid-btn-structural");
      // skipButtonStyles is deprecated and no longer removes button styles
      expect(style?.textContent).toContain("width:var(--qaid-btn-size)");
    });

    it("should include button styles when skipButtonStyles is false", () => {
      injectStyles({ skipButtonStyles: false });

      const style = document.getElementById("qaid-styles");
      // Should have default button styles using CSS variables
      expect(style?.textContent).toContain("width:var(--qaid-btn-size)");
      expect(style?.textContent).toContain("border-radius:50%");
      // Should have CSS variables for button size
      expect(style?.textContent).toContain("--qaid-btn-size:48px");
    });

    it("should include qaid- prefixed classes", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain(".qaid-widget");
      expect(style?.textContent).toContain(".qaid-btn");
      expect(style?.textContent).toContain(".qaid-modal");
    });

    it("should include animations", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain("@keyframes");
      expect(style?.textContent).toContain("qaid-slideDown");
      expect(style?.textContent).toContain("qaid-markerPulse");
    });
  });

  describe("removeStyles", () => {
    it("should remove injected styles", () => {
      injectStyles();
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      removeStyles();
      expect(document.getElementById("qaid-styles")).toBeNull();
    });

    it("should allow re-injection after removal", () => {
      injectStyles();
      removeStyles();
      injectStyles();

      expect(document.getElementById("qaid-styles")).not.toBeNull();
    });

    it("should handle removal when no styles injected", () => {
      // Should not throw
      expect(() => removeStyles()).not.toThrow();
    });
  });
});
