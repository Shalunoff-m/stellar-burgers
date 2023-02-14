import { apiSendOrder } from '../../utils/api';

// Экшены для работы со списком
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_BUN = 'SET_BUN';

// Экшены для отправки заказа и сохранения результата
export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR = 'SEND_ORDER_ERROR';
export const SET_ORDER_DATA = 'SET_ORDER_DATA';
export const RESET_ORDER = 'RESET_ORDER';

// усилитель для отправки данных на сервер
export const sendDataApi = (data) => (dispatch, getState) => {
  dispatch(sendOrder);
  apiSendOrder(data)
    .then((res) => {
      dispatch(sendOrderSuccess(res.data));
    })
    .catch((err) => {
      dispatch(sendOrderError(err));
    });

  //   const store = getState();
};

// функции-конструкторы для работы с АПИ
export const sendOrder = () => ({ type: SEND_ORDER });
export const sendOrderSuccess = (data) => ({
  type: SEND_ORDER_SUCCESS,
  payload: data,
});
export const sendOrderError = (err) => ({
  type: SEND_ORDER_ERROR,
  payload: err,
});
