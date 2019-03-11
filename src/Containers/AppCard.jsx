import { Grid, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import CardButton from 'Components/CardButton';
import StyledLink from 'Components/StyledLink';

const GET_APP = gql`
  query app($id: ID!) {
    app(where: { id: $id }) {
      name
      category {
        name
      }
      icon
    }
  }
`;

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    width: '100%'
  },
  card: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`
  },
  category: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.body2.fontSize
    }
  },
  content: {
    [theme.breakpoints.up('lg')]: {
      width: 150
    },
    '&:last-child': {
      padding: theme.spacing(1)
    },
    padding: 'none',
    width: 116
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      width: 80
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
      width: 150
    },
    borderRadius: 15,
    display: 'flex',
    margin: 'auto',
    objectFit: 'contain',
    padding: theme.spacing(1),
    width: 116
  },
  spacer: {
    height: theme.spacing(1)
  }
}));

const AppCard = React.memo(({ id }) => {
  const classes = useStyles();
  const { data, error, loading } = useQuery(GET_APP, {
    variables: { id }
  });

  if (loading) {
    return null;
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const { name, icon, category } = data.app;

  return (
    <Grid item xs="auto">
      <StyledLink href={`/app/${id}`}>
        <CardButton
          CardProps={{ className: classes.card }}
          className={classes.button}
        >
          <img alt={name} className={classes.icon} src={icon} />
          <CardContent className={classes.content}>
            <Typography color="inherit" gutterBottom noWrap>
              {name}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {category.name}
            </Typography>
          </CardContent>
        </CardButton>
      </StyledLink>
    </Grid>
  );
});

AppCard.propTypes = {
  id: PropTypes.string.isRequired
};

export default AppCard;
