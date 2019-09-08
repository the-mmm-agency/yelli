import { Typography } from '@material-ui/core'

import styled from 'src/util/styled'
import { borders, palette, spacing } from 'src/util/theme'

const ListHeader = styled(Typography)`
  padding: ${spacing(2)};
  font-weight: 500;
  background-color: ${palette('background.paper')};
  border-bottom: ${borders('standard')};
`

export default ListHeader
