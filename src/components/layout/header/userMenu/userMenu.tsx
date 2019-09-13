import {
  IconButton,
  NoSsr,
  Tooltip,
} from '@material-ui/core'
import { AccountCircleOutlined as UserIcon } from '@material-ui/icons'
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import React from 'react'

import { Menu } from './userMenu.css'
import Items from './userMenu.items'

const UserMenu: React.FC = () => {
  const popupState = usePopupState({
    popupId: 'user-menu',
    variant: 'popover',
  })
  return (
    <>
      <Tooltip
        placement="bottom"
        title="Open the user menu"
      >
        <IconButton
          aria-label="Open the user menu"
          color="primary"
          {...bindTrigger(popupState)}
        >
          <UserIcon />
        </IconButton>
      </Tooltip>
      <NoSsr defer>
        <Menu {...bindMenu(popupState)}>
          <Items />
        </Menu>
      </NoSsr>
    </>
  )
}

export default UserMenu
