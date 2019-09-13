import { List } from '@material-ui/core'
import React from 'react'

import { useAuth } from 'src/auth'
import Items from 'src/components/layout/header/userMenu/userMenu.items'
import ListHeader from 'src/components/listHeader'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { css } from 'src/util/styled'
import { borders, spacing } from 'src/util/theme'

const Profile: React.FC = () => {
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
        <List
          css={css`
            .MuiListItem-root {
              padding: ${spacing(2)};
              border-bottom: ${borders('standard')};
            }
          `}
        >
          <Items />
        </List>
      </Flex>
    </>
  )
}

export default Profile
