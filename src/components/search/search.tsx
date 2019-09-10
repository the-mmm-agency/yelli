import { Divider } from '@material-ui/core'
import algoliasearch from 'algoliasearch/lite'
import { AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'
import {
  Hits,
  InstantSearch,
} from 'react-instantsearch-dom'
import { useDebounce } from 'use-debounce'
import useClickOutside from 'use-onclickoutside'

import { HitsWrapper, Root } from './search.css'
import SearchHit from './search.hit'
import Input from './search.input'
import PoweredBy from './search.poweredBy'

import { useBoolean } from 'src/hooks/useBoolean'

const Search: React.FC = () => {
  const ref = useRef(null)
  const [baseQuery, setQuery] = useState('')
  const [query] = useDebounce(baseQuery, 300)
  const focus = useBoolean(false)
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID as string,
    process.env.ALGOLIA_SEARCH_KEY as string
  )
  const showHits = focus.value && query.length > 0
  useClickOutside(ref, focus.setFalse)
  return (
    <InstantSearch
      indexName="Applications"
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
      searchClient={searchClient}
    >
      <Input onFocus={focus.setTrue} />
      <AnimatePresence>
        {showHits && (
          <HitsWrapper
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={focus.setFalse}
            transition={{
              duration: 0.1,
            }}
          >
            <Hits hitComponent={SearchHit} />
            <Divider />
            <PoweredBy />
          </HitsWrapper>
        )}
      </AnimatePresence>
    </InstantSearch>
  )
}

export default Search
