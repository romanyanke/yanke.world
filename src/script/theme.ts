import daynight, { DaynightTheme } from 'daynight'
import { timeGoes } from './calendar'

let theme: DaynightTheme

try {
  theme = daynight().theme
} catch (e) {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches
  ) {
    theme = 'night'
  } else {
    theme = 'day'
  }
}

const themes: Record<DaynightTheme, DaynightTheme> = {
  day: 'day',
  night: 'night',
}

let isDarkMode = theme === themes.night

document.documentElement.classList.add(themes[theme])
updateMeta()

export const toggleTheme = () => {
  isDarkMode = !isDarkMode
  const root = document.documentElement.classList
  root.toggle(themes.day)
  root.toggle(themes.night)
  updateMeta()
  timeGoes()
}

function updateMeta() {
  // color-scheme is handled by the .day / .night classes in app.css

  // Plain hex, kept in sync with --background in app.css by hand:
  // reading the computed value gives back the raw oklch() token
  // (modern color spaces serialise in their own space), and the
  // theme-color meta wants a colour every UA can parse.
  const color = isDarkMode ? '#1a1310' : '#f9f3f0'

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', color)
}
