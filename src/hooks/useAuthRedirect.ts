import { useEffect } from 'react'

import { useAuth } from 'src/auth'

const isBrowser = typeof window !== 'undefined'

export const useAuthRedirect = (): void => {
  if (!isBrowser) return
  const { isAuthenticated, login } = useAuth()
  return useEffect((): void => {
    if (!isAuthenticated()) login()
  }, [])
}
