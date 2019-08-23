import { borders } from 'util/theme'
import { hidden } from 'styles/mixins.css'
import { sizes } from 'util/theme'
import { up } from 'util/theme'
import { zIndex } from 'util/theme'

import styled from '@emotion/styled'

export const Nav = styled.nav`
  ${hidden({ down: 'sm' })} ${up('sm')} {
    flex: 0 0 ${sizes('sizeDrawer')};
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
