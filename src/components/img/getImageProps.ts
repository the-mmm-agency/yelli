import { FixedObject, FluidObject } from 'gatsby-image'
import { __, filter, lte, propOr } from 'ramda'

import { Image } from 'src/graphql-types'

const sizeMultipliersFixed = [1, 1.5, 2, 3]
const sizeMultipliersFluid = [0.25, 0.5, 1, 1.5, 2, 3]

export type ImageProp<T> = {
  image: Image
  args: T
}

type ImageFunc<T, K> = (props: ImageProp<T>) => K

export type FixedArgs = Partial<{
  width: number
  height: number
}>

export type FluidArgs = Partial<{
  maxWidth: number
  maxHeight: number
  sizes: string
}>

const getImageUrls = (
  url: string,
  width: number,
  height: number
): [string, string] => {
  const graphCoolUrl = url.replace(
    'files.graph.cool',
    'images.graph.cool/v1'
  )
  const imgUrl = `${graphCoolUrl}/${width}x${height}`
  const webpUrl = `${imgUrl}.webp`
  return [imgUrl, webpUrl]
}

const joinSrcSet = (srcSet: string[]): string =>
  srcSet.join(',\n')

const getSrcSets = (srcSets: {
  base: string[]
  webp: string[]
}): [string, string] => [
  joinSrcSet(srcSets.base),
  joinSrcSet(srcSets.webp),
]

type SrcSets = {
  base: string[]
  webp: string[]
}

const srcSetsInit: SrcSets = {
  base: [] as string[],
  webp: [] as string[],
}

const getWidths = (
  width: number,
  widths: number[]
): number[] => filter(lte(__, width), widths)

const makeSrcSet = (
  url: string,
  currentWidth: number,
  aspectRatio: number,
  transform: (url: string) => string,
  acc: SrcSets
): SrcSets => {
  const currentHeight = Math.round(
    currentWidth / aspectRatio
  )
  const [base, webpUrl] = getImageUrls(
    url,
    currentWidth,
    currentHeight
  )
  return {
    base: [...acc.base, transform(base)],
    webp: [...acc.webp, transform(webpUrl)],
  }
}

export const getFixed: ImageFunc<
  FixedArgs,
  FixedObject
> = ({ image, args }) => {
  const width: number = propOr(400, 'width', args)
  const widths = sizeMultipliersFixed.map(scale =>
    Math.round(image.width * scale)
  )
  const aspectRatio = args.height
    ? width / args.height
    : image.aspectRatio

  const height = Math.round(
    args.height || width / aspectRatio
  )

  const srcSets = getWidths(image.width, widths).reduce(
    (acc, currentWidth, i) => {
      const transform = (url: string): string =>
        `${url} ${sizeMultipliersFixed[i]}x`
      return makeSrcSet(
        image.url,
        currentWidth,
        aspectRatio,
        transform,
        acc
      )
    },
    srcSetsInit
  )

  const [src, srcWebp] = getImageUrls(
    image.url,
    width,
    height
  )

  const [srcSet, srcSetWebp] = getSrcSets(srcSets)
  return {
    base64: `data:image/png;base64,${image.base64}`,
    height,
    src,
    srcSet,
    srcSetWebp,
    srcWebp,
    width: Math.round(width),
  }
}

export const getFluid: ImageFunc<
  FluidArgs,
  FluidObject
> = ({ image, args }) => {
  const maxWidth: number = propOr(800, 'maxWidth', args)
  const aspectRatio = args.maxHeight
    ? maxWidth / args.maxHeight
    : image.aspectRatio

  const maxHeight: number = propOr(
    Math.round(maxWidth / image.aspectRatio),
    'maxHeight',
    args
  )

  const sizes: string = propOr(
    `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,
    'sizes',
    args
  )

  const widths = sizeMultipliersFluid
    .map(scale => Math.round(maxWidth * scale))
    .filter(width => width < image.width)
    .concat(image.width)

  const srcSets = getWidths(image.width, widths).reduce(
    (acc, currentWidth) => {
      const transform = (url: string): string =>
        `${url} ${currentWidth}w`
      return makeSrcSet(
        image.url,
        currentWidth,
        aspectRatio,
        transform,
        acc
      )
    },
    srcSetsInit
  )

  const [src, srcWebp] = getImageUrls(
    image.url,
    maxWidth,
    maxHeight
  )
  const [srcSet, srcSetWebp] = getSrcSets(srcSets)
  return {
    aspectRatio,
    base64: `data:image/png;base64,${image.base64}`,
    sizes,
    src,
    srcSet,
    srcSetWebp,
    srcWebp,
  }
}
