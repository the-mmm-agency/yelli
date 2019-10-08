import { Divider } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import Application from 'src/components/application'
import FeaturedApplication from 'src/components/featuredApp'
import HomeSection from 'src/components/homeSection'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { AppListBase, FeaturedAppList } from 'src/types'

interface Props {
  data: {
    featured: FeaturedAppList
    top: AppListBase
    latest: AppListBase
  }
}

const Home: React.FC<Props> = ({
  data: { featured, top, latest },
}) => (
  <>
    <SEO title="Home" />
    <Flex flexDirection="column" pt={1}>
      <HomeSection
        AppComponent={FeaturedApplication}
        apps={featured.applications}
        title="Featured Apps"
      />
      <Divider variant="fullWidth" />
      <HomeSection
        AppComponent={Application}
        apps={top.applications}
        link="/top-apps"
        title="Top Apps"
      />
      <Divider variant="fullWidth" />
      <HomeSection
        AppComponent={Application}
        apps={latest.applications}
        link="/new"
        title="New Apps"
      />
    </Flex>
  </>
)

export const query = graphql`
  {
    featured: yelli {
      applications(where: { featured: true }) {
        ...FeaturedApp
      }
    }
    latest: yelli {
      applications(first: 15, orderBy: createdAt_DESC) {
        ...Application
      }
    }
    top: yelli {
      applications(first: 15, orderBy: rank_DESC) {
        ...Application
      }
    }
  }
`

export default Home
