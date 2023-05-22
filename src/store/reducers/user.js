import { clearToken } from '../../utils/utils';
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} from '../actions/user';

const inintialState = {
  isAuthentificated: false,
  loading: false,
  error: false,
  userName: null,
  userEmail: null,
};

export const userReducer = (state = inintialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, loading: true };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case USER_REGISTER_ERROR:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };

    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthentificated: true,
        loading: false,
        userName: action.payload.user.name,
        userEmail: action.payload.user.email,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return inintialState;

    default:
      return state;
  }
};
