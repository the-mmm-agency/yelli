import {
  Card as MuiCard,
  CardContent,
} from '@material-ui/core'

import Img from 'src/components/img'
import styled from 'src/util/styled'
import {
  borders,
  palette,
  radii,
  spacing,
  up,
} from 'src/util/theme'

export const Banner = styled(Img)`
  max-height: 200px;
`

export const Content = styled(CardContent)`
  & > * {
    font-weight: 500;
  }
  padding: ${spacing(2, 2, 1)};
`

export const Card = styled(MuiCard)`
  ${up('md')} {
    width: calc(100% / 3 - ${spacing(4)});
    min-width: 350px;
    max-width: 375px;
  }
  background-color: ${palette('background.darker')};
  flex: 0 0 auto;
  width: calc(100% - ${spacing(4)});
  min-width: 300px;
  max-width: 400px;
  margin: ${spacing(2, 1)};
  border: ${borders('standard')};
  overflow: hidden;
  ${radii('default')};
`
