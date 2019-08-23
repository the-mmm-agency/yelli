import { Typography } from '@material-ui/core'

import { borders } from 'util/theme'
import { palette } from 'util/theme'
import { spacing } from 'util/theme'

import styled from '@emotion/styled'

const ListHeader = styled(Typography)`
  padding: ${spacing(2)};
  font-weight: 500;
  background-color: ${palette('background.paper')};
  border-bottom: ${borders('standard')};
`

export default ListHeader
