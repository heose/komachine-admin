import { takeLatest, put, call } from 'redux-saga/effects';
import CompanyApi from '../../../apis/company-api';
import { actions, consts } from './reducers';

const api = new CompanyApi();
export function* fetchCompanies(action) {
  try {
    const { data } = yield call(api.fetchCompanies, action.payload);
    console.log(data);
    yield put(actions.company.fetchSuccess(data.result));
  } catch (e) {
    yield put(actions.company.fetchFailure(e));
    // yield put(progressStateActions.setState(403));
    // yield put(setErrStatus(e.status));
  }
}

export function* watchFetchCompanies() {
  yield takeLatest(consts.company.fetchRequest, fetchCompanies);
}

export default [watchFetchCompanies];
