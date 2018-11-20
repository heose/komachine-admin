import { all } from 'redux-saga/effects';
import { watchFetchingCompanies } from './modules/companies/saga';

export default function*() {
  yield all([watchFetchingCompanies()]);
}
