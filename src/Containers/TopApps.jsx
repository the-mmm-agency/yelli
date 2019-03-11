import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';

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
      <>
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
      </>
    );
  }
  return (
    <>
      {data.apps.map(app => (
        <AppCard
          key={app.id}
          category={app.category.name}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </>
  );
};

export default TopApps;
