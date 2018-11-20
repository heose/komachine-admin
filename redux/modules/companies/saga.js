import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_REQUEST, fetchSUCCESS } from './reducer';

export function* fetchCompanies() {
  yield delay(1000);
  yield put(fetchSUCCESS);
}

export function* watchFetchCompanies() {
  yield takeLatest(FETCH_REQUEST, fetchCompanies);
}
