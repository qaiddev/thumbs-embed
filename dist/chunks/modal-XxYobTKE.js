import { c as u } from "./loader-XbJ2b8KE.js";
import { h as i } from "./dom-DvdtcUS8.js";
import { T as r, a as h, F as b, D as f, E as g } from "./annotate-D-o8xCV9.js";
class v {
  constructor(t) {
    this.host = t;
  }
  host;
  modalContainer = null;
  backdrop = null;
  open() {
    const t = this.host.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.host.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.close()), this.host.applyVars(this.backdrop), this.host.isMobile ? this.showBottomSheet() : this.showPositionedModal(), t.appendChild(this.backdrop), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close() {
    this.host.state === "MODAL_OPEN" && this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: null })
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.teardown(), this.host.resetFeedbackUi();
  }
  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy() {
    this.teardown();
  }
  teardown() {
    this.host.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  showBottomSheet() {
    const t = this.host.ensureOverlayHost(), o = document.createElement("div");
    o.className = "qaid-bottom-sheet", o.style.zIndex = String(this.host.config.zIndex + 3), o.appendChild(
      i(
        "div",
        { class: "qaid-bottom-sheet-content" },
        i("div", { class: "qaid-bottom-sheet-handle" }),
        this.buildModalContent()
      )
    ), this.host.applyVars(o), t.appendChild(o), this.modalContainer = o, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.host.ensureOverlayHost(), { modal: o, arrow: e } = u(
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
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${o.position}`, this.modalContainer.style.top = `${o.top}px`, this.modalContainer.style.left = `${o.left}px`, this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);
    const s = document.createElement("div");
    s.className = "qaid-modal-arrow", s.style.left = `${e.left}px`;
    const a = document.createElement("div");
    a.className = "qaid-modal-box", a.appendChild(this.buildModalContent()), this.modalContainer.appendChild(s), this.modalContainer.appendChild(a), this.host.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
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
    const { config: t, uid: o } = this.host, e = t.text, s = this.host.feedbackData.feedbackType, a = s === "up", n = t.positiveIcon || r, d = t.negativeIcon || h, l = t.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${t.buttonClass} ${a ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${a ? "qaid-type-up" : "qaid-type-down"}`, p = a ? "Feedback type: positive" : "Feedback type: negative", m = s === "neutral" ? i("span", {
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
        "aria-label": p
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
            text: e.modalTitle,
            attrs: { id: `qaid-modal-title-${o}` }
          }),
          i("p", {
            class: "qaid-modal-subtitle",
            text: e.modalSubtitle,
            attrs: { id: `qaid-modal-subtitle-${o}` }
          })
        )
      ),
      i("textarea", {
        class: "qaid-textarea",
        attrs: { "aria-label": e.modalSubtitle, placeholder: e.placeholder }
      }),
      i(
        "div",
        { class: "qaid-btn-row" },
        i("button", {
          class: "qaid-btn-submit",
          text: e.skipButton,
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
    const t = this.modalContainer.querySelector(".qaid-textarea"), o = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      o && (o.textContent = t.value.trim() ? this.host.config.text.submitButton : this.host.config.text.skipButton);
    })), o && o.addEventListener("click", () => {
      const s = t?.value.trim() || null;
      this.submitMessage(s);
    });
    const e = this.modalContainer.querySelector(".qaid-type-toggle");
    e && e.addEventListener("click", () => {
      const s = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = s, this.host.config.buttonClass ? (e.classList.toggle("qaid-btn-up", s === "up"), e.classList.toggle("qaid-btn-down", s === "down")) : (e.classList.toggle("qaid-type-up", s === "up"), e.classList.toggle("qaid-type-down", s === "down"));
      const a = this.host.config.positiveIcon || r, n = this.host.config.negativeIcon || h;
      e.innerHTML = s === "up" ? a : n;
      const d = s === "up" ? "Feedback type: positive" : "Feedback type: negative";
      e.setAttribute("aria-pressed", String(s === "up")), e.setAttribute("aria-label", d), this.host.announceMsg(d), this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: s })
      }).catch((l) => console.error("Failed to update feedback type:", l));
    });
  }
  async submitMessage(t) {
    let o = null;
    if (this.host.feedbackId) {
      try {
        const e = await fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        });
        o = e.ok, e.ok || console.error("Failed to submit feedback message: HTTP", e.status);
      } catch (e) {
        console.error("Failed to submit feedback message:", e), o = !1;
      }
      this.host.setFeedbackId(null);
    }
    if (o === !1) {
      this.showResult(!1);
      return;
    }
    if (o && !this.host.config.hideConfirmation) {
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
    const o = this.modalContainer?.querySelector(".qaid-modal-box") ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content") ?? this.modalContainer;
    if (!o) {
      this.close();
      return;
    }
    const e = this.host.config.text, s = t ? e.confirmationTitle : e.errorTitle, a = t ? e.confirmationMessage : e.errorMessage, n = i("h3", {
      class: "qaid-confirm-title",
      text: s,
      attrs: { id: `qaid-confirm-title-${this.host.uid}`, tabindex: "-1" }
    });
    o.textContent = "", o.appendChild(
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
          text: e.confirmationClose,
          attrs: { type: "button" },
          on: { click: () => this.close() }
        })
      )
    ), requestAnimationFrame(() => n.focus()), this.host.announceMsg(`${s} ${a}`, !0);
  }
}
export {
  v as ModalController
};
//# sourceMappingURL=modal-XxYobTKE.js.map
