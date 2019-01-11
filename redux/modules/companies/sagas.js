import { takeLatest, put, call } from 'redux-saga/effects';
import CompanyApi from '../../../apis/company-api';
import { FETCH_REQUEST, fetchSuccess, fetchFailure } from './reducers';

const api = new CompanyApi();
export function* fetchCompanies(action) {
  try {
    const query = action.payload;
    const { data } = yield call(api.fetchCompanies, query);
    yield put(fetchSuccess(data.result));
  } catch (e) {
    yield put(fetchFailure());
  }
}

export function* watchFetchCompanies() {
  yield takeLatest(FETCH_REQUEST, fetchCompanies);
}

export default [watchFetchCompanies];
