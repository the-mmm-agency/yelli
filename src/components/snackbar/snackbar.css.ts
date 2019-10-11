import { Snackbar } from '@material-ui/core'

import styled from 'src/util/styled'
import { down } from 'src/util/theme'

export const StyledSnackbar = styled(Snackbar)`
  ${down('sm')} {
    bottom: 90px;
  }
`
