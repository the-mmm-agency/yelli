import { AppBar as MuiAppBar } from '@material-ui/core'
import { Toolbar as MuiToolbar } from '@material-ui/core'

import { borders } from 'util/theme'
import { sizes } from 'util/theme'

import styled from '@emotion/styled'

export const AppBar = styled(MuiAppBar)`
  width: calc(100% - ${sizes('sideDrawer')});
  margin-left: ${sizes('sideDrawer')};
  border-bottom: ${borders('standard')};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: flex-end;
`
