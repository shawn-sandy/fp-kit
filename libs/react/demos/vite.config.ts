import { test } from 'vitest';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // add jsdom
    setupFiles: "./src/test/setup.ts",
  }

})
