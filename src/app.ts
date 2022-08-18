import daynight from 'daynight'

const isDark = daynight().dark
const header = document.getElementsByTagName('header')[0]

document.body.classList.add(isDark ? 'night' : 'day')

let cooldown = 0
const animationDuration =
  parseFloat(
    getComputedStyle(
      document.getElementsByClassName('moon')[0],
    ).animationDuration,
  ) * 1000

header.addEventListener('click', () => {
  const now = performance.now()
  if (cooldown + animationDuration > now) {
    return
  }

  cooldown = now
  document.body.classList.toggle('day')
  document.body.classList.toggle('night')
})
