import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import AppCard from 'components/appCard'
import AppListItem from 'components/appListItem'

const AppComponent = ({ variant, ...props }) => {
  const AppItem = variant === 'list' ? AppListItem : AppCard
  return <AppItem {...props} />
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
  variant: 'card',
}

AppComponent.propTypes = {
  variant: PropTypes.oneOf(['list', 'card']),
}

export default AppComponent
