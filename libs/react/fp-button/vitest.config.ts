/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // add jsdom
    setupFiles: './src/test/setup.ts', // setup includes
    coverage: { // config coverage
      reporter: ['text', 'html'], // generate coverage reports
      exclude: [
        'node_modules/',
        'src/test/setup.ts'
      ],
    },
  },
});
