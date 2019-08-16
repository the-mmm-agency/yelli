import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core'
import { ifProp } from 'styled-tools'
import styled from '@emotion/styled'
import HeadroomContainer from 'react-headroom'

import { hidden } from 'styles/mixins.css'
import { borders } from 'util/theme'

export const Headroom = styled(HeadroomContainer)(
  hidden({ up: 'md' })
)

export const AppBar = styled(MuiAppBar)`
  border-bottom: ${borders('standard')};
  margin-left: 0;
  width: 100%;
`

export const BackButton = styled(IconButton)`
  pointer-events: ${ifProp('hidden', 'none', 'auto')};
  opacity: ${ifProp('hidden', 0, 1)};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`
