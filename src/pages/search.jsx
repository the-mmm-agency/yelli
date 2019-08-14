import { Divider, InputBase, InputAdornment, List } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Fuse from 'fuse.js'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'
import createPersistedState from 'use-persisted-state'

import { spacing, transitions } from 'util/theme'
import AppComponent from 'components/appComponent'
import Flex from 'components/flex'
import SEO from 'components/seo'

const SearchInput = styled(InputBase)`
  &:hover {
    background-color: ${theme('palette.input.hover')};
  }
  background-color: ${theme('palette.input.default')};
  border-radius: ${theme('shape.borderRadius')};
  margin: ${spacing(4)} ${spacing(2)};
  padding: ${spacing(1)};
  font-weight: 500;
  flex-grow: 1;
  transition: ${transitions(['background-color', 'box-shadow'])};
  will-change: background-color, box-shadow;
`

const Adornment = styled(InputAdornment)`
  margin-left: ${spacing(1)};
  margin-right: ${spacing(2)};
`

const useSearchString = createPersistedState('searchString')

const Search = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const [searchString, setSearchString] = useSearchString('')
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
  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
  const handleChange = ({ target: { value } }) => {
    setSearchString(value)
  }
  return (
    <Flex flexDirection="column" bgcolor="background.paper">
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
      <Divider />
      <List css={{ minHeight: '100vh' }}>
        {matchingApps.map(app => (
          <AppComponent {...app} variant="list" key={app.id} />
        ))}
      </List>
    </Flex>
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
