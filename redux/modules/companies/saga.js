import { takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_REQUEST, fetchSUCCESS } from './reducer';

export function* watchFetchingCompanies() {
  yield delay(1000);
  yield takeLatest(FETCH_REQUEST, fetchSUCCESS);
}
