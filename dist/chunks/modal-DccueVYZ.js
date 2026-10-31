import { b as p, T as h, d as m, F as b, D as u, E as g } from "./core-CL1dwdaN.js";
import { h as a } from "./dom-DvdtcUS8.js";
const q = ".qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-type-static{width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--qaid-marker, #6365f1);color:var(--qaid-marker-text, white)}.qaid-type-static svg{width:1.25rem;height:1.25rem}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:calc(var(--qaid-font-size, 16px) * 1.125);font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875)}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:var(--qaid-font-size, 16px);resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:calc(var(--qaid-font-size, 16px) * .875);font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}.qaid-confirm{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;padding:.5rem 0}.qaid-confirm-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;color:#fff;background:var(--qaid-success, #22c55e);margin-bottom:.25rem;animation:qaid-confirm-pop .28s cubic-bezier(.34,1.56,.64,1)}.qaid-confirm-icon .qaid-icon{width:24px;height:24px}.qaid-confirm-error .qaid-confirm-icon{background:var(--qaid-error, #dc2626)}.qaid-confirm-title{margin:0;font-size:var(--qaid-font-size, 16px);font-weight:600;color:var(--qaid-text, light-dark(#111827, #f9fafb))}.qaid-confirm-title:focus-visible{outline:2px solid var(--qaid-primary, #6365f1);outline-offset:3px;border-radius:4px}.qaid-confirm-message{margin:0;font-size:calc(var(--qaid-font-size, 16px) * .875);color:var(--qaid-text-muted, light-dark(#6b7280, #9ca3af))}.qaid-confirm .qaid-confirm-close{margin-top:.5rem;min-width:96px}@keyframes qaid-confirm-pop{0%{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){.qaid-confirm-icon{animation:none}}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible{outline:2px solid var(--qaid-marker, #6365f1);outline-offset:2px}@media(forced-colors:active){.qaid-textarea:focus,button.qaid-btn-submit:focus{outline:2px solid CanvasText;outline-offset:2px}}";
class v {
  constructor(t) {
    this.host = t;
  }
  host;
  modalContainer = null;
  backdrop = null;
  /** Set once the message is sent, so closing does not PATCH over it. */
  finalized = !1;
  open() {
    this.finalized = !1;
    const t = this.host.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.host.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.close()), this.host.applyVars(this.backdrop), this.host.isMobile ? this.showBottomSheet() : this.showPositionedModal(), t.appendChild(this.backdrop), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close() {
    this.host.state === "MODAL_OPEN" && !this.finalized && (this.finalized = !0, this.host.whenFeedbackId().then((t) => {
      t && fetch(`${this.host.config.endpoint}/${t}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: null })
      }).catch((e) => console.error("Failed to finalize feedback:", e));
    })), this.teardown(), this.host.resetFeedbackUi();
  }
  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy() {
    this.teardown();
  }
  teardown() {
    this.host.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  showBottomSheet() {
    const t = this.host.ensureOverlayHost(), e = document.createElement("div");
    e.className = "qaid-bottom-sheet", e.style.zIndex = String(this.host.config.zIndex + 3), e.appendChild(
      a(
        "div",
        { class: "qaid-bottom-sheet-content" },
        a("div", { class: "qaid-bottom-sheet-handle" }),
        this.buildModalContent()
      )
    ), this.host.applyVars(e), t.appendChild(e), this.modalContainer = e, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.host.ensureOverlayHost(), { modal: e, arrow: o } = p(
      this.host.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.host.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16
      }
    );
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${e.position}`, this.modalContainer.style.top = `${e.top}px`, this.modalContainer.style.left = `${e.left}px`, this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);
    const i = document.createElement("div");
    i.className = "qaid-modal-arrow", i.style.left = `${o.left}px`;
    const s = document.createElement("div");
    s.className = "qaid-modal-box", s.appendChild(this.buildModalContent()), this.modalContainer.appendChild(i), this.modalContainer.appendChild(s), this.host.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  /**
   * The modal's contents, built as nodes rather than an HTML string.
   *
   * Every piece of copy (title, subtitle, placeholder, button) goes in as
   * text, so a `<`, `&` or `"` in a translation shows as written instead of
   * being parsed as markup or cutting an attribute short. Only the icons are
   * markup, because they are documented as SVG/HTML strings.
   */
  buildModalContent() {
    const { config: t, uid: e } = this.host, o = t.text, i = this.host.feedbackData.feedbackType, s = i === "up", n = t.positiveIcon || h, r = t.negativeIcon || m, d = t.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${t.buttonClass} ${s ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${s ? "qaid-type-up" : "qaid-type-down"}`, l = s ? "Feedback type: positive" : "Feedback type: negative", f = i === "neutral" ? a("span", {
      class: "qaid-type-static",
      html: t.feedbackIcon || b,
      attrs: { "aria-hidden": "true" }
    }) : a("button", {
      class: d,
      html: s ? n : r,
      attrs: {
        type: "button",
        title: "Click to switch",
        "aria-pressed": String(s),
        "aria-label": l
      }
    }), c = document.createDocumentFragment();
    return c.append(
      a(
        "div",
        { class: "qaid-modal-header" },
        f,
        a(
          "div",
          { class: "qaid-modal-header-text" },
          a("h3", {
            class: "qaid-modal-title",
            text: o.modalTitle,
            attrs: { id: `qaid-modal-title-${e}` }
          }),
          a("p", {
            class: "qaid-modal-subtitle",
            text: o.modalSubtitle,
            attrs: { id: `qaid-modal-subtitle-${e}` }
          })
        )
      ),
      a("textarea", {
        class: "qaid-textarea",
        attrs: { "aria-label": o.modalSubtitle, placeholder: o.placeholder }
      }),
      a(
        "div",
        { class: "qaid-btn-row" },
        a("button", {
          class: "qaid-btn-submit",
          text: o.skipButton,
          attrs: { type: "button" }
        })
      )
    ), c;
  }
  setupModalInteractions() {
    this.host.openDialogA11y(this.modalContainer, {
      labelledbyId: `qaid-modal-title-${this.host.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.host.uid}`
    });
    const t = this.modalContainer.querySelector(".qaid-textarea"), e = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      e && (e.textContent = t.value.trim() ? this.host.config.text.submitButton : this.host.config.text.skipButton);
    })), e && e.addEventListener("click", () => {
      const i = t?.value.trim() || null;
      this.submitMessage(i);
    });
    const o = this.modalContainer.querySelector(".qaid-type-toggle");
    o && o.addEventListener("click", () => {
      const i = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = i, this.host.config.buttonClass ? (o.classList.toggle("qaid-btn-up", i === "up"), o.classList.toggle("qaid-btn-down", i === "down")) : (o.classList.toggle("qaid-type-up", i === "up"), o.classList.toggle("qaid-type-down", i === "down"));
      const s = this.host.config.positiveIcon || h, n = this.host.config.negativeIcon || m;
      o.innerHTML = i === "up" ? s : n;
      const r = i === "up" ? "Feedback type: positive" : "Feedback type: negative";
      o.setAttribute("aria-pressed", String(i === "up")), o.setAttribute("aria-label", r), this.host.announceMsg(r), this.host.whenFeedbackId().then((d) => {
        d && fetch(`${this.host.config.endpoint}/${d}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ feedbackType: i })
        }).catch((l) => console.error("Failed to update feedback type:", l));
      });
    });
  }
  async submitMessage(t) {
    let e = null;
    this.finalized = !0;
    const o = await this.host.whenFeedbackId();
    if (o)
      try {
        const i = await fetch(`${this.host.config.endpoint}/${o}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        });
        e = i.ok, i.ok || console.error("Failed to submit feedback message: HTTP", i.status);
      } catch (i) {
        console.error("Failed to submit feedback message:", i), e = !1;
      }
    if (e === !1) {
      this.showResult(!1);
      return;
    }
    if (e && !this.host.config.hideConfirmation) {
      this.showResult(!0);
      return;
    }
    this.close();
  }
  /**
   * Replace the modal's contents with the outcome: a checkmark and a short
   * acknowledgement, or an error mark and a "not sent" notice.
   *
   * The submit button that had focus is gone by this point, so focus moves to
   * the heading (WCAG 2.4.3) and the message is announced. Mirrors the quests
   * embed's thank-you screen so the two products confirm the same way. Copy
   * goes in as text, never markup.
   */
  showResult(t) {
    const e = this.modalContainer?.querySelector(".qaid-modal-box") ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content") ?? this.modalContainer;
    if (!e) {
      this.close();
      return;
    }
    const o = this.host.config.text, i = t ? o.confirmationTitle : o.errorTitle, s = t ? o.confirmationMessage : o.errorMessage, n = a("h3", {
      class: "qaid-confirm-title",
      text: i,
      attrs: { id: `qaid-confirm-title-${this.host.uid}`, tabindex: "-1" }
    });
    e.textContent = "", e.appendChild(
      a(
        "div",
        { class: t ? "qaid-confirm" : "qaid-confirm qaid-confirm-error" },
        a("span", {
          class: "qaid-confirm-icon",
          html: t ? u : g,
          attrs: { "aria-hidden": "true" }
        }),
        n,
        a("p", { class: "qaid-confirm-message", text: s }),
        a("button", {
          class: "qaid-btn-submit qaid-confirm-close",
          text: o.confirmationClose,
          attrs: { type: "button" },
          on: { click: () => this.close() }
        })
      )
    ), requestAnimationFrame(() => n.focus()), this.host.announceMsg(`${i} ${s}`, !0);
  }
}
const w = q;
export {
  v as ModalController,
  w as styles
};
//# sourceMappingURL=modal-DccueVYZ.js.map
