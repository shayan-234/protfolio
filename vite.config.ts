import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function nonBlockingCSS(): Plugin {
  return {
    name: 'non-blocking-css',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
        `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="$1"></noscript>`
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), nonBlockingCSS()],
  build: {
    target: "es2020",
    cssMinify: "esbuild",
    minify: "esbuild",
    reportCompressedSize: false,
  },
})
