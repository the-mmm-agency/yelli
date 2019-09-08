import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
} from '@material-ui/core'

import styled from 'src/util/styled'
import { borders, sizes } from 'src/util/theme'

export const AppBar = styled(MuiAppBar)`
  width: calc(100% - ${sizes('sideDrawer')});
  margin-left: ${sizes('sideDrawer')};
  border-bottom: ${borders('standard')};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: flex-end;
`
