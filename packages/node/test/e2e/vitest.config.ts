import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// e2e runs the built CLI, so it stays out of the unit config. It lives here,
// not at the package root, because the coverage gate picks up any root
// `vitest.*.config.ts`. Run via `just node-e2e`, which builds first.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  test: {
    include: ['**/*.test.ts'],
  },
});
