import {
  AppBar as MuiAppBar,
  ButtonBase,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core'
import { theme, ifProp } from 'styled-tools'
import styled from '@emotion/styled'

import { up } from 'util/theme'

export const AppBar = styled(MuiAppBar)`
  ${up('md')} {
    margin-left: ${theme('sizes.sideDrawer')};
    width: calc(100% - ${theme('sizes.sideDrawer')});
  }
  border-bottom: 1px solid ${theme('palette.divider')};
  margin-left: 0;
  width: 100%;
`

export const LogoButton = styled(ButtonBase)`
  ${up('md')} {
    opacity: 0;
    pointer-events: none;
  }
`

export const BackButton = styled(IconButton)`
  ${up('md')} {
    opacity: 0;
    pointer-events: none;
  }
  opacity: ${ifProp('hidden', 0, 1)};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`
