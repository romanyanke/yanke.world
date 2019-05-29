import { Theme } from './ThemeSwitcher.interface'

export enum ThemeIcon {
  sunIcon = '☀️',
  moonIcon = '🌛',
}

export const swapTheme = (theme: Theme): Theme => (theme === Theme.light ? Theme.dark : Theme.light)