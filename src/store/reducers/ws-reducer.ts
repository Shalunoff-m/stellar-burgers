// import { updatedOrders } from '../../utils/utils';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE_ALL,
  WS_GET_MESSAGE_USER,
  WS_CONNECTED_TYPE_ALL,
  WS_CONNECTED_TYPE_USER,
  TWsActions,
} from '../actions/ws-actions';
import { IOrder } from '../types';

type TWsReducerState = {
  type: string;
  wsConnected: boolean;
  userOrders: Array<IOrder> | null;
  allOrders: Array<IOrder> | null;
  total: string;
  totalToday: string;
  error: any;
};

const initialState: TWsReducerState = {
  type: '',
  wsConnected: false,
  userOrders: null,
  allOrders: null,
  total: '',
  totalToday: '',
  error: undefined,
};

export const wsReducer = (state = initialState, action: TWsActions) => {
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

    case WS_CONNECTED_TYPE_ALL:
      // let { orders, total, totalToday } = action.payload;
      return {
        ...state,
        type: 'all',
      };

    case WS_CONNECTED_TYPE_USER:
      // let { orders, total, totalToday } = action.payload;
      return {
        ...state,
        type: 'user',
      };

    case WS_GET_MESSAGE_ALL:
      // let { orders, total, totalToday } = action.payload;
      return {
        ...state,
        error: undefined,
        allOrders: [...action.payload.orders],
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    case WS_GET_MESSAGE_USER:
      return {
        ...state,
        error: undefined,
        userOrders: [...action.payload.orders],
        // total: action.payload.total,
        // totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
