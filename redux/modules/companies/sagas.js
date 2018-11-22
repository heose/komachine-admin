import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_REQUEST, fetchSuccess } from './reducers';

export function* fetchCompanies() {
  yield delay(5000);
  yield put(fetchSuccess());
}

export function* watchFetchCompanies() {
  yield takeLatest(FETCH_REQUEST, fetchCompanies);
}

export default [watchFetchCompanies];
