export type Maybe<T> = T | null

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED',
}

export type Node = {
  id: string
}

export type Application = Node & {
  __typename?: 'Application'
  status: Status
  updatedAt: any
  createdAt: any
  id: string
  title: string
  screenshots?: Maybe<Array<Asset>>
  icon?: Maybe<Asset>
  manifest?: Maybe<any>
  url: string
  featured?: Maybe<boolean>
  banner?: Maybe<Asset>
  rank?: Maybe<number>
  category?: Maybe<Category>
  slug: string
  description?: Maybe<string>
}

export type Category = Node & {
  __typename?: 'Category'
  status: Status
  updatedAt: any
  createdAt: any
  id: string
  name:
    | 'Business'
    | 'Entertainment'
    | 'Food'
    | 'Games'
    | 'Lifestyle'
    | 'Music'
    | 'News'
    | 'Shopping'
    | 'Social'
    | 'Tools'
    | 'Travel'

  applications?: Maybe<Array<Application>>
  slug: string
}

export type Asset = Node & {
  __typename?: 'Asset'
  status: Status
  updatedAt: any
  createdAt: any
  id: string
  handle: string
  fileName: string
  height?: Maybe<number>
  width?: Maybe<number>
  size?: Maybe<number>
  mimeType?: Maybe<string>
  screenshotsApplication?: Maybe<Array<Application>>
  iconApplication?: Maybe<Array<Application>>
  bannerApplication?: Maybe<Array<Application>>
  url: string
}
