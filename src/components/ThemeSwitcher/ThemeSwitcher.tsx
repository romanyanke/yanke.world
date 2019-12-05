import React from 'react'
import { ThemeSwitcherProps } from './ThemeSwitcher.interface'
import { ThemeIcon } from './ThemeSwitcher.utils'

const ThemeSwitcher = ({ darkMode, setDarkMode }: ThemeSwitcherProps) => (
  <button onClick={() => setDarkMode(!darkMode)} className="ThemeSwitcher-button">
    <span className="ThemeSwitcher-icon">{darkMode ? ThemeIcon.sunIcon : ThemeIcon.moonIcon}</span>
  </button>
)

export default ThemeSwitcher
