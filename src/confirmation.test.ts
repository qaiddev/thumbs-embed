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
    // Telling someone their feedback was received when it was not would be a
    // lie, and closing quietly reads the same way. Say it was not sent.
    await vi.waitFor(() => {
      expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull();
    });
    expect(overlay.querySelector(".qaid-confirm-title")!.textContent).toBe("Message not sent");
  });
});

describe("error screen when the server refuses the message", () => {
  // Held here because the embed's console capture wraps console.error once it
  // starts, so `console.error` itself is no longer the spy by assertion time.
  let errorSpy: ReturnType<typeof vi.spyOn>;

  /** POST yields an id so the modal opens; the PATCH answers `status`. */
  function refusingFetch(status: number) {
    let call = 0;
    return vi.fn().mockImplementation(() => {
      call += 1;
      if (call === 1) {
        return Promise.resolve({ ok: true, status: 200, json: async () => ({ id: 7 }) });
      }
      return Promise.resolve({ ok: false, status, json: async () => ({ error: "nope" }) });
    });
  }

  beforeEach(() => {
    document.body.innerHTML = "";
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.restoreAllMocks();
  });

  it.each([400, 403, 404, 413, 429, 500, 503])(
    "shows the error screen, not the success screen, on HTTP %i",
    async (status) => {
      global.fetch = refusingFetch(status) as never;
      mount();
      await submitFeedback();

      const overlay = getOverlayShadowRoot();
      await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull());

      expect(overlay.querySelector(".qaid-confirm-title")!.textContent).toBe("Message not sent");
      expect(overlay.querySelector(".qaid-confirm-message")!.textContent).toBe(
        "Something went wrong, so we did not get your message. Please try again later."
      );
      expect(overlay.querySelector(".qaid-confirm-icon svg")).not.toBeNull();
      // Nothing on screen says it was received.
      expect(overlay.textContent).not.toContain("Your feedback has been received.");
      expect(errorSpy).toHaveBeenCalledWith(
        "Failed to submit feedback message: HTTP",
        status
      );
    }
  );

  it("announces the failure and moves focus to its heading", async () => {
    global.fetch = refusingFetch(500) as never;
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull());

    const title = overlay.querySelector<HTMLElement>(".qaid-confirm-title")!;
    await vi.waitFor(() => expect(overlay.activeElement).toBe(title));
    await vi.waitFor(() =>
      expect(overlay.querySelector('[role="alert"]')?.textContent).toContain("Message not sent")
    );
  });

  it("shows even when hideConfirmation is set, which only hides the success screen", async () => {
    global.fetch = refusingFetch(403) as never;
    mount({ hideConfirmation: true });
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull());
  });

  it("honours custom error copy", async () => {
    global.fetch = refusingFetch(500) as never;
    mount({ text: { errorTitle: "No luck", errorMessage: "Try later.", confirmationClose: "OK" } });
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull());
    expect(overlay.querySelector(".qaid-confirm-title")!.textContent).toBe("No luck");
    expect(overlay.querySelector(".qaid-confirm-message")!.textContent).toBe("Try later.");
    expect(overlay.querySelector(".qaid-confirm-close")!.textContent).toBe("OK");
  });

  it("closes from its button without sending another PATCH", async () => {
    const fetchMock = refusingFetch(500);
    global.fetch = fetchMock as never;
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm-error")).not.toBeNull());
    overlay.querySelector<HTMLButtonElement>(".qaid-confirm-close")!.click();

    await vi.waitFor(() => expect(overlay.querySelector(".qaid-modal-container")).toBeNull());
    // One POST and the one refused PATCH; closing does not finalize again.
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("still shows the success screen on a 2xx other than 200", async () => {
    let call = 0;
    global.fetch = vi.fn().mockImplementation(() => {
      call += 1;
      if (call === 1) return Promise.resolve({ ok: true, status: 201, json: async () => ({ id: 7 }) });
      return Promise.resolve({ ok: true, status: 204, json: async () => ({}) });
    }) as never;
    mount();
    await submitFeedback();

    const overlay = getOverlayShadowRoot();
    await vi.waitFor(() => expect(overlay.querySelector(".qaid-confirm")).not.toBeNull());
    expect(overlay.querySelector(".qaid-confirm-error")).toBeNull();
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

  it("maps data-error-title and data-error-message onto config", async () => {
    const { parseDataAttributes } = await import("./bootstrap");
    const config = parseDataAttributes(
      scriptWith({
        "data-error-title": "Not sent",
        "data-error-message": "Please retry.",
      })
    );

    expect(config?.text?.errorTitle).toBe("Not sent");
    expect(config?.text?.errorMessage).toBe("Please retry.");
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

describe("destroyed mid-submit", () => {
  afterEach(() => {
    document
      .querySelectorAll("script[data-endpoint], [data-qaid-embed], [data-qaid-embed-overlay]")
      .forEach((el) => el.remove());
    vi.restoreAllMocks();
  });

  it("does not try to draw a success screen into a torn-down modal", async () => {
    // Hold the PATCH open so the embed can be destroyed while it is in flight.
    let releasePatch: (v: unknown) => void = () => {};
    let call = 0;
    global.fetch = vi.fn().mockImplementation(() => {
      call += 1;
      if (call === 1) {
        return Promise.resolve({ ok: true, status: 200, json: async () => ({ id: 7 }) });
      }
      return new Promise((resolve) => {
        releasePatch = resolve;
      });
    }) as never;

    const instance = new QaidFeedback({
      endpoint: "/api/feedback",
      skipTargeting: true,
    });

    const shadow = document.querySelector("[data-qaid-embed]")!.shadowRoot!;
    shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")!.click();

    const overlay = () => document.querySelector("[data-qaid-embed-overlay]")!.shadowRoot!;
    await vi.waitFor(() => {
      expect(overlay().querySelector(".qaid-modal-container, .qaid-bottom-sheet")).not.toBeNull();
    });
    overlay().querySelector<HTMLButtonElement>(".qaid-btn-submit")!.click();

    // The host tears the embed down before the request comes back.
    instance.destroy();
    releasePatch({ ok: true, status: 200, json: async () => ({}) });

    await vi.waitFor(() => expect(call).toBe(2));
    // No container to draw into, and nothing thrown.
    expect(document.querySelector("[data-qaid-embed-overlay]")?.shadowRoot
      ?.querySelector(".qaid-confirm") ?? null).toBeNull();
  });
});

describe("ModalController.showConfirmation with no container", () => {
  /**
   * Reached when the modal is torn down while its PATCH is still in flight —
   * the host destroys the embed, teardown nulls modalContainer, and the
   * request then resolves. Driven directly here because the timing is not
   * reliably reproducible through the click path.
   */
  it("closes instead of drawing into nothing", async () => {
    const { ModalController } = await import("./modal");

    const host = {
      config: {
        endpoint: "/api/feedback",
        text: {
          confirmationTitle: "Thank you!",
          confirmationMessage: "Your feedback has been received.",
          confirmationClose: "Close",
        },
        hideConfirmation: false,
      },
      uid: "u1",
      isMobile: false,
      state: "MODAL_OPEN",
      boundKeyDown: () => {},
      feedbackData: { feedbackType: "up" },
      selectedBounds: {},
      whenFeedbackId: () => Promise.resolve(7),
      ensureOverlayHost: vi.fn(),
      applyVars: vi.fn(),
      announceMsg: vi.fn(),
      openDialogA11y: vi.fn(),
      closeDialogA11y: vi.fn(),
      resetFeedbackUi: vi.fn(),
    };

    global.fetch = vi.fn().mockResolvedValue({ ok: true, status: 200 }) as never;

    // Never opened, so modalContainer is null — the same state teardown leaves.
    const controller = new ModalController(host as never);
    await (
      controller as unknown as { submitMessage(m: string | null): Promise<void> }
    ).submitMessage("hi");

    // It fell through to close() rather than throwing on a null container.
    expect(host.resetFeedbackUi).toHaveBeenCalled();
    expect(host.announceMsg).not.toHaveBeenCalled();
  });
});
