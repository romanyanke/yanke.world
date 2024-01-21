const trigger = document.getElementById('show-photo')!
const container = document.getElementById('photo-frame')!

trigger.addEventListener('click', () => {
  const iframe = document.createElement('iframe')
  iframe.style.opacity = '0'
  iframe.onload = () => {
    iframe.style.opacity = '1'
  }
  iframe.src = 'https://me.yanke.ru/random#focus'
  container.prepend(iframe)
})
