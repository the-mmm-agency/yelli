import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import Button from 'components/button'
import Flex from 'components/flex'
import SEO from 'components/seo'
import Typography from 'components/typography'
import { graphql } from 'gatsby'
import React from 'react'

import {
  Divider,
  Icon,
  Screenshot,
  Screenshots,
} from './app.template.css'

import { Application, Category } from 'graphql-types'
import { GraphCmsImg } from 'types'

interface ApplicationProps {
  data: {
    graphcms: {
      application: Pick<
        Application,
        'description' | 'title' | 'url'
      > & {
        category: Pick<Category, 'name'>
        icon: GraphCmsImg
        screenshots: GraphCmsImg[]
      }
    }
  }
}

const AppTemplate: React.FC<ApplicationProps> = ({
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
    <SEO description={description} title={title} />
    <Flex flexDirection="column">
      <Flex pl={{ md: 2, xs: 1 }} pt={{ md: 2, xs: 1 }}>
        <Icon image={icon} title={title} />
        <Flex flexDirection="column" mt={2} mx={1}>
          <Typography component="h1" variant="h6">
            {title}
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
          >
            {category.name}
          </Typography>
          <Button
            color="primary"
            href={url}
            mt="auto"
            size="small"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </Button>
        </Flex>
      </Flex>
      <Typography
        component="p"
        itemProp="description"
        maxWidth={{ md: 0.5, xs: 0.8 }}
        ml={{ sm: 5, xs: 4 }}
        my={{ sm: 3, xs: 2 }}
        variant="body1"
      >
        {description}
      </Typography>
      <Divider variant="fullWidth" />
      <Screenshots>
        {screenshots.map(screenshot => (
          <li key={screenshot.handle}>
            <Screenshot
              withWebp
              alt="Application Screenshot"
              fit="scale"
              image={screenshot}
              title={title}
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
          ...GraphCmsImg
        }
        description
        screenshots {
          ...GraphCmsImg
        }
        url
      }
    }
  }
`

export default AppTemplate
