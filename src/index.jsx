import { ApolloProvider } from 'react-apollo-hooks';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import dayjs from 'dayjs';
import React from 'react';
import { render } from 'react-dom';
import expand from 'jss-plugin-expand';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import * as serviceWorker from 'serviceWorker';
import { GlobalStateProvider, dispatch } from 'state';
import App from 'App';

const httpLink = createHttpLink({
  uri: 'https://api.yelli.com'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token || ''
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

const jss = create({
  plugins: [...jssPreset().plugins, expand()]
});

render(
  <ApolloProvider client={client}>
    <GlobalStateProvider>
      <StylesProvider jss={jss}>
        <App />
      </StylesProvider>
    </GlobalStateProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

const notify = () => dispatch({ type: 'openUpdate' });
const installPrompt = () => dispatch({ type: 'openInstallPrompt' });

serviceWorker.register({
  onUpdate: async registration => {
    registration.update();
    notify();
  }
});

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

const localDate = localStorage.getItem('installPrompt');

if (isIos()) {
  if ((localDate && dayjs().isAfter(localDate, 'month')) || !localDate) {
    installPrompt();
    localStorage.setItem('installPrompt', dayjs());
  }
}
