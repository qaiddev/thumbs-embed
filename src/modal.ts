/**
 * Feedback message modal — extracted from embed.ts into its own lazily-loaded
 * chunk. It's fetched the first time a message modal opens (after feedback is
 * submitted), and pre-warmed while the user is targeting an element.
 *
 * The controller owns the modal/backdrop DOM and the message PATCH flow, and
 * talks back to the embed through the narrow `ModalHost` interface.
 */

import { calculateModalAndArrowPosition } from "./modal-positioning";
import { h } from "./dom";
import { iconNode, setIcon } from "./svg-sanitize";
import featureStyles from "./styles-modal.css?inline";
import {
  THUMBS_UP_ICON,
  THUMBS_DOWN_ICON,
  FEEDBACK_ICON,
  DONE_ICON,
  ERROR_ICON,
} from "./icons";
import type {
  ResolvedFeedbackConfig,
  EmbedState,
  FeedbackData,
  SelectedBounds,
  FeedbackRecord,
} from "./types";

/**
 * A PATCH body for `record`: `fields`, plus `editToken` when the server sent
 * one with the create response. Older servers send none, and get none back.
 */
export function patchBody(record: FeedbackRecord, fields: Record<string, unknown>): string {
  return JSON.stringify(record.editToken ? { ...fields, editToken: record.editToken } : fields);
}

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
  /**
   * The id of this feedback's record. The modal opens while the POST that
   * creates it is still in flight, so every PATCH waits on this; null when
   * the POST failed.
   */
  whenFeedbackRecord(): Promise<FeedbackRecord | null>;
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
  /** Set once the message is sent, so closing does not PATCH over it. */
  private finalized = false;

  constructor(private host: ModalHost) {}

  open(): void {
    this.finalized = false;
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
    // Taken before the reset below, which starts the next feedback afresh.
    if (this.host.state === "MODAL_OPEN" && !this.finalized) {
      this.finalized = true;
      void this.host.whenFeedbackRecord().then((record) => {
        if (!record?.id) return;
        fetch(`${this.host.config.endpoint}/${record.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: patchBody(record, { message: null }),
        }).catch((err) => console.error("Failed to finalize feedback:", err));
      });
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

    sheet.appendChild(
      h(
        "div",
        { class: "qaid-bottom-sheet-content" },
        h("div", { class: "qaid-bottom-sheet-handle" }),
        this.buildModalContent()
      )
    );

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
    box.appendChild(this.buildModalContent());

    this.modalContainer.appendChild(arrowEl);
    this.modalContainer.appendChild(box);
    this.host.applyVars(this.modalContainer);
    root.appendChild(this.modalContainer);

    this.setupModalInteractions();
  }

  /**
   * The modal's contents, built as nodes rather than an HTML string.
   *
   * Every piece of copy (title, subtitle, placeholder, button) goes in as
   * text, so a `<`, `&` or `"` in a translation shows as written instead of
   * being parsed as markup or cutting an attribute short. Only the icons are
   * markup, because they are documented as SVG/HTML strings.
   */
  private buildModalContent(): DocumentFragment {
    const { config, uid } = this.host;
    const text = config.text;
    const type = this.host.feedbackData.feedbackType;
    const isUp = type === "up";
    const toggleClass = config.buttonClass
      ? `qaid-type-toggle qaid-type-toggle-custom ${config.buttonClass} ${isUp ? "qaid-btn-up" : "qaid-btn-down"}`
      : `qaid-type-toggle ${isUp ? "qaid-type-up" : "qaid-type-down"}`;
    const toggleLabel = isUp ? "Feedback type: positive" : "Feedback type: negative";
    // Neutral (single-button) feedback has no sentiment to toggle — show a
    // static feedback icon in place of the up/down toggle.
    const header =
      type === "neutral"
        ? h(
            "span",
            { class: "qaid-type-static", attrs: { "aria-hidden": "true" } },
            iconNode(config.feedbackIcon, FEEDBACK_ICON)
          )
        : h(
            "button",
            {
              class: toggleClass,
              attrs: {
                type: "button",
                title: "Click to switch",
                "aria-pressed": String(isUp),
                "aria-label": toggleLabel,
              },
            },
            isUp
              ? iconNode(config.positiveIcon, THUMBS_UP_ICON)
              : iconNode(config.negativeIcon, THUMBS_DOWN_ICON)
          );

    const fragment = document.createDocumentFragment();
    fragment.append(
      h(
        "div",
        { class: "qaid-modal-header" },
        header,
        h(
          "div",
          { class: "qaid-modal-header-text" },
          h("h3", {
            class: "qaid-modal-title",
            text: text.modalTitle,
            attrs: { id: `qaid-modal-title-${uid}` },
          }),
          h("p", {
            class: "qaid-modal-subtitle",
            text: text.modalSubtitle,
            attrs: { id: `qaid-modal-subtitle-${uid}` },
          })
        )
      ),
      h("textarea", {
        class: "qaid-textarea",
        attrs: { "aria-label": text.modalSubtitle, placeholder: text.placeholder },
      }),
      h(
        "div",
        { class: "qaid-btn-row" },
        h("button", {
          class: "qaid-btn-submit",
          text: text.skipButton,
          attrs: { type: "button" },
        })
      )
    );
    return fragment;
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
        if (newType === "up") setIcon(typeToggle, this.host.config.positiveIcon, THUMBS_UP_ICON);
        else setIcon(typeToggle, this.host.config.negativeIcon, THUMBS_DOWN_ICON);

        // Update accessible state and announce the change
        const toggleLabel = newType === "up" ? "Feedback type: positive" : "Feedback type: negative";
        typeToggle.setAttribute("aria-pressed", String(newType === "up"));
        typeToggle.setAttribute("aria-label", toggleLabel);
        this.host.announceMsg(toggleLabel);

        // Update feedback on server, once the record exists
        void this.host.whenFeedbackRecord().then((record) => {
          if (!record?.id) return;
          fetch(`${this.host.config.endpoint}/${record.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: patchBody(record, { feedbackType: newType }),
          }).catch((err) => console.error("Failed to update feedback type:", err));
        });
      });
    }
  }

  private async submitMessage(message: string | null): Promise<void> {
    // null = nothing was attempted (the initial POST never produced an id);
    // otherwise whether the server accepted the PATCH.
    let delivered: boolean | null = null;

    // Before the await: an Escape while the POST is still out must not send
    // a second, empty PATCH over this message.
    this.finalized = true;
    const record = await this.host.whenFeedbackRecord();
    if (record?.id) {
      try {
        const response = await fetch(`${this.host.config.endpoint}/${record.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: patchBody(record, { message }),
        });
        // fetch resolves on any HTTP reply. A 4xx/5xx means the server
        // refused or lost the message, so it is not a success.
        delivered = response.ok;
        if (!response.ok) {
          console.error("Failed to submit feedback message: HTTP", response.status);
        }
      } catch (error) {
        console.error("Failed to submit feedback message:", error);
        delivered = false;
      }
    }

    // The message was lost. Closing quietly reads as success, so say so —
    // even with hideConfirmation, which only opts out of the success screen.
    if (delivered === false) {
      this.showResult(false);
      return;
    }

    // A submit that simply removes the modal reads as a failure — nothing
    // acknowledges that the message was sent. Show a success screen unless the
    // host opted out.
    //
    // With no feedbackId the initial POST never landed and there was nothing
    // to send the message to; that path closes exactly as it did before.
    if (delivered && !this.host.config.hideConfirmation) {
      this.showResult(true);
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
  private showResult(delivered: boolean): void {
    const box = this.modalContainer?.querySelector(".qaid-modal-box")
      ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content")
      ?? this.modalContainer;

    if (!box) {
      // Nothing to draw into — never strand the user with an open modal.
      this.close();
      return;
    }

    const text = this.host.config.text;
    const heading = delivered ? text.confirmationTitle : text.errorTitle;
    const body = delivered ? text.confirmationMessage : text.errorMessage;

    const title = h("h3", {
      class: "qaid-confirm-title",
      text: heading,
      attrs: { id: `qaid-confirm-title-${this.host.uid}`, tabindex: "-1" },
    });

    box.textContent = "";
    box.appendChild(
      h(
        "div",
        { class: delivered ? "qaid-confirm" : "qaid-confirm qaid-confirm-error" },
        h(
          "span",
          { class: "qaid-confirm-icon", attrs: { "aria-hidden": "true" } },
          iconNode(null, delivered ? DONE_ICON : ERROR_ICON)
        ),
        title,
        h("p", { class: "qaid-confirm-message", text: body }),
        h("button", {
          class: "qaid-btn-submit qaid-confirm-close",
          text: text.confirmationClose,
          attrs: { type: "button" },
          on: { click: () => this.close() },
        })
      )
    );

    // Focus after paint, matching the quests embed.
    requestAnimationFrame(() => title.focus());
    this.host.announceMsg(`${heading} ${body}`, true);
  }
}

/** This feature's shadow-DOM styles; the embed adds them when it loads the chunk. */
export const styles = featureStyles;
