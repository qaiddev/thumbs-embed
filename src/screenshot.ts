/**
 * Screenshot capture utility using native Screen Capture API
 */

export interface ScreenshotOptions {
  /** Quality of WebP compression (0-1). Default: 1.0 */
  quality?: number;
  /** Max width of the screenshot. Default: 1280 */
  maxWidth?: number;
  /** Max height of the screenshot. Default: 800 */
  maxHeight?: number;
}

/**
 * Captures a screenshot using the native Screen Capture API
 * Requires user permission but produces accurate results
 * Returns a base64-encoded WebP data URL
 */
export async function captureScreenshot(
  options: ScreenshotOptions = {}
): Promise<string | null> {
  const { quality = 1.0, maxWidth = 1280, maxHeight = 800 } = options;

  try {
    // Check if API is available
    if (!navigator.mediaDevices?.getDisplayMedia) {
      console.warn('Screen Capture API not available');
      return null;
    }

    // Request screen capture - preferCurrentTab auto-selects current tab in supported browsers
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
      video: {
        displaySurface: 'browser',
      },
    } as DisplayMediaStreamOptions);

    // Get video track
    const track = stream.getVideoTracks()[0];
    const settings = track.getSettings();

    // Create video element
    const video = document.createElement('video');
    video.srcObject = stream;
    video.muted = true;

    await new Promise<void>((resolve) => {
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    });

    // Wait for video to have actual frame data
    await new Promise<void>((resolve) => {
      const checkFrame = () => {
        if (video.readyState >= 2) {
          resolve();
        } else {
          requestAnimationFrame(checkFrame);
        }
      };
      checkFrame();
    });

    // Extra delay to ensure frame is rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Calculate dimensions
    const srcWidth = settings.width || video.videoWidth;
    const srcHeight = settings.height || video.videoHeight;
    const scale = Math.min(maxWidth / srcWidth, maxHeight / srcHeight, 1);
    const width = Math.round(srcWidth * scale);
    const height = Math.round(srcHeight * scale);

    // Draw to canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      track.stop();
      return null;
    }

    ctx.drawImage(video, 0, 0, width, height);

    // Stop the stream
    track.stop();

    return canvas.toDataURL('image/webp', quality);
  } catch (error) {
    console.warn('Screenshot capture failed:', error);
    return null;
  }
}
