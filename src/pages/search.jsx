import { Grid, InputBase, List } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { makeStyles } from '@material-ui/styles'
import { useDebounce } from 'use-debounce'
import React, { useState } from 'react'
import { graphql } from 'gatsby'

import AppComponent from 'components/appComponent'
import Layout from 'components/layout'

const useStyles = makeStyles(theme => ({
  inputInput: {
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    padding: {
      bottom: theme.spacing(1),
      left: theme.spacing(10),
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vw',
    padding: theme.spacing(2),
  },
  search: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? fade(theme.palette.common.white, 0.08)
          : fade(theme.palette.common.black, 0.05),
    },
    backgroundColor:
      theme.palette.type === 'dark'
        ? fade(theme.palette.common.white, 0.05)
        : fade(theme.palette.common.black, 0.03),
    borderRadius: theme.shape.borderRadius,
    margin: {
      bottom: theme.spacing(2),
      left: 0,
      right: theme.spacing(2),
    },
    padding: theme.spacing(1),
    position: 'relative',
    transition: theme.transitions.create('background-color'),
    width: '100%',
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    margin: theme.spacing(-1),
    pointerEvents: 'none',
    position: 'absolute',
    width: theme.spacing(9),
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
        : application.title.toLowerCase().includes(searchString)
    )
    .slice(0, 10)
  return (
    <Layout>
      <Grid className={classes.root} container direction="column">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            classes={{
              input: classes.inputInput,
              root: classes.inputRoot,
            }}
            onChange={handleChange}
            placeholder="Search…"
          />
        </div>
        <List>
          {matchingApps.map(app => (
            <AppComponent {...app} key={app.id} type="list" />
          ))}
        </List>
      </Grid>
    </Layout>
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
