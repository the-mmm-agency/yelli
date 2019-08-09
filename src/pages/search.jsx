import { Grid, InputBase, InputAdornment, List } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Fuse from 'fuse.js'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import { spacing, up, transitions } from 'util/theme'
import AppComponent from 'components/appComponent'
import SEO from 'components/seo'

const SearchInput = styled(InputBase)`
  ${up('sm')} {
    margin-left: ${spacing(3)};
    width: auto;
  }
  &:focus {
    background-color: ${theme('palette.input.focus')};
    box-shadow: ${theme('shadows.3')};
  }
  &:hover {
    background-color: ${theme('palette.input.hover')};
  }
  background-color: ${theme('palette.input.default')};
  border-radius: ${theme('shape.borderRadius')}px;
  margin: ${spacing(2)};
  padding: ${spacing(1)};
  font-weight: 500;
  scroll-margin-bottom: 20px;
  scroll-snap-align: start;
  transition: ${transitions(['background-color', 'box-shadow'])};
`

const Adornment = styled(InputAdornment)`
  margin-left: ${spacing(1)};
  margin-right: ${spacing(2)};
`

const Search = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const initialSearchString =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('searchString') !== null
      ? window.localStorage.getItem('searchString')
      : ''
  const [searchString, setSearchString] = useState(initialSearchString)
  const options = {
    shouldSort: true,
    threshold: 0.5,
    tokenize: true,
    location: 0,
    distance: 100,
    maxPatternLength: 16,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'category.name',
        weight: 0.3,
      },
    ],
  }
  const fuse = new Fuse(applications, options)
  const matchingApps = fuse.search(searchString).slice(0, 15)
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
  const handleChange = e => {
    setSearchString(e.target.value)
    window.localStorage.setItem('searchString', e.target.value)
  }
  return (
    <>
      <SEO title="Search" />
      <SearchInput
        startAdornment={
          <Adornment position="start">
            <SearchIcon color="primary" />
          </Adornment>
        }
        onChange={handleChange}
        value={searchString}
        onKeyDown={handleKeyDown}
        placeholder="Just start typing…"
      />
      <List>
        {matchingApps.map(app => (
          <AppComponent {...app} key={app.id} type="list" />
        ))}
      </List>
    </>
  )
}

export const query = graphql`
  query {
    graphcms {
      applications {
        ...AppCard
      }
    }
  }
`

export default Search
