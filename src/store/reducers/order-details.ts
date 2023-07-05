import {
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_ERROR,
  RESET_ORDER,
  CLOSE_ORDER_MODAL,
  TOrderDetailActions,
} from '../actions/order-detail';

type TOrderDetailState = {
  loading: boolean;
  error: string;
  order: Array<string> | null;
  visible: boolean;
};

const inintialState: TOrderDetailState = {
  loading: false,
  error: '',
  order: null,
  visible: false,
};

export const orderReducer = (
  state = inintialState,
  action: TOrderDetailActions
) => {
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
        // visible: true,
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
