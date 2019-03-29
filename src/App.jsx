import { Router, View } from 'react-navi';
import { hot } from 'react-hot-loader/root';
import BusyIndicator from 'react-busy-indicator';
import React, { Suspense } from 'react';

import Layout from 'Layout';
import routes from 'Routes';

const App = () => {
  return (
    <Router routes={routes}>
      <Layout>
        <Suspense fallback={BusyIndicator}>
          <View />
        </Suspense>
      </Layout>
    </Router>
  );
};

export default hot(App);
