import styled from '@emotion/styled'
import {
  Card as MuiCard,
  CardContent,
} from '@material-ui/core'
import { borders, spacing, up } from 'util/theme'

export const Content = styled(CardContent)`
  padding: ${spacing(2, 2, 1)};
`

export const Card = styled(MuiCard)`
  ${up('md')} {
    width: calc(100% / 3 - ${spacing(4)});
    min-width: 350px;
    max-width: 375px;
  }
  flex: 0 0 auto;
  width: calc(100% - ${spacing(4)});
  min-width: 300px;
  max-width: 400px;
  margin: ${spacing(2, 1)};
  border: ${borders('standard')};
`
