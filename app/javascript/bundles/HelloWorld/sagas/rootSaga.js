import { fork, all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';

const sagas = function*() {
  yield all([
    fork(userSaga),
    fork(loginSaga),
  ]);
}

export default sagas;