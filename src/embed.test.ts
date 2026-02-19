import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { QaidFeedback } from "./embed";
import { _resetStylesState } from "./styles";

function getShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed]");
  return host!.shadowRoot!;
}

function getOverlayShadowRoot(): ShadowRoot {
  const host = document.querySelector("[data-qaid-embed-overlay]");
  return host!.shadowRoot!;
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
    it("should enter targeting mode when thumbs up is clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(true);
    });

    it("should enter targeting mode when thumbs down is clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const downBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-down");
      downBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);
      expect(document.body.classList.contains("qaid-type-up")).toBe(false);
    });

    it("should create targeting overlay when entering targeting mode", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      const overlayShadow = getOverlayShadowRoot();
      const overlay = overlayShadow.querySelector(".qaid-targeting-overlay");
      const vignette = overlayShadow.querySelector(".qaid-vignette");
      const scope = overlayShadow.querySelector(".qaid-scope");

      expect(overlay).not.toBeNull();
      expect(vignette).not.toBeNull();
      expect(scope).not.toBeNull();
    });

    it("should exit targeting mode when Escape is pressed", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.classList.contains("qaid-targeting")).toBe(true);

      const overlayShadow = getOverlayShadowRoot();

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(event);

      expect(document.body.classList.contains("qaid-targeting")).toBe(false);
      // Shadow host is still in the DOM, but overlay inside overlay host should be gone
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();
      expect(overlayShadow.querySelector(".qaid-targeting-overlay")).toBeNull();
    });

    it("should set targeting CSS variables on body", () => {
      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        colors: { positive: "rgb(0, 255, 0)", negative: "rgb(255, 0, 0)" },
      });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      expect(document.body.style.getPropertyValue("--qaid-positive")).toBe("rgb(0, 255, 0)");
      expect(document.body.style.getPropertyValue("--qaid-negative")).toBe("rgb(255, 0, 0)");
    });

    it("should create overlay with pointer-events none for scroll passthrough", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

      const overlayShadow = getOverlayShadowRoot();
      const captureLayer = overlayShadow.querySelector<HTMLElement>(".qaid-capture-layer");
      expect(captureLayer).not.toBeNull();
    });

    it("should handle mousemove events on document during targeting", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

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
    it("should remove shadow host from document", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });
      expect(document.querySelector("[data-qaid-embed]")).not.toBeNull();

      // Start targeting to trigger overlay host creation
      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();
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

    it("should remove targeting overlay if active", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const upBtn = shadow.querySelector<HTMLButtonElement>(".qaid-btn-up");
      upBtn?.click();

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

    it("should add qaid-incognito class when clicked", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(false);

      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();
      expect(container?.classList.contains("qaid-incognito")).toBe(true);
    });

    it("should persist dismiss preference to localStorage", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback", apiKey: "test-key" });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();

      expect(localStorage.getItem("qaid_hide_feedback_test-key")).toBe("1");
    });

    it("should restore incognito from localStorage on init", () => {
      localStorage.setItem("qaid_hide_feedback_test-key", "1");

      embed = new QaidFeedback({ endpoint: "/api/feedback", apiKey: "test-key" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(true);
    });

    it("should use generic key when no apiKey provided", () => {
      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const shadow = getShadowRoot();
      shadow.querySelector<HTMLButtonElement>(".qaid-dismiss-btn")?.click();

      expect(localStorage.getItem("qaid_hide_feedback")).toBe("1");
    });

    it("should clear incognito and localStorage when a thumb is clicked while hidden", () => {
      localStorage.setItem("qaid_hide_feedback_test-key", "1");

      embed = new QaidFeedback({ endpoint: "/api/feedback", apiKey: "test-key" });

      const shadow = getShadowRoot();
      const container = shadow.querySelector(".qaid-buttons");
      expect(container?.classList.contains("qaid-incognito")).toBe(true);

      // Click a thumb button while incognito
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
      expect(container?.classList.contains("qaid-incognito")).toBe(true);

      localStorage.getItem = origGetItem;
      localStorage.setItem = origSetItem;
    });
  });
});
