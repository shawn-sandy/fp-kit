/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // add jsdom
    setupFiles: "./src/test/setup.ts", // setup includes
    coverage: {
      // config coverage
      reporter: ["text", "html"], // generate coverage reports
      exclude: ["node_modules/", "src/test/setup.ts"]
    }
  }
})
