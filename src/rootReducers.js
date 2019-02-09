import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux'
import appReducer from './containers/App/reducer';
import productsReducer from './containers/Products/reducer';
import productsAndCustomersReducer from './containers/ProductsAndCustomers/reducer';
import customersReducer from './containers/Customers/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  appReducer,
  productsReducer,
  productsAndCustomersReducer,
  customersReducer,
});

export default rootReducer;
