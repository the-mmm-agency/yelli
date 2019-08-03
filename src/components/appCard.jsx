import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

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
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
    padding: {
      left: theme.spacing(1),
    },
    textOverflow: 'ellipsis',
  },
  contentSkeleton: {
    '&:last-child': {
      paddingBottom: 0,
    },
    padding: {
      left: theme.spacing(1),
    },
    whiteSpace: 'pre-wrap',
  },
  icon: {
    borderRadius: 15,
    objectFit: 'contain',
    width: '100%',
  },
  name: {
    fontWeight: 500,
  },
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      maxWidth: `calc(100% / 3 - ${theme.spacing(3)}px)`,
      width: `calc(100% / 3 - ${theme.spacing(3)}px)`,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: `calc(100% / 6 - ${theme.spacing(3)}px)`,
      width: `calc(100% / 6 - ${theme.spacing(3)}px)`,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: `calc(100% / 8 - ${theme.spacing(3)}px)`,
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
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    maxHeight: 'fit-content',
    maxWidth: `calc(100% / 10 - ${theme.spacing(3)}px)`,
    width: `calc(100% / 10 - ${theme.spacing(3)}px)`,
  },
  skeleton: {
    padding: theme.spacing(1),
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
          alt={title}
          className={classes.icon}
          fluid={icon.imageFile.childImageSharp.fluid}
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
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default AppCard
