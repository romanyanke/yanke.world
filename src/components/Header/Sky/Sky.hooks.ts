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

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [setDarkMode, darkMode])

  useEffect(() => {
    const darkModeListener = ({ matches }: MediaQueryListEvent) => setDarkMode(matches)
    darkModeMediaQuery.addEventListener('change', darkModeListener)

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeListener)
    }
  }, [darkModeMediaQuery])

  useEffect(() => {
    if (!isSnapping) {
      document.body.classList.toggle(styles.transitions, true)
      document.body.classList.toggle(styles.dark, darkMode)
      document.body.classList.toggle(styles.light, !darkMode)
    }
  }, [darkMode])

  return [darkMode, toggleDarkMode] as const
}
