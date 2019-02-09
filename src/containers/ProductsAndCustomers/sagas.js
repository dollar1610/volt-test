import { takeEvery } from 'redux-saga/effects';
import loadData from './sagas/loadData';
import addItem from './sagas/addItem';
import editItem from './sagas/editItem';
import deleteItem from './sagas/deleteItem';
import { 
  LOAD_DATA,
  EDIT_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
 } from './constants';

export default [
  takeEvery([LOAD_DATA], loadData),
  takeEvery([ADD_ITEM], addItem),
  takeEvery([EDIT_ITEM], editItem),
  takeEvery([DELETE_ITEM], deleteItem),
];
