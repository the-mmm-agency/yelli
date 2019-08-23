import { BordersProps } from '@material-ui/system'
import { DisplayProps } from '@material-ui/system'
import { FlexboxProps } from '@material-ui/system'
import { PaletteProps } from '@material-ui/system'
import { PositionsProps } from '@material-ui/system'
import { SizingProps } from '@material-ui/system'
import { SpacingProps } from '@material-ui/system'
import { TypographyProps } from '@material-ui/system'

import { borders } from '@material-ui/system'
import { compose } from '@material-ui/system'
import { display } from '@material-ui/system'
import { flexbox } from '@material-ui/system'
import { palette } from '@material-ui/system'
import { positions } from '@material-ui/system'
import { sizing } from '@material-ui/system'
import { spacing } from '@material-ui/system'
import { typography } from '@material-ui/system'

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
