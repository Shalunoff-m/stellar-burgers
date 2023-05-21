import { clearToken } from '../../utils/utils';
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  RESET_USER,
  GET_TOKENS,
} from '../actions/user';

const inintialState = {
  login: false,
  loading: false,
  error: false,
  userName: null,
  userEmail: null,
  password: null,
  accessToken: '',
  refreshToken: '',
};

export const userReducer = (state = inintialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      // console.log(action.payload);
      const {
        user: { email, name },
        accessToken,
        refreshToken,
      } = action.payload;
      return {
        ...state,
        loading: false,
        userEmail: email,
        userName: name,
        password: action.password,
        accessToken: clearToken(accessToken),
        refreshToken: refreshToken,
      };
    case USER_REGISTER_ERROR:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };
    case RESET_USER:
      return inintialState;
    case GET_TOKENS:
      return {
        ...state,
        accessToken: action.payload.acc,
        refreshToken: action.payload.refr,
      };

    default:
      return state;
  }
};
