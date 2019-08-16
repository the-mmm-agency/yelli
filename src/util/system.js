import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  positions,
  sizing,
  spacing,
  typography,
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

export const layout = compose(
  borders,
  display,
  flexbox,
  positions,
  sizing,
  spacing
)
