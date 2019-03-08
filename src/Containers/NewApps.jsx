import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import AppCard from 'Containers/AppCard';

const NEW_APPS = gql`
  query apps {
    apps(first: 10, orderBy: createdAt_DESC) {
      id
    }
  }
`;

const NewApps = () => {
  const { data } = useQuery(NEW_APPS);
  console.log(data);
  return (
    <>
      {data.apps && data.apps.map(app => <AppCard key={app.id} id={app.id} />)}
    </>
  );
};

export default NewApps;
