import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Fade,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

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
      boxShadow: theme.shadows[1],
      transform: 'translateY(-2px)'
    },
    border: {
      color: '#dadce0',
      style: 'solid',
      width: 1
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100% - 10px)',
      width: 'calc(100% - 10px)'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: 'calc(50% - 10px)',
      width: 'calc(50% - 10px)'
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    minWidth: 'calc(100% / 3 - 24px)',
    transitionProperty: 'opacity,box-shadow,transform !important',
    width: 'calc(100% / 3 - 24px)'
  }
}));

const FeaturedAppCard = React.memo(({ banner, name, description, loading }) => {
  const classes = useStyles();
  const theme = useTheme();

  if (loading) {
    return (
      <Card className={classes.root} component="li">
        <CardMedia className={classes.banner}>
          <Skeleton
            color={theme.palette.text.primary}
            height="100%"
            highlightColor={theme.palette.text.secondary}
            width="100%"
          />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            noWrap
            variant="body1"
          >
            <Skeleton
              color={theme.palette.text.primary}
              height={theme.typography.body1.fontSize}
              highlightColor={theme.palette.text.secondary}
              width="30%"
            />
          </Typography>
          <Typography
            align="left"
            className={classes.description}
            color="textSecondary"
            noWrap
            variant="body2"
          >
            <Skeleton
              color={theme.palette.text.primary}
              height="0.7rem"
              highlightColor={theme.palette.text.secondary}
              width="60%"
            />
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
