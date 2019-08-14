import { Typography } from '@material-ui/core'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import Flex from 'components/flex'
import { spacing } from 'util/theme'

export const Name = styled(Typography)`
  border-bottom: 1px solid ${theme('palette.divider')};
  padding: ${spacing(2)} ${spacing(4)};
  font-weight: 500;
  flex-grow: 1;
`

export const Grid = styled(Flex)`
  &::after {
    content: '';
    flex: 2 0 auto;
  }
`
