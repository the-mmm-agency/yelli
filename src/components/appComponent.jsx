import PropTypes from 'prop-types'
import React from 'react'
import { graphql, navigate } from 'gatsby'

import AppCard from 'components/appCard'
import useScroll from 'components/scrollProvider'
import AppListItem from 'components/appListItem'

const AppComponent = ({ type, slug, ...props }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard
  const { setScroll } = useScroll()
  const handleClick = () => {
    setScroll(document.querySelector('#scroll').scrollTop)
    navigate(`/app/${slug}/`)
  }
  return <AppItem handleClick={handleClick} {...props} />
}

export const query = graphql`
  fragment AppCard on GraphCMS_Application {
    id
    title
    slug
    category {
      name
    }
    icon {
      handle
      width
      height
    }
  }
`

AppComponent.defaultProps = {
  type: 'card',
}

AppComponent.propTypes = {
  slug: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['list', 'card']),
}

export default AppComponent
