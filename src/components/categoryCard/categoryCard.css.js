import { Card, CardActionArea } from '@material-ui/core'
import styled from '@emotion/styled'

import CategoryIcon from 'components/categoryIcon'
import { borders, palette, spacing } from 'util/theme'

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(3)};
`

export const Category = styled(Card)`
  background-color: ${palette('background.default')};
  border: ${borders('standard')};
  flex: 0 0 calc(50% - ${spacing(2)});
  margin: ${spacing(1)};
  text-align: center;
`

export const Icon = styled(CategoryIcon)`
  color: ${palette('primary.main')};
  font-size: 1.5rem;
  height: 2em;
  width: 2em;
`
