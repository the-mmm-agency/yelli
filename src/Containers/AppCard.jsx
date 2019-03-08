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
    display: 'flex',
    width: '100%'
  },
  card: {
    margin: 'auto'
  },
  category: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.body2.fontSize
    }
  },
  icon: {
    display: 'flex',
    margin: 'auto',
    marginTop: '10%',
    objectFit: 'contain',
    width: '60%'
  },
  name: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.body1.fontSize
    }
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
      <Grid item lg={2} md={3} xl={1} xs={4}>
        <CardButton className={classes.button}>
          <Skeleton circle height="14vw" width="14vw" />
          <CardContent>
            <Skeleton height="calc(1.5rem * 1.33)" width="14vw" />
            <div className={classes.spacer} />
            <Skeleton height={typography.fontSize} width="14vw" />
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
    <Grid item lg={2} md={3} xl={1} xs={4}>
      <StyledLink href={`/app/${id}`}>
        <CardButton className={classes.button}>
          <img alt={name} className={classes.icon} srcSet={setIcons(icons)} />
          <CardContent>
            <Typography color="inherit" gutterBottom>
              {name}
            </Typography>
            <Typography color="textSecondary">{category.name}</Typography>
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
