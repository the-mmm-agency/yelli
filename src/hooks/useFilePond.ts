import { useState } from 'react'
import { FilePondProps } from 'react-filepond'

type OnLoad = (response: string) => void

export type FilePond = FilePondProps & {
  id: string
}

export const useFilePond = (): FilePond => {
  const [id, setId] = useState()

  const onload: OnLoad = response => {
    setId(JSON.parse(response).id)
  }
  return {
    id,
    server: {
      process: {
        onload,
      },
      url: process.env.API_URL,
    },
  }
}

export type FilePondMultiple = FilePondProps & {
  ids: string[]
}

export const useFilePondMultiple = (): FilePondMultiple => {
  const [ids, setIds] = useState()
  const onload: OnLoad = response => {
    setIds([
      ...(Array.isArray(ids) ? ids : []),
      JSON.parse(response).id,
    ])
  }
  return {
    ids,
    server: {
      process: {
        onload,
      },
      url: process.env.FILE_URL,
    },
  }
}
