import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';

const NEW_APPS = gql`
  query apps {
    apps(first: 10, orderBy: createdAt_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const NewApps = () => {
  const { data, loading } = useQuery(NEW_APPS);
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
          id={app.id}
          name={app.name}
          category={app.category.name}
          icon={app.icon}
        />
      ))}
    </>
  );
};

export default NewApps;