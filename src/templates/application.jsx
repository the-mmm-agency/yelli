import { Divider, Grid, Typography, Button } from '@material-ui/core'
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { graphql } from 'gatsby'
import React from 'react'
import Img from 'graphcms-image'

import HorizontalScroll from 'components/horizontalScroll'
import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 4,
    marginTop: 'auto',
  },
  buttonLabel: {
    textTransform: 'capitalize',
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    padding: {
      right: theme.spacing(8),
    },
  },
  divider: {
    margin: {
      bottom: theme.spacing(4),
      left: theme.spacing(-3),
    },
    width: '120%',
  },
  icon: {
    borderRadius: 15,
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    height: theme.spacing(14),
    margin: theme.spacing(2),
    width: theme.spacing(14),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: theme.spacing(14),
    margin: {
      left: theme.spacing(1),
      right: theme.spacing(1),
      top: theme.spacing(2),
      bottom: theme.spacing(1),
    },
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
    },
    overflow: 'hidden',
    padding: {
      left: theme.spacing(4),
      top: theme.spacing(4),
    },
    paddingBottom: theme.spacing(3),
  },
  screenshot: {
    [theme.breakpoints.down('sm')]: {
      height: 355,
      width: 200,
    },
    border: {
      color: theme.palette.divider,
      radius: 15,
      style: 'solid',
      width: 1,
    },
    flexShrink: 0,
    height: '45vw',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    width: '25vw',
  },
}))

const Application = ({
  data: {
    graphcms: {
      application: { category, description, icon, screenshots, title, url },
    },
  },
}) => {
  const classes = useStyles()
  return (
    <>
      <SEO title={title} description={description} />
      <Grid
        className={classes.root}
        container
        spacing={4}
        itemScope
        itemType="https://schema.org/MobileApplication"
      >
        <Grid container>
          <Grid item xs="auto">
            <Img
              alt="Application Icon"
              title={title}
              className={classes.icon}
              itemprop="image"
              withWebp
              image={icon}
            />
          </Grid>
          <Grid className={classes.item} item xs="auto">
            <Typography component="h1" itemProp="name" variant="h6">
              {title}
            </Typography>
            <Typography
              color="textSecondary"
              itemProp="applicationCategory"
              component="h2"
              gutterBottom
              variant="h6"
            >
              {category.name}
            </Typography>
            <Button
              classes={{
                label: classes.buttonLabel,
              }}
              className={classes.button}
              color="primary"
              itemProp="installUrl"
              href={url}
              target="_blank"
              variant="outlined"
            >
              <OpenIcon fontSize="inherit" />
              &nbsp; Launch App
            </Button>
            <link itemProp="installUrl" href={url} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.description}
            itemProp="description"
            paragraph
          >
            {description}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <HorizontalScroll>
          {screenshots.map(screenshot => (
            <Img
              key={screenshot.handle}
              alt="Application Screenshot"
              itemProp="screenshot"
              title={title}
              fit="scale"
              className={classes.screenshot}
              image={screenshot}
              withWebp
            />
          ))}
        </HorizontalScroll>
      </Grid>
    </>
  )
}

export const pageQuery = graphql`
  query ApplicationById($id: ID!) {
    graphcms {
      application(where: { id: $id }) {
        title
        category {
          name
        }
        icon {
          handle
          width
          height
        }
        description
        screenshots {
          handle
          width
          height
        }
        url
      }
    }
  }
`

export default Application
