import gql from 'graphql-tag';

export const GET_NAME = gql`
  currentName {
    me {
      name
    }
  }
`;
export const GET_ROLE = gql`
  query currentRole {
    me {
      role
    }
  }
`;
