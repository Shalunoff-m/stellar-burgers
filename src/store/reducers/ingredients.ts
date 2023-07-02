import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  TIngredientsActions,
} from '../actions/ingredients';

import { IIngredient } from '../types/ingredients';

type TIngredientsState = {
  data: Array<IIngredient> | null;
  loading: boolean;
  error: string;
};

const initialState: TIngredientsState = {
  data: null,
  loading: false,
  error: '',
};

export const ingredientReducer = (
  state = initialState,
  action: TIngredientsActions
) => {
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
