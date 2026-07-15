import { c } from "./bootstrap-U4yiPm5-.js";
import { T as n, a as d } from "./annotate-BNibaDg3.js";
class g {
  constructor(t) {
    this.host = t;
  }
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
    const t = this.host.ensureOverlayHost(), e = document.createElement("div");
    e.className = "qaid-bottom-sheet", e.style.zIndex = String(this.host.config.zIndex + 3), e.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.host.applyVars(e), t.appendChild(e), this.modalContainer = e, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.host.ensureOverlayHost(), { modal: e, arrow: s } = c(
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
    const i = document.createElement("div");
    i.className = "qaid-modal-box", i.innerHTML = this.getModalContent(), this.modalContainer.appendChild(o), this.modalContainer.appendChild(i), this.host.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.host.feedbackData.feedbackType === "up", e = this.host.config.positiveIcon || n, s = this.host.config.negativeIcon || d;
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${this.host.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.host.config.buttonClass} ${t ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${t ? "qaid-type-up" : "qaid-type-down"}`}" title="Click to switch" aria-pressed="${t}" aria-label="${t ? "Feedback type: positive" : "Feedback type: negative"}">
          ${t ? e : s}
        </button>
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
      const i = this.host.config.positiveIcon || n, l = this.host.config.negativeIcon || d;
      s.innerHTML = o === "up" ? i : l;
      const a = o === "up" ? "Feedback type: positive" : "Feedback type: negative";
      s.setAttribute("aria-pressed", String(o === "up")), s.setAttribute("aria-label", a), this.host.announceMsg(a), this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: o })
      }).catch((h) => console.error("Failed to update feedback type:", h));
    });
  }
  async submitMessage(t) {
    if (this.host.feedbackId) {
      try {
        await fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        });
      } catch (e) {
        console.error("Failed to submit feedback message:", e);
      }
      this.host.setFeedbackId(null);
    }
    this.close();
  }
}
export {
  g as ModalController
};
//# sourceMappingURL=modal-BX5wqy4s.js.map
