import PropTypes from 'prop-types'
import React from 'react'
import { graphql, navigate } from 'gatsby'

import AppCard from 'components/appCard'
import AppListItem from 'components/appListItem'

const AppComponent = ({ type, slug, ...props }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard
  const handleClick = () => {
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
      url
      imageFile {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
