import { presetDefault } from '../../utils/preset';
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  SORT_INGREDIENT,
} from '../actions/constructor';

const inintialState = {
  bun: presetDefault,
  ingredients: [],
  loading: false,
  error: '',
  order: null,
};

export const constructorOrderReducer = (state = inintialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item._listId !== action.payload._listId
        ),
      };

    case SET_BUN:
      return {
        ...state,
        bun: action.payload,
      };

    case SORT_INGREDIENT:
      const { dragged, drop } = action.payload;
      let indexDrag = null;
      let indexDrop = null;
      state.ingredients.forEach((element, index) => {
        if (dragged._listId === element._listId) indexDrag = index;
        if (drop._listId === element._listId) indexDrop = index;
      });

      const clearIngredientList = state.ingredients;
      clearIngredientList.splice(indexDrag, 1);
      clearIngredientList.splice(indexDrop, 0, dragged);

      return {
        ...state,
        ingredients: clearIngredientList,
      };

    default:
      return state;
  }
};
