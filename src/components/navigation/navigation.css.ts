import { AppBar as MuiAppBar } from '@material-ui/core'

import { borders } from 'util/theme'
import { hidden } from 'styles/mixins.css'

import styled from '@emotion/styled'

const AppBar = styled(MuiAppBar)`
  ${hidden({ up: 'md' })}
  top: auto;
  bottom: 0;
  border-top: ${borders('standard')};
`

export default AppBar
