import daynight from 'daynight'
import { useCallback, useEffect, useState } from 'react'

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
    document.body.className = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}
