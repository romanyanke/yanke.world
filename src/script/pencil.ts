const pencils = document.getElementById('pencils')

if (pencils) {
  fetch('https://romanyanke.github.io/pencilbox/statistic/')
    .then(response => response.text())
    .then(statistic => (pencils.innerText = statistic))
}
