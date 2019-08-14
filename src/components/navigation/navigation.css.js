import { AppBar as MuiAppBar } from '@material-ui/core'
import styled from '@emotion/styled'
import { palette } from 'styled-tools'

import { up } from 'util/theme'

const AppBar = styled(MuiAppBar)`
  ${up('md')} {
    display: none;
  }
  border-top: 1px solid ${palette('divider')};
  bottom: 0;
  top: auto;
`

export default AppBar
