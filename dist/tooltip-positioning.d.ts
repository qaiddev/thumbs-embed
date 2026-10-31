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
export declare function calculateTooltipPosition(anchor: {
    top: number;
    bottom: number;
    left: number;
}, tooltip: {
    width: number;
    height: number;
}, viewport: {
    width: number;
    height: number;
}, options?: TooltipPositionOptions): {
    top: number;
    left: number;
};
