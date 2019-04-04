import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const NEW_APPS = gql`
  query new {
    apps(first: 10, orderBy: createdAt_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const NewApps = () => {
  const { data, loading } = useQuery(NEW_APPS);
  return (
    <SwipableAppList
      AppComponent={AppCard}
      apps={data.apps}
      loading={loading}
    />
  );
};

export default NewApps;
