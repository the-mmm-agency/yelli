import {
  InputAdornment,
  InputBase,
} from '@material-ui/core'

import { ThemeProp } from 'src/types'
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
  padding: ${spacing(0.5)} 0.5em;
  margin: ${spacing(0.5)};
  border: 1px solid ${fade('text.disabled', 0.6)};
  color: ${palette('text.secondary')};
  ${down('sm')} {
    opacity: 0;
  }
  ${radii('light')};
  font-family: ${(props: ThemeProp) =>
    props.theme.typography.fontFamily};
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
  padding: ${spacing(0.25)};
  margin: 0 ${spacing(1)};
  background-color: ${palette('background.darkest')};
  border: ${borders('standard')};
  ${radii('light')};
  width: 100%;
  ${up('md')} {
    padding: ${spacing(0.5)};
    input {
      &:hover,
      &:focus {
        width: 400px;
      }
      margin: 0;
      width: 300px;
      ${transitions('width')};
    }
  }
`
