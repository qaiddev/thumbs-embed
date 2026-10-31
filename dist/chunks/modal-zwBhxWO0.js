import { b as u, T as h, d as p, F as b, D as f, E as g } from "./core-2nGsCcZq.js";
import { h as i } from "./dom-DvdtcUS8.js";
class k {
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
      i(
        "div",
        { class: "qaid-bottom-sheet-content" },
        i("div", { class: "qaid-bottom-sheet-handle" }),
        this.buildModalContent()
      )
    ), this.host.applyVars(e), t.appendChild(e), this.modalContainer = e, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.host.ensureOverlayHost(), { modal: e, arrow: s } = u(
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
    const o = document.createElement("div");
    o.className = "qaid-modal-arrow", o.style.left = `${s.left}px`;
    const a = document.createElement("div");
    a.className = "qaid-modal-box", a.appendChild(this.buildModalContent()), this.modalContainer.appendChild(o), this.modalContainer.appendChild(a), this.host.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
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
    const { config: t, uid: e } = this.host, s = t.text, o = this.host.feedbackData.feedbackType, a = o === "up", n = t.positiveIcon || h, d = t.negativeIcon || p, l = t.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${t.buttonClass} ${a ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${a ? "qaid-type-up" : "qaid-type-down"}`, r = a ? "Feedback type: positive" : "Feedback type: negative", m = o === "neutral" ? i("span", {
      class: "qaid-type-static",
      html: t.feedbackIcon || b,
      attrs: { "aria-hidden": "true" }
    }) : i("button", {
      class: l,
      html: a ? n : d,
      attrs: {
        type: "button",
        title: "Click to switch",
        "aria-pressed": String(a),
        "aria-label": r
      }
    }), c = document.createDocumentFragment();
    return c.append(
      i(
        "div",
        { class: "qaid-modal-header" },
        m,
        i(
          "div",
          { class: "qaid-modal-header-text" },
          i("h3", {
            class: "qaid-modal-title",
            text: s.modalTitle,
            attrs: { id: `qaid-modal-title-${e}` }
          }),
          i("p", {
            class: "qaid-modal-subtitle",
            text: s.modalSubtitle,
            attrs: { id: `qaid-modal-subtitle-${e}` }
          })
        )
      ),
      i("textarea", {
        class: "qaid-textarea",
        attrs: { "aria-label": s.modalSubtitle, placeholder: s.placeholder }
      }),
      i(
        "div",
        { class: "qaid-btn-row" },
        i("button", {
          class: "qaid-btn-submit",
          text: s.skipButton,
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
      const o = t?.value.trim() || null;
      this.submitMessage(o);
    });
    const s = this.modalContainer.querySelector(".qaid-type-toggle");
    s && s.addEventListener("click", () => {
      const o = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = o, this.host.config.buttonClass ? (s.classList.toggle("qaid-btn-up", o === "up"), s.classList.toggle("qaid-btn-down", o === "down")) : (s.classList.toggle("qaid-type-up", o === "up"), s.classList.toggle("qaid-type-down", o === "down"));
      const a = this.host.config.positiveIcon || h, n = this.host.config.negativeIcon || p;
      s.innerHTML = o === "up" ? a : n;
      const d = o === "up" ? "Feedback type: positive" : "Feedback type: negative";
      s.setAttribute("aria-pressed", String(o === "up")), s.setAttribute("aria-label", d), this.host.announceMsg(d), this.host.whenFeedbackId().then((l) => {
        l && fetch(`${this.host.config.endpoint}/${l}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ feedbackType: o })
        }).catch((r) => console.error("Failed to update feedback type:", r));
      });
    });
  }
  async submitMessage(t) {
    let e = null;
    this.finalized = !0;
    const s = await this.host.whenFeedbackId();
    if (s)
      try {
        const o = await fetch(`${this.host.config.endpoint}/${s}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        });
        e = o.ok, o.ok || console.error("Failed to submit feedback message: HTTP", o.status);
      } catch (o) {
        console.error("Failed to submit feedback message:", o), e = !1;
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
    const s = this.host.config.text, o = t ? s.confirmationTitle : s.errorTitle, a = t ? s.confirmationMessage : s.errorMessage, n = i("h3", {
      class: "qaid-confirm-title",
      text: o,
      attrs: { id: `qaid-confirm-title-${this.host.uid}`, tabindex: "-1" }
    });
    e.textContent = "", e.appendChild(
      i(
        "div",
        { class: t ? "qaid-confirm" : "qaid-confirm qaid-confirm-error" },
        i("span", {
          class: "qaid-confirm-icon",
          html: t ? f : g,
          attrs: { "aria-hidden": "true" }
        }),
        n,
        i("p", { class: "qaid-confirm-message", text: a }),
        i("button", {
          class: "qaid-btn-submit qaid-confirm-close",
          text: s.confirmationClose,
          attrs: { type: "button" },
          on: { click: () => this.close() }
        })
      )
    ), requestAnimationFrame(() => n.focus()), this.host.announceMsg(`${o} ${a}`, !0);
  }
}
export {
  k as ModalController
};
//# sourceMappingURL=modal-zwBhxWO0.js.map
