import { Divider, List } from '@material-ui/core'
import { graphql, navigate } from 'gatsby'
import React, { useMemo } from 'react'
import createPersistedState from 'use-persisted-state'

import Application from 'src/components/application'
import SearchBar from 'src/components/searchBar'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { GraphCoolAppList } from 'src/types'

const useSearchString = createPersistedState('searchString')

const Search: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { allApplications: applications },
  },
}) => {
  const [value, setValue] = useSearchString('')
  const matchingApps = useMemo(
    () =>
      applications
        .filter(({ title }) =>
          title.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10),
    [value]
  )
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(value)
  }
  const handleKeyDown = ({
    key,
  }: React.KeyboardEvent<HTMLInputElement>): void => {
    if (key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
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
    graphcool {
      allApplications {
        ...Application
      }
    }
  }
`

export default Search
