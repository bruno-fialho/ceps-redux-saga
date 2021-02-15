import { all } from 'redux-saga/effects';

import checkAddressFromApi from './address/sagas';

export default function* rootSaga() {
  return yield all([checkAddressFromApi]);
}
