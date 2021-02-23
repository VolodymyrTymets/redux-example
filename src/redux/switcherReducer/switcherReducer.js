const ROOT_PREFIX = 'SWITCHER/';

const initialState = {
  mode: 'light',
};

// Actions
export const TOGGLE_COLOR_MODE = `${ROOT_PREFIX}TOGGLE_COLOR_MODE`;

// Action creators
export const toggleColorMode = (mode) => (dispatch) => {
  dispatch({
    type: TOGGLE_COLOR_MODE,
    mode: mode,
  });
};

// Reducer
export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TOGGLE_COLOR_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};
