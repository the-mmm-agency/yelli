import { Grid, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import CardButton from 'Components/CardButton';
import StyledLink from 'Components/StyledLink';

const GET_APP = gql`
  query featuredApp($id: ID!) {
    app(where: { id: $id }) {
      name
      description
      banner
    }
  }
`;

const useStyles = makeStyles(theme => ({
  banner: {
    height: 200
  },
  button: {
    width: '100%'
  },
  card: {
    width: '100%'
  },
  root: {
    [theme.breakpoints.down('md')]: {
      minWidth: '80%'
    }
  }
}));

const FeaturedApp = React.memo(({ id }) => {
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
  const {
    name,
    description,
    banner: { mediaLink }
  } = data.app;
  return (
    <Grid className={classes.root} item md={5} sm={12} xs={12}>
      <StyledLink href={`/app/${id}`}>
        <CardButton
          CardProps={{
            className: classes.card
          }}
          className={classes.button}
        >
          <CardMedia className={classes.banner} image={mediaLink} />
          <CardContent>
            <Typography align="left" noWrap>
              {name}
            </Typography>
            <Typography align="left" color="textSecondary" noWrap>
              {description}
            </Typography>
          </CardContent>
        </CardButton>
      </StyledLink>
    </Grid>
  );
});

FeaturedApp.propTypes = {
  id: PropTypes.string.isRequired
};

export default FeaturedApp;
