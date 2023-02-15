import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
  SET_ORDER_DATA,
  RESET_ORDER,
} from '../actions/constructor';
import { v4 as uuidv4 } from 'uuid';

const inintialState = {
  bun: null,
  ingredients: null,
  loading: false,
  error: '',
  order: null,
};

export const constructorReducer = (state = inintialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const allIngredients = state.ingredients ? state.ingredients : [];

      allIngredients.push({
        _lisdId: uuidv4(),
        ...action.payload,
      });
      // return state;
      return {
        ...state,
        ingredients: allIngredients,
      };
    // TODO Остановился здесь
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item._lisdId !== action.payload._lisdId
        ),
      };

    case SET_BUN:
      return {
        ...state,
        bun: action.payload,
      };

    case SEND_ORDER:
      return {
        ...state,
        loading: true,
        error: '',
        order: null,
      };

    case SEND_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        order: action.payload,
      };

    case SEND_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        order: null,
      };

    case RESET_ORDER:
      return {
        ...state,
        loading: false,
        error: '',
        order: null,
      };

    default:
      return state;
  }
};
