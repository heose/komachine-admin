import { all } from 'redux-saga/effects';
import { watchFetchCompanies } from './modules/companies/saga';

export default function*() {
  yield all([watchFetchCompanies()]);
}
