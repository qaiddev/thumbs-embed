/**
 * Modal copy is text, not markup.
 *
 * Up to 1.7.0 the title, subtitle, placeholder, button labels and the success
 * screen's strings were spliced into an HTML string. A `<` in a translation
 * was parsed as a tag and a `"` in the subtitle or placeholder cut the
 * attribute short. The icon options are documented as SVG/HTML strings and
 * must keep rendering as markup.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { QaidFeedback } from "./embed";
import type { FeedbackConfig } from "./types";

const HOSTILE = {
  modalTitle: '<img src="x" onerror="window.__qaidPwned = 1">Tell us & more',
  modalSubtitle: 'Say "hi" <b>now</b>',
  placeholder: 'Type "here" & <i>there</i>',
  skipButton: "<em>Skip</em>",
  submitButton: "<u>Send</u> & go",
  confirmationTitle: "<script>window.__qaidPwned = 1</script>Done",
  confirmationMessage: 'Got it <b>"all"</b> & more',
  confirmationClose: '"Close" <i>me</i>',
  errorTitle: "<h1>Oops</h1>",
  errorMessage: "Try <a href=\"#\">again</a> & again",
};

let embed: QaidFeedback | null = null;

function mainRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed]")!.shadowRoot!;
}
function overlayRoot(): ShadowRoot {
  return document.querySelector("[data-qaid-embed-overlay]")!.shadowRoot!;
}

/** Mount, click a thumb, and wait for the message step. */
async function openModal(config: Partial<FeedbackConfig> = {}): Promise<ShadowRoot> {
  embed = new QaidFeedback({
    endpoint: "/api/feedback",
    skipTargeting: true,
    text: HOSTILE,
    ...config,
  });
  const selector = config.singleButton ? ".qaid-btn-feedback" : ".qaid-btn-up";
  mainRoot().querySelector<HTMLButtonElement>(selector)!.click();
  await vi.waitFor(() => {
    expect(overlayRoot().querySelector(".qaid-modal-container, .qaid-bottom-sheet")).not.toBeNull();
  });
  return overlayRoot();
}

function expectCopyAsText(root: ShadowRoot): void {
  const title = root.querySelector(".qaid-modal-title")!;
  expect(title.textContent).toBe(HOSTILE.modalTitle);
  expect(title.querySelector("img")).toBeNull();

  const subtitle = root.querySelector(".qaid-modal-subtitle")!;
  expect(subtitle.textContent).toBe(HOSTILE.modalSubtitle);
  expect(subtitle.querySelector("b")).toBeNull();

  // A quote no longer ends the attribute early.
  const textarea = root.querySelector<HTMLTextAreaElement>(".qaid-textarea")!;
  expect(textarea.getAttribute("aria-label")).toBe(HOSTILE.modalSubtitle);
  expect(textarea.getAttribute("placeholder")).toBe(HOSTILE.placeholder);

  const button = root.querySelector<HTMLButtonElement>(".qaid-btn-submit")!;
  expect(button.textContent).toBe(HOSTILE.skipButton);
  expect(button.querySelector("em")).toBeNull();
}

