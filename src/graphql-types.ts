import { FixedObject, FluidObject } from 'gatsby-image'

export type Node = {
  id: string
}

type ChildImageSharp<T> = {
  childImageSharp: T
}

type Fluid = {
  fluid: FluidObject
}

type Fixed = {
  fixed: FixedObject
}

export type ImageSharp = ChildImageSharp<Fluid | Fixed>
export type ImageFluid = ChildImageSharp<Fluid>
export type ImageFixed = ChildImageSharp<Fixed>

export type Image = {
  base64: string
  imageFile: ImageSharp
}

export type Application = Node & {
  title: string
  screenshots: Array<Node & Image>
  icon: Image
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
