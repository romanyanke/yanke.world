const pencils = document.getElementById('pencils')!

;(async () => {
  const response = await fetch(
    'https://romanyanke.github.io/pencilbox/description/',
  )
  const { description } = await response.json()

  pencils.innerText = description
})()
