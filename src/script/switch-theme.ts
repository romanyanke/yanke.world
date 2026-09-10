import { toggleTheme } from './theme'

const toggle =
  document.querySelector<HTMLButtonElement>('.sky')

if (toggle) {
  // not 0: that would read as "last toggled at navigation start"
  // and swallow the first click while the page is younger than
  // the animation
  let cooldown = -Infinity
  const animationDuration = readDuration('--day-length')

  const describeAction = () =>
    document.documentElement.classList.contains('night')
      ? 'Switch to the day theme'
      : 'Switch to the night theme'

  const syncLabel = () =>
    toggle.setAttribute('aria-label', describeAction())

  syncLabel()

  toggle.addEventListener('click', () => {
    const now = performance.now()
    if (cooldown + animationDuration > now) {
      return
    }

    toggleTheme()
    syncLabel()
    cooldown = now
  })
}

// parseFloat alone would read --day-length: 600ms as 600 seconds
function readDuration(token: string) {
  const value = getComputedStyle(document.body)
    .getPropertyValue(token)
    .trim()
  const parsed = /^([\d.]+)(ms|s)$/.exec(value)

  if (!parsed) {
    return 0
  }

  const [, amount, unit] = parsed

  return Number(amount) * (unit === 's' ? 1000 : 1)
}
