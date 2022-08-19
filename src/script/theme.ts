import daynight from 'daynight'

const enum Theme {
  light = 'day',
  dark = 'night',
}

const isDark = daynight().dark

document.body.classList.add(
  isDark ? Theme.dark : Theme.light,
)
updateMeta()

export const toggleTheme = () => {
  document.body.classList.toggle(Theme.light)
  document.body.classList.toggle(Theme.dark)
  updateMeta()
}

function updateMeta() {
  const color = getComputedStyle(
    document.body,
  ).getPropertyValue('--background')
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', color)
}
