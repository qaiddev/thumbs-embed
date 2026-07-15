/**
 * Feedback message modal — extracted from embed.ts into its own lazily-loaded
 * chunk. It's fetched the first time a message modal opens (after feedback is
 * submitted), and pre-warmed while the user is targeting an element.
 *
 * The controller owns the modal/backdrop DOM and the message PATCH flow, and
 * talks back to the embed through the narrow `ModalHost` interface.
 */
import type { ResolvedFeedbackConfig, EmbedState, FeedbackData, SelectedBounds } from "./types";
/** The slice of the embed the modal needs. */
export interface ModalHost {
    readonly config: ResolvedFeedbackConfig;
    readonly uid: string;
    readonly isMobile: boolean;
    readonly state: EmbedState;
    readonly boundKeyDown: (e: KeyboardEvent) => void;
    /** Live references — the toggle mutates feedbackType; positioning reads bounds. */
    readonly feedbackData: FeedbackData;
    readonly selectedBounds: SelectedBounds;
    readonly feedbackId: number | null;
    setFeedbackId(id: number | null): void;
    ensureOverlayHost(): ShadowRoot;
    applyVars(el: HTMLElement): void;
    announceMsg(message: string, assertive?: boolean): void;
    openDialogA11y(container: HTMLElement, opts: {
        labelledbyId?: string;
        describedbyId?: string;
        label?: string;
    }): void;
    closeDialogA11y(): void;
    resetFeedbackUi(): void;
}
export declare class ModalController {
    private host;
    private modalContainer;
    private backdrop;
    constructor(host: ModalHost);
    open(): void;
    /** Escape / external close. Runs the finalize-PATCH + teardown. */
    close(): void;
    /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
    destroy(): void;
    private teardown;
    private showBottomSheet;
    private showPositionedModal;
    private getModalContent;
    private setupModalInteractions;
    private submitMessage;
}
