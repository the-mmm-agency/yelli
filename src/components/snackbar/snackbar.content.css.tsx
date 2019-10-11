import { SnackbarContent as MuiSnackbarContent } from '@material-ui/core'

import { darkTheme } from 'src/theme'
import styled from 'src/util/styled'

const { borders, palette } = darkTheme

export const SnackbarContent = styled(MuiSnackbarContent)`
  color: ${palette.text.primary};
  background-color: ${palette.background.darkest};
  ${borders.standard}
`
