import UserApi from '../requests/userApi';
import { getUsers, saveUsers } from '../actions/AppActions';
import {call, put, takeLatest} from 'redux-saga/effects';

function* fetchUserSaga() {
  try {
    const response = yield call([UserApi, UserApi.getUsersData]);
    yield put(saveUsers(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeLatest(getUsers, fetchUserSaga);
}
