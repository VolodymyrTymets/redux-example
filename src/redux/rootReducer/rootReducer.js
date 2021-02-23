/* @flow */
import { combineReducers } from 'redux';

import switcherReducer from '../switcherReducer/switcherReducer';

const initialState = {
  swithcer: {},
};

export { initialState };

export default combineReducers({
  switcher: switcherReducer,
});
