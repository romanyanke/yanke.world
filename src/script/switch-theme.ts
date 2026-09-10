import { toggleTheme } from './theme'

const header = document.querySelector('header')

if (header) {
  // not 0: that would read as "last toggled at navigation start"
  // and swallow the first click while the page is younger than
  // the animation
  let cooldown = -Infinity
  const animationDuration =
    parseFloat(
      getComputedStyle(document.body).getPropertyValue(
        '--day-length',
      ),
    ) * 1000

  header.addEventListener('click', () => {
    const now = performance.now()
    if (cooldown + animationDuration > now) {
      return
    }

    toggleTheme()
    cooldown = now
  })
}
