import { Middleware, MiddlewareAPI } from 'redux';
import { getCookies } from '../../utils/localSaver';
import { refreshTokens } from '../../utils/api';
import {
  WS_CONNECTED_TYPE_ALL,
  WS_CONNECTED_TYPE_USER,
} from '../actions/ws-actions';

// Константы endpoint соединений
export const allOrders = 'wss://norma.nomoreparties.space/orders/all';
export const userOrders = `wss://norma.nomoreparties.space/orders?token=${getCookies(
  'accesstoken'
)}`;

export const socketMiddleware = () => {
  // BM Middleware WS
  return (store) => {
    let socket = null;
    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload: options } = action;

      if (type === 'WS_CONNECTION_START') {
        // const { webSocket } = getState();
        switch (options.destination) {
          case 'user':
            dispatch({ type: WS_CONNECTED_TYPE_USER });
            // console.log('user');
            break;

          case 'all':
            dispatch({ type: WS_CONNECTED_TYPE_ALL });
            // console.log('all');
            break;
        }

        socket = new WebSocket(options.endpoint);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };

        socket.onmessage = (event) => {
          const {
            webSocket: { type },
          } = getState();
          const { data } = event;
          const { message, ...saveData } = JSON.parse(data);
          // console.log(payload.destination);

          if (message === 'Invalid or missing token') {
            refreshTokens();
          } else {
            // console.log(type);
            switch (type) {
              case 'all':
                dispatch({ type: 'WS_GET_MESSAGE_ALL', payload: saveData });
                return;
              case 'user':
                dispatch({ type: 'WS_GET_MESSAGE_USER', payload: saveData });
            }
          }
        };

        socket.onclose = (event) => {
          dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
        };
      }

      next(action);
    };
  };
};
