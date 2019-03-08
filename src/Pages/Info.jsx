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
    marginTop: 'auto'
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 500
  },
  icon: {
    borderRadius: 15,
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    height: theme.spacing(14),
    margin: theme.spacing(2),
    width: theme.spacing(14)
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: theme.spacing(15),
    margin: theme.spacing(1),
    marginTop: 10
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

const Info = React.memo(({ id }) => {
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
      <Grid container spacing={4}>
        <Grid container>
          <Grid item xs="auto">
            <img
              alt={name}
              className={classes.icon}
              sizes="112px"
              src={icons[0].src.mediaLink}
              srcSet={setIcons(icons)}
            />
          </Grid>
          <Grid className={classes.item} item xs="auto">
            <Typography variant="h6">{name}</Typography>
            <Typography color="textSecondary" gutterBottom>
              {category.name}
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              href={url}
              size="small"
              variant="contained"
            >
              Launch App
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.description} paragraph>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
});

Info.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
