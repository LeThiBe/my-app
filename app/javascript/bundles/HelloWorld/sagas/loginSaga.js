import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { login, saveDataLogin } from '../actions/AppActions';
import LoginRequest from '../requests/loginRequest';

function* loginSaga(action) {
  const { values, meta: { setErrors } } = action.payload;

  try {
    debugger;

    const response = yield call([LoginRequest, LoginRequest.login], values);

    console.log(response.data);
    yield put(saveDataLogin(response.data));
  } catch (e) {
    setErrors({ api: e.response.data.message });
  }
}

export default function* () {
  yield all([
    takeLatest(login, loginSaga),
  ]);
}