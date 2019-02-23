import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';
import useReactRouter from 'use-react-router';

import { setIcons } from 'Util/SetIcons';
import CenterProgress from 'Components/CenterProgress';

const useStyles = makeStyles(theme => ({
  description: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    width: '100%'
  },
  margin: {
    marginRight: theme.spacing.unit * 3
  },
  root: {
    padding: theme.spacing.unit * 4
  }
}));

const GET_APP = gql`
  query app($id: ID!) {
    app(where: { id: $id }) {
      name
      category {
        name
      }
      icons
      description
      url
    }
  }
`;

const Info = () => {
  const {
    match: {
      params: { id }
    }
  } = useReactRouter();

  const classes = useStyles();
  const { data, error, loading } = useQuery(GET_APP, {
    variables: { id }
  });
  if (loading) {
    return <CenterProgress />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  const { name, url, icons, category, description } = data.app;
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.margin} item xs={1}>
        <img
          alt={name}
          className={classes.icon}
          src={icons[0].src.mediaLink}
          srcSet={setIcons(icons)}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6">{name}</Typography>
        <Typography color="textSecondary" gutterBottom>
          {category.name}
        </Typography>
        <Button href={url} variant="outlined">
          Launch App
        </Button>
      </Grid>
      <Grid className={classes.description} item>
        <Typography paragraph>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default Info;
