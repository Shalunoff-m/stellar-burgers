import {
  SHOW_MODAL_DETAIL,
  CLOSE_MODAL_DETAIL,
} from '../actions/ingredient-detail';

const initialState = {
  data: null,
};

export const ingredientDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_DETAIL:
      return { data: action.payload };

    case CLOSE_MODAL_DETAIL:
      return { data: null };
    default:
      return state;
  }
};
