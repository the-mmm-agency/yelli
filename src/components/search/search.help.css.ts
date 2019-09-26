import { Typography } from '@material-ui/core'

import { hidden } from 'src/styles/mixins.css'
import styled from 'src/util/styled'
import { palette, spacing } from 'src/util/theme'

export const Root = styled(Typography).attrs({
  color: 'textPrimary',
  component: 'li',
  variant: 'caption',
})`
  ${hidden({ down: 'sm' })};
  padding: ${spacing(1, 2)};
  background-color: ${palette('background.default')};
`
