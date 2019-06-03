import { handleActions } from 'redux-actions';

import { saveUsers } from '../actions/AppActions';

export default handleActions ({
  [saveUsers]: (state, { payload: { users } }) => {
    return {
      ...state,
      users,
    }
  },
}, { users: []});