import { ApolloProvider } from 'react-apollo-hooks';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import expand from 'jss-plugin-expand';

import * as serviceWorker from 'serviceWorker';
import { GlobalStateProvider, dispatch } from 'state';
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

const notify = () => dispatch({ type: 'openUpdate' });

serviceWorker.register({
  onUpdate: async registration => {
    registration.update();
    notify();
  }
});
