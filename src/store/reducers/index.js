import { combineReducers } from 'redux';
import { ingredientDetailReducer } from './ingredient-detail';
import { ingredientReducer } from './ingredients';
import { constructorReducer } from './constructor';

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientDetail: ingredientDetailReducer,
  constructor: constructorReducer,
});
