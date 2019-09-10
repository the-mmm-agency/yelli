import {
  InputAdornment,
  InputBase,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

import styled from 'src/util/styled'
import {
  borders,
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

export const Adornment = styled(InputAdornment)`
  margin-right: ${spacing(2)};
  margin-left: ${spacing(1)};
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

export const Input = styled(InputBase)`
  padding: ${spacing(1)};
  margin-right: ${spacing(1)};
  margin-left: ${spacing(1)};
  background-color: ${palette('background.darkest')};
  border: ${borders('standard')};
  ${radii('default')};
  width: 100%;
  ${up('md')} {
    input {
      &:hover,
      &:focus {
        width: 200px;
      }
      width: 120px;
      ${transitions('width')};
    }
  }
`
