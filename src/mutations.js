import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_APP = gql`
  mutation createApp(
    $category: String!
    $description: String
    $name: String!
    $url: String!
  ) {
    createApp(
      name: $name
      category: $category
      description: $description
      url: $url
    ) {
      id
    }
  }
`;
