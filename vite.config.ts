import { defineConfig } from "vite";
import { resolve } from "path";

// UMD build: the legacy single-file bundle loaded via a classic <script> from
// the CDN. UMD/IIFE can't be code-split, so dynamic imports are inlined here —
// it stays the full bundle. Progressive delivery lives in the ESM build
// (vite.config.esm.ts). This build runs first and clears dist/.
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Qaid",
      fileName: "qaid",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
      },
    },
    minify: "esbuild",
    sourcemap: true,
    emptyOutDir: true,
  },
});
