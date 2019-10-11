import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core'

import { hidden, hiddenButton } from 'src/styles/mixins.css'
import styled from 'src/util/styled'
import { borders, spacing } from 'src/util/theme'

export const AppBar = styled(MuiAppBar)`
  ${hidden({ up: 'md' })}
  width: 100%;
  margin-left: 0;
  border-bottom: ${borders('standard')};
`

export const BackButton = styled(IconButton)<{
  hidden: boolean
}>(({ hidden }) => hiddenButton(hidden))

export const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
  padding: ${spacing(1, 2)};
`
