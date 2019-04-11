import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// eslint-disable-next-line import/no-named-as-default
import AppComponent from 'Containers/AppComponent';

export default mount({
  '/:name': route({
    async getTitle(req) {
      return `Yelli - ${req.params.name}`;
    },
    async getView(req) {
      return <Category name={req.params.name} />;
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

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      padding: {
        top: theme.spacing(3)
      },
      paddingInlineStart: `${theme.spacing(1)}px`
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
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

const Category = ({ name }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { data, loading } = useQuery(GET_APPS, {
    variables: { name }
  });

  if (loading || !data.apps) {
    return (
      <Grid className={classes.root} component="ul" container spacing={2}>
        {[...new Array(20).keys()].map(key => (
          <AppComponent key={key} isLoading type={matches ? 'card' : 'list'} />
        ))}
      </Grid>
    );
  }

  return (
    <Grid className={classes.root} component="ul" container spacing={2}>
      {data.apps.map(app => (
        <AppComponent
          key={app.id}
          id={app.id}
          type={matches ? 'card' : 'list'}
        />
      ))}
    </Grid>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired
};
