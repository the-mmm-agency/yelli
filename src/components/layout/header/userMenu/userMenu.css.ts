import { Menu as MuiMenu } from '@material-ui/core'

import styled from 'src/util/styled'
import { sizes } from 'src/util/theme'

export const Menu = styled(MuiMenu)`
  .MuiMenu-paper {
    min-width: ${sizes('sideDrawer')};
  }
`
