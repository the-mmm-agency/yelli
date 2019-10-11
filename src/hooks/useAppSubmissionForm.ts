import { useMutation } from '@apollo/react-hooks'
import { FormEvent } from 'react'

import {
  FilePond,
  FilePondMultiple,
  useFilePond,
  useFilePondMultiple,
} from './useFilePond'
import { InputItem, useInput } from './useInput'

import CREATE_APP from 'src/graphql/createApp.mutation.gql'
import { useSnackbar } from 'src/hooks/useSnackbar'

type OnSubmit = (event: FormEvent<HTMLFormElement>) => void

type AppSubmissionForm = {
  category: InputItem
  description: InputItem
  slug: InputItem
  title: InputItem
  icon: FilePond
  screenshots: FilePondMultiple
  loading: boolean
  url: InputItem
  onSubmit: OnSubmit
}

export const useAppSubmissionForm = (
  onClose: () => void
): AppSubmissionForm => {
  const { enqueue } = useSnackbar()
  const [createApp, { loading }] = useMutation(CREATE_APP, {
    onCompleted: ({ createApplication: { title } }) => {
      onClose()
      enqueue(`Successfully created ${title}`, {
        variant: 'success',
      })
    },
    onError: () => {
      enqueue(
        'There was an error creating your application',
        { variant: 'error' }
      )
    },
  })

  const category = useInput()
  const description = useInput('')
  const icon = useFilePond()
  const screenshots = useFilePondMultiple()
  const slug = useInput('')
  const title = useInput('')
  const url = useInput('')

  const onSubmit: OnSubmit = event => {
    event.preventDefault()
    createApp({
      variables: {
        category: category.value,
        description: description.value,
        icon: icon.serverId,
        screenshots: screenshots.ids,
        slug: slug.value,
        title: title.value,
        url: url.value,
      },
    })
  }

  return {
    category,
    description,
    icon,
    loading,
    onSubmit,
    screenshots,
    slug,
    title,
    url,
  }
}
