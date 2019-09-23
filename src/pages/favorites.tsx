import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import gql from 'graphql-tag'
import React, { useEffect } from 'react'

import Flex from 'src/elements/flex'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import AppList from 'src/templates/appList.template'
import { AppProps, WithAppID } from 'src/types'
import isBrowser from 'src/util/isBrowser'

const Favorites: React.FC = () => {
  if (!isBrowser()) return null
  useAuthRedirect()
  const { data, loading, refetch } = useQuery<{
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
              fixed(width: 50, height: 50) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
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
  useEffect(() => {
    if (!loading) {
      refetch()
    }
  }, [])
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
