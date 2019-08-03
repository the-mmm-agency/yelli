import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// eslint-disable-next-line import/no-named-as-default
import AppComponent from 'Containers/AppComponent';

export default mount({
  '/:slug': route({
    async getTitle(req) {
      return `Yelli - ${req.params.slug}`;
    },
    async getView(req) {
      return <Category slug={req.params.slug} />;
    }
  })
});

const GET_NAME = gql`
  query categoryName($slug: String!) {
    category(slug: $slug) {
      name
    }
  }
`;

const GET_APPS = gql`
  query category($slug: String!) {
    applications(where: { category: { slug: $slug } }) {
      id
    }
  }
`;

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      padding: {
        bottom: theme.spacing(1),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3)
      }
    },
    padding: {
      bottom: theme.spacing(2),
      left: theme.spacing(4),
      right: theme.spacing(4),
      top: theme.spacing(2)
    }
  },
  root: {
    '&:after': {
      content: '""',
      flex: 'auto'
    },
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

const Category = memo(({ slug }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { name, isLoading } = useQuery(GET_NAME, {
    variables: { slug }
  });
  const { data, loading } = useQuery(GET_APPS, {
    variables: { slug }
  });

  return (
    <>
      <Typography className={classes.header} component="h1" variant="h5">
        {isLoading ? name.category.name : ''}
      </Typography>
      <Grid
        className={classes.root}
        component="ul"
        container
        justify="space-between"
        spacing={2}
      >
        {loading
          ? [...new Array(20).keys()].map(key => (
              <AppComponent
                key={key}
                isLoading
                type={matches ? 'card' : 'list'}
              />
            ))
          : data.applications.map(app => (
              <AppComponent
                key={app.id}
                id={app.id}
                type={matches ? 'card' : 'list'}
              />
            ))}
      </Grid>
    </>
  );
});

Category.propTypes = {
  slug: PropTypes.string.isRequired
};
