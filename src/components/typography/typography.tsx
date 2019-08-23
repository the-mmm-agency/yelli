import { Typography as MuiTypography } from '@material-ui/core'
import styled from 'util/styled'
import {
  compose,
  sizing,
  SizingProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@material-ui/system'

const Typography = styled(MuiTypography)<
  SizingProps & SpacingProps & TypographyProps
>`
  ${compose(
    typography,
    spacing,
    sizing
  )}
`
export default Typography
