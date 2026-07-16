import { defineConfig } from "vite";
import { resolve } from "path";

// Full, NON-split ESM entry for npm / bundler consumers
// (`import { QaidFeedback } from "@qaiddev/thumbs-embed"`).
//
// Code-splitting is purely a CDN-delivery optimization for the loader.js /
// embed.js path (so an unpkg <script> ships a tiny core and streams features on
// demand). A bundler re-bundles this package and does its OWN splitting, so it
// must not depend on the embed's internal runtime chunks — if one failed to
// load in a bundled app the feature would silently break. `inlineDynamicImports`
// bakes every feature into a single index.js: the whole embed downloads as one
// unit, no runtime chunk fetches, no partial-load failure mode.
//
// Runs after the split loader build with emptyOutDir:false so it only overwrites
// dist/index.js (leaving loader.js + chunks/ intact).
export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
        inlineDynamicImports: true,
      },
    },
  },
});
