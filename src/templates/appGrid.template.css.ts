import { Typography } from '@material-ui/core'

import { borders } from 'util/theme'
import { spacing } from 'util/theme'

import Flex from 'components/flex'
import styled from '@emotion/styled'

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
`.withComponent('ul')
