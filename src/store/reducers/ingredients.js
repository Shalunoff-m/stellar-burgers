import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from '../actions/ingredients';

const initialState = {
  data: null,
  loading: false,
  error: '',
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return state;
    default:
      return state;
  }
};
