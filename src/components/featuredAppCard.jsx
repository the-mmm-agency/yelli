import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const useStyles = makeStyles(theme => ({
  actionArea: {
    height: 200,
  },
  banner: {
    height: 200,
    width: '100%',
  },
  content: {
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  description: {
    fontSize: '0.7rem',
    fontWeight: 600,
  },
  name: {
    fontWeight: 500,
  },
  root: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      backgroundSize: 'auto 105%',
      borderColor: 'transparent',
      boxShadow: '0 8px 8px 0 rgba(0,0,0,.2)',
    },
    backgroundColor: theme.palette.background.default,
    border: {
      color: theme.palette.border,
      style: 'solid',
      width: 1,
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100% - 70px)',
      width: 'calc(100% - 70px)',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: 'calc(50% - 56px)',
      width: 'calc(50% - 56px)',
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    minWidth: 'calc(100% / 3 - 48px)',
    transition: theme.transitions.create(
      ['border-color', 'opacity', 'box-shadow', 'background-size'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
    width: 'calc(100% / 3 - 48px)',
  },
}))

const FeaturedAppCard = ({ title, banner, description, slug }) => {
  const classes = useStyles()
  const handleClick = () => {
    navigate(`/app/${slug}/`)
  }
  return (
    <Card className={classes.root} component="li">
      <CardActionArea
        classes={{ focusHighlight: classes.actionArea }}
        onClick={handleClick}
      >
        <Img
          className={classes.banner}
          fluid={banner.imageFile.childImageSharp.fluid}
        />
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            noWrap
            variant="body1"
          >
            {title}
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
  )
}

FeaturedAppCard.propTypes = {
  banner: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment FeaturedAppCard on GraphCMS_Application {
    title
    slug
    description
    banner {
      url
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default FeaturedAppCard
