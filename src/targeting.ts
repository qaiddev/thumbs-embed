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

import {
  generateElementInfo,
  startKeyboardTargeting,
  type KeyboardTargetingController,
} from "./element-selector";
import {
  getElementAtPointUnderOverlay,
  isEmbedElement,
  getElementBounds,
} from "./dom-utils";
import type {
  ResolvedFeedbackConfig,
  EmbedState,
  FeedbackData,
  FeedbackType,
  SelectedBounds,
} from "./types";

/** A touch that moves more than this (px) is a scroll, not a tap-to-select. */
const TOUCH_TAP_SLOP = 12;

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

export class TargetingController {
  private mousePos = { x: 0, y: 0 };
  private touchStartPos: { x: number; y: number } | null = null;
  private overlayContainer: HTMLDivElement | null = null;
  private captureLayer: HTMLDivElement | null = null;
  private crosshairH: HTMLDivElement | null = null;
  private crosshairV: HTMLDivElement | null = null;
  private scope: HTMLDivElement | null = null;
  private highlightBox: HTMLDivElement | null = null;
  private marker: HTMLDivElement | null = null;
  private keyboardController: KeyboardTargetingController | null = null;

  private boundMouseMove = (e: MouseEvent): void => this.handleMouseMove(e);
  private boundClick = (e: MouseEvent): void => this.handleClick(e);
  private boundTouchStart = (e: TouchEvent): void => this.handleTouchStart(e);
  private boundTouchEnd = (e: TouchEvent): void => this.handleTouchEnd(e);

  constructor(private host: TargetingHost) {}

