import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
} from '@material-ui/core'
import styled from '@emotion/styled'

import { borders, sizes } from 'util/theme'
import { hidden } from 'styles/mixins.css'

export const AppBar = styled(MuiAppBar)`
  ${hidden({ down: 'sm' })}
  margin-left: ${sizes('sideDrawer')};
  width: calc(100% - ${sizes('sideDrawer')});
  border-bottom: ${borders('standard')};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: flex-end;
`
