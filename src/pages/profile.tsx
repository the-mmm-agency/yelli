import { useAuth } from '@brettm12345/react-auth-hook'
import { Divider, List } from '@material-ui/core'
import React from 'react'

import Items from 'src/components/layout/header/userMenu/userMenu.items'
import ListHeader from 'src/components/listHeader'
import SEO from 'src/components/seo'
import SubmitApp from 'src/components/submitApp'
import Flex from 'src/elements/flex'
import Typography from 'src/elements/typography'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'

const Profile: React.FC = () => {
  useAuthRedirect()
  const { user } = useAuth()
  return (
    <>
      <SEO title="Profile" />
      <Flex
        bgcolor="background.paper"
        flexDirection="column"
        minHeight="100vh"
      >
        <ListHeader>
          {user !== null ? user.name : 'Profile'}
        </ListHeader>
        <List divider>
          <Items isAuthenticated />
        </List>
        <Typography
          component="h2"
          fontWeight={500}
          m={2}
          variant="h6"
        >
          Submit your application
        </Typography>
        <Divider />
        <SubmitApp />
      </Flex>
    </>
  )
}

export default Profile