  startPointer(type: FeedbackType, e: MouseEvent): void {
    this.host.setState("TARGETING");
    this.host.feedbackData.feedbackType = type;
    this.host.feedbackData.elementSelector = null;
    this.host.feedbackData.elementText = null;
    this.host.selectedBounds.visible = false;

    // Track initial mouse position from the click event
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    // Add class to body (light DOM — for cursor override)
    document.body.classList.add("qaid-targeting");
    if (type === "up") {
      document.body.classList.add("qaid-type-up");
    } else {
      document.body.classList.remove("qaid-type-up");
    }

    // Set targeting colors on body so .qaid-highlight rules can resolve them
    document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]);
    document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]);

    this.createTargetingOverlay();

    // Add event listeners on document — overlay is pointer-events:none so scroll works naturally
    document.addEventListener("keydown", this.host.boundKeyDown);
    document.addEventListener("mousemove", this.boundMouseMove);
    document.addEventListener("click", this.boundClick, true);
    // Touch: tap to select (scrolling stays enabled). touchstart is passive
    // (we only read the point); touchend is non-passive so a tap can
    // preventDefault the synthesised click that would otherwise activate the
    // targeted element.
    document.addEventListener("touchstart", this.boundTouchStart, { passive: true });
    document.addEventListener("touchend", this.boundTouchEnd, { passive: false });
  }

  /**
   * Keyboard-driven targeting. Mirrors startPointer minus the mouse plumbing:
   * no `qaid-targeting` body class (keeps the cursor visible for keyboard
   * users), no mouse reticle, and no document mouse/click listeners. The
   * KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
   */
  startKeyboard(type: FeedbackType): void {
    this.host.setState("TARGETING");
    this.host.feedbackData.feedbackType = type;
    this.host.feedbackData.elementSelector = null;
    this.host.feedbackData.elementText = null;
    this.host.selectedBounds.visible = false;

    document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]);
    document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]);

    // Build the highlight box, then hide the mouse reticle (meaningless here)
    this.createTargetingOverlay();
    if (this.crosshairH) this.crosshairH.style.display = "none";
    if (this.crosshairV) this.crosshairV.style.display = "none";
    if (this.scope) this.scope.style.display = "none";

    this.keyboardController = startKeyboardTargeting({
      isExcluded: (el) => isEmbedElement(el),
      onHighlight: (el) => {
        const rect = el.getBoundingClientRect();
        const b = this.highlightBox;
        if (b) {
          b.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
          b.style.width = `${rect.width}px`;
          b.style.height = `${rect.height}px`;
          b.style.display = "block";
        }
        const { text } = generateElementInfo(el);
        this.host.announceMsg(`Targeting ${text || el.tagName.toLowerCase()}`);
      },
      onSelect: (el) => this.selectKeyboardTarget(el),
      onCancel: () => this.cancel(),
    });
  }

  private selectKeyboardTarget(el: Element): void {
    const bounds = getElementBounds(el, 8);
    Object.assign(this.host.selectedBounds, bounds, {
      clickX: bounds.x + bounds.width / 2,
      clickY: bounds.y + bounds.height / 2,
      visible: true,
    });

    const { selector, text } = generateElementInfo(el);
    this.host.feedbackData.elementSelector = selector;
    this.host.feedbackData.elementText = text;

    // Teardown (controller has already auto-stopped before onSelect fired)
    this.removeTargetingOverlay();
    document.body.classList.remove("qaid-targeting", "qaid-type-up");
    document.body.style.removeProperty("--qaid-positive");
    document.body.style.removeProperty("--qaid-negative");
    this.keyboardController = null;
    this.host.clearActiveThumb();

    this.host.setState("SELECTED");
    this.showSelectedMarker();
    void this.host.submitFeedback();
  }

  private createTargetingOverlay(): void {
    const root = this.host.ensureOverlayHost();

    this.overlayContainer = document.createElement("div");
    this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.host.feedbackData.feedbackType}`;

    // Capture layer (pointer-events:none — scroll passes through naturally)
    this.captureLayer = document.createElement("div");
    this.captureLayer.className = "qaid-capture-layer";

    // Vignette
    const vignette = document.createElement("div");
    vignette.className = "qaid-vignette";

    // Crosshairs
    this.crosshairH = document.createElement("div");
    this.crosshairH.className = "qaid-crosshair-h";

    this.crosshairV = document.createElement("div");
    this.crosshairV.className = "qaid-crosshair-v";

    // Scope
    this.scope = document.createElement("div");
    this.scope.className = "qaid-scope";
    this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `;

    // Highlight box overlay (positioned over hovered elements)
    this.highlightBox = document.createElement("div");
    this.highlightBox.className = "qaid-highlight-box";

    this.overlayContainer.appendChild(this.captureLayer);
    this.overlayContainer.appendChild(vignette);
    this.overlayContainer.appendChild(this.highlightBox);
    this.overlayContainer.appendChild(this.crosshairH);
    this.overlayContainer.appendChild(this.crosshairV);
    this.overlayContainer.appendChild(this.scope);

    // Position crosshairs immediately at current mouse position
    this.crosshairH.style.top = `${this.mousePos.y}px`;
    this.crosshairV.style.left = `${this.mousePos.x}px`;
    this.scope.style.left = `${this.mousePos.x}px`;
    this.scope.style.top = `${this.mousePos.y}px`;

    this.host.applyVars(this.overlayContainer);
    root.appendChild(this.overlayContainer);
  }

  private handleMouseMove(e: MouseEvent): void {
    this.updateReticleAt(e.clientX, e.clientY);
  }

  /** Move the crosshair/scope reticle and highlight the element under (x, y). */
  private updateReticleAt(x: number, y: number): void {
    this.mousePos.x = x;
    this.mousePos.y = y;

    if (this.crosshairH) this.crosshairH.style.top = `${y}px`;
    if (this.crosshairV) this.crosshairV.style.left = `${x}px`;
    if (this.scope) {
      this.scope.style.left = `${x}px`;
      this.scope.style.top = `${y}px`;
    }

    // Find element underneath — hide both shadow hosts
    if (this.captureLayer && this.host.shadowHost) {
      const hosts = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean) as HTMLElement[];
      const elementUnder = getElementAtPointUnderOverlay(x, y, hosts);

      if (elementUnder && !isEmbedElement(elementUnder)) {
        if (this.highlightBox) {
          const rect = elementUnder.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
          this.highlightBox.style.width = `${rect.width}px`;
          this.highlightBox.style.height = `${rect.height}px`;
          this.highlightBox.style.display = "block";
        }
      } else if (this.highlightBox) {
        this.highlightBox.style.display = "none";
      }
    }
  }

  private handleClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.selectAt(e.clientX, e.clientY);
  }

  // ---- Touch targeting (iOS/iPadOS) ----
  private handleTouchStart(e: TouchEvent): void {
    const t = e.touches[0];
    if (!t) return;
    this.touchStartPos = { x: t.clientX, y: t.clientY };
    // Preview what's under the finger; don't preventDefault so scrolling works.
    this.updateReticleAt(t.clientX, t.clientY);
  }

  private handleTouchEnd(e: TouchEvent): void {
    // touches is empty on touchend; the lifted point is in changedTouches.
    const t = e.changedTouches[0];
    const start = this.touchStartPos;
    this.touchStartPos = null;
    if (!t || !start) return;
    // A drag beyond the slop threshold is a scroll, not a selection — ignore it.
    const moved = Math.hypot(t.clientX - start.x, t.clientY - start.y);
    if (moved > TOUCH_TAP_SLOP) return;
    e.preventDefault(); // suppress the tap's synthesised click
    this.selectAt(t.clientX, t.clientY);
  }

  /** Select the element under (x, y) and tear down targeting. */
  private selectAt(x: number, y: number): void {
    const hosts = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean) as HTMLElement[];
    const target = getElementAtPointUnderOverlay(x, y, hosts);

    if (!target || isEmbedElement(target)) {
      return;
    }

    const bounds = getElementBounds(target, 8);
    Object.assign(this.host.selectedBounds, bounds, { clickX: x, clickY: y, visible: true });

    const { selector, text } = generateElementInfo(target);
    this.host.feedbackData.elementSelector = selector;
    this.host.feedbackData.elementText = text;

    // Remove targeting overlay and document listeners
    this.stopTargetingListeners();
    document.body.classList.remove("qaid-targeting", "qaid-type-up");
    document.body.style.removeProperty("--qaid-positive");
    document.body.style.removeProperty("--qaid-negative");

    this.host.setState("SELECTED");
    this.host.clearActiveThumb();

    this.showSelectedMarker();
    void this.host.submitFeedback();
  }

  private stopTargetingListeners(): void {
    this.removeTargetingOverlay();
    this.touchStartPos = null;
    document.removeEventListener("mousemove", this.boundMouseMove);
    document.removeEventListener("click", this.boundClick, true);
    document.removeEventListener("touchstart", this.boundTouchStart);
    document.removeEventListener("touchend", this.boundTouchEnd);
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }

  cancel(): void {
    this.keyboardController?.stop();
    this.keyboardController = null;
    this.stopTargetingListeners();
    document.body.classList.remove("qaid-targeting", "qaid-type-up");
    document.body.style.removeProperty("--qaid-positive");
    document.body.style.removeProperty("--qaid-negative");
    this.host.clearActiveThumb();

    this.host.setState("IDLE");
    this.host.feedbackData.feedbackType = null;
    this.host.feedbackData.elementSelector = null;
    this.host.feedbackData.elementText = null;
    this.host.selectedBounds.visible = false;
  }

  private removeTargetingOverlay(): void {
    if (this.overlayContainer) {
      this.overlayContainer.remove();
      this.overlayContainer = null;
    }
    this.captureLayer = null;
    this.crosshairH = null;
    this.crosshairV = null;
    this.scope = null;
  }

  private showSelectedMarker(): void {
    const root = this.host.ensureOverlayHost();

    this.marker = document.createElement("div");
    this.marker.className = "qaid-selected-marker";
    this.marker.style.left = `${this.host.selectedBounds.x}px`;
    this.marker.style.top = `${this.host.selectedBounds.y}px`;
    this.marker.style.width = `${this.host.selectedBounds.width}px`;
    this.marker.style.height = `${this.host.selectedBounds.height}px`;
    this.marker.style.zIndex = String(this.host.config.zIndex + 1);

    this.host.applyVars(this.marker);
    root.appendChild(this.marker);
  }

  hideMarker(): void {
    if (this.marker) {
      this.marker.remove();
      this.marker = null;
    }
  }

  /** Full teardown for embed.destroy(). */
  destroy(): void {
    this.keyboardController?.stop();
    this.keyboardController = null;
    this.stopTargetingListeners();
    this.hideMarker();
  }
}
