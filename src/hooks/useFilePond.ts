import { useState } from 'react'
import { File, FilePondProps } from 'react-filepond'

type UpdateFile = (source: File) => void
type OnLoad = (response: { id: string }) => void

export type FilePond = FilePondProps & {
  id: string
}

export const useFilePond = (): FilePond => {
  const [file, setFile] = useState()
  const [id, setId] = useState()
  const onload: OnLoad = ({ id }) => {
    setId(id)
  }
  const updateFile: UpdateFile = source => setFile(source)
  return {
    files: [file],
    id,
    onaddfile: updateFile,
    onremovefile: updateFile,
    server: {
      process: {
        onload,
      },
      url: process.env.FILE_URL,
    },
  }
}

type UpdateFiles = (source: File[]) => void

export type FilePondMultiple = FilePondProps & {
  ids: string[]
}

export const useFilePondMultiple = (): FilePondMultiple => {
  const [files, setFiles] = useState()
  const [ids, setIds] = useState()
  const onload: OnLoad = ({ id }) => {
    setIds([...ids, id])
  }
  const onupdatefiles: UpdateFiles = source => {
    setFiles([...files, ...source])
  }
  return {
    files,
    ids,
    onupdatefiles,
    server: {
      process: {
        onload,
      },
      url: process.env.FILE_URL,
    },
  }
}
