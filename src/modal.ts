/**
 * Feedback message modal — extracted from embed.ts into its own lazily-loaded
 * chunk. It's fetched the first time a message modal opens (after feedback is
 * submitted), and pre-warmed while the user is targeting an element.
 *
 * The controller owns the modal/backdrop DOM and the message PATCH flow, and
 * talks back to the embed through the narrow `ModalHost` interface.
 */

import { calculateModalAndArrowPosition } from "./modal-positioning";
import { THUMBS_UP_ICON, THUMBS_DOWN_ICON } from "./icons";
import type {
  ResolvedFeedbackConfig,
  EmbedState,
  FeedbackData,
  SelectedBounds,
} from "./types";

/** The slice of the embed the modal needs. */
export interface ModalHost {
  readonly config: ResolvedFeedbackConfig;
  readonly uid: string;
  readonly isMobile: boolean;
  readonly state: EmbedState;
  readonly boundKeyDown: (e: KeyboardEvent) => void;
  /** Live references — the toggle mutates feedbackType; positioning reads bounds. */
  readonly feedbackData: FeedbackData;
  readonly selectedBounds: SelectedBounds;
  readonly feedbackId: number | null;
  setFeedbackId(id: number | null): void;
  ensureOverlayHost(): ShadowRoot;
  applyVars(el: HTMLElement): void;
  announceMsg(message: string, assertive?: boolean): void;
  openDialogA11y(
    container: HTMLElement,
    opts: { labelledbyId?: string; describedbyId?: string; label?: string }
  ): void;
  closeDialogA11y(): void;
  resetFeedbackUi(): void;
}

export class ModalController {
  private modalContainer: HTMLDivElement | null = null;
  private backdrop: HTMLDivElement | null = null;

  constructor(private host: ModalHost) {}

  open(): void {
    const root = this.host.ensureOverlayHost();

    // Create backdrop
    this.backdrop = document.createElement("div");
    this.backdrop.className = "qaid-backdrop";
    this.backdrop.style.zIndex = String(this.host.config.zIndex + 2);
    this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`;
    this.backdrop.addEventListener("click", () => this.close());
    this.host.applyVars(this.backdrop);

    if (this.host.isMobile) {
      this.showBottomSheet();
    } else {
      this.showPositionedModal();
    }

    root.appendChild(this.backdrop);
    document.addEventListener("keydown", this.host.boundKeyDown);
  }

  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close(): void {
    // If the modal is open and we're closing without submitting, still finalize.
    if (this.host.state === "MODAL_OPEN" && this.host.feedbackId) {
      fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: null }),
      }).catch((err) => console.error("Failed to finalize feedback:", err));
    }

    this.teardown();
    this.host.resetFeedbackUi();
  }

  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy(): void {
    this.teardown();
  }

  private teardown(): void {
    this.host.closeDialogA11y();
    if (this.modalContainer) {
      this.modalContainer.remove();
      this.modalContainer = null;
    }
    if (this.backdrop) {
      this.backdrop.remove();
      this.backdrop = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }

  private showBottomSheet(): void {
    const root = this.host.ensureOverlayHost();

    const sheet = document.createElement("div");
    sheet.className = "qaid-bottom-sheet";
    sheet.style.zIndex = String(this.host.config.zIndex + 3);

    sheet.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `;

    this.host.applyVars(sheet);
    root.appendChild(sheet);
    this.modalContainer = sheet;

    this.setupModalInteractions();
  }

  private showPositionedModal(): void {
    const root = this.host.ensureOverlayHost();

    const { modal, arrow } = calculateModalAndArrowPosition(
      this.host.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.host.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16,
      }
    );

