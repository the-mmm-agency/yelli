import styled from '@emotion/styled'
import { Button as MuiButton } from '@material-ui/core'
import {
  borders,
  flexbox,
  sizing,
  spacing,
  typography,
} from '@material-ui/system'

const Button = styled(MuiButton)(
  borders,
  flexbox,
  spacing,
  sizing,
  typography
)

export default Button
