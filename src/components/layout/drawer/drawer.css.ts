import { hidden } from 'src/styles/mixins.css'
import styled from 'src/util/styled'
import { borders, sizes, up, zIndex } from 'src/util/theme'

export const Nav = styled.nav`
  ${hidden({ down: 'sm' })} ${up('sm')} {
    flex: 0 0 ${sizes('sideDrawer')};
    ${zIndex('mobileStepper')};

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
