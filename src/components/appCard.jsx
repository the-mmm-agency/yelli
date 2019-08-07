import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'graphcms-image'

const useStyles = makeStyles(theme => ({
  actionArea: {
    padding: theme.spacing(1),
  },
  actionAreaFocusHighlight: {
    ...theme.shape,
  },
  category: {
    fontWeight: 600,
  },
  content: {
    '&:last-of-type': {
      paddingBottom: theme.spacing(2),
    },
    padding: {
      left: theme.spacing(1),
    },
    textOverflow: 'ellipsis',
  },
  icon: {
    borderRadius: 15,
    objectFit: 'contain',
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  name: {
    fontWeight: 500,
  },
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: `calc(100% / 3 - ${theme.spacing(3)}px)`,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: `calc(100% / 6 - ${theme.spacing(3)}px)`,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: `calc(100% / 8 - ${theme.spacing(3)}px)`,
    },
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    height: 'fit-content',
    margin: {
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    maxHeight: 'fit-content',
    maxWidth: 120,
    scrollSnapAlign: 'start',
    width: `calc(100% / 10 - ${theme.spacing(3)}px)`,
  },
}))

const AppCard = ({ handleClick, category, title, icon }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} component="li">
      <CardActionArea
        classes={{ focusHighlight: classes.actionAreaFocusHighlight }}
        className={classes.actionArea}
        onClick={handleClick}
      >
        <Img
          image={icon}
          className={classes.icon}
          maxWidth={200}
          widthWebp
          title={title}
          alt="Application Icon"
        />
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            color="inherit"
            noWrap
            variant="body1"
          >
            {title}
          </Typography>
          <Typography
            align="left"
            className={classes.category}
            color="textSecondary"
            noWrap
            variant="caption"
          >
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
AppCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

export default AppCard
