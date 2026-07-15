/**
 * Video capture utilities
 * Uses getDisplayMedia + MediaRecorder for screen recording
 */
export interface VideoRecorderOptions {
    /** Max recording duration in seconds. Default: 15 */
    maxDuration?: number;
    /** Video bitrate in bps. Default: 800000 (800kbps) */
    videoBitsPerSecond?: number;
    /**
     * Elements whose live bounding boxes are blurred out of the recording. The
     * blur tracks each element as the page scrolls. Empty/omitted = no redaction.
     */
    redactionElements?: Element[];
    /** Blur radius in px for redacted regions. Default: 12. */
    redactionBlurRadius?: number;
}
export interface VideoRecorder {
    /** Start recording. Requests getDisplayMedia if not already started. */
    start(): Promise<void>;
    /** Stop recording and return the video blob. */
    stop(): Promise<Blob>;
    /** Register a callback for each second tick (receives seconds elapsed). */
    onTick(callback: (elapsed: number) => void): void;
    /** Register a callback for when recording stops (e.g., browser stop button, max duration). */
    onStop(callback: (blob: Blob | null) => void): void;
    /** Clean up all resources. */
    destroy(): void;
}
/**
 * Check if video recording is supported in this browser
 */
export declare function isVideoRecordingSupported(): boolean;
/**
 * Detect the best supported MIME type for recording
 */
export declare function getSupportedMimeType(): string;
/**
 * Create a video recorder that captures the screen
 */
export declare function createVideoRecorder(options?: VideoRecorderOptions): VideoRecorder;
