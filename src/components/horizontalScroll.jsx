import styled from '@emotion/styled'
import React from 'react'

import { spacing } from 'util/theme'

const Scroll = styled.ul`
  &::after {
    min-width: ${spacing(2)};
    min-height: fit-content;
    content: '';
  }
  display: inline-flex;
  flex-wrap: nowrap;
  overflow: scroll hidden;
  min-height: fit-content;
  padding-inline-start: ${spacing(2)};
  scroll-padding-inline-start: ${spacing(2)};
  min-height: fit-content !important;
  scroll-snap-type: x proximity;
  scroll-snap-points-x: repeat(100%);
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
`

const HorizontalScroll = ({ children }) => <Scroll>{children}</Scroll>

export default HorizontalScroll
