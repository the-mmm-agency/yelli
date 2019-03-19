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
  banner: {
    height: 200,
    width: '100%'
  },
  root: {
    '&:hover': {
      boxShadow: theme.shadows[1]
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 10px)'
    },
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    width: 'calc(100% / 3 - 24px)'
  }
}));

const FeaturedAppCard = React.memo(
  ({ id, banner, name, description, loading }) => {
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
      history.push(`/app/${id}`);
    };

    return (
      <Fade appear in>
        <Card className={classes.root} component="li">
          <CardActionArea onClick={handleClick}>
            <CardMedia className={classes.banner} image={banner} />
            <CardContent>
              <Typography align="left" noWrap>
                {name}
              </Typography>
              <Typography align="left" color="textSecondary" noWrap>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Fade>
    );
  }
);

FeaturedAppCard.propTypes = {
  id: PropTypes.string,
  banner: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default FeaturedAppCard;
