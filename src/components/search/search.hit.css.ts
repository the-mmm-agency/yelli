import { ListItem as MuiListItem } from '@material-ui/core'
import Img from 'gatsby-image'

import styled from 'src/util/styled'
import {
  borders,
  fade,
  palette,
  radii,
  shadows,
  spacing,
} from 'src/util/theme'

export const Icon = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: ${spacing(3)};
  img {
    ${radii('image')};
  }
`

export const Category = styled.span`
  height: 1.5rem;
  margin: ${spacing(0, 1)};
  padding: ${spacing(0, 1)};
  color: ${palette('text.secondary')};
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 2.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: ${palette('background.default')};
  border: ${borders('standard')};
  border-radius: 4px;
  mark {
    color: ${palette('primary.main')};
  }
`

export const ListItem = styled(MuiListItem)`
  width: 100%;
  padding: ${spacing(1)};
  p em {
    font-style: normal;
    border-bottom: 2px solid ${palette('primary.main')};
  }
  h6 mark {
    color: ${palette('primary.main')};
    background: ${fade('primary.main', 0.1)};
    box-shadow: ${shadows(5)};
  }
`
