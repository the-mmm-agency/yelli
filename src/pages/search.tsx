import { Divider, List } from '@material-ui/core'
import Application from 'components/application'
import Flex from 'components/flex'
import SearchBar from 'components/searchBar'
import SEO from 'components/seo'
import { graphql, navigate } from 'gatsby'
import React, { useMemo } from 'react'
import createPersistedState from 'use-persisted-state'

import { ApplicationsList } from 'types'

const useSearchString = createPersistedState('searchString')

interface SearchProps {
  data: {
    graphcms: ApplicationsList
  }
}

const Search: React.FC<SearchProps> = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const [value, setValue] = useSearchString('')
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value)
  }
  const handleKeyDown = ({
    key,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
  const matchingApps = useMemo(
    () =>
      applications
        .filter(({ title }) =>
          title.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10),
    [value]
  )
  return (
    <Flex bgcolor="background.paper" flexDirection="column">
      <SEO title="Search" />
      <SearchBar
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <Divider />
      <List css={{ minHeight: '100vh' }}>
        {matchingApps.map(app => (
          <Application
            {...app}
            key={app.id}
            variant="list"
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
