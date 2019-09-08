import { InputBaseProps } from '@material-ui/core/InputBase'
import { Search } from '@material-ui/icons'
import React from 'react'

import { Adornment, SearchInput } from './searchBar.css'

const SearchBar: React.FC<
  Omit<InputBaseProps, 'placeholder' | 'startAdornment'>
> = props => (
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
