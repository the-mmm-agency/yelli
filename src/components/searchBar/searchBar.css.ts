import { InputAdornment } from '@material-ui/core'
import { InputBase } from '@material-ui/core'

import { palette } from 'util/theme'
import { radii } from 'util/theme'
import { spacing } from 'util/theme'
import { transitions } from 'util/theme'

import styled from 'util/styled'

export const SearchInput = styled(InputBase)`
  &:hover {
    background-color: ${palette('input.hover')};
  }
  flex-grow: 1;
  margin: ${spacing(4, 2)};
  padding: ${spacing(1)};
  font-weight: 500;
  background-color: ${palette('input.default')};
  ${transitions(['background-color', 'box-shadow'])}
  ${radii('default')}
`

export const Adornment = styled(InputAdornment)`
  margin-right: ${spacing(2)};
  margin-left: ${spacing(1)};
`
