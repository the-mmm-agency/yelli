import { ApolloProvider } from 'react-apollo-hooks';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import expand from 'jss-plugin-expand';

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

const jss = create({
  plugins: [...jssPreset().plugins, expand()]
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStateProvider>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={LightTheme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </GlobalStateProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
