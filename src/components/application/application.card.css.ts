import { Card as MuiCard } from '@material-ui/core'
import { CardActionArea } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

import { mq } from 'util/theme'
import { radii } from 'util/theme'
import { spacing } from 'util/theme'

import AppIcon from 'components/appIcon'
import styled from '@emotion/styled'

export const Card = styled(MuiCard)`
  ${p =>
    mq({
      width: [3, 6, 8, 10].map(
        x => `calc(100% / ${x} - ${spacing(3)(p)})`
      ),
    })(p)}
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 120px;
  margin: ${spacing(1, 1, 0.5, 0)};
`.withComponent('li')

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(0.75)};

  .MuiCardActionArea-focusHighlight {
    ${radii('default')}
  }
`

export const Content = styled(CardContent)`
  padding: 0;
  padding-left: ${spacing(0.5)};
`

export const Icon = styled(AppIcon)`
  width: 100%;
  margin-bottom: ${spacing(1)};
`
