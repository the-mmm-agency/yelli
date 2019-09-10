import React, { useEffect } from 'react'

import { useAuth } from 'src/auth'

const Auth0CallbackPage: React.FC = () => {
  if (typeof window === 'undefined') return null
  const { handleAuth } = useAuth()
  useEffect(() => {
    handleAuth()
  }, [])
  return (
    <>
      <h1>You have reached the callback page</h1>
      <h2>you will now be redirected</h2>
    </>
  )
}

export default Auth0CallbackPage
