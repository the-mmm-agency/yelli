import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'

import { useAuth } from 'src/auth'
import Flex from 'src/elements/flex'
import Typography from 'src/elements/typography'

const Auth0CallbackPage: React.FC = () => {
  const { handleAuth } = useAuth()
  useEffect(() => {
    handleAuth()
  }, [])
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      p={10}
    >
      <Typography mb={16} variant="h1">
        Logging you in...
      </Typography>
      <CircularProgress size={100} />
    </Flex>
  )
}

export default Auth0CallbackPage
