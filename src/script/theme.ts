import daynight from 'daynight'
import { timeGoes } from './calendar'

const isDark = daynight().dark

const enum Theme {
  light = 'day',
  dark = 'night',
}

document.body.classList.add(
  isDark ? Theme.dark : Theme.light,
)
updateMeta()

export const toggleTheme = () => {
  document.body.classList.toggle(Theme.light)
  document.body.classList.toggle(Theme.dark)
  updateMeta()
  timeGoes()
}

function updateMeta() {
  const color = getComputedStyle(
    document.body,
  ).getPropertyValue('--background')

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', color)
}
