import { Divider, List } from '@material-ui/core'
import React from 'react'
import { graphql, navigate } from 'gatsby'
import createPersistedState from 'use-persisted-state'

import Application from 'components/application'
import SearchBar from 'components/searchBar'
import Flex from 'components/flex'
import SEO from 'components/seo'
import createFuse from 'util/createFuse'

const useSearchString = createPersistedState('searchString')

const Search = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const [value, setValue] = useSearchString('')
  const fuse = createFuse(applications)
  const matchingApps = fuse.search(value).slice(0, 15)
  const handleChange = ({ target: { value } }) => {
    setValue(value)
  }
  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
  return (
    <Flex flexDirection="column" bgcolor="background.paper">
      <SEO title="Search" />
      <SearchBar
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <Divider />
      <List css={{ minHeight: '100vh' }}>
        {matchingApps.map(app => (
          <Application
            {...app}
            variant="list"
            key={app.id}
          />
        ))}
      </List>
    </Flex>
  )
}

export const query = graphql`
  query {
    graphcms {
      applications {
        ...Application
      }
    }
  }
`

export default Search
