import React from 'react'
import { IThemeSwitcherProps, Theme } from './ThemeSwitcher.interface'
import { swapTheme, ThemeIcon } from './ThemeSwitcher.utils'

const ThemeSwitcher: React.SFC<IThemeSwitcherProps> = props => {
  const { theme, onChange } = props

  return (
    <button onClick={() => onChange(swapTheme(theme))} className="ThemeSwitcher-button">
      {theme === Theme.dark ? ThemeIcon.sunIcon : ThemeIcon.moonIcon}
    </button>
  )
}

export default ThemeSwitcher
