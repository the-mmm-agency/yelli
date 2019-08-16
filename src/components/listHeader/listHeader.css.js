import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { borders, palette, spacing } from 'util/theme'

const ListHeader = styled(Typography)`
  padding: ${spacing(2)};
  font-weight: 500;
  background-color: ${palette('background.paper')};
  border-bottom: ${borders('standard')};
`

export default ListHeader
