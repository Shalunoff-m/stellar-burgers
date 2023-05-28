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
      return { data: null, loading: true, error: '' };
    case GET_DATA_SUCCESS:
      return { data: action.payload, loading: false, error: '' };
    case GET_DATA_FAILED:
      return { data: null, loading: false, error: action.payload };

    default:
      return state;
  }
};
