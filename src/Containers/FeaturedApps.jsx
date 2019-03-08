import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import FeaturedApp from 'Containers/FeaturedApp';

const NEW_APPS = gql`
  query apps {
    apps(where: { featured: true }) {
      id
    }
  }
`;

const NewApps = () => {
  const { data } = useQuery(NEW_APPS);
  return (
    <>
      {data.apps &&
        data.apps.map(app => <FeaturedApp key={app.id} id={app.id} />)}
    </>
  );
};

export default NewApps;
