import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.ts"],
      outDir: "dist",
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Qaid",
      fileName: "qaid",
      formats: ["umd", "es"],
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
      },
    },
    minify: "esbuild",
    sourcemap: true,
  },
});
