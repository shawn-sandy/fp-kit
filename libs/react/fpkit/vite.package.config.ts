/** @format */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(
    {insertTypesEntry: true,}
  )],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  build: {
    outDir: resolve(__dirname, "./lib"),
    sourcemap: true,
    minify: true,
    manifest: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FP",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        compact: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
})
