import { Drawer, List, ListItemIcon, ListItemText } from '@material-ui/core'
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import CategoryList from 'components/categoryList'
import NavLink from 'components/navLink'
import Logo from 'components/logo'

export const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    zIndex: 1000,
  },
  drawerPaper: {
    borderColor: theme.palette.divider,
    overflow: 'hidden',
    width: drawerWidth,
  },
  listIcon: {
    color: 'inherit',
  },
  logo: {
    '@media(min-width: 0px) and (orientation: landscape)': {
      height: 48,
    },
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
    height: 56,
    width: '30%',
    margin: 'auto',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    display: 'flex',
    lineHeight: 0,
    width: drawerWidth,
  },
  typography: {
    fontWeight: 'inherit',
  },
}))

const SideDrawer = () => {
  const classes = useStyles()
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      variant="permanent"
    >
      <div className={classes.toolbar}>
        <Logo className={classes.logo} />
      </div>
      <List dense>
        <NavLink href="/">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              className: classes.typography,
              color: 'inherit',
            }}
          >
            Home
          </ListItemText>
        </NavLink>
        <NavLink href="/search/">
          <ListItemIcon className={classes.listIcon}>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              className: classes.typography,
              color: 'inherit',
            }}
          >
            Search
          </ListItemText>
        </NavLink>
      </List>
      <CategoryList />
    </Drawer>
  )
}

export default SideDrawer
