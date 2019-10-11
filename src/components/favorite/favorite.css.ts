import { IconButton as MuiIconButton } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'
import { Star as StarBase } from '@material-ui/icons'

import styled from 'src/util/styled'

export const IconButton = styled(MuiIconButton)`
  min-width: 3rem;
  min-height: 3rem;
  margin-top: -0.6rem;
  margin-left: -0.1rem;
`

export const Star = styled(StarBase)`
  color: ${yellow[700]};
` as any
