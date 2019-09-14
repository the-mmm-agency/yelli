import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useSnackbar } from 'notistack'
import { FormEvent } from 'react'

import {
  FilePond,
  FilePondMultiple,
  useFilePond,
  useFilePondMultiple,
} from './useFilePond'
import { InputItem, useInput } from './useInput'

import { useAuth } from 'src/auth'

const CREATE_APP = gql`
  mutation createApp(
    $author: ID!
    $category: ID!
    $description: String!
    $icon: ID!
    $screenshots: [ID!]
    $slug: String!
    $title: String!
    $url: String!
  ) {
    createApplication(
      authorId: $author
      categoryId: $category
      description: $description
      iconId: $icon
      screenshotsIds: $screenshots
      slug: $slug
      title: $title
      url: $url
    ) {
      title
    }
  }
`

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
  const { userId } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const [createApp, { loading }] = useMutation(CREATE_APP, {
    onCompleted: ({ createApplication: { title } }) => {
      onClose()
      enqueueSnackbar(`Successfully created ${title}`, {
        variant: 'success',
      })
    },
    onError: () => {
      enqueueSnackbar(
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
        author: userId,
        category: category.value,
        description: description.value,
        icon: icon.id,
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
