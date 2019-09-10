import { useAuth } from '@brettm12345/react-auth-hook'
import { useEffect } from 'react'

export const useAuthRedirect = (): void => {
  const { isAuthenticated, login } = useAuth()
  return useEffect((): void => {
    if (!isAuthenticated()) login()
  }, [isAuthenticated()])
}
