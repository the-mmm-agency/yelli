import './bootstrap';
import { ApolloProvider } from 'react-apollo-hooks';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from 'serviceWorker';
import { GlobalStateProvider } from 'state';
import App from 'App';
import LightTheme from 'Themes/LightTheme';

const client = new ApolloClient({
  request: async operation => {
    operation.setContext({
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  },
  uri: 'https://api.yelli.com'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStateProvider>
      <MuiThemeProvider theme={LightTheme}>
        <App />
      </MuiThemeProvider>
    </GlobalStateProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
