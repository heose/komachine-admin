import { takeLatest, put, call } from 'redux-saga/effects';
import CompanyApi from '~/apis/company-api';
import { actions, consts } from '~/redux/modules/company/reducers';
import { normalizeCompanies } from '~/redux/normalizers';
import { calcPagination } from '~/redux/utils';

const api = new CompanyApi();
export function* fetchCompanies(action) {
  try {
    const { data } = yield call(api.fetchCompanies, action.payload);
    yield put(actions.company.fetchSuccess({ ...normalizeCompanies(data), pagination: calcPagination(data) }));
  } catch (e) {
    console.error(e);
    yield put(actions.company.fetchFailure(e));
  }
}

export function* watchFetchCompanies() {
  yield takeLatest(consts.company.fetchRequest, fetchCompanies);
}

export default [watchFetchCompanies];
