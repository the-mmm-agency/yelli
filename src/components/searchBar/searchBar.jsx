import { Search } from '@material-ui/icons'
import React from 'react'

import { Adornment, SearchInput } from './searchBar.css.js'

const SearchBar = props => (
  <SearchInput
    placeholder="Just start typing…"
    startAdornment={
      <Adornment position="start">
        <Search color="primary" />
      </Adornment>
    }
    {...props}
  />
)

export default SearchBar
