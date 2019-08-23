import { down } from 'util/theme'
import { spacing } from 'util/theme'

import styled from '@emotion/styled'

const Scroll = styled.ul`
  ${down('sm')} {
    & > * {
      scroll-snap-align: start;
    }
  }

  &::after {
    min-width: ${spacing(1)};
    min-height: fit-content;
    content: '';
  }
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow-y: scroll;
  overflow-y: hidden;
  padding-inline-start: ${spacing(1)};
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  scroll-padding-inline-start: ${spacing(2)};
  scroll-snap-points-x: repeat(100%);
  -webkit-overflow-scrolling: touch;
`

export default Scroll
