import { defineConfig, transformWithEsbuild, type Plugin } from "vite";
import { resolve } from "path";

// ESM build with code-splitting. Two entries:
//   index.js  — full API surface (re-exports pull features in eagerly)
//   loader.js — minimal auto-init; screenshot / video / redaction split into
//               on-demand chunks under dist/chunks/.
// Runs after the UMD build with emptyOutDir:false so it adds to dist/ rather
// than wiping the UMD bundle.
/**
 * What the loader needs at startup, in one core chunk: the buttons, their
 * styles and tooltip, the config parser, console capture and live-region
 * announcements. Everything a click needs is lazy and pre-warmed when the
 * pointer or focus reaches the buttons, or on idle (see prewarmClickPath in
 * embed.ts): the send flow, the dialog helpers, the message box (with its
 * modal-positioning maths) and targeting.
 *
 * The helpers the core shares with lazy chunks (icons, dom-utils) must be
 * named here: left to Rollup they landed in the annotate chunk, and the core
 * imported all of annotate (5 KB) at startup to reach them. Re-check this list
 * when the loader's static imports change; anything left off lands in
 * whichever chunk Rollup picks. Check the build: dist/chunks/core-*.js must not
 * statically import any feature chunk (`from "./send-…"` and the like).
 */
const CORE = /\/src\/(embed|bootstrap|styles|a11y|tooltip-positioning|console-capture|quest-config|icons|dom-utils)\.ts$/;

/**
 * The click path's own code, in one chunk: the send flow, the quests loader it
 * launches with, and the dialog helpers the message box, markup editor and
 * video preview share. One request instead of three, warmed before the click.
 */
const SEND = /\/src\/(send|quest-launcher|a11y-dialog)\.ts$/;

/**
 * Fully minify the CDN chunks. Vite's library mode keeps whitespace in ES
 * output (so a bundler can still read pure annotations), but these chunks go
 * straight to browsers from the CDN: whitespace was a quarter of the gzipped
 * startup chunk. Export names are kept, so chunk-to-chunk imports still link.
 */
function minifyChunks(): Plugin {
  return {
    name: "thumbs-minify-chunks",
    enforce: "post",
    renderChunk: {
      // After Vite's own renderChunk pass, which reprints the code.
      order: "post",
      async handler(code, chunk) {
        const out = await transformWithEsbuild(code, chunk.fileName, {
          minify: true,
          format: "esm",
          // Vite has already lowered syntax for the build target; only minify.
          target: "esnext",
          sourcemap: true,
        });
        return { code: out.code, map: out.map };
      },
    },
  };
}

export default defineConfig({
  plugins: [minifyChunks()],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    // Off here because minifyChunks() does it in full. Vite's own pass would
    // reprint the chunks with whitespace after ours.
    minify: false,
    // The features' CSS (inlined as strings) is still minified.
    cssMinify: "esbuild",
    lib: {
      // Only the CDN loader path is code-split. The npm entry (index.js) is a
      // separate NON-split full build (vite.config.index.ts) so bundler
      // consumers don't depend on the embed's runtime chunks.
      entry: {
        loader: resolve(__dirname, "src/loader.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        // Force the optional features into their own chunks. Without this,
        // index.js's static API re-exports pull annotate/screenshot into the
        // shared core chunk, so the loader path wouldn't actually shed them.
        // Pinning them here keeps the core lean; both the static (index) and
        // dynamic (embed) importers reference the same chunk — no duplication.
        manualChunks(id: string): string | undefined {
          if (id.includes("/src/annotate")) return "annotate";
          if (id.includes("/src/screenshot-dom")) return "screenshot-dom";
          if (id.includes("/src/screenshot")) return "screenshot";
          if (id.includes("/src/video-")) return "video"; // capture + orientation + redaction
          if (CORE.test(id)) return "core";
          if (SEND.test(id)) return "send";
          return undefined;
        },
      },
    },
  },
});
