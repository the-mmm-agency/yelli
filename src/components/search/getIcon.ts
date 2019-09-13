import { FixedObject } from 'gatsby-image'

type Hit = {
  icon: { url: string }
}

const getSrc = (
  url: string
): Pick<
  FixedObject,
  'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp'
> => {
  const src = `${url.replace(
    'files.graph.cool',
    'images.graph.cool/v1'
  )}/56x56`
  const srcWebp = `${src}.webp`
  return {
    src,
    srcSet: `${src} 1x`,
    srcSetWebp: `${src} 1x`,
    srcWebp,
  }
}

const getIcon = (hit: Hit): FixedObject => ({
  height: 56,
  width: 56,
  ...getSrc(hit.icon.url),
})

export default getIcon
