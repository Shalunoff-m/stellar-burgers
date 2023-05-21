import { clearToken } from '../../utils/utils';
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  RESET_USER,
  GET_TOKENS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
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
        // userEmail: email,
        // userName: name,
        // password: action.password,
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

    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        loading: false,
        accessToken: clearToken(action.payload.accessToken),
        refreshToken: action.payload.refreshToken,
        userName: action.payload.user.name,
        userEmail: action.payload.user.email,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
