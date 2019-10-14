import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ReactNode } from 'react'

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
  action?: ReactNode
  to: string
}

type AppVariant = 'card' | 'list' | 'favorite'
export interface AppProps
  extends Omit<AppComponentProps, 'handleClick'> {
  id: string
  slug: string
  variant?: AppVariant
}

export interface AppPageProps {
  apps?: WithAppID<AppProps>[]
  variant?: AppVariant
  loading?: boolean
  numberOfSkeletons?: number
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
