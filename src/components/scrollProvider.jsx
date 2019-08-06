import { useState } from 'react'
import createUseContext from 'constate'

const useScroll = () => {
  const [scroll, setScroll] = useState(0)
  return { scroll, setScroll }
}

const useScrollContext = createUseContext(useScroll)

export default useScrollContext
