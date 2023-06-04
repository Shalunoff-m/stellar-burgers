import { combineReducers } from 'redux';
import { ingredientDetailReducer } from './ingredient-detail';
import { ingredientReducer } from './ingredients';
import { orderReducer } from './order-details';
import { userReducer } from './user';
import { wsReducer } from './ws-reducer';
import { constructorOrderReducer } from './constructor';

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientDetail: ingredientDetailReducer,
  constructorOrder: constructorOrderReducer,
  order: orderReducer,
  user: userReducer,
  webSocket: wsReducer,
});
