import { Divider } from '@material-ui/core'
import { AnimatePresence } from 'framer-motion'
import { navigate } from 'gatsby'
import React, { useRef } from 'react'
import { useNumber } from 'react-hanger'
import { useHotkeys } from 'react-hotkeys-hook'
import { connectAutoComplete } from 'react-instantsearch-core'

import { AppHit } from './search'
import { Help, HitsWrapper } from './search.css'
import HitComponent from './search.hit'
import Input from './search.input'
import PoweredBy from './search.poweredBy'
import Results from './search.results'

import { UseBoolean } from 'src/hooks/useBoolean'

interface Props {
  focus: UseBoolean
  hits: AppHit[]
  currentRefinement: string
  refine: (value: string) => void
}
const Autocomplete: React.FC<Props> = ({
  focus,
  refine,
  currentRefinement: query,
  hits,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const selected = useNumber(-1, {
    loop: true,
    lowerLimit: 0,
    upperLimit: hits.length - 1,
  })

  const showHits = query.length > 0 && focus.value

  const handleClick = (): void => {
    focus.setFalse()
    refine('')
    const { current } = inputRef as any
    current.blur()
  }

  const handleReturn = (): void => {
    if (selected.value > -1) {
      navigate(`/app/${hits[selected.value].slug}`)
      handleClick()
    }
  }

  useHotkeys('/, s', event => {
    event.preventDefault()
    const { current } = inputRef as any
    current.focus()
  })

  return (
    <>
      <Input
        handleEsc={handleClick}
        handleReturn={handleReturn}
        hasFocus={focus.value}
        inputRef={inputRef}
        onBlur={focus.setFalse}
        onFocus={focus.setTrue}
        query={query}
        refine={refine}
        selected={selected}
      />
      <AnimatePresence>
        {showHits && (
          <HitsWrapper
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.1,
              type: 'spring',
            }}
          >
            <Help>
              Press <b>enter</b> to select, <b>↑↓</b> to
              navigate, <b>esc</b> to dismiss
            </Help>
            <Results />
            {hits.map((hit, index) => (
              <HitComponent
                hit={hit}
                key={hit.objectID}
                onClick={handleClick}
                selected={index === selected.value}
              />
            ))}

            <Divider />
            <PoweredBy />
          </HitsWrapper>
        )}
      </AnimatePresence>
    </>
  )
}

export default connectAutoComplete<Props, AppHit>(
  Autocomplete
)
