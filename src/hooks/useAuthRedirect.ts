import { useAuth } from '@brettm12345/react-auth-hook'
import { navigate } from 'gatsby'
import { useEffect } from 'react'

type UseAuthPage = (path?: string) => void

export const useAuthRedirect: UseAuthPage = (
  path = '/'
) => {
  const { isAuthenticated } = useAuth()
  return useEffect((): void => {
    if (!isAuthenticated()) {
      navigate(path)
    }
  }, [isAuthenticated()])
}
