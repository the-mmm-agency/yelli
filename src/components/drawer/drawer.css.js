import styled from '@emotion/styled'

import { hidden } from 'styles/mixins.css'
import { up, borders, sizes, zIndex } from 'util/theme'

export const Nav = styled.nav`
  ${hidden({ down: 'sm' })}
  ${up('sm')} {
    flex: 0 0 ${sizes('sizeDrawer')};
    z-index: ${zIndex('mobileStepper')};
    .MuiDrawer-paper {
      border-left: ${borders('standard')};
      overflow: hidden;
      width: ${sizes('sideDrawer')};
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
