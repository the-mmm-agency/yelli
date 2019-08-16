import {
  InputBase,
  InputAdornment,
} from '@material-ui/core'
import styled from '@emotion/styled'

import {
  palette,
  shape,
  spacing,
  transitions,
} from 'util/theme'

export const SearchInput = styled(InputBase)`
  &:hover {
    background-color: ${palette('input.hover')};
  }
  background-color: ${palette('input.default')};
  margin: ${spacing(4, 2)};
  padding: ${spacing(1)};
  font-weight: 500;
  flex-grow: 1;
  ${transitions(['background-color', 'box-shadow'])};
  ${shape}
`

export const Adornment = styled(InputAdornment)`
  margin-left: ${spacing(1)};
  margin-right: ${spacing(2)};
`
