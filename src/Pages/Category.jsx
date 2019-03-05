import { Fade, Grid } from '@material-ui/core';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import AppCard from 'Containers/AppCard';
import CenterProgress from 'Components/CenterProgress';

export default mount({
  '/:name': route({
    async getView(request) {
      return <Category name={request.params.name} />;
    }
  })
});

const GET_APPS = gql`
  query category($name: String!) {
    apps(where: { category: { name: $name } }) {
      id
    }
  }
`;

const Category = ({ name }) => {
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
    <Fade appear in>
      <Grid alignContent="space-between" container spacing={4}>
        {data.apps.map(app => (
          <AppCard key={app.id} id={app.id} />
        ))}
      </Grid>
    </Fade>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired
};
