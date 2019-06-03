import { createActions } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

export const {
  getUsers,
  saveUsers,
} = createActions({
  [ActionTypes.GET_USERS]: payload => payload,
  [ActionTypes.SAVE_USERS]: payload => payload,
});