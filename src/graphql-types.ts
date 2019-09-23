import { FixedObject, FluidObject } from 'gatsby-image'

export interface Node {
  id: string
}

export interface Category extends Node {
  applications: Application[]
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
  slug:
    | 'business'
    | 'entertainment'
    | 'food'
    | 'games'
    | 'lifestyle'
    | 'music'
    | 'news'
    | 'shopping'
    | 'social'
    | 'tools'
    | 'travel'
}

export interface Image extends Node {
  fixed: FixedObject
  fluid: FluidObject
}

export interface Application extends Node {
  banner: Image
  category: Category
  description: string
  featured: boolean
  icon: Image
  rank: number
  screenshots: Image[]
  slug: string
  title: string
  url: string
}
