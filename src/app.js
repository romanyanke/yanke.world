import daynight from 'daynight'

let theme = daynight().isDark
document.body.classList.add(theme ? 'night' : 'day')

const header = document.getElementsByTagName('header')[0]

header.addEventListener('click', () => {})
