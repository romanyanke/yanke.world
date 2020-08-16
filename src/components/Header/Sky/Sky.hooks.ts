import daynight from 'daynight'
import { useCallback, useEffect, useState } from 'react'
import { isSnapping } from '../../App/App.utils'
import styles from '../../../index.module.css'

export const useDarkMode = () => {
  const day = daynight()
  const darkModeDaynight = day.error ? false : day.dark
  const darkModeMediaQuery = matchMedia('(prefers-color-scheme: dark)')
  const isDark = darkModeDaynight || darkModeMediaQuery.matches
  const [darkMode, setDarkMode] = useState(isDark)
  const darkModeListener = useCallback(
    ({ matches }: MediaQueryListEvent) => {
      setDarkMode(matches)
    },
    [setDarkMode],
  )

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [setDarkMode, darkMode])

  useEffect(() => {
    darkModeMediaQuery.addListener(darkModeListener)

    return () => {
      darkModeMediaQuery.removeListener(darkModeListener)
    }
  }, [darkModeMediaQuery, darkModeListener])

  useEffect(() => {
    if (!isSnapping) {
      document.body.classList.add(styles.transitions)

      if (darkMode) {
        document.body.classList.add(styles.dark)
        document.body.classList.remove(styles.light)
      } else {
        document.body.classList.add(styles.light)
        document.body.classList.remove(styles.dark)
      }
    }
  }, [darkMode])

  return [darkMode, toggleDarkMode] as const
}
