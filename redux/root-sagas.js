import { all, fork } from 'redux-saga/effects';
import companySagas from '~/redux/modules/company/sagas';

export default function*() {
  const combinedSagas = [...companySagas].map(saga => fork(saga));
  yield all(combinedSagas);
}
