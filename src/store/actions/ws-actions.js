import { getCookies } from '../../utils/localSaver';

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';

export const allOrdersWebSocket = {
  to: 'all',
  endpoint: 'wss://norma.nomoreparties.space/orders/all',
};

export const userOrdersWebSocket = {
  to: 'all',
  endpoint: `wss://norma.nomoreparties.space/orders?token=${getCookies(
    'accesstoken'
  )}`,
};
