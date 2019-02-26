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
      case 'openDrawer':
        return {
          ...state,
          drawer: true
        };
      case 'closeDrawer':
        return {
          ...state,
          drawer: false
        };
      default:
        return state;
    }
  },
  {
    auth: false,
    drawer: false
  }
);
