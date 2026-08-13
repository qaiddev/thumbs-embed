/**
 * The success screen shown after a feedback message is sent.
 *
 * Before 1.7.0 the modal was simply removed on submit, with nothing to say the
 * message had been received.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { QaidFeedback } from "./index";
import type { FeedbackConfig } from "./types";

function getShadowRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed]")!.shadowRoot!;
}
function getOverlayShadowRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed-overlay]")!.shadowRoot!;
}

/** Click a thumb, wait for the message modal, type, and submit. */
async function submitFeedback(message = "It broke") {
  const upBtn = getShadowRoot().querySelector<HTMLButtonElement>(".qaid-btn-up");
  upBtn!.click();

  await vi.waitFor(() => {
    expect(
      getOverlayShadowRoot().querySelector(".qaid-modal-container, .qaid-bottom-sheet")
    ).not.toBeNull();
  });

  const overlay = getOverlayShadowRoot();
  const textarea = overlay.querySelector<HTMLTextAreaElement>(".qaid-textarea");
  if (textarea) textarea.value = message;
  overlay.querySelector<HTMLButtonElement>(".qaid-btn-submit")!.click();
}

let embed: QaidFeedback | null = null;

/** A POST that yields an id, then a PATCH that succeeds. */
function okFetch() {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ id: 7 }),
  });
}

function mount(config: Partial<FeedbackConfig> = {}) {
  embed = new QaidFeedback({ endpoint: "/api/feedback", skipTargeting: true, ...config });
  return embed;
}

describe("success confirmation", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    global.fetch = okFetch() as never;
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.restoreAllMocks();
  });

  it("shows a checkmark and acknowledgement after a message is sent", async () => {
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => {
      expect(overlay.querySelector(".qaid-confirm")).not.toBeNull();
    });

    expect(overlay.querySelector(".qaid-confirm-title")!.textContent).toBe("Thank you!");
    expect(overlay.querySelector(".qaid-confirm-message")!.textContent).toBe(
      "Your feedback has been received."
    );
    expect(overlay.querySelector(".qaid-confirm-icon svg")).not.toBeNull();
  });

  it("keeps the modal up rather than vanishing", async () => {
    mount();
    await submitFeedback();

    await vi.waitFor(() => {
      expect(getOverlayShadowRoot().querySelector(".qaid-confirm")).not.toBeNull();
    });
    // The container is still mounted — this is the regression that motivated
    // the screen: submitting used to remove it outright.
    expect(
      getOverlayShadowRoot().querySelector(".qaid-modal-container, .qaid-bottom-sheet")
    ).not.toBeNull();
  });

  it("dismisses when the close button is used", async () => {
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm")).not.toBeNull());

    overlay.querySelector<HTMLButtonElement>(".qaid-confirm-close")!.click();

    await vi.waitFor(() => {
      expect(overlay.querySelector(".qaid-modal-container")).toBeNull();
    });
  });

  it("moves focus to the heading so it is not lost with the submit button", async () => {
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm")).not.toBeNull());

    const title = overlay.querySelector<HTMLElement>(".qaid-confirm-title")!;
    expect(title.getAttribute("tabindex")).toBe("-1");
    await vi.waitFor(() => expect(overlay.activeElement).toBe(title));
  });

  it("honours custom confirmation copy", async () => {
    mount({
      text: {
        confirmationTitle: "Qapla'!",
        confirmationMessage: "Your report brings honour.",
        confirmationClose: "Dismiss",
      },
    });
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm")).not.toBeNull());

    expect(overlay.querySelector(".qaid-confirm-title")!.textContent).toBe("Qapla'!");
    expect(overlay.querySelector(".qaid-confirm-message")!.textContent).toBe(
      "Your report brings honour."
    );
    expect(overlay.querySelector(".qaid-confirm-close")!.textContent).toBe("Dismiss");
  });

  it("closes straight away when hideConfirmation is set", async () => {
    mount({ hideConfirmation: true });
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => {
      expect(overlay.querySelector(".qaid-modal-container")).toBeNull();
    });
    expect(overlay.querySelector(".qaid-confirm")).toBeNull();
  });

  it("does not claim success when the message could not be sent", async () => {
    // POST succeeds so the modal opens, then the PATCH rejects.
    let call = 0;
    global.fetch = vi.fn().mockImplementation(() => {
      call += 1;
      if (call === 1) return Promise.resolve({ ok: true, status: 200, json: async () => ({ id: 7 }) });
      return Promise.reject(new Error("offline"));
    }) as never;
    vi.spyOn(console, "error").mockImplementation(() => {});

    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => {
      expect(overlay.querySelector(".qaid-modal-container")).toBeNull();
    });
    // Telling someone their feedback was received when it was not would be a lie.
    expect(overlay.querySelector(".qaid-confirm")).toBeNull();
  });
});

describe("script tag data attributes", () => {
  afterEach(() => {
    document
      .querySelectorAll("script[data-endpoint], [data-qaid-embed], [data-qaid-embed-overlay]")
      .forEach((el) => el.remove());
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  function scriptWith(attrs: Record<string, string>) {
    const script = document.createElement("script");
    script.setAttribute("data-endpoint", "/api/feedback");
    for (const [k, v] of Object.entries(attrs)) script.setAttribute(k, v);
    document.body.appendChild(script);
    return script;
  }

  it("maps data-hide-confirmation and the confirmation copy onto config", async () => {
    const { parseDataAttributes } = await import("./bootstrap");
    const config = parseDataAttributes(
      scriptWith({
        "data-hide-confirmation": "true",
        "data-confirmation-title": "All set",
        "data-confirmation-message": "We got it.",
        "data-confirmation-close": "Bye",
      })
    );

    expect(config?.hideConfirmation).toBe(true);
    expect(config?.text?.confirmationTitle).toBe("All set");
    expect(config?.text?.confirmationMessage).toBe("We got it.");
    expect(config?.text?.confirmationClose).toBe("Bye");
  });

  it("leaves hideConfirmation unset when the attribute is absent", async () => {
    const { parseDataAttributes } = await import("./bootstrap");
    // Absent means "use the default", which is now to show the screen.
    expect(parseDataAttributes(scriptWith({}))?.hideConfirmation).toBeUndefined();
  });

  it("opts out end-to-end through auto-init", async () => {
    global.fetch = okFetch() as never;
    scriptWith({ "data-skip-targeting": "true", "data-hide-confirmation": "true" });

    const { autoInit } = await import("./bootstrap");
    autoInit();
    await vi.waitFor(() => expect(document.querySelector("[data-qaid-embed]")).not.toBeNull());

    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-modal-container")).toBeNull());
    expect(overlay.querySelector(".qaid-confirm")).toBeNull();
  });
});
