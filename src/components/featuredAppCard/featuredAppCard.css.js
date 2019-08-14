import { Card as MuiCard, CardContent } from '@material-ui/core'
import Img from 'graphcms-image'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import { up, spacing } from 'util/theme'

export const Banner = styled(Img)`
  ${up('md')} {
    height: 175px;
    width: 100%;
  }
  height: 42vw;
  max-height: 200px;
`

export const Content = styled(CardContent)`
  padding: ${spacing(2)} ${spacing(2)} ${spacing(1)};
`

export const Card = styled(MuiCard)`
  ${up('md')} {
    min-width: 350px;
    max-width: 375px;
    width: calc(100% / 3 - 32px);
  }
  background: transparent;
  border: 1px solid ${theme('palette.divider')};
  margin: ${spacing(2)} ${spacing(1)};
  flex: 0 0 auto;
  min-width: 300px;
  max-width: 400px;
  width: calc(100% - 32px);
`
