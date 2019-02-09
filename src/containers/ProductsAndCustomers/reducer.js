import { fromJS } from 'immutable';

import {
  CHANGE_DATA,
  GET_CURRENT_LOCATION,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from './constants';

const initialState = fromJS({
  data: {},
  currentLocation: '',
  deleteItem: null,
  editItem: null,
  addItem: null,
});

function productsAndCustomersReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_DATA:
      return state.set('data', action.payload);
    case GET_CURRENT_LOCATION:
      return state.set('currentLocation', action.payload);
    case ADD_ITEM:
      return state.set('addItem', action.payload);
    case EDIT_ITEM:
      return state.set('editItem', action.payload);
    case DELETE_ITEM:
      return state.set('deleteItem', action.payload);
    default:
      return state;
  }
}

export default productsAndCustomersReducer;
