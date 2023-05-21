import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
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
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    case USER_REGISTER_ERROR:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
