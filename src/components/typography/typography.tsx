import { styled } from '@material-ui/styles'
import { Typography as MuiTypography } from '@material-ui/core'
import {
  compose,
  sizing,
  spacing,
  typography,
} from '@material-ui/system'

const Typography = styled(MuiTypography)(
  compose(
    typography,
    spacing,
    sizing
  )
)

export default Typography
