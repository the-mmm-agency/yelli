import React from 'react'
import PropTypes from 'prop-types'

import { Card, ActionArea, Content, Icon } from './appCard.css'

import Link from 'components/link'
import Typography from 'components/typography'

const AppCard = ({ category, title, icon, slug }) => (
  <Card component="li">
    <ActionArea component={Link} to={`/app/${slug}`}>
      <Icon image={icon} title={title} />
      <Content>
        <Typography fontWeight={500} noWrap variant="body1">
          {title}
        </Typography>
        <Typography
          fontWeight={600}
          color="textSecondary"
          noWrap
          variant="body2"
        >
          {category.name}
        </Typography>
      </Content>
    </ActionArea>
  </Card>
)

AppCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  icon: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default AppCard
