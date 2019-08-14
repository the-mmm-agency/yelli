import { Drawer as MuiDrawer } from '@material-ui/core'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import { up } from 'util/theme'

export const Nav = styled.nav`
  ${up('sm')} {
    flex-shrink: 0;
    width: ${theme('sizes.sideDrawer')};
    flex-shrink: 0;
    width: ${theme('sizes.sideDrawer')};
    z-index: 1000;
  }
`

export const Drawer = styled(MuiDrawer)`
  ${up('sm')} {
    .MuiDrawer-paper {
      border-color: ${theme('palette.divider')};
      overflow: hidden;
      width: ${theme('sizes.sideDrawer')};
    }
  }
`

export const LogoContainer = styled.div`
  ${up('sm')} {
    border-bottom: 1px solid ${theme('palette.divider')};
    display: flex;
    height: 64px;
    width: ${theme('sizes.sideDrawer')};
  }
`
