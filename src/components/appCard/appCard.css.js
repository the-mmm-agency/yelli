import { Card as MuiCard, CardActionArea, CardContent } from '@material-ui/core'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import AppIcon from 'components/appIcon'
import { between, spacing } from 'util/theme'

export const Card = styled(MuiCard)`
  ${between('xs', 'sm')} {
    width: calc(100% / 3 - ${spacing(3)});
  }
  ${between('sm', 'md')} {
    width: calc(100% / 6 - ${spacing(3)});
  }
  ${between('md', 'lg')} {
    width: calc(100% / 8 - ${spacing(3)});
  }
  display: flex;
  flex-direction: column;
  margin: ${spacing(1)};
  margin-left: 0;
  min-width: 100px;
  max-width: 120px;
  width: calc(100% / 10 - ${spacing(3)});
`

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(1)};
  .MuiCardActionArea-focusHighlight {
    border-radius: ${theme('shape.borderRadius')};
  }
`

export const Content = styled(CardContent)`
  padding: 0;
  padding-left: ${spacing(1)};
`

export const Icon = styled(AppIcon)`
  margin-bottom: ${spacing(1)};
  width: 100%;
`
