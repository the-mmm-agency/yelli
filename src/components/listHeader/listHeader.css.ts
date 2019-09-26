import { Typography } from '@material-ui/core'

import styled from 'src/util/styled'
import {
  borders,
  palette,
  spacing,
  transitions,
} from 'src/util/theme'

const ListHeader = styled(Typography).attrs(props => ({
  component: props.component || 'h1',
  variant: props.variant || 'h5',
}))`
  padding: ${spacing(2)};
  background-color: ${palette('background.paper')};
  border-bottom: ${borders('standard')};
  ${transitions('background-color')};
`

export default ListHeader
