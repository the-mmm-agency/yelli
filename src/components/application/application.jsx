import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Card from './application.card'
import ListItem from './application.listItem'

const Application = ({ variant, ...props }) => {
  const Component = variant === 'list' ? ListItem : Card
  return <Component {...props} />
}

export const query = graphql`
  fragment Application on GraphCMS_Application {
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

Application.defaultProps = {
  variant: 'card',
}

Application.propTypes = {
  variant: PropTypes.oneOf(['list', 'card']),
}

export default Application
