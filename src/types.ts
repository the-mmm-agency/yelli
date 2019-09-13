import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ReactChild, ReactNode } from 'react'

import { Application, Category } from './graphql-types'

export type Child = {
  children?: ReactChild
}

export type Children = {
  children?: ReactNode
}

export type ClassName = {
  className?: string
}

export type WithAppID<T> = T & Pick<Application, 'id'>
export type WithChildren<T> = T & Children
export type WithClassName<T> = T & ClassName
export type WithData<T> = {
  data: T
}
export type WithGraphCool<T> = WithData<{
  graphcool: T
}>

export type AppComponentProps = Pick<
  Application,
  'title' | 'icon' | 'category'
> & {
  to: string
}

export type AppProps = Omit<
  AppComponentProps,
  'handleClick'
> & {
  slug: string
  variant?: 'card' | 'list'
}

export type AppPageProps = {
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

type ListWithAppID<T> = {
  allApplications: Array<WithAppID<T>>
}

export type AppList = ListWithAppID<AppProps>

export type FeaturedAppList = ListWithAppID<
  FeaturedAppProps
>

export type ThemeProp = {
  theme: Theme
}

export type CategoryTemplateProps = WithGraphCool<
  ListWithAppID<AppProps>
> & {
  pageContext: Pick<Category, 'name'>
}

export type GraphCoolAppList = WithGraphCool<AppList>

export type ApplicationTemplateProps = WithGraphCool<{
  Application: Pick<
    Application,
    | 'category'
    | 'description'
    | 'icon'
    | 'screenshots'
    | 'title'
    | 'url'
  >
}> & {
  pageContext: Pick<Application, 'id'>
}
