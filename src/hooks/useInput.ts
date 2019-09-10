import { ChangeEvent, useState } from 'react'

type Value = string | number | null

type OnChange = (
  event: ChangeEvent<HTMLInputElement>
) => void

export type InputItem = {
  value: Value
  onChange: OnChange
}

export type UseInput = (init?: Value) => InputItem

export const useInput: UseInput = (init = '') => {
  const [value, setValue] = useState(init)
  const onChange: OnChange = event => {
    setValue(event.target.value)
  }
  return { onChange, value }
}
