import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

// Hoisted mocks for screenshot modules so we can verify which one is called
const screenshotMocks = vi.hoisted(() => ({
  captureScreenshot: vi.fn(async () => "data:image/webp;base64,permission"),
  captureDomScreenshot: vi.fn(async () => "data:image/webp;base64,dom"),
}));

vi.mock("./screenshot", () => ({
  captureScreenshot: screenshotMocks.captureScreenshot,
}));

vi.mock("./screenshot-dom", () => ({
  captureDomScreenshot: screenshotMocks.captureDomScreenshot,
}));

// The annotation editor is exercised in depth in annotate.test.ts; here we mock
// its entry point so the embed flow tests stay deterministic. Default: resolve
// null (user skipped) so the original screenshot flows through unchanged.
const annotateMock = vi.hoisted(() => ({
  openAnnotationEditor: vi.fn(async (): Promise<string | null> => null),
}));

vi.mock("./annotate", () => ({
  openAnnotationEditor: annotateMock.openAnnotationEditor,
}));

import {
  QaidFeedback,
  isHiddenByUser,
  setHiddenByUser,
  getOrCreateVisitorId,
} from "./embed";
import { _resetStylesState } from "./styles";
import { _setQuestsImporter, type LaunchedQuestConfig } from "./quest-launcher";

function getShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed]");
  return host!.shadowRoot!;
}

function getOverlayShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed-overlay]");
  return host!.shadowRoot!;
}

/** Targeting loads lazily now — wait for its overlay after a thumb click. */
async function waitForTargeting(): Promise<void> {
  await vi.waitFor(() => {
    const host = document.querySelector("[data-qaid-embed-overlay]");
    expect(host).not.toBeNull();
    // Non-null assertions (not optional chaining) so a missing overlay throws
    // and vi.waitFor keeps polling — `expect(undefined).not.toBeNull()` passes.
    expect(host!.shadowRoot!.querySelector(".qaid-targeting-overlay")).not.toBeNull();
  });
}

