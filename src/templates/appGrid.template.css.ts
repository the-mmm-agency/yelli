import { Typography } from '@material-ui/core'

import Flex from 'src/elements/flex'
import styled from 'src/util/styled'
import { borders, spacing } from 'src/util/theme'

export const Name = styled(Typography)`
  flex-grow: 1;
  padding: ${spacing(2, 4)};
  border-bottom: ${borders('standard')};
`

export const Grid = styled(Flex)`
  &::after {
    flex: 2 0 auto;
    content: '';
  }
`
