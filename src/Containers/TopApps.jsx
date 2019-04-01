import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const TOP_APPS = gql`
  query topApps {
    apps(first: 10, orderBy: rank_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const TopApps = () => {
  const { data, loading } = useQuery(TOP_APPS);
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[...new Array(10).keys()].map(key => (
          <AppCard key={key} loading />
        ))}
      </div>
    );
  }
  return <SwipableAppList AppComponent={AppCard} apps={data.apps} />;
};

export default TopApps;
