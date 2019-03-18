export type IThemeSwitcherProps = IThemeSwitcherOwnProps

export enum Theme {
  light,
  dark,
}

export interface IThemeSwitcherOwnProps {
  theme: Theme
  onChange(theme?: Theme): void
}
