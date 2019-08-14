import { Card, CardActionArea } from '@material-ui/core'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import CategoryIcon from 'components/categoryIcon'
import { spacing } from 'util/theme'

export const ActionArea = styled(CardActionArea)`
  padding: ${spacing(3)};
`

export const Category = styled(Card)`
  align-items: center;
  background-color: ${theme('palette.background.default')};
  border: 1px solid ${theme('palette.divider')};
  display: flex;
  flex: 0 0 calc(50% - ${spacing(2)});
  flex-direction: column;
  margin: ${spacing(1)};
  text-align: center;
`

export const Icon = styled(CategoryIcon)`
  color: ${theme('palette.primary.main')};
  font-size: 1.5rem;
  height: 2em;
  width: 2em;
`
