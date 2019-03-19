import { ApolloProvider } from 'react-apollo-hooks';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { pwaInstallPrompt } from 'pwa-install-prompt';
import expand from 'jss-plugin-expand';

import * as serviceWorker from 'serviceWorker';
import { GlobalStateProvider, dispatch } from 'state';
import App from 'App';
import LightTheme from 'Themes/LightTheme';

smoothScrollPolyfill.polyfill();

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
const installPrompt = () => dispatch({ type: 'openInstallPrompt' });

serviceWorker.register({
  iosInstallPrompt: () => {
    installPrompt();
  },
  onUpdate: async registration => {
    registration.update();
    notify();
  }
});

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// eslint-disable-next-line no-new,new-cap
new pwaInstallPrompt('.pwa-install-prompt__container', {
  active_class: 'is-active',
  closer: '.pwa-install-prompt__overlay',
  condition: isIos(),
  expires: 180,
  on: {
    afterClose() {
      console.log('after close!');
    },
    afterOpen() {
      console.log('after open!');
    },
    beforeClose() {
      console.log('before close!');
    },
    beforeOpen() {
      console.log('before open!');
    }
  },
  show_after: 90
});
