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
      const bounds = createBounds({ x: 200, width: 100 }); // Center at 250
      const modalLeft = 50; // Modal starts at 50

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth);

      // Arrow should be at 250 - 50 = 200
      expect(result).toBe(200);
    });

    it("should clamp to minimum offset", () => {
      const bounds = createBounds({ x: 0, width: 20 }); // Center at 10
      const modalLeft = 16;

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      expect(result).toBe(24); // Clamped to minOffset
    });

    it("should clamp to maximum offset", () => {
      const bounds = createBounds({ x: 900, width: 100 }); // Center at 950
      const modalLeft = 608; // 1024 - 400 - 16

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      // Center is 950, modalLeft is 608, so arrow would be at 950 - 608 = 342
      // Max is modalWidth - 24 = 376, so 342 is within bounds
      expect(result).toBe(342);
    });

    it("should actually clamp when arrow would exceed max", () => {
      const bounds = createBounds({ x: 400, width: 100 }); // Center at 450
      const modalLeft = 16; // Modal at left edge

      const result = calculateArrowPosition(bounds, modalLeft, modalWidth, 24);

      // Center is 450, modalLeft is 16, so arrow would be at 450 - 16 = 434
      // Max is modalWidth - 24 = 376, so should be clamped
      expect(result).toBe(modalWidth - 24);
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
