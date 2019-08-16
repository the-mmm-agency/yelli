import Link from 'components/link'
import Typography from 'components/typography'
import PropTypes from 'prop-types'
import React from 'react'

import {
  ActionArea,
  Card,
  Content,
  Icon,
} from './application.card.css'

const AppCard = ({ category, title, icon, slug }) => (
  <Card component="li">
    <ActionArea component={Link} to={`/app/${slug}`}>
      <Icon image={icon} title={title} />
      <Content>
        <Typography
          fontSize={{
            md: 'body1.fontSize',
            xs: 'body2.fontSize',
          }}
          fontWeight={500}
        >
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          fontSize={{
            md: 'body2.fontSize',
            xs: 'caption.fontSize',
          }}
          fontWeight={600}
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
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default AppCard