    this.modalContainer = document.createElement("div");
    this.modalContainer.className = `qaid-modal-container qaid-${modal.position}`;
    this.modalContainer.style.top = `${modal.top}px`;
    this.modalContainer.style.left = `${modal.left}px`;
    this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);

    const arrowEl = document.createElement("div");
    arrowEl.className = "qaid-modal-arrow";
    arrowEl.style.left = `${arrow.left}px`;

    const box = document.createElement("div");
    box.className = "qaid-modal-box";
    box.innerHTML = this.getModalContent();

    this.modalContainer.appendChild(arrowEl);
    this.modalContainer.appendChild(box);
    this.host.applyVars(this.modalContainer);
    root.appendChild(this.modalContainer);

    this.setupModalInteractions();
  }

  private getModalContent(): string {
    const isUp = this.host.feedbackData.feedbackType === "up";
    const positiveIcon = this.host.config.positiveIcon || THUMBS_UP_ICON;
    const negativeIcon = this.host.config.negativeIcon || THUMBS_DOWN_ICON;
    const toggleClass = this.host.config.buttonClass
      ? `qaid-type-toggle qaid-type-toggle-custom ${this.host.config.buttonClass} ${isUp ? "qaid-btn-up" : "qaid-btn-down"}`
      : `qaid-type-toggle ${isUp ? "qaid-type-up" : "qaid-type-down"}`;
    const toggleLabel = isUp ? "Feedback type: positive" : "Feedback type: negative";
    return `
      <div class="qaid-modal-header">
        <button type="button" class="${toggleClass}" title="Click to switch" aria-pressed="${isUp}" aria-label="${toggleLabel}">
          ${isUp ? positiveIcon : negativeIcon}
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

  private setupModalInteractions(): void {
    // Dialog semantics + focus trap + background inert
    this.host.openDialogA11y(this.modalContainer!, {
      labelledbyId: `qaid-modal-title-${this.host.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.host.uid}`,
    });

    const textarea =
      this.modalContainer!.querySelector<HTMLTextAreaElement>(".qaid-textarea");
    const submitBtn =
      this.modalContainer!.querySelector<HTMLButtonElement>(".qaid-btn-submit");
    if (textarea) {
      // Auto-focus
      setTimeout(() => textarea.focus(), 100);

      // Update button text based on content
      textarea.addEventListener("input", () => {
        if (submitBtn) {
          submitBtn.textContent = textarea.value.trim()
            ? this.host.config.text.submitButton
            : this.host.config.text.skipButton;
        }
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const message = textarea?.value.trim() || null;
        this.submitMessage(message);
      });
    }

    // Handle feedback type toggle
    const typeToggle = this.modalContainer!.querySelector<HTMLButtonElement>(".qaid-type-toggle");
    if (typeToggle) {
      typeToggle.addEventListener("click", () => {
        const newType = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
        this.host.feedbackData.feedbackType = newType;

        // Update UI — use different classes depending on custom buttonClass
        if (this.host.config.buttonClass) {
          typeToggle.classList.toggle("qaid-btn-up", newType === "up");
          typeToggle.classList.toggle("qaid-btn-down", newType === "down");
        } else {
          typeToggle.classList.toggle("qaid-type-up", newType === "up");
          typeToggle.classList.toggle("qaid-type-down", newType === "down");
        }
        const positiveIcon = this.host.config.positiveIcon || THUMBS_UP_ICON;
        const negativeIcon = this.host.config.negativeIcon || THUMBS_DOWN_ICON;
        typeToggle.innerHTML = newType === "up" ? positiveIcon : negativeIcon;

        // Update accessible state and announce the change
        const toggleLabel = newType === "up" ? "Feedback type: positive" : "Feedback type: negative";
        typeToggle.setAttribute("aria-pressed", String(newType === "up"));
        typeToggle.setAttribute("aria-label", toggleLabel);
        this.host.announceMsg(toggleLabel);

        // Update feedback on server
        if (this.host.feedbackId) {
          fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ feedbackType: newType }),
          }).catch((err) => console.error("Failed to update feedback type:", err));
        }
      });
    }
  }

  private async submitMessage(message: string | null): Promise<void> {
    if (this.host.feedbackId) {
      try {
        await fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        });
      } catch (error) {
        console.error("Failed to submit feedback message:", error);
      }
      // Clear feedbackId so close() doesn't send another PATCH.
      this.host.setFeedbackId(null);
    }

    this.close();
  }
}
