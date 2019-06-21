import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { signup, saveDataLogin } from '../actions/AppActions';
import SignupRequest from '../requests/signupRequest';

function* signupSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  debugger
  try {
    const response =  yield call([SignupRequest, SignupRequest.signup], values);
    yield put(saveDataLogin(response.data));
  } catch (e) {
    setErrors({ api: e.response.data.message });
  }
}

export default function* () {
  yield all([
    takeLatest(signup, signupSaga),
  ]);
}
