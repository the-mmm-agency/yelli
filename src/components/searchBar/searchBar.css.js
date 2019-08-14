import { InputBase, InputAdornment } from '@material-ui/core'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import { spacing, transitions } from 'util/theme'

export const SearchInput = styled(InputBase)`
  &:hover {
    background-color: ${theme('palette.input.hover')};
  }
  background-color: ${theme('palette.input.default')};
  border-radius: ${theme('shape.borderRadius')};
  margin: ${spacing(4)} ${spacing(2)};
  padding: ${spacing(1)};
  font-weight: 500;
  flex-grow: 1;
  transition: ${transitions(['background-color', 'box-shadow'])};
  will-change: background-color, box-shadow;
`

export const Adornment = styled(InputAdornment)`
  margin-left: ${spacing(1)};
  margin-right: ${spacing(2)};
`
