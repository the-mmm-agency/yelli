declare module 'filepond-plugin-image-preview' {
  type markupItem =
    | 'width'
    | 'height'
    | 'resize'
    | 'markup'
    | 'crop'

  export type FilePondPluginImagePreviewProps = Partial<{
    allowImagePreview: boolean
    imagePreviewMinHeight: number | string
    imagePreviewHeight: number | string
    imagePreviewMaxFileSize: string
    imagePreviewTransparencyIndicator: 'grid' | string
    imagePreviewMaxInstantPreviewFileSize: number
    imagePreviewMarkupShow: boolean
    imagePreviewMarkupFilter: (
      markup: markupItem
    ) => boolean
  }>
}
