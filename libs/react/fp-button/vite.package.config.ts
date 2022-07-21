/** @format */

import { defineConfig, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(
    {insertTypesEntry: true,}
  ), splitVendorChunkPlugin()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  build: {
    outDir: resolve(__dirname, "./lib"),
    sourcemap: true,
    manifest: true,
    reportCompressedSize: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Link",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }

      }
    }
  }
})
