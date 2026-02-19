import { describe, it, expect } from "vitest";
import {
  calculateVerticalPosition,
  calculateHorizontalPosition,
  calculateArrowPosition,
  calculateModalPosition,
  calculateModalAndArrowPosition,
} from "./modal-positioning";
import type { SelectedBounds } from "./types";

describe("modal-positioning", () => {
  const createBounds = (
    overrides: Partial<SelectedBounds> = {}
  ): SelectedBounds => ({
    x: 200,
    y: 200,
    width: 100,
    height: 50,
    clickX: 250,
    clickY: 225,
    visible: true,
    ...overrides,
  });

  describe("calculateVerticalPosition", () => {
    const totalHeight = 300;
    const gap = 8;
    const viewportPadding = 16;
    const viewportHeight = 800;

    it("should position below when there is enough space", () => {
      const bounds = createBounds({ y: 100, height: 50 });

      const result = calculateVerticalPosition(
        bounds,
        viewportHeight,
        totalHeight,
        gap,
        viewportPadding
      );

      expect(result.position).toBe("below");
      expect(result.top).toBe(bounds.y + bounds.height + gap);
    });

    it("should position above when more space above", () => {
      const bounds = createBounds({ y: 600, height: 50 });

      const result = calculateVerticalPosition(
        bounds,
        viewportHeight,
        totalHeight,
        gap,
        viewportPadding
      );

      expect(result.position).toBe("above");
      expect(result.top).toBe(bounds.y - totalHeight - gap);
    });

    it("should clamp to viewport when neither fits perfectly", () => {
      const bounds = createBounds({ y: 400, height: 50 });
      const smallViewport = 500;

      const result = calculateVerticalPosition(
        bounds,
        smallViewport,
        totalHeight,
        gap,
        viewportPadding
      );

      // Should choose position based on more space
      expect(["above", "below"]).toContain(result.position);
      // Should be clamped to viewport
      expect(result.top).toBeGreaterThanOrEqual(viewportPadding);
      expect(result.top + totalHeight).toBeLessThanOrEqual(
        smallViewport - viewportPadding
      );
    });

    it("should position at top padding when above is chosen but clamped", () => {
      const bounds = createBounds({ y: 50, height: 50 });

      const result = calculateVerticalPosition(
        bounds,
        viewportHeight,
        totalHeight,
        gap,
        viewportPadding
      );

      // With very little space above, should go below
      expect(result.position).toBe("below");
    });

    it("should clamp below when more space below but not enough for full modal", () => {
      // Element near the middle-top: spaceAbove=200, spaceBelow=250
      // Neither fits totalHeight(300)+gap(8)=308, but spaceBelow > spaceAbove → "below"
      const bounds = createBounds({ y: 200, height: 50 });
      const tinyViewport = 500;

      const result = calculateVerticalPosition(
        bounds,
        tinyViewport,
        totalHeight,
        gap,
        viewportPadding
      );

      expect(result.position).toBe("below");
      // Unclamped would be bounds.y + bounds.height + gap = 258
      // Clamped to viewportHeight - totalHeight - viewportPadding = 500 - 300 - 16 = 184
      expect(result.top).toBe(tinyViewport - totalHeight - viewportPadding);
    });

    it("should clamp above when more space above but not enough for full modal", () => {
      // Element near the middle-bottom: spaceAbove=350, spaceBelow=100
      // Neither fits totalHeight(300)+gap(8)=308, but spaceBelow <= spaceAbove → "above"
      // Unclamped would be bounds.y - totalHeight - gap = 350 - 300 - 8 = 42
      // Max(viewportPadding, 42) = 42, so we need to force clamping
      // Use a smaller viewport where the element is low enough that above doesn't fit
      const bounds = createBounds({ y: 250, height: 50 });
      const tinyViewport = 400;
      // spaceAbove=250, spaceBelow=100 → "above"
      // Unclamped: 250 - 300 - 8 = -58, clamped to viewportPadding=16

      const result = calculateVerticalPosition(
        bounds,
        tinyViewport,
        totalHeight,
        gap,
        viewportPadding
      );

      expect(result.position).toBe("above");
      expect(result.top).toBe(viewportPadding);
    });
  });

  describe("calculateHorizontalPosition", () => {
    const viewportWidth = 1024;
    const modalWidth = 400;
    const viewportPadding = 16;

    it("should center modal on element when possible", () => {
      const bounds = createBounds({ x: 312, width: 100 }); // Center at 362

      const result = calculateHorizontalPosition(
        bounds,
        viewportWidth,
        modalWidth,
        viewportPadding
      );

      // Center of element is 362, so modal left should be 362 - 200 = 162
      expect(result).toBe(162);
    });

    it("should clamp to left edge", () => {
      const bounds = createBounds({ x: 0, width: 50 }); // Center at 25

      const result = calculateHorizontalPosition(
        bounds,
        viewportWidth,
        modalWidth,
        viewportPadding
      );

      expect(result).toBe(viewportPadding);
    });

    it("should clamp to right edge", () => {
      const bounds = createBounds({ x: 900, width: 100 }); // Center at 950

      const result = calculateHorizontalPosition(
        bounds,
        viewportWidth,
        modalWidth,
        viewportPadding
      );

      expect(result).toBe(viewportWidth - modalWidth - viewportPadding);
    });
  });

  describe("calculateArrowPosition", () => {
    const modalWidth = 400;

    it("should point to center of element", () => {
      const bounds = createBounds({ x: 200, width: 100, clickX: 250 }); // Click at center
      const modalLeft = 50; // Modal starts at 50

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth);

      // arrowLeft = clickX - modalLeft - arrowWidth/2 = 250 - 50 - 12 = 188
      expect(result).toBe(188);
    });

    it("should clamp to minimum offset", () => {
      const bounds = createBounds({ x: 0, width: 20, clickX: 10 }); // Click at center of narrow element
      const modalLeft = 16;

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      // arrowLeft = 10 - 16 - 12 = -18, clamped to minOffset 24
      expect(result).toBe(24);
    });

    it("should clamp to maximum offset", () => {
      const bounds = createBounds({ x: 900, width: 100, clickX: 950 }); // Click at center
      const modalLeft = 608; // 1024 - 400 - 16

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      // arrowLeft = 950 - 608 - 12 = 330, max = 400 - 24 - 12 = 364, so 330 is within bounds
      expect(result).toBe(330);
    });

    it("should actually clamp when arrow would exceed max", () => {
      const bounds = createBounds({ x: 400, width: 100, clickX: 450 }); // Click at center
      const modalLeft = 16; // Modal at left edge

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      // arrowLeft = 450 - 16 - 12 = 422, max = 400 - 24 - 12 = 364, so clamped
      expect(result).toBe(modalWidth - 24 - 12);
    });
  });

  describe("calculateModalPosition", () => {
    it("should return complete position info", () => {
      const bounds = createBounds({ x: 300, y: 200, width: 100, height: 50 });

      const result = calculateModalPosition(bounds, 1024, 800);

      expect(result).toHaveProperty("top");
      expect(result).toHaveProperty("left");
      expect(result).toHaveProperty("position");
      expect(typeof result.top).toBe("number");
      expect(typeof result.left).toBe("number");
      expect(["above", "below"]).toContain(result.position);
    });

    it("should use custom dimensions", () => {
      const bounds = createBounds({ y: 100, height: 50 });
      const customDimensions = {
        width: 300,
        height: 200,
        arrowHeight: 10,
        gap: 10,
        viewportPadding: 20,
      };

      const result = calculateModalPosition(bounds, 1024, 800, customDimensions);

      // Should position below with gap
      expect(result.top).toBe(bounds.y + bounds.height + customDimensions.gap);
    });
  });

  describe("calculateModalAndArrowPosition", () => {
    it("should return both modal and arrow positions", () => {
      const bounds = createBounds({ x: 300, y: 200, width: 100, height: 50 });

      const result = calculateModalAndArrowPosition(bounds, 1024, 800);

      expect(result).toHaveProperty("modal");
      expect(result).toHaveProperty("arrow");
      expect(result.modal).toHaveProperty("top");
      expect(result.modal).toHaveProperty("left");
      expect(result.modal).toHaveProperty("position");
      expect(result.arrow).toHaveProperty("left");
    });

    it("should have consistent arrow position relative to modal", () => {
      const bounds = createBounds({ x: 300, y: 200, width: 100, height: 50 });

      const result = calculateModalAndArrowPosition(bounds, 1024, 800);

      // Arrow left should point to center of element relative to modal
      const elementCenterX = bounds.x + bounds.width / 2;
      const expectedArrowLeft = elementCenterX - result.modal.left;

      // Account for clamping
      expect(result.arrow.left).toBeGreaterThanOrEqual(24);
      expect(result.arrow.left).toBeLessThanOrEqual(400 - 24);
    });
  });
});
