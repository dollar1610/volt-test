import {
  LOAD_DATA,
  GET_CURRENT_LOCATION,
  CHANGE_DATA,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from './constants';

export function getCurrentLocation(payload) {
  return {
    type: GET_CURRENT_LOCATION,
    payload,
  }
}

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function changeData(payload) {
  return {
    type: CHANGE_DATA,
    payload,
  };
}

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function deleteItem(payload) {
  return {
    type: DELETE_ITEM,
    payload,
  };
}

export function editItem(payload) {
  return {
    type: EDIT_ITEM,
    payload,
  };
}