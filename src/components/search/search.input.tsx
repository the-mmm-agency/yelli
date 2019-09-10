import { CircularProgress } from '@material-ui/core'
import { InputBaseProps } from '@material-ui/core/InputBase'
import { Search as SearchIcon } from '@material-ui/icons'
import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { Adornment, Form, Input } from './search.input.css'

interface SearchInputProps extends InputBaseProps {
  refine: (query: string) => void
  currentRefinement: string
  isSearchStalled: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  refine,
  isSearchStalled,
  currentRefinement,
  ...rest
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    refine(event.target.value)
  }
  const isLoading =
    currentRefinement !== '' && isSearchStalled

  return (
    <Form>
      <Input
        aria-label="Search"
        endAdornment={
          isLoading && <CircularProgress size="1rem" />
        }
        onChange={handleChange}
        placeholder="Search…"
        startAdornment={
          <Adornment position="start">
            <SearchIcon color="primary" />
          </Adornment>
        }
        {...rest}
        type="text"
      />
    </Form>
  )
}

export default connectSearchBox(SearchInput)
