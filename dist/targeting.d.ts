/**
 * Element-targeting subsystem — extracted from embed.ts into its own lazily
 * loaded chunk (it also carries `element-selector`, ~14 KB). It's fetched the
 * first time the user starts targeting (and pre-warmed on thumb-button hover,
 * so the reticle appears without a perceptible wait).
 *
 * The controller owns the reticle/overlay, the mouse/touch/keyboard targeting
 * flows, and the selected-element marker; it talks back to the embed through
 * the narrow `TargetingHost` interface.
 */
import type { ResolvedFeedbackConfig, EmbedState, FeedbackData, SelectedBounds } from "./types";
/** The slice of the embed the targeting subsystem needs. */
export interface TargetingHost {
    readonly config: ResolvedFeedbackConfig;
    readonly cssVars: Record<string, string>;
    readonly state: EmbedState;
    readonly shadowHost: HTMLDivElement | null;
    readonly overlayShadowHost: HTMLDivElement | null;
    readonly boundKeyDown: (e: KeyboardEvent) => void;
    /** Live references, mutated in place. */
    readonly feedbackData: FeedbackData;
    readonly selectedBounds: SelectedBounds;
    setState(state: EmbedState): void;
    ensureOverlayHost(): ShadowRoot;
    applyVars(el: HTMLElement): void;
    announceMsg(message: string, assertive?: boolean): void;
    clearActiveThumb(): void;
    submitFeedback(): Promise<void>;
}
export declare class TargetingController {
    private host;
    private mousePos;
    private touchStartPos;
    private overlayContainer;
    private captureLayer;
    private crosshairH;
    private crosshairV;
    private scope;
    private highlightBox;
    private marker;
    private keyboardController;
    private boundMouseMove;
    private boundClick;
    private boundTouchStart;
    private boundTouchEnd;
    constructor(host: TargetingHost);
    startPointer(type: "up" | "down", e: MouseEvent): void;
    /**
     * Keyboard-driven targeting. Mirrors startPointer minus the mouse plumbing:
     * no `qaid-targeting` body class (keeps the cursor visible for keyboard
     * users), no mouse reticle, and no document mouse/click listeners. The
     * KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
     */
    startKeyboard(type: "up" | "down"): void;
    private selectKeyboardTarget;
    private createTargetingOverlay;
    private handleMouseMove;
    /** Move the crosshair/scope reticle and highlight the element under (x, y). */
    private updateReticleAt;
    private handleClick;
    private handleTouchStart;
    private handleTouchEnd;
    /** Select the element under (x, y) and tear down targeting. */
    private selectAt;
    private stopTargetingListeners;
    cancel(): void;
    private removeTargetingOverlay;
    private showSelectedMarker;
    hideMarker(): void;
    /** Full teardown for embed.destroy(). */
    destroy(): void;
}
