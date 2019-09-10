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
  }
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: calc(100% + 0.5em);
  width: calc(100vw - ${spacing(0.5)});
  ${down('sm')} {
    left: ${spacing(-7)};
  }
  ${up('md')} {
    right: 0;
    width: 80vw;
    max-width: 50em;
    ${radii('default')};
  }
  border: ${borders('standard')};
  background-color: ${palette('input.default')} !important;
  ${shadows(12)};
`
