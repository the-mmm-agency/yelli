import { createStore } from 'react-hooks-global-state';

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action) => {
    switch (action.type) {
      case 'openAuth':
        return {
          ...state,
          auth: true
        };
      case 'closeAuth':
        return {
          ...state,
          auth: false
        };
      case 'openUpdate':
        return {
          ...state,
          update: true
        };
      case 'closeUpdate':
        return {
          ...state,
          update: true
        };
      case 'openInstallPrompt':
        return {
          ...state,
          installPrompt: true
        };
      case 'closeInstallPrompt':
        return {
          ...state,
          installPrompt: false
        };
      default:
        return state;
    }
  },
  {
    auth: false,
    installPrompt: true,
    update: false
  }
);
