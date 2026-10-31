import { defineConfig } from "vite";
import { resolve } from "path";

// ESM build with code-splitting. Two entries:
//   index.js  — full API surface (re-exports pull features in eagerly)
//   loader.js — minimal auto-init; screenshot / video / redaction split into
//               on-demand chunks under dist/chunks/.
// Runs after the UMD build with emptyOutDir:false so it adds to dist/ rather
// than wiping the UMD bundle.
/**
 * What the loader needs at startup, in one core chunk. The helpers it shares
 * with annotate (icons, dom-utils) must be named here: left to Rollup they
 * landed in the annotate chunk, and the core imported all of annotate (5 KB)
 * at startup to reach them. Re-check this list when the loader's static
 * imports change; anything left off lands in whichever chunk Rollup picks.
 */
const CORE = /\/src\/(embed|bootstrap|styles|a11y|modal-positioning|console-capture|quest-launcher|icons|dom-utils)\.ts$/;

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: "esbuild",
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
          return undefined;
        },
      },
    },
  },
});
