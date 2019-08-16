import styled from '@emotion/styled'
import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
} from '@material-ui/core'
import AppIcon from 'components/appIcon'
import { mq, shape, spacing } from 'util/theme'

export const Card = styled(MuiCard)`
  ${p =>
    mq({
      width: [3, 6, 8, 10].map(
        x => `calc(100% / ${x} - ${spacing(3)(p)})`
      ),
    })(p)}
  display: flex;
  flex-direction: column;
  margin: ${spacing(1, 1, 0.5, 0)};
  min-width: 100px;
  max-width: 120px;
`

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(0.75)};

  .MuiCardActionArea-focusHighlight {
    ${shape}
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
