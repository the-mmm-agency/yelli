import { Divider } from '@material-ui/core'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { AppHit } from './search'
import Help from './search.help'
import Hit from './search.hit'
import { Wrapper } from './search.hits.css'
import PoweredBy from './search.poweredBy'
import Results from './search.results'

interface Props {
  selected: number
  onClick: () => void
  hits: AppHit[]
  open: boolean
}

const Hits: React.FC<Props> = ({
  open,
  selected,
  onClick,
  hits,
}) => (
  <AnimatePresence>
    {open && (
      <Wrapper>
        <Help />
        <Divider />
        <Results />
        {hits.map((hit, index) => (
          <Hit
            hit={hit}
            key={hit.objectID}
            onClick={onClick}
            selected={index === selected}
          />
        ))}
        <Divider />
        <PoweredBy />
      </Wrapper>
    )}
  </AnimatePresence>
)

export default Hits
