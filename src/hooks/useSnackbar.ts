/* eslint-disable fp/no-mutating-methods */

import { SnackbarProps } from '@material-ui/core/Snackbar'
import { SnackbarContentProps } from '@material-ui/core/SnackbarContent'
import { SnackbarVariant } from '@material-ui/core/styles/createPalette'
import createUseContext from 'constate'
import { ReactNode } from 'react'
import { useArray, useBoolean } from 'react-hanger'
import { oc } from 'ts-optchain'

type Snack = Omit<
  SnackbarProps,
  'open' | 'onClose' | 'onExit'
>

interface SnackOptions extends Omit<Snack, 'message'> {
  key: string | number
  variant: SnackbarVariant
  persist: boolean
  preventDuplicate: boolean
  children: ReactNode
  action: SnackbarContentProps['action']
}

type Enqueue = (
  message: string,
  options?: Partial<SnackOptions>
) => void

interface SnackbarContext {
  snacks: Snack[]
  current: Snack
  enqueue: Enqueue
  close: () => void
  exit: () => void
  isOpen: boolean
}

const useSnackbar = (): SnackbarContext => {
  const {
    value: isOpen,
    setFalse: close,
    setTrue: open,
  } = useBoolean(false)

  const { value: snacks, ...queue } = useArray<Snack>([])

  const current = snacks[0] || {}

  const exit = (): void => {
    snacks.length > 1 ? open() : close()
    setTimeout(() => {
      queue.shift()
    }, 200)
  }

  const enqueue: Enqueue = (message, options) => {
    const args = oc(options)
    queue.push(({
      message,
      ...options,
      autoHideDuration: args.persist(undefined)
        ? null
        : args.autoHideDuration(undefined),
    } as unknown) as Snack)
    if (isOpen) close()
    else if (snacks.length > 1) exit()
    else open()
  }

  return {
    close,
    current,
    enqueue,
    exit,
    isOpen,
    snacks,
  }
}

const useSnackbarContext = createUseContext(useSnackbar)

export { useSnackbarContext as useSnackbar }
export const SnackbarProvider = useSnackbarContext.Provider
