import { Divider, Typography } from '@material-ui/core'
import algoliasearch from 'algoliasearch/lite'
import { AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'
import {
  Hits,
  InstantSearch,
  connectStateResults,
} from 'react-instantsearch-dom'
import useClickOutside from 'use-onclickoutside'

import { HitsWrapper, Root } from './search.css'
import Hit from './search.hit'
import Input from './search.input'
import PoweredBy from './search.poweredBy'

import Flex from 'src/elements/flex'
import { useBoolean } from 'src/hooks/useBoolean'

const Results = connectStateResults(
  ({ searchState, searchResults }) => {
    if (!searchResults || searchResults.nbHits === 0) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Typography>
            No Results found for {searchState.query}
          </Typography>
        </Flex>
      )
    }
    return null
  }
)

const Search: React.FC = () => {
  const ref = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const focus = useBoolean(false)
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID as string,
    process.env.ALGOLIA_SEARCH_KEY as string
  )
  const showHits = query.length > 0 && focus.value
  const handleClick = (): void => {
    focus.setFalse()
    setQuery('')
    const { current } = inputRef as any
    current.blur()
  }
  useClickOutside(ref, focus.setFalse)

  return (
    <InstantSearch
      indexName="Applications"
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
      searchClient={searchClient}
    >
      <Input
        inputRef={inputRef}
        onBlur={focus.setFalse}
        onFocus={focus.setTrue}
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
            <Results />
            <Hits hitComponent={Hit(handleClick)} />
            <Divider />
            <PoweredBy />
          </HitsWrapper>
        )}
      </AnimatePresence>
    </InstantSearch>
  )
}

export default Search
