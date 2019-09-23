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

export type PathnameProps = {
  pathname: string
}

export interface AppListBase {
  applications: WithAppID<AppProps>[]
}

export type ThemeProp = {
  theme: Theme
}

export type CategoryTemplateProps = WithYelli<{
  category: AppListBase
}> & {
  pageContext: Pick<Category, 'name'>
}

export type AppList = WithYelli<AppListBase>

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

export interface FeaturedAppList {
  applications: WithAppID<FeaturedAppProps>[]
}
