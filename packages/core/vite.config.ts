import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'cjs'],
      fileName: 'index',
      entry: './src/index.ts',
    },
    minify: false,
  },
  plugins: [dtsPlugin({ })],
});