import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import AppCard from 'Containers/AppCard';

const TOP_APPS = gql`
  query topApps {
    apps(first: 10, orderBy: rank_DESC) {
      id
    }
  }
`;

const TopApps = () => {
  const { data } = useQuery(TOP_APPS);
  return (
    <>
      {data.apps && data.apps.map(app => <AppCard key={app.id} id={app.id} />)}
    </>
  );
};

export default TopApps;
