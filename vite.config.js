import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [inlineSvgPlugin(), VitePWA()],
  build: {
    // The floor implied by the CSS: oklch() and light-dark().
    // package.json used to carry a browserslist query, but nothing
    // in this pipeline read it - no autoprefixer, no
    // postcss-preset-env, Vite drives esbuild directly - so it
    // documented a support target that was never enforced.
    target: [
      'chrome123',
      'edge123',
      'firefox120',
      'safari17.4',
    ],
    minify: true,
    assetsInlineLimit: 0, // Never inline assets; keep them as separate files
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
