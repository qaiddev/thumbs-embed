import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { injectStyles, removeStyles, buildCssVars, applyCssVars, getEmbedStyles, _resetStylesState } from "./styles";

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * The declarations of the first rule in the shadow stylesheet whose selector
 * is exactly `selector` (comments between rules are skipped).
 */
function ruleBody(selector: string): string {
  const match = getEmbedStyles().match(
    new RegExp(`(?:^|\\})\\s*(?:/\\*[\\s\\S]*?\\*/\\s*)*${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`)
  );
  expect(match, `no rule for ${selector}`).not.toBeNull();
  return match![1];
}

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

    it("should include targeting cursor styles", () => {
      injectStyles();

      const style = document.getElementById("qaid-styles");
      expect(style?.textContent).toContain("qaid-targeting");
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

    it("sizes a themed button's unsized icon SVG, at element specificity", () => {
      // A theme icon like <svg viewBox="0 0 24 24">…</svg> has no class and no
      // width; without this it collapses inside a themed (structural) button.
      const css = getEmbedStyles();
      expect(css).toContain(
        ":where(button.qaid-btn-structural) > svg:where(:not(.qaid-icon):not([width]))"
      );
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

    it("should honor prefers-reduced-motion (disables animation + transition)", () => {
      const css = getEmbedStyles();
      expect(css).toContain("@media (prefers-reduced-motion: reduce)");
      expect(css).toContain("animation: none");
      expect(css).toContain("transition: none");
    });

    it("should include a forced-colors (Windows High Contrast) block", () => {
      const css = getEmbedStyles();
      expect(css).toContain("@media (forced-colors: active)");
      // Focus rings fall back to a system color when box-shadow is dropped
      expect(css).toContain("CanvasText");
    });

    it("should expose a keyboard focus ring via :focus-visible", () => {
      const css = getEmbedStyles();
      expect(css).toContain(":focus-visible");
      expect(css).toContain("outline");
    });

    it("should reveal the incognito cluster and dismiss button on keyboard focus", () => {
      const css = getEmbedStyles();
      expect(css).toContain(".qaid-buttons.qaid-incognito:focus-within");
      expect(css).toContain(".qaid-dismiss-btn:focus-visible");
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

    it("should survive the style element being removed by a client-side router", () => {
      // Astro's view transitions (and any SPA router that swaps <head>) take
      // the injected <style> with them, so the element the count still expects
      // is already gone by the time the host destroys the embed.
      injectStyles();
      document.getElementById("qaid-styles")!.remove();

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
      expect(vars["--qaid-marker"]).toBe("#6365f1");
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

    it("should handle shorthand hex colors (#rgb)", () => {
      const vars = buildCssVars({ markerColor: "#fff" });
      // White should produce black text
      expect(vars["--qaid-marker-text"]).toBe("black");

      const darkVars = buildCssVars({ markerColor: "#000" });
      expect(darkVars["--qaid-marker-text"]).toBe("white");
    });

    it("should handle rgb() format for marker color", () => {
      const vars = buildCssVars({ markerColor: "rgb(255, 255, 255)" });
      expect(vars["--qaid-marker-text"]).toBe("black");

      const darkVars = buildCssVars({ markerColor: "rgb(0, 0, 0)" });
      expect(darkVars["--qaid-marker-text"]).toBe("white");
    });

    it("should default to white text for unparseable colors", () => {
      const vars = buildCssVars({ markerColor: "hsl(0, 100%, 50%)" });
      expect(vars["--qaid-marker-text"]).toBe("white");
    });

    it("should handle custom modalWidth, backdropOpacity, fontFamily, fontSize", () => {
      const vars = buildCssVars({
        modalWidth: 600,
        backdropOpacity: 0.5,
        fontFamily: "Arial, sans-serif",
        fontSize: 14,
      });
      expect(vars["--qaid-modal-width"]).toBe("600px");
      expect(vars["--qaid-backdrop-opacity"]).toBe("0.5");
      expect(vars["--qaid-font-family"]).toBe("Arial, sans-serif");
      expect(vars["--qaid-font-size"]).toBe("14px");
    });
  });

  describe("default marker contrast", () => {
    /** WCAG 2.x relative luminance of a #rrggbb colour. */
    function luminance(hex: string): number {
      const n = parseInt(hex.slice(1), 16);
      const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    const contrastWithWhite = (hex: string) => 1.05 / (luminance(hex) + 0.05);

    it("puts white text on the default marker at 4.5:1 or better (WCAG AA)", () => {
      const vars = buildCssVars();
      // The old #6366f1 was 4.47:1 against the white submit/Send label.
      expect(vars["--qaid-marker-text"]).toBe("white");
      expect(contrastWithWhite(vars["--qaid-marker"])).toBeGreaterThanOrEqual(4.5);
      expect(contrastWithWhite("#6366f1")).toBeLessThan(4.5);
    });

    it("uses the same default as the stylesheet fallbacks", () => {
      const css = getEmbedStyles();
      expect(css).not.toContain("#6366f1");
      expect(css).toContain("var(--qaid-marker, #6365f1)");
    });
  });

  describe("success screen colour scheme", () => {
    it("gives the title a dark-scheme colour, not a fixed near-black", () => {
      expect(ruleBody(".qaid-confirm-title")).toMatch(
        /color:\s*var\(--qaid-text,\s*light-dark\(#111827,\s*#f9fafb\)\)/
      );
    });

    it("gives the message a dark-scheme colour, not a fixed grey", () => {
      expect(ruleBody(".qaid-confirm-message")).toMatch(
        /color:\s*var\(--qaid-text-muted,\s*light-dark\(#6b7280,\s*#9ca3af\)\)/
      );
    });

    it("styles the not-sent variant's icon", () => {
      expect(ruleBody(".qaid-confirm-error .qaid-confirm-icon")).toContain(
        "var(--qaid-error, #dc2626)"
      );
    });
  });

  describe("recording indicator", () => {
    it("takes its own clicks, since the overlay host under it lets them through", () => {
      expect(ruleBody(".qaid-recording-indicator")).toMatch(/pointer-events:\s*auto/);
    });
  });

  describe("font size", () => {
    it("never sizes text in rem, which the fontSize option cannot reach", () => {
      expect(getEmbedStyles()).not.toMatch(/font-size:\s*[\d.]+rem/);
    });

    it.each([
      [".qaid-modal-title", "1.125"],
      [".qaid-modal-subtitle", "0.875"],
      ["button.qaid-btn-submit", "0.875"],
      [".qaid-confirm-message", "0.875"],
      [".qaid-video-preview-box h3", "1.125"],
      [".qaid-annotate-desc", "0.8125"],
    ])("scales %s from --qaid-font-size (x%s, so 16px keeps the old size)", (selector, factor) => {
      const multiple = new RegExp(
        `font-size:\\s*calc\\(var\\(--qaid-font-size,\\s*16px\\)\\s*\\*\\s*${escapeRegExp(factor)}\\)`
      );
      expect(ruleBody(selector)).toMatch(multiple);
    });

    it.each([".qaid-textarea", ".qaid-confirm-title", ".qaid-tooltip-text", ".qaid-annotate-title"])(
      "sizes %s at exactly --qaid-font-size",
      (selector) => {
        expect(ruleBody(selector)).toMatch(/font-size:\s*var\(--qaid-font-size,\s*16px\)/);
      }
    );

    it("puts the configured size on the variable the rules read", () => {
      expect(buildCssVars({ fontSize: 20 })["--qaid-font-size"]).toBe("20px");
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
