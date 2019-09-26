import { Slide, useScrollTrigger } from '@material-ui/core'
import { SlideProps } from '@material-ui/core/Slide'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<
  Partial<Pick<SlideProps, 'direction'>>
>

const HideOnScroll: React.FC<Props> = ({
  direction = 'down',
  children,
}) => {
  const trigger = useScrollTrigger()
  return (
    <Slide
      appear={false}
      direction={direction}
      in={!trigger}
    >
      {children}
    </Slide>
  )
}

export default HideOnScroll
