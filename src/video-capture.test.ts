import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  isVideoRecordingSupported,
  getSupportedMimeType,
  createVideoRecorder,
} from "./video-capture";

// Mock MediaRecorder
class MockMediaRecorder {
  static isTypeSupported = vi.fn().mockReturnValue(true);
  state = "inactive" as "inactive" | "recording" | "paused";
  ondataavailable: ((e: { data: Blob }) => void) | null = null;
  onstop: (() => void) | null = null;
  onerror: (() => void) | null = null;

  constructor(
    public stream: MediaStream,
    public options: { mimeType: string; videoBitsPerSecond: number }
  ) {}

  start(_timeslice?: number) {
    this.state = "recording";
    // Simulate data chunk
    setTimeout(() => {
      if (this.ondataavailable) {
        this.ondataavailable({ data: new Blob(["video-data"], { type: this.options.mimeType }) });
      }
    }, 10);
  }

  stop() {
    this.state = "inactive";
    setTimeout(() => {
      if (this.onstop) {
        this.onstop();
      }
    }, 10);
  }
}

// Mock MediaStream
class MockMediaStream {
  private tracks: { stop: () => void; addEventListener: (event: string, cb: () => void) => void; kind: string }[] = [];

  constructor() {
    this.tracks = [
      {
        stop: vi.fn(),
        addEventListener: vi.fn(),
        kind: "video",
      },
    ];
  }

  getTracks() {
    return this.tracks;
  }

  getVideoTracks() {
    return this.tracks.filter((t) => t.kind === "video");
  }
}

describe("isVideoRecordingSupported", () => {
  it("should return true when getDisplayMedia and MediaRecorder are available", () => {
    // In test environment with our mocks
    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn(),
      },
      writable: true,
      configurable: true,
    });

    (globalThis as Record<string, unknown>).MediaRecorder = MockMediaRecorder;

    expect(isVideoRecordingSupported()).toBe(true);
  });

  it("should return false when getDisplayMedia is not available", () => {
    Object.defineProperty(navigator, "mediaDevices", {
      value: {},
      writable: true,
      configurable: true,
    });

    expect(isVideoRecordingSupported()).toBe(false);
  });
});

describe("getSupportedMimeType", () => {
  beforeEach(() => {
    (globalThis as Record<string, unknown>).MediaRecorder = MockMediaRecorder;
  });

  it("should return the first supported MIME type", () => {
    MockMediaRecorder.isTypeSupported.mockImplementation(
      (type: string) => type === "video/webm;codecs=vp9"
    );

    expect(getSupportedMimeType()).toBe("video/webm;codecs=vp9");
  });

  it("should fall back to webm if vp9 is not supported", () => {
    MockMediaRecorder.isTypeSupported.mockImplementation(
      (type: string) => type === "video/webm"
    );

    expect(getSupportedMimeType()).toBe("video/webm");
  });

  it("should return empty string if no type is supported", () => {
    MockMediaRecorder.isTypeSupported.mockReturnValue(false);

    expect(getSupportedMimeType()).toBe("");
  });
});

describe("createVideoRecorder", () => {
  let mockStream: MockMediaStream;

  beforeEach(() => {
    mockStream = new MockMediaStream();

    Object.defineProperty(navigator, "mediaDevices", {
      value: {
        getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
      },
      writable: true,
      configurable: true,
    });

    (globalThis as Record<string, unknown>).MediaRecorder = MockMediaRecorder;
    MockMediaRecorder.isTypeSupported.mockReturnValue(true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should create a recorder with default options", () => {
    const recorder = createVideoRecorder();
    expect(recorder).toBeDefined();
    expect(recorder.start).toBeTypeOf("function");
    expect(recorder.stop).toBeTypeOf("function");
    expect(recorder.onTick).toBeTypeOf("function");
    expect(recorder.destroy).toBeTypeOf("function");
  });

  it("should request getDisplayMedia on start", async () => {
    const recorder = createVideoRecorder();
    await recorder.start();

    expect(navigator.mediaDevices.getDisplayMedia).toHaveBeenCalledWith(
      expect.objectContaining({
        video: expect.objectContaining({ frameRate: 15 }),
        audio: false,
      })
    );

    recorder.destroy();
  });

  it("should return a blob on stop", async () => {
    const recorder = createVideoRecorder();
    await recorder.start();

    const blob = await recorder.stop();
    expect(blob).toBeInstanceOf(Blob);

    recorder.destroy();
  });

  it("should call onTick callback", async () => {
    vi.useFakeTimers();

    const recorder = createVideoRecorder();
    const tickFn = vi.fn();
    recorder.onTick(tickFn);

    await recorder.start();

    vi.advanceTimersByTime(2000);

    expect(tickFn).toHaveBeenCalled();

    recorder.destroy();
    vi.useRealTimers();
  });

  it("should accept custom maxDuration", () => {
    const recorder = createVideoRecorder({ maxDuration: 30 });
    expect(recorder).toBeDefined();
    recorder.destroy();
  });

  it("should throw if no MIME type is supported", async () => {
    MockMediaRecorder.isTypeSupported.mockReturnValue(false);

    const recorder = createVideoRecorder();
    await expect(recorder.start()).rejects.toThrow("No supported video MIME type found");
  });
});
