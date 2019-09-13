export type IThemeSwitcherProps = ThemeSwitcherOwnProps

export enum Theme {
  light,
  dark,
}

export interface ThemeSwitcherOwnProps {
  theme: Theme
  onChange(theme: Theme): void
}
