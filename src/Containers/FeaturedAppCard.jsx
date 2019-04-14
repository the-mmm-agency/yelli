import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import Skeleton from 'Components/Skeleton';

const FEATURED_APP_CARD = gql`
  query FeaturedAppCard($id: ID!) {
    app(where: { id: $id }) {
      name
      description
      banner
    }
  }
`;
const useStyles = makeStyles(theme => ({
  actionArea: {
    height: 200
  },
  banner: {
    height: 200,
    width: '100%'
  },
  content: {
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  description: {
    fontSize: '0.7rem',
    fontWeight: 600
  },
  name: {
    fontWeight: 500
  },
  root: {
    '&:hover': {
      backgroundSize: 'auto 103%',
      boxShadow: '0 8px 8px 0 rgba(0,0,0,.2)'
    },
    border: {
      color: theme.palette.type === 'dark' ? '#121523aa' : '#dadce0',
      style: 'solid',
      width: 1
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100% - 24px)',
      width: 'calc(100% - 24px)'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: 'calc(50% - 24px)',
      width: 'calc(50% - 24px)'
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    minWidth: 'calc(100% / 3 - 24px)',
    transition: theme.transitions.create(
      ['opacity', 'box-shadow', 'transform'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      }
    ),
    width: 'calc(100% / 3 - 24px)'
  }
}));

const FeaturedAppCard = memo(({ id, isLoading }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data, loading } = useQuery(FEATURED_APP_CARD, { variables: { id } });

  if (isLoading || loading) {
    return (
      <Card className={classes.root} component="li">
        <CardMedia className={classes.banner}>
          <Skeleton height="200px" width="100%" />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            noWrap
            variant="body1"
          >
            <Skeleton height={theme.typography.body1.fontSize} width="30%" />
          </Typography>
          <Typography
            align="left"
            className={classes.description}
            color="textSecondary"
            noWrap
            variant="body2"
          >
            <Skeleton height="0.7rem" width="60%" />
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const history = useHistory();

  const { banner, name, description } = data.app;

  const handleClick = () => {
    history.push(`/app/${name}`);
  };

  return (
    <Card className={classes.root} component="li">
      <CardActionArea
        classes={{ focusHighlight: classes.actionArea }}
        onClick={handleClick}
      >
        <CardMedia className={classes.banner} image={banner} />
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            noWrap
            variant="body1"
          >
            {name}
          </Typography>
          <Typography
            align="left"
            className={classes.description}
            color="textSecondary"
            noWrap
            variant="body2"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

FeaturedAppCard.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool
};

export default FeaturedAppCard;
