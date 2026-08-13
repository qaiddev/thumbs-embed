import { g as k, c as T, b as m } from "./annotate-CMq95aXG.js";
const E = ["data-comp", "data-qa", "data-testid", "data-id"];
function C(s, t = document.body) {
  let e = s;
  for (; e && e !== t; ) {
    for (const n of E) {
      const o = e.getAttribute(n);
      if (o)
        return `${n}="${o}"`;
    }
    e = e.parentElement;
  }
  return null;
}
function L(s, t = 100) {
  const e = s.textContent?.trim().slice(0, t) || "";
  return e.length === t ? e + "..." : e;
}
function A(s) {
  let t = 1, e = s.previousElementSibling;
  for (; e; )
    t++, e = e.previousElementSibling;
  return t;
}
function q(s) {
  const t = [];
  let e = s;
  for (; e && e !== document.body && e !== document.documentElement; ) {
    const n = e.tagName.toLowerCase(), o = A(e);
    t.unshift(`${n}:nth-child(${o})`), e = e.parentElement;
  }
  return t.length > 0 ? `body > ${t.join(" > ")}` : "body";
}
function w(s) {
  return s.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function P(s) {
  const t = C(s);
  return t ? `[${t}]` : s.id ? `#${w(s.id)}` : q(s);
}
function g(s) {
  const t = L(s), e = C(s);
  return { selector: P(s), text: t, dataAttr: e };
}
const $ = [
  "a[href]",
  "button",
  "input:not([type=hidden])",
  "select",
  "textarea",
  "summary",
  "[tabindex]",
  "[role]",
  "img",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "label",
  ...E.map((s) => `[${s}]`)
].join(","), D = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function B(s) {
  if (s.hasAttribute("hidden") || s.getAttribute("aria-hidden") === "true") return !1;
  const t = s.ownerDocument?.defaultView;
  if (t && typeof t.getComputedStyle == "function") {
    const e = t.getComputedStyle(s);
    if (e.display === "none" || e.visibility === "hidden") return !1;
  }
  return !0;
}
function V(s = {}) {
  const t = s.root ?? document.body, e = s.selector ?? $, n = s.isExcluded ?? (() => !1), o = s.isVisible ?? B;
  return Array.from(t.querySelectorAll(e)).filter(
    (r) => !n(r) && o(r)
  );
}
function H(s) {
  const t = s.candidates ?? V({
    root: s.root,
    selector: s.selector,
    isExcluded: s.isExcluded,
    isVisible: s.isVisible
  }), e = s.moveFocus ?? !0, n = s.eventTarget ?? document, o = /* @__PURE__ */ new Set();
  let r = -1, a = !1;
  const l = s.initial !== void 0 ? s.initial : typeof document < "u" ? document.activeElement : null;
  if (l) {
    const i = t.indexOf(l);
    i >= 0 && (r = i);
  }
  r < 0 && t.length > 0 && (r = 0);
  function S(i) {
    if (!e) return;
    const h = i;
    if (typeof h.focus == "function") {
      i.getAttribute("tabindex") === null && !D.test(i.tagName) && (i.setAttribute("tabindex", "-1"), o.add(i));
      try {
        h.focus();
      } catch {
      }
    }
  }
  function f() {
    const i = t[r];
    i && (S(i), s.onHighlight?.(i, r));
  }
  function c(i) {
    if (a || t.length === 0) return;
    const h = t.length;
    r = (i % h + h) % h, f();
  }
  function d() {
    c(r + 1);
  }
  function u() {
    c(r - 1);
  }
  function v() {
    return t[r] ?? null;
  }
  function y() {
    a || (a = !0, n.removeEventListener("keydown", p, !0), o.forEach((i) => i.removeAttribute("tabindex")), o.clear());
  }
  function b() {
    if (a) return;
    const i = v();
    y(), i && s.onSelect(i);
  }
  function x() {
    a || (y(), s.onCancel?.());
  }
  function p(i) {
    if (!a)
      switch (i.key) {
        case "Tab":
          i.preventDefault(), i.stopPropagation(), i.shiftKey ? u() : d();
          break;
        case "ArrowDown":
        case "ArrowRight":
          i.preventDefault(), i.stopPropagation(), d();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          i.preventDefault(), i.stopPropagation(), u();
          break;
        case "Enter":
        case " ":
        case "Spacebar":
          i.preventDefault(), i.stopPropagation(), b();
          break;
        case "Escape":
        case "Esc":
          i.preventDefault(), i.stopPropagation(), x();
          break;
      }
  }
  return n.addEventListener("keydown", p, !0), r >= 0 && f(), {
    candidates: t,
    getIndex: () => r,
    getCurrent: v,
    next: d,
    prev: u,
    moveTo: c,
    select: b,
    cancel: x,
    handleKey: p,
    stop: y
  };
}
const M = 12;
class O {
  constructor(t) {
    this.host = t;
  }
  host;
  mousePos = { x: 0, y: 0 };
  touchStartPos = null;
  overlayContainer = null;
  captureLayer = null;
  crosshairH = null;
  crosshairV = null;
  scope = null;
  highlightBox = null;
  marker = null;
  keyboardController = null;
  boundMouseMove = (t) => this.handleMouseMove(t);
  boundClick = (t) => this.handleClick(t);
  boundTouchStart = (t) => this.handleTouchStart(t);
  boundTouchEnd = (t) => this.handleTouchEnd(t);
  startPointer(t, e) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = t, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, this.mousePos.x = e.clientX, this.mousePos.y = e.clientY, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.host.boundKeyDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("click", this.boundClick, !0), document.addEventListener("touchstart", this.boundTouchStart, { passive: !0 }), document.addEventListener("touchend", this.boundTouchEnd, { passive: !1 });
  }
  /**
   * Keyboard-driven targeting. Mirrors startPointer minus the mouse plumbing:
   * no `qaid-targeting` body class (keeps the cursor visible for keyboard
   * users), no mouse reticle, and no document mouse/click listeners. The
   * KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
   */
  startKeyboard(t) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = t, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = H({
      isExcluded: (e) => m(e),
      onHighlight: (e) => {
        const n = e.getBoundingClientRect(), o = this.highlightBox;
        o && (o.style.transform = `translate(${n.left}px, ${n.top}px)`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, o.style.display = "block");
        const { text: r } = g(e);
        this.host.announceMsg(`Targeting ${r || e.tagName.toLowerCase()}`);
      },
      onSelect: (e) => this.selectKeyboardTarget(e),
      onCancel: () => this.cancel()
    });
  }
  selectKeyboardTarget(t) {
    const e = k(t, 8);
    Object.assign(this.host.selectedBounds, e, {
      clickX: e.x + e.width / 2,
      clickY: e.y + e.height / 2,
      visible: !0
    });
    const { selector: n, text: o } = g(t);
    this.host.feedbackData.elementSelector = n, this.host.feedbackData.elementText = o, this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.keyboardController = null, this.host.clearActiveThumb(), this.host.setState("SELECTED"), this.showSelectedMarker(), this.host.submitFeedback();
  }
  createTargetingOverlay() {
    const t = this.host.ensureOverlayHost();
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.host.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer";
    const e = document.createElement("div");
    e.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope", this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `, this.highlightBox = document.createElement("div"), this.highlightBox.className = "qaid-highlight-box", this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(e), this.overlayContainer.appendChild(this.highlightBox), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.crosshairH.style.top = `${this.mousePos.y}px`, this.crosshairV.style.left = `${this.mousePos.x}px`, this.scope.style.left = `${this.mousePos.x}px`, this.scope.style.top = `${this.mousePos.y}px`, this.host.applyVars(this.overlayContainer), t.appendChild(this.overlayContainer);
  }
  handleMouseMove(t) {
    this.updateReticleAt(t.clientX, t.clientY);
  }
  /** Move the crosshair/scope reticle and highlight the element under (x, y). */
  updateReticleAt(t, e) {
    if (this.mousePos.x = t, this.mousePos.y = e, this.crosshairH && (this.crosshairH.style.top = `${e}px`), this.crosshairV && (this.crosshairV.style.left = `${t}px`), this.scope && (this.scope.style.left = `${t}px`, this.scope.style.top = `${e}px`), this.captureLayer && this.host.shadowHost) {
      const n = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), o = T(t, e, n);
      if (o && !m(o)) {
        if (this.highlightBox) {
          const r = o.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${r.left}px, ${r.top}px)`, this.highlightBox.style.width = `${r.width}px`, this.highlightBox.style.height = `${r.height}px`, this.highlightBox.style.display = "block";
        }
      } else this.highlightBox && (this.highlightBox.style.display = "none");
    }
  }
  handleClick(t) {
    t.preventDefault(), t.stopPropagation(), this.selectAt(t.clientX, t.clientY);
  }
  // ---- Touch targeting (iOS/iPadOS) ----
  handleTouchStart(t) {
    const e = t.touches[0];
    e && (this.touchStartPos = { x: e.clientX, y: e.clientY }, this.updateReticleAt(e.clientX, e.clientY));
  }
  handleTouchEnd(t) {
    const e = t.changedTouches[0], n = this.touchStartPos;
    this.touchStartPos = null, !(!e || !n || Math.hypot(e.clientX - n.x, e.clientY - n.y) > M) && (t.preventDefault(), this.selectAt(e.clientX, e.clientY));
  }
  /** Select the element under (x, y) and tear down targeting. */
  selectAt(t, e) {
    const n = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), o = T(t, e, n);
    if (!o || m(o))
      return;
    const r = k(o, 8);
    Object.assign(this.host.selectedBounds, r, { clickX: t, clickY: e, visible: !0 });
    const { selector: a, text: l } = g(o);
    this.host.feedbackData.elementSelector = a, this.host.feedbackData.elementText = l, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.setState("SELECTED"), this.host.clearActiveThumb(), this.showSelectedMarker(), this.host.submitFeedback();
  }
  stopTargetingListeners() {
    this.removeTargetingOverlay(), this.touchStartPos = null, document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("touchstart", this.boundTouchStart), document.removeEventListener("touchend", this.boundTouchEnd), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  cancel() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.clearActiveThumb(), this.host.setState("IDLE"), this.host.feedbackData.feedbackType = null, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    const t = this.host.ensureOverlayHost();
    this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.host.selectedBounds.x}px`, this.marker.style.top = `${this.host.selectedBounds.y}px`, this.marker.style.width = `${this.host.selectedBounds.width}px`, this.marker.style.height = `${this.host.selectedBounds.height}px`, this.marker.style.zIndex = String(this.host.config.zIndex + 1), this.host.applyVars(this.marker), t.appendChild(this.marker);
  }
  hideMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  /** Full teardown for embed.destroy(). */
  destroy() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), this.hideMarker();
  }
}
export {
  O as TargetingController
};
//# sourceMappingURL=targeting-1pK6nJI9.js.map
