import {
  SHOW_MODAL_DETAIL,
  CLOSE_MODAL_DETAIL,
  TIngredientDetailActions,
} from '../actions/ingredient-detail';
import { IIngredient } from '../types';

type TIngredientDetailState = {
  data: IIngredient | null;
  visible: boolean;
};

const initialState: TIngredientDetailState = {
  data: null,
  visible: false,
};

export const ingredientDetailReducer = (
  state = initialState,
  action: TIngredientDetailActions
) => {
  switch (action.type) {
    case SHOW_MODAL_DETAIL:
      return { data: action.payload, visible: true };

    case CLOSE_MODAL_DETAIL:
      return { ...initialState };
    default:
      return state;
  }
};
