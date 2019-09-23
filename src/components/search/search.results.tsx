import { Typography } from '@material-ui/core'
import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom'

import Flex from 'src/elements/flex'

const Results = connectStateResults(
  ({ searchState, searchResults }) => {
    if (!searchResults || searchResults.nbHits === 0) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Typography>
            No Results found for {searchState.query}
          </Typography>
        </Flex>
      )
    }
    return null
  }
)

export default Results
