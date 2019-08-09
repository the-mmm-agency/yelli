import { useState } from 'react'
import createUseContext from 'constate'

const useScroll = () => {
  const [scroll, setScroll] = useState(0)
  const [nextPageTop, setNextPageTop] = useState(true)
  return { scroll, setScroll, nextPageTop, setNextPageTop }
}

const useScrollContext = createUseContext(useScroll)

export default useScrollContext
