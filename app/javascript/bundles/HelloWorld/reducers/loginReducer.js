// @flow
import { handleActions } from 'redux-actions';

import {
  saveDataLogin,
} from '../actions/AppActions';

export const initialState = {
};

export default handleActions({
  [saveDataLogin]: (state, action) => {
    const {user} = action.payload;
    return {
      ...state, user,
    };
  },
}, initialState);
