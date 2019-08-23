import { Application } from 'graphql-types'
import { Asset } from 'graphql-types'
import { Category } from 'graphql-types'
import { ReactNode } from 'react'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export type ChildrenProps = {
  children: ReactNode
}

export type WithAppID<T> = T & Pick<Application, 'id'>
export type WithChildren<T> = T & ChildrenProps

export interface GraphCmsImg {
  width: number
  height: number
  handle: string
}

export type ApplicationProps = Pick<
  Application,
  'title' | 'slug'
> & {
  icon: GraphCmsImg
  category: Pick<Category, 'name'>
}

export interface AppPageProps {
  apps: WithAppID<ApplicationProps>[]
  name: string
}

export type FeaturedAppProps = Pick<
  Application,
  'description' | 'slug' | 'title'
> & {
  banner: GraphCmsImg
}

export interface PathnameProps {
  pathname: string
}

type ListWithAppID<T> = {
  applications: WithAppID<T>[]
}

export type ApplicationsList = ListWithAppID<
  ApplicationProps
>
export type FeaturedAppsList = ListWithAppID<
  FeaturedAppProps
>

export type ThemeProp = {
  theme?: Theme
}
