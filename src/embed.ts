import type {
  FeedbackConfig,
  ResolvedFeedbackConfig,
  FeedbackData,
  SelectedBounds,
  EmbedState,
  FeedbackPayload,
  FeedbackResponse,
} from "./types";
import { THUMBS_UP_ICON, THUMBS_DOWN_ICON } from "./icons";
import { injectStyles, removeStyles } from "./styles";
import { generateElementInfo } from "./element-selector";
import { calculateModalAndArrowPosition } from "./modal-positioning";
import { captureConsoleErrors, type ConsoleCapture } from "./console-capture";
import {
  getElementAtPointUnderOverlay,
  isEmbedElement,
  getElementBounds,
  removeAllByClass,
  isMobileViewport,
} from "./dom-utils";
import { captureScreenshot } from "./screenshot";

const VISITOR_ID_KEY = "qaid_visitor_id";

/**
 * Get or create a visitor ID stored in localStorage
 */
function getOrCreateVisitorId(): string {
  try {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  } catch {
    // localStorage not available, generate a session-only ID
    return crypto.randomUUID();
  }
}

/**
 * FeedbackEmbed - Standalone feedback collection embed
 */
export class FeedbackEmbed {
  private config: ResolvedFeedbackConfig;
  private state: EmbedState = "IDLE";
  private feedbackData: FeedbackData = {
    feedbackType: null,
    elementSelector: null,
    elementText: null,
    consoleErrors: [],
  };
  private selectedBounds: SelectedBounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    clickX: 0,
    clickY: 0,
    visible: false,
  };
  private feedbackId: number | null = null;
  private mousePos = { x: 0, y: 0 };
  private lastHighlighted: Element | null = null;
  private isMobile = false;
  private visitorId: string;

  // Console capture
  private consoleCapture: ConsoleCapture | null = null;

  // Server-side feature flags
  private allowedFeatures: { screenshots: boolean; consoleCapture: boolean } | null = null;

  // DOM elements
  private container: HTMLDivElement | null = null;
  private isUserProvidedContainer = false;
  private overlayContainer: HTMLDivElement | null = null;
  private captureLayer: HTMLDivElement | null = null;
  private crosshairH: HTMLDivElement | null = null;
  private crosshairV: HTMLDivElement | null = null;
  private scope: HTMLDivElement | null = null;
  private marker: HTMLDivElement | null = null;
  private modalContainer: HTMLDivElement | null = null;
  private backdrop: HTMLDivElement | null = null;

  // Bound event handlers
  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundMouseMove: (e: MouseEvent) => void;
  private boundClick: (e: MouseEvent) => void;
  private boundResize: () => void;

  constructor(config: FeedbackConfig) {
    this.config = {
      endpoint: config.endpoint,
      apiKey: config.apiKey ?? "",
      container: config.container ?? "",
      buttonClass: config.buttonClass ?? "",
      position: config.position ?? "bottom-right",
      offset: {
        x: config.offset?.x ?? 16,
        y: config.offset?.y ?? 16,
      },
      zIndex: config.zIndex ?? 50,
      skipTargeting: config.skipTargeting ?? false,
      colors: {
        positive: config.colors?.positive ?? "rgb(0, 200, 83)",
        negative: config.colors?.negative ?? "rgb(255, 0, 0)",
        marker: config.colors?.marker ?? "#6366f1",
      },
      buttonSize: config.buttonSize ?? "medium",
      text: {
        tooltip: config.text?.tooltip ?? "",
        bannerText: config.text?.bannerText ?? "Click on any element to target it with your feedback",
        bannerHint: config.text?.bannerHint ?? "(Press Escape to cancel)",
        modalTitle: config.text?.modalTitle ?? "Thank you for your feedback!",
        modalSubtitle: config.text?.modalSubtitle ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: config.text?.placeholder ?? "Optional: Tell us more about your experience...",
        submitButton: config.text?.submitButton ?? "Submit",
        skipButton: config.text?.skipButton ?? "Skip",
      },
      modalWidth: config.modalWidth ?? 400,
      backdropOpacity: config.backdropOpacity ?? 0.3,
      fontFamily: config.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: config.fontSize ?? 16,
      captureScreenshot: config.captureScreenshot ?? false,
      screenshotOptions: {
        quality: config.screenshotOptions?.quality ?? 0.8,
        maxWidth: config.screenshotOptions?.maxWidth ?? 1280,
        maxHeight: config.screenshotOptions?.maxHeight ?? 800,
      },
      incognito: config.incognito ?? false,
      positiveIcon: config.positiveIcon ?? "",
      negativeIcon: config.negativeIcon ?? "",
    };

    // Bind event handlers
    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundClick = this.handleClick.bind(this);
    this.boundResize = this.handleResize.bind(this);

    // Get or create visitor ID for anonymous feedback tracking
    this.visitorId = getOrCreateVisitorId();

    this.init();
  }

  private init(): void {
    // Inject styles
    injectStyles({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      skipButtonStyles: !!this.config.buttonClass,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize,
    });

    // Check mobile
    this.checkMobile();
    window.addEventListener("resize", this.boundResize);

    // Create main embed container
    this.createEmbed();

    // Fetch allowed features from server
    this.fetchAllowedFeatures();

    // Capture console errors
    this.consoleCapture = captureConsoleErrors((error) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    });
    this.feedbackData.consoleErrors = this.consoleCapture.errors;
  }

  private async fetchAllowedFeatures(): Promise<void> {
    if (!this.config.apiKey) return;

    try {
      // Derive features endpoint from feedback endpoint
      const baseUrl = this.config.endpoint.replace(/\/feedback\/?$/, '');
      const featuresUrl = `${baseUrl}/features?apiKey=${encodeURIComponent(this.config.apiKey)}`;

      const response = await fetch(featuresUrl);
      if (response.ok) {
        this.allowedFeatures = await response.json();
      }
    } catch {
      // Silently fail - features will be determined server-side anyway
    }
  }

  private checkMobile(): void {
    this.isMobile = isMobileViewport();
  }

  private handleResize(): void {
    this.checkMobile();
  }

  private createEmbed(): void {
    // Check if user provided a container selector
    let userContainer: HTMLElement | null = null;
    if (this.config.container) {
      userContainer = document.querySelector(this.config.container);
    }

    if (userContainer) {
      // Use user-provided container
      this.container = userContainer as HTMLDivElement;
      this.container.classList.add("qaid-widget", `qaid-${this.config.position}`);
      if (this.config.incognito) {
        this.container.classList.add("qaid-incognito");
      }
      this.isUserProvidedContainer = true;
    } else {
      // Create our own fixed-position container
      this.container = document.createElement("div");
      this.container.className = `qaid-widget qaid-auto-container qaid-${this.config.position}${this.config.incognito ? " qaid-incognito" : ""}`;
      this.container.style.zIndex = String(this.config.zIndex);
      // Apply custom offset
      const { x: offsetX, y: offsetY } = this.config.offset;
      if (this.config.position.includes("right")) {
        this.container.style.right = `${offsetX}px`;
      } else {
        this.container.style.left = `${offsetX}px`;
      }
      if (this.config.position.includes("bottom")) {
        this.container.style.bottom = `${offsetY}px`;
      } else {
        this.container.style.top = `${offsetY}px`;
      }
      document.body.appendChild(this.container);
    }

    // Apply custom fontFamily as inline style if not using default
    const customFont = this.config.fontFamily;
    const isCustomFont = customFont && customFont !== "system-ui, -apple-system, sans-serif";
    if (isCustomFont) {
      this.container.style.fontFamily = customFont;
    }

    // Determine button classes
    const useCustomClass = !!this.config.buttonClass;
    const btnBaseClass = useCustomClass
      ? `qaid-btn-structural ${this.config.buttonClass}`
      : "qaid-btn";

    // Determine tooltip text
    const defaultTooltip = this.config.skipTargeting
      ? "Send feedback"
      : "Any feedback? Click to start, Esc to cancel";
    const tooltipText = this.config.text.tooltip || defaultTooltip;

    // Create shared tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "qaid-tooltip-text";
    tooltip.textContent = tooltipText;
    if (isCustomFont) {
      tooltip.style.fontFamily = customFont;
    }
    document.body.appendChild(tooltip);
    this.tooltipElement = tooltip;

    // Thumbs up button
    const upWrapper = document.createElement("div");
    upWrapper.className = "qaid-tooltip-wrapper";

    const upBtn = document.createElement("button");
    upBtn.type = "button";
    upBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-up` : "qaid-btn qaid-btn-up";
    upBtn.innerHTML = this.config.positiveIcon || THUMBS_UP_ICON;
    upBtn.addEventListener("click", (e) => this.handleThumbClick("up", e.currentTarget as HTMLElement));
    upBtn.addEventListener("mouseenter", () => this.showTooltip(upBtn));
    upBtn.addEventListener("mouseleave", () => this.hideTooltip());
    upWrapper.appendChild(upBtn);

    // Thumbs down button
    const downWrapper = document.createElement("div");
    downWrapper.className = "qaid-tooltip-wrapper";

    const downBtn = document.createElement("button");
    downBtn.type = "button";
    downBtn.className = useCustomClass ? `${btnBaseClass} qaid-btn-down` : "qaid-btn qaid-btn-down";
    downBtn.innerHTML = this.config.negativeIcon || THUMBS_DOWN_ICON;
    downBtn.addEventListener("click", (e) => this.handleThumbClick("down", e.currentTarget as HTMLElement));
    downBtn.addEventListener("mouseenter", () => this.showTooltip(downBtn));
    downBtn.addEventListener("mouseleave", () => this.hideTooltip());
    downWrapper.appendChild(downBtn);

    this.container.appendChild(upWrapper);
    this.container.appendChild(downWrapper);
  }

  private tooltipElement: HTMLElement | null = null;

  private showTooltip(anchor: HTMLElement): void {
    if (!this.tooltipElement) return;

    const tooltip = this.tooltipElement;
    const gap = 8;

    // Make visible to measure
    tooltip.style.visibility = "hidden";
    tooltip.classList.add("qaid-tooltip-visible");

    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top: number;
    let left: number;

    // Always position below the button
    top = anchorRect.bottom + gap;

    // If below would overflow viewport, try above
    if (top + tooltipRect.height > viewportHeight - gap) {
      top = anchorRect.top - tooltipRect.height - gap;
    }

    // Align to left edge of anchor
    left = anchorRect.left;

    // Clamp to viewport horizontally
    if (left < gap) {
      left = gap;
    } else if (left + tooltipRect.width > viewportWidth - gap) {
      left = viewportWidth - tooltipRect.width - gap;
    }

    // Clamp to viewport vertically
    if (top < gap) {
      top = gap;
    } else if (top + tooltipRect.height > viewportHeight - gap) {
      top = viewportHeight - tooltipRect.height - gap;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.style.visibility = "visible";
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.tooltipElement.classList.remove("qaid-tooltip-visible");
    }
  }

  private handleThumbClick(type: "up" | "down", buttonEl: HTMLElement): void {
    if (this.config.skipTargeting) {
      this.submitDirectFeedback(type, buttonEl);
    } else {
      this.startTargeting(type);
    }
  }

  private submitDirectFeedback(type: "up" | "down", buttonEl: HTMLElement): void {
    this.feedbackData.feedbackType = type;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;

    // Use the button's position for modal placement
    const rect = buttonEl.getBoundingClientRect();
    this.selectedBounds = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      clickX: rect.left + rect.width / 2,
      clickY: rect.top + rect.height / 2,
      visible: false,
    };
    this.submitFeedback();
  }

  private startTargeting(type: "up" | "down"): void {
    this.state = "TARGETING";
    this.feedbackData.feedbackType = type;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;
    this.selectedBounds.visible = false;

    // Add class to body
    document.body.classList.add("qaid-targeting");
    if (type === "up") {
      document.body.classList.add("qaid-type-up");
    } else {
      document.body.classList.remove("qaid-type-up");
    }

    // Create targeting overlay
    this.createTargetingOverlay();

    // Add event listeners
    document.addEventListener("keydown", this.boundKeyDown);
  }

  private createTargetingOverlay(): void {
    this.overlayContainer = document.createElement("div");
    this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.feedbackData.feedbackType}`;

    // Capture layer
    this.captureLayer = document.createElement("div");
    this.captureLayer.className = "qaid-capture-layer";
    this.captureLayer.addEventListener("mousemove", this.boundMouseMove);
    this.captureLayer.addEventListener("click", this.boundClick);

    // Banner
    const banner = document.createElement("div");
    banner.className = `qaid-banner qaid-banner-${this.feedbackData.feedbackType}`;
    // Apply custom font if configured
    const customFont = this.config.fontFamily;
    if (customFont && customFont !== "system-ui, -apple-system, sans-serif") {
      banner.style.fontFamily = customFont;
    }
    banner.innerHTML = `
      <span class="qaid-banner-text">${this.config.text.bannerText}</span>
      <span class="qaid-banner-hint">${this.config.text.bannerHint}</span>
    `;

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

    this.overlayContainer.appendChild(this.captureLayer);
    this.overlayContainer.appendChild(banner);
    this.overlayContainer.appendChild(vignette);
    this.overlayContainer.appendChild(this.crosshairH);
    this.overlayContainer.appendChild(this.crosshairV);
    this.overlayContainer.appendChild(this.scope);

    document.body.appendChild(this.overlayContainer);
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape") {
      if (this.state === "TARGETING") {
        this.cancelTargeting();
      } else if (this.state === "MODAL_OPEN") {
        this.closeModal();
      }
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    // Update crosshairs and scope
    if (this.crosshairH) {
      this.crosshairH.style.top = `${e.clientY}px`;
    }
    if (this.crosshairV) {
      this.crosshairV.style.left = `${e.clientX}px`;
    }
    if (this.scope) {
      this.scope.style.left = `${e.clientX}px`;
      this.scope.style.top = `${e.clientY}px`;
    }

    // Find element underneath
    if (this.captureLayer) {
      const elementUnder = getElementAtPointUnderOverlay(
        e.clientX,
        e.clientY,
        this.captureLayer
      );

      if (elementUnder && !isEmbedElement(elementUnder)) {
        if (this.lastHighlighted && this.lastHighlighted !== elementUnder) {
          this.lastHighlighted.classList.remove("qaid-highlight");
        }
        elementUnder.classList.add("qaid-highlight");
        this.lastHighlighted = elementUnder;
      } else if (this.lastHighlighted) {
        this.lastHighlighted.classList.remove("qaid-highlight");
        this.lastHighlighted = null;
      }
    }
  }

  private handleClick(e: MouseEvent): void {
    if (!this.captureLayer) return;

    // Find element underneath
    const target = getElementAtPointUnderOverlay(
      e.clientX,
      e.clientY,
      this.captureLayer
    );

    if (!target || isEmbedElement(target)) {
      return;
    }

    // Remove highlight class before generating selector
    target.classList.remove("qaid-highlight");

    // Get element bounds
    const bounds = getElementBounds(target, 8);
    this.selectedBounds = {
      ...bounds,
      clickX: e.clientX,
      clickY: e.clientY,
      visible: true,
    };

    const { selector, text } = generateElementInfo(target);
    this.feedbackData.elementSelector = selector;
    this.feedbackData.elementText = text;

    // Clean up highlights
    removeAllByClass("qaid-highlight");

    // Remove targeting overlay
    this.removeTargetingOverlay();
    document.body.classList.remove("qaid-targeting", "qaid-type-up");

    this.state = "SELECTED";

    // Show marker and submit feedback
    this.showSelectedMarker();
    this.submitFeedback();
  }

  private cancelTargeting(): void {
    // Clean up highlights
    removeAllByClass("qaid-highlight");

    this.removeTargetingOverlay();
    document.body.classList.remove("qaid-targeting", "qaid-type-up");
    document.removeEventListener("keydown", this.boundKeyDown);

    this.state = "IDLE";
    this.feedbackData.feedbackType = null;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;
    this.selectedBounds.visible = false;
    this.lastHighlighted = null;
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
    if (!this.selectedBounds.visible) return;

    this.marker = document.createElement("div");
    this.marker.className = "qaid-selected-marker";
    this.marker.style.left = `${this.selectedBounds.x}px`;
    this.marker.style.top = `${this.selectedBounds.y}px`;
    this.marker.style.width = `${this.selectedBounds.width}px`;
    this.marker.style.height = `${this.selectedBounds.height}px`;
    this.marker.style.zIndex = String(this.config.zIndex + 1);

    document.body.appendChild(this.marker);
  }

  private hideSelectedMarker(): void {
    if (this.marker) {
      this.marker.remove();
      this.marker = null;
    }
  }

  private async submitFeedback(): Promise<void> {
    if (!this.feedbackData.feedbackType) return;

    // Capture screenshot if enabled and allowed by server
    let screenshot: string | null = null;
    const screenshotAllowed = this.allowedFeatures?.screenshots !== false;
    if (this.config.captureScreenshot && screenshotAllowed) {
      screenshot = await captureScreenshot(this.config.screenshotOptions);
    }

    // Include element bounds for server-side screenshot fallback
    // Only include if we have an element selector (element was targeted)
    const elementBounds = this.feedbackData.elementSelector
      ? {
          x: this.selectedBounds.x,
          y: this.selectedBounds.y,
          width: this.selectedBounds.width,
          height: this.selectedBounds.height,
        }
      : null;

    const payload: FeedbackPayload = {
      feedbackType: this.feedbackData.feedbackType,
      pageUrl: window.location.href,
      apiKey: this.config.apiKey || undefined,
      elementSelector: this.feedbackData.elementSelector,
      elementText: this.feedbackData.elementText,
      consoleErrors: [...this.feedbackData.consoleErrors],
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      clickX: this.selectedBounds.clickX,
      clickY: this.selectedBounds.clickY,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      screenshot,
      visitorId: this.visitorId,
      // Include element bounds and user agent for server-side screenshot fallback
      elementBounds,
      userAgent: navigator.userAgent,
    };

    try {
      const response = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data: FeedbackResponse = await response.json();
        this.feedbackId = data.id;
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    }

    // Always show modal (even if API failed - useful for demos)
    this.state = "MODAL_OPEN";
    this.showModal();
  }

  private showModal(): void {
    // Create backdrop
    this.backdrop = document.createElement("div");
    this.backdrop.className = "qaid-backdrop";
    this.backdrop.style.zIndex = String(this.config.zIndex + 2);
    this.backdrop.style.background = `rgba(0, 0, 0, ${this.config.backdropOpacity})`;
    this.backdrop.addEventListener("click", () => this.closeModal());

    if (this.isMobile) {
      this.showBottomSheet();
    } else {
      this.showPositionedModal();
    }

    document.body.appendChild(this.backdrop);
    document.addEventListener("keydown", this.boundKeyDown);
  }

  private showBottomSheet(): void {
    const sheet = document.createElement("div");
    sheet.className = "qaid-bottom-sheet";
    sheet.style.zIndex = String(this.config.zIndex + 3);
    // Apply custom font if configured
    const customFont = this.config.fontFamily;
    if (customFont && customFont !== "system-ui, -apple-system, sans-serif") {
      sheet.style.fontFamily = customFont;
    }

    sheet.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `;

    document.body.appendChild(sheet);
    this.modalContainer = sheet;

    this.setupModalInteractions();
  }

  private showPositionedModal(): void {
    const { modal, arrow } = calculateModalAndArrowPosition(
      this.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16,
      }
    );

    this.modalContainer = document.createElement("div");
    this.modalContainer.className = `qaid-modal-container qaid-${modal.position}`;
    this.modalContainer.style.top = `${modal.top}px`;
    this.modalContainer.style.left = `${modal.left}px`;
    this.modalContainer.style.zIndex = String(this.config.zIndex + 3);
    // Apply custom font if configured
    const customFont = this.config.fontFamily;
    if (customFont && customFont !== "system-ui, -apple-system, sans-serif") {
      this.modalContainer.style.fontFamily = customFont;
    }

    const arrowEl = document.createElement("div");
    arrowEl.className = "qaid-modal-arrow";
    arrowEl.style.left = `${arrow.left}px`;

    const box = document.createElement("div");
    box.className = "qaid-modal-box";
    box.innerHTML = this.getModalContent();

    this.modalContainer.appendChild(arrowEl);
    this.modalContainer.appendChild(box);
    document.body.appendChild(this.modalContainer);

    this.setupModalInteractions();
  }

  private getModalContent(): string {
    const isUp = this.feedbackData.feedbackType === "up";
    const positiveIcon = this.config.positiveIcon || THUMBS_UP_ICON;
    const negativeIcon = this.config.negativeIcon || THUMBS_DOWN_ICON;
    const toggleClass = this.config.buttonClass
      ? `qaid-type-toggle qaid-type-toggle-custom ${this.config.buttonClass} ${isUp ? "qaid-btn-up" : "qaid-btn-down"}`
      : `qaid-type-toggle ${isUp ? "qaid-type-up" : "qaid-type-down"}`;
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${toggleClass}" title="Click to switch">
          ${isUp ? positiveIcon : negativeIcon}
        </button>
        <div class="qaid-modal-header-text">
          <h3 class="qaid-modal-title">${this.config.text.modalTitle}</h3>
          <p class="qaid-modal-subtitle">${this.config.text.modalSubtitle}</p>
        </div>
      </div>
      <textarea class="qaid-textarea" placeholder="${this.config.text.placeholder}"></textarea>
      <div class="qaid-btn-row">
        <button type="button" class="qaid-btn-submit">${this.config.text.skipButton}</button>
      </div>
    `;
  }

  private setupModalInteractions(): void {
    if (!this.modalContainer) return;

    const textarea =
      this.modalContainer.querySelector<HTMLTextAreaElement>(".qaid-textarea");
    const submitBtn =
      this.modalContainer.querySelector<HTMLButtonElement>(".qaid-btn-submit");
    if (textarea) {
      // Auto-focus
      setTimeout(() => textarea.focus(), 100);

      // Update button text based on content
      textarea.addEventListener("input", () => {
        if (submitBtn) {
          submitBtn.textContent = textarea.value.trim() ? this.config.text.submitButton : this.config.text.skipButton;
        }
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const message = textarea?.value.trim() || null;
        this.submitMessage(message);
      });
    }

    // Handle feedback type toggle
    const typeToggle = this.modalContainer.querySelector<HTMLButtonElement>(".qaid-type-toggle");
    if (typeToggle) {
      typeToggle.addEventListener("click", () => {
        const newType = this.feedbackData.feedbackType === "up" ? "down" : "up";
        this.feedbackData.feedbackType = newType;

        // Update UI - use different classes depending on custom buttonClass
        if (this.config.buttonClass) {
          typeToggle.classList.toggle("qaid-btn-up", newType === "up");
          typeToggle.classList.toggle("qaid-btn-down", newType === "down");
        } else {
          typeToggle.classList.toggle("qaid-type-up", newType === "up");
          typeToggle.classList.toggle("qaid-type-down", newType === "down");
        }
        const positiveIcon = this.config.positiveIcon || THUMBS_UP_ICON;
        const negativeIcon = this.config.negativeIcon || THUMBS_DOWN_ICON;
        typeToggle.innerHTML = newType === "up" ? positiveIcon : negativeIcon;

        // Update feedback on server
        if (this.feedbackId) {
          fetch(`${this.config.endpoint}/${this.feedbackId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ feedbackType: newType }),
          }).catch((err) => console.error("Failed to update feedback type:", err));
        }
      });
    }
  }

  private async submitMessage(message: string | null): Promise<void> {
    if (this.feedbackId) {
      try {
        await fetch(`${this.config.endpoint}/${this.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        });
      } catch (error) {
        console.error("Failed to submit feedback message:", error);
      }
      // Clear feedbackId so closeModal doesn't send another PATCH
      this.feedbackId = null;
    }

    this.closeModal();
  }

  private closeModal(): void {
    // If modal is open and we're closing without submitting, still finalize
    if (this.state === "MODAL_OPEN" && this.feedbackId) {
      fetch(`${this.config.endpoint}/${this.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: null }),
      }).catch((err) => console.error("Failed to finalize feedback:", err));
    }

    if (this.modalContainer) {
      this.modalContainer.remove();
      this.modalContainer = null;
    }
    if (this.backdrop) {
      this.backdrop.remove();
      this.backdrop = null;
    }

    document.removeEventListener("keydown", this.boundKeyDown);
    this.hideSelectedMarker();

    this.state = "IDLE";
    this.feedbackId = null;
    this.feedbackData.feedbackType = null;
    this.feedbackData.elementSelector = null;
    this.feedbackData.elementText = null;
    this.selectedBounds.visible = false;
  }

  /**
   * Destroy the embed and clean up all resources
   */
  public destroy(): void {
    // Restore console.error
    if (this.consoleCapture) {
      this.consoleCapture.restore();
      this.consoleCapture = null;
    }

    // Remove event listeners
    window.removeEventListener("resize", this.boundResize);
    document.removeEventListener("keydown", this.boundKeyDown);

    // Clean up highlights
    removeAllByClass("qaid-highlight");
    document.body.classList.remove("qaid-targeting", "qaid-type-up");

    // Remove DOM elements
    if (this.container) {
      if (this.isUserProvidedContainer) {
        // Just clear the contents and remove our classes
        this.container.innerHTML = "";
        this.container.classList.remove("qaid-widget", `qaid-${this.config.position}`);
      } else {
        this.container.remove();
      }
      this.container = null;
    }
    this.removeTargetingOverlay();
    this.hideSelectedMarker();
    if (this.modalContainer) {
      this.modalContainer.remove();
      this.modalContainer = null;
    }
    if (this.backdrop) {
      this.backdrop.remove();
      this.backdrop = null;
    }
    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }

    // Remove styles
    removeStyles();
  }
}
