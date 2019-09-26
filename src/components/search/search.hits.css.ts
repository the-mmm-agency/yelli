import { motion } from 'framer-motion'

import styled from 'src/util/styled'
import {
  borders,
  palette,
  radii,
  shadows,
  up,
} from 'src/util/theme'

export const Wrapper = styled(motion.ul).attrs({
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  transition: {
    type: 'spring',
  },
})`
  ${up('md')} {
    position: absolute;
    width: 80vw;
    max-width: 50em;
    overflow: hidden;
    border: ${borders('standard')};
    ${radii('default')};
    ${shadows(12)};
  }
  position: fixed;
  padding-inline-start: 0;
  top: 50px;
  left: 0;
  width: 100vw;
  max-height: 80vh;
  overflow: hidden scroll;
  background-color: ${palette(
    'background.darker'
  )} !important;
`
