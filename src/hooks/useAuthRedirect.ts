import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import isBrowser from 'src/util/isBrowser'

export const useAuthRedirect = (): void => {
  if (!isBrowser()) return
  const { isAuthenticated, login } = useAuth()
  return useEffect((): void => {
    if (!isAuthenticated()) login()
  }, [])
}
