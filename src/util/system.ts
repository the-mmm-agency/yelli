import {
  borders,
  BordersProps,
  compose,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  palette,
  PaletteProps,
  positions,
  PositionsProps,
  sizing,
  SizingProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@material-ui/system'

export const system = compose(
  borders,
  display,
  flexbox,
  palette,
  positions,
  sizing,
  spacing,
  typography
)

export type SystemProps = BordersProps &
  DisplayProps &
  FlexboxProps &
  PaletteProps &
  PositionsProps &
  SizingProps &
  SpacingProps

export const layout = compose(
  borders,
  display,
  flexbox,
  positions,
  sizing,
  spacing
)

export type LayoutProps = BordersProps &
  DisplayProps &
  FlexboxProps &
  PositionsProps &
  SizingProps &
  SpacingProps

export const button = compose(
  borders,
  flexbox,
  spacing,
  sizing,
  typography
)

export type ButtonProps = BordersProps &
  FlexboxProps &
  SizingProps &
  SpacingProps &
  TypographyProps
