import { defineConfig } from "vite";
import { resolve } from "path";

// Classic single-tag embed loader (dist/embed.js). Feature-detects ES-module
// support and injects loader.js (modern) or qaid.umd.cjs (legacy). Because it
// must run on the legacy browsers we fall back for, it's built as a classic
// IIFE targeting es2015 (not ESM). Runs after the other builds with
// emptyOutDir:false so it adds to dist/ rather than wiping it.
export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "es2015",
    minify: "esbuild",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/embed-loader.ts"),
      name: "QaidEmbedLoader",
      fileName: () => "embed.js",
      formats: ["iife"],
    },
  },
});
