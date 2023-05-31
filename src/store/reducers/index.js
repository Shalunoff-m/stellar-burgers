import { combineReducers } from 'redux';
import { ingredientDetailReducer } from './ingredient-detail';
import { ingredientReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order-details';
import { userReducer } from './user';
import { wsReducer } from './ws-reducer';

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientDetail: ingredientDetailReducer,
  constructor: constructorReducer,
  order: orderReducer,
  user: userReducer,
  webSocket: wsReducer,
});
