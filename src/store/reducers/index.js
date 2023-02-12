import { combineReducers } from 'redux';
import { ingredientDetailReducer } from './ingredient-detail';
import { ingredientReducer } from './ingredients';

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientDetail: ingredientDetailReducer,
});
