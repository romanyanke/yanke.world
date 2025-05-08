import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [inlineSvgPlugin(), VitePWA()],
  build: {
    minify: 'esbuild',
    assetsInlineLimit: 0, // Ensures all assets are inlined
  },
  server: { allowedHosts: ['ypro.local'], port: 3000 },
})

function inlineSvgPlugin() {
  return {
    name: 'inline-svg',
    transformIndexHtml(html) {
      return html.replace(
        /<inline svg="(.*?)" \/>/g,
        (_, svgPath) => {
          const fullPath = path.resolve(__dirname, svgPath)
          const svgContent = readFileSync(fullPath, 'utf-8')
          return svgContent
        },
      )
    },
  }
}
