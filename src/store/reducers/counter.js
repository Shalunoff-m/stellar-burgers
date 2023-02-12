// import
import { v4 as uuidv4 } from 'uuid';
import { INCREMENT, DECREMENT, RESET } from '../actions/counter';
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
