import {
  Card as MuiCard,
  CardContent,
} from '@material-ui/core'
import styled from '@emotion/styled'

import { borders, up, spacing } from 'util/theme'

export const Content = styled(CardContent)`
  padding: ${spacing(2, 2, 1)};
`

export const Card = styled(MuiCard)`
  ${up('md')} {
    min-width: 350px;
    max-width: 375px;
    width: calc(100% / 3 - ${spacing(4)});
  }
  background: transparent;
  border: ${borders('standard')};
  margin: ${spacing(2, 1)};
  flex: 0 0 auto;
  min-width: 300px;
  max-width: 400px;
  width: calc(100% - ${spacing(4)});
`
