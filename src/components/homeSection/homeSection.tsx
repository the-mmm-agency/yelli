import { Button, Typography } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'

import HorizontalScroll from 'src/components/horizontalScroll'
import Flex from 'src/elements/flex'
import {
  AppProps,
  FeaturedAppProps,
  WithAppID,
} from 'src/types'

type AppSection<T> = {
  apps: WithAppID<T>[]
  AppComponent: React.FC<T & any>
}

type HomeSectionProps = AppSection<
  AppProps | FeaturedAppProps
> & {
  title: string
  link?: string
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  link = null,
  apps,
  AppComponent,
}) => (
  <Flex flexDirection="column" pb={1} pt={2} width={1}>
    <Flex
      justifyContent="space-between"
      pl={3}
      pr={{ md: 2, xs: 1 }}
    >
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {link && (
        <Button
          aria-label="Show more"
          color="primary"
          onClick={() => {
            navigate(link)
          }}
          size="small"
          variant="text"
        >
          Show More
        </Button>
      )}
    </Flex>
    <HorizontalScroll>
      {apps.map(({ id, ...app }) => (
        <AppComponent key={id} {...app} />
      ))}
    </HorizontalScroll>
  </Flex>
)

export default HomeSection
