const pencils = document.getElementById('pencils')

// The markup already reads "a collection of pencils", so every failure
// path here just leaves that wording alone.
if (pencils) {
  fetch(
    'https://romanyanke.github.io/pencilbox/en/statistic/',
  )
    .then(response => {
      if (!response.ok) {
        // GitHub Pages answers a missing path with the body "404",
        // which would otherwise become the link's text
        throw new Error(
          `statistic responded ${response.status}`,
        )
      }

      return response.text()
    })
    .then(statistic => {
      const text = statistic.trim()

      // a whole error page would fit in a text response too
      if (text && text.length < 100) {
        pencils.innerText = text
      }
    })
    .catch(() => {})
}
