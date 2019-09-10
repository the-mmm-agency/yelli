/* eslint-disable fp/no-class */
declare module 'react-filepond' {
  import { FilePondPluginImageCropProps } from 'filepond-plugin-image-crop'
  import { FilePondPluginImagePreviewProps } from 'filepond-plugin-image-preview'
  import { FilePondPluginImageTransformProps } from 'filepond-plugin-image-transform'
  import { Component, ReactElement } from 'react'

  type FilePondOrigin =
    | 'input' // Added by user
    | 'limbo' // Temporary server file
    | 'local' // Existing server file

  export type FileProps = {
    src: string
    name?: string
    size?: number
    type?: string
    origin?: FilePondOrigin
    metadata?: { [key: string]: any }
  }

  type ActualFileObject = Blob & {
    readonly lastModified: number
    readonly name: string
  }

  export class File extends Component<FileProps> {
    file: ActualFileObject
    fileSize: number
    fileType: string
    filename: string
    fileExtension: string
    filenameWithoutExtension: string
    id: string
    serverId: string
    status: number
    archived: boolean
    abortLoad: () => void
    abortProcessing: () => void
    getMetadata: (key?: string) => any
    setMetadata: (key: string, value: any) => void
  }

  export type ServerUrl = Partial<{
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    withCredentials: boolean
    headers: { [key: string]: string | boolean | number }
    timeout: number
    onload: (response: any) => any
    onerror: (responseBody: any) => any
    ondata: (data: any) => any
  }>

  type ProgressServerConfigFunction = (
    isLengthComputable: boolean,
    loadedDataAmount: number,
    totalDataAmount: number
  ) => void

  export type ProcessServerConfigFunction = (
    fieldName: string,
    file: ActualFileObject,
    metadata: { [key: string]: any },
    load: (p: string | { [key: string]: any }) => void,
    error: (errorText: string) => void,
    progress: ProgressServerConfigFunction,
    abort: () => void
  ) => void

  type DataConfigFunctionArgs = {
    load: (file: ActualFileObject) => void
    error: (errorText: string) => void
    progress: ProgressServerConfigFunction
    abort: () => void
    headers: (headersString: string) => void
  }

  type RevertServerConfigFunction = (
    uniqueFieldId: any,
    load: () => void,
    error: (errorText: string) => void
  ) => void

  type RestoreServerConfigFunction = (
    uniqueFileId: any,
    load: (file: ActualFileObject) => void,
    error: (errorText: string) => void,
    progress: ProgressServerConfigFunction,
    abort: () => void,
    headers: (headersString: string) => void
  ) => void

  type LoadServerConfigFunction = (
    source: any,
    load: (file: ActualFileObject) => void,
    error: (errorText: string) => void,
    progress: ProgressServerConfigFunction,
    abort: () => void,
    headers: (headersString: string) => void
  ) => void

  type FetchServerConfigFunction = (
    url: string,
    load: (file: ActualFileObject) => void,
    error: (errorText: string) => void,
    progress: ProgressServerConfigFunction,
    abort: () => void,
    headers: (headersString: string) => void
  ) => void

  type Config<ConfigFunction> =
    | string
    | ServerUrl
    | ConfigFunction

  type ServerConfig = Partial<{
    url: string
    process: Config<ProcessServerConfigFunction>
    revert: Config<RevertServerConfigFunction>
    restore: Config<RestoreServerConfigFunction>
    load: Config<LoadServerConfigFunction>
    fetch: Config<FetchServerConfigFunction>
  }>

  export type FilePondServerConfigProps = Partial<{
    instantUpload: boolean
    server: string | ServerConfig
  }>

  export type FilePondDragDropProps = Partial<{
    dropOnPage: boolean
    dropOnElement: boolean
    dropValidation: boolean
    ignoredFiles: string[]
  }>

  export type FilePondLabelProps = Partial<{
    labelDecimalSeparator: string
    labelThousandsSeparator: string
    labelIdle: string
    labelFileWaitingForSize: string
    labelFileSizeNotAvailable: string
    labelFileLoading: string
    labelFileLoadError: string
    labelFileProcessing: string
    labelFileProcessingComplete: string
    labelFileProcessingAborted: string
    labelFileProcessingError: string
    labelTapToCancel: string
    labelTapToRetry: string
    labelTapToUndo: string
    labelButtonRemoveItem: string
    labelButtonAbortItemLoad: string
    labelButtonRetryItemLoad: string
    labelButtonAbortItemProcessing: string
    labelButtonUndoItemProcessing: string
    labelButtonRetryItemProcessing: string
    labelButtonProcessItem: string
  }>

  export type FilePondSvgIconProps = Partial<{
    iconRemove: string
    iconProcess: string
    iconRetry: string
    iconUndo: string
  }>

  type FilePondErrorDescription = {
    main: string
    sub: string
  }

  export type FilePondCallbackProps = Partial<{
    oninit: () => void
    onwarning: (
      error: any,
      file?: File,
      status?: any
    ) => void
    onerror: (
      file?: File,
      error?: FilePondErrorDescription,
      status?: any
    ) => void
    onaddfilestart: (file: File) => void
    onaddfileprogress: (
      file: File,
      progress: number
    ) => void
    onaddfile: (
      file: File,
      error: FilePondErrorDescription
    ) => void
    onprocessfilestart: (file: File) => void
    onprocessfileprogress?: (
      file: File,
      progress: number
    ) => void
    onprocessfileabort: (file: File) => void
    onprocessfileundo: (file: File) => void
    onprocessfile: (
      file: File,
      error: FilePondErrorDescription
    ) => void
    onremovefile: (file: File) => void
    onpreparefile: (file: File, output: any) => void
    onupdatefiles: (fileItems: File[]) => void
  }>

  export interface FilePondHookProps {
    beforeRemoveFile?: (file: File) => boolean
  }

  export type FilePondBaseProps = Partial<{
    children: ReactElement<File> | Array<ReactElement<File>>
    id: string
    name: string
    className: string
    required: boolean
    captureMethod: any
    allowDrop: boolean
    allowBrowse: boolean
    allowPaste: boolean
    allowMultiple: boolean
    allowReplace: boolean
    allowRevert: boolean
    maxFiles: number
    maxParallelUploads: number
    files: File[]
    acceptedFileTypes: string[]
    metadata: { [key: string]: any }
  }>

  export interface FilePondProps
    extends FilePondDragDropProps,
      FilePondServerConfigProps,
      FilePondLabelProps,
      FilePondSvgIconProps,
      FilePondCallbackProps,
      FilePondHookProps,
      FilePondPluginImageTransformProps,
      FilePondPluginImageCropProps,
      FilePondPluginImagePreviewProps,
      FilePondBaseProps {}

  export class FilePond extends Component<FilePondProps> {
    setOptions: (options: FilePondProps) => void
    addFile: (source: File) => void
    addFiles: (source: File[]) => void
    removeFile: (query: string) => void
    removeFiles: () => void
    processFile: (query: string) => void
    processFiles: () => void
    getFile: () => File
    getFiles: () => File[]
    browse: () => void
    context: () => void
  }

  export function create(
    element?: any,
    options?: FilePondProps
  ): void
  export function destroy(element: any): void
  export function find(element: any): FilePond
  export function parse(context: any): void
  export function registerPlugin(...plugins: any[]): void
  export function setOptions(options: FilePondProps): void
  export function getOptions(): FilePondProps
  export function supported(): boolean
}
