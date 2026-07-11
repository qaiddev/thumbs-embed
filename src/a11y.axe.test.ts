import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import axe from "axe-core";
import { QaidFeedback } from "./embed";
import { _resetStylesState } from "./styles";
import { AnnotationEditor } from "./annotate";
import { applyDialog } from "./a11y";

/**
 * Automated axe-core regression net for the thumbs embed.
 *
 * LIMITATION — no layout in jsdom/happy-dom: the test DOM performs no real
 * layout or painting, so any axe rule that depends on computed geometry or
 * rendered colour cannot produce a trustworthy result here. We therefore
 * disable the purely visual/geometric rules (`color-contrast`,
 * `target-size`) and keep the rules that ARE meaningful without a browser:
 * roles, accessible names, aria-* attribute validity, required-owned/required-
 * attr relationships, aria-allowed-attr/role, and duplicate-id. Colour
 * contrast and target size are covered separately in a real browser (see the
 * accessibility plan's P2 contrast/target-size items).
 */
const AXE_OPTIONS: axe.RunOptions = {
  rules: {
    // Layout/paint dependent — not resolvable without a rendering engine.
    "color-contrast": { enabled: false },
    "target-size": { enabled: false },
  },
  // Only report actual failures; we don't need passes/incomplete noise.
  resultTypes: ["violations"],
};

function getHost(selector: string): HTMLElement {
  const host = document.querySelector<HTMLElement>(selector);
  if (!host) throw new Error(`host ${selector} not found`);
  return host;
}

function summarizeViolations(violations: axe.Result[]): string {
  return violations
    .map(
      (v) =>
        `${v.id} (${v.impact}): ${v.nodes.length} node(s) — ${v.help}`
    )
    .join("\n");
}

describe("axe-core accessibility (thumbs embed)", () => {
  let embed: QaidFeedback;

  beforeEach(() => {
    document.body.innerHTML = "";
    _resetStylesState();
  });

  afterEach(() => {
    if (embed) embed.destroy();
    document.body.innerHTML = "";
    _resetStylesState();
  });

  it("has zero axe violations for the resting button cluster", async () => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", captureVideo: true });

    // Pass the shadow host as context; axe traverses the open shadow root.
    const results = await axe.run(getHost("[data-qaid-embed]"), AXE_OPTIONS);

    expect(
      results.violations,
      `axe violations:\n${summarizeViolations(results.violations)}`
    ).toEqual([]);
  });

  it("has zero axe violations for the open comment modal", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 1 }),
    });
    global.fetch = fetchMock as unknown as typeof fetch;

    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      skipTargeting: true,
    });

    const shadow = getHost("[data-qaid-embed]").shadowRoot!;
    shadow.querySelector<HTMLButtonElement>(".qaid-btn-up")?.click();

    // Wait for the positioned modal (or bottom sheet) to render.
    await vi.waitFor(() => {
      const overlay = getHost("[data-qaid-embed-overlay]").shadowRoot!;
      expect(
        overlay.querySelector(".qaid-modal-container, .qaid-bottom-sheet")
      ).not.toBeNull();
    });

    const results = await axe.run(
      getHost("[data-qaid-embed-overlay]"),
      AXE_OPTIONS
    );

    expect(
      results.violations,
      `axe violations:\n${summarizeViolations(results.violations)}`
    ).toEqual([]);
  });

  it("has zero axe violations for the screenshot annotation editor", async () => {
    const host = document.createElement("div");
    host.setAttribute("data-qaid-embed-overlay", "");
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: "open" });

    const editor = new AnnotationEditor({
      dataUrl: "data:image/webp;base64,xxx",
      root: shadow,
      // Wire real dialog semantics so the container gets an accessible name.
      openDialog: (container, opts) => applyDialog(container, opts),
      closeDialog: () => {},
    });
    const result = editor.open();

    const results = await axe.run(host, AXE_OPTIONS);

    expect(
      results.violations,
      `axe violations:\n${summarizeViolations(results.violations)}`
    ).toEqual([]);

    // Resolve the pending editor promise and tear it down.
    editor.skip();
    await result;
    host.remove();
  });
});
