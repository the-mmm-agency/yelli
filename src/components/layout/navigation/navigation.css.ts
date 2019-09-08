import { AppBar as MuiAppBar } from '@material-ui/core'

import { hidden } from 'src/styles/mixins.css'
import styled from 'src/util/styled'
import { borders } from 'src/util/theme'

const AppBar = styled(MuiAppBar)`
  ${hidden({ up: 'md' })}
  top: auto;
  bottom: 0;
  border-top: ${borders('standard')};
`

export default AppBar
