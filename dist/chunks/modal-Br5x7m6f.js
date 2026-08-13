import { c as h } from "./loader-CYM1rxDH.js";
import { T as d, a as c, F as r, D as p } from "./annotate-CMq95aXG.js";
class f {
  constructor(e) {
    this.host = e;
  }
  host;
  modalContainer = null;
  backdrop = null;
  open() {
    const e = this.host.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.host.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.close()), this.host.applyVars(this.backdrop), this.host.isMobile ? this.showBottomSheet() : this.showPositionedModal(), e.appendChild(this.backdrop), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close() {
    this.host.state === "MODAL_OPEN" && this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: null })
    }).catch((e) => console.error("Failed to finalize feedback:", e)), this.teardown(), this.host.resetFeedbackUi();
  }
  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy() {
    this.teardown();
  }
  teardown() {
    this.host.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  showBottomSheet() {
    const e = this.host.ensureOverlayHost(), t = document.createElement("div");
    t.className = "qaid-bottom-sheet", t.style.zIndex = String(this.host.config.zIndex + 3), t.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.host.applyVars(t), e.appendChild(t), this.modalContainer = t, this.setupModalInteractions();
  }
  showPositionedModal() {
    const e = this.host.ensureOverlayHost(), { modal: t, arrow: i } = h(
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
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${t.position}`, this.modalContainer.style.top = `${t.top}px`, this.modalContainer.style.left = `${t.left}px`, this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);
    const o = document.createElement("div");
    o.className = "qaid-modal-arrow", o.style.left = `${i.left}px`;
    const s = document.createElement("div");
    s.className = "qaid-modal-box", s.innerHTML = this.getModalContent(), this.modalContainer.appendChild(o), this.modalContainer.appendChild(s), this.host.applyVars(this.modalContainer), e.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const e = this.host.feedbackData.feedbackType, t = e === "up", i = this.host.config.positiveIcon || d, o = this.host.config.negativeIcon || c, s = this.host.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.host.config.buttonClass} ${t ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${t ? "qaid-type-up" : "qaid-type-down"}`;
    return `
      <div class="qaid-modal-header">
        ${e === "neutral" ? `<span class="qaid-type-static" aria-hidden="true">${this.host.config.feedbackIcon || r}</span>` : `<button type="button" class="${s}" title="Click to switch" aria-pressed="${t}" aria-label="${t ? "Feedback type: positive" : "Feedback type: negative"}">
          ${t ? i : o}
        </button>`}
        <div class="qaid-modal-header-text">
          <h3 class="qaid-modal-title" id="qaid-modal-title-${this.host.uid}">${this.host.config.text.modalTitle}</h3>
          <p class="qaid-modal-subtitle" id="qaid-modal-subtitle-${this.host.uid}">${this.host.config.text.modalSubtitle}</p>
        </div>
      </div>
      <textarea class="qaid-textarea" aria-label="${this.host.config.text.modalSubtitle}" placeholder="${this.host.config.text.placeholder}"></textarea>
      <div class="qaid-btn-row">
        <button type="button" class="qaid-btn-submit">${this.host.config.text.skipButton}</button>
      </div>
    `;
  }
  setupModalInteractions() {
    this.host.openDialogA11y(this.modalContainer, {
      labelledbyId: `qaid-modal-title-${this.host.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.host.uid}`
    });
    const e = this.modalContainer.querySelector(".qaid-textarea"), t = this.modalContainer.querySelector(".qaid-btn-submit");
    e && (setTimeout(() => e.focus(), 100), e.addEventListener("input", () => {
      t && (t.textContent = e.value.trim() ? this.host.config.text.submitButton : this.host.config.text.skipButton);
    })), t && t.addEventListener("click", () => {
      const o = e?.value.trim() || null;
      this.submitMessage(o);
    });
    const i = this.modalContainer.querySelector(".qaid-type-toggle");
    i && i.addEventListener("click", () => {
      const o = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = o, this.host.config.buttonClass ? (i.classList.toggle("qaid-btn-up", o === "up"), i.classList.toggle("qaid-btn-down", o === "down")) : (i.classList.toggle("qaid-type-up", o === "up"), i.classList.toggle("qaid-type-down", o === "down"));
      const s = this.host.config.positiveIcon || d, n = this.host.config.negativeIcon || c;
      i.innerHTML = o === "up" ? s : n;
      const a = o === "up" ? "Feedback type: positive" : "Feedback type: negative";
      i.setAttribute("aria-pressed", String(o === "up")), i.setAttribute("aria-label", a), this.host.announceMsg(a), this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: o })
      }).catch((l) => console.error("Failed to update feedback type:", l));
    });
  }
  async submitMessage(e) {
    let t = !1;
    if (this.host.feedbackId) {
      try {
        await fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: e })
        }), t = !0;
      } catch (i) {
        console.error("Failed to submit feedback message:", i);
      }
      this.host.setFeedbackId(null);
    }
    if (t && !this.host.config.hideConfirmation) {
      this.showConfirmation();
      return;
    }
    this.close();
  }
  /**
   * Replace the modal's contents with a checkmark and a short acknowledgement.
   *
   * The submit button that had focus is gone by this point, so focus moves to
   * the heading (WCAG 2.4.3) and the message is announced. Mirrors the quests
   * embed's thank-you screen so the two products confirm the same way.
   */
  showConfirmation() {
    const e = this.modalContainer?.querySelector(".qaid-modal-box") ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content") ?? this.modalContainer;
    if (!e) {
      this.close();
      return;
    }
    const t = this.host.config.text, i = `qaid-confirm-title-${this.host.uid}`;
    e.innerHTML = `
      <div class="qaid-confirm">
        <span class="qaid-confirm-icon" aria-hidden="true">${p}</span>
        <h3 class="qaid-confirm-title" id="${i}" tabindex="-1">${t.confirmationTitle}</h3>
        <p class="qaid-confirm-message">${t.confirmationMessage}</p>
        <button type="button" class="qaid-btn-submit qaid-confirm-close">${t.confirmationClose}</button>
      </div>
    `, e.querySelector(".qaid-confirm-close")?.addEventListener("click", () => this.close());
    const o = e.querySelector(`#${CSS.escape(i)}`);
    requestAnimationFrame(() => o?.focus()), this.host.announceMsg(`${t.confirmationTitle} ${t.confirmationMessage}`, !0);
  }
}
export {
  f as ModalController
};
//# sourceMappingURL=modal-Br5x7m6f.js.map
