import { Grid, InputBase, InputAdornment, List } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Fuse from 'fuse.js'

import AppComponent from 'components/appComponent'
import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  inputAdornment: {
    margin: {
      left: theme.spacing(1),
      right: theme.spacing(2),
    },
  },
  list: {
    scrollSnapAlign: 'start',
    scrollMarginTop: '64px',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vw',
  },
  searchFocus: {
    backgroundColor: theme.palette.input.focus,
    boxShadow: theme.shadows[3],
  },
  search: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    '&:hover': {
      backgroundColor: theme.palette.input.hover,
    },
    backgroundColor: theme.palette.input.default,
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    position: 'sticky',
    fontWeight: 500,
    scrollMarginBottom: '20px',
    scrollSnapAlign: 'start',
    zIndex: theme.zIndex.appBar,
    top: theme.spacing(3),
    transition: theme.transitions.create(['background-color', 'box-shadow']),
  },
}))

const Search = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const classes = useStyles()
  const [searchString, setSearchString] = useState('')
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['title'],
  }
  const fuse = new Fuse(applications, options)
  const matchingApps = fuse.search(searchString).slice(0, 10)
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      navigate(`/app/${matchingApps[0].slug}`)
    }
  }
  const handleChange = e => {
    setSearchString(e.target.value)
  }
  return (
    <>
      <SEO title="Search" />
      <Grid className={classes.root} container direction="column">
        <InputBase
          className={classes.search}
          startAdornment={
            <InputAdornment
              classes={{ root: classes.inputAdornment }}
              position="start"
            >
              <SearchIcon color="primary" />
            </InputAdornment>
          }
          classes={{
            focused: classes.searchFocus,
          }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search…"
        />
        <List className={classes.list}>
          {matchingApps.map(app => (
            <AppComponent {...app} key={app.id} type="list" />
          ))}
        </List>
      </Grid>
    </>
  )
}

export const query = graphql`
  query {
    graphcms {
      applications {
        ...AppCard
      }
    }
  }
`

export default Search
