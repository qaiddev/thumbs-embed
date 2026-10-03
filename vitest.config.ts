import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["src/**/*.test.ts"],
    setupFiles: ["./vitest.setup.ts"],
    css: {
      include: [/.*/],
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "json-summary", "html"],
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/index.ts"],
      // Measured 2026-10-03: lines 100, branches 95.7, functions 100, statements 100.
      // Branches sit at the 95 floor every qaid package keeps; raise as it climbs.
      thresholds: {
        lines: 100,
        branches: 95,
        functions: 100,
        statements: 100,
      },
    },
  },
});
