import {
  Card,
  CardMedia,
  CardActionArea,
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
      height: 80,
      width: 80
    },
    borderRadius: 15,
    height: 128,
    margin: 'auto',
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    width: 128
  },
  root: {
    '&:hover': {
      boxShadow: theme.shadows[1]
    },
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
    marginRight: theme.spacing(1),
    minWidth: 160
  }
}));

const AppCard = React.memo(({ id, name, icon, category, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <Card className={classes.root} component="li">
        <CardMedia className={classes.icon}>
          <Skeleton circle height="100%" width="100%" />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography color="inherit" noWrap>
            <Skeleton />
          </Typography>
          <Typography color="textSecondary" noWrap>
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
          <CardMedia className={classes.icon} image={icon}>
            {loading && <Skeleton circle height="100%" width="100%" />}
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography color="inherit" noWrap>
              {name}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
});

AppCard.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppCard;
