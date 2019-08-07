import { Card, CardActionArea, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql, navigate } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import CategoryIcon from 'components/categoryIcon'
import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  actionArea: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    padding: theme.spacing(5),
  },
  category: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      backgroundSize: 'auto 105%',
      borderColor: 'transparent',
      boxShadow: '0 8px 8px 0 rgba(0,0,0,.2)',
      transform: 'translateY(-3px)',
    },
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    display: 'flex',
    flexDirection: 'column',
    ...theme.shape,
    textAlign: 'center',
    transition: theme.transitions.create(
      ['border-color', 'opacity', 'box-shadow', 'background-size', 'transform'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    height: '2em',
    width: '2em',
  },
  name: {
    marginTop: theme.spacing(1),
    fontWeight: 500,
  },
}))

const CategoryCard = ({ name, slug }) => {
  const classes = useStyles()
  const { setScroll } = useScroll()
  const handleClick = () => {
    setScroll(0)
    navigate(`/category/${slug}/`)
  }
  return (
    <Grid item xs={6} md={4}>
      <Card className={classes.category}>
        <CardActionArea className={classes.actionArea} onClick={handleClick}>
          <CategoryIcon className={classes.icon} name={name} />
          <Typography className={classes.name} color="textPrimary" variant="h6">
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export const query = graphql`
  fragment CategoryCard on GraphCMS_Category {
    id
    name
    slug
  }
`

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CategoryCard
