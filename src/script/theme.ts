import daynight, { DaynightTheme } from 'daynight'
import { timeGoes } from './calendar'

const { theme } = daynight()
const themes: Record<DaynightTheme, DaynightTheme> = {
  day: 'day',
  night: 'night',
}

let isDarkMode = theme === themes.night

document.body.classList.add(themes[theme])
updateMeta()

export const toggleTheme = () => {
  isDarkMode = !isDarkMode
  document.body.classList.toggle(themes.day)
  document.body.classList.toggle(themes.night)
  updateMeta()
  timeGoes()
}

function updateMeta() {
  document.documentElement.style.setProperty(
    'color-scheme',
    isDarkMode ? 'dark' : 'light',
  )

  const color = getComputedStyle(
    document.body,
  ).getPropertyValue('--background')

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', color)
}
