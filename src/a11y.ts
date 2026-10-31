/**
 * Shared accessibility primitives for the qaid embeds: live-region
 * announcements. This is all the startup chunk needs. The dialog helpers
 * (focus trap, save/restore, dialog semantics, background isolation) live in
 * a11y-dialog.ts, which only the lazily-loaded click path pulls in.
 *
 * Framework-free and self-contained (no CSS dependency), so it can be dropped
 * into any open shadow root.
 */

/** Host for the live regions: either a shadow root or a plain element. */
export type AnnounceRoot = ShadowRoot | HTMLElement;

/** Options accepted by {@link announce}. */
export interface AnnounceOptions {
  /** Route the message through the assertive (role="alert") region. */
  assertive?: boolean;
}

const POLITE_ATTR = "data-qaid-a11y-live";

const VISUALLY_HIDDEN_CSS =
  "position:absolute;width:1px;height:1px;margin:-1px;padding:0;" +
  "border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);" +
  "white-space:nowrap;";

function ownerDoc(root: AnnounceRoot): Document {
  return root.ownerDocument || document;
}

function getLiveRegion(root: AnnounceRoot, assertive: boolean): HTMLElement {
  const kind = assertive ? "assertive" : "polite";
  const existing = root.querySelector<HTMLElement>(
    `[${POLITE_ATTR}="${kind}"]`
  );
  if (existing) return existing;

  const doc = ownerDoc(root);
  const region = doc.createElement("div");
  region.setAttribute(POLITE_ATTR, kind);
  region.setAttribute("role", assertive ? "alert" : "status");
  region.setAttribute("aria-live", assertive ? "assertive" : "polite");
  region.setAttribute("aria-atomic", "true");
  region.style.cssText = VISUALLY_HIDDEN_CSS;
  root.appendChild(region);
  return region;
}

/**
 * Announce a message to assistive technology via a visually-hidden live region
 * mounted inside `root`. The two regions (polite role="status" and assertive
 * role="alert") are created lazily on first use and reused thereafter.
 *
 * The target region is cleared before the new text is written so that repeated
 * identical messages are re-announced rather than coalesced.
 */
export function announce(
  root: AnnounceRoot,
  message: string,
  opts: AnnounceOptions = {}
): void {
  const region = getLiveRegion(root, !!opts.assertive);
  // Clear-then-set so an identical repeat is still perceived as a change.
  region.textContent = "";
  region.textContent = message;
}
