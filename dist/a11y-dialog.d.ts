/**
 * Dialog accessibility for the qaid embeds: focus management (trap,
 * save/restore), dialog semantics, and background isolation. Split from
 * a11y.ts so the startup chunk ships only `announce`; this module loads with
 * the click path (the message box, the markup editor, the video preview).
 *
 * Framework-free and self-contained (no CSS dependency), so it can be dropped
 * into any open shadow root.
 */
/** Options accepted by {@link applyDialog}. */
export interface ApplyDialogOptions {
    /** id of the element that labels the dialog (wired via aria-labelledby). */
    labelledbyId?: string;
    /** id of the element that describes the dialog (wired via aria-describedby). */
    describedbyId?: string;
    /** Fallback accessible name when no labelling element exists. */
    label?: string;
}
/** Handle returned by {@link createFocusTrap}. */
export interface FocusTrap {
    /** Remove the trap's key handler and clean up any tabindex it added. */
    release(): void;
}
/**
 * Collect the focusable descendants of `container` in DOM order, excluding
 * disabled controls, elements opted out with tabindex="-1", and elements that
 * are hidden (via the hidden attribute or an inline display/visibility rule on
 * themselves or an ancestor up to the document root).
 */
export declare function getFocusable(container: HTMLElement): HTMLElement[];
/**
 * Trap keyboard focus inside `container`: Tab / Shift+Tab cycle between the
 * first and last focusable descendants and can never leave the container. On
 * creation focus moves to the first focusable element, or to the container
 * itself (made programmatically focusable) when it has no focusable children.
 *
 * Call {@link FocusTrap.release} to remove the handler; pair it with
 * {@link restoreFocus} to return focus to the invoking control.
 */
export declare function createFocusTrap(container: HTMLElement): FocusTrap;
/**
 * Capture the currently focused element (drilling through shadow roots) so it
 * can be restored later with {@link restoreFocus}. Returns null when focus is
 * on nothing focusable.
 */
export declare function saveFocus(): HTMLElement | null;
/**
 * Restore focus to a previously saved element. Safe to call with null or an
 * element that has since been detached (a missing/throwing focus is ignored).
 */
export declare function restoreFocus(el: HTMLElement | null): void;
/**
 * Apply dialog semantics to `el`: role="dialog", aria-modal="true", and the
 * naming/description wiring described by `opts`. Prefer aria-labelledby /
 * aria-describedby pointing at visible title/subtitle elements; fall back to
 * aria-label when no visible label element exists.
 */
export declare function applyDialog(el: HTMLElement, opts?: ApplyDialogOptions): void;
/**
 * Isolate the background from assistive technology while a dialog is open by
 * marking every top-level sibling of the dialog inert (with an aria-hidden
 * fallback). `except` is the open dialog (or any element inside it); the
 * top-level element that contains it is left interactive.
 *
 * Returns a restore function that reverts every attribute this call changed,
 * leaving elements that were already inert/hidden untouched.
 */
export declare function setBackgroundInert(except: HTMLElement): () => void;
/** What {@link openDialog} needs to name the dialog. */
export type DialogOptions = ApplyDialogOptions;
/**
 * Turn a transient surface into an accessible modal dialog: save the
 * invoking control, apply dialog semantics, trap focus, and inert the
 * background. Returns the matching close: release the trap, restore the
 * background, and return focus to the saved control.
 */
export declare function openDialog(container: HTMLElement, opts: DialogOptions): () => void;
