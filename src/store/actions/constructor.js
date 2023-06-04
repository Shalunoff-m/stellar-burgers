import { v4 as uuidv4 } from 'uuid';

// Экшены для работы со списком
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_BUN = 'SET_BUN';
export const SORT_INGREDIENT = 'SORT_INGREDIENT';

// Экшены для отправки заказа и сохранения результата
export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR = 'SEND_ORDER_ERROR';
export const RESET_ORDER = 'RESET_ORDER';

export const sortIngredient = ({ dragged, drop }) => ({
  type: SORT_INGREDIENT,
  payload: { dragged, drop },
});

export const addIngredient = (item) => (dispatch) => {
  const sendData = { _listId: uuidv4(), ...item };
  // console.log(sendData);
  dispatch({ type: ADD_INGREDIENT, payload: sendData });
};
