import algoliasearch from 'algoliasearch/lite'
import React, { useRef } from 'react'
import { Hit } from 'react-instantsearch-core'
import { InstantSearch } from 'react-instantsearch-dom'
import useClickOutside from 'use-onclickoutside'

import Autocomplete from './search.autocomplete'
import { Root } from './search.css'

import { Application } from 'src/graphql-types'
import { useBoolean } from 'src/hooks/useBoolean'

export type AppHit = Hit<
  Pick<
    Application,
    | 'id'
    | 'title'
    | 'category'
    | 'slug'
    | 'description'
    | 'icon'
  >
>

const Search: React.FC = () => {
  const ref = useRef(null)
  const focus = useBoolean(false)
  useClickOutside(ref, focus.setFalse)
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID as string,
    process.env.ALGOLIA_SEARCH_KEY as string
  )
  return (
    <InstantSearch
      indexName="Applications"
      root={{ Root, props: { ref } }}
      searchClient={searchClient}
    >
      <Autocomplete focus={focus} />
    </InstantSearch>
  )
}

export default Search
