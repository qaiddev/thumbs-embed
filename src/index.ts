/**
 * @qaiddev/thumbs-embed - Standalone Feedback Embed
 *
 * A zero-dependency feedback embed with element targeting.
 *
 * Usage via ES module:
 * ```typescript
 * import { FeedbackEmbed } from '@qaiddev/thumbs-embed';
 *
 * const embed = new FeedbackEmbed({
 *   endpoint: '/api/feedback'
 * });
 * ```
 *
 * Usage via script tag:
 * ```html
 * <script src="feedback.umd.cjs" data-endpoint="/api/feedback"></script>
 * ```
 *
 * Or manually initialize:
 * ```html
 * <script src="feedback.umd.cjs"></script>
 * <script>
 *   const embed = new FeedbackEmbed.FeedbackEmbed({
 *     endpoint: '/api/feedback'
 *   });
 * </script>
 * ```
 */

import { FeedbackEmbed } from "./embed";

export { FeedbackEmbed };
export type {
  FeedbackConfig,
  ResolvedFeedbackConfig,
  ConsoleError,
  NetworkError,
  FeedbackData,
  SelectedBounds,
  FeedbackPayload,
  FeedbackResponse,
  FeedbackMessagePayload,
} from "./types";
export { captureNetworkErrors } from "./network-capture";
export type { NetworkCapture } from "./network-capture";
export { createVideoRecorder, isVideoRecordingSupported, getSupportedMimeType } from "./video-capture";
export type { VideoRecorder, VideoRecorderOptions } from "./video-capture";
export { captureDomScreenshot, isDomScreenshotSupported } from "./screenshot-dom";
export type { DomScreenshotOptions } from "./screenshot-dom";

import type { FeedbackConfig } from "./types";

/**
 * Parse JSON config from a separate script tag with type="application/json"
 * Looks for: <script type="application/json" data-feedback-config>{ ... }</script>
 */
function parseJsonConfig(): Partial<FeedbackConfig> | null {
  const configScript = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!configScript) return null;

  const textContent = configScript.textContent?.trim();
  if (!textContent) return null;

  try {
    return JSON.parse(textContent);
  } catch {
    return null;
  }
}

/**
 * Parse config from data-* attributes (backward compatibility)
 */
