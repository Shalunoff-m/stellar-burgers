import {
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
  RESET_ORDER,
  CLOSE_ORDER_MODAL,
} from '../actions/order-detail';

const inintialState = {
  loading: false,
  error: '',
  order: null,
  visible: false,
};

export const orderReducer = (state = inintialState, action) => {
  switch (action.type) {
    case SEND_ORDER:
      return {
        ...state,
        loading: true,
        error: '',
        order: null,
      };

    case SEND_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        order: action.payload,
        visible: true,
      };

    case SEND_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        order: null,
      };

    case RESET_ORDER:
      return {
        ...state,
        loading: false,
        error: '',
        order: null,
        visible: false,
      };

    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        loading: false,
        error: '',
        order: null,
        visible: false,
      };

    default:
      return state;
  }
};
