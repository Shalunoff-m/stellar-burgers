import { v4 as uuidv4 } from 'uuid';
import { IConstructorIngredient } from '../types/constructor';

// Экшены для работы со списком
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const SET_BUN: 'SET_BUN' = 'SET_BUN';
export const SORT_INGREDIENT: 'SORT_INGREDIENT' = 'SORT_INGREDIENT';

// Экшены для отправки заказа и сохранения результата
export const SEND_ORDER: 'SEND_ORDER' = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR: 'SEND_ORDER_ERROR' = 'SEND_ORDER_ERROR';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
}
export interface IRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT;
}
export interface ISetBun {
  readonly type: typeof SET_BUN;
}
export interface ISortIngredient {
  readonly type: typeof SORT_INGREDIENT;
  readonly payload: {
    dragged: IConstructorIngredient;
    drop: IConstructorIngredient;
  };
}
export interface ISendOrder {
  readonly type: typeof SEND_ORDER;
}
export interface ISendOrderSuccess {
  readonly type: typeof SEND_ORDER_SUCCESS;
}
export interface ISendOrderError {
  readonly type: typeof SEND_ORDER_ERROR;
}
export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export const sortIngredient = ({
  dragged,
  drop,
}: {
  dragged: IConstructorIngredient;
  drop: IConstructorIngredient;
}): ISortIngredient => ({
  type: SORT_INGREDIENT,
  payload: { dragged, drop },
});

// TODO Доделать
export const addIngredient = (item: any) => (dispatch: any) => {
  const sendData = { _listId: uuidv4(), ...item };
  // console.log(sendData);
  dispatch({ type: ADD_INGREDIENT, payload: sendData });
};
