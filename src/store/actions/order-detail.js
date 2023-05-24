// Экшены для отправки заказа и сохранения результата
import { apiSendOrder } from '../../utils/api';

export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR = 'SEND_ORDER_ERROR';
export const RESET_ORDER = 'RESET_ORDER';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

// усилитель для отправки данных на сервер
export const sendDataApi = (data, successCb) => (dispatch) => {
  dispatch(sendOrder());
  apiSendOrder(data)
    .then((res) => {
      dispatch(sendOrderSuccess(res));
      successCb();
    })
    .catch((err) => {
      console.log(err);
      dispatch(sendOrderError(err));
    });
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

export const closeOrderModal = () => ({ type: CLOSE_ORDER_MODAL });
export const resetOrder = () => ({ type: RESET_ORDER });
