import { createActions } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

export const {
  login,
  saveDataLogin,
  getUsers,
  saveUsers,
} = createActions({
  [ActionTypes.LOGIN]: payload => payload,
  [ActionTypes.SAVE_DATA_LOGIN]: user => ({ user }),
  [ActionTypes.GET_USERS]: payload => payload,
  [ActionTypes.SAVE_USERS]: payload => payload,
});