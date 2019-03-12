import { List } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';

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
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      minHeight: '100vh'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: {
        bottom: theme.spacing(3),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3)
      }
    },
    listStyle: 'none'
  }
}));

const Category = React.memo(({ name }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { data, loading } = useQuery(GET_APPS, {
    variables: { name }
  });

  const AppComponent = matches ? AppCard : AppListItem;

  if (loading) {
    return (
      <List className={classes.root}>
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
      </List>
    );
  }

  return (
    <List className={classes.root}>
      {data.apps.map(app => (
        <AppComponent
          key={app.id}
          category={app.category.name}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </List>
  );
});

Category.propTypes = {
  name: PropTypes.string.isRequired
};
/*  */
