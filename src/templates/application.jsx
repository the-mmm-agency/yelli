import { Divider, Grid, Typography, Button } from '@material-ui/core'
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { graphql } from 'gatsby'
import React from 'react'
import Img from 'graphcms-image'

import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 4,
    marginTop: 'auto',
  },
  buttonLabel: {
    textTransform: 'capitalize',
  },
  category: {
    fontWeight: 500,
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    padding: {
      right: theme.spacing(8),
    },
  },
  divider: {
    margin: {
      bottom: theme.spacing(2),
      left: theme.spacing(-3),
      top: theme.spacing(2),
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
    margin: theme.spacing(1),
    marginTop: 15,
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
    overflow: 'hidden',
    width: '25vw',
  },
  screenshots: {
    '&::after': {
      /* eslint-disable quotes */
      content: "''",
      /* eslint-enable quotes */
      minWidth: 30,
      minHeight: '100%',
    },
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'mandatory',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
    },
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'hidden',
    'scroll-snap-type': 'x mandatory',
    whiteSpace: 'nowrap',
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
      <Grid className={classes.root} container spacing={4}>
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
            <Typography component="h1" itemprop="name" variant="h6">
              {title}
            </Typography>
            <Typography
              className={classes.category}
              color="textSecondary"
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
              href={url}
              size="small"
              target="_blank"
              variant="outlined"
            >
              <OpenIcon fontSize="inherit" />
              &nbsp; Launch App
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.description}
            itemprop="description"
            paragraph
          >
            {description}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Grid className={classes.screenshots} container item spacing={4}>
          {screenshots.map(screenshot => (
            <Img
              key={screenshot.handle}
              alt="Application Screenshot"
              title={title}
              fit="scale"
              className={classes.screenshot}
              image={screenshot}
              withWebp
            />
          ))}
        </Grid>
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
