import {
  updateAccessTokenApi,
  userLoginApi,
  userRegisterApi,
} from '../../utils/api';
import {
  setCookies,
  saveToLocalStorage,
  readFromLocalStorage,
  getCookies,
  deleteCookie,
  deleteLocalStorage,
} from '../../utils/localSaver';
import { clearToken } from '../../utils/utils';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const RESET_USER = 'RESET_USER';
export const GET_TOKENS = 'GET_TOKENS';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const getTokens = () => (dispatch) => {
  // console.log('Был клик');
  let localAccessToken = getCookies('accesstoken');
  let localRefreshToken = readFromLocalStorage('refreshtoken');

  if (!localAccessToken) {
    // console.log('Нет токена доступа');
    dispatch(refreshTokens());
  }

  dispatch({
    type: GET_TOKENS,
    payload: {
      acc: localAccessToken,
      refr: localRefreshToken,
    },
  });
};

const refreshTokens = () => (dispatch) => {
  updateAccessTokenApi()
    .then((res) => {
      console.log(res);
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 20,
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      dispatch(getTokens());
      console.log('Оба токена были обновлены');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegister = (data, success, error) => (dispatch) => {
  dispatch(userRegisterStart());
  userRegisterApi(data)
    .then((res) => {
      dispatch(userRegisterSuccess(res, data));
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 20,
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      //   saveToLocalStorage(res.refreshToken);
      success();
    })
    .catch((err) => {
      console.log(err);
      dispatch(userRegisterFailed(err));
      error();
    });

  //  Функция отправки данных на сервер
  //  Далее диспатч в случае успеха
  //  диспатч в случае ошибки
};

export const userRegisterStart = () => ({ type: USER_REGISTER });

export const userRegisterSuccess = (res, data) => ({
  type: USER_REGISTER_SUCCESS,
  payload: res,
  password: data.password,
});

export const userRegisterFailed = (data) => ({
  type: USER_REGISTER_ERROR,
  payload: data,
});

export const resetUser = () => (dispatch) => {
  deleteCookie('accesstoken');
  deleteLocalStorage('refreshtoken');
  dispatch({
    type: RESET_USER,
  });
};

export const userLogin = (data, cb) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
  });
  userLoginApi(data)
    .then((res) => {
      console.log(res);
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 20,
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res,
      });
      cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: err,
      });
    });
};
