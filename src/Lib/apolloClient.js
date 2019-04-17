import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      cacheRedirects: {
        Query: {
          App: (_, { id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'App', id }),
          AppInfo: (_, { id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'App', id }),
          AppInfoName: (_, { id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'App', id }),
          FeaturedApp: (_, { id }, { getCacheKey }) =>
            getCacheKey({ __typename: 'App', id })
        }
      },
      headers: {
        Authorization: token || ''
      }
    });
  },
  uri: 'https://api.yelli.com'
});

export default client;
