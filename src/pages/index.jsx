import { Divider } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import FeaturedAppCard from 'components/featuredAppCard'
import Flex from 'components/flex'
import AppComponent from 'components/appComponent'
import HomeSection from 'components/homeSection'
import SEO from 'components/seo'

const Home = ({ data: { latest, top, featured } }) => (
  <>
    <SEO title="Home" />
    <Flex flexDirection="column" pt={1}>
      <HomeSection
        title="Featured Apps"
        apps={featured.applications}
        AppComponent={FeaturedAppCard}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="Top Apps"
        link="/top-apps"
        apps={top.applications}
        AppComponent={AppComponent}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="New Apps"
        link="/new"
        apps={latest.applications}
        AppComponent={AppComponent}
      />
    </Flex>
  </>
)

export const query = graphql`
  query homePage {
    featured: graphcms {
      applications(where: { featured: true }) {
        ...FeaturedAppCard
      }
    }
    latest: graphcms {
      applications(first: 15, orderBy: createdAt_DESC) {
        ...AppCard
      }
    }
    top: graphcms {
      applications(first: 15, orderBy: rank_ASC) {
        ...AppCard
      }
    }
  }
`

export default Home
