import { getCookies } from '../../utils/localSaver';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' =
  'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' =
  'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE_ALL: 'WS_GET_MESSAGE_ALL' = 'WS_GET_MESSAGE_ALL';
export const WS_GET_MESSAGE_USER: 'WS_GET_MESSAGE_USER' = 'WS_GET_MESSAGE_USER';
export const WS_CONNECTED_TYPE_ALL: 'WS_CONNECTED_TYPE_ALL' =
  'WS_CONNECTED_TYPE_ALL';
export const WS_CONNECTED_TYPE_USER: 'WS_CONNECTED_TYPE_USER' =
  'WS_CONNECTED_TYPE_USER';

export const allOrdersWebSocket = {
  destination: 'all',
  endpoint: 'wss://norma.nomoreparties.space/orders/all',
};

export const userOrdersWebSocket = {
  destination: 'user',
  endpoint: `wss://norma.nomoreparties.space/orders?token=${getCookies(
    'accesstoken'
  )}`,
};
