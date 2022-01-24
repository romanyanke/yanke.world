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
  const setDarkModeThrottled = useMemo(
    () => throttle(setDarkMode, 600),
    [setDarkMode],
  )

  useEffect(() => {
    const darkModeListener = ({ matches }: MediaQueryListEvent) =>
      setDarkMode(matches)
    darkModeMediaQuery.addEventListener('change', darkModeListener)

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeListener)
    }
  }, [darkModeMediaQuery])

  useEffect(() => {
    if (isSnapping) {
      return
    }
    document.body.classList.toggle(styles.transitions, true)
    document.body.classList.toggle(styles.dark, darkMode)
    document.body.classList.toggle(styles.light, !darkMode)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        'content',
        getComputedStyle(document.body).getPropertyValue('--background'),
      )
  }, [darkMode])

  return [darkMode, setDarkModeThrottled] as const
}
