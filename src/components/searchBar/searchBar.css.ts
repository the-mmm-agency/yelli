import {
  InputAdornment,
  InputBase,
} from '@material-ui/core'

import styled from 'src/util/styled'
import { palette, radii, spacing } from 'src/util/theme'

export const SearchInput = styled(InputBase)`
  &:hover {
    background-color: ${palette('input.hover')};
  }
  flex-grow: 1;
  margin: ${spacing(4, 2)};
  padding: ${spacing(1)};
  font-weight: 500;
  background-color: ${palette('input.default')};
  ${radii('default')}
`

export const Adornment = styled(InputAdornment)`
  margin-right: ${spacing(2)};
  margin-left: ${spacing(1)};
`
