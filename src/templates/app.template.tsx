import { NoSsr } from '@material-ui/core'
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'

import {
  Divider,
  Icon,
  LaunchApp,
  Screenshot,
  Screenshots,
} from './app.template.css'

import Favorite from 'src/components/favorite'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import Typography from 'src/elements/typography'
import { AppTemplateProps } from 'src/types'

const AppTemplate: React.FC<AppTemplateProps> = ({
  data: {
    yelli: {
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
  pageContext: { id },
}) => (
  <>
    <SEO description={description} title={title} />
    <Flex flexDirection="column">
      <Flex pl={{ md: 2, xs: 1 }} pt={{ md: 2, xs: 1 }}>
        <Icon icon={icon} title={title} />
        <Flex flexDirection="column" mt={2} mx={1}>
          <Flex height="2em">
            <Typography component="h1" variant="h6">
              {title}
            </Typography>
            <NoSsr>
              <Favorite id={id} title={title} />
            </NoSsr>
          </Flex>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
          >
            {category.name}
          </Typography>
          <LaunchApp href={url}>
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </LaunchApp>
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
        {screenshots.map(({ id, ...screenshot }) => (
          <li key={id}>
            <Screenshot
              alt="Application Screenshot"
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
    yelli {
      application(where: { id: $id }) {
        category {
          name
        }
        description
        icon {
          fixed(width: 112, height: 112) {
            ...Fixed
          }
        }
        screenshots {
          id
          fluid(
            srcSetBreakpoints: [200, 250, 300, 350, 400]
            sizes: "(max-width: 960px) 200px, 25vw"
          ) {
            ...Fluid
          }
        }
        title
        url
      }
    }
  }
`

export default AppTemplate
