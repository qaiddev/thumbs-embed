/**
 * Modal positioning utilities
 */

import type { SelectedBounds } from "./types";

export interface ModalPosition {
  top: number;
  left: number;
  position: "above" | "below";
}

export interface ArrowPosition {
  left: number;
}

export interface ModalDimensions {
  width: number;
  height: number;
  arrowHeight: number;
  gap: number;
  viewportPadding: number;
}

const DEFAULT_DIMENSIONS: ModalDimensions = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16,
};

/**
 * Calculate whether modal should go above or below the target element
 */
export function calculateVerticalPosition(
  bounds: SelectedBounds,
  viewportHeight: number,
  totalHeight: number,
  gap: number,
  viewportPadding: number
): { top: number; position: "above" | "below" } {
  const spaceAbove = bounds.y;
  const spaceBelow = viewportHeight - (bounds.y + bounds.height);

  // Prefer below if there's enough space
  if (spaceBelow >= totalHeight + gap) {
    return {
      top: bounds.y + bounds.height + gap,
      position: "below",
    };
  }

  // Try above if there's enough space
  if (spaceAbove >= totalHeight + gap) {
    return {
      top: bounds.y - totalHeight - gap,
      position: "above",
    };
  }

  // Neither fits perfectly - clamp to viewport
  const position = spaceBelow > spaceAbove ? "below" : "above";
  let top: number;

  if (position === "below") {
    top = Math.min(
      bounds.y + bounds.height + gap,
      viewportHeight - totalHeight - viewportPadding
    );
  } else {
    top = Math.max(viewportPadding, bounds.y - totalHeight - gap);
  }

  return { top, position };
}

/**
 * Calculate horizontal position of modal, clamped to viewport
 */
export function calculateHorizontalPosition(
  bounds: SelectedBounds,
  viewportWidth: number,
  modalWidth: number,
  viewportPadding: number
): number {
  const centerX = bounds.x + bounds.width / 2;
  let left = centerX - modalWidth / 2;

  // Clamp to viewport
  left = Math.max(viewportPadding, Math.min(left, viewportWidth - modalWidth - viewportPadding));

  return left;
}

/**
 * Calculate arrow position relative to modal
 * Points at the click position, not the element center
 */
export function calculateArrowPosition(
  bounds: SelectedBounds,
  modalLeft: number,
  modalWidth: number,
  minOffset = 24,
  arrowWidth = 24
): number {
  // Use click position for arrow, not element center
  const targetX = bounds.clickX;
  // Subtract half the arrow width to center it on the target
  const arrowLeft = targetX - modalLeft - arrowWidth / 2;

  // Clamp arrow to stay within modal bounds
  return Math.max(minOffset, Math.min(arrowLeft, modalWidth - minOffset - arrowWidth / 2));
}

/**
 * Calculate complete modal position based on selected element bounds
 */
export function calculateModalPosition(
  bounds: SelectedBounds,
  viewportWidth: number,
  viewportHeight: number,
  dimensions: ModalDimensions = DEFAULT_DIMENSIONS
): ModalPosition {
  const totalHeight = dimensions.height + dimensions.arrowHeight;

  const vertical = calculateVerticalPosition(
    bounds,
    viewportHeight,
    totalHeight,
    dimensions.gap,
    dimensions.viewportPadding
  );

  const left = calculateHorizontalPosition(
    bounds,
    viewportWidth,
    dimensions.width,
    dimensions.viewportPadding
  );

  return {
    top: vertical.top,
    left,
    position: vertical.position,
  };
}

/**
 * Calculate both modal and arrow positions
 */
export function calculateModalAndArrowPosition(
  bounds: SelectedBounds,
  viewportWidth: number,
  viewportHeight: number,
  dimensions: ModalDimensions = DEFAULT_DIMENSIONS
): { modal: ModalPosition; arrow: ArrowPosition } {
  const modal = calculateModalPosition(bounds, viewportWidth, viewportHeight, dimensions);

  const arrowLeft = calculateArrowPosition(
    bounds,
    modal.left,
    dimensions.width
  );

  return {
    modal,
    arrow: { left: arrowLeft },
  };
}
