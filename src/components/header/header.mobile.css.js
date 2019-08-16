import styled from '@emotion/styled'
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core'
import HeadroomContainer from 'react-headroom'
import { ifProp } from 'styled-tools'
import { hidden } from 'styles/mixins.css'
import { borders } from 'util/theme'

export const Headroom = styled(HeadroomContainer)(
  hidden({ up: 'md' })
)

export const AppBar = styled(MuiAppBar)`
  width: 100%;
  margin-left: 0;
  border-bottom: ${borders('standard')};
`

export const BackButton = styled(IconButton)`
  opacity: ${ifProp('hidden', 0, 1)};
  pointer-events: ${ifProp('hidden', 'none', 'auto')};
`

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`
