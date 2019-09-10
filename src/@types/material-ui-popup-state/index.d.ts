declare module 'material-ui-popup-state' {
  import React, { SyntheticEvent } from 'react'

  export type Variant = 'popover' | 'popper'

  type SetAnchorEl = (state: HTMLElement | null) => any
  type EventFunc = (event: SyntheticEvent<any>) => void
  export type PopupState = {
    open: (
      eventOrAnchorEl?: SyntheticEvent<any> | HTMLElement
    ) => void
    close: () => void
    toggle: (
      eventOrAnchorEl?: SyntheticEvent<any> | HTMLElement
    ) => void
    onMouseLeave: EventFunc
    setOpen: (
      open: boolean,
      eventOrAnchorEl?: SyntheticEvent<any> | HTMLElement
    ) => void
    isOpen: boolean
    anchorEl: HTMLElement | null
    setAnchorEl: SetAnchorEl
    setAnchorElUsed: boolean
    popupId: string | null
    variant: Variant
    _childPopupState: PopupState | null
    _setChildPopupState: (state: PopupState | null) => void
  }

  export type CoreState = {
    isOpen: boolean
    setAnchorElUsed: boolean
    anchorEl: HTMLElement | null
    hovered: boolean
    _childPopupState: PopupState | null
  }

  export const initCoreState: CoreState
  export type CreatePopupStateArgs = {
    state: CoreState
    setState: (state: Partial<CoreState>) => any
    popupId?: string
    variant: Variant
    parentPopupState?: PopupState | null
  }
  export function createPopupState(
    args: CreatePopupStateArgs
  ): PopupState

  export function anchorRef(args: {
    setAnchorEl: SetAnchorEl
  }): SetAnchorEl | undefined

  type Aria = {
    'aria-owns'?: string
    'aria-describedby'?: string
    'aria-haspopup': true
  }

  type ToggleKeys =
    | 'isOpen'
    | 'open'
    | 'popupId'
    | 'variant'
  type ToggleArgs = Pick<PopupState, ToggleKeys>
  type BindToggle = Aria & {
    onClick: EventFunc
  }
  export function bindTrigger(args: ToggleArgs): BindToggle
  export function bindToggle(args: ToggleArgs): BindToggle

  type HoverKeys = ToggleKeys | 'onMouseLeave'
  type HoverArgs = Pick<PopupState, HoverKeys>
  type Hover = Aria & {
    onMouseEnter: EventFunc
    onMouseLeave: EventFunc
  }
  export function bindHover(args: HoverArgs): Hover

  type PopperKeys = 'isOpen' | 'anchorEl' | 'popupId'
  type PopperArgs = Pick<PopupState, PopperKeys>
  type Popper = {
    id?: string
    anchorEl: HTMLElement | null
    open: boolean
  }
  export function bindPopper(args: PopperArgs): Popper
  export function bindMenu(args: PopperArgs): Popper

  type PopoverKeys = PopperKeys | 'onMouseLeave' | 'close'
  type PopoverArgs = Pick<PopupState, PopoverKeys>
  type Popover = Popper & {
    onClose: () => void
    onMouseLeave: EventFunc
  }
  export function bindPopover(args: PopoverArgs): Popover

  export type PopupStateProps = {
    popupId?: string
    children?: (props: PopupState) => React.ReactNode
    variant: Variant
    parentPopupState?: PopupState
  }
}
