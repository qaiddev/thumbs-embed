import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  DATA_ATTRS,
  findDataAttribute,
  getTruncatedText,
  generateSelector,
  generateElementInfo,
  generateNthChildPath,
  TARGETABLE_SELECTOR,
  isElementVisible,
  collectTargetableElements,
  startKeyboardTargeting,
  type KeyboardTargetingController,
} from "./element-selector";

describe("element-selector", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  describe("DATA_ATTRS", () => {
    it("should have the expected data attributes in priority order", () => {
      expect(DATA_ATTRS).toEqual([
        "data-comp",
        "data-qa",
        "data-testid",
        "data-id",
      ]);
    });
  });

  describe("findDataAttribute", () => {
    it("should return null when no data attribute is found", () => {
      const el = document.createElement("div");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBeNull();
    });

    it("should find data-comp attribute on element", () => {
      const el = document.createElement("div");
      el.setAttribute("data-comp", "MyComponent");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBe('data-comp="MyComponent"');
    });

    it("should find data-testid attribute on element", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "test-button");
      container.appendChild(el);
      expect(findDataAttribute(el)).toBe('data-testid="test-button"');
    });

    it("should find data attribute on ancestor", () => {
      const parent = document.createElement("div");
      parent.setAttribute("data-qa", "parent-qa");
      const child = document.createElement("span");
      parent.appendChild(child);
      container.appendChild(parent);

      expect(findDataAttribute(child)).toBe('data-qa="parent-qa"');
    });

    it("should prefer closer ancestor data attributes", () => {
      const grandparent = document.createElement("div");
      grandparent.setAttribute("data-testid", "grandparent");
      const parent = document.createElement("div");
      parent.setAttribute("data-testid", "parent");
      const child = document.createElement("span");

      grandparent.appendChild(parent);
      parent.appendChild(child);
      container.appendChild(grandparent);

      expect(findDataAttribute(child)).toBe('data-testid="parent"');
    });

    it("should respect priority order of data attributes", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "test");
      el.setAttribute("data-comp", "comp");
      container.appendChild(el);

      // data-comp has higher priority than data-testid
      expect(findDataAttribute(el)).toBe('data-comp="comp"');
    });

    it("should stop at the specified stopAt element", () => {
      const outer = document.createElement("div");
      outer.setAttribute("data-testid", "outer");
      const inner = document.createElement("div");
      const child = document.createElement("span");

      outer.appendChild(inner);
      inner.appendChild(child);
      container.appendChild(outer);

      // Stop at inner, should not find outer's data attribute
      expect(findDataAttribute(child, inner)).toBeNull();
    });
  });

  describe("getTruncatedText", () => {
    it("should return empty string for element with no text", () => {
      const el = document.createElement("div");
      expect(getTruncatedText(el)).toBe("");
    });

    it("should return trimmed text for short content", () => {
      const el = document.createElement("div");
      el.textContent = "  Hello World  ";
      expect(getTruncatedText(el)).toBe("Hello World");
    });

    it("should truncate text longer than maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(150);
      const result = getTruncatedText(el, 100);
      expect(result).toBe("A".repeat(100) + "...");
    });

    it("should not add ellipsis for text exactly at maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(100);
      const result = getTruncatedText(el, 100);
      expect(result).toBe("A".repeat(100) + "...");
    });

    it("should use custom maxLength", () => {
      const el = document.createElement("div");
      el.textContent = "A".repeat(50);
      const result = getTruncatedText(el, 20);
      expect(result).toBe("A".repeat(20) + "...");
    });
  });

  describe("generateNthChildPath", () => {
    it("should generate path for single element", () => {
      const el = document.createElement("div");
      container.appendChild(el);
      const path = generateNthChildPath(el);
      expect(path).toMatch(/^body > div:nth-child\(\d+\) > div:nth-child\(1\)$/);
    });

    it("should generate path for nested elements", () => {
      const parent = document.createElement("section");
      const child = document.createElement("p");
      parent.appendChild(child);
      container.appendChild(parent);

      const path = generateNthChildPath(child);
      expect(path).toContain("section:nth-child");
      expect(path).toContain("p:nth-child(1)");
    });

    it("should correctly index siblings", () => {
      const first = document.createElement("span");
      const second = document.createElement("span");
      const third = document.createElement("span");
      container.appendChild(first);
      container.appendChild(second);
      container.appendChild(third);

      expect(generateNthChildPath(first)).toContain("span:nth-child(1)");
      expect(generateNthChildPath(second)).toContain("span:nth-child(2)");
      expect(generateNthChildPath(third)).toContain("span:nth-child(3)");
    });

    it("should produce valid CSS selector", () => {
      const el = document.createElement("button");
      el.className = "text-[9px] hover:bg-blue"; // Problematic Tailwind classes
      container.appendChild(el);

      const path = generateNthChildPath(el);
      // Should not throw when used as selector
      expect(() => document.querySelector(path)).not.toThrow();
      expect(document.querySelector(path)).toBe(el);
    });

    it("should return 'body' when called on document.body itself", () => {
      expect(generateNthChildPath(document.body)).toBe("body");
    });

    it("should return 'body' when called on document.documentElement", () => {
      expect(generateNthChildPath(document.documentElement)).toBe("body");
    });
  });

  describe("generateSelector", () => {
    it("should return data attribute selector when available", () => {
      const el = document.createElement("div");
      el.setAttribute("data-testid", "my-button");
      container.appendChild(el);
      expect(generateSelector(el)).toBe('[data-testid="my-button"]');
    });

    it("should return ID selector when no data attribute", () => {
      const el = document.createElement("div");
      el.id = "unique-id";
      container.appendChild(el);
      expect(generateSelector(el)).toBe("#unique-id");
    });

    it("should return nth-child path when no ID or data attribute", () => {
      const el = document.createElement("button");
      el.className = "primary-btn hover:bg-blue";
      container.appendChild(el);
      const selector = generateSelector(el);
      expect(selector).toContain("body >");
      expect(selector).toContain("button:nth-child");
    });

    it("should handle elements with problematic class names", () => {
      const el = document.createElement("span");
      el.className = "text-[9px] lg:block hover:text-white";
      container.appendChild(el);
      const selector = generateSelector(el);
      // Should produce valid selector
      expect(() => document.querySelector(selector)).not.toThrow();
      expect(document.querySelector(selector)).toBe(el);
    });

    it("should prefer data attribute over ID", () => {
      const el = document.createElement("div");
      el.id = "my-id";
      el.setAttribute("data-comp", "MyComp");
      container.appendChild(el);
      expect(generateSelector(el)).toBe('[data-comp="MyComp"]');
    });

    it("should escape special characters in IDs", () => {
      const el = document.createElement("div");
      el.id = "my:special[id]";
      container.appendChild(el);
      const selector = generateSelector(el);
      expect(() => document.querySelector(selector)).not.toThrow();
    });
  });

  describe("generateElementInfo", () => {
    it("should return complete element info", () => {
      const el = document.createElement("button");
      el.setAttribute("data-testid", "submit-btn");
      el.textContent = "Submit Form";
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info).toEqual({
        selector: '[data-testid="submit-btn"]',
        text: "Submit Form",
        dataAttr: 'data-testid="submit-btn"',
      });
    });

    it("should handle element with no data attribute", () => {
      const el = document.createElement("div");
      el.id = "content";
      el.textContent = "Some content";
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info).toEqual({
        selector: "#content",
        text: "Some content",
        dataAttr: null,
      });
    });

    it("should truncate long text content", () => {
      const el = document.createElement("p");
      el.textContent = "X".repeat(200);
      container.appendChild(el);

      const info = generateElementInfo(el);
      expect(info.text).toBe("X".repeat(100) + "...");
    });
  });

  describe("isElementVisible", () => {
    it("returns true for a plain visible element", () => {
      const el = document.createElement("div");
      container.appendChild(el);
      expect(isElementVisible(el)).toBe(true);
    });

    it("returns false when the hidden attribute is set", () => {
      const el = document.createElement("div");
      el.setAttribute("hidden", "");
      container.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    it("returns false when aria-hidden is true", () => {
      const el = document.createElement("div");
      el.setAttribute("aria-hidden", "true");
      container.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    it("returns false when display is none", () => {
      const el = document.createElement("div");
      el.style.display = "none";
      container.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });

    it("returns false when visibility is hidden", () => {
      const el = document.createElement("div");
      el.style.visibility = "hidden";
      container.appendChild(el);
      expect(isElementVisible(el)).toBe(false);
    });
  });

  describe("TARGETABLE_SELECTOR", () => {
    it("includes focusable, semantic, and data-attribute selectors", () => {
      expect(TARGETABLE_SELECTOR).toContain("button");
      expect(TARGETABLE_SELECTOR).toContain("[role]");
      expect(TARGETABLE_SELECTOR).toContain("[data-testid]");
    });

    it("is a selector that querySelectorAll accepts without throwing", () => {
      expect(() =>
        document.querySelectorAll(TARGETABLE_SELECTOR)
      ).not.toThrow();
    });
  });

  describe("collectTargetableElements", () => {
    it("collects targetable elements within a root", () => {
      const btn = document.createElement("button");
      const heading = document.createElement("h2");
      const plainSpan = document.createElement("span"); // not targetable
      container.append(btn, heading, plainSpan);

      const found = collectTargetableElements({ root: container });
      expect(found).toContain(btn);
      expect(found).toContain(heading);
      expect(found).not.toContain(plainSpan);
    });

    it("preserves document order", () => {
      const first = document.createElement("button");
      const second = document.createElement("a");
      second.setAttribute("href", "#");
      container.append(first, second);

      const found = collectTargetableElements({ root: container });
      expect(found.indexOf(first)).toBeLessThan(found.indexOf(second));
    });

    it("drops elements rejected by isExcluded", () => {
      const keep = document.createElement("button");
      const drop = document.createElement("button");
      drop.setAttribute("data-embed", "");
      container.append(keep, drop);

      const found = collectTargetableElements({
        root: container,
        isExcluded: (el) => el.hasAttribute("data-embed"),
      });
      expect(found).toContain(keep);
      expect(found).not.toContain(drop);
    });

    it("drops elements rejected by isVisible", () => {
      const visible = document.createElement("button");
      const invisible = document.createElement("button");
      invisible.setAttribute("hidden", "");
      container.append(visible, invisible);

      const found = collectTargetableElements({ root: container });
      expect(found).toContain(visible);
      expect(found).not.toContain(invisible);
    });

    it("honors a custom selector", () => {
      const a = document.createElement("div");
      a.className = "pick-me";
      const b = document.createElement("div");
      container.append(a, b);

      const found = collectTargetableElements({
        root: container,
        selector: ".pick-me",
      });
      expect(found).toEqual([a]);
    });

    it("defaults its root to document.body", () => {
      const btn = document.createElement("button");
      btn.id = "collect-default-root";
      container.appendChild(btn);
      const found = collectTargetableElements();
      expect(found).toContain(btn);
    });
  });

  describe("startKeyboardTargeting", () => {
    let controller: KeyboardTargetingController | null = null;

    function makeCandidates(count: number): HTMLElement[] {
      const els: HTMLElement[] = [];
      for (let i = 0; i < count; i++) {
        const btn = document.createElement("button");
        btn.textContent = `Candidate ${i}`;
        container.appendChild(btn);
        els.push(btn);
      }
      return els;
    }

    function press(
      key: string,
      init: KeyboardEventInit = {},
      dispatchOn: EventTarget = document
    ): KeyboardEvent {
      const event = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
        ...init,
      });
      dispatchOn.dispatchEvent(event);
      return event;
    }

    afterEach(() => {
      controller?.stop();
      controller = null;
    });

    it("starts on the first candidate when nothing is focused", () => {
      const els = makeCandidates(3);
      (document.activeElement as HTMLElement | null)?.blur?.();
      controller = startKeyboardTargeting({
        candidates: els,
        onSelect: () => {},
      });
      expect(controller.getIndex()).toBe(0);
      expect(controller.getCurrent()).toBe(els[0]);
    });

    it("seeds the highlight from document.activeElement when it is a candidate", () => {
      const els = makeCandidates(3);
      els[2].focus();
      controller = startKeyboardTargeting({
        candidates: els,
        onSelect: () => {},
      });
      expect(controller.getCurrent()).toBe(els[2]);
    });

    it("honors an explicit initial element", () => {
      const els = makeCandidates(3);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[1],
        onSelect: () => {},
      });
      expect(controller.getCurrent()).toBe(els[1]);
    });

    it("falls back to the first candidate when initial is not a candidate", () => {
      const els = makeCandidates(3);
      const outsider = document.createElement("button");
      container.appendChild(outsider);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: outsider,
        onSelect: () => {},
      });
      expect(controller.getIndex()).toBe(0);
    });

    it("emits an initial highlight synchronously", () => {
      const els = makeCandidates(2);
      const onHighlight = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onHighlight,
        onSelect: () => {},
      });
      expect(onHighlight).toHaveBeenCalledWith(els[0], 0);
    });

    it("moves to the next candidate on Tab and ArrowDown/ArrowRight", () => {
      const els = makeCandidates(3);
      const onHighlight = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onHighlight,
        onSelect: () => {},
      });

      press("Tab");
      expect(controller.getCurrent()).toBe(els[1]);
      press("ArrowDown");
      expect(controller.getCurrent()).toBe(els[2]);
      press("ArrowRight");
      expect(controller.getCurrent()).toBe(els[0]); // wraps
      expect(onHighlight).toHaveBeenLastCalledWith(els[0], 0);
    });

    it("moves to the previous candidate on Shift+Tab and ArrowUp/ArrowLeft", () => {
      const els = makeCandidates(3);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect: () => {},
      });

      press("Tab", { shiftKey: true });
      expect(controller.getCurrent()).toBe(els[2]); // wraps backwards
      press("ArrowUp");
      expect(controller.getCurrent()).toBe(els[1]);
      press("ArrowLeft");
      expect(controller.getCurrent()).toBe(els[0]);
    });

    it("wraps via moveTo for out-of-range indices", () => {
      const els = makeCandidates(3);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect: () => {},
      });
      controller.moveTo(5); // 5 % 3 === 2
      expect(controller.getCurrent()).toBe(els[2]);
      controller.moveTo(-1);
      expect(controller.getCurrent()).toBe(els[2]);
    });

    it("selects the current candidate on Enter and stops", () => {
      const els = makeCandidates(3);
      const onSelect = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[1],
        onSelect,
      });
      press("Enter");
      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onSelect).toHaveBeenCalledWith(els[1]);

      // Listener removed: further keys are ignored.
      press("Tab");
      expect(controller.getCurrent()).toBe(els[1]);
    });

    it("selects on Space", () => {
      const els = makeCandidates(2);
      const onSelect = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
      });
      press(" ");
      expect(onSelect).toHaveBeenCalledWith(els[0]);
    });

    it("cancels on Escape and does not select", () => {
      const els = makeCandidates(2);
      const onSelect = vi.fn();
      const onCancel = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
        onCancel,
      });
      press("Escape");
      expect(onCancel).toHaveBeenCalledTimes(1);
      expect(onSelect).not.toHaveBeenCalled();
    });

    it("prevents default and stops propagation for handled keys", () => {
      const els = makeCandidates(2);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect: () => {},
      });
      const tab = press("Tab");
      expect(tab.defaultPrevented).toBe(true);
      const esc = press("Escape");
      expect(esc.defaultPrevented).toBe(true);
    });

    it("ignores unrelated keys", () => {
      const els = makeCandidates(2);
      const onSelect = vi.fn();
      const onCancel = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
        onCancel,
      });
      const other = press("a");
      expect(other.defaultPrevented).toBe(false);
      expect(controller.getCurrent()).toBe(els[0]);
      expect(onSelect).not.toHaveBeenCalled();
      expect(onCancel).not.toHaveBeenCalled();
    });

    it("moves native focus to the highlighted candidate", () => {
      const els = makeCandidates(3);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect: () => {},
      });
      expect(document.activeElement).toBe(els[0]);
      controller.next();
      expect(document.activeElement).toBe(els[1]);
    });

    it("makes non-focusable content focusable with a temporary tabindex and cleans it up", () => {
      const p = document.createElement("p");
      p.textContent = "A paragraph";
      container.appendChild(p);
      controller = startKeyboardTargeting({
        candidates: [p],
        initial: p,
        onSelect: () => {},
      });
      expect(p.getAttribute("tabindex")).toBe("-1");
      controller.stop();
      expect(p.hasAttribute("tabindex")).toBe(false);
    });

    it("does not add a tabindex to natively focusable elements", () => {
      const els = makeCandidates(1);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect: () => {},
      });
      expect(els[0].hasAttribute("tabindex")).toBe(false);
    });

    it("preserves an author-provided tabindex", () => {
      const div = document.createElement("div");
      div.setAttribute("tabindex", "0");
      container.appendChild(div);
      controller = startKeyboardTargeting({
        candidates: [div],
        initial: div,
        onSelect: () => {},
      });
      controller.stop();
      expect(div.getAttribute("tabindex")).toBe("0");
    });

    it("does not move focus when moveFocus is false", () => {
      const els = makeCandidates(2);
      (document.activeElement as HTMLElement | null)?.blur?.();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        moveFocus: false,
        onSelect: () => {},
      });
      expect(document.activeElement).not.toBe(els[0]);
    });

    it("collects candidates itself when none are provided", () => {
      const btn = document.createElement("button");
      btn.id = "self-collect";
      container.appendChild(btn);
      controller = startKeyboardTargeting({
        root: container,
        initial: btn,
        onSelect: () => {},
      });
      expect(controller.candidates).toContain(btn);
      expect(controller.getCurrent()).toBe(btn);
    });

    it("handles an empty candidate list without throwing", () => {
      const onSelect = vi.fn();
      const onCancel = vi.fn();
      controller = startKeyboardTargeting({
        candidates: [],
        onSelect,
        onCancel,
      });
      expect(controller.getIndex()).toBe(-1);
      expect(controller.getCurrent()).toBeNull();
      controller.next();
      controller.prev();
      controller.moveTo(0);
      press("Enter"); // no current → no onSelect
      expect(onSelect).not.toHaveBeenCalled();
      // A fresh controller can still cancel cleanly.
      controller = startKeyboardTargeting({
        candidates: [],
        onSelect,
        onCancel,
      });
      press("Escape");
      expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it("stop() is idempotent and detaches the listener", () => {
      const els = makeCandidates(2);
      const onSelect = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
      });
      controller.stop();
      controller.stop(); // no throw
      press("Enter");
      expect(onSelect).not.toHaveBeenCalled();
    });

    it("select() and cancel() are no-ops after stop()", () => {
      const els = makeCandidates(2);
      const onSelect = vi.fn();
      const onCancel = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
        onCancel,
      });
      controller.stop();
      controller.select();
      controller.cancel();
      expect(onSelect).not.toHaveBeenCalled();
      expect(onCancel).not.toHaveBeenCalled();
    });

    it("highlights a candidate whose focus is not callable without throwing", () => {
      const els = makeCandidates(1);
      // A candidate whose `focus` was clobbered (e.g. an exotic host object)
      // must still highlight — focusCurrent bails on the non-callable focus.
      (els[0] as unknown as { focus: unknown }).focus = null;
      const onHighlight = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onHighlight,
        onSelect: () => {},
      });
      expect(onHighlight).toHaveBeenCalledWith(els[0], 0);
    });

    it("skips the highlight when the resolved candidate is missing", () => {
      const el = makeCandidates(1)[0];
      // A sparse candidate list: navigating onto the empty slot emits nothing.
      const els = [el, undefined as unknown as Element];
      const onHighlight = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: el,
        onHighlight,
        onSelect: () => {},
      });
      expect(onHighlight).toHaveBeenCalledTimes(1);
      controller.moveTo(1); // valid index, but candidates[1] is undefined
      expect(onHighlight).toHaveBeenCalledTimes(1); // no extra highlight
    });

    it("ignores forwarded keydown events after the controller has stopped", () => {
      const els = makeCandidates(3);
      const onSelect = vi.fn();
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        onSelect,
      });
      controller.stop();
      // Forwarding an event directly bypasses the (now removed) listener, so
      // handleKey must guard on `stopped` itself.
      controller.handleKey(
        new KeyboardEvent("keydown", { key: "ArrowDown", cancelable: true })
      );
      controller.handleKey(
        new KeyboardEvent("keydown", { key: "Enter", cancelable: true })
      );
      expect(controller.getCurrent()).toBe(els[0]); // unchanged
      expect(onSelect).not.toHaveBeenCalled();
    });

    it("routes forwarded keydown events via handleKey", () => {
      const els = makeCandidates(3);
      controller = startKeyboardTargeting({
        candidates: els,
        initial: els[0],
        eventTarget: container, // not document
        onSelect: () => {},
      });
      // Direct forwarding still works even though the listener is on container.
      controller.handleKey(
        new KeyboardEvent("keydown", { key: "ArrowDown", cancelable: true })
      );
      expect(controller.getCurrent()).toBe(els[1]);
    });
  });
});
