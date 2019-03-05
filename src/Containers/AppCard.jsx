import { Grid, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { typography } from '@material-ui/system';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import gql from 'graphql-tag';

import { setIcons } from 'Util/SetIcons';
import CardButton from 'Components/CardButton';
import StyledLink from 'Components/StyledLink';

const GET_APP = gql`
  query app($id: ID!) {
    app(where: { id: $id }) {
      name
      category {
        name
      }
      icons
    }
  }
`;

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex'
  },
  card: {
    height: 300
  },
  category: {
    [theme.breakpoints.down('sm')]: {
      fontSize: `calc(${theme.typography.body2.fontSize} - 1.2rem + 2.2vw)`
    }
  },
  icon: {
    display: 'flex',
    height: '70%',
    margin: 'auto',
    marginTop: '5%',
    maxWidth: '70%',
    objectFit: 'contain'
  },
  name: {
    [theme.breakpoints.down('md')]: {
      fontSize: `calc(${theme.typography.h6.fontSize} - 1.2rem + 2.2vw)`
    }
  },
  root: {
    maxHeight: theme.spacing(10)
  },
  spacer: {
    height: theme.spacing(1)
  }
}));

const AppCard = ({ id }) => {
  const classes = useStyles();
  const { data, error, loading } = useQuery(GET_APP, {
    variables: { id }
  });

  if (loading) {
    return (
      <Grid className={classes.root} item xs="auto">
        <CardButton
          ButtonProps={{ className: classes.button }}
          CardProps={{ className: classes.card }}
        >
          <Skeleton circle height="16vw" width="16vw" />
          <CardContent>
            <Skeleton height="calc(1.5rem * 1.33)" width="16vw" />
            <div className={classes.spacer} />
            <Skeleton height={typography.fontSize} width="16vw" />
            <div className={classes.spacer} />
          </CardContent>
        </CardButton>
      </Grid>
    );
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const { name, icons, category } = data.app;

  return (
    <Grid item lg={2} md={3} sm={4} xl={1} xs={12}>
      <StyledLink href={`/app/${id}`}>
        <CardButton className={classes.button}>
          <img alt={name} className={classes.icon} srcSet={setIcons(icons)} />
          <CardContent>
            <Typography
              className={classes.name}
              color="inherit"
              gutterBottom
              variant="h6"
            >
              {name}
            </Typography>
            <Typography className={classes.category} color="textSecondary">
              {category.name}
            </Typography>
          </CardContent>
        </CardButton>
      </StyledLink>
    </Grid>
  );
};

AppCard.propTypes = {
  id: PropTypes.string.isRequired
};

export default AppCard;
