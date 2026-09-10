import daynight, { type DaynightTheme } from 'daynight'
import { timeGoes } from './calendar'

const root = document.documentElement

root.classList.add(detectTheme())
updateMeta()

export const toggleTheme = () => {
  root.classList.toggle('day')
  root.classList.toggle('night')
  updateMeta()
  timeGoes()
}

function detectTheme(): DaynightTheme {
  try {
    return daynight().theme
  } catch {
    // daynight throws when the visitor's timezone is missing from its
    // table; the system preference is the next best guess
    return window.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches
      ? 'night'
      : 'day'
  }
}

function updateMeta() {
  // Read the colour out of the stylesheet rather than keeping a copy
  // here: --meta-theme-color is hex, so it comes back as rgb() and
  // follows the theme on its own.
  const probe = document.createElement('span')
  probe.style.cssText =
    'display:none;color:var(--meta-theme-color)'
  document.body.append(probe)
  const color = getComputedStyle(probe).color
  probe.remove()

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', color)
}
