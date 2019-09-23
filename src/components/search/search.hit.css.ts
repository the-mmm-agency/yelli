import {
  ListItemIcon,
  MenuItem as MuiMenuItem,
  Typography,
} from '@material-ui/core'

import styled from 'src/util/styled'
import {
  borders,
  fade,
  palette,
  pxToRem,
  radii,
  shadows,
  spacing,
} from 'src/util/theme'

export const MenuItem = styled(MuiMenuItem).attrs({
  divider: true,
})`
  width: 100%;
  padding: ${spacing(1, 2)};
` as typeof MuiMenuItem

export const Category = styled(Typography).attrs({
  component: 'span',
  variant: 'overline',
})`
  span {
    padding: 0;
  }
  mark {
    color: ${palette('primary.main')};
    background: transparent;
  }
  height: 2em;
  font-weight: 500;
  margin: ${spacing(0, 1)};
  padding: ${spacing(0, 1)};
  line-height: 2em;
  color: ${palette('text.secondary')};
  background-color: ${palette('background.default')};
  font-size: ${pxToRem(13)};
  text-transform: uppercase;
  vertical-align: middle;
  box-sizing: border-box;
  border: ${borders('standard')};
  ${radii('light')};
`

export const Icon = styled(ListItemIcon)`
  margin-right: ${spacing(3)};
  img {
    ${radii('heavy')};
  }
`

export const Content = styled.div`
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  margin: ${spacing(3 / 4)} 0;
`

export const Title = styled(Typography)`
  color: ${palette('text.primary')};
  mark {
    color: ${palette('primary.main')};
    background: ${fade('primary.main', 0.1)};
    box-shadow: ${shadows(5)};
  }
`

export const Description = styled(Typography)`
  color: ${palette('text.primary')};
  white-space: pre-wrap;
  em {
    font-style: normal;
    border-bottom: 2px solid ${palette('primary.main')};
  }
`
