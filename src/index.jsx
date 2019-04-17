import { ApolloProvider } from 'react-apollo-hooks';
import { StylesProvider } from '@material-ui/styles';
import dayjs from 'dayjs';
import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from 'serviceWorker';
import jss from 'Lib/jssPreset';
import client from 'Lib/apolloClient';
import { GlobalStateProvider, dispatch } from 'state';
import App from 'App';

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
