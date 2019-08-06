import { Card, CardActionArea, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import React from 'react'

import CategoryIcon from 'components/categoryIcon'
import SEO from 'components/seo'
import Layout from 'components/layout'

const useStyles = makeStyles(theme => ({
  actionArea: {
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
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
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
    height: '2em',
    width: '2em',
  },
  name: {
    marginTop: theme.spacing(1),
    fontWeight: 500,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}))

const Categories = () => {
  const classes = useStyles()

  const {
    graphcms: { categories },
  } = useStaticQuery(graphql`
    query {
      graphcms {
        categories {
          id
          name
          slug
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Categories" />
      <Grid className={classes.root} container>
        {categories.map(({ id, name, slug }) => (
          <Grid item xs={6} sm={4} key={id}>
            <Card className={classes.category}>
              <CardActionArea
                className={classes.actionArea}
                onClick={() => navigate(`/category/${slug}/`)}
              >
                <CategoryIcon className={classes.icon} name={name} />
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  variant="h6"
                >
                  {name}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Categories
