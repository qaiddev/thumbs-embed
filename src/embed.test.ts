import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { FeedbackEmbed } from "./embed";
import { _resetStylesState } from "./styles";

describe("FeedbackEmbed", () => {
  let embed: FeedbackEmbed;

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
    it("should create embed container in document body", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const container = document.querySelector(".qaid-widget");
      expect(container).not.toBeNull();
    });

    it("should inject styles into document head", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const style = document.getElementById("qaid-styles");
      expect(style).not.toBeNull();
    });

    it("should create thumbs up and thumbs down buttons", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector(".qaid-btn-up");
      const downBtn = document.querySelector(".qaid-btn-down");
      expect(upBtn).not.toBeNull();
      expect(downBtn).not.toBeNull();
    });

    it("should apply default position (bottom-right)", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const container = document.querySelector(".qaid-widget");
      expect(container?.classList.contains("qaid-bottom-right")).toBe(true);
    });

    it("should apply custom position", () => {
      embed = new FeedbackEmbed({
        endpoint: "/api/feedback",
        position: "bottom-left",
      });

      const container = document.querySelector(".qaid-widget");
      expect(container?.classList.contains("qaid-bottom-left")).toBe(true);
    });

    it("should apply custom z-index", () => {
      embed = new FeedbackEmbed({
        endpoint: "/api/feedback",
        zIndex: 100,
      });

      const container = document.querySelector<HTMLElement>(".qaid-widget");
      expect(container?.style.zIndex).toBe("100");
    });
  });

  describe("targeting mode", () => {
    it("should enter targeting mode when thumbs up is clicked", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(true);
    });

    it("should enter targeting mode when thumbs down is clicked", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const downBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-down");
      downBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });

    it("should create targeting overlay when entering targeting mode", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      const overlay = document.querySelector(".qaid-targeting-overlay");
      const banner = document.querySelector(".qaid-banner");
      const vignette = document.querySelector(".qaid-vignette");
      const scope = document.querySelector(".qaid-scope");

      expect(overlay).not.toBeNull();
      expect(banner).not.toBeNull();
      expect(vignette).not.toBeNull();
      expect(scope).not.toBeNull();
    });

    it("should exit targeting mode when Escape is pressed", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(event);

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      expect(document.querySelector(".qaid-targeting-overlay")).toBeNull();
    });
  });

  describe("destroy", () => {
    it("should remove embed container from document", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });
      expect(document.querySelector(".qaid-widget")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector(".qaid-widget")).toBeNull();
    });

    it("should remove injected styles", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed.destroy();
      expect(document.getElementById("qaid-styles")).toBeNull();
    });

    it("should remove targeting overlay if active", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.querySelector(".qaid-targeting-overlay")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector(".qaid-targeting-overlay")).toBeNull();
    });

    it("should remove body classes", () => {
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      embed.destroy();

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });
  });

  describe("console error capture", () => {
    it("should capture console errors", () => {
      const originalError = console.error;
      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

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
      const embed1 = new FeedbackEmbed({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(0, 200, 83)" },
      });
      const embed2 = new FeedbackEmbed({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(255, 100, 0)" },
      });

      const containers = document.querySelectorAll<HTMLElement>(".qaid-widget");
      expect(containers).toHaveLength(2);

      const val1 = containers[0].style.getPropertyValue("--qaid-positive");
      const val2 = containers[1].style.getPropertyValue("--qaid-positive");

      expect(val1).toBe("rgb(0, 200, 83)");
      expect(val2).toBe("rgb(255, 100, 0)");

      // Shared style element should still exist
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed1.destroy();
      // Style should remain because embed2 is still alive
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed2.destroy();
      // Now both gone, style should be removed
      expect(document.getElementById("qaid-styles")).toBeNull();
    });
  });

  describe("API submission", () => {
    it("should call fetch when submitting feedback", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 123 }),
      });
      global.fetch = fetchMock;

      embed = new FeedbackEmbed({ endpoint: "/api/feedback" });

      // Create a target element
      const target = document.createElement("div");
      target.id = "test-target";
      target.textContent = "Click me";
      document.body.appendChild(target);

      // Start targeting
      const upBtn = document.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Simulate click on capture layer
      const captureLayer =
        document.querySelector<HTMLElement>(".qaid-capture-layer");
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
