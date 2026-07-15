import { defineConfig } from "vite";
import { resolve } from "path";

// ESM build with code-splitting. Two entries:
//   index.js  — full API surface (re-exports pull features in eagerly)
//   loader.js — minimal auto-init; screenshot / video / redaction split into
//               on-demand chunks under dist/chunks/.
// Runs after the UMD build with emptyOutDir:false so it adds to dist/ rather
// than wiping the UMD bundle.
export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
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
          return undefined;
        },
      },
    },
  },
});
