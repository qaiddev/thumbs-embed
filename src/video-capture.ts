/**
 * Video capture utilities
 * Uses getDisplayMedia + MediaRecorder for screen recording
 */

import {
  isIOSDevice,
  buildOrientationCorrectedStream,
  type OrientationCorrectedStream,
} from "./video-orientation";

export interface VideoRecorderOptions {
  /** Max recording duration in seconds. Default: 15 */
  maxDuration?: number;
  /** Video bitrate in bps. Default: 800000 (800kbps) */
  videoBitsPerSecond?: number;
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
export function isVideoRecordingSupported(): boolean {
  return (
    typeof navigator !== "undefined" &&
    !!navigator.mediaDevices &&
    typeof navigator.mediaDevices.getDisplayMedia === "function" &&
    typeof MediaRecorder !== "undefined"
  );
}

/**
 * Detect the best supported MIME type for recording
 */
export function getSupportedMimeType(): string {
  if (typeof MediaRecorder === "undefined") return "";

  const candidates = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4",
  ];

  for (const type of candidates) {
    if (MediaRecorder.isTypeSupported(type)) {
      return type;
    }
  }

  return "";
}

/**
 * Create a video recorder that captures the screen
 */
export function createVideoRecorder(options: VideoRecorderOptions = {}): VideoRecorder {
  const maxDuration = options.maxDuration ?? 15;
  const videoBitsPerSecond = options.videoBitsPerSecond ?? 800_000;

  let stream: MediaStream | null = null;
  let orientationCorrection: OrientationCorrectedStream | null = null;
  let recorder: MediaRecorder | null = null;
  let chunks: Blob[] = [];
  let tickCallback: ((elapsed: number) => void) | null = null;
  let stopCallback: ((blob: Blob | null) => void) | null = null;
  let tickInterval: ReturnType<typeof setInterval> | null = null;
  let startTime = 0;
  let resolveStop: ((blob: Blob) => void) | null = null;
  let rejectStop: ((err: Error) => void) | null = null;
  let stopped = false;
  let autoStopTimeout: ReturnType<typeof setTimeout> | null = null;

  function cleanup(): void {
    if (tickInterval !== null) {
      clearInterval(tickInterval);
      tickInterval = null;
    }
    if (autoStopTimeout !== null) {
      clearTimeout(autoStopTimeout);
      autoStopTimeout = null;
    }
    if (orientationCorrection) {
      orientationCorrection.stop();
      orientationCorrection = null;
    }
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
    recorder = null;
    chunks = [];
    tickCallback = null;
    stopCallback = null;
    resolveStop = null;
    rejectStop = null;
  }

  function finishRecording(): void {
    if (stopped) return;
    stopped = true;

    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
  }

  return {
    async start(): Promise<void> {
      stopped = false;
      chunks = [];

      const mimeType = getSupportedMimeType();
      if (!mimeType) {
        throw new Error("No supported video MIME type found");
      }

      // Request screen capture
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15,
        },
        audio: false,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: true,
      });

      // Handle browser "Stop sharing" button
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.addEventListener("ended", () => {
          finishRecording();
        });
      }

      // On iOS/iPadOS the captured file is rotated by the OS; re-encode the live
      // frames through a canvas so the recording is upright everywhere. Falls
      // back to the raw stream if the canvas pipeline isn't available.
      let recordStream: MediaStream = stream;
      if (isIOSDevice()) {
        const corrected = await buildOrientationCorrectedStream(stream);
        if (corrected) {
          orientationCorrection = corrected;
          recordStream = corrected.stream;
        }
      }

      recorder = new MediaRecorder(recordStream, {
        mimeType,
        videoBitsPerSecond,
      });

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        if (resolveStop) {
          resolveStop(blob);
        }
        // Notify via callback (for unexpected stops like browser stop button)
        if (stopCallback) {
          stopCallback(blob);
        }
        // Stop the canvas pipeline (iOS) and the display stream tracks
        if (orientationCorrection) {
          orientationCorrection.stop();
          orientationCorrection = null;
        }
        if (stream) {
          stream.getTracks().forEach((t) => t.stop());
        }
      };

      recorder.onerror = () => {
        if (rejectStop) {
          rejectStop(new Error("MediaRecorder error"));
        }
      };

      recorder.start(1000); // collect data every second
      startTime = Date.now();

      // Start tick interval
      tickInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        if (tickCallback) {
          tickCallback(elapsed);
        }
      }, 1000);

      // Auto-stop at max duration
      autoStopTimeout = setTimeout(() => {
        finishRecording();
      }, maxDuration * 1000);
    },

    stop(): Promise<Blob> {
      return new Promise<Blob>((resolve, reject) => {
        resolveStop = resolve;
        rejectStop = reject;
        finishRecording();
      });
    },

    onTick(callback: (elapsed: number) => void): void {
      tickCallback = callback;
    },

    onStop(callback: (blob: Blob | null) => void): void {
      stopCallback = callback;
    },

    destroy(): void {
      finishRecording();
      cleanup();
    },
  };
}
