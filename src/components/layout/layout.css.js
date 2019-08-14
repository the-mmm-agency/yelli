import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import { up, down } from 'util/theme'

const Content = styled.main`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: 100vw;
  ${down('sm')} {
    @media all and (display-mode: standalone) {
      padding-bottom: 64px;
    }
    padding-bottom: 100px;
  }
  ${up('md')} {
    max-width: calc(100vw - ${theme('sizes.sideDrawer')});
    margin-left: ${theme('sizes.sideDrawer')};
  }
`

export default Content
