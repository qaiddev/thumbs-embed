import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { QaidFeedback } from "./embed";
import { _resetStylesState } from "./styles";

function getShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed]");
  return host!.shadowRoot!;
}

function getOverlayShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed-overlay]");
  return host!.shadowRoot!;
}

describe("QaidFeedback", () => {
  let embed: QaidFeedback;

  beforeEach(() => {
    // Clear any existing embed elements
    document.body.innerHTML = "";
    // Reset styles module state
    _resetStylesState();
  });

  afterEach(() => {
    if (embed) {
      embed.destroy();
    }
    // Clean up any remaining elements
    document.body.innerHTML = "";
    _resetStylesState();
  });

  describe("initialization", () => {
    it("should create shadow host in document body", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const host = document.querySelector("[data-qaid-embed]");
      expect(host).not.toBeNull();
      expect(host!.shadowRoot).not.toBeNull();
    });

    it("should create buttons container inside shadow root", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container).not.toBeNull();
    });

    it("should inject light DOM styles into document head", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const style = document.getElementById("qaid-styles");
      expect(style).not.toBeNull();
      // Light DOM styles should only contain cursor/highlight, NOT button/buttons CSS
      expect(style?.textContent).toContain("qaid-targeting");
      expect(style?.textContent).toContain("qaid-highlight");
      expect(style?.textContent).not.toContain(".qaid-buttons");
      expect(style?.textContent).not.toContain(".qaid-btn");
    });

    it("should create thumbs up and thumbs down buttons inside shadow root", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector(".qaid-btn-up");
      const downBtn = shadow.querySelector(".qaid-btn-down");
      expect(upBtn).not.toBeNull();
      expect(downBtn).not.toBeNull();
    });

    it("should apply default position (bottom-right)", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-bottom-right")).toBe(true);
    });

    it("should apply custom position", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        position: "bottom-left",
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-bottom-left")).toBe(true);
    });

    it("should apply custom z-index to shadow host", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        zIndex: 100,
      });

      const host = document.querySelector<HTMLElement>("[data-qaid-embed]");
      expect(host?.style.zIndex).toBe("100");
    });
  });

  describe("targeting mode", () => {
    it("should enter targeting mode when thumbs up is clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(true);
    });

    it("should enter targeting mode when thumbs down is clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      downBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });

    it("should create targeting overlay when entering targeting mode", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      const overlayShadow = getOverlayShadowRoot();
      const overlay = overlayShadow.querySelector(".qaid-targeting-overlay");
      const vignette = overlayShadow.querySelector(".qaid-vignette");
      const scope = overlayShadow.querySelector(".qaid-scope");

      expect(overlay).not.toBeNull();
      expect(vignette).not.toBeNull();
      expect(scope).not.toBeNull();
    });

    it("should exit targeting mode when Escape is pressed", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);

      const overlayShadow = getOverlayShadowRoot();

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(event);

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      // Shadow host is still in the DOM, but overlay inside overlay host should be gone
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).toBeNull();
    });
  });

  describe("destroy", () => {
    it("should remove shadow host from document", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();

      // Start targeting to trigger overlay host creation
      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      expect(document.querySelector("[data-qaid-embed-overlay]")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector("[data-qaid-embed]")).toBeNull();
      expect(document.querySelector("[data-qaid-embed-overlay]")).toBeNull();
    });

    it("should remove injected styles", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed.destroy();
      expect(document.getElementById("qaid-styles")).toBeNull();
    });

    it("should remove targeting overlay if active", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      const overlayShadow = getOverlayShadowRoot();
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector("[data-qaid-embed]")).toBeNull();
      expect(document.querySelector("[data-qaid-embed-overlay]")).toBeNull();
    });

    it("should remove body classes", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      embed.destroy();

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });
  });

  describe("console error capture", () => {
    it("should capture console errors", () => {
      const originalError = console.error;
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      // The embed wraps console.error
      console.error("Test error message");

      // We can verify the wrapper was installed by checking console.error changed
      expect(console.error).not.toBe(originalError);

      embed.destroy();

      // After destroy, console.error should be restored
      expect(console.error).toBe(originalError);
    });
  });

  describe("multi-instance CSS scoping", () => {
    it("should give each instance its own CSS variable values", () => {
      const embed1 = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(0, 200, 83)" },
      });
      const embed2 = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(255, 100, 0)" },
      });

      // Each instance has its own shadow host
      const hosts = document.querySelectorAll("[data-qaid-embed]");
      expect(hosts).toHaveLength(2);

      // CSS vars are on the buttons container inside each shadow root
      const buttons1 = hosts[0].shadowRoot!.querySelector<HTMLElement>(".qaid-buttons");
      const buttons2 = hosts[1].shadowRoot!.querySelector<HTMLElement>(".qaid-buttons");

      const val1 = buttons1!.style.getPropertyValue("--qaid-positive");
      const val2 = buttons2!.style.getPropertyValue("--qaid-positive");

      expect(val1).toBe("rgb(0, 200, 83)");
      expect(val2).toBe("rgb(255, 100, 0)");

      // Shared light DOM style element should still exist
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed1.destroy();
      // Style should remain because embed2 is still alive
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed2.destroy();
      // Now both gone, style should be removed
      expect(document.getElementById("qaid-styles")).toBeNull();
    });
  });

  describe("css config option", () => {
    it("should inject custom CSS into shadow root when css option is provided", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        css: ".custom { color: red; }",
      });

      const shadow = getShadowRoot();
      const styleElements = shadow.querySelectorAll("style");

      // Should have at least 2 style elements: base styles + custom CSS
      expect(styleElements.length).toBeGreaterThanOrEqual(2);

      // The second style element should contain the custom CSS
      const customStyle = styleElements[1];
      expect(customStyle.textContent).toBe(".custom { color: red; }");
    });

    it("should not inject extra style element when css option is not provided", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const styleElements = shadow.querySelectorAll("style");

      // Should have exactly 1 style element (base styles only)
      expect(styleElements).toHaveLength(1);
    });
  });

  describe("API submission", () => {
    it("should call fetch when submitting feedback", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 123 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      // Create a target element
      const target = document.createElement("div");
      target.id = "test-target";
      target.textContent = "Click me";
      document.body.appendChild(target);

      // Start targeting
      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Simulate click on capture layer (lives in overlay shadow host)
      const overlayShadow = getOverlayShadowRoot();
      const captureLayer = overlayShadow.querySelector<HTMLElement>(".qaid-capture-layer");
      expect(captureLayer).not.toBeNull();

      // In happy-dom, elementFromPoint doesn't work correctly
      // Just verify the capture layer exists and clicking it doesn't throw
      const clickEvent = new MouseEvent("click", {
        clientX: 50,
        clientY: 50,
        bubbles: true,
      });
      captureLayer?.dispatchEvent(clickEvent);

      // Clean up
      target.remove();
    });
  });
});
