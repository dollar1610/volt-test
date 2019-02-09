import { fromJS } from 'immutable';

const initialState = fromJS({});

function customersReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default customersReducer;
