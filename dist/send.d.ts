/**
 * The feedback send flow — extracted from embed.ts into its own lazily-loaded
 * chunk. It runs only after a thumb click (or a targeted element), so it is
 * pre-warmed when the pointer or focus reaches the buttons, or on idle,
 * whichever comes first.
 *
 * It captures (and lets the visitor mark up) a screenshot when configured,
 * POSTs the feedback, then opens the linked quest or the message box. It talks
 * back to the embed through the narrow `SendHost` interface.
 */
import { type QuestInstance } from "./quest-launcher";
import type { ModalController } from "./modal";
import type { ResolvedFeedbackConfig, EmbedState, FeedbackData, SelectedBounds } from "./types";
/** The slice of the embed the send flow needs. */
export interface SendHost {
    readonly config: ResolvedFeedbackConfig;
    readonly visitorId: string;
    /** Live references, filled in by the click or the targeting controller. */
    readonly feedbackData: FeedbackData;
    readonly selectedBounds: SelectedBounds;
    readonly destroyed: boolean;
    readonly overlayShadowHost: HTMLDivElement | null;
    /** A quest launched from a button, so destroy() can tear it down. */
    activeQuest: QuestInstance | null;
    setState(state: EmbedState): void;
    /** Record the pending POST, which the message box's PATCHes wait on. */
    setFeedbackId(id: Promise<number | null>): void;
    shouldCaptureViaDom(): boolean;
    ensureOverlayHost(): ShadowRoot;
    ensureModal(): Promise<ModalController>;
    addFeatureStyles(css: string): void;
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
/**
 * Open the full-screen annotation editor over the captured screenshot,
 * reusing the overlay shadow host and the shared dialog a11y helpers.
 * Resolves with the composited WebP data URL, or null when the user skips
 * (caller keeps the original). Pointer events on the overlay host are
 * enabled while the editor is open and restored on close.
 */
export declare function openAnnotationEditor(host: SendHost, screenshot: string): Promise<string | null>;
/** Capture, POST, then hand off to a linked quest or the message box. */
export declare function submitFeedback(host: SendHost): Promise<void>;
/**
 * Launch the quest linked to `type`, if any. Resolves `true` when a quest
 * was configured and the widget launched; `false` when no quest is
 * configured (quest launching off: no `base`, or this button has no quest)
 * or the widget failed to load (caller falls back to its normal UI). The
 * created feedback record id is passed through so the quest response can be
 * joined back to it server-side.
 */
export declare function tryLaunchQuest(host: SendHost, type: "up" | "down" | "video", feedbackId: number | string | null | Promise<number | string | null>): Promise<boolean>;
