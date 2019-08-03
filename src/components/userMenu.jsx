import { IconButton, Menu } from '@material-ui/core'
import { SettingsOutlined as SettingsIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

import DarkThemeToggle from 'components/darkThemeToggle'

const useStyles = makeStyles({
  button: {
    marginLeft: 'auto',
  },
  menuPaper: {
    minWidth: 230,
  },
})

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-haspopup="true"
        aria-owns={anchorEl ? 'settings-menu' : undefined}
        className={classes.button}
        color="primary"
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        classes={{ paper: classes.menuPaper }}
        id="settings-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <DarkThemeToggle />
      </Menu>
    </>
  )
}

export default UserMenu
