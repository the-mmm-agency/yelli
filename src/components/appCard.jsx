import { Card, CardActionArea, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'graphcms-image'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import Link from 'components/link'
import { between, spacing } from 'util/theme'
import Typography from 'components/typography'

const Root = styled(Card)`
  ${between('xs', 'sm')} {
    width: calc(100% / 3 - ${spacing(3)});
  }
  ${between('sm', 'md')} {
    width: calc(100% / 6 - ${spacing(3)});
  }
  ${between('md', 'lg')} {
    width: calc(100% / 8 - ${spacing(3)});
  }
  background-color: ${theme('palette.background.default')};
  box-shadow: none;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  height: fit-content;
  margin: ${spacing(1)};
  margin-left: 0;
  max-height: fit-content;
  min-width: 100px;
  max-width: 120px;
  scroll-snap-align: start;
  width: calc(100% / 10 - ${spacing(3)});
`

const ActionArea = styled(CardActionArea)`
  padding: ${spacing(1)};
  .MuiCardActionArea-focusHighlight {
    border-radius: ${theme('shape.borderRadius')};
  }
`

const Content = styled(CardContent)`
  padding: 0;
  padding-left: ${spacing(1)};
`

const Icon = styled(Img)`
  border-radius: 15px;
  object-fit: contain;
  margin-bottom: ${spacing(1)};
  width: 100%;
`

const AppCard = ({ category, title, icon, slug }) => (
  <Root component="li">
    <ActionArea component={Link} to={`/app/${slug}`}>
      <Icon
        image={icon}
        maxWidth={200}
        fadeIn={false}
        widthWebp
        title={title}
        alt="Application Icon"
      />
      <Content>
        <Typography fontWeight={500} noWrap variant="body1">
          {title}
        </Typography>
        <Typography
          fontWeight={600}
          color="textSecondary"
          noWrap
          variant="caption"
        >
          {category.name}
        </Typography>
      </Content>
    </ActionArea>
  </Root>
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
