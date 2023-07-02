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

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any;
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsGetMessageAll {
  readonly type: typeof WS_GET_MESSAGE_ALL;
  readonly payload: any;
}
export interface IWsGetMessageUser {
  readonly type: typeof WS_GET_MESSAGE_USER;
  readonly payload: any;
}
export interface IWsConnectedTypeAll {
  readonly type: typeof WS_CONNECTED_TYPE_ALL;
}
export interface IWsConnectedTypeUser {
  readonly type: typeof WS_CONNECTED_TYPE_USER;
}

export type TWsActions =
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessageAll
  | IWsGetMessageUser
  | IWsConnectedTypeAll
  | IWsConnectedTypeUser;

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
