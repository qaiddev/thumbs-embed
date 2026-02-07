import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { injectStyles, removeStyles, buildCssVars, applyCssVars, getEmbedStyles, _resetStylesState } from "./styles";

describe("styles", () => {
  beforeEach(() => {
    _resetStylesState();
  });

  afterEach(() => {
    _resetStylesState();
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

      // Clean up extra references
      removeStyles();
      removeStyles();
    });

    it("should include targeting and highlight styles", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain("qaid-targeting");
      expect(style?.textContent).toContain("qaid-highlight");
    });

    it("should NOT include buttons or button styles (those are in shadow DOM)", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).not.toContain(".qaid-buttons");
      expect(style?.textContent).not.toContain(".qaid-btn");
      expect(style?.textContent).not.toContain(".qaid-modal");
    });
  });

  describe("getEmbedStyles", () => {
    it("should return a CSS string for shadow root injection", () => {
      const css = getEmbedStyles();
      expect(typeof css).toBe("string");
      expect(css.length).toBeGreaterThan(0);
    });

    it("should include buttons styles", () => {
      const css = getEmbedStyles();
      expect(css).toContain(".qaid-buttons");
    });

    it("should include button styles", () => {
      const css = getEmbedStyles();
      expect(css).toContain("width:var(--qaid-btn-size)");
      expect(css).toContain("border-radius:50%");
    });

    it("should include modal styles", () => {
      const css = getEmbedStyles();
      expect(css).toContain(".qaid-modal");
    });

    it("should include animations", () => {
      const css = getEmbedStyles();
      expect(css).toContain("@keyframes");
      expect(css).toContain("qaid-slideDown");
      expect(css).toContain("qaid-markerPulse");
    });
  });

  describe("removeStyles", () => {
    it("should remove injected styles when last instance is destroyed", () => {
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

    it("should use reference counting — style stays when one of two instances is removed", () => {
      injectStyles();
      injectStyles();

      removeStyles();
      // One instance still alive, style should remain
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      removeStyles();
      // All instances gone, style should be removed
      expect(document.getElementById("qaid-styles")).toBeNull();
    });
  });

  describe("buildCssVars", () => {
    it("should return correct defaults", () => {
      const vars = buildCssVars();

      expect(vars["--qaid-positive"]).toBe("rgb(0, 200, 83)");
      expect(vars["--qaid-negative"]).toBe("rgb(255, 0, 0)");
      expect(vars["--qaid-marker"]).toBe("#6366f1");
      expect(vars["--qaid-btn-size"]).toBe("48px");
      expect(vars["--qaid-icon-size"]).toBe("24px");
      expect(vars["--qaid-modal-width"]).toBe("400px");
      expect(vars["--qaid-backdrop-opacity"]).toBe("0.3");
      expect(vars["--qaid-font-family"]).toBe("system-ui, -apple-system, sans-serif");
      expect(vars["--qaid-font-size"]).toBe("16px");
    });

    it("should return custom colors when provided", () => {
      const vars = buildCssVars({
        positiveColor: "rgb(100, 200, 50)",
        negativeColor: "rgb(200, 50, 100)",
      });

      expect(vars["--qaid-positive"]).toBe("rgb(100, 200, 50)");
      expect(vars["--qaid-negative"]).toBe("rgb(200, 50, 100)");
    });

    it("should compute marker text color for contrast", () => {
      // Dark marker → white text
      const darkVars = buildCssVars({ markerColor: "#000000" });
      expect(darkVars["--qaid-marker-text"]).toBe("white");

      // Light marker → black text
      const lightVars = buildCssVars({ markerColor: "#ffffff" });
      expect(lightVars["--qaid-marker-text"]).toBe("black");
    });

    it("should respect button size option", () => {
      const small = buildCssVars({ buttonSize: "small" });
      expect(small["--qaid-btn-size"]).toBe("36px");
      expect(small["--qaid-icon-size"]).toBe("18px");

      const large = buildCssVars({ buttonSize: "large" });
      expect(large["--qaid-btn-size"]).toBe("64px");
      expect(large["--qaid-icon-size"]).toBe("32px");
    });
  });

  describe("applyCssVars", () => {
    it("should set CSS custom properties on element", () => {
      const el = document.createElement("div");
      const vars = {
        "--qaid-positive": "rgb(0, 200, 83)",
        "--qaid-negative": "rgb(255, 0, 0)",
      };

      applyCssVars(el, vars);

      expect(el.style.getPropertyValue("--qaid-positive")).toBe("rgb(0, 200, 83)");
      expect(el.style.getPropertyValue("--qaid-negative")).toBe("rgb(255, 0, 0)");
    });
  });
});
