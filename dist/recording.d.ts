/**
 * Video-recording subsystem — extracted from embed.ts so it lives in its own
 * lazily-loaded chunk. A thumbs-only visitor never downloads any of this; the
 * embed dynamically imports it the first time the record button is used (and
 * warms it on hover — see embed.ts prewarmVideo).
 *
 * The controller owns all recording state and UI (recorder, redaction picker,
 * indicator, preview, submit). It talks back to the embed through the narrow
 * `RecordingHost` interface, so embed internals stay private and the coupling
 * is explicit.
 */
import type { ResolvedFeedbackConfig, EmbedState } from "./types";
import type { ConsoleCapture } from "./console-capture";
/** The slice of the embed the recording subsystem needs. */
export interface RecordingHost {
    readonly config: ResolvedFeedbackConfig;
    readonly visitorId: string;
    readonly uid: string;
    readonly overlayShadowHost: HTMLDivElement | null;
    readonly consoleCapture: ConsoleCapture | null;
    readonly boundKeyDown: (e: KeyboardEvent) => void;
    readonly state: EmbedState;
    setState(state: EmbedState): void;
    ensureOverlayHost(): ShadowRoot;
    applyVars(el: HTMLElement): void;
    announceMsg(message: string, assertive?: boolean): void;
    openDialogA11y(container: HTMLElement, opts: {
        labelledbyId?: string;
        describedbyId?: string;
        label?: string;
    }): void;
    closeDialogA11y(): void;
    setButtonsDisabled(disabled: boolean): void;
    tryLaunchQuest(type: "up" | "down" | "video", feedbackId: number | string | null): Promise<boolean>;
}
export declare class RecordingController {
    private host;
    private videoRecorder;
    private networkCapture;
    private recordedBlob;
    private recordingIndicator;
    private videoPreview;
    private isRecording;
    private isSendingVideo;
    private redactPicks;
    private redactPickerRoot;
    private redactRafId;
    private boundRedactClick;
    constructor(host: RecordingHost);
    /** Escape-key handler; returns true when it consumed the key. */
    handleEscape(): boolean;
    destroy(): void;
    startRecording(redactionElements?: Element[]): Promise<void>;
    private stopRecording;
    /**
     * Pre-recording redaction picker. The user clicks page areas to blur; each
     * gets an outline that tracks its position, then "Start recording" hands the
     * picks to the recorder, which blurs their live bounding boxes so the
     * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
     */
    startPicking(): void;
    private handleRedactPickClick;
    private renderRedactPicks;
    private finishRedactionPicking;
    private showRecordingIndicator;
    private updateRecordingTimer;
    private formatTime;
    private removeRecordingIndicator;
    private showRecordingPreview;
    private cancelRecordingPreview;
    private removeVideoPreview;
    private submitVideoFeedback;
    private cleanupRecording;
}
