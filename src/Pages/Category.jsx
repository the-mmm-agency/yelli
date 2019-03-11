import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';

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
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Category = React.memo(({ name }) => {
  const classes = useStyles();
  const { data } = useQuery(GET_APPS, {
    variables: { name }
  });
  const loading = true;
  if (loading) {
    return (
      <Grid
        alignContent="space-between"
        className={classes.root}
        container
        spacing={4}
      >
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
      </Grid>
    );
  }

  return (
    <Grid
      alignContent="space-between"
      className={classes.root}
      container
      spacing={4}
    >
      {data.apps.map(app => (
        <AppCard
          key={app.id}
          category={app.category.name}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </Grid>
  );
});

Category.propTypes = {
  name: PropTypes.string.isRequired
};
/*  */