describe("QaidFeedback", () => {
  let embed: QaidFeedback;

  beforeEach(() => {
    // Clear any existing embed elements
    document.body.innerHTML = "";
    // Reset styles module state
    _resetStylesState();
  });

  afterEach(() => {
    if (embed) {
      embed.destroy();
    }
    // Clean up any remaining elements
    document.body.innerHTML = "";
    _resetStylesState();
  });

  describe("initialization", () => {
    it("should create shadow host in document body", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const host = document.querySelector("[data-qaid-embed]");
      expect(host).not.toBeNull();
      expect(host!.shadowRoot).not.toBeNull();
    });

    it("should create buttons container inside shadow root", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container).not.toBeNull();
    });

    it("should inject light DOM styles into document head", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const style = document.getElementById("qaid-styles");
      expect(style).not.toBeNull();
      // Light DOM styles should only contain cursor override, NOT button/buttons CSS
      expect(style?.textContent).toContain("qaid-targeting");
      expect(style?.textContent).not.toContain(".qaid-buttons");
      expect(style?.textContent).not.toContain(".qaid-btn");
    });

    it("should create thumbs up and thumbs down buttons inside shadow root", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector(".qaid-btn-up");
      const downBtn = shadow.querySelector(".qaid-btn-down");
      expect(upBtn).not.toBeNull();
      expect(downBtn).not.toBeNull();
    });

    it("should give the icon-only buttons accessible names (WCAG 4.1.2)", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback", captureVideo: true });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector(".qaid-btn-up");
      const downBtn = shadow.querySelector(".qaid-btn-down");
      expect(upBtn?.getAttribute("aria-label")).toBe("Send positive feedback");
      expect(downBtn?.getAttribute("aria-label")).toBe("Send negative feedback");
      // No icon button should announce as a bare "button".
      shadow.querySelectorAll("button").forEach((btn) => {
        expect((btn.getAttribute("aria-label") || btn.textContent || "").trim().length).toBeGreaterThan(0);
      });
    });

    it("should use custom accessible names from config.text", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        text: { positiveLabel: "Yes", negativeLabel: "No" },
      });

      const shadow = getShadowRoot();
      expect(shadow.querySelector(".qaid-btn-up")?.getAttribute("aria-label")).toBe("Yes");
      expect(shadow.querySelector(".qaid-btn-down")?.getAttribute("aria-label")).toBe("No");
    });

    it("should apply default position (bottom-right)", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-bottom-right")).toBe(true);
    });

    it("should apply custom position", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        position: "bottom-left",
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-bottom-left")).toBe(true);
    });

    it("should apply custom z-index to shadow host", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        zIndex: 100,
      });

      const host = document.querySelector<HTMLElement>("[data-qaid-embed]");
      expect(host?.style.zIndex).toBe("100");
    });

    it("should place buttons in user-provided container", () => {
      const container = document.createElement("div");
      container.id = "my-container";
      document.body.appendChild(container);

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        container: "#my-container",
      });

      // Shadow host should be inside the user's container
      const host = container.querySelector("[data-qaid-embed]");
      expect(host).not.toBeNull();

      // Shadow host should use static positioning for user containers
      const hostEl = host as HTMLElement;
      expect(hostEl.style.position).toBe("static");
      expect(hostEl.style.display).toBe("contents");
    });

    it("should apply vertical direction class", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        direction: "vertical",
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-vertical")).toBe(true);
    });

    it("should apply incognito class", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        incognito: true,
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(true);
    });

    it("should apply incognito class in user-provided container", () => {
      const userContainer = document.createElement("div");
      userContainer.id = "my-box";
      document.body.appendChild(userContainer);

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        container: "#my-box",
        incognito: true,
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(true);
    });

    it("should apply custom buttonClass to buttons", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        buttonClass: "my-custom-btn",
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector(".qaid-btn-up");
      expect(upBtn?.classList.contains("my-custom-btn")).toBe(true);
      expect(upBtn?.classList.contains("qaid-btn-structural")).toBe(true);
    });

    it("should use custom positive and negative icons", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        positiveIcon: '<svg class="pos-icon"></svg>',
        negativeIcon: '<svg class="neg-icon"></svg>',
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      expect(upBtn?.innerHTML).toContain("pos-icon");
      expect(downBtn?.innerHTML).toContain("neg-icon");
    });

    it("should hide thumbs buttons when hideThumbs is true", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        hideThumbs: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector(".qaid-btn-up");
      const downBtn = shadow.querySelector(".qaid-btn-down");
      expect(upBtn).toBeNull();
      expect(downBtn).toBeNull();
    });

    it("should create tooltip element", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const tooltip = shadow.querySelector(".qaid-tooltip-text");
      expect(tooltip).not.toBeNull();
      expect(tooltip?.textContent).toBe("Feedback for us?");
    });

    it("should use custom tooltip text", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        text: { tooltip: "Leave feedback" },
      });

      const shadow = getShadowRoot();
      const tooltip = shadow.querySelector(".qaid-tooltip-text");
      expect(tooltip?.textContent).toBe("Leave feedback");
    });

    it("should position buttons with top-left position", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        position: "top-left",
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons");
      expect(container?.classList.contains("qaid-top-left")).toBe(true);
      // For auto-container, should set left and top
      expect(container?.style.left).toBe("16px");
      expect(container?.style.top).toBe("16px");
    });

    it("should position buttons with top-right position", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        position: "top-right",
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons");
      expect(container?.classList.contains("qaid-top-right")).toBe(true);
      expect(container?.style.right).toBe("16px");
      expect(container?.style.top).toBe("16px");
    });

    it("should apply custom offset", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        position: "bottom-right",
        offset: { x: 32, y: 48 },
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons");
      expect(container?.style.right).toBe("32px");
      expect(container?.style.bottom).toBe("48px");
    });

    it("should generate a visitor ID", () => {
      // Clear any existing visitor ID
      localStorage.removeItem("qaid_visitor_id");

      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      // Verify a visitor ID was generated and stored in localStorage
      const storedId = localStorage.getItem("qaid_visitor_id");
      expect(storedId).not.toBeNull();
      expect(typeof storedId).toBe("string");
      expect(storedId!.length).toBeGreaterThan(0);

      // UUID format: 8-4-4-4-12 hex characters
      expect(storedId).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );

      localStorage.removeItem("qaid_visitor_id");
    });
  });

  describe("targeting mode", () => {
    it("should enter targeting mode when thumbs up is clicked", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(true);
    });

    it("should enter targeting mode when thumbs down is clicked", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      downBtn?.click();
      await waitForTargeting();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });

    it("should create targeting overlay when entering targeting mode", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      const overlayShadow = getOverlayShadowRoot();
      const overlay = overlayShadow.querySelector(".qaid-targeting-overlay");
      const vignette = overlayShadow.querySelector(".qaid-vignette");
      const scope = overlayShadow.querySelector(".qaid-scope");

      expect(overlay).not.toBeNull();
      expect(vignette).not.toBeNull();
      expect(scope).not.toBeNull();
    });

    it("should exit targeting mode when Escape is pressed", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);

      const overlayShadow = getOverlayShadowRoot();

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(event);

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      // Shadow host is still in the DOM, but overlay inside overlay host should be gone
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).toBeNull();
    });

    it("routes a keyboard-activated thumb through keyboard targeting and cancels on Escape", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons")!;
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")!;

      // Enter/Space keydown flags the activation as keyboard-driven.
      container.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      // The synthetic click that follows is routed through the keyboard flow,
      // which (unlike the pointer flow) never adds the cursor-hiding class.
      upBtn.click();
      await waitForTargeting();

      const overlayShadow = getOverlayShadowRoot();
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      expect(
        overlayShadow.querySelector(".qaid-targeting-overlay")
      ).not.toBeNull();

      // Escape drives the controller's cancel -> onCancel -> cancelTargeting.
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).toBeNull();
    });

    it("clears keyboard activation on pointer input so the thumb uses pointer targeting", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons")!;
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")!;

      // Flag keyboard activation, then pointer input should reset it.
      container.dispatchEvent(
        new KeyboardEvent("keydown", { key: " ", bubbles: true })
      );
      container.dispatchEvent(new Event("pointerdown", { bubbles: true }));
      container.dispatchEvent(new Event("mousedown", { bubbles: true }));

      upBtn.click();
      await waitForTargeting();

      // Pointer path adds the qaid-targeting body class; keyboard path never does.
      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
    });

    it("should set targeting CSS variables on body", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(0, 255, 0)", negative: "rgb(255, 0, 0)" },
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      expect(document.body.style.getPropertyValue("--qaid-positive")).toBe("rgb(0, 255, 0)");
      expect(document.body.style.getPropertyValue("--qaid-negative")).toBe("rgb(255, 0, 0)");
    });

    it("should create overlay with pointer-events none for scroll passthrough", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      const overlayShadow = getOverlayShadowRoot();
      const captureLayer = overlayShadow.querySelector<HTMLElement>(".qaid-capture-layer");
      expect(captureLayer).not.toBeNull();
    });

    it("should handle mousemove events on document during targeting", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      const overlayShadow = getOverlayShadowRoot();
      const crosshairH = overlayShadow.querySelector<HTMLElement>(".qaid-crosshair-h");
      const crosshairV = overlayShadow.querySelector<HTMLElement>(".qaid-crosshair-v");
      const scope = overlayShadow.querySelector<HTMLElement>(".qaid-scope");

      // Dispatch mousemove on document (listeners are on document now)
      const moveEvent = new MouseEvent("mousemove", {
        clientX: 100,
        clientY: 200,
        bubbles: true,
      });
      document.dispatchEvent(moveEvent);

      expect(crosshairH?.style.top).toBe("200px");
      expect(crosshairV?.style.left).toBe("100px");
      expect(scope?.style.left).toBe("100px");
      expect(scope?.style.top).toBe("200px");
    });
  });

  describe("skipTargeting mode", () => {
    it("should skip targeting and submit directly when skipTargeting is true", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 42 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Should NOT enter targeting mode
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);

      // Wait for async submitFeedback
      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // Should have submitted with feedbackType "up" and null element info
      const callBody = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(callBody.feedbackType).toBe("up");
      expect(callBody.elementSelector).toBeNull();
      expect(callBody.elementText).toBeNull();
    });

    it("should show modal after skipTargeting submission", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 42 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      downBtn?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const modal = overlayShadow.querySelector(".qaid-modal-container");
        expect(modal).not.toBeNull();
      });
    });
  });

  describe("modal", () => {
    async function openModalViaSkipTargeting(
      type: "up" | "down" = "up",
      config: Record<string, unknown> = {}
    ) {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 99 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        ...config,
      });

      const shadow = getShadowRoot();
      const btn = shadow.querySelector<HTMLButtonElement>(
        type === "up" ? ".qaid-btn-up" : ".qaid-btn-down"
      );
      btn?.click();

      // Wait for modal to appear
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const modal = overlayShadow.querySelector(".qaid-modal-container, .qaid-bottom-sheet");
        expect(modal).not.toBeNull();
      });

      return fetchMock;
    }

    it("should show positioned modal on desktop", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const modal = overlayShadow.querySelector(".qaid-modal-container");
      expect(modal).not.toBeNull();
      // Should have a modal box and arrow
      expect(modal?.querySelector(".qaid-modal-box")).not.toBeNull();
      expect(modal?.querySelector(".qaid-modal-arrow")).not.toBeNull();
    });

    it("should show modal with correct content", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const title = overlayShadow.querySelector(".qaid-modal-title");
      const subtitle = overlayShadow.querySelector(".qaid-modal-subtitle");
      const textarea = overlayShadow.querySelector<HTMLTextAreaElement>(".qaid-textarea");
      const submitBtn = overlayShadow.querySelector(".qaid-btn-submit");

      expect(title?.textContent).toBe("Thank you for your feedback!");
      expect(subtitle?.textContent).toContain("Would you like to add a message");
      expect(textarea).not.toBeNull();
      expect(submitBtn?.textContent).toBe("Skip");
    });

    it("should show custom text in modal", async () => {
      await openModalViaSkipTargeting("up", {
        text: {
          modalTitle: "Custom Title",
          modalSubtitle: "Custom Subtitle",
          placeholder: "Custom placeholder",
          submitButton: "Send It",
          skipButton: "Nope",
        },
      });

      const overlayShadow = getOverlayShadowRoot();
      const title = overlayShadow.querySelector(".qaid-modal-title");
      const subtitle = overlayShadow.querySelector(".qaid-modal-subtitle");
      const submitBtn = overlayShadow.querySelector(".qaid-btn-submit");

      expect(title?.textContent).toBe("Custom Title");
      expect(subtitle?.textContent).toBe("Custom Subtitle");
      expect(submitBtn?.textContent).toBe("Nope");
    });

    it("should create backdrop", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const backdrop = overlayShadow.querySelector(".qaid-backdrop");
      expect(backdrop).not.toBeNull();
    });

    it("should close modal when backdrop is clicked", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const backdrop = overlayShadow.querySelector<HTMLElement>(".qaid-backdrop");
      backdrop?.click();

      const modal = overlayShadow.querySelector(".qaid-modal-container");
      expect(modal).toBeNull();
    });

    it("should close modal when Escape is pressed", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      expect(overlayShadow.querySelector(".qaid-modal-container")).not.toBeNull();

      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      expect(overlayShadow.querySelector(".qaid-modal-container")).toBeNull();
    });

    it("should change submit button text when textarea has content", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const textarea = overlayShadow.querySelector<HTMLTextAreaElement>(".qaid-textarea");
      const submitBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-btn-submit");

      expect(submitBtn?.textContent).toBe("Skip");

      // Type something
      if (textarea) {
        textarea.value = "Some feedback";
        textarea.dispatchEvent(new Event("input"));
      }

      expect(submitBtn?.textContent).toBe("Submit");

      // Clear it
      if (textarea) {
        textarea.value = "";
        textarea.dispatchEvent(new Event("input"));
      }

      expect(submitBtn?.textContent).toBe("Skip");
    });

    it("should submit message when submit button is clicked", async () => {
      const fetchMock = await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const textarea = overlayShadow.querySelector<HTMLTextAreaElement>(".qaid-textarea");
      const submitBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-btn-submit");

      if (textarea) {
        textarea.value = "Great feature!";
      }

      submitBtn?.click();

      // Should have called PATCH with the message
      await vi.waitFor(() => {
        const patchCalls = fetchMock.mock.calls.filter(
          (c: unknown[]) => c[1] && (c[1] as RequestInit).method === "PATCH"
        );
        expect(patchCalls.length).toBeGreaterThan(0);
        const lastPatch = patchCalls[patchCalls.length - 1];
        const body = JSON.parse((lastPatch[1] as RequestInit).body as string);
        expect(body.message).toBe("Great feature!");
      });
    });

    it("should submit null message when skipping", async () => {
      const fetchMock = await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const submitBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-btn-submit");

      submitBtn?.click();

      // Should have called PATCH with null message
      await vi.waitFor(() => {
        const patchCalls = fetchMock.mock.calls.filter(
          (c: unknown[]) => c[1] && (c[1] as RequestInit).method === "PATCH"
        );
        expect(patchCalls.length).toBeGreaterThan(0);
      });
    });

    it("should toggle feedback type when toggle button is clicked", async () => {
      const fetchMock = await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const typeToggle = overlayShadow.querySelector<HTMLButtonElement>(".qaid-type-toggle");
      expect(typeToggle).not.toBeNull();

      // Initially should be "up" type
      expect(typeToggle?.classList.contains("qaid-type-up")).toBe(true);

      // Click to toggle
      typeToggle?.click();

      // Should switch to "down"
      expect(typeToggle?.classList.contains("qaid-type-down")).toBe(true);
      expect(typeToggle?.classList.contains("qaid-type-up")).toBe(false);

      // Should PATCH the server
      await vi.waitFor(() => {
        const patchCalls = fetchMock.mock.calls.filter(
          (c: unknown[]) => c[1] && (c[1] as RequestInit).method === "PATCH"
        );
        expect(patchCalls.length).toBeGreaterThan(0);
        const body = JSON.parse((patchCalls[0][1] as RequestInit).body as string);
        expect(body.feedbackType).toBe("down");
      });
    });

    it("should toggle feedback type with custom buttonClass", async () => {
      const fetchMock = await openModalViaSkipTargeting("up", {
        buttonClass: "my-btn",
      });

      const overlayShadow = getOverlayShadowRoot();
      const typeToggle = overlayShadow.querySelector<HTMLButtonElement>(".qaid-type-toggle");
      expect(typeToggle).not.toBeNull();

      // With custom buttonClass, uses qaid-btn-up/down classes
      expect(typeToggle?.classList.contains("qaid-btn-up")).toBe(true);

      // Click to toggle
      typeToggle?.click();

      expect(typeToggle?.classList.contains("qaid-btn-down")).toBe(true);
      expect(typeToggle?.classList.contains("qaid-btn-up")).toBe(false);
    });

    it("should finalize feedback when modal is closed without submitting", async () => {
      const fetchMock = await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const backdrop = overlayShadow.querySelector<HTMLElement>(".qaid-backdrop");

      // Close via backdrop (without clicking submit)
      backdrop?.click();

      // Should have sent a PATCH with message: null to finalize
      await vi.waitFor(() => {
        const patchCalls = fetchMock.mock.calls.filter(
          (c: unknown[]) => c[1] && (c[1] as RequestInit).method === "PATCH"
        );
        expect(patchCalls.length).toBeGreaterThan(0);
      });
    });

    it("should reset state after modal is closed", async () => {
      await openModalViaSkipTargeting("up");

      const overlayShadow = getOverlayShadowRoot();
      const backdrop = overlayShadow.querySelector<HTMLElement>(".qaid-backdrop");
      backdrop?.click();

      // Modal and backdrop should be gone
      expect(overlayShadow.querySelector(".qaid-modal-container")).toBeNull();
      expect(overlayShadow.querySelector(".qaid-backdrop")).toBeNull();

      // Overlay host should have pointer events disabled
      const overlayHost = document.querySelector<HTMLElement>("[data-qaid-embed-overlay]");
      expect(overlayHost?.style.pointerEvents).toBe("none");
    });

    it("should handle failed API response gracefully", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: "Bad request" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Modal should still show even on API failure
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const modal = overlayShadow.querySelector(".qaid-modal-container, .qaid-bottom-sheet");
        expect(modal).not.toBeNull();
      });
    });

    it("should handle fetch exception gracefully", async () => {
      const fetchMock = vi.fn().mockRejectedValue(new Error("Network error"));
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Modal should still show even on network error
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const modal = overlayShadow.querySelector(".qaid-modal-container, .qaid-bottom-sheet");
        expect(modal).not.toBeNull();
      });

      errorSpy.mockRestore();
    });

    it("should handle submitMessage when feedbackId is null", async () => {
      // Simulate API failure so feedbackId stays null
      const fetchMock = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-modal-container, .qaid-bottom-sheet")).not.toBeNull();
      });

      // Click submit - should not throw even with null feedbackId
      const overlayShadow = getOverlayShadowRoot();
      const submitBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-btn-submit");
      submitBtn?.click();

      // Modal should close
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-modal-container")).toBeNull();
      });
    });
  });

  describe("feedback payload", () => {
    it("should include visitorId in payload", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.visitorId).toBeDefined();
      expect(typeof body.visitorId).toBe("string");
    });

    it("should include page info in payload", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        apiKey: "test-key-123",
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.pageUrl).toBeDefined();
      expect(body.screenWidth).toBeDefined();
      expect(body.screenHeight).toBeDefined();
      expect(body.apiKey).toBe("test-key-123");
      expect(body.userAgent).toBeDefined();
    });

    it("should not include elementBounds when no element is targeted", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.elementBounds).toBeNull();
    });
  });

  describe("destroy", () => {
    it("should remove shadow host from document", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();

      // Start targeting to trigger overlay host creation
      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();
      expect(document.querySelector("[data-qaid-embed-overlay]")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector("[data-qaid-embed]")).toBeNull();
      expect(document.querySelector("[data-qaid-embed-overlay]")).toBeNull();
    });

    it("should remove injected styles", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed.destroy();
      expect(document.getElementById("qaid-styles")).toBeNull();
    });

    it("should remove targeting overlay if active", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
      await waitForTargeting();

      const overlayShadow = getOverlayShadowRoot();
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).not.toBeNull();

      embed.destroy();
      expect(document.querySelector("[data-qaid-embed]")).toBeNull();
      expect(document.querySelector("[data-qaid-embed-overlay]")).toBeNull();
    });

    it("should remove body classes", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      embed.destroy();

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });
  });

  describe("console error capture", () => {
    it("should capture console errors", () => {
      const originalError = console.error;
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      // The embed wraps console.error
      console.error("Test error message");

      // We can verify the wrapper was installed by checking console.error changed
      expect(console.error).not.toBe(originalError);

      embed.destroy();

      // After destroy, console.error should be restored
      expect(console.error).toBe(originalError);
    });
  });

  describe("multi-instance CSS scoping", () => {
    it("should give each instance its own CSS variable values", () => {
      const embed1 = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(0, 200, 83)" },
      });
      const embed2 = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(255, 100, 0)" },
      });

      // Each instance has its own shadow host
      const hosts = document.querySelectorAll("[data-qaid-embed]");
      expect(hosts).toHaveLength(2);

      // CSS vars are on the buttons container inside each shadow root
      const buttons1 = hosts[0].shadowRoot!.querySelector<HTMLElement>(".qaid-buttons");
      const buttons2 = hosts[1].shadowRoot!.querySelector<HTMLElement>(".qaid-buttons");

      const val1 = buttons1!.style.getPropertyValue("--qaid-positive");
      const val2 = buttons2!.style.getPropertyValue("--qaid-positive");

      expect(val1).toBe("rgb(0, 200, 83)");
      expect(val2).toBe("rgb(255, 100, 0)");

      // Shared light DOM style element should still exist
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed1.destroy();
      // Style should remain because embed2 is still alive
      expect(document.getElementById("qaid-styles")).not.toBeNull();

      embed2.destroy();
      // Now both gone, style should be removed
      expect(document.getElementById("qaid-styles")).toBeNull();
    });
  });

  describe("css config option", () => {
    it("should inject custom CSS into shadow root when css option is provided", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        css: ".custom { color: red; }",
      });

      const shadow = getShadowRoot();
      const styleElements = shadow.querySelectorAll("style");

      // Should have at least 2 style elements: base styles + custom CSS
      expect(styleElements.length).toBeGreaterThanOrEqual(2);

      // The second style element should contain the custom CSS
      const customStyle = styleElements[1];
      expect(customStyle.textContent).toBe(".custom { color: red; }");
    });

    it("should not inject extra style element when css option is not provided", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const styleElements = shadow.querySelectorAll("style");

      // Should have exactly 1 style element (base styles only)
      expect(styleElements).toHaveLength(1);
    });

    it("should inject custom CSS into overlay shadow root too", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        css: ".theme-style { color: blue; }",
        skipTargeting: true,
      });

      // Trigger overlay creation
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow).not.toBeNull();
      });

      const overlayShadow = getOverlayShadowRoot();
      const styles = overlayShadow.querySelectorAll("style");
      const themeStyle = Array.from(styles).find(
        (s) => s.textContent?.includes("theme-style")
      );
      expect(themeStyle).not.toBeNull();
    });
  });

  describe("API submission", () => {
    it("should call fetch when submitting feedback", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 123 }),
      });
      global.fetch = fetchMock;

      // Use skipTargeting to bypass elementFromPoint (not available in happy-dom)
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      // Verify fetch was called with correct endpoint and method
      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const [url, options] = fetchMock.mock.calls[0];
      expect(url).toBe("/api/feedback");
      expect(options.method).toBe("POST");
      expect(options.headers["Content-Type"]).toBe("application/json");

      const body = JSON.parse(options.body);
      expect(body.feedbackType).toBe("up");
      expect(body.pageUrl).toBeDefined();
    });
  });

  describe("resize handling", () => {
    it("should update mobile detection on window resize", async () => {
      // Start with desktop width
      Object.defineProperty(window, "innerWidth", {
        value: 1024,
        writable: true,
        configurable: true,
      });

      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      // Click thumb to open modal - should show desktop modal
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-modal-container")).not.toBeNull();
      });

      // Close modal
      const overlayShadow = getOverlayShadowRoot();
      overlayShadow.querySelector<HTMLElement>(".qaid-backdrop")?.click();

      // Now resize to mobile width
      Object.defineProperty(window, "innerWidth", {
        value: 400,
        writable: true,
        configurable: true,
      });
      window.dispatchEvent(new Event("resize"));

      // Click thumb again - should now show bottom sheet (mobile)
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-down")?.click();

      await vi.waitFor(() => {
        const overlayShadow2 = getOverlayShadowRoot();
        const sheet = overlayShadow2.querySelector(".qaid-bottom-sheet");
        expect(sheet).not.toBeNull();
      });

      // Restore viewport
      Object.defineProperty(window, "innerWidth", {
        value: 1024,
        writable: true,
        configurable: true,
      });
    });
  });

  describe("tooltip", () => {
    it("should show tooltip on button hover", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      const tooltip = shadow.querySelector<HTMLElement>(".qaid-tooltip-text");

      expect(tooltip).not.toBeNull();

      // Simulate mouseenter
      upBtn?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));

      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(true);
    });

    it("should hide tooltip on mouse leave", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      const tooltip = shadow.querySelector<HTMLElement>(".qaid-tooltip-text");

      // Show tooltip
      upBtn?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(true);

      // Hide tooltip
      upBtn?.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(false);
    });

  });

  describe("bottom sheet (mobile)", () => {
    it("should show bottom sheet on mobile viewport", async () => {
      // Set mobile viewport width
      Object.defineProperty(window, "innerWidth", {
        value: 400,
        writable: true,
        configurable: true,
      });

      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const sheet = overlayShadow.querySelector(".qaid-bottom-sheet");
        expect(sheet).not.toBeNull();
      });

      // Restore viewport
      Object.defineProperty(window, "innerWidth", {
        value: 1024,
        writable: true,
        configurable: true,
      });
    });
  });

  describe("visitor ID", () => {
    it("should handle localStorage unavailability gracefully", async () => {
      // Mock localStorage to throw on both get and set
      const origGetItem = localStorage.getItem;
      const origSetItem = localStorage.setItem;
      localStorage.getItem = () => {
        throw new Error("Access denied");
      };
      localStorage.setItem = () => {
        throw new Error("Access denied");
      };

      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      // Should not throw - falls back to crypto.randomUUID
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      // Trigger feedback submission to verify visitorId was generated
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      // A fallback visitor ID should still be a valid UUID
      expect(body.visitorId).toBeDefined();
      expect(typeof body.visitorId).toBe("string");
      expect(body.visitorId).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );

      localStorage.getItem = origGetItem;
      localStorage.setItem = origSetItem;
    });

    it("should reuse existing visitor ID from localStorage", async () => {
      localStorage.setItem("qaid_visitor_id", "existing-visitor-id");

      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      // Trigger feedback to capture the visitorId in the payload
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.visitorId).toBe("existing-visitor-id");

      // localStorage value should not have been overwritten
      expect(localStorage.getItem("qaid_visitor_id")).toBe("existing-visitor-id");

      localStorage.removeItem("qaid_visitor_id");
    });
  });

  describe("video recording", () => {
    let mockStream: { getTracks: () => { stop: ReturnType<typeof vi.fn> }[]; getVideoTracks: () => { stop: ReturnType<typeof vi.fn>; addEventListener: ReturnType<typeof vi.fn>; kind: string }[] };
    let mockMediaRecorder: {
      state: string;
      ondataavailable: ((e: { data: Blob }) => void) | null;
      onstop: (() => void) | null;
      onerror: (() => void) | null;
      start: ReturnType<typeof vi.fn>;
      stop: ReturnType<typeof vi.fn>;
    };

    beforeEach(() => {
      const mockTrack = {
        stop: vi.fn(),
        addEventListener: vi.fn(),
        kind: "video",
      };

      mockStream = {
        getTracks: () => [mockTrack],
        getVideoTracks: () => [mockTrack],
      };

      mockMediaRecorder = {
        state: "inactive",
        ondataavailable: null,
        onstop: null,
        onerror: null,
        start: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "recording";
          // Simulate a data chunk after a short delay
          setTimeout(() => {
            if (this.ondataavailable) {
              this.ondataavailable({ data: new Blob(["video-data"], { type: "video/webm" }) });
            }
          }, 10);
        }),
        stop: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "inactive";
          setTimeout(() => {
            if (this.onstop) {
              this.onstop();
            }
          }, 10);
        }),
      };

      // Mock MediaRecorder
      (globalThis as Record<string, unknown>).MediaRecorder = class {
        static isTypeSupported = () => true;
        state = "inactive";
        ondataavailable: ((e: { data: Blob }) => void) | null = null;
        onstop: (() => void) | null = null;
        onerror: (() => void) | null = null;

        constructor() {
          // Wire up to our mock
          Object.assign(this, {
            start: mockMediaRecorder.start.bind(this),
            stop: mockMediaRecorder.stop.bind(this),
          });
          // Link callbacks back
          const self = this;
          mockMediaRecorder.ondataavailable = null;
          mockMediaRecorder.onstop = null;
          // Use property proxy
          Object.defineProperty(mockMediaRecorder, "ondataavailable", {
            get: () => self.ondataavailable,
            set: (v) => { self.ondataavailable = v; },
            configurable: true,
          });
          Object.defineProperty(mockMediaRecorder, "onstop", {
            get: () => self.onstop,
            set: (v) => { self.onstop = v; },
            configurable: true,
          });
        }

        start(timeslice?: number) {
          mockMediaRecorder.start.call(this, timeslice);
        }

        stop() {
          mockMediaRecorder.stop.call(this);
        }
      };

      Object.defineProperty(navigator, "mediaDevices", {
        value: {
          getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
        },
        writable: true,
        configurable: true,
      });
    });

    it("should show record button when captureVideo is true", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector(".qaid-btn-record");
      expect(recordBtn).not.toBeNull();
    });

    it("should not show record button when captureVideo is false", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: false,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector(".qaid-btn-record");
      expect(recordBtn).toBeNull();
    });

    it("should start recording when record button is clicked", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      recordBtn?.click();

      // Wait for recording to start
      await vi.waitFor(() => {
        expect(navigator.mediaDevices.getDisplayMedia).toHaveBeenCalled();
      });

      // Recording indicator should appear in overlay
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const indicator = overlayShadow.querySelector(".qaid-recording-indicator");
        expect(indicator).not.toBeNull();
      });

      // Should have a timer and stop button
      const overlayShadow = getOverlayShadowRoot();
      const timer = overlayShadow.querySelector(".qaid-recording-time");
      const stopBtn = overlayShadow.querySelector(".qaid-recording-stop");
      expect(timer).not.toBeNull();
      expect(stopBtn).not.toBeNull();
      expect(timer?.textContent).toBe("0:15"); // Default max duration
    });

    it("should disable thumb buttons while recording", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      recordBtn?.click();

      await vi.waitFor(() => {
        const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
        expect(upBtn?.disabled).toBe(true);
      });
    });

    it("should stop recording and show preview when stop is clicked", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      recordBtn?.click();

      // Wait for recording indicator to appear
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-recording-indicator")).not.toBeNull();
      });

      // Click stop
      const overlayShadow = getOverlayShadowRoot();
      const stopBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-recording-stop");
      stopBtn?.click();

      // Preview should appear
      await vi.waitFor(() => {
        const preview = overlayShadow.querySelector(".qaid-video-preview");
        expect(preview).not.toBeNull();
      });

      // Preview should have send, cancel, re-record buttons
      const sendBtn = overlayShadow.querySelector(".qaid-video-btn-send");
      const cancelBtn = overlayShadow.querySelector(".qaid-video-btn-cancel");
      const rerecordBtn = overlayShadow.querySelector(".qaid-video-btn-rerecord");
      expect(sendBtn).not.toBeNull();
      expect(cancelBtn).not.toBeNull();
      expect(rerecordBtn).not.toBeNull();
    });

    it("should stop recording via Escape key", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      recordBtn?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-recording-indicator")).not.toBeNull();
      });

      // Press Escape
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      // Should show preview after stopping
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const preview = overlayShadow.querySelector(".qaid-video-preview");
        expect(preview).not.toBeNull();
      });
    });

    it("should stop recording and show preview via Escape key", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-recording-indicator")).not.toBeNull();
      });

      // Press Escape to stop recording
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      // Should show preview after stopping (the recorder produces a blob)
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        const preview = overlayShadow.querySelector(".qaid-video-preview");
        expect(preview).not.toBeNull();
      });

      // Verify preview has expected buttons
      const overlayShadow = getOverlayShadowRoot();
      expect(overlayShadow.querySelector(".qaid-video-btn-cancel")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-video-btn-rerecord")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-video-btn-send")).not.toBeNull();

      // Verify preview has title and video element
      const previewTitle = overlayShadow.querySelector(".qaid-video-preview-box h3");
      expect(previewTitle?.textContent).toBe("Review your recording");
    });

    it("should update recording timer on tick", async () => {
      vi.useFakeTimers();

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
        videoOptions: { maxDuration: 10 },
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();

      // Advance time to let the start() Promise resolve
      await vi.advanceTimersByTimeAsync(100);

      const overlayShadow = getOverlayShadowRoot();
      const timer = overlayShadow.querySelector<HTMLSpanElement>(".qaid-recording-time");
      expect(timer).not.toBeNull();

      // Initial timer should show max duration
      expect(timer?.textContent).toBe("0:10");

      // Advance by 3 seconds to trigger ticks
      await vi.advanceTimersByTimeAsync(3000);

      // Timer should show remaining time (10 - 3 = 7)
      expect(timer?.textContent).toBe("0:07");

      vi.useRealTimers();
    });

    it("should show cancel, re-record, and send buttons in preview", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-recording-indicator")).not.toBeNull();
      });

      // Stop recording via Escape
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      const overlayShadow = getOverlayShadowRoot();
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();
      });

      // Verify all expected elements exist
      expect(overlayShadow.querySelector(".qaid-video-btn-cancel")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-video-btn-rerecord")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-video-btn-send")).not.toBeNull();
      expect(overlayShadow.querySelector("textarea")).not.toBeNull();
      expect(overlayShadow.querySelector("video")).not.toBeNull();
    });

    it("should handle recording start failure gracefully", async () => {
      // Make getDisplayMedia reject
      Object.defineProperty(navigator, "mediaDevices", {
        value: {
          getDisplayMedia: vi.fn().mockRejectedValue(new Error("Permission denied")),
        },
        writable: true,
        configurable: true,
      });

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      recordBtn?.click();

      // Should not throw, buttons should remain enabled
      await new Promise((r) => setTimeout(r, 50));

      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      expect(upBtn?.disabled).toBe(false);
    });

    it("should use custom record icon", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
        recordIcon: '<svg class="my-record-icon"></svg>',
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      expect(recordBtn?.innerHTML).toContain("my-record-icon");
    });

    it("should apply custom buttonClass to record button", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
        buttonClass: "my-custom-btn",
      });

      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-record");
      expect(recordBtn?.classList.contains("my-custom-btn")).toBe(true);
      expect(recordBtn?.classList.contains("qaid-btn")).toBe(false);
    });
  });

  describe("video feedback submission", () => {
    let mockStream: { getTracks: () => { stop: ReturnType<typeof vi.fn> }[]; getVideoTracks: () => { stop: ReturnType<typeof vi.fn>; addEventListener: ReturnType<typeof vi.fn>; kind: string }[] };
    let mockMediaRecorder: {
      state: string;
      ondataavailable: ((e: { data: Blob }) => void) | null;
      onstop: (() => void) | null;
      onerror: (() => void) | null;
      start: ReturnType<typeof vi.fn>;
      stop: ReturnType<typeof vi.fn>;
    };
    let createObjectURLSpy: ReturnType<typeof vi.fn>;
    let revokeObjectURLSpy: ReturnType<typeof vi.fn>;

    beforeEach(() => {
      const mockTrack = {
        stop: vi.fn(),
        addEventListener: vi.fn(),
        kind: "video",
      };

      mockStream = {
        getTracks: () => [mockTrack],
        getVideoTracks: () => [mockTrack],
      };

      mockMediaRecorder = {
        state: "inactive",
        ondataavailable: null,
        onstop: null,
        onerror: null,
        start: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "recording";
          setTimeout(() => {
            if (this.ondataavailable) {
              this.ondataavailable({ data: new Blob(["video-data"], { type: "video/webm" }) });
            }
          }, 10);
        }),
        stop: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "inactive";
          setTimeout(() => {
            if (this.onstop) {
              this.onstop();
            }
          }, 10);
        }),
      };

      (globalThis as Record<string, unknown>).MediaRecorder = class {
        static isTypeSupported = () => true;
        state = "inactive";
        ondataavailable: ((e: { data: Blob }) => void) | null = null;
        onstop: (() => void) | null = null;
        onerror: (() => void) | null = null;

        constructor() {
          Object.assign(this, {
            start: mockMediaRecorder.start.bind(this),
            stop: mockMediaRecorder.stop.bind(this),
          });
          const self = this;
          mockMediaRecorder.ondataavailable = null;
          mockMediaRecorder.onstop = null;
          Object.defineProperty(mockMediaRecorder, "ondataavailable", {
            get: () => self.ondataavailable,
            set: (v) => { self.ondataavailable = v; },
            configurable: true,
          });
          Object.defineProperty(mockMediaRecorder, "onstop", {
            get: () => self.onstop,
            set: (v) => { self.onstop = v; },
            configurable: true,
          });
        }

        start(timeslice?: number) {
          mockMediaRecorder.start.call(this, timeslice);
        }

        stop() {
          mockMediaRecorder.stop.call(this);
        }
      };

      Object.defineProperty(navigator, "mediaDevices", {
        value: {
          getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
        },
        writable: true,
        configurable: true,
      });

      createObjectURLSpy = vi.fn().mockReturnValue("blob:mock-video-url");
      revokeObjectURLSpy = vi.fn();
      URL.createObjectURL = createObjectURLSpy;
      URL.revokeObjectURL = revokeObjectURLSpy;
    });

    async function openVideoPreview(config: Record<string, unknown> = {}): Promise<ShadowRoot> {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
        ...config,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();

      // Wait for recording indicator
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(overlayShadow.querySelector(".qaid-recording-indicator")).not.toBeNull();
      });

      // Stop recording via stop button
      const overlayShadow = getOverlayShadowRoot();
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-recording-stop")?.click();

      // Wait for preview to appear
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();
      });

      // The mock creates a race condition where both the stopCallback (onStop handler)
      // and the stopRecording() continuation both call showRecordingPreview(), resulting
      // in two preview elements. Remove the orphaned first one so tests see a clean state.
      const allPreviews = overlayShadow.querySelectorAll(".qaid-video-preview");
      if (allPreviews.length > 1) {
        // Remove all but the last one (which is this.videoPreview in the embed)
        for (let i = 0; i < allPreviews.length - 1; i++) {
          allPreviews[i].remove();
        }
      }

      return overlayShadow;
    }

    it("should remove video preview when cancel button is clicked", async () => {
      const overlayShadow = await openVideoPreview();

      // Video preview should exist
      expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();

      // Click cancel
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-video-btn-cancel")?.click();

      // Video preview should be removed
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();

      // Object URL should have been revoked
      expect(revokeObjectURLSpy).toHaveBeenCalledWith("blob:mock-video-url");

      // Buttons should be re-enabled
      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      expect(upBtn?.disabled).toBe(false);
    });

    it("should remove video preview when Escape is pressed", async () => {
      const overlayShadow = await openVideoPreview();

      expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();

      // Press Escape while preview is showing
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      // Video preview should be removed
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
      expect(revokeObjectURLSpy).toHaveBeenCalled();
    });

    it("should send FormData to correct endpoint when send button is clicked", async () => {
      let fetchResolve: ((v: unknown) => void) | null = null;
      const fetchResult = { ok: true, text: () => Promise.resolve("OK") };
      const fetchMock = vi.fn().mockImplementation(() => {
        return new Promise((resolve) => {
          fetchResolve = resolve;
        });
      });
      global.fetch = fetchMock;

      const overlayShadow = await openVideoPreview({ apiKey: "test-api-key" });

      // Type a message in the textarea
      const textarea = overlayShadow.querySelector<HTMLTextAreaElement>("textarea");
      if (textarea) {
        textarea.value = "Bug description here";
      }

      // Click send
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-video-btn-send")?.click();

      // Wait for fetch to be called
      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // Verify the request before resolving
      const videoCalls = fetchMock.mock.calls.filter(
        (c: unknown[]) => typeof c[0] === "string" && (c[0] as string).endsWith("/video")
      );
      expect(videoCalls.length).toBeGreaterThan(0);

      const [url, options] = videoCalls[0];
      expect(url).toBe("/api/feedback/video");
      expect(options.method).toBe("POST");
      expect(options.body).toBeInstanceOf(FormData);

      const formData = options.body as FormData;
      expect(formData.get("video")).not.toBeNull();
      expect(formData.get("pageUrl")).toBeDefined();
      expect(formData.get("visitorId")).toBeDefined();
      expect(formData.get("apiKey")).toBe("test-api-key");
      expect(formData.get("message")).toBe("Bug description here");

      // Now resolve the fetch and verify cleanup
      fetchResolve!(fetchResult);
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
      });
    });

    it("should handle fetch error response gracefully", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: false,
        text: () => Promise.resolve("Server error"),
      });
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const overlayShadow = await openVideoPreview();

      // Click send
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-video-btn-send")?.click();

      // Wait for the async submitVideoFeedback to complete
      await vi.waitFor(() => {
        expect(errorSpy).toHaveBeenCalledWith("Failed to submit video feedback:", "Server error");
      }, { timeout: 3000 });

      // Preview should be cleaned up after submission completes
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();

      errorSpy.mockRestore();
    });

    it("should handle network error gracefully", async () => {
      const fetchMock = vi.fn().mockRejectedValue(new Error("Network failure"));
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const overlayShadow = await openVideoPreview();

      // Click send
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-video-btn-send")?.click();

      // Wait for the async submitVideoFeedback to complete
      await vi.waitFor(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          "Failed to submit video feedback:",
          expect.any(Error)
        );
      }, { timeout: 3000 });

      // Preview should be cleaned up after submission completes
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();

      errorSpy.mockRestore();
    });

    it("should disable send button and show sending state during submission", async () => {
      // Use a fetch that we can control resolution timing
      let resolveFetch!: (value: unknown) => void;
      const fetchMock = vi.fn().mockImplementation(() => new Promise((resolve) => {
        resolveFetch = resolve;
      }));
      global.fetch = fetchMock;

      const overlayShadow = await openVideoPreview();

      // Click send
      const sendBtn = overlayShadow.querySelector<HTMLButtonElement>(".qaid-video-btn-send")!;
      sendBtn.click();

      // Wait for fetch to be called (button should be disabled while sending)
      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // Button should show "Sending..." and be disabled
      expect(sendBtn.textContent).toBe("Sending...");
      expect(sendBtn.disabled).toBe(true);

      // Resolve the fetch to clean up
      resolveFetch({ ok: true, text: () => Promise.resolve("OK") });

      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
      }, { timeout: 3000 });
    });
  });

  describe("dismiss button", () => {
    afterEach(() => {
      localStorage.removeItem("qaid_hide_feedback");
      localStorage.removeItem("qaid_hide_feedback_test-key");
    });

    it("should render a dismiss button inside buttons container", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const dismissBtn = shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn");
      expect(dismissBtn).not.toBeNull();
      expect(dismissBtn?.title).toBe("Hide Feedback");
      expect(dismissBtn?.getAttribute("aria-label")).toBe("Hide Feedback");
    });

    it("should fully hide the widget (qaid-dismissed) when clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-dismissed")).toBe(false);

      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();
      expect(container?.classList.contains("qaid-dismissed")).toBe(true);
      // It should NOT fall back to the hover-reveal incognito state
      expect(container?.classList.contains("qaid-incognito")).toBe(false);
    });

    it("should stay hidden after hovering once dismissed", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector<HTMLElement>(".qaid-buttons");
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();
      expect(container?.classList.contains("qaid-dismissed")).toBe(true);

      // Simulate a hover in-and-out; the widget must not come back.
      container?.dispatchEvent(new MouseEvent("mouseenter"));
      container?.dispatchEvent(new MouseEvent("mouseleave"));
      expect(container?.classList.contains("qaid-dismissed")).toBe(true);
      expect(container?.classList.contains("qaid-incognito")).toBe(false);
    });

    it("should persist dismiss preference to localStorage", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback", apiKey: "test-key" });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();

      expect(localStorage.getItem("qaid_hide_feedback_test-key")).toBe("1");
    });

    it("should restore dismissed state from localStorage on init (fully hidden)", () => {
      localStorage.setItem("qaid_hide_feedback_test-key", "1");

      embed = new QaidFeedback({ endpoint: "/api/feedback", apiKey: "test-key" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-dismissed")).toBe(true);
      expect(container?.classList.contains("qaid-incognito")).toBe(false);
    });

    it("should use generic key when no apiKey provided", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();

      expect(localStorage.getItem("qaid_hide_feedback")).toBe("1");
    });

    it("should clear incognito state and localStorage when a thumb is clicked in incognito mode", () => {
      localStorage.setItem("qaid_hide_feedback_test-key", "1");

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        apiKey: "test-key",
        incognito: true,
      });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(true);

      // Click a thumb button while incognito — brings the widget back.
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(container?.classList.contains("qaid-incognito")).toBe(false);
      expect(localStorage.getItem("qaid_hide_feedback_test-key")).toBeNull();
    });

    it("should handle localStorage unavailability gracefully", () => {
      const origSetItem = localStorage.setItem;
      const origGetItem = localStorage.getItem;
      localStorage.getItem = () => { throw new Error("Access denied"); };
      localStorage.setItem = () => { throw new Error("Access denied"); };

      // Should not throw during init
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      // Should not throw when clicking dismiss
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();

      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-dismissed")).toBe(true);

      localStorage.getItem = origGetItem;
      localStorage.setItem = origSetItem;
    });
  });

  describe("exported helpers", () => {
    afterEach(() => {
      localStorage.removeItem("qaid_visitor_id");
      localStorage.removeItem("qaid_hide_feedback");
      localStorage.removeItem("qaid_hide_feedback_my-key");
    });

    it("isHiddenByUser returns true when value is set", () => {
      localStorage.setItem("qaid_hide_feedback", "1");
      expect(isHiddenByUser()).toBe(true);
    });

    it("isHiddenByUser returns false when value is missing", () => {
      expect(isHiddenByUser()).toBe(false);
    });

    it("isHiddenByUser scopes by apiKey", () => {
      localStorage.setItem("qaid_hide_feedback_my-key", "1");
      expect(isHiddenByUser("my-key")).toBe(true);
      expect(isHiddenByUser("other-key")).toBe(false);
    });

    it("isHiddenByUser returns false when localStorage throws", () => {
      const orig = localStorage.getItem;
      Object.defineProperty(localStorage, "getItem", {
        value: () => {
          throw new Error("denied");
        },
        configurable: true,
        writable: true,
      });
      try {
        expect(isHiddenByUser()).toBe(false);
      } finally {
        Object.defineProperty(localStorage, "getItem", {
          value: orig,
          configurable: true,
          writable: true,
        });
      }
    });

    it("setHiddenByUser writes a value when hidden=true", () => {
      setHiddenByUser(undefined, true);
      expect(localStorage.getItem("qaid_hide_feedback")).toBe("1");
    });

    it("setHiddenByUser removes value when hidden=false", () => {
      localStorage.setItem("qaid_hide_feedback_my-key", "1");
      setHiddenByUser("my-key", false);
      expect(localStorage.getItem("qaid_hide_feedback_my-key")).toBeNull();
    });

    it("setHiddenByUser swallows localStorage errors", () => {
      const origSet = localStorage.setItem;
      const origRemove = localStorage.removeItem;
      Object.defineProperty(localStorage, "setItem", {
        value: () => {
          throw new Error("denied");
        },
        configurable: true,
        writable: true,
      });
      Object.defineProperty(localStorage, "removeItem", {
        value: () => {
          throw new Error("denied");
        },
        configurable: true,
        writable: true,
      });
      try {
        // Should not throw on set or remove paths
        expect(() => setHiddenByUser("x", true)).not.toThrow();
        expect(() => setHiddenByUser("x", false)).not.toThrow();
      } finally {
        Object.defineProperty(localStorage, "setItem", {
          value: origSet,
          configurable: true,
          writable: true,
        });
        Object.defineProperty(localStorage, "removeItem", {
          value: origRemove,
          configurable: true,
          writable: true,
        });
      }
    });

    it("getOrCreateVisitorId reuses an existing UUID", () => {
      localStorage.setItem("qaid_visitor_id", "abc-123");
      expect(getOrCreateVisitorId()).toBe("abc-123");
    });

    it("getOrCreateVisitorId creates a new UUID and stores it", () => {
      localStorage.removeItem("qaid_visitor_id");
      const id = getOrCreateVisitorId();
      expect(id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );
      expect(localStorage.getItem("qaid_visitor_id")).toBe(id);
    });

    it("getOrCreateVisitorId returns a fresh UUID when localStorage throws", () => {
      const origGet = localStorage.getItem;
      const origSet = localStorage.setItem;
      Object.defineProperty(localStorage, "getItem", {
        value: () => {
          throw new Error("denied");
        },
        configurable: true,
        writable: true,
      });
      Object.defineProperty(localStorage, "setItem", {
        value: () => {
          throw new Error("denied");
        },
        configurable: true,
        writable: true,
      });
      try {
        const id = getOrCreateVisitorId();
        expect(id).toMatch(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        );
      } finally {
        Object.defineProperty(localStorage, "getItem", {
          value: origGet,
          configurable: true,
          writable: true,
        });
        Object.defineProperty(localStorage, "setItem", {
          value: origSet,
          configurable: true,
          writable: true,
        });
      }
    });
  });

  describe("DOM persistence", () => {
    it("re-attaches shadow hosts when removed by external code", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      // Trigger overlay host creation by entering targeting mode
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();
      // Cancel targeting so we're back to IDLE but overlay host exists
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      const host = document.querySelector("[data-qaid-embed]") as HTMLElement;
      const overlayHost = document.querySelector(
        "[data-qaid-embed-overlay]"
      ) as HTMLElement;
      expect(host).not.toBeNull();
      expect(overlayHost).not.toBeNull();

      // Externally remove both hosts (simulating SPA route swap)
      host.remove();
      overlayHost.remove();
      expect(document.querySelector("[data-qaid-embed]")).toBeNull();
      expect(document.querySelector("[data-qaid-embed-overlay]")).toBeNull();

      // Trigger a mutation by appending a sibling
      const sibling = document.createElement("div");
      document.body.appendChild(sibling);

      // MutationObserver fires asynchronously
      await vi.waitFor(() => {
        expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
        expect(document.querySelector("[data-qaid-embed-overlay]")).not.toBeNull();
      });
    });

    it("astro:before-swap moves hosts into the new document body", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      // Ensure overlay host exists
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      const newDoc = document.implementation.createHTMLDocument("new");
      const event = new Event("astro:before-swap");
      Object.defineProperty(event, "newDocument", {
        value: newDoc,
        configurable: true,
      });

      document.dispatchEvent(event);

      // Hosts should now live inside the new document body
      expect(newDoc.body.querySelector("[data-qaid-embed]")).not.toBeNull();
      expect(newDoc.body.querySelector("[data-qaid-embed-overlay]")).not.toBeNull();
    });

    it("observer ignores mutations after destroy", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      // Trigger overlay creation so we have both hosts
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      // Mark destroyed flag manually before disconnecting the observer so
      // we can simulate a queued mutation firing after destroy started.
      const inst = embed as unknown as { destroyed: boolean };
      inst.destroyed = true;

      // Trigger a mutation
      document.body.appendChild(document.createElement("div"));

      // Allow microtasks to drain
      await new Promise((r) => queueMicrotask(() => r(undefined)));

      // Hosts should NOT have been re-attached (we never removed them, but
      // the destroyed flag should still short-circuit the observer body).
      // No assertion on DOM state — just verify no crash and the embed
      // continues to function for cleanup.
      expect(() => embed.destroy()).not.toThrow();
      // Reset our reference so afterEach doesn't double-destroy
      embed = undefined as unknown as QaidFeedback;
    });

    it("astro:before-swap without newDocument is a no-op", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const beforeHost = document.querySelector("[data-qaid-embed]");
      const event = new Event("astro:before-swap");
      // No newDocument set; handler should bail out silently
      expect(() => document.dispatchEvent(event)).not.toThrow();
      // Original host still present
      expect(document.querySelector("[data-qaid-embed]")).toBe(beforeHost);
    });

    it("astro:before-swap is a no-op after destroy flag is set", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const inst = embed as unknown as { destroyed: boolean };
      inst.destroyed = true;

      const newDoc = document.implementation.createHTMLDocument("new");
      const event = new Event("astro:before-swap");
      Object.defineProperty(event, "newDocument", {
        value: newDoc,
        configurable: true,
      });
      document.dispatchEvent(event);

      // Hosts should NOT have been moved into the new doc
      expect(newDoc.body.querySelector("[data-qaid-embed]")).toBeNull();
      expect(newDoc.body.querySelector("[data-qaid-embed-overlay]")).toBeNull();

      // Reset destroyed flag so afterEach destroy works cleanly
      inst.destroyed = false;
    });
  });

  describe("button hover tooltips", () => {
    it("shows tooltip on thumbs-down hover and hides on leave", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      const tooltip = shadow.querySelector<HTMLElement>(".qaid-tooltip-text");

      downBtn?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(true);

      downBtn?.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(false);
    });

    it("shows tooltip on record button hover and hides on leave", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });
      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(
        ".qaid-btn-record"
      );
      const tooltip = shadow.querySelector<HTMLElement>(".qaid-tooltip-text");

      recordBtn?.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(true);

      recordBtn?.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      expect(tooltip?.classList.contains("qaid-tooltip-visible")).toBe(false);
    });

  });

  describe("dismiss behaviour", () => {
    afterEach(() => {
      localStorage.removeItem("qaid_hide_feedback");
    });

    it("fully removes the widget on dismiss and never reveals it on hover", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons") as HTMLElement;
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();
      expect(container.classList.contains("qaid-dismissed")).toBe(true);

      // Hovering must not bring it back (the old incognito/force-hidden dance).
      container.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      container.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      expect(container.classList.contains("qaid-dismissed")).toBe(true);
      expect(container.classList.contains("qaid-incognito")).toBe(false);
      expect(container.classList.contains("qaid-force-hidden")).toBe(false);
    });
  });

  describe("targeting click flow", () => {
    let elementFromPointSpy: ReturnType<typeof vi.spyOn>;

    afterEach(() => {
      elementFromPointSpy?.mockRestore();
    });

    it("highlights element on mousemove and selects it on click", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 7 }),
      });
      global.fetch = fetchMock;

      // A target element underneath the overlay
      const target = document.createElement("button");
      target.id = "target-btn";
      target.textContent = "Click me";
      document.body.appendChild(target);

      // Mock the bounding rect so the highlight values are deterministic
      target.getBoundingClientRect = () =>
        ({
          left: 10,
          top: 20,
          right: 110,
          bottom: 70,
          width: 100,
          height: 50,
          x: 10,
          y: 20,
          toJSON() {
            return {};
          },
        }) as DOMRect;

      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      // Start the targeting phase, then mock elementFromPoint for the rest
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(target);

      // Move the mouse over the target
      document.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: 50,
          clientY: 40,
          bubbles: true,
        })
      );

      const overlayShadow = getOverlayShadowRoot();
      const highlight = overlayShadow.querySelector<HTMLElement>(
        ".qaid-highlight-box"
      );
      expect(highlight?.style.display).toBe("block");
      expect(highlight?.style.width).toBe("100px");
      expect(highlight?.style.height).toBe("50px");

      // Click — should transition to SELECTED, build a marker, and fetch
      document.dispatchEvent(
        new MouseEvent("click", {
          clientX: 50,
          clientY: 40,
          bubbles: true,
        })
      );

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // Marker should have been created in the overlay host
      const marker = overlayShadow.querySelector<HTMLElement>(
        ".qaid-selected-marker"
      );
      expect(marker).not.toBeNull();

      // Targeting cleanup
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);

      // Payload should include element selector and bounds
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.elementSelector).toBeTruthy();
      expect(body.elementBounds).toEqual(
        expect.objectContaining({ width: expect.any(Number) })
      );

      // Close the modal so the marker is removed (covers hideSelectedMarker body)
      await vi.waitFor(() => {
        expect(
          overlayShadow.querySelector(".qaid-modal-container, .qaid-bottom-sheet")
        ).not.toBeNull();
      });
      overlayShadow.querySelector<HTMLElement>(".qaid-backdrop")?.click();
      expect(
        overlayShadow.querySelector(".qaid-selected-marker")
      ).toBeNull();
    });

    // iOS/iPadOS does not synthesise mousemove/click for taps on
    // non-interactive page elements, so targeting is driven by touch events.
    function makeTouchEvent(type: string, x: number, y: number): Event {
      const e = new Event(type, { bubbles: true, cancelable: true });
      const touch = { clientX: x, clientY: y } as Touch;
      Object.defineProperty(e, "touches", {
        value: type === "touchend" ? [] : [touch],
        configurable: true,
      });
      Object.defineProperty(e, "changedTouches", {
        value: [touch],
        configurable: true,
      });
      return e;
    }

    it("highlights on touchstart and selects on a tap (iPad path)", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 9 }),
      });
      global.fetch = fetchMock;

      const target = document.createElement("button");
      target.id = "touch-target";
      target.textContent = "Tap me";
      document.body.appendChild(target);
      target.getBoundingClientRect = () =>
        ({
          left: 10,
          top: 20,
          right: 110,
          bottom: 70,
          width: 100,
          height: 50,
          x: 10,
          y: 20,
          toJSON() {
            return {};
          },
        }) as DOMRect;

      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(target);

      // Finger down over the target — highlight should preview it.
      document.dispatchEvent(makeTouchEvent("touchstart", 50, 40));

      const overlayShadow = getOverlayShadowRoot();
      const highlight = overlayShadow.querySelector<HTMLElement>(
        ".qaid-highlight-box"
      );
      expect(highlight?.style.display).toBe("block");
      expect(highlight?.style.width).toBe("100px");

      // Lift near the same spot (a tap) — should select, submit, leave targeting.
      document.dispatchEvent(makeTouchEvent("touchend", 52, 41));

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.elementSelector).toBeTruthy();
    });

    it("treats a touch drag as a scroll and does not select", async () => {
      const fetchMock = vi.fn();
      global.fetch = fetchMock;

      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      const target = document.createElement("div");
      document.body.appendChild(target);
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(target);

      // Finger travels well beyond the tap slop — a scroll, not a selection.
      document.dispatchEvent(makeTouchEvent("touchstart", 50, 40));
      document.dispatchEvent(makeTouchEvent("touchend", 50, 140));

      expect(fetchMock).not.toHaveBeenCalled();
      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
    });

    it("ignores taps on embed elements during targeting", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      const embedHost = document.querySelector(
        "[data-qaid-embed]"
      ) as HTMLElement;
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(embedHost);

      document.dispatchEvent(makeTouchEvent("touchstart", 5, 5));
      document.dispatchEvent(makeTouchEvent("touchend", 5, 5));

      // Still targeting — a tap on the widget itself must not select.
      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
    });

    it("ignores touch events with no active touch point", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      const empty = (type: string) => {
        const e = new Event(type, { bubbles: true, cancelable: true });
        Object.defineProperty(e, "touches", { value: [], configurable: true });
        Object.defineProperty(e, "changedTouches", {
          value: [],
          configurable: true,
        });
        return e;
      };

      // No touches / changedTouches — handlers should no-op, staying in targeting.
      document.dispatchEvent(empty("touchstart"));
      // touchend with no prior touchstart: touchStartPos is null → ignored.
      document.dispatchEvent(empty("touchend"));
      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
    });

    it("hides highlight box when no element is found", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      // Mock to return null (nothing under cursor)
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(null);

      document.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: 0,
          clientY: 0,
          bubbles: true,
        })
      );

      const overlayShadow = getOverlayShadowRoot();
      const highlight = overlayShadow.querySelector<HTMLElement>(
        ".qaid-highlight-box"
      );
      expect(highlight?.style.display).toBe("none");
    });

    it("ignores clicks on embed elements during targeting", async () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await waitForTargeting();

      // Return the embed shadow host as the click target — should be filtered out
      const embedHost = document.querySelector(
        "[data-qaid-embed]"
      ) as HTMLElement;
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(embedHost);

      document.dispatchEvent(
        new MouseEvent("click", {
          clientX: 0,
          clientY: 0,
          bubbles: true,
        })
      );

      // Should still be in targeting mode
      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
    });

    it("does nothing when handleClick fires while not targeting", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      // No targeting active — the document click listener isn't attached, so
      // we exercise this by entering then exiting targeting before the click.
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      // Cancel via Escape — listeners are removed
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      // Even if elementFromPoint were called, no listener should react
      const target = document.createElement("div");
      document.body.appendChild(target);
      elementFromPointSpy = vi
        .spyOn(document, "elementFromPoint")
        .mockReturnValue(target);

      document.dispatchEvent(
        new MouseEvent("click", { clientX: 1, clientY: 1, bubbles: true })
      );

      // Still IDLE
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
    });
  });

  describe("screenshot capture", () => {
    beforeEach(() => {
      screenshotMocks.captureScreenshot.mockClear();
      screenshotMocks.captureDomScreenshot.mockClear();
      annotateMock.openAnnotationEditor.mockClear();
      annotateMock.openAnnotationEditor.mockResolvedValue(null);
    });

    it("calls captureScreenshot when screenshotMethod is permission", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      expect(screenshotMocks.captureScreenshot).toHaveBeenCalledTimes(1);
      expect(screenshotMocks.captureDomScreenshot).not.toHaveBeenCalled();

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,permission");
    });

    it("calls captureDomScreenshot when screenshotMethod is dom", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "dom",
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      expect(screenshotMocks.captureDomScreenshot).toHaveBeenCalledTimes(1);
      expect(screenshotMocks.captureScreenshot).not.toHaveBeenCalled();

      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,dom");
    });

    it("uses the DOM screenshot on touch devices even when method is permission", async () => {
      // Simulate a touch-primary device (phone/tablet).
      const mmSpy = vi
        .spyOn(window, "matchMedia")
        .mockImplementation(
          (q: string) => ({ matches: q === "(pointer: coarse)" }) as MediaQueryList
        );
      try {
        const fetchMock = vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ id: 1 }),
        });
        global.fetch = fetchMock;

        embed = new QaidFeedback({
          endpoint: "/api/feedback",
          skipTargeting: true,
          captureScreenshot: true,
          screenshotMethod: "permission", // default; should be overridden on touch
        });

        const shadow = getShadowRoot();
        shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

        await vi.waitFor(() => {
          expect(fetchMock).toHaveBeenCalled();
        });

        // No getDisplayMedia prompt — DOM/canvas capture is used instead.
        expect(screenshotMocks.captureDomScreenshot).toHaveBeenCalledTimes(1);
        expect(screenshotMocks.captureScreenshot).not.toHaveBeenCalled();
        const body = JSON.parse(fetchMock.mock.calls[0][1].body);
        expect(body.screenshot).toBe("data:image/webp;base64,dom");
      } finally {
        mmSpy.mockRestore();
      }
    });

    it("opens the annotation editor and submits the composited screenshot", async () => {
      annotateMock.openAnnotationEditor.mockResolvedValue(
        "data:image/webp;base64,annotated"
      );
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      expect(annotateMock.openAnnotationEditor).toHaveBeenCalledTimes(1);
      // The editor receives the raw captured screenshot as its data URL.
      expect(annotateMock.openAnnotationEditor).toHaveBeenCalledWith(
        expect.objectContaining({ dataUrl: "data:image/webp;base64,permission" })
      );
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,annotated");
    });

    it("keeps the original screenshot when annotation is skipped", async () => {
      // Default mock resolves null (skip).
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      expect(annotateMock.openAnnotationEditor).toHaveBeenCalledTimes(1);
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,permission");
    });

    it("does not open the annotation editor when annotate is false", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
        annotate: false,
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      expect(annotateMock.openAnnotationEditor).not.toHaveBeenCalled();
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,permission");
    });

    it("toggles overlay-host pointer events around the annotation editor", async () => {
      let pointerEventsWhileOpen: string | undefined;
      annotateMock.openAnnotationEditor.mockImplementation(async () => {
        const host = document.querySelector<HTMLElement>(
          "[data-qaid-embed-overlay]"
        );
        pointerEventsWhileOpen = host?.style.pointerEvents;
        return null;
      });
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // Enabled while the editor runs so the user can interact with it.
      expect(pointerEventsWhileOpen).toBe("auto");
    });

    it("wires the embed's a11y + theming helpers into the annotation editor", async () => {
      let dialogEl: HTMLElement | undefined;
      let varsEl: HTMLElement | undefined;
      annotateMock.openAnnotationEditor.mockImplementation(
        async (opts: {
          applyVars?: (el: HTMLElement) => void;
          announce?: (m: string, a?: boolean) => void;
          openDialog?: (c: HTMLElement, o: { labelledbyId?: string }) => void;
          closeDialog?: () => void;
        }): Promise<string | null> => {
          varsEl = document.createElement("div");
          opts.applyVars?.(varsEl);
          opts.announce?.("Editing screenshot");
          dialogEl = document.createElement("div");
          opts.openDialog?.(dialogEl, { labelledbyId: "t" });
          opts.closeDialog?.();
          return "data:image/webp;base64,annotated";
        }
      );
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        captureScreenshot: true,
        screenshotMethod: "permission",
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      // applyVars applied the per-instance CSS variables to the passed element.
      expect(varsEl!.style.getPropertyValue("--qaid-marker")).not.toBe("");
      // openDialog applied real dialog semantics.
      expect(dialogEl!.getAttribute("role")).toBe("dialog");
      const body = JSON.parse(fetchMock.mock.calls[0][1].body);
      expect(body.screenshot).toBe("data:image/webp;base64,annotated");
    });
  });

  describe("modal toggle and PATCH errors", () => {
    it("logs an error when toggling type fails on the server", async () => {
      let postResolved = false;
      const fetchMock = vi.fn().mockImplementation((_url, opts) => {
        if (opts?.method === "POST") {
          postResolved = true;
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: 12 }),
          });
        }
        // PATCH path rejects
        return Promise.reject(new Error("Server down"));
      });
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

      void postResolved;
      await vi.waitFor(() => {
        const host = document.querySelector("[data-qaid-embed-overlay]");
        expect(host).not.toBeNull();
        expect(host!.shadowRoot!.querySelector(".qaid-type-toggle")).not.toBeNull();
      });
      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-type-toggle")
        ?.click();

      await vi.waitFor(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          "Failed to update feedback type:",
          expect.any(Error)
        );
      });

      errorSpy.mockRestore();
    });

    it("renders custom buttonClass toggle initially as qaid-btn-down for down feedback", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 21 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        buttonClass: "my-btn",
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-down")?.click();

      await vi.waitFor(() => {
        const host = document.querySelector("[data-qaid-embed-overlay]");
        expect(host).not.toBeNull();
        expect(host!.shadowRoot!.querySelector(".qaid-type-toggle")).not.toBeNull();
      });
      const overlayShadow = getOverlayShadowRoot();
      const typeToggle = overlayShadow.querySelector<HTMLButtonElement>(
        ".qaid-type-toggle"
      );
      // With buttonClass and feedbackType=down, toggle starts with qaid-btn-down
      expect(typeToggle?.classList.contains("qaid-btn-down")).toBe(true);
      expect(typeToggle?.classList.contains("qaid-btn-up")).toBe(false);
    });

    it("toggles down -> up updating icon and class", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 33 }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      // Open with a thumbs-DOWN to flip the toggle path
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-down")?.click();

      await vi.waitFor(() => {
        const host = document.querySelector("[data-qaid-embed-overlay]");
        expect(host).not.toBeNull();
        expect(host!.shadowRoot!.querySelector(".qaid-type-toggle")).not.toBeNull();
      });
      const overlayShadow = getOverlayShadowRoot();

      const typeToggle = overlayShadow.querySelector<HTMLButtonElement>(
        ".qaid-type-toggle"
      );
      expect(typeToggle?.classList.contains("qaid-type-down")).toBe(true);

      typeToggle?.click();
      expect(typeToggle?.classList.contains("qaid-type-up")).toBe(true);
      expect(typeToggle?.classList.contains("qaid-type-down")).toBe(false);
    });

    it("logs an error when finalize PATCH on close fails", async () => {
      let postResolved = false;
      const fetchMock = vi.fn().mockImplementation((_url, opts) => {
        if (opts?.method === "POST") {
          postResolved = true;
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: 88 }),
          });
        }
        return Promise.reject(new Error("Finalize failed"));
      });
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      void postResolved;
      // Wait for modal to mount (post resolved AND overlay populated)
      await vi.waitFor(() => {
        const host = document.querySelector("[data-qaid-embed-overlay]");
        expect(host).not.toBeNull();
        expect(host!.shadowRoot!.querySelector(".qaid-modal-container, .qaid-bottom-sheet")).not.toBeNull();
      });

      // Close via Escape — triggers PATCH finalize
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

      await vi.waitFor(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          "Failed to finalize feedback:",
          expect.any(Error)
        );
      });

      errorSpy.mockRestore();
    });

    it("logs an error when submitMessage PATCH fails", async () => {
      let postResolved = false;
      const fetchMock = vi.fn().mockImplementation((_url, opts) => {
        if (opts?.method === "POST") {
          postResolved = true;
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: 91 }),
          });
        }
        return Promise.reject(new Error("Patch failed"));
      });
      global.fetch = fetchMock;
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      void postResolved;
      await vi.waitFor(() => {
        const host = document.querySelector("[data-qaid-embed-overlay]");
        expect(host).not.toBeNull();
        expect(host!.shadowRoot!.querySelector(".qaid-btn-submit")).not.toBeNull();
      });
      const overlayShadow = getOverlayShadowRoot();
      const textarea = overlayShadow.querySelector<HTMLTextAreaElement>(
        ".qaid-textarea"
      );
      if (textarea) textarea.value = "thoughts";
      overlayShadow.querySelector<HTMLButtonElement>(".qaid-btn-submit")?.click();

      await vi.waitFor(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          "Failed to submit feedback message:",
          expect.any(Error)
        );
      });

      errorSpy.mockRestore();
    });
  });

  describe("recording edge cases", () => {
    let mockMediaRecorder: {
      state: string;
      ondataavailable: ((e: { data: Blob }) => void) | null;
      onstop: (() => void) | null;
      onerror: (() => void) | null;
      start: ReturnType<typeof vi.fn>;
      stop: ReturnType<typeof vi.fn>;
    };

    beforeEach(() => {
      const mockTrack = { stop: vi.fn(), addEventListener: vi.fn(), kind: "video" };
      const mockStream = {
        getTracks: () => [mockTrack],
        getVideoTracks: () => [mockTrack],
      };

      mockMediaRecorder = {
        state: "inactive",
        ondataavailable: null,
        onstop: null,
        onerror: null,
        start: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "recording";
          setTimeout(() => {
            if (this.ondataavailable) {
              this.ondataavailable({
                data: new Blob(["video-data"], { type: "video/webm" }),
              });
            }
          }, 10);
        }),
        stop: vi.fn().mockImplementation(function (this: typeof mockMediaRecorder) {
          this.state = "inactive";
          setTimeout(() => {
            if (this.onstop) this.onstop();
          }, 10);
        }),
      };

      (globalThis as Record<string, unknown>).MediaRecorder = class {
        static isTypeSupported = () => true;
        state = "inactive";
        ondataavailable: ((e: { data: Blob }) => void) | null = null;
        onstop: (() => void) | null = null;
        onerror: (() => void) | null = null;
        constructor() {
          Object.assign(this, {
            start: mockMediaRecorder.start.bind(this),
            stop: mockMediaRecorder.stop.bind(this),
          });
          const self = this;
          Object.defineProperty(mockMediaRecorder, "ondataavailable", {
            get: () => self.ondataavailable,
            set: (v) => {
              self.ondataavailable = v;
            },
            configurable: true,
          });
          Object.defineProperty(mockMediaRecorder, "onstop", {
            get: () => self.onstop,
            set: (v) => {
              self.onstop = v;
            },
            configurable: true,
          });
        }
        start(timeslice?: number) {
          mockMediaRecorder.start.call(this, timeslice);
        }
        stop() {
          mockMediaRecorder.stop.call(this);
        }
      };

      Object.defineProperty(navigator, "mediaDevices", {
        value: {
          getDisplayMedia: vi.fn().mockResolvedValue(mockStream),
        },
        writable: true,
        configurable: true,
      });

      URL.createObjectURL = vi.fn().mockReturnValue("blob:mock");
      URL.revokeObjectURL = vi.fn();
    });

    it("ignores second click on record button while already recording", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });
      const shadow = getShadowRoot();
      const recordBtn = shadow.querySelector<HTMLButtonElement>(
        ".qaid-btn-record"
      );
      recordBtn?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      const callsAfterFirst =
        (navigator.mediaDevices.getDisplayMedia as ReturnType<typeof vi.fn>).mock
          .calls.length;

      // Click again while still recording
      recordBtn?.click();

      // Wait a tick — should NOT have called getDisplayMedia again
      await new Promise((r) => setTimeout(r, 30));
      expect(
        (navigator.mediaDevices.getDisplayMedia as ReturnType<typeof vi.fn>).mock
          .calls.length
      ).toBe(callsAfterFirst);
    });

    it("re-records when the rerecord button is clicked", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();

      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      // Stop -> preview
      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")
        ?.click();
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();
      });

      // Remove orphan preview elements caused by the recorder mock race
      const orphans = overlayShadow.querySelectorAll(".qaid-video-preview");
      for (let i = 0; i < orphans.length - 1; i++) orphans[i].remove();

      const getDisplayMediaMock =
        navigator.mediaDevices.getDisplayMedia as ReturnType<typeof vi.fn>;
      const beforeCount = getDisplayMediaMock.mock.calls.length;

      // Click re-record
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-video-btn-rerecord")
        ?.click();

      // Should have requested display media again and the live preview removed
      await vi.waitFor(() => {
        expect(getDisplayMediaMock.mock.calls.length).toBeGreaterThan(
          beforeCount
        );
      });
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
    });

    it("ignores duplicate send clicks while already sending", async () => {
      let resolveFetch!: (v: unknown) => void;
      const fetchMock = vi.fn().mockImplementation(
        () => new Promise((resolve) => (resolveFetch = resolve))
      );
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")
        ?.click();
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();
      });

      // Clean up duplicate preview elements caused by the recorder mock race
      const allPreviews = overlayShadow.querySelectorAll(".qaid-video-preview");
      for (let i = 0; i < allPreviews.length - 1; i++) {
        allPreviews[i].remove();
      }

      const sendBtn = overlayShadow.querySelector<HTMLButtonElement>(
        ".qaid-video-btn-send"
      )!;
      sendBtn.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalledTimes(1);
      });

      // Re-enable the disabled button so we can dispatch a click and verify
      // the embed's own isSendingVideo guard rejects it
      sendBtn.disabled = false;
      sendBtn.click();

      // Still only one fetch call (second click hits the isSendingVideo guard)
      await new Promise((r) => setTimeout(r, 30));
      expect(fetchMock).toHaveBeenCalledTimes(1);

      resolveFetch({ ok: true, text: () => Promise.resolve("OK") });

      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
      });
    });

    it("recording onStop with empty blob runs cleanup and skips preview", async () => {
      // Override MediaRecorder to emit no data chunks before onstop
      (globalThis as Record<string, unknown>).MediaRecorder = class {
        static isTypeSupported = () => true;
        state = "inactive";
        ondataavailable: ((e: { data: Blob }) => void) | null = null;
        onstop: (() => void) | null = null;
        onerror: (() => void) | null = null;
        start() {
          this.state = "recording";
          // Do NOT emit any data — onstop fires below with no chunks
        }
        stop() {
          this.state = "inactive";
          // Stop without ever emitting data: blob will be empty
          setTimeout(() => this.onstop?.(), 5);
        }
      };

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")
        ?.click();

      // Indicator should disappear and NO preview should appear
      await vi.waitFor(() => {
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).toBeNull();
      });
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
    });

    it("onTick after the indicator was removed does not throw", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      // Null out the controller's reference (covers the !recordingIndicator early return)
      const inst = (embed as unknown as {
        recording: { recordingIndicator: HTMLElement | null; updateRecordingTimer(n: number): void };
      }).recording;
      inst.recordingIndicator = null;
      expect(() => inst.updateRecordingTimer(2)).not.toThrow();
    });

    it("announces the final countdown in the last five seconds", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        expect(
          getOverlayShadowRoot().querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      const inst = (embed as unknown as {
        recording: { updateRecordingTimer(n: number): void };
      }).recording;
      // 12s elapsed of the 15s default cap -> 3s remaining, inside the window
      inst.updateRecordingTimer(12);

      const overlayShadow = getOverlayShadowRoot();
      expect(
        overlayShadow.querySelector(".qaid-recording-time")?.textContent
      ).toBe("0:03");
      expect(
        overlayShadow.querySelector('[role="status"]')?.textContent
      ).toBe("3 seconds remaining");
    });

    it("uses mp4 extension when recorded blob is mp4", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        text: () => Promise.resolve("OK"),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });
      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")
        ?.click();
      await vi.waitFor(() => {
        expect(overlayShadow.querySelector(".qaid-video-preview")).not.toBeNull();
      });

      // Replace the recorded blob with an mp4-typed blob
      const inst = (embed as unknown as { recording: { recordedBlob: Blob } }).recording;
      inst.recordedBlob = new Blob(["x"], { type: "video/mp4" });

      // Spy on FormData append to capture the filename argument used
      const appendSpy = vi.spyOn(FormData.prototype, "append");

      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-video-btn-send")
        ?.click();

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const videoCall = appendSpy.mock.calls.find((c) => c[0] === "video");
      expect(videoCall?.[2]).toBe("recording.mp4");

      appendSpy.mockRestore();
    });

    it("stopRecording catch path nulls the recorded blob", async () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-btn-record")?.click();
      await vi.waitFor(() => {
        const overlayShadow = getOverlayShadowRoot();
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });

      // Force the recorder.stop() to reject
      const inst = (embed as unknown as {
        recording: { videoRecorder: { stop: () => Promise<Blob> }; recordedBlob: Blob | null };
      }).recording;
      inst.videoRecorder.stop = vi.fn().mockRejectedValue(new Error("boom"));

      const overlayShadow = getOverlayShadowRoot();
      overlayShadow
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")
        ?.click();

      await vi.waitFor(() => {
        expect(
          overlayShadow.querySelector(".qaid-recording-indicator")
        ).toBeNull();
      });
      expect(inst.recordedBlob).toBeNull();
      // No preview either
      expect(overlayShadow.querySelector(".qaid-video-preview")).toBeNull();
    });
  });

  describe("quest launching", () => {
    let questConfigs: LaunchedQuestConfig[];
    let fakeInstances: { config: LaunchedQuestConfig; destroyed: boolean }[];

    beforeEach(() => {
      questConfigs = [];
      fakeInstances = [];
      class FakeQuest {
        config: LaunchedQuestConfig;
        destroyed = false;
        constructor(config: LaunchedQuestConfig) {
          this.config = config;
          questConfigs.push(config);
          fakeInstances.push(this);
        }
        destroy(): void {
          this.destroyed = true;
          this.config.onClose?.();
        }
      }
      _setQuestsImporter(async () => ({ QaidQuests: FakeQuest }));
    });

    afterEach(() => {
      _setQuestsImporter(null);
    });

    function overlayModal(): Element | null {
      const overlay = document.querySelector("[data-qaid-embed-overlay]");
      return (
        overlay?.shadowRoot?.querySelector(
          ".qaid-modal-container, .qaid-bottom-sheet",
        ) ?? null
      );
    }

    it("launches the linked quest instead of the message box on a thumb click", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: "fb-1" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        apiKey: "proj-key",
        quests: { base: "https://qaid.dev/api/quests", up: "quest-up" },
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

      await vi.waitFor(() => expect(questConfigs.length).toBe(1));

      // No message-box modal was opened
      expect(overlayModal()).toBeNull();

      const cfg = questConfigs[0]!;
      expect(cfg.endpoint).toBe("https://qaid.dev/api/quests/responses");
      expect(cfg.configUrl).toBe("https://qaid.dev/api/quests/quest-up/definition");
      expect(cfg.apiKey).toBe("proj-key");
      expect(cfg.metadata).toEqual({ feedbackId: "fb-1" });
    });

    it("shows the message box for a button that has no linked quest", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: "fb-1" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        // "up" is linked but we click "down", which has no quest
        quests: { base: "https://qaid.dev/api/quests", up: "quest-up" },
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-down")!.click();

      await vi.waitFor(() => expect(overlayModal()).not.toBeNull());
      expect(questConfigs.length).toBe(0);
    });

    it("falls back to the message box when the quest module fails to load", async () => {
      _setQuestsImporter(async () => {
        throw new Error("cdn down");
      });
      const errSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: "fb-1" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        quests: { base: "https://qaid.dev/api/quests", up: "quest-up" },
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

      await vi.waitFor(() => expect(overlayModal()).not.toBeNull());
      expect(questConfigs.length).toBe(0);
      errSpy.mockRestore();
    });

    it("does not launch quests at all when no base is configured", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: "fb-1" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        // ids present but no base → feature disabled
        quests: { up: "quest-up", down: "quest-down" },
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

      await vi.waitFor(() => expect(overlayModal()).not.toBeNull());
      expect(questConfigs.length).toBe(0);
    });

    it("launches the video quest after the recording is sent, linked to the video feedback id", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        text: () => Promise.resolve("OK"),
        json: () => Promise.resolve({ id: "vid-7" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
        quests: { base: "https://qaid.dev/api/quests", video: "quest-vid" },
      });

      // Drive submitVideoFeedback directly with a recorded blob, avoiding the
      // full MediaRecorder harness. ensureRecording() lazily creates the
      // controller (no screen-share needed for instantiation).
      const inst = await (embed as unknown as {
        ensureRecording(): Promise<{
          recordedBlob: Blob | null;
          submitVideoFeedback: (
            message: string | null,
            sendBtn: HTMLButtonElement,
          ) => Promise<void>;
        }>;
      }).ensureRecording();
      inst.recordedBlob = new Blob(["x"], { type: "video/webm" });
      await inst.submitVideoFeedback(null, document.createElement("button"));

      await vi.waitFor(() => expect(questConfigs.length).toBe(1));

      // The video POST happened before the quest launched.
      const videoPosted = fetchMock.mock.calls.some(
        (c: unknown[]) =>
          typeof c[0] === "string" && (c[0] as string).endsWith("/video"),
      );
      expect(videoPosted).toBe(true);

      const cfg = questConfigs[0]!;
      expect(cfg.configUrl).toBe("https://qaid.dev/api/quests/quest-vid/definition");
      expect(cfg.metadata).toEqual({ feedbackId: "vid-7" });
    });

    it("tears down an active quest on destroy()", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: "fb-1" }),
      });
      global.fetch = fetchMock;

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        skipTargeting: true,
        quests: { base: "https://qaid.dev/api/quests", up: "quest-up" },
      });

      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();
      await vi.waitFor(() => expect(fakeInstances.length).toBe(1));

      embed.destroy();
      expect(fakeInstances[0]!.destroyed).toBe(true);
    });
  });

  describe("single button mode", () => {
    it("renders one neutral feedback button instead of the thumbs pair", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback", singleButton: true });
      const shadow = getShadowRoot();
      expect(shadow.querySelector(".qaid-btn-feedback")).not.toBeNull();
      expect(shadow.querySelector(".qaid-btn-up")).toBeNull();
      expect(shadow.querySelector(".qaid-btn-down")).toBeNull();
    });

    it("submits neutral feedback", async () => {
      const fetchMock = vi
        .fn()
        .mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 7 }) });
      global.fetch = fetchMock;
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        singleButton: true,
        skipTargeting: true,
      });
      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-feedback")?.click();
      await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
      expect(JSON.parse(fetchMock.mock.calls[0][1].body).feedbackType).toBe("neutral");
    });

    it("shows a static neutral icon (no up/down toggle) in the modal", async () => {
      const fetchMock = vi
        .fn()
        .mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 11 }) });
      global.fetch = fetchMock;
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        singleButton: true,
        skipTargeting: true,
      });
      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-feedback")?.click();
      await vi.waitFor(() => {
        expect(
          getOverlayShadowRoot().querySelector(".qaid-modal-container, .qaid-bottom-sheet")
        ).not.toBeNull();
      });
      const overlay = getOverlayShadowRoot();
      expect(overlay.querySelector(".qaid-type-static")).not.toBeNull();
      expect(overlay.querySelector(".qaid-type-toggle")).toBeNull();
    });
  });

  describe("feedbackMode: annotate", () => {
    it("opens the markup editor instead of targeting, then submits", async () => {
      const fetchMock = vi
        .fn()
        .mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 9 }) });
      global.fetch = fetchMock;
      embed = new QaidFeedback({ endpoint: "/api/feedback", feedbackMode: "annotate" });
      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      // No element targeting.
      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
      // A screenshot was captured (even without captureScreenshot) and annotated.
      expect(annotateMock.openAnnotationEditor).toHaveBeenCalled();
      expect(JSON.parse(fetchMock.mock.calls[0][1].body).feedbackType).toBe("up");
    });

    it("passes the configured annotation colour + palette to the editor", async () => {
      const fetchMock = vi
        .fn()
        .mockResolvedValue({ ok: true, json: () => Promise.resolve({ id: 9 }) });
      global.fetch = fetchMock;
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        feedbackMode: "annotate",
        annotationColor: "#00ff00",
        annotationPalette: ["#00ff00", "#ff0000"],
      });
      annotateMock.openAnnotationEditor.mockClear();
      getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();
      await vi.waitFor(() => expect(annotateMock.openAnnotationEditor).toHaveBeenCalled());
      const opts = annotateMock.openAnnotationEditor.mock.lastCall![0];
      expect(opts.color).toBe("#00ff00");
      expect(opts.palette).toEqual(["#00ff00", "#ff0000"]);
    });
  });
});
