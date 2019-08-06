import PropTypes from 'prop-types'
import React from 'react'
import { graphql, navigate } from 'gatsby'

import AppCard from 'components/appCard'
import useScroll from 'components/scrollProvider'
import AppListItem from 'components/appListItem'

const AppComponent = ({ type, slug, page, ...props }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard
  const { setScroll } = useScroll()
  const handleClick = ({ currentTarget }) => {
    navigate(`/app/${slug}/`)
    setScroll(document.querySelectorAll('.ScrollbarsCustom')[0].scrollTop)
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
  page: PropTypes.string,
  slug: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['list', 'card']),
}

export default AppComponent
