/**
 * Single-tag embed loader (`dist/embed.js`).
 *
 * A drop-in classic `<script>` that works in every browser. It feature-detects
 * ES-module support and injects the right build, so the page author never has
 * to think about compatibility:
 *
 *   - modern browsers → the progressive ESM loader (`loader.js`): a small core,
 *     with screenshot / video / annotation / targeting loading on demand.
 *   - older browsers  → the all-in-one UMD bundle (`qaid.umd.cjs`).
 *
 * The injected build initializes itself from the `data-*` attributes copied
 * across from this tag (or from a `<script type="application/json">` config
 * block already on the page), so exactly one embed is created either way.
 *
 * Usage:
 *   <script src="https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js"
 *           data-endpoint="/api/feedback"></script>
 *
 * (Distinct from `loader.ts`/`loader.js`, the ESM-only progressive entry this
 * one delegates to on modern browsers.)
 *
 * Pinned with Subresource Integrity (`integrity="sha384-…"` on this tag),
 * every file it loads after itself is hash-checked too, with hashes baked in
 * at build time (vite.config.embed.ts):
 *
 *   - Where the browser enforces import-map `integrity` (Chrome 127+,
 *     Safari 18+, Firefox 138+), it adds an import map listing the sha384 of
 *     loader.js and every lazy chunk, then loads the small progressive build.
 *     The browser refuses any chunk whose bytes differ.
 *   - Everywhere else it loads the single-file UMD bundle with its own hash.
 *
 * No browser lets a page ask whether import-map integrity is enforced, so it
 * finds out: the map also lists integrity-probe.js under a hash that can never
 * match, and it loads that file first. A browser that enforces the map refuses
 * it (onerror: take the progressive build); one that ignores the map, or a
 * page whose CSP blocks the inline map, runs it (onload: take the UMD bundle).
 * A refusal means the check is live, never that it is missing, so a pinned tag
 * never loads an unchecked file. The cost is one tiny request and one console
 * line about the probe's digest.
 *
 * IMPORTANT: this file must stay ES5-clean and dependency-free. It is the one
 * script that also runs on the legacy browsers we fall back for, so it can't
 * use syntax (arrow fns, const/let, template literals) they'd choke on before
 * the fallback ever loads. Written with var/function on purpose.
 */
export {};
