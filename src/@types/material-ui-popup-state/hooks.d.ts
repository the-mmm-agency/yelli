declare module 'material-ui-popup-state/hooks' {
  import {
    PopupState,
    Variant,
  } from 'material-ui-popup-state'

  type UsePopupStateArgs = {
    parentPopupState?: PopupState
    popupId?: string
    variant: Variant
  }
  export function usePopupState(
    args: UsePopupStateArgs
  ): PopupState
  export {
    anchorRef,
    bindTrigger,
    bindToggle,
    bindHover,
    bindMenu,
    bindPopover,
    bindPopper,
  } from 'material-ui-popup-state'
}
