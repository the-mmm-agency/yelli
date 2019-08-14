import { Divider, List } from '@material-ui/core'
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Fuse from 'fuse.js'
import createPersistedState from 'use-persisted-state'

import AppComponent from 'components/appComponent'
import SearchBar from 'components/searchBar'
import Flex from 'components/flex'
import SEO from 'components/seo'

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
      <SearchBar
        onChange={handleChange}
        value={searchString}
        onKeyDown={handleKeyDown}
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
