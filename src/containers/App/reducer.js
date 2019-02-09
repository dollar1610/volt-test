import { fromJS } from 'immutable';

const initialState = fromJS({
  default: null,
})

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default AppReducer;
