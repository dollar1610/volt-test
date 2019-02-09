import { put, select } from 'redux-saga/effects';
import { changeData } from '../action';

function* loadData() {
  try {
    const location = yield select((state) => state.get('productsAndCustomersReducer').get('currentLocation'));
    if (!location) return null;
    let data = yield fetch(`api${location}`)
      .then(response => response.json())
    console.log(data);  
    yield put(changeData(data));
  }

  catch(e) {
    console.error(e);
  }
}

export default loadData;
