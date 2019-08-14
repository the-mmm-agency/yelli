import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import { spacing } from 'util/theme'

const ListHeader = styled(Typography)`
  border-bottom: 1px solid ${theme('palette.divider')};
  background-color: ${theme('palette.background.paper')};
  padding: ${spacing(2)};
  font-weight: 500;
`

export default ListHeader
