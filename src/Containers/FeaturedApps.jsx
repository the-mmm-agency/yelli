import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import FeaturedAppCard from 'Containers/FeaturedAppCard';

const NEW_APPS = gql`
  query apps {
    apps(where: { featured: true }) {
      id
      name
      description
      banner
    }
  }
`;

const NewApps = React.memo(() => {
  const { data, loading } = useQuery(NEW_APPS);
  if (loading) {
    return (
      <>
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
      </>
    );
  }
  return (
    <>
      {data.apps.map(app => (
        <FeaturedAppCard
          key={app.id}
          id={app.id}
          name={app.name}
          description={app.description}
          banner={app.banner}
        />
      ))}
    </>
  );
});

export default NewApps;
