import { Typography } from '@material-ui/core'
import { motion } from 'framer-motion'

import styled from 'src/util/styled'
import {
  borders,
  down,
  palette,
  pxToRem,
  radii,
  shadows,
  spacing,
  up,
} from 'src/util/theme'

export const Root = styled.div`
  position: relative;
  display: flex;
  margin-right: auto;
  ${down('sm')} {
    flex-grow: 1;
  }
`

export const HitsWrapper = styled(motion.ul)`
  position: fixed;
  padding-inline-start: 0;
  max-height: 80vh;
  overflow: hidden scroll;
  top: 50px;
  width: 100vw;
  background-color: ${palette(
    'background.darker'
  )} !important;
  left: 0;
  ${up('md')} {
    position: absolute;
    width: 80vw;
    overflow: hidden;
    border: ${borders('standard')};
    ${radii('default')};
    ${shadows(12)};
    max-width: 50em;
  }
`
export const Help = styled(Typography)`
  ${down('sm')} {
    display: none;
  }
  color: ${palette('text.primary')};
  font-size: ${pxToRem(12)};
  padding: ${spacing(1, 2)};
  background-color: ${palette('background.default')};
`
