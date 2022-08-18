import daynight from 'daynight'

const isDark = daynight().dark

document.body.classList.add(isDark ? 'night' : 'day')
