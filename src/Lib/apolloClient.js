import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        Authorization: token || ''
      }
    });
  },
  uri: 'https://api-useast.graphcms.com/v1/cjyqkhvjb2pd501ffbfokgbte/master'
});

export default client;
