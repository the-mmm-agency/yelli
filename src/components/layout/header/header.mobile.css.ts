import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core'
import HeadroomContainer from 'react-headroom'

import { hidden, hiddenButton } from 'src/styles/mixins.css'
import styled from 'src/util/styled'

export const Headroom = styled(HeadroomContainer)(
  hidden({ up: 'md' })
)

export const AppBar = styled(MuiAppBar)`
  width: 100%;
  margin-left: 0;
`

export const BackButton = styled(IconButton)<{
  hidden: boolean
}>(({ hidden }) => hiddenButton(hidden))

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`
