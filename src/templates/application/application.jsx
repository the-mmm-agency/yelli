import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'

import {
  Divider,
  Icon,
  Screenshots,
  Screenshot,
} from './application.css'

import Button from 'components/button'
import Flex from 'components/flex'
import Typography from 'components/typography'
import SEO from 'components/seo'

const Application = ({
  data: {
    graphcms: {
      application: {
        category,
        description,
        icon,
        screenshots,
        title,
        url,
      },
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
        <Flex flexDirection="column" mt={2} mx={1}>
          <Typography
            component="h1"
            itemProp="name"
            variant="h6"
          >
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
          <Button
            color="primary"
            itemProp="installUrl"
            href={url}
            mt="auto"
            size="small"
            target="_blank"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </Button>
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
      <Screenshots>
        {screenshots.map(screenshot => (
          <li key={screenshot.handle}>
            <Screenshot
              alt="Application Screenshot"
              itemProp="screenshot"
              title={title}
              fit="scale"
              image={screenshot}
              withWebp
            />
          </li>
        ))}
      </Screenshots>
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
