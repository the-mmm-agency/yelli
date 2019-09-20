import { useApolloClient } from '@apollo/react-hooks'
import { ApolloClient, gql } from 'apollo-boost'
import { useState } from 'react'
import {
  ActualFileObject,
  FilePondProps,
  ProgressServerConfigFunction,
} from 'react-filepond'

export type FilePond = FilePondProps & {
  id: string
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
      mutation: gql`
        mutation($file: Upload!) {
          uploadImage(image: $file) {
            id
          }
        }
      `,
      variables: {
        file,
      },
    })
    .then(response => {
      progress(false, 100, 100)
      load(response.data.uploadImage.id)
      update(response.data.upload.id)
    })
}

export const useFilePond = (): FilePond => {
  const [id, setId] = useState('')

  const client = useApolloClient()
  return {
    id,
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
