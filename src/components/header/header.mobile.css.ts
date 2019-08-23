import { AppBar as MuiAppBar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Toolbar as MuiToolbar } from '@material-ui/core'

import { borders } from 'util/theme'
import { hidden } from 'styles/mixins.css'
import { hiddenButton } from 'styles/mixins.css'

import HeadroomContainer from 'react-headroom'
import styled from '@emotion/styled'

export const Headroom = styled(HeadroomContainer)(
  hidden({ up: 'md' })
)

export const AppBar = styled(MuiAppBar)`
  width: 100%;
  margin-left: 0;
  border-bottom: ${borders('standard')};
`

export const BackButton = styled(IconButton)<{
  hidden: boolean
}>(({ hidden }) => hiddenButton(hidden))

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`
