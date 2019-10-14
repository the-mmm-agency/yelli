import gql from 'graphql-tag'

import { applicationFragment } from './fragments'

export const CHECK_FAVORITE = gql`
  query checkFavorite($id: ID!) {
    application(where: { id: $id }) {
      id
      favorite
    }
  }
`

export const FAVORITES = gql`
  query favorites {
    me {
      favorites {
        ...Application
      }
    }
  }
  ${applicationFragment}
`
