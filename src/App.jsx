import { ApolloProvider } from 'react-apollo-hooks';
import { CssBaseline } from '@material-ui/core';
import { Router, View } from 'react-navi';
import { ThemeProvider } from '@material-ui/styles';
import { hot } from 'react-hot-loader/root';
import ApolloClient from 'apollo-boost';
import React, { Suspense } from 'react';

import { GlobalStateProvider } from 'state';
import CenterProgress from 'Components/CenterProgress';
import CreateApp from 'Containers/CreateApp';
import Header from 'Containers/Header';
import LightTheme from 'Themes/LightTheme';
import routes from 'Routes';

const client = new ApolloClient({
  request: async operation => {
    operation.setContext({
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  },
  uri: 'http://35.202.214.231:4000/'
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStateProvider>
      <ThemeProvider theme={LightTheme}>
        <Router routes={routes}>
          <CssBaseline />
          <div style={{ display: 'flex' }}>
            <Header />
            <CreateApp />
            <div style={{ display: 'flex', flexGrow: 1, marginTop: 64 }}>
              <Suspense fallback={CenterProgress}>
                <View />
              </Suspense>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </GlobalStateProvider>
  </ApolloProvider>
);

export default hot(App);
