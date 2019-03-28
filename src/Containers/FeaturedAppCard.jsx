import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Fade,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
  actionArea: {
    background: theme.palette.background.paper
  },
  banner: {
    height: 200,
    width: '100%'
  },
  description: {
    fontSize: '0.7rem'
  },
  name: {
    fontWeight: 500
  },
  root: {
    '&:hover': {
      boxShadow: theme.shadows[1]
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 10px)'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 'calc(50% - 10px)'
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    width: 'calc(100% / 3 - 24px)'
  }
}));

const FeaturedAppCard = React.memo(({ banner, name, description, loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.root} component="li">
        <CardMedia className={classes.banner}>
          <Skeleton height="100%" width="100%" />
        </CardMedia>
        <CardContent>
          <Typography align="left" noWrap>
            <Skeleton />
          </Typography>
          <Typography align="left" color="textSecondary" noWrap>
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const history = useHistory();

  const handleClick = () => {
    history.push(`/app/${name}`);
  };

  return (
    <Fade appear in>
      <Card className={classes.root} component="li">
        <CardActionArea
          classes={{ focusHighlight: classes.actionArea }}
          onClick={handleClick}
        >
          <CardMedia className={classes.banner} image={banner} />
          <CardContent>
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
    </Fade>
  );
});

FeaturedAppCard.propTypes = {
  banner: PropTypes.string,
  description: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string
};

export default FeaturedAppCard;
