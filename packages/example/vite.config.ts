import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      formats: ['iife'],
      name: 'index',
      fileName: '[name]',
      entry: './src/index.ts',
    },
    rollupOptions: {
      external: ['@iife-ioc-test/core'],
    },
    minify: false,
  },
});