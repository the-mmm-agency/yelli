import { Grow, Slide } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import React from 'react'

const GrowTransition: React.FC<TransitionProps> = props => (
  <Grow {...props} />
)

const SlideTransition: React.FC<
  TransitionProps
> = props => <Slide direction="left" {...props} />

export { GrowTransition as Grow, SlideTransition as Slide }
