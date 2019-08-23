import { Search } from '@material-ui/icons'
import React from 'react'

import { Adornment, SearchInput } from './searchBar.css'
import { InputBaseProps } from '@material-ui/core/InputBase'

const SearchBar: React.FC<InputBaseProps> = props => (
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
