import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/hooks.ts', 'src/icons.ts'],
  outDir: 'libs',
  splitting: true,
  sourcemap: true,
  dts: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  clean: true,
  format: ['esm', 'cjs'],
  minify: true,
})
