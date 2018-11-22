import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_REQUEST, fetchSuccess } from './reducers';

export function* fetchCompanies() {
  try {
    yield delay(1000);
    yield put(fetchSuccess());
  } catch (e) {
    console.log(e);
  }
}

export function* watchFetchCompanies() {
  yield takeLatest(FETCH_REQUEST, fetchCompanies);
}

export default [];
