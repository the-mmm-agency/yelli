import styled from '@emotion/styled'
import { Typography as MuiTypography } from '@material-ui/core'
import {
  sizing,
  spacing,
  typography,
} from '@material-ui/system'

const Typography = styled(MuiTypography)(
  typography,
  spacing,
  sizing
)

export default Typography
