import { Router, View } from 'react-navi';
import { hot } from 'react-hot-loader/root';
import BusyIndicator from 'react-busy-indicator';
import React, { memo, Suspense } from 'react';

import Layout from 'Layout';
import { ThemeProvider } from 'Themes/ThemeProvider';
import routes from 'Routes';

const App = memo(() => {
  return (
    <ThemeProvider>
      <Router routes={routes}>
        <Layout>
          <Suspense fallback={BusyIndicator}>
            <View />
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
});

export default hot(App);
