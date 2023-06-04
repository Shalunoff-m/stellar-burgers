import { Middleware, MiddlewareAPI } from 'redux';
import { getCookies } from '../../utils/localSaver';

// Константы endpoint соединений
export const allOrders = 'wss://norma.nomoreparties.space/orders/all';
export const userOrders = `wss://norma.nomoreparties.space/orders?token=${getCookies(
  'accesstoken'
)}`;

export const socketMiddleware = () => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === 'WS_CONNECTION_START') {
        let url = '';

        // Выставляем endpoint соединения в зависимости от payload
        switch (payload) {
          case 'allOrders':
            url = allOrders;
            break;
          case 'userOrders':
            url = userOrders;
            break;
        }
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: 'WS_GET_MESSAGE', payload: data });
        };
        socket.onclose = (event) => {
          dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
        };
      }

      next(action);
    };
  };
};
