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
/**
 * Calculate whether modal should go above or below the target element
 */
export declare function calculateVerticalPosition(bounds: SelectedBounds, viewportHeight: number, totalHeight: number, gap: number, viewportPadding: number): {
    top: number;
    position: "above" | "below";
};
/**
 * Calculate horizontal position of modal, clamped to viewport
 */
export declare function calculateHorizontalPosition(bounds: SelectedBounds, viewportWidth: number, modalWidth: number, viewportPadding: number): number;
/**
 * Calculate arrow position relative to modal
 * Points at the click position, not the element center
 */
export declare function calculateArrowPosition(bounds: SelectedBounds, modalLeft: number, modalWidth: number, minOffset?: number, arrowWidth?: number): number;
/**
 * Calculate complete modal position based on selected element bounds
 */
export declare function calculateModalPosition(bounds: SelectedBounds, viewportWidth: number, viewportHeight: number, dimensions?: ModalDimensions): ModalPosition;
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
/**
 * Calculate both modal and arrow positions
 */
export declare function calculateModalAndArrowPosition(bounds: SelectedBounds, viewportWidth: number, viewportHeight: number, dimensions?: ModalDimensions): {
    modal: ModalPosition;
    arrow: ArrowPosition;
};
