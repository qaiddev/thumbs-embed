import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { QaidFeedback } from "./embed";
import { saveFocus } from "./a11y";
import { _resetStylesState } from "./styles";

/**
 * Focused accessibility-behaviour tests for the thumbs embed. These assert the
 * runtime a11y contract (dialog semantics, focus management, live regions,
 * toggle state, keyboard targeting) rather than static markup, so a regression
 * in the wiring fails loudly. They complement the axe-core net in
 * a11y.axe.test.ts (which cannot see focus movement or announcements).
 */

function mainShadow(): ShadowRoot {
  return document.querySelector("[data-qaid-embed]")!.shadowRoot!;
}
function overlayShadow(): ShadowRoot {
  return document.querySelector("[data-qaid-embed-overlay]")!.shadowRoot!;
}
function setViewport(width: number): void {
  Object.defineProperty(window, "innerWidth", {
    value: width,
    writable: true,
    configurable: true,
  });
}

describe("a11y behaviour (thumbs embed)", () => {
  let embed: QaidFeedback;

  beforeEach(() => {
    document.body.innerHTML = "";
    _resetStylesState();
    setViewport(1024);
  });

  afterEach(() => {
    if (embed) embed.destroy();
    document.body.innerHTML = "";
    _resetStylesState();
    setViewport(1024);
  });

  async function openModal(
    type: "up" | "down" = "up",
    config: Record<string, unknown> = {}
  ): Promise<{ fetchMock: ReturnType<typeof vi.fn>; trigger: HTMLButtonElement }> {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 99 }),
    });
    global.fetch = fetchMock as unknown as typeof fetch;

    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      skipTargeting: true,
      ...config,
    });

    const trigger = mainShadow().querySelector<HTMLButtonElement>(
      type === "up" ? ".qaid-btn-up" : ".qaid-btn-down"
    )!;
    // Focus the trigger first so focus-restoration has a real element to return to.
    trigger.focus();
    trigger.click();

    await vi.waitFor(() => {
      expect(
        overlayShadow().querySelector(".qaid-modal-container, .qaid-bottom-sheet")
      ).not.toBeNull();
    });

    return { fetchMock, trigger };
  }

  describe("dialog semantics", () => {
    it("marks the positioned modal as a named dialog", async () => {
      await openModal("up");
      const modal = overlayShadow().querySelector<HTMLElement>(
        ".qaid-modal-container"
      )!;
      expect(modal.getAttribute("role")).toBe("dialog");
      expect(modal.getAttribute("aria-modal")).toBe("true");

      const labelledby = modal.getAttribute("aria-labelledby");
      expect(labelledby).toBeTruthy();
      const titleEl = overlayShadow().querySelector(`#${labelledby}`);
      expect(titleEl?.classList.contains("qaid-modal-title")).toBe(true);

      const describedby = modal.getAttribute("aria-describedby");
      expect(describedby).toBeTruthy();
      expect(
        overlayShadow()
          .querySelector(`#${describedby}`)
          ?.classList.contains("qaid-modal-subtitle")
      ).toBe(true);
    });

    it("marks the mobile bottom sheet as a named dialog", async () => {
      setViewport(400);
      await openModal("up");
      const sheet = overlayShadow().querySelector<HTMLElement>(
        ".qaid-bottom-sheet"
      )!;
      expect(sheet.getAttribute("role")).toBe("dialog");
      expect(sheet.getAttribute("aria-modal")).toBe("true");
      const labelledby = sheet.getAttribute("aria-labelledby");
      expect(labelledby).toBeTruthy();
      expect(overlayShadow().querySelector(`#${labelledby}`)).not.toBeNull();
    });

    it("marks the recording-preview box as a named dialog", async () => {
      // Minimal MediaRecorder + getDisplayMedia mocks to reach the preview.
      const track = { stop: vi.fn(), addEventListener: vi.fn(), kind: "video" };
      const stream = { getTracks: () => [track], getVideoTracks: () => [track] };
      class MockRecorder {
        static isTypeSupported = () => true;
        state = "inactive";
        ondataavailable: ((e: { data: Blob }) => void) | null = null;
        onstop: (() => void) | null = null;
        onerror: (() => void) | null = null;
        start() {
          this.state = "recording";
          setTimeout(() => {
            this.ondataavailable?.({
              data: new Blob(["v"], { type: "video/webm" }),
            });
          }, 5);
        }
        stop() {
          this.state = "inactive";
          setTimeout(() => this.onstop?.(), 5);
        }
      }
      (globalThis as Record<string, unknown>).MediaRecorder = MockRecorder;
      Object.defineProperty(navigator, "mediaDevices", {
        value: { getDisplayMedia: vi.fn().mockResolvedValue(stream) },
        writable: true,
        configurable: true,
      });
      (URL as unknown as { createObjectURL: () => string }).createObjectURL =
        () => "blob:mock";

      embed = new QaidFeedback({
        endpoint: "/api/feedback",
        captureVideo: true,
      });
      mainShadow()
        .querySelector<HTMLButtonElement>(".qaid-btn-record")!
        .click();

      await vi.waitFor(() => {
        expect(
          overlayShadow().querySelector(".qaid-recording-indicator")
        ).not.toBeNull();
      });
      overlayShadow()
        .querySelector<HTMLButtonElement>(".qaid-recording-stop")!
        .click();

      await vi.waitFor(() => {
        expect(
          overlayShadow().querySelector(".qaid-video-preview-box")
        ).not.toBeNull();
      });

      const box = overlayShadow().querySelector<HTMLElement>(
        ".qaid-video-preview-box"
      )!;
      expect(box.getAttribute("role")).toBe("dialog");
      expect(box.getAttribute("aria-modal")).toBe("true");
      const labelledby = box.getAttribute("aria-labelledby");
      expect(labelledby).toBeTruthy();
      expect(
        overlayShadow().querySelector(`#${labelledby}`)?.textContent
      ).toContain("Review your recording");
    });
  });

  describe("focus management", () => {
    it("moves focus into the dialog on open", async () => {
      const { trigger } = await openModal("up");
      const active = saveFocus();
      const modal = overlayShadow().querySelector<HTMLElement>(
        ".qaid-modal-container"
      )!;
      expect(active).not.toBeNull();
      expect(modal.contains(active)).toBe(true);
      // Focus left the invoking thumb button.
      expect(active).not.toBe(trigger);
    });

    it("restores focus to the invoking control on close", async () => {
      const { trigger } = await openModal("up");
      // Sanity: focus is currently inside the dialog, not on the trigger.
      expect(saveFocus()).not.toBe(trigger);

      overlayShadow().querySelector<HTMLElement>(".qaid-backdrop")!.click();

      expect(
        overlayShadow().querySelector(".qaid-modal-container")
      ).toBeNull();
      expect(saveFocus()).toBe(trigger);
    });
  });

  describe("live-region announcements", () => {
    it("mounts a polite status region and writes 'Feedback sent' on submit", async () => {
      await openModal("up");
      // announce() fires before the overlay exists, so it lands in the main root.
      const region =
        mainShadow().querySelector<HTMLElement>('[role="status"]') ??
        overlayShadow().querySelector<HTMLElement>('[role="status"]');
      expect(region).not.toBeNull();
      expect(region!.getAttribute("aria-live")).toBe("polite");
      expect(region!.textContent).toBe("Feedback sent");
    });
  });

  describe("feedback-type toggle", () => {
    it("exposes aria-pressed and flips it on toggle", async () => {
      await openModal("up");
      const toggle = overlayShadow().querySelector<HTMLButtonElement>(
        ".qaid-type-toggle"
      )!;
      // Positive feedback -> pressed.
      expect(toggle.getAttribute("aria-pressed")).toBe("true");
      expect(toggle.getAttribute("aria-label")).toContain("positive");

      toggle.click();
      expect(toggle.getAttribute("aria-pressed")).toBe("false");
      expect(toggle.getAttribute("aria-label")).toContain("negative");
    });
  });

  describe("keyboard element-targeting", () => {
    it("targets and submits an element with no mouse", async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 7 }),
      });
      global.fetch = fetchMock as unknown as typeof fetch;

      // A targetable element on the host page.
      const target = document.createElement("button");
      target.id = "page-target";
      target.textContent = "Buy now";
      document.body.appendChild(target);

      embed = new QaidFeedback({ endpoint: "/api/feedback" });

      const container = mainShadow().querySelector<HTMLElement>(".qaid-buttons")!;
      const upBtn = mainShadow().querySelector<HTMLButtonElement>(".qaid-btn-up")!;

      // Enter keydown on the buttons container flags keyboard activation; the
      // ensuing (synthetic) click routes to the keyboard-targeting flow.
      container.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      upBtn.click();

      // The keyboard controller listens on document; Enter commits the highlight.
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );

      await vi.waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
      });

      const body = JSON.parse(
        (fetchMock.mock.calls[0][1] as RequestInit).body as string
      );
      expect(body.feedbackType).toBe("up");
      // A real element was targeted via the keyboard, not the (0,0) fallback.
      expect(body.elementSelector).not.toBeNull();
      expect(body.elementText).toBe("Buy now");
    });
  });
});
