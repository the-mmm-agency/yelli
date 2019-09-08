import { FixedObject, FluidObject } from 'gatsby-image'

export type Image = {
  width: number
  height: number
  aspectRatio: number
  url: string
  base64: string
}

export type Node = {
  id: string
}

type ImageSharp<T> = {
  childImageSharp: T
}

export type GatsbyImageFixed = ImageSharp<{
  fixed: FixedObject
}>

export type GatsbyImageFluid = ImageSharp<{
  fluid: FluidObject
}>

export type Application = Node & {
  title: string
  screenshots: Array<Node & Image>
  icon: Image
  manifest: any
  url: string
  featured: boolean
  banner: Image
  rank: number
  category: Category
  slug: string
  description: string
}

export type Category = Node & {
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

  applications: Array<Application>
  slug: string
}
