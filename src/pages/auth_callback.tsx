import { useMutation } from '@apollo/react-hooks'
import { useAuth } from '@brettm12345/react-auth-hook'
import gql from 'graphql-tag'
import React, { useEffect } from 'react'

const AUTH = gql`
  mutation authenticate($idToken: String!) {
    authenticateUser(idToken: $idToken) {
      token
    }
  }
`

type AuthResult = {
  authenticateUser: {
    token: string
  }
}

const Auth0CallbackPage: React.FC = () => {
  const { authResult, handleAuth } = useAuth()

  const onCompleted = ({
    authenticateUser: { token },
  }: AuthResult): void => {
    window.localStorage.setItem('token', token)
    handleAuth()
  }

  const [auth] = useMutation(AUTH, {
    onCompleted,
  })

  useEffect(() => {
    if (authResult) {
      const { idToken } = authResult
      auth({
        variables: {
          idToken,
        },
      })
    }
  }, [authResult])

  return (
    <>
      <h1>You have reached the callback page</h1>
      <h2>you will now be redirected</h2>
    </>
  )
}

export default Auth0CallbackPage
