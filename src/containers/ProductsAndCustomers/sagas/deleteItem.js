import { select, call } from 'redux-saga/effects';
import urlEncode from '../../../utils/urlEncode';
import loadData from './loadData';

function* addItem() {
  try {
    let data = yield select((state) => state.get('productsAndCustomersReducer').get('deleteItem'));
    let location = yield select((state) => state.get('productsAndCustomersReducer').get('currentLocation'));
    if (!data) return;
    console.log(data);
    yield fetch(`/api${location}/${data}`, {
      method: 'delete',
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    yield call(loadData);
  }
  catch(e) {
    console.error(e);
  }
}

export default addItem;
