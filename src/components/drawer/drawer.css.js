import { Drawer } from '@material-ui/core'
import styled from '@emotion/styled'

import { hidden } from 'styles/mixins.css'
import { up, borders, sizes } from 'util/theme'

export const Nav = styled.nav`
  ${hidden({ down: 'sm' })}
  ${up('sm')} {
    flex-shrink: 0;
    flex-shrink: 0;
    width: ${sizes('sideDrawer')};
    z-index: 1000;
    &,
    .MuiDrawer-paper {
      width: ${sizes('sideDrawer')};
    }
  }
`

export const DrawerContainer = styled(Drawer)`
  ${up('sm')} {
    .MuiDrawer-paper {
      border-left: ${borders('standard')};
      overflow: hidden;
    }
  }
`

export const LogoContainer = styled.div`
  ${up('sm')} {
    border-bottom: ${borders('standard')};
    display: flex;
    height: 64px;
  }
`
