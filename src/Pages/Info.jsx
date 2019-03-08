import { Fade, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import { setIcons } from 'Util/SetIcons';
import CenterProgress from 'Components/CenterProgress';

export default mount({
  '/:id': route({
    async getView(request) {
      return <Info id={request.params.id} />;
    }
  })
});

const useStyles = makeStyles(theme => ({
  button: {
    width: 160
  },
  description: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    height: 100,
    margin: theme.spacing(1),
    width: 100
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: 108
  },
  margin: {
    marginRight: theme.spacing(4)
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

const Info = ({ id }) => {
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
    <Fade appear in>
      <Grid container>
        <Grid className={classes.margin} item md={1} sm={2} xs={3}>
          <img
            alt={name}
            className={classes.icon}
            src={icons[0].src.mediaLink}
            srcSet={setIcons(icons)}
          />
        </Grid>
        <Grid className={classes.item} item md={10} sm={8} xs={5}>
          <Typography variant="h6">{name}</Typography>
          <Typography color="textSecondary" gutterBottom>
            {category.name}
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            href={url}
            variant="outlined"
          >
            Launch App
          </Button>
        </Grid>
        <Grid className={classes.description} item>
          <Typography paragraph>{description}</Typography>
        </Grid>
      </Grid>
    </Fade>
  );
};

Info.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
