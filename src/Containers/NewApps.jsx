import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';
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

const NewApps = memo(() => {
  const { data, loading } = useQuery(NEW_APPS);
  return (
    <SwipableAppList
      AppComponent={AppCard}
      apps={data.apps}
      loading={loading}
    />
  );
});

export default NewApps;
