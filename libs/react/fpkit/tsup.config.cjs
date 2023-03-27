import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  clean: true,
  format: ['esm', 'cjs'],
  minify: true,
})
