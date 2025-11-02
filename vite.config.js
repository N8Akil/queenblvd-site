import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: false
  },
  server: {
    port: 3005,
    open: true
  },
  css: {
    devSourcemap: true
  }
});