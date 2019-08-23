import styled from 'util/styled'
import { Button as MuiButton } from '@material-ui/core'
import { button, ButtonProps } from 'util/system'

const Button = styled(MuiButton)<ButtonProps>(button)
export default Button
