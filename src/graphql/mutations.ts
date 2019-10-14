import gql from 'graphql-tag'

export const AUTH = gql`
  mutation auth($idToken: String!) {
    authenticate(idToken: $idToken) {
      id
    }
  }
`

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id)
  }
`

export const UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(image: $file) {
      id
    }
  }
`

export const CREATE_APP = gql`
  mutation createApp(
    $category: String!
    $description: String!
    $icon: ImageWhereUniqueInput!
    $screenshots: [ImageWhereUniqueInput!]!
    $slug: String!
    $title: String!
    $url: String!
  ) {
    createApplication(
      data: {
        category: { connect: { slug: $category } }
        description: $description
        icon: { connect: $icon }
        screenshots: { connect: $screenshots }
        slug: $slug
        title: $title
        url: $url
      }
    ) {
      title
    }
  }
`
