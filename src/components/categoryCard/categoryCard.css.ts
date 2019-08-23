import { Card } from '@material-ui/core'
import { CardActionArea } from '@material-ui/core'

import { borders } from 'util/theme'
import { palette } from 'util/theme'
import { spacing } from 'util/theme'

import CategoryIcon from 'components/categoryIcon'
import styled from 'util/styled'

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(3)};
`

export const Category = styled(Card)`
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
