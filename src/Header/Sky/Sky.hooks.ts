import daynight from 'daynight'
import { useMemo, useEffect, useState } from 'react'
import { isSnapping } from '../../App/App.utils'
import styles from '../../index.module.css'
import throttle from 'lodash/throttle'

export const useDarkMode = () => {
  const darkModeDaynight = daynight().dark
  const darkModeMediaQuery = matchMedia('(prefers-color-scheme: dark)')
  const isDark = darkModeDaynight || darkModeMediaQuery.matches
  const [darkMode, setDarkMode] = useState(isDark)
  const setDarkModeThrottled = useMemo(() => throttle((mode: boolean) => setDarkMode(mode), 500), [
    setDarkMode,
  ])

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

  return [darkMode, setDarkModeThrottled] as const
}
