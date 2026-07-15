# Progressive loading plan (`@qaiddev/thumbs-embed`)

_Goal: stop shipping ~22 KB gzip to every visitor when most never trigger screenshot, video, or redaction. Load the core immediately and pull heavy optional features on demand._

## Status — implemented (v1.4.0)

Strategy A is built and verified (503 tests pass, builds clean):

- **Dynamic imports in `embed.ts`** for screenshot capture, the annotation editor, and the video subsystem (which carries redaction). Tiny sync "supported?" checks stay eager.
- **New `loader.ts` entry** (minimal auto-init, no feature re-exports) + shared **`bootstrap.ts`** (config parsing / auto-init) so the loader path doesn't anchor features into the core.
- **Two Vite builds:** `vite.config.ts` → UMD single file (legacy `<script>`, unchanged); `vite.config.esm.ts` → ES with code-splitting + `manualChunks` pinning each feature to its own chunk.
- `package.json`: `module` → `dist/index.js`, added `./loader` subpath export, version → 1.4.0, build runs both configs.
- **Preload-on-intent** (`embed.ts`): when `captureVideo`/`captureScreenshot` is set, the relevant chunk is warmed on idle (`requestIdleCallback`, `setTimeout` fallback); the video/recording chunks are also warmed on record-button hover/focus/touch (the ~200 ms before a click). Best-effort — errors ignored, cancelled on `destroy()`. This is the correct "load it in the background" mechanism (module fetch/parse is already off-main-thread; Web Workers can't run this DOM/UI code). Adds ~0.6 KB gzip to the core.
- **Nano DOM factory `h()`** (`dom.ts`): a construction-only helper (no runtime/reactivity) that DRYs the imperative Shadow-DOM building. **Measured finding: it is size-neutral, not a win** — gzip already dedupes the repeated `createElement`/`className`/`cssText` patterns, and the helper's fixed cost offsets the DRYing. Kept for maintainability + because it makes subsystem extraction cleaner (components become movable expressions). Now used only by `recording.ts`, so it isn't even in the core.
- **Recording subsystem extracted to a lazy chunk** (`recording.ts`, a `RecordingController` behind a narrow `RecordingHost` interface): ~450 lines of video-only code (recorder wiring, redaction picker, indicator, preview, submit) moved out of `embed.ts`, which now lazily `import("./recording")` on first record-button use. **This is the real byte win — the core (bootstrap) chunk dropped 22.75 → 19.86 KB gzip (−13%)**; the recording code lives in its own 3.6 KB chunk loaded only when someone records. `network-capture` and `dom.ts` left the core with it. All 503 tests pass (the recording suite's `vi.waitFor` polling absorbed the added async; only the 4 synchronous picker tests + 5 internal-reaching edge tests needed touch-ups).

- **Modal extracted to a lazy chunk** (`modal.ts`, a `ModalController` behind a `ModalHost` interface): the message modal + backdrop + message-PATCH flow moved out of `embed.ts`, lazily `import("./modal")` on first open and pre-warmed during targeting (`prewarmModal` on thumb-click). More entangled than recording (shared `feedbackId`/`feedbackData`/`selectedBounds`/`resetFeedbackUi`, and `modal-positioning` stays in core — it's shared with the tooltip), so a smaller win: **core 19.86 → 18.93 KB gzip (−0.9 KB)**, modal in its own 1.98 KB chunk. Making open async introduced a destroy-race (a test could `destroy()` before the modal chunk resolved, leaking a listener); guarded with `if (this.destroyed) return` at the open site. All 503 tests pass.

- **Targeting extracted to a lazy chunk** (`targeting.ts`, a `TargetingController` behind a `TargetingHost` interface): pointer + keyboard + touch element-targeting (overlay/reticle/highlight/marker build, `handleMouseMove`/`handleClick`/`handleTouchStart`/`handleTouchEnd`, keyboard controller wiring, selection + marker) moved out of `embed.ts`, which now lazily `import("./targeting")` on first thumb-click. This pulls **`element-selector` (~13.6 KB source) out of the core with it** — the real reason to bother. **Core 18.93 → 15.82 KB gzip (−3.1 KB, −16%)**; targeting lives in its own **3.81 KB gzip** chunk. Because targeting is the hottest path (every thumb click), the click is now `await import("./targeting")` — a real first-interaction latency risk — so it's **pre-warmed on thumb-button hover/focus** (`prewarmTargeting`, the ~200 ms before a click) and the controller guards async-vs-destroy with `if (this.destroyed) return`. Tests: 19 targeting tests + 1 a11y keyboard test asserted synchronously after a now-async click; fixed with a `waitForTargeting()` poll (non-null asserts, not optional chaining — `expect(undefined).not.toBeNull()` silently passes). All 503 tests pass.

**Measured cumulative — a thumbs-only visitor's initial load is now** `loader.js` (0.15) + core (**15.82**) ≈ **16 KB gzip** — down from the 23.84 KB monolith (−33%) — then pulls **targeting (3.81) on first thumb-click** (usually pre-warmed on hover, so no perceived latency), and never downloads recording (3.61), modal (1.98), video (2.45), annotate (4.57), or screenshot (0.69). `embed.ts` went ~2,100 → 1,244 lines. The core is now buttons + tooltip + a11y + styles + submit + the lazy-load orchestration. **This is the end of the high-leverage extractions:** what's left in the core (`embed.ts` orchestration + a11y + styles + config) is inherently eager.

**Measured (gzip):** legacy UMD full bundle 23.84 KB. Loader path = `loader.js` 0.15 + core chunk **21.97** ≈ 22.1 KB, and these defer to on-demand chunks: screenshot 0.69, screenshot-dom 1.05, **video (incl. redaction) 2.45**, annotate 4.57.

**Honest result:** the user's actual concern is solved — **redaction (and screenshot/video) now load only when used**, never for a thumbs-only visitor. But the initial-load reduction is modest (~7%: 23.84 → 22.1) because **`embed.ts` (the ~74 KB orchestrator) plus targeting/a11y/styles/modal is ~90% of the weight and is inherently core.** Meaningfully shrinking the core further means splitting `embed.ts`'s own subsystems (modal, recording preview, targeting) — a larger, separate refactor (see "Next levers").

**Published & wired (done):** `@qaiddev/thumbs-embed@1.4.0` is published to npm (`latest`), and all chunks/entries resolve on unpkg **and** jsdelivr (bare URL still redirects to the legacy UMD, so existing `<script src>` consumers are unaffected). qaid.dev is wired: dep bumped to `^1.4.0`; both snippet generators (`ProjectCustomizer.tsx`, `CustomizerCodeOutput.tsx`) now emit the `<script type="module" src="…/dist/loader.js">` loader form (script + JSON-config trailing tag), plus the ESM form gains `videoOptions: { redaction }`; a **Redaction** toggle was added to the customizer (`CustomizerControls.tsx` + `videoRedaction` on `CustomizerConfig`) emitting `data-video-redaction` / `videoOptions.redaction`, wired into the live preview; and `FeedbackInbox.tsx`'s install snippet moved to the loader form (also fixing its stale `feedback.umd.cjs` path). qaid.dev: 3118 tests pass, coverage thresholds met, production build clean.

**Real-browser check still worth doing before wide rollout:** load a generated `<script type="module" … loader.js>` snippet on a live third-party page and confirm the chunk graph fetches + a thumbs-up → targeting → record flow works end-to-end from the CDN (the automated checks cover registry/CDN resolution and unit behaviour, not a real cross-origin browser session).

### Next levers (if deeper reduction is wanted)
- Split `embed.ts`'s **modal + recording-preview UI** into a chunk loaded when the modal first opens.
- Defer **network capture** (only used with recording) — but keep **console capture** eager (it must buffer from page load).
- Split the **quest launcher** path (already lazy-loads quests-embed; the launcher shim itself could defer).

## Does it work? Yes — but not by flipping a bundler flag.

Dynamic `import()` code-splitting works, **with one architectural catch**: end users load the embed as a **single-file UMD bundle** via `<script src="unpkg.com/@qaiddev/thumbs-embed">` (see `index.ts` auto-init + `package.json main: dist/qaid.umd.cjs`). **UMD/IIFE cannot be code-split** — Rollup inlines every dynamic import back into the one file, so `import()` inside today's build reduces nothing for the CDN `<script>` path.

So the real work is **adding an ESM delivery path** that can split, while keeping the UMD bundle as a legacy fallback. There's already precedent for on-demand loading here: `quest-launcher.ts` lazy-imports the separate quests-embed package via a module URL, and html2canvas is loaded on demand from qaid.dev. This extends that pattern to this bundle's own features.

## Current state (measured)

Vite lib build, `formats: ['umd','es']`, one entry (`src/index.ts`). UMD is **22.35 KB gzip** before the redaction work (23.64 KB after). Source-byte weight of the optional, statically-imported features (relative proxy, not gzip):

| Feature | Modules | ~Source | Needed only when |
|---|---|---|---|
| Screenshot annotation editor | `annotate.ts` | 19.5 KB | a screenshot is captured **and** annotate is on |
| Video subsystem | `video-capture` + `video-orientation` + `video-redaction` | 19.5 KB | `captureVideo` and the user clicks record |
| Screenshot capture | `screenshot.ts` + `screenshot-dom.ts` | 7.3 KB | `captureScreenshot` fires |
| Console + network context | `console-capture.ts` + `network-capture.ts` | 5.7 KB | feedback with context is submitted |

`embed.ts` (74 KB source, the orchestrator), `element-selector`, `a11y`, `styles`, `modal-positioning` are core — always loaded. The four rows above are ~52 KB of source that a thumbs-only visitor never needs. Statically imported at `embed.ts:27,28,40,41,42` — those imports are the lever.

## Recommended: Strategy A — dynamic imports + ESM loader (UMD fallback kept)

1. **Make the optional features lazy in `embed.ts`.** Replace the static imports with guarded `await import()` at the point of use (keep `import type` — type-only imports erase, no runtime cost):
   - `openAnnotationEditor` / screenshot → `import('./screenshot')` + `import('./annotate')` when a screenshot is actually taken.
   - `createVideoRecorder` → `import('./video-capture')` when `captureVideo` and record is clicked; `video-capture` in turn `import('./video-redaction')` only when the picker starts, so redaction ships to no one until used.
   - `captureConsoleErrors` / `captureNetworkErrors` → `import()` when the modal opens (or on first feedback).
2. **Add a code-split ESM build.** A second Vite config (or `build.lib` with `formats:['es']` and dynamic-import chunking) emits a small core entry plus hashed feature chunks in `dist/`. Chunk specifiers resolve against `import.meta.url`, so they load from the same CDN base.
3. **Ship a tiny module loader entry.** New embeds use `<script type="module" src="unpkg.com/@qaiddev/thumbs-embed/dist/loader.js" data-endpoint=...>`; it imports the core and lazy-loads chunks from the CDN on demand. Module scripts + dynamic import are supported by ~98% of browsers.
4. **Keep the UMD full bundle** (`dist/qaid.umd.cjs`) unchanged as the legacy path — existing `<script src=...umd...>` embeds keep working at today's size, no forced migration.
5. **Add subpath exports** (`@qaiddev/thumbs-embed/video`, `/screenshot`) and stop re-exporting every feature from `index.ts` so bundler/ESM consumers tree-shake cleanly and the auto-init entry doesn't force-include them.

Expected effect: the initial core drops toward the thumbs+modal+targeting baseline; the ~52 KB of source above loads only for the visitors who trigger it.

## Alternative: Strategy B — runtime `<script>` injection

Keep a tiny UMD core; when a feature is needed, inject `<script src="unpkg.com/.../feature.umd.js">` and await a global. Works without ESM but is more manual (hand-managed dependency graph, global namespacing, more failure modes). Only worth it if we must support classic-script-only environments — given ESM ubiquity, **Strategy A is preferred**.

## Risks & mitigations

- **UMD stays monolithic.** Splitting only benefits the ESM/loader path; the UMD fallback keeps its size. Acceptable — new snippets use the loader.
- **First-use latency.** The first screenshot/record incurs one chunk fetch (a brief pause). Mitigate with `<link rel="modulepreload">` for likely features, or an idle-time prefetch after load.
- **`index.ts` re-exports force inclusion today** (`video-capture`, `screenshot-dom`, `annotate`, `network-capture` at `index.ts:46-65`). Move these behind subpath entries so they don't anchor the core.
- **CDN chunk resolution.** unpkg serves each emitted file; verify hashed chunk names resolve from `import.meta.url` on unpkg/jsdelivr before publishing.
- **qaid.dev coupling.** The customizer/preview imports the package (bundler-handled, unaffected), but the **snippet generator** must emit the module-loader form. Update it alongside.
- **Tests.** Add coverage for each lazy boundary: feature loads on its trigger, and a chunk-load failure degrades gracefully (e.g., screenshot silently skipped, feedback still sends).

## Sequencing

1. **Measure real per-chunk gzip** — add temporary `manualChunks` (or the ES split build) and read the actual gzip per feature, to confirm the source-byte proxy and prioritize.
2. **Lazy-load video + redaction first** (biggest, newest, cleanest boundary — record is already an explicit user action).
3. **Lazy-load screenshot + annotate** (largest single win; annotate alone is ~19.5 KB).
4. **Lazy-load console/network** context.
5. **Add the ESM code-split build + loader entry + subpath exports**; keep UMD fallback.
6. **Update qaid.dev snippet generator + docs**; publish; verify sizes on the CDN.

## Open decisions

- Loader delivery: `<script type="module">` loader (Strategy A) vs. keep classic `<script>` and inject (Strategy B). _Recommend A._
- Whether to eventually deprecate the UMD bundle or keep it indefinitely as the legacy path.
- Prefetch policy: eagerly `modulepreload` screenshot/video when their config flags are set, vs. purely on-demand.
