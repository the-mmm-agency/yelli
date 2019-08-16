import styled from '@emotion/styled'

import { sizes, up, down } from 'util/theme'

const Content = styled.main`
  display: flex;
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
    margin-top: 64px;
    max-width: calc(100vw - ${sizes('sideDrawer')});
    margin-left: ${sizes('sideDrawer')};
  }
`

export default Content
