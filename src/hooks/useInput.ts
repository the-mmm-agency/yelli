import { ChangeEvent, useState } from 'react'

type OnChange = (
  event: ChangeEvent<HTMLInputElement>
) => void

export type InputItem = {
  value: string
  onChange: OnChange
}

export type UseInput = (init?: string) => InputItem

export const useInput: UseInput = (init = '') => {
  const [value, setValue] = useState(init)
  const onChange: OnChange = event => {
    setValue(event.target.value)
  }
  return { onChange, value }
}
