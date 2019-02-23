import { Grid } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';
import useReactRouter from 'use-react-router';

import AppCard from 'Containers/AppCard';
import CenterProgress from 'Components/CenterProgress';

const GET_APPS = gql`
  query category($name: String!) {
    apps(where: { category: { name: $name } }) {
      id
    }
  }
`;

const Category = () => {
  const {
    match: {
      params: { name }
    }
  } = useReactRouter();
  const { data, error, loading } = useQuery(GET_APPS, {
    variables: { name }
  });
  if (loading) {
    return <CenterProgress />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <Grid alignContent="space-between" container>
      {data.apps.map(app => (
        <AppCard key={app.id} id={app.id} />
      ))}
    </Grid>
  );
};

export default Category;
