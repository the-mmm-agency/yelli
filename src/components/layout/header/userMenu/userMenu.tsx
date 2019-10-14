import {
  IconButton,
  Menu,
  Tooltip,
} from '@material-ui/core'
import { AccountCircleOutlined as UserIcon } from '@material-ui/icons'
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import React from 'react'

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
      <Menu {...bindMenu(popupState)}>
        <Items />
      </Menu>
    </>
  )
}

export default UserMenu
