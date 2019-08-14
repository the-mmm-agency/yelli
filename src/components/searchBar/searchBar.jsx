import React from 'react'
import { Search } from '@material-ui/icons'

import { SearchInput, Adornment } from './searchBar.css.js'

const SearchBar = props => (
  <SearchInput
    startAdornment={
      <Adornment position="start">
        <Search color="primary" />
      </Adornment>
    }
    placeholder="Just start typing…"
    {...props}
  />
)

export default SearchBar
