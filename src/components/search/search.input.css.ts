import {
  InputAdornment,
  InputBase,
} from '@material-ui/core'

import styled from 'src/util/styled'
import {
  borders,
  down,
  fade,
  palette,
  radii,
  spacing,
  transitions,
  up,
} from 'src/util/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const Kbd = styled.kbd`
  margin: ${spacing(0.5)};
  padding: ${spacing(0.5)} 0.5em;
  color: ${palette('text.secondary')};
  font-family: ${({ theme: { typography } }) =>
    typography.fontFamily};
  border: 1px solid ${fade('text.disabled', 0.6)};
  ${down('sm')} {
    opacity: 0;
  }
  ${radii('light')};
`
export const StartAdornment = styled(InputAdornment).attrs({
  position: 'start',
})`
  margin-right: ${spacing(2)};
  margin-left: ${spacing(1)};
  ${down('sm')} {
    margin-right: ${spacing(-2)};
    opacity: 0;
  }
`

export const Input = styled(InputBase)`
  width: 100%;
  margin: 0 ${spacing(1)};
  padding: ${spacing(0.25)};
  background-color: ${palette('background.darkest')};
  border: ${borders('standard')};
  ${radii('light')};
  ${up('md')} {
    padding: ${spacing(0.5)};
    input {
      width: 300px;
      &:hover,
      &:focus {
        width: 400px;
      }
      margin: 0;
      ${transitions('width')};
    }
  }
`
