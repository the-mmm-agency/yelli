import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import gql from 'graphql-tag'
import React from 'react'

import Flex from 'src/elements/flex'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import AppList from 'src/templates/appList.template'
import { AppProps, WithAppID } from 'src/types'
import isBrowser from 'src/util/isBrowser'

const Favorites: React.FC = () => {
  if (!isBrowser()) return null
  useAuthRedirect()
  const { data, loading } = useQuery<{
    me: {
      favorites: WithAppID<AppProps>[]
    }
  }>(
    gql`
      query favorites {
        me {
          favorites {
            id
            title
            slug
            category {
              name
            }
            icon {
              fluid(
                srcSetBreakpoints: [50, 100, 150, 200]
              ) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    `,
    {
      ssr: false,
    }
  )
  return loading || !data || !data.me ? (
    <Flex height="75vh">
      <CircularProgress
        css={{ margin: 'auto' }}
        size="5vw"
      />
    </Flex>
  ) : (
    <AppList apps={data.me.favorites} name="Favorites" />
  )
}

export default Favorites
