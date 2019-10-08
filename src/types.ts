import { Theme } from '@material-ui/core/styles/createMuiTheme'

import {
  Application,
  Category,
  Node,
} from './graphql-types'

export type WithAppID<T> = T & Node

export interface WithYelli<T> {
  data: {
    yelli: T
  }
}

export interface AppComponentProps
  extends Pick<Application, 'title' | 'icon' | 'category'> {
  to: string
}

export interface AppProps
  extends Omit<AppComponentProps, 'handleClick'> {
  slug: string
  variant?: 'card' | 'list'
}

export interface AppPageProps {
  apps: WithAppID<AppProps>[]
  name: string
}

export type FeaturedAppProps = Pick<
  Application,
  'description' | 'slug' | 'title' | 'banner'
>

export interface PathnameProps {
  pathname: string
}

export type Applications<T = AppProps> = WithAppID<T>[]

export type AppListBase = Record<
  'applications',
  Applications
>

export type ThemeProp = Record<'theme', Theme>

export type AppList = WithYelli<AppListBase>

export interface CategoryTemplateProps extends AppList {
  pageContext: Pick<Category, 'name'>
}

export interface AppTemplateProps
  extends WithYelli<{
    application: Pick<
      Application,
      | 'category'
      | 'description'
      | 'icon'
      | 'screenshots'
      | 'title'
      | 'url'
    >
  }> {
  pageContext: Node
}

export type FeaturedAppList = Record<
  'applications',
  Applications<FeaturedAppProps>
>
