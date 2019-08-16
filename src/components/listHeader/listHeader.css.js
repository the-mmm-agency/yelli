import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'

import { borders, palette, spacing } from 'util/theme'

const ListHeader = styled(Typography)`
  border-bottom: ${borders('standard')};
  background-color: ${palette('background.paper')};
  padding: ${spacing(2)};
  font-weight: 500;
`

export default ListHeader
