import { Button as MuiButton } from '@material-ui/core'

import styled from 'src/util/styled'
import { button, ButtonProps } from 'src/util/system'

const Button = styled(MuiButton)<ButtonProps>(button)
export default Button
