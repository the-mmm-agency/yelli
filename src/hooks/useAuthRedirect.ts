import { useAuth } from '@brettm12345/react-auth-hook'
import { useLayoutEffect } from 'react'

export const useAuthRedirect = (): void => {
  const { isAuthenticated, login } = useAuth()
  return useLayoutEffect((): void => {
    if (!isAuthenticated()) login()
  }, [isAuthenticated()])
}
