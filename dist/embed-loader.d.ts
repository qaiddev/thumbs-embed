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
 * IMPORTANT: this file must stay ES5-clean and dependency-free. It is the one
 * script that also runs on the legacy browsers we fall back for, so it can't
 * use syntax (arrow fns, const/let, template literals) they'd choke on before
 * the fallback ever loads. Written with var/function on purpose.
 */
