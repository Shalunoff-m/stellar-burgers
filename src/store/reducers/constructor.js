import {
  SET_DATA,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  REMOVE_BUN,
} from '../actions/constructor';
import { v4 as uuidv4 } from 'uuid';

const inintialState = {
  bun: null,
  ingridients: null,
};

export const constructorReducer = (state = inintialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const allIngredients = state.ingredients ? state.ingredients : [];
      allIngredients.push({ _lisdId: uuidv4(), ...action.payload });
      // return state;
      return {
        ...state,
        ingredients: allIngredients,
      };
    // TODO Остановился здесь
    // case 'REMOVE_INGREDIENT':
    //   const removeElement
    default:
      return state;
  }
};
