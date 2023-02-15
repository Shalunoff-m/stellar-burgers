import {
  SHOW_MODAL_DETAIL,
  CLOSE_MODAL_DETAIL,
} from '../actions/ingredient-detail';

const initialState = {
  data: null,
  visible: false,
};

export const ingredientDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_DETAIL:
      return { data: action.payload, visible: true };

    case CLOSE_MODAL_DETAIL:
      return { ...initialState };
    default:
      return state;
  }
};
