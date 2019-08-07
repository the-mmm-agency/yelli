import { Divider, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql, navigate } from 'gatsby'
import React from 'react'

import HorizontalScroll from 'components/horizontalScroll'
import FeaturedAppCard from 'components/featuredAppCard'
import AppComponent from 'components/appComponent'
import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  button: {
    fontWeight: 600,
    margin: {
      left: 'auto',
      right: theme.spacing(3),
    },
    textTransform: 'capitalize',
  },
  divider: {
    width: '100%',
  },
  header: {
    display: 'flex',
    padding: {
      left: theme.spacing(4),
    },
  },
  root: {
    padding: {
      top: theme.spacing(1),
    },
  },
  section: {
    padding: {
      top: theme.spacing(2),
      bottom: theme.spacing(1),
    },
    width: '100%',
  },
}))

const Home = ({ data: { latest, top, featured } }) => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Home" />
      <Grid className={classes.root} container>
        <div className={classes.section}>
          <div className={classes.header}>
            <Typography component="h2" gutterBottom variant="h6">
              Featured Apps
            </Typography>
          </div>
          <HorizontalScroll>
            {featured.applications.map(({ id, ...app }) => (
              <FeaturedAppCard key={id} {...app} />
            ))}
          </HorizontalScroll>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <div className={classes.header}>
            <Typography component="h2" gutterBottom variant="h6">
              Top Apps
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              onClick={() => navigate('/top-apps')}
              size="small"
              variant="text"
            >
              view more
            </Button>
          </div>
          <HorizontalScroll>
            {top.applications.map(({ id, ...app }) => (
              <AppComponent key={id} {...app} />
            ))}
          </HorizontalScroll>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <div className={classes.header}>
            <Typography component="h2" gutterBottom variant="h6">
              New Apps
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              onClick={() => navigate('/new')}
              size="small"
              variant="text"
            >
              view all
            </Button>
          </div>
          <HorizontalScroll>
            {latest.applications.map(({ id, ...app }) => (
              <AppComponent key={id} {...app} />
            ))}
          </HorizontalScroll>
        </div>
      </Grid>
    </>
  )
}

export const query = graphql`
  query homePage {
    featured: graphcms {
      applications(where: { featured: true }) {
        ...FeaturedAppCard
      }
    }
    latest: graphcms {
      applications(first: 15, orderBy: createdAt_DESC) {
        ...AppCard
      }
    }
    top: graphcms {
      applications(first: 15, orderBy: rank_DESC) {
        ...AppCard
      }
    }
  }
`

export default Home
