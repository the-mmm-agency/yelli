import { motion } from 'framer-motion'

import styled from 'src/util/styled'
import {
  borders,
  down,
  palette,
  radii,
  shadows,
  spacing,
  up,
} from 'src/util/theme'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  ${down('sm')} {
    width: 90%;
  }
`

export const HitsWrapper = styled(motion.div)`
  .ais-Hits-list {
    padding-inline-start: ${spacing(1)};
    max-height: 80vh;
    overflow: hidden scroll;
  }
  position: fixed;
  top: 64px;
  width: 100vw;
  background-color: ${palette('input.default')} !important;
  ${down('sm')} {
    left: 0;
  }
  ${up('md')} {
    position: absolute;
    right: 0;
    width: 80vw;
    overflow: hidden;
    border: ${borders('standard')};
    ${radii('default')};
    ${shadows(12)};
    max-width: 50em;
  }
`
