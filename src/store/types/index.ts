import { ActionCreator, Action } from 'redux';
import { TConstructorActions } from '../actions/constructor';
import { TIngredientDetailActions } from '../actions/ingredient-detail';
import { TIngredientsActions } from '../actions/ingredients';
import { TOrderDetailActions } from '../actions/order-detail';
import { TUserActions } from '../actions/user';
import { TWsActions } from '../actions/ws-actions';
import { store } from '../index';
import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;
type TApplicationActions =
  | TConstructorActions
  | TIngredientDetailActions
  | TIngredientsActions
  | TOrderDetailActions
  | TUserActions
  | TWsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;

export * from './ingredients';
export * from './constructor';
export * from './user';
export * from './orders';
