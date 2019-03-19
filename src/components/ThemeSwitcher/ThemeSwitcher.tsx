import React from 'react'
import { IThemeSwitcherProps, Theme } from './ThemeSwitcher.interface'

const sunIcon = '☀️'
const moonIcon = '🌛'

const ThemeSwitcher: React.SFC<IThemeSwitcherProps> = props => {
  const { theme, onChange } = props

  return (
    <button onClick={onChange} className="ThemeSwitcher-button">
      {theme === Theme.dark ? sunIcon : moonIcon}
    </button>
  )
}

export default ThemeSwitcher
