import { navigate } from 'gatsby'
import React, { memo } from 'react'

import {
  ActionArea,
  Card,
  Content,
  Icon,
} from './application.card.css'

import Typography from 'src/elements/typography'
import { ApplicationProps } from 'src/types'

const AppCard: React.FC<ApplicationProps> = ({
  category,
  title,
  icon,
  slug,
}) => (
  <Card>
    <ActionArea
      onClick={() => {
        navigate(`/app/${slug}`)
      }}
    >
      <Icon icon={icon} title={title} />
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

export default memo(AppCard)
