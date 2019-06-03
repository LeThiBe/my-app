import { fork, all } from 'redux-saga/effects';
import userSaga from './userSaga';

const sagas = function*() {
  yield all([
    fork(userSaga),
  ]);
}

export default sagas;