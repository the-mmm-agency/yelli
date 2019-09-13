import styled from 'src/util/styled'
import { down, sizes, up } from 'src/util/theme'

const Content = styled.main`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  max-width: 100vw;

  ${down('sm')} {
    @media all and (display-mode: standalone) {
      padding-bottom: 64px;
    }
    padding-bottom: 100px;
  }

  ${up('md')} {
    max-width: calc(100vw - ${sizes('sideDrawer')});
    margin-top: 64px;
    margin-left: ${sizes('sideDrawer')};
  }
`

export default Content