import { Card as MuiCard } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

import { borders } from 'util/theme'
import { spacing } from 'util/theme'
import { up } from 'util/theme'

import styled from '@emotion/styled'

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
`.withComponent('li')
