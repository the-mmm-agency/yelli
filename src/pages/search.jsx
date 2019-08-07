import { Grid, InputBase, InputAdornment, List } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { graphql } from 'gatsby'

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
  },
  search: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    '&:hover': {
      backgroundColor: theme.palette.input.hover,
    },
    boxShadow: theme.shadows[3],
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
    transition: theme.transitions.create('background-color'),
  },
}))

const Search = ({
  data: {
    graphcms: { applications },
  },
}) => {
  const classes = useStyles()
  const [searchString, setSearchString] = useState('')
  const handleChange = e => {
    setSearchString(e.target.value)
  }
  const matchingApps = applications
    .filter(application =>
      searchString === ''
        ? true
        : application.title.toLowerCase().includes(searchString.toLowerCase())
    )
    .slice(0, 10)
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
            focus: classes.searchFocus,
          }}
          onChange={handleChange}
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
