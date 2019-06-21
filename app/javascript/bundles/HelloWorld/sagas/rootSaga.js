import { fork, all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga';

const sagas = function*() {
  yield all([
    fork(userSaga),
    fork(loginSaga),
    fork(signupSaga),
  ]);
}

export default sagas;