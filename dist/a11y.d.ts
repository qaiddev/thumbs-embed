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
/**
 * Announce a message to assistive technology via a visually-hidden live region
 * mounted inside `root`. The two regions (polite role="status" and assertive
 * role="alert") are created lazily on first use and reused thereafter.
 *
 * The target region is cleared before the new text is written so that repeated
 * identical messages are re-announced rather than coalesced.
 */
export declare function announce(root: AnnounceRoot, message: string, opts?: AnnounceOptions): void;
