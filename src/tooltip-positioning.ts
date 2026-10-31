/**
 * Tooltip positioning. Kept apart from modal-positioning so the startup chunk
 * carries only this, and the modal maths travels with the modal chunk.
 */

export interface TooltipPositionOptions {
  /** Gap in pixels between anchor and tooltip, and from viewport edges */
  gap?: number;
}

/**
 * Calculate tooltip position relative to an anchor, clamped to the viewport.
 * Pure function: no DOM access — caller passes measured rects and viewport size.
 *
 * Strategy:
 * - Place below the anchor by default
 * - Flip above if below would overflow vertically
 * - Clamp horizontally to viewport, then vertically to viewport
 */
export function calculateTooltipPosition(
  anchor: { top: number; bottom: number; left: number },
  tooltip: { width: number; height: number },
  viewport: { width: number; height: number },
  options: TooltipPositionOptions = {}
): { top: number; left: number } {
  const gap = options.gap ?? 8;

  let top = anchor.bottom + gap;

  // Flip above if below overflows
  if (top + tooltip.height > viewport.height - gap) {
    top = anchor.top - tooltip.height - gap;
  }

  // Clamp horizontally
  let left = anchor.left;
  if (left < gap) {
    left = gap;
  } else if (left + tooltip.width > viewport.width - gap) {
    left = viewport.width - tooltip.width - gap;
  }

  // Clamp vertically
  if (top < gap) {
    top = gap;
  } else if (top + tooltip.height > viewport.height - gap) {
    top = viewport.height - tooltip.height - gap;
  }

  return { top, left };
}
