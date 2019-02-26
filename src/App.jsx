import { ApolloProvider } from 'react-apollo-hooks';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { hot } from 'react-hot-loader/root';
import ApolloClient from 'apollo-boost';
import Loadable from 'react-loadable';
import React from 'react';

import { GlobalStateProvider } from 'state';
import CenterProgress from 'Components/CenterProgress';
import CreateApp from 'Containers/CreateApp';
import Header from 'Containers/Header';
import Home from 'Pages/Home';
import LightTheme from 'Themes/LightTheme';

const LoadableInfo = Loadable({
  loader: () => import('Pages/Info'),
  loading: CenterProgress
});

const LoadableCategory = Loadable({
  loader: () => import('Pages/Category'),
  loading: CenterProgress
});

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
        <Router>
          <CssBaseline />
          <div style={{ display: 'flex' }}>
            <Header />
            <CreateApp />
            <div style={{ display: 'flex', flexGrow: 1, marginTop: 64 }}>
              <Route component={Home} exact path="/" />
              <Route
                component={LoadableCategory}
                exact
                path="/category/:name"
              />
              <Route
                component={LoadableInfo}
                path={['/app/:id', '/category/app/:id']}
              />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </GlobalStateProvider>
  </ApolloProvider>
);

export default hot(App);
