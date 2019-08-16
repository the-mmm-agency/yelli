import { AppBar as MuiAppBar } from '@material-ui/core'
import styled from '@emotion/styled'

import { hidden } from 'styles/mixins.css'
import { borders } from 'util/theme'

const AppBar = styled(MuiAppBar)`
  ${hidden({ up: 'md' })}
  border-top: ${borders('standard')};
  bottom: 0;
  top: auto;
`

export default AppBar
