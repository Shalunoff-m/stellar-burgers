import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from '../actions/ws-actions';

const initialState = {
  wsConnected: false,
  orders: {},
  total: '',
  totalToday: '',
  error: undefined,
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      const { orders, total, totalToday } = JSON.parse(action.payload);
      return {
        ...state,
        error: undefined,
        orders,
        total,
        totalToday,
      };
    default:
      return state;
  }
};
