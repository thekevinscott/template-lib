import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// e2e runs the built CLI, so it stays out of the unit config and its coverage
// gate. Run via `just node-e2e`, which builds first.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  test: {
    include: ['test/e2e/**/*.test.ts'],
  },
});
