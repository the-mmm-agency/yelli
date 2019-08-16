import styled from '@emotion/styled'
import { AppBar as MuiAppBar } from '@material-ui/core'
import { hidden } from 'styles/mixins.css'
import { borders } from 'util/theme'

const AppBar = styled(MuiAppBar)`
  ${hidden({ up: 'md' })}
  top: auto;
  bottom: 0;
  border-top: ${borders('standard')};
`

export default AppBar
