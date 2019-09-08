import {
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
} from '@material-ui/core'

import CategoryIcon from 'src/components/categoryIcon'
import styled from 'src/util/styled'
import { borders, palette, spacing } from 'src/util/theme'

export const CardActionArea = styled(MuiCardActionArea)`
  padding: ${spacing(3)};
`

export const Card = styled(MuiCard)`
  flex: 0 0 calc(50% - ${spacing(2)});
  margin: ${spacing(1)};
  text-align: center;
  background-color: ${palette('background.default')};
  border: ${borders('standard')};
`

export const Icon = styled(CategoryIcon)`
  width: 2em;
  height: 2em;
  color: ${palette('primary.main')};
  font-size: 1.5rem;
`
