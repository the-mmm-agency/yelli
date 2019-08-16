import styled from '@emotion/styled'
import { hidden } from 'styles/mixins.css'
import { borders, sizes, up, zIndex } from 'util/theme'

export const Nav = styled.nav`
  ${hidden({ down: 'sm' })} ${up('sm')} {
    z-index: ${zIndex('mobileStepper')};
    flex: 0 0 ${sizes('sizeDrawer')};

    .MuiDrawer-paper {
      width: ${sizes('sideDrawer')};
      overflow: hidden;
      border-left: ${borders('standard')};
    }
  }
`

export const LogoContainer = styled.div`
  ${up('sm')} {
    display: flex;
    height: 64px;
    border-bottom: ${borders('standard')};
  }
`
