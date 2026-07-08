import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  announce,
  getFocusable,
  createFocusTrap,
  saveFocus,
  restoreFocus,
  applyDialog,
  setBackgroundInert,
} from "./a11y";

function makeButton(label: string): HTMLButtonElement {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = label;
  return b;
}

function tabEvent(shift = false): KeyboardEvent {
  return new KeyboardEvent("keydown", {
    key: "Tab",
    shiftKey: shift,
    bubbles: true,
    cancelable: true,
  });
}

describe("a11y", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("announce", () => {
    let root: HTMLDivElement;

    beforeEach(() => {
      root = document.createElement("div");
      document.body.appendChild(root);
    });

    it("lazily creates a polite status region and writes the message", () => {
      announce(root, "Feedback sent");

      const region = root.querySelector('[role="status"]');
      expect(region).not.toBeNull();
      expect(region!.getAttribute("aria-live")).toBe("polite");
      expect(region!.textContent).toBe("Feedback sent");
    });

    it("lazily creates an assertive alert region when opts.assertive", () => {
      announce(root, "Upload failed", { assertive: true });

      const region = root.querySelector('[role="alert"]');
      expect(region).not.toBeNull();
      expect(region!.getAttribute("aria-live")).toBe("assertive");
      expect(region!.textContent).toBe("Upload failed");
      // Did not create a polite region for an assertive-only announcement.
      expect(root.querySelector('[role="status"]')).toBeNull();
    });

    it("renders regions visually hidden but present in the DOM", () => {
      announce(root, "hi");
      const region = root.querySelector<HTMLElement>('[role="status"]')!;
      expect(region.style.position).toBe("absolute");
      expect(region.style.width).toBe("1px");
      expect(region.style.height).toBe("1px");
      expect(region.style.overflow).toBe("hidden");
    });

    it("reuses the same region across repeated calls", () => {
      announce(root, "one");
      announce(root, "two");
      const regions = root.querySelectorAll('[role="status"]');
      expect(regions).toHaveLength(1);
      expect(regions[0].textContent).toBe("two");
    });

    it("re-announces an identical message by clearing first", () => {
      const region = () =>
        root.querySelector<HTMLElement>('[role="status"]')!;
      announce(root, "same");
      expect(region().textContent).toBe("same");
      // Simulate SR having read it, then announce the identical string again.
      announce(root, "same");
      expect(region().textContent).toBe("same");
      // Only one region exists (no duplicate created on repeat).
      expect(root.querySelectorAll('[role="status"]')).toHaveLength(1);
    });

    it("keeps polite and assertive as separate independent regions", () => {
      announce(root, "polite msg");
      announce(root, "assertive msg", { assertive: true });
      expect(
        root.querySelector('[role="status"]')!.textContent
      ).toBe("polite msg");
      expect(
        root.querySelector('[role="alert"]')!.textContent
      ).toBe("assertive msg");
    });

    it("works when the root is a shadow root", () => {
      const host = document.createElement("div");
      document.body.appendChild(host);
      const shadow = host.attachShadow({ mode: "open" });

      announce(shadow, "in shadow");

      const region = shadow.querySelector('[role="status"]');
      expect(region).not.toBeNull();
      expect(region!.textContent).toBe("in shadow");
    });
  });

  describe("getFocusable", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });

    it("returns buttons, links, inputs and textareas in DOM order", () => {
      const btn = makeButton("b");
      const link = document.createElement("a");
      link.href = "#x";
      const input = document.createElement("input");
      const textarea = document.createElement("textarea");
      container.append(btn, link, input, textarea);

      const focusable = getFocusable(container);
      expect(focusable).toEqual([btn, link, input, textarea]);
    });

    it("includes elements with a non-negative tabindex", () => {
      const div = document.createElement("div");
      div.setAttribute("tabindex", "0");
      container.appendChild(div);
      expect(getFocusable(container)).toEqual([div]);
    });

    it("excludes elements with tabindex=-1", () => {
      const btn = makeButton("b");
      btn.setAttribute("tabindex", "-1");
      container.appendChild(btn);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes disabled controls", () => {
      const btn = makeButton("b");
      btn.disabled = true;
      const input = document.createElement("input");
      input.setAttribute("disabled", "");
      container.append(btn, input);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes anchors without href", () => {
      const link = document.createElement("a");
      link.textContent = "no href";
      container.appendChild(link);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes an anchor that is selectable via tabindex but has no href", () => {
      // The anchor matches the [tabindex] selector (so it reaches the filter),
      // but a hrefless <a> is not keyboard-actionable and must be dropped.
      const link = document.createElement("a");
      link.setAttribute("tabindex", "0");
      link.textContent = "not really a link";
      container.appendChild(link);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes hidden inputs", () => {
      const input = document.createElement("input");
      input.type = "hidden";
      container.appendChild(input);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes elements hidden via the hidden attribute", () => {
      const btn = makeButton("b");
      btn.hidden = true;
      container.appendChild(btn);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes elements hidden by an inline display:none ancestor", () => {
      const wrapper = document.createElement("div");
      wrapper.style.display = "none";
      const btn = makeButton("b");
      wrapper.appendChild(btn);
      container.appendChild(wrapper);
      expect(getFocusable(container)).toEqual([]);
    });

    it("excludes elements with visibility:hidden", () => {
      const btn = makeButton("b");
      btn.style.visibility = "hidden";
      container.appendChild(btn);
      expect(getFocusable(container)).toEqual([]);
    });
  });

  describe("createFocusTrap", () => {
    let container: HTMLDivElement;
    let first: HTMLButtonElement;
    let middle: HTMLButtonElement;
    let last: HTMLButtonElement;

    beforeEach(() => {
      container = document.createElement("div");
      first = makeButton("first");
      middle = makeButton("middle");
      last = makeButton("last");
      container.append(first, middle, last);
      document.body.appendChild(container);
    });

    it("focuses the first focusable element on creation", () => {
      const trap = createFocusTrap(container);
      expect(document.activeElement).toBe(first);
      trap.release();
    });

    it("wraps Tab from the last element back to the first", () => {
      const trap = createFocusTrap(container);
      last.focus();
      const ev = tabEvent(false);
      last.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(first);
      trap.release();
    });

    it("wraps Shift+Tab from the first element to the last", () => {
      const trap = createFocusTrap(container);
      first.focus();
      const ev = tabEvent(true);
      first.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(last);
      trap.release();
    });

    it("does not intercept Tab in the middle of the list", () => {
      const trap = createFocusTrap(container);
      middle.focus();
      const ev = tabEvent(false);
      middle.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(middle);
      trap.release();
    });

    it("pulls focus back into the trap when focus escaped (Tab)", () => {
      const trap = createFocusTrap(container);
      const outside = makeButton("outside");
      document.body.appendChild(outside);
      outside.focus();
      const ev = tabEvent(false);
      // The trap listens on the container, so dispatch there.
      container.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(first);
      trap.release();
    });

    it("ignores non-Tab keys", () => {
      const trap = createFocusTrap(container);
      last.focus();
      const ev = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
      });
      last.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(last);
      trap.release();
    });

    it("focuses the container itself when there are no focusables", () => {
      const empty = document.createElement("div");
      document.body.appendChild(empty);
      const trap = createFocusTrap(empty);
      expect(empty.getAttribute("tabindex")).toBe("-1");
      expect(document.activeElement).toBe(empty);

      // Tab is pinned to the container.
      const ev = tabEvent(false);
      empty.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(empty);

      trap.release();
      // The tabindex we added is cleaned up on release.
      expect(empty.hasAttribute("tabindex")).toBe(false);
    });

    it("does not add tabindex when the empty container already has one", () => {
      const empty = document.createElement("div");
      empty.setAttribute("tabindex", "0");
      document.body.appendChild(empty);
      const trap = createFocusTrap(empty);
      expect(empty.getAttribute("tabindex")).toBe("0");
      trap.release();
      // Pre-existing tabindex is preserved.
      expect(empty.getAttribute("tabindex")).toBe("0");
    });

    it("stops trapping after release", () => {
      const trap = createFocusTrap(container);
      trap.release();
      last.focus();
      const ev = tabEvent(false);
      last.dispatchEvent(ev);
      expect(ev.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(last);
    });
  });

  describe("saveFocus / restoreFocus", () => {
    afterEach(() => {
      document.body.innerHTML = "";
    });

    it("captures the currently focused element", () => {
      const btn = makeButton("b");
      document.body.appendChild(btn);
      btn.focus();
      expect(saveFocus()).toBe(btn);
    });

    it("restores focus to a saved element", () => {
      const a = makeButton("a");
      const b = makeButton("b");
      document.body.append(a, b);
      a.focus();
      const saved = saveFocus();
      b.focus();
      expect(document.activeElement).toBe(b);
      restoreFocus(saved);
      expect(document.activeElement).toBe(a);
    });

    it("drills through an open shadow root when saving", () => {
      const host = document.createElement("div");
      document.body.appendChild(host);
      const shadow = host.attachShadow({ mode: "open" });
      const inner = makeButton("inner");
      shadow.appendChild(inner);
      inner.focus();
      expect(saveFocus()).toBe(inner);
    });

    it("restoreFocus(null) is a no-op and does not throw", () => {
      expect(() => restoreFocus(null)).not.toThrow();
    });

    it("restoreFocus tolerates a detached element", () => {
      const btn = makeButton("b");
      // Never attached to the document.
      expect(() => restoreFocus(btn)).not.toThrow();
    });
  });

  describe("applyDialog", () => {
    it("sets role=dialog and aria-modal=true", () => {
      const el = document.createElement("div");
      applyDialog(el);
      expect(el.getAttribute("role")).toBe("dialog");
      expect(el.getAttribute("aria-modal")).toBe("true");
      expect(el.hasAttribute("aria-labelledby")).toBe(false);
      expect(el.hasAttribute("aria-describedby")).toBe(false);
      expect(el.hasAttribute("aria-label")).toBe(false);
    });

    it("wires aria-labelledby and aria-describedby from ids", () => {
      const el = document.createElement("div");
      applyDialog(el, { labelledbyId: "title-1", describedbyId: "desc-1" });
      expect(el.getAttribute("aria-labelledby")).toBe("title-1");
      expect(el.getAttribute("aria-describedby")).toBe("desc-1");
    });

    it("falls back to aria-label", () => {
      const el = document.createElement("div");
      applyDialog(el, { label: "Feedback" });
      expect(el.getAttribute("aria-label")).toBe("Feedback");
    });
  });

  describe("setBackgroundInert", () => {
    afterEach(() => {
      document.body.innerHTML = "";
    });

    it("inerts every top-level sibling but not the kept element", () => {
      const dialog = document.createElement("div");
      const sib1 = document.createElement("div");
      const sib2 = document.createElement("main");
      document.body.append(sib1, dialog, sib2);

      const restore = setBackgroundInert(dialog);

      expect(sib1.inert).toBe(true);
      expect(sib1.getAttribute("aria-hidden")).toBe("true");
      expect(sib2.inert).toBe(true);
      expect(sib2.getAttribute("aria-hidden")).toBe("true");
      // The dialog's own top-level element is left interactive.
      expect(dialog.inert).toBe(false);
      expect(dialog.hasAttribute("aria-hidden")).toBe(false);

      restore();
      expect(sib1.inert).toBe(false);
      expect(sib1.hasAttribute("aria-hidden")).toBe(false);
      expect(sib2.inert).toBe(false);
      expect(sib2.hasAttribute("aria-hidden")).toBe(false);
    });

    it("keeps the shadow host of a dialog nested in a shadow root", () => {
      const host = document.createElement("div");
      const other = document.createElement("div");
      document.body.append(host, other);
      const shadow = host.attachShadow({ mode: "open" });
      const dialog = document.createElement("div");
      shadow.appendChild(dialog);

      const restore = setBackgroundInert(dialog);

      expect(host.inert).toBe(false);
      expect(host.hasAttribute("aria-hidden")).toBe(false);
      expect(other.inert).toBe(true);
      expect(other.getAttribute("aria-hidden")).toBe("true");

      restore();
      expect(other.inert).toBe(false);
    });

    it("leaves an already-inert/hidden sibling untouched on restore", () => {
      const dialog = document.createElement("div");
      const preHidden = document.createElement("div");
      preHidden.inert = true;
      preHidden.setAttribute("aria-hidden", "true");
      document.body.append(dialog, preHidden);

      const restore = setBackgroundInert(dialog);
      // Still hidden while open.
      expect(preHidden.inert).toBe(true);
      expect(preHidden.getAttribute("aria-hidden")).toBe("true");

      restore();
      // Its pre-existing state is preserved, not cleared.
      expect(preHidden.inert).toBe(true);
      expect(preHidden.getAttribute("aria-hidden")).toBe("true");
    });

    it("preserves a pre-existing aria-hidden value on a sibling it inerts", () => {
      const dialog = document.createElement("div");
      const sib = document.createElement("div");
      // aria-hidden explicitly false, but not inert -> we will inert it.
      sib.setAttribute("aria-hidden", "false");
      document.body.append(dialog, sib);

      const restore = setBackgroundInert(dialog);
      expect(sib.inert).toBe(true);
      expect(sib.getAttribute("aria-hidden")).toBe("true");

      restore();
      expect(sib.inert).toBe(false);
      // The original aria-hidden="false" is restored, not removed.
      expect(sib.getAttribute("aria-hidden")).toBe("false");
    });

    it("keeps a dialog that is itself a direct body child", () => {
      const dialog = document.createElement("div");
      const sib = document.createElement("div");
      document.body.append(dialog, sib);

      const restore = setBackgroundInert(dialog);
      expect(dialog.inert).toBe(false);
      expect(sib.inert).toBe(true);
      restore();
    });

    it("inerts everything when the reference element is detached (no kept ancestor)", () => {
      // A detached element has no parent to walk, so topLevelAncestor resolves
      // to null and there is no top-level element to keep interactive.
      const sib1 = document.createElement("div");
      const sib2 = document.createElement("main");
      document.body.append(sib1, sib2);
      const detached = document.createElement("div"); // never appended

      const restore = setBackgroundInert(detached);
      expect(sib1.inert).toBe(true);
      expect(sib2.inert).toBe(true);

      restore();
      expect(sib1.inert).toBe(false);
      expect(sib2.inert).toBe(false);
    });

    it("inerts every child when the reference element is the body itself", () => {
      // Walking up from body exits immediately with no kept ancestor.
      const sib = document.createElement("div");
      document.body.append(sib);

      const restore = setBackgroundInert(document.body);
      expect(sib.inert).toBe(true);
      expect(sib.getAttribute("aria-hidden")).toBe("true");

      restore();
      expect(sib.inert).toBe(false);
      expect(sib.hasAttribute("aria-hidden")).toBe(false);
    });

    it("returns a callable no-op restore when the owner document has no body", () => {
      const el = document.createElement("div");
      // Simulate an element owned by a document without a <body> (e.g. a
      // detached/XML document): there is nothing to isolate.
      Object.defineProperty(el, "ownerDocument", {
        value: { body: null },
        configurable: true,
      });

      const restore = setBackgroundInert(el);
      expect(restore).toBeTypeOf("function");
      expect(() => restore()).not.toThrow();
    });

    it("skips a non-HTML (SVG) top-level element", () => {
      const dialog = document.createElement("div");
      const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const sib = document.createElement("div");
      document.body.append(dialog, svg, sib);

      const restore = setBackgroundInert(dialog);
      // The plain HTML sibling is isolated...
      expect(sib.inert).toBe(true);
      expect(sib.getAttribute("aria-hidden")).toBe("true");
      // ...but the SVG element (not an HTMLElement) is left untouched.
      expect((svg as unknown as { inert?: boolean }).inert).toBeFalsy();
      expect(svg.hasAttribute("aria-hidden")).toBe(false);

      restore();
      expect(sib.inert).toBe(false);
    });
  });
});
