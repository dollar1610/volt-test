import { all } from 'redux-saga/effects';
import productsAndCustomersSagas from './containers/ProductsAndCustomers/sagas';

export default function* rootSaga() {
  yield all([
    ...productsAndCustomersSagas,
  ])
}
