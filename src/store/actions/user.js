import {
  forgotPasswordApi,
  getUserApi,
  logoutApi,
  refreshTokens,
  resetPasswordApi,
  updateAccessTokenApi,
  userLoginApi,
  userRegisterApi,
  userUpdateApi,
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
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_RELOGIN = 'USER_RELOGIN';
export const USER_UPDATE = 'USER_UPDATE';

// USER_REGISTER ///////////////////////////////////////

export const userRegister = (data, successCb, errorCb) => (dispatch) => {
  dispatch(userRegisterStart());
  userRegisterApi(data)
    .then((res) => {
      dispatch(userRegisterSuccess());
      successCb();
    })
    .catch((err) => {
      console.log(err);
      refreshTokens();
      dispatch(userRegisterFailed(err));
      errorCb();
    });
};

export const userRegisterStart = () => ({ type: USER_REGISTER });

export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});

export const userRegisterFailed = (data) => ({
  type: USER_REGISTER_ERROR,
  payload: data,
});

// USER LOGIN ////////////////////////////////////////

export const userLogin = (data, successCb, errorCb) => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
  });
  userLoginApi(data)
    .then((res) => {
      // console.log(res);
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 15,
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res,
      });
      successCb();
    })
    .catch((err) => {
      console.log(err);
      refreshTokens();
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: err,
      });
      errorCb();
    });
};

// USER_LOGOUT ///////////////////////////////
export const userLogout = () => (dispatch) => {
  logoutApi()
    .then((res) => {
      // console.log(res);
      deleteCookie('accesstoken');
      deleteLocalStorage('refreshtoken');
      dispatch({
        type: USER_LOGOUT,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// USER_RELOGIN ///////////////////////////////
export const tryRelogin = () => (dispatch) => {
  // Проверка токенов
  const getLocalToken = readFromLocalStorage('refreshtoken');
  const getAccessCookie = getCookies('accesstoken');

  // Если есть рефреш токен и нет токена доступа - обновляем токены
  if (getLocalToken && !getAccessCookie) {
    refreshTokens();

    // Запрашиваем пользователя с сервера
    getUserApi()
      .then((res) => {
        // Записываем пользователя в систему
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log('Не удалось получить пользователя', err);
      });
  }

  if (getLocalToken && getAccessCookie) {
    // Запрашиваем пользователя с сервера
    getUserApi()
      .then((res) => {
        // Записываем пользователя в систему
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log('Не удалось получить пользователя', err);
      });
  }
};

// USER_UPDATE //////////////////////////////////////////
export const userUpdate = (data, successCb, failedCb) => (dispatch) => {
  userUpdateApi(data)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: USER_UPDATE,
        payload: res,
      });
      successCb();
    })
    .catch((err) => {
      console.log(err);
      refreshTokens();
      failedCb();
    });
  // Данные формы отправляются на сервер
  // В случае успеха, происходит перезапись данных в store
  // В случае ошибки - ошибку выкидываем в консоль и на кнопке пишем - неудачу
};

// PASSWORD_FORGOT //////////////////////////////////////////
export const passwordForgot = (email, successCb, errorCb) => (dispatch) => {
  forgotPasswordApi()
    .then((res) => {
      // console.log(res);
      successCb();
    })
    .catch((err) => {
      console.log(err);
      errorCb();
    });
};

// PASSWORD_RESET //////////////////////////////////////////
export const passwordReset = (data, successCb, errorCb) => (dispatch) => {
  resetPasswordApi(data)
    .then((res) => {
      // console.log(res);
      successCb();
    })
    .catch((err) => {
      console.log(err);
      errorCb();
    });
};
