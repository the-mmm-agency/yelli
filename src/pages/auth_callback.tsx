import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'

import { useAuth } from 'src/auth'
import Flex from 'src/elements/flex'

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
      minHeight="90vh"
    >
      <CircularProgress size={100} />
    </Flex>
  )
}

export default Auth0CallbackPage
