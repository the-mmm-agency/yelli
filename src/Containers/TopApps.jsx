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
  return (
    <SwipableAppList
      AppComponent={AppCard}
      apps={data.apps}
      loading={loading}
    />
  );
};

export default TopApps;
