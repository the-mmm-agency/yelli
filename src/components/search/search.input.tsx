import {
  IconButton,
  InputAdornment,
} from '@material-ui/core'
import { InputBaseProps } from '@material-ui/core/InputBase'
import {
  Close as CloseIcon,
  Search as SearchIcon,
} from '@material-ui/icons'
import React from 'react'
import { UseNumber } from 'react-hanger'

import {
  Input,
  Kbd,
  StartAdornment,
} from './search.input.css'

interface Props extends InputBaseProps {
  refine: (query: string) => void
  onBlur: () => void
  handleReturn: () => void
  handleEsc: () => void
  selected: UseNumber
  hasFocus: boolean
  query: string
}

const SearchInput: React.FC<Props> = ({
  refine,
  hasFocus,
  onBlur,
  query,
  selected,
  handleReturn,
  handleEsc,
  ...rest
}) => {
  const handleKeyDown = (
    event: React.KeyboardEvent
  ): void => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        selected.increase()
        break
      case 'ArrowUp':
        event.preventDefault()
        selected.decrease()
        break
      case 'Enter':
        event.preventDefault()
        handleReturn()
        break
      case 'Escape':
        event.preventDefault()
        handleEsc()
        break
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    refine(event.target.value)
  }

  const hideClear = !hasFocus || query === ''

  return (
    <Input
      aria-label="Search"
      endAdornment={
        <InputAdornment position="end">
          {hideClear ? (
            <Kbd>/</Kbd>
          ) : (
            <IconButton
              color="primary"
              onClick={handleEsc}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          )}
        </InputAdornment>
      }
      inputProps={{
        onBlur,
        onKeyDown: handleKeyDown,
      }}
      onChange={handleChange}
      placeholder="Search…"
      startAdornment={
        <StartAdornment>
          <SearchIcon color="primary" />
        </StartAdornment>
      }
      {...rest}
      type="text"
      value={query}
    />
  )
}

export default SearchInput
