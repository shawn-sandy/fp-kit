/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // add jsdom
    setupFiles: './src/test/setup.ts', // setup includes
    coverage: { // config coverage
      reporter: ['text', 'html'], // generate coverage reports
      exclude: [
        'node_modules/'
      ],
    },
  },
});
