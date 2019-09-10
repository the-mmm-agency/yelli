import { useAuth } from '@brettm12345/react-auth-hook'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { ListItemProps } from '@material-ui/core/ListItem'
import { StarOutlined as Star } from '@material-ui/icons'
import { navigate } from 'gatsby'
import { Logout } from 'mdi-material-ui'
import React, { useEffect } from 'react'

import ListHeader from 'src/components/listHeader'
import SEO from 'src/components/seo'
import { WithChildren } from 'src/types'

type ItemProps = WithChildren<
  ListItemProps & {
    icon: React.ReactElement
    onClick: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void
    text: string
  }
>

const Item: React.FC<ItemProps> = ({
  children,
  icon,
  onClick,
  text,
}) => (
  <ListItem button divider onClick={onClick}>
    <ListItemIcon color="inherit">{icon}</ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: 'subtitle1',
      }}
    />
    {children}
  </ListItem>
)

const Profile: React.FC = () => {
  const { isAuthenticated, login, logout, user } = useAuth()
  useEffect((): void => {
    if (!isAuthenticated()) login()
  })
  return (
    <>
      <SEO title="Profile" />
      <ListHeader>
        {user !== null ? user.name : 'Profile'}
      </ListHeader>
      <List
        css={{
          minHeight: '100vh',
        }}
      >
        <Item
          icon={<Star />}
          onClick={(): void => {
            navigate('/favorites')
          }}
          text="Favorites"
        />
        <Item
          icon={<Logout />}
          onClick={logout}
          text="Logout"
        />
      </List>
    </>
  )
}

export default Profile
