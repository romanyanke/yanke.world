import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import path from 'node:path'

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
  // Tolerates line breaks and extra whitespace inside the tag, then
  // refuses to emit HTML that still holds an <inline> tag: an
  // unmatched one used to pass through into the output, leaving an
  // invalid element and a missing icon on a green build.
  const tag = /<inline\s+svg="([^"]+)"\s*\/>/g
  const leftover = /<inline\b[\s\S]{0,120}/

  return {
    name: 'inline-svg',
    transformIndexHtml(html) {
      const inlined = html.replace(tag, (_, svgPath) =>
        readFileSync(
          path.resolve(import.meta.dirname, svgPath),
          'utf-8',
        ),
      )

      const unmatched = leftover.exec(inlined)

      if (unmatched) {
        throw new Error(
          `inline-svg: left an unprocessed tag in the output near ${JSON.stringify(unmatched[0])}`,
        )
      }

      return inlined
    },
  }
}
