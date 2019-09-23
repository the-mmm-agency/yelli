import { useState } from 'react'

export interface UseNumber {
  decrement: (x?: number) => void
  increment: (x?: number) => void
  setValue: (x: number) => void
  value: number
}

export const useNumber = (initial = 0): UseNumber => {
  const [value, setValue] = useState(initial)
  const increment = (x = 1): void => {
    setValue(value + x)
  }
  const decrement = (x = 1): void => {
    setValue(value - x)
  }
  return {
    decrement,
    increment,
    setValue,
    value,
  }
}