describe("modal copy is inserted as text", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    delete (window as unknown as Record<string, unknown>).__qaidPwned;
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ id: 5 }),
    }) as never;
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.restoreAllMocks();
  });

  it("shows markup-like title, subtitle, placeholder and button copy literally", async () => {
    const root = await openModal();
    expectCopyAsText(root);
    expect((window as unknown as Record<string, unknown>).__qaidPwned).toBeUndefined();
  });

  it("does the same in the phone bottom sheet", async () => {
    const width = window.innerWidth;
    Object.defineProperty(window, "innerWidth", { value: 400, writable: true, configurable: true });
    try {
      const root = await openModal();
      expect(root.querySelector(".qaid-bottom-sheet .qaid-bottom-sheet-handle")).not.toBeNull();
      expectCopyAsText(root);
    } finally {
      Object.defineProperty(window, "innerWidth", { value: width, writable: true, configurable: true });
    }
  });

  it("swaps to the submit label as text once something is typed", async () => {
    const root = await openModal();
    const textarea = root.querySelector<HTMLTextAreaElement>(".qaid-textarea")!;
    textarea.value = "hello";
    textarea.dispatchEvent(new Event("input"));

    const button = root.querySelector<HTMLButtonElement>(".qaid-btn-submit")!;
    expect(button.textContent).toBe(HOSTILE.submitButton);
    expect(button.querySelector("u")).toBeNull();
  });

  it("shows the success screen's copy literally", async () => {
    const root = await openModal();
    root.querySelector<HTMLTextAreaElement>(".qaid-textarea")!.value = "A message";
    root.querySelector<HTMLButtonElement>(".qaid-btn-submit")!.click();

    await vi.waitFor(() => expect(root.querySelector(".qaid-confirm")).not.toBeNull());

    const title = root.querySelector(".qaid-confirm-title")!;
    expect(title.textContent).toBe(HOSTILE.confirmationTitle);
    expect(root.querySelector(".qaid-confirm script")).toBeNull();
    expect(root.querySelector(".qaid-confirm-message")!.textContent).toBe(
      HOSTILE.confirmationMessage
    );
    expect(root.querySelector(".qaid-confirm-message b")).toBeNull();
    const close = root.querySelector(".qaid-confirm-close")!;
    expect(close.textContent).toBe(HOSTILE.confirmationClose);
    expect(close.querySelector("i")).toBeNull();
    // The built-in check icon is still an SVG.
    expect(root.querySelector(".qaid-confirm-icon svg")).not.toBeNull();
    expect((window as unknown as Record<string, unknown>).__qaidPwned).toBeUndefined();
  });

  it("shows the error screen's copy literally", async () => {
    let call = 0;
    global.fetch = vi.fn().mockImplementation(() => {
      call += 1;
      return Promise.resolve(
        call === 1
          ? { ok: true, status: 200, json: async () => ({ id: 5 }) }
          : { ok: false, status: 500, json: async () => ({}) }
      );
    }) as never;
    vi.spyOn(console, "error").mockImplementation(() => {});

    const root = await openModal();
    root.querySelector<HTMLButtonElement>(".qaid-btn-submit")!.click();

    await vi.waitFor(() => expect(root.querySelector(".qaid-confirm-error")).not.toBeNull());
    expect(root.querySelector(".qaid-confirm-title")!.textContent).toBe(HOSTILE.errorTitle);
    expect(root.querySelector(".qaid-confirm h1")).toBeNull();
    expect(root.querySelector(".qaid-confirm-message")!.textContent).toBe(HOSTILE.errorMessage);
    expect(root.querySelector(".qaid-confirm a")).toBeNull();
  });
});

describe("icon options are still markup", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ id: 5 }),
    }) as never;
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
    vi.restoreAllMocks();
  });

  it("renders a custom positive icon as SVG on the modal toggle", async () => {
    const root = await openModal({
      positiveIcon: '<svg class="my-pos" viewBox="0 0 24 24"><path d="M0 0h24"/></svg>',
    });
    const toggle = root.querySelector<HTMLButtonElement>(".qaid-type-toggle")!;
    expect(toggle.querySelector("svg.my-pos")).not.toBeNull();
    expect(toggle.getAttribute("type")).toBe("button");
    expect(toggle.getAttribute("aria-pressed")).toBe("true");
    expect(toggle.getAttribute("aria-label")).toBe("Feedback type: positive");
    expect(toggle.getAttribute("title")).toBe("Click to switch");
  });

  it("renders a custom feedback icon as SVG in single-button mode", async () => {
    const root = await openModal({
      singleButton: true,
      feedbackIcon: '<svg class="my-fb" viewBox="0 0 24 24"></svg>',
    });
    const badge = root.querySelector(".qaid-type-static")!;
    expect(badge.getAttribute("aria-hidden")).toBe("true");
    expect(badge.querySelector("svg.my-fb")).not.toBeNull();
    expect(root.querySelector(".qaid-type-toggle")).toBeNull();
  });
});