function parseDataAttributes(script: HTMLScriptElement): Partial<FeedbackConfig> | null {
  const endpoint = script.getAttribute("data-endpoint");
  if (!endpoint) return null;

  const position = script.getAttribute("data-position") as
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | null;
  const zIndex = script.getAttribute("data-zindex");
  const positiveColor = script.getAttribute("data-positive-color");
  const negativeColor = script.getAttribute("data-negative-color");
  const markerColor = script.getAttribute("data-marker-color");
  const container = script.getAttribute("data-container");
  const buttonClass = script.getAttribute("data-button-class");
  const skipTargeting = script.getAttribute("data-skip-targeting");
  const incognito = script.getAttribute("data-incognito");
  const buttonSize = script.getAttribute("data-button-size") as
    | "small"
    | "medium"
    | "large"
    | null;
  const offsetX = script.getAttribute("data-offset-x");
  const offsetY = script.getAttribute("data-offset-y");
  const modalWidth = script.getAttribute("data-modal-width");
  const backdropOpacity = script.getAttribute("data-backdrop-opacity");
  const fontFamily = script.getAttribute("data-font-family");
  const fontSize = script.getAttribute("data-font-size");
  const tooltip = script.getAttribute("data-tooltip");
  const bannerText = script.getAttribute("data-banner-text");
  const bannerHint = script.getAttribute("data-banner-hint");
  const modalTitle = script.getAttribute("data-modal-title");
  const modalSubtitle = script.getAttribute("data-modal-subtitle");
  const placeholder = script.getAttribute("data-placeholder");
  const submitButton = script.getAttribute("data-submit-button");
  const skipButton = script.getAttribute("data-skip-button");
  const positiveIcon = script.getAttribute("data-positive-icon");
  const negativeIcon = script.getAttribute("data-negative-icon");
  const apiKey = script.getAttribute("data-api-key");
  const captureScreenshot = script.getAttribute("data-capture-screenshot");
  const screenshotQuality = script.getAttribute("data-screenshot-quality");
  const screenshotMaxWidth = script.getAttribute("data-screenshot-max-width");
  const screenshotMaxHeight = script.getAttribute("data-screenshot-max-height");
  const captureVideo = script.getAttribute("data-capture-video");
  const hideThumbs = script.getAttribute("data-hide-thumbs");
  const videoMaxDuration = script.getAttribute("data-video-max-duration");
  const screenshotMethod = script.getAttribute("data-screenshot-method") as "dom" | "permission" | null;

  return {
    endpoint,
    apiKey: apiKey ?? undefined,
    captureScreenshot: captureScreenshot === "true" ? true : undefined,
    screenshotOptions: (screenshotQuality || screenshotMaxWidth || screenshotMaxHeight) ? {
      quality: screenshotQuality ? parseFloat(screenshotQuality) : undefined,
      maxWidth: screenshotMaxWidth ? parseInt(screenshotMaxWidth, 10) : undefined,
      maxHeight: screenshotMaxHeight ? parseInt(screenshotMaxHeight, 10) : undefined,
    } : undefined,
    container: container ?? undefined,
    buttonClass: buttonClass ?? undefined,
    position: position ?? undefined,
    zIndex: zIndex ? parseInt(zIndex, 10) : undefined,
    skipTargeting: skipTargeting === "true" ? true : undefined,
    incognito: incognito === "true" ? true : undefined,
    buttonSize: buttonSize ?? undefined,
    offset: (offsetX || offsetY) ? {
      x: offsetX ? parseInt(offsetX, 10) : undefined,
      y: offsetY ? parseInt(offsetY, 10) : undefined,
    } : undefined,
    modalWidth: modalWidth ? parseInt(modalWidth, 10) : undefined,
    backdropOpacity: backdropOpacity ? parseFloat(backdropOpacity) : undefined,
    fontFamily: fontFamily ?? undefined,
    fontSize: fontSize ? parseInt(fontSize, 10) : undefined,
    colors: {
      positive: positiveColor ?? undefined,
      negative: negativeColor ?? undefined,
      marker: markerColor ?? undefined,
    },
    text: (tooltip || bannerText || bannerHint || modalTitle || modalSubtitle || placeholder || submitButton || skipButton) ? {
      tooltip: tooltip ?? undefined,
      bannerText: bannerText ?? undefined,
      bannerHint: bannerHint ?? undefined,
      modalTitle: modalTitle ?? undefined,
      modalSubtitle: modalSubtitle ?? undefined,
      placeholder: placeholder ?? undefined,
      submitButton: submitButton ?? undefined,
      skipButton: skipButton ?? undefined,
    } : undefined,
    positiveIcon: positiveIcon ?? undefined,
    negativeIcon: negativeIcon ?? undefined,
    screenshotMethod: screenshotMethod ?? undefined,
    captureVideo: captureVideo === "true" ? true : undefined,
    hideThumbs: hideThumbs === "true" ? true : undefined,
    videoOptions: videoMaxDuration ? {
      maxDuration: parseInt(videoMaxDuration, 10),
    } : undefined,
  };
}

// Auto-initialize from script tag
if (typeof document !== "undefined") {
  const initFromScript = (): void => {
    const script = document.currentScript as HTMLScriptElement | null;

    // Try JSON config from separate script tag first, fall back to data-* attributes
    const jsonConfig = parseJsonConfig();
    const dataConfig = script ? parseDataAttributes(script) : null;
    const config = jsonConfig ?? dataConfig;

    if (config?.endpoint) {
      new FeedbackEmbed(config as FeedbackConfig);
    }
  };

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFromScript);
  } else {
    initFromScript();
  }
}
