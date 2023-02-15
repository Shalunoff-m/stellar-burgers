import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  SORT_INGREDIENT,
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
        _listId: uuidv4(),
        ...action.payload,
      });
      // return state;
      return {
        ...state,
        ingredients: allIngredients,
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
