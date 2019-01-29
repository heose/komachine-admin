import { takeLatest, put, call } from 'redux-saga/effects';
import CompanyApi from '../../../apis/company-api';
import { FETCH_REQUEST, fetchSuccess, fetchFailure } from './reducers';

const api = new CompanyApi();
export function* fetchCompanies(action) {
  try {
    const { data } = yield call(api.fetchCompanies, action.payload);
    // console.log(data);
    yield put(fetchSuccess(data.result));
  } catch (e) {
    yield put(fetchFailure());
    // yield put(progressStateActions.setState(403));
    // yield put(setErrStatus(e.status));
  }
}

export function* watchFetchCompanies() {
  yield takeLatest(FETCH_REQUEST, fetchCompanies);
}

export default [watchFetchCompanies];
