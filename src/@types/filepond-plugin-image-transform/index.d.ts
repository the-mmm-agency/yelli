declare module 'filepond-plugin-image-transform' {
  export type FilePondPluginImageTransformProps = Partial<{
    allowImageTransform: boolean
    imageTransformOutputMimeType: MimeType
    imageTransformOutputQuality: number
    imageTransformOutputQualityMode: 'always' | 'optional'
    imageTransformOutputStripImageHead: boolean
    imageTransformClientTransforms: string[]
    imageTransformVariants: any
    imageTransformVariantsIncludeDefault: boolean
    imageTransformVariantsDefaultName: string
    imageTransformVariantsIncludeOriginal: boolean
    imageTransformVariantsOriginalName: string
    imageTransformBeforeCreateBlob: any
    imageTransformAfterCreateBlob: any
    imageTransformCanvasMemoryLimit: number
  }>
}
