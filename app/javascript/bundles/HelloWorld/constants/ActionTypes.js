// @flow
import keyMirror from 'fbjs/lib/keyMirror';
import { AST_Null } from 'terser';

const ActionTypes = keyMirror({
  GET_USERS: null,
  SAVE_USERS: null,
  LOGIN: null,
  SAVE_DATA_LOGIN: null,
});

export default ActionTypes;