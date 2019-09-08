import { Typography as MuiTypography } from '@material-ui/core'
import {
  SizingProps,
  SpacingProps,
  TypographyProps,
  compose,
  sizing,
  spacing,
  typography,
} from '@material-ui/system'

import styled from 'src/util/styled'

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
