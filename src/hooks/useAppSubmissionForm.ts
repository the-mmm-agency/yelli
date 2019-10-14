import { useMutation } from '@apollo/react-hooks'
import { FormEvent } from 'react'

import {
  FilePond,
  FilePondMultiple,
  useFilePond,
  useFilePondMultiple,
} from './useFilePond'
import { InputItem, useInput } from './useInput'

import { CREATE_APP } from 'src/graphql/mutations'
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
  const category = useInput()
  const description = useInput('')
  const icon = useFilePond()
  const screenshots = useFilePondMultiple()
  const slug = useInput('')
  const title = useInput('')
  const url = useInput('')

  const [createApp, { loading }] = useMutation(CREATE_APP, {
    onCompleted: ({ createApplication: { title } }) => {
      onClose()
      enqueue(`Created ${title}`)
    },
    onError: () => {
      enqueue(`Error creating ${title}`)
    },
  })

  const onSubmit: OnSubmit = event => {
    event.preventDefault()
    createApp({
      variables: {
        category: category.value,
        description: description.value,
        icon: {
          id: icon.serverId,
        },
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
