// @flow
import { combineReducers } from 'redux';
import user from './user';
import login from './loginReducer';

const rootReducer = combineReducers({
  user,
  login,
});

export default rootReducer;