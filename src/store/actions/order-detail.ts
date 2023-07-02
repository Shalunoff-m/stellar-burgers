// Экшены для отправки заказа и сохранения результата
import { apiSendOrder } from '../../utils/api';

export const SEND_ORDER: 'SEND_ORDER' = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_ERROR: 'SEND_ORDER_ERROR' = 'SEND_ORDER_ERROR';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';
export const CLOSE_ORDER_MODAL: 'CLOSE_ORDER_MODAL' = 'CLOSE_ORDER_MODAL';

export interface ISendOrder {
  readonly type: typeof SEND_ORDER;
}
export interface ISendOrderSuccess {
  readonly type: typeof SEND_ORDER_SUCCESS;
  readonly payload: any;
}
export interface ISendOrderError {
  readonly type: typeof SEND_ORDER_ERROR;
  readonly payload: any;
}
export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}
export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

// усилитель для отправки данных на сервер
// TODO Доделать
export const sendDataApi = (data: any, successCb: any) => (dispatch: any) => {
  dispatch(sendOrder());
  apiSendOrder(data)
    .then((res) => {
      console.log(res);
      dispatch(sendOrderSuccess(res));
      successCb();
    })
    .catch((err) => {
      console.log(err);
      dispatch(sendOrderError(err));
    });
};

// TODO Доделать
// функции-конструкторы для работы с АПИ
export const sendOrder = (): ISendOrder => ({ type: SEND_ORDER });
export const sendOrderSuccess = (data: any): ISendOrderSuccess => ({
  type: SEND_ORDER_SUCCESS,
  payload: data,
});
export const sendOrderError = (err: any): ISendOrderError => ({
  type: SEND_ORDER_ERROR,
  payload: err,
});

export const closeOrderModal = (): ICloseOrderModal => ({
  type: CLOSE_ORDER_MODAL,
});
export const resetOrder = (): IResetOrder => ({ type: RESET_ORDER });
