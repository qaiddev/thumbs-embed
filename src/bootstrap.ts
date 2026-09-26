/**
 * Auto-initialization from a `<script>` tag.
 *
 * Shared by both delivery entries: the legacy UMD/API entry (`index.ts`) and
 * the minimal ESM loader (`loader.ts`). Kept out of `index.ts` so the loader
 * can auto-init without pulling in `index.ts`'s feature re-exports — that
 * re-export graph is what anchors screenshot/video/annotate into the main
 * chunk and defeats code-splitting.
 */

import { QaidFeedback } from "./embed";
import type { FeedbackConfig } from "./types";

/**
 * Find theme CSS from an element matched by a CSS selector.
 * Used by data-css-selector attribute and JSON cssSelector property.
 */
function findCssFromSelector(selector: string): string {
  const el = document.querySelector(selector);
  return el?.textContent?.trim() ?? "";
}

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
    const parsed = JSON.parse(textContent);
    // Resolve cssSelector → css
    if (parsed.cssSelector && !parsed.css) {
      parsed.css = findCssFromSelector(parsed.cssSelector);
      delete parsed.cssSelector;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Say, once per attribute, that a value was ignored. The embed never throws
 * over a bad attribute: it keeps its default and tells the developer why.
 */
function warnIgnored(attr: string, value: string, expected: string): void {
  console.warn(`[thumbs-embed] Ignoring ${attr}="${value}": expected ${expected}.`);
}

/**
 * Split a comma-separated list, but not on commas inside parentheses, so
 * `rgb(0, 128, 0)` stays one colour.
 */
function splitTopLevel(value: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of value) {
    if (ch === "(") depth++;
    if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "," && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  parts.push(current.trim());
  return parts;
}

/**
 * A list of colours, written as a JSON array (`["#f00","#0f0"]`) or as a
 * comma-separated list (`#f00, rgb(0, 128, 0)`). Any empty entry, a
 * non-string entry, an empty list or malformed JSON rejects the whole value.
 */
function parseColorList(attr: string, raw: string | null): string[] | undefined {
  if (raw === null) return undefined;
  const value = raw.trim();
  let list: unknown = null;
  // Anything that looks like JSON is read as JSON, so an object is rejected
  // rather than taken as a one-colour list.
  if (value.startsWith("[") || value.startsWith("{")) {
    try {
      list = JSON.parse(value);
    } catch {
      list = null;
    }
  } else {
    list = splitTopLevel(value);
  }
  if (
    Array.isArray(list) &&
    list.length > 0 &&
    list.every((c) => typeof c === "string" && c.trim() !== "")
  ) {
    return (list as string[]).map((c) => c.trim());
  }
  warnIgnored(attr, raw, "a JSON array of colours or a comma-separated list");
  return undefined;
}

/**
 * A screen-reader label. An empty one would leave an icon-only button with
 * no accessible name, so it is ignored in favour of the default.
 */
function parseLabel(attr: string, raw: string | null): string | undefined {
  if (raw === null) return undefined;
  if (raw.trim() === "") {
    warnIgnored(attr, raw, "a non-empty label");
    return undefined;
  }
  return raw;
}

/**
 * Parse config from data-* attributes. Every option that can be written as
 * text has one, so the JSON config block is a choice, not a requirement.
 *
 * Exported for tests: index.ts does not re-export it, so this is not public API.
 */
export function parseDataAttributes(script: HTMLScriptElement): Partial<FeedbackConfig> | null {
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
  const hideConfirmation = script.getAttribute("data-hide-confirmation");
  const singleButton = script.getAttribute("data-single-button");
  const feedbackMode = script.getAttribute("data-feedback-mode") as
    | "target"
    | "annotate"
    | null;
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
  const modalTitle = script.getAttribute("data-modal-title");
  const confirmationTitle = script.getAttribute("data-confirmation-title");
  const confirmationMessage = script.getAttribute("data-confirmation-message");
  const confirmationClose = script.getAttribute("data-confirmation-close");
  const errorTitle = script.getAttribute("data-error-title");
  const errorMessage = script.getAttribute("data-error-message");
  const modalSubtitle = script.getAttribute("data-modal-subtitle");
  const placeholder = script.getAttribute("data-placeholder");
  const submitButton = script.getAttribute("data-submit-button");
  const skipButton = script.getAttribute("data-skip-button");
  const positiveIcon = script.getAttribute("data-positive-icon");
  const negativeIcon = script.getAttribute("data-negative-icon");
  const feedbackIcon = script.getAttribute("data-feedback-icon");
  const feedbackLabel = script.getAttribute("data-feedback-label");
  const apiKey = script.getAttribute("data-api-key");
  const captureScreenshot = script.getAttribute("data-capture-screenshot");
  const annotate = script.getAttribute("data-annotate");
  const annotationColor = script.getAttribute("data-annotation-color");
  const screenshotQuality = script.getAttribute("data-screenshot-quality");
  const screenshotMaxWidth = script.getAttribute("data-screenshot-max-width");
  const screenshotMaxHeight = script.getAttribute("data-screenshot-max-height");
  const captureVideo = script.getAttribute("data-capture-video");
  const redaction = script.getAttribute("data-video-redaction");
  const hideThumbs = script.getAttribute("data-hide-thumbs");
  const hideDismiss = script.getAttribute("data-hide-dismiss");
  const videoMaxDuration = script.getAttribute("data-video-max-duration");
  const screenshotMethod = script.getAttribute("data-screenshot-method") as "dom" | "permission" | null;
  const direction = script.getAttribute("data-direction") as "horizontal" | "vertical" | null;
  const cssSelector = script.getAttribute("data-css-selector");
  const css = script.getAttribute("data-css");
  const positiveLabel = parseLabel("data-positive-label", script.getAttribute("data-positive-label"));
  const negativeLabel = parseLabel("data-negative-label", script.getAttribute("data-negative-label"));
  const recordLabel = parseLabel("data-record-label", script.getAttribute("data-record-label"));
  const dismissLabel = parseLabel("data-dismiss-label", script.getAttribute("data-dismiss-label"));
  const annotationPalette = parseColorList(
    "data-annotation-palette",
    script.getAttribute("data-annotation-palette")
  );
  const recordIcon = script.getAttribute("data-record-icon");
  const questBase = script.getAttribute("data-quest-base");
  const questUp = script.getAttribute("data-quest-up");
  const questDown = script.getAttribute("data-quest-down");
  const questVideo = script.getAttribute("data-quest-video");
  const questApiKey = script.getAttribute("data-quest-api-key");
  const questModuleUrl = script.getAttribute("data-quest-module-url");

  return {
    endpoint,
    // Inline CSS wins over a selector, as `css` wins over `cssSelector` in
    // the JSON block.
    css: css || (cssSelector ? findCssFromSelector(cssSelector) : undefined),
    apiKey: apiKey ?? undefined,
    captureScreenshot: captureScreenshot === "true" ? true : undefined,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: annotate === "false" ? false : undefined,
    annotationColor: annotationColor ?? undefined,
    annotationPalette,
    screenshotOptions: (screenshotQuality || screenshotMaxWidth || screenshotMaxHeight) ? {
      quality: screenshotQuality ? parseFloat(screenshotQuality) : undefined,
      maxWidth: screenshotMaxWidth ? parseInt(screenshotMaxWidth, 10) : undefined,
      maxHeight: screenshotMaxHeight ? parseInt(screenshotMaxHeight, 10) : undefined,
    } : undefined,
    container: container ?? undefined,
    buttonClass: buttonClass ?? undefined,
    direction: direction ?? undefined,
    position: position ?? undefined,
    zIndex: zIndex ? parseInt(zIndex, 10) : undefined,
    skipTargeting: skipTargeting === "true" ? true : undefined,
    hideConfirmation: hideConfirmation === "true" ? true : undefined,
    singleButton: singleButton === "true" ? true : undefined,
    feedbackMode: feedbackMode ?? undefined,
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
    text: (tooltip || modalTitle || modalSubtitle || placeholder || submitButton || skipButton || feedbackLabel || confirmationTitle || confirmationMessage || confirmationClose || errorTitle || errorMessage || positiveLabel || negativeLabel || recordLabel || dismissLabel) ? {
      tooltip: tooltip ?? undefined,
      modalTitle: modalTitle ?? undefined,
      modalSubtitle: modalSubtitle ?? undefined,
      placeholder: placeholder ?? undefined,
      submitButton: submitButton ?? undefined,
      skipButton: skipButton ?? undefined,
      feedbackLabel: feedbackLabel ?? undefined,
      confirmationTitle: confirmationTitle ?? undefined,
      confirmationMessage: confirmationMessage ?? undefined,
      confirmationClose: confirmationClose ?? undefined,
      errorTitle: errorTitle ?? undefined,
      errorMessage: errorMessage ?? undefined,
      positiveLabel,
      negativeLabel,
      recordLabel,
      dismissLabel,
    } : undefined,
    positiveIcon: positiveIcon ?? undefined,
    recordIcon: recordIcon ?? undefined,
    negativeIcon: negativeIcon ?? undefined,
    feedbackIcon: feedbackIcon ?? undefined,
    screenshotMethod: screenshotMethod ?? undefined,
    captureVideo: captureVideo === "true" ? true : undefined,
    hideThumbs: hideThumbs === "true" ? true : undefined,
    hideDismiss: hideDismiss === "true" ? true : undefined,
    videoOptions: (videoMaxDuration || redaction) ? {
      maxDuration: videoMaxDuration ? parseInt(videoMaxDuration, 10) : undefined,
      redaction: redaction === "true" ? true : undefined,
    } : undefined,
    quests: questBase ? {
      base: questBase,
      up: questUp ?? undefined,
      down: questDown ?? undefined,
      video: questVideo ?? undefined,
      apiKey: questApiKey ?? undefined,
      moduleUrl: questModuleUrl ?? undefined,
    } : undefined,
  };
}

/**
 * Initialize a QaidFeedback instance from the current `<script>` tag's JSON
 * config block or data-* attributes. Safe to call in any environment — it
 * no-ops when there is no document or no endpoint config.
 */
export function autoInit(): void {
  if (typeof document === "undefined") return;

  const run = (): void => {
    // `document.currentScript` is null inside an ES module (the loader entry),
    // so fall back to locating the embed's own script tag by its data-endpoint.
    const script =
      (document.currentScript as HTMLScriptElement | null) ??
      document.querySelector<HTMLScriptElement>("script[data-endpoint]");
    // Try JSON config from a separate script tag first, fall back to data-* attrs.
    // The JSON block wins. The attributes are only read without one, so a
    // bad attribute beside a block doesn't warn about a value never used.
    const config = parseJsonConfig() ?? (script ? parseDataAttributes(script) : null);

    if (config?.endpoint) {
      new QaidFeedback(config as FeedbackConfig);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
}
