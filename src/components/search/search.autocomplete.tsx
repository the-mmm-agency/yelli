import { navigate } from 'gatsby'
import React, { useRef } from 'react'
import { useNumber } from 'react-hanger'
import { useHotkeys } from 'react-hotkeys-hook'
import { connectAutoComplete } from 'react-instantsearch-core'

import { AppHit } from './search'
import Hits from './search.hits'
import Input from './search.input'

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
  const selected = useNumber(0, {
    loop: true,
    lowerLimit: 0,
    upperLimit: hits.length - 1,
  })

  const handleClick = (): void => {
    focus.setFalse()
    refine('')
    const { current } = inputRef as any
    current.blur()
    selected.setValue(-1)
  }

  const handleReturn = (): void => {
    const slug =
      hits[selected.value === -1 ? 0 : selected.value].slug
    navigate(`/app/${slug}`)
    handleClick()
  }

  useHotkeys('/, s', event => {
    event.preventDefault()
    const { current } = inputRef as any
    current.focus()
  })

  const showHits = query.length > 0 && focus.value

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
      <Hits
        hits={hits}
        onClick={handleClick}
        open={showHits}
        selected={selected.value}
      />
    </>
  )
}

export default connectAutoComplete<Props, AppHit>(
  Autocomplete
)
