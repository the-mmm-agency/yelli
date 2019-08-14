import styled from '@emotion/styled'
import React from 'react'

import { down, spacing } from 'util/theme'

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
  overflow-y: scroll;
  overflow-y: hidden;
  padding-inline-start: ${spacing(1)};
  max-width: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  scroll-padding-inline-start: ${spacing(2)};
  scroll-snap-points-x: repeat(100%);
  -webkit-overflow-scrolling: touch;
`

const HorizontalScroll = ({ children, ...props }) => (
  <Scroll {...props}>{children}</Scroll>
)

export default HorizontalScroll
