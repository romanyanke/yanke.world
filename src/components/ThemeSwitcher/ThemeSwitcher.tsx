import React from 'react'
import { IThemeSwitcherProps, Theme } from './ThemeSwitcher.interface'
import { swapTheme, ThemeIcon } from './ThemeSwitcher.utils'

const ThemeSwitcher = ({ theme, onChange }: IThemeSwitcherProps) => (
  <button
    key={theme}
    onClick={() => onChange(swapTheme(theme))}
    className={`ThemeSwitcher-button theme-${theme}`}
  >
    <span className="ThemeSwitcher-icon">
      {theme === Theme.dark ? ThemeIcon.sunIcon : ThemeIcon.moonIcon}
    </span>
  </button>
)

export default ThemeSwitcher
