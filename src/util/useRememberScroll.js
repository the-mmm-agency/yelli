import useScroll from 'components/scrollProvider'
import { useScrollContainer } from 'components/scrollContainer'

const useRememberScroll = () => {
  const { setScroll } = useScroll()
  const scrollContainer = useScrollContainer()
  return () => {
    setScroll(
      scrollContainer !== null
        ? scrollContainer.getScrollState().scrollTop
        : document.querySelector('#scroll').scrollTop
    )
  }
}

export default useRememberScroll
