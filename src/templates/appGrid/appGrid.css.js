import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'

import Flex from 'components/flex'
import { borders, spacing } from 'util/theme'

export const Name = styled(Typography)`
  border-bottom: ${borders('standard')};
  padding: ${spacing(2, 4)};
  font-weight: 500;
  flex-grow: 1;
`

export const Grid = styled(Flex)`
  &::after {
    content: '';
    flex: 2 0 auto;
  }
`
