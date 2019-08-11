import { Divider as MuiDivider, Button } from '@material-ui/core'
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'
import Img from 'graphcms-image'

import HorizontalScroll from 'components/horizontalScroll'
import Flex from 'components/flex'
import AppIcon from 'components/appIcon'
import Typography from 'components/typography'
import SEO from 'components/seo'
import { spacing, up } from 'util/theme'

const Divider = styled(MuiDivider)`
  margin-bottom: ${spacing(2)};
`

const LaunchButton = styled(Button)`
  border-radius: 4px;
  margin-top: auto;
  .MuiButton-label {
    text-transform: capitalize;
  }
`

const Icon = styled(AppIcon)`
  flex-grow: 1;
  margin: ${spacing(2)} ${spacing(2)} 0;
  height: ${spacing(14)};
  width: ${spacing(14)};
`

const Screenshot = styled(Img)`
  ${up('md')} {
    height: 45vw;
    width: 25vw;
  }
  border: 1px solid ${theme('palette.divider')};
  border-radius: 15px;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  height: 355px;
  width: 200px;
`

const Application = ({
  data: {
    graphcms: {
      application: { category, description, icon, screenshots, title, url },
    },
  },
}) => (
  <>
    <SEO title={title} description={description} />
    <Flex
      flexDirection="column"
      itemScope
      itemType="https://schema.org/MobileApplication"
    >
      <Flex pt={{ xs: 1, md: 2 }} pl={{ xs: 1, md: 2 }}>
        <Icon title={title} itemprop="image" image={icon} />
        <Flex flexDirection="column" mt={2} mx={1} mb={1}>
          <Typography component="h1" itemProp="name" variant="h6">
            {title}
          </Typography>
          <Typography
            color="textSecondary"
            itemProp="applicationCategory"
            gutterBottom
            variant="h6"
          >
            {category.name}
          </Typography>
          <LaunchButton
            color="primary"
            itemProp="installUrl"
            href={url}
            size="small"
            target="_blank"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </LaunchButton>
          <link itemProp="installUrl" href={url} />
        </Flex>
      </Flex>
      <Typography
        ml={{ xs: 4, sm: 5 }}
        my={{ xs: 2, sm: 3 }}
        maxWidth={{ xs: 0.8, md: 0.5 }}
        itemProp="description"
        variant="body1"
        component="p"
      >
        {description}
      </Typography>
      <Divider variant="fullWidth" />
      <HorizontalScroll>
        {screenshots.map(screenshot => (
          <Screenshot
            key={screenshot.handle}
            alt="Application Screenshot"
            itemProp="screenshot"
            title={title}
            fit="scale"
            image={screenshot}
            withWebp
          />
        ))}
      </HorizontalScroll>
    </Flex>
  </>
)

export const pageQuery = graphql`
  query ApplicationById($id: ID!) {
    graphcms {
      application(where: { id: $id }) {
        title
        category {
          name
        }
        icon {
          handle
          width
          height
        }
        description
        screenshots {
          handle
          width
          height
        }
        url
      }
    }
  }
`

export default Application
