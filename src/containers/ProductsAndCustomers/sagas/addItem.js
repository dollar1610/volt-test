import { select, call } from 'redux-saga/effects';
import urlEncode from '../../../utils/urlEncode';
import loadData from './loadData';

function* addItem() {
  try {
    let data = yield select((state) => state.get('productsAndCustomersReducer').get('addItem'));
    let location = yield select((state) => state.get('productsAndCustomersReducer').get('currentLocation'));
    if (!data) return;
    console.log(location);
    yield fetch(`/api${location}`, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: urlEncode(data),
    })
    yield call(loadData);
  }
  catch(e) {
    console.error(e);
  }
}

export default addItem;
