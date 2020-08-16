import daynight from 'daynight'
import { useCallback, useEffect, useState } from 'react'
import { isSnapping } from './App.utils'

export const useDarkMode = () => {
  const day = daynight()
  const darkModeDaynight = day.error ? false : day.dark
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const isDark = darkModeDaynight || darkModeMediaQuery.matches

  const [darkMode, setDarkMode] = useState(isDark)
  const darkModeListener = useCallback(
    ({ matches }: MediaQueryListEvent) => {
      setDarkMode(matches)
    },
    [setDarkMode],
  )

  useEffect(() => {
    darkModeMediaQuery.addListener(darkModeListener)

    return () => {
      darkModeMediaQuery.removeListener(darkModeListener)
    }
  }, [darkModeMediaQuery, darkModeListener])

  useEffect(() => {
    if (!isSnapping) {
      if (darkMode) {
        document.body.classList.add('dark')
        document.body.classList.remove('light')
      } else {
        document.body.classList.add('light')
        document.body.classList.remove('dark')
      }
    }
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}
