import { useApolloClient } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-boost'
import { useState } from 'react'
import {
  ActualFileObject,
  FilePondProps,
  ProgressServerConfigFunction,
} from 'react-filepond'

import UPLOAD from 'src/graphql/upload.mutation.gql'

export type FilePond = FilePondProps & {
  serverId: string
}

const process = (
  file: ActualFileObject,
  load: (p: string | { [key: string]: any }) => void,
  progress: ProgressServerConfigFunction,
  client: ApolloClient<any>,
  update: (id: string) => void
): void => {
  client
    .mutate({
      mutation: UPLOAD,
      variables: {
        file,
      },
    })
    .then(response => {
      progress(false, 100, 100)
      load(response.data.uploadImage.id)
      update(response.data.uploadImage.id)
    })
}

export const useFilePond = (): FilePond => {
  const [id, setId] = useState('')

  const client = useApolloClient()
  return {
    server: {
      process: (
        _fieldName,
        file,
        _metadata,
        load,
        _error,
        progress
      ) => process(file, load, progress, client, setId),
    },
    serverId: id,
  }
}

export type FilePondMultiple = FilePondProps & {
  ids: string[]
}

export const useFilePondMultiple = (): FilePondMultiple => {
  const [ids, setIds] = useState()
  const update = (id: string): void => {
    setIds(Array.isArray(ids) ? [...ids, id] : [id])
  }
  const client = useApolloClient()
  return {
    ids,
    server: {
      process: (
        _fieldName,
        file,
        _metadata,
        load,
        _error,
        progress
      ) => process(file, load, progress, client, update),
    },
  }
}
