import { useState } from 'react'

export type UseBoolean = {
  setFalse: VoidFunction
  setTrue: VoidFunction
  toggle: VoidFunction
  value: boolean
  setValue: (value: boolean) => void
}

export const useBoolean = (init: boolean): UseBoolean => {
  const [value, setValue] = useState(init)
  const setFalse = (): void => {
    setValue(false)
  }
  const setTrue = (): void => {
    setValue(true)
  }
  const toggle = (): void => {
    setValue(!value)
  }
  return { setFalse, setTrue, setValue, toggle, value }
}
