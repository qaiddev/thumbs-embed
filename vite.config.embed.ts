import { defineConfig } from "vite";
import { resolve } from "path";
import { createHash } from "crypto";
import { readFileSync, readdirSync, writeFileSync } from "fs";

// Classic single-tag embed loader (dist/embed.js). Feature-detects ES-module
// support and injects loader.js (modern) or qaid.umd.cjs (legacy, or when the
// tag is pinned with `integrity`). Because it must run on the legacy browsers
// we fall back for, it's built as a classic IIFE targeting es2015 (not ESM).
// Runs after the other builds with emptyOutDir:false so it adds to dist/
// rather than wiping it.
//
// The UMD bundle's sha384 is baked in here, so a customer's `integrity` on
// embed.js covers the bundle too: embed.js sets it as the injected tag's
// `integrity`. This build must run after the UMD build (see package.json).
function sri(file: string): string {
  const bytes = readFileSync(resolve(__dirname, file));
  return `sha384-${createHash("sha384").update(bytes).digest("base64")}`;
}

// The progressive build's files, for the import map embed.js writes when its
// tag is pinned (see embed-loader.ts): loader.js and every chunk it can load.
function moduleIntegrity(): Record<string, string> {
  const hashes: Record<string, string> = { "loader.js": sri("dist/loader.js") };
  for (const name of readdirSync(resolve(__dirname, "dist/chunks"))) {
    if (name.endsWith(".js")) hashes[`chunks/${name}`] = sri(`dist/chunks/${name}`);
  }
  return hashes;
}

// integrity-probe.js and a hash it can never have: a browser that enforces
// import-map integrity refuses it, which is how embed.js knows the map works.
const PROBE = "/* thumbs-embed: import-map integrity probe. Never runs where the check works. */\nexport {};\n";
writeFileSync(resolve(__dirname, "dist/integrity-probe.js"), PROBE);
const PROBE_MISMATCH = `sha384-${createHash("sha384").update("not " + PROBE).digest("base64")}`;

export default defineConfig({
  define: {
    __QAID_UMD_INTEGRITY__: JSON.stringify(sri("dist/qaid.umd.cjs")),
    __QAID_MODULE_INTEGRITY__: JSON.stringify(moduleIntegrity()),
    __QAID_PROBE_MISMATCH__: JSON.stringify(PROBE_MISMATCH),
  },
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
