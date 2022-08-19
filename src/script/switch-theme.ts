import { toggleTheme } from './theme'

const header = document.querySelector('header')

if (header) {
  let cooldown = 0
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
