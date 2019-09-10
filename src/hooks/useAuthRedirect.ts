import { useAuth } from '@brettm12345/react-auth-hook'
import { useEffect } from 'react'

const isBrowser = (): boolean =>
  typeof window !== 'undefined'

export const useAuthRedirect = (): void => {
  const { isAuthenticated, login } = useAuth()
  return useEffect((): void => {
    if (isBrowser() && !isAuthenticated()) login()
  }, [isAuthenticated(), isBrowser()])
}
