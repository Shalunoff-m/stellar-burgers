import {
  fetchWithRefresh,
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

export const USER_REGISTER: 'USER_REGISTER' = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS' =
  'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR: 'USER_REGISTER_ERROR' = 'USER_REGISTER_ERROR';
export const USER_LOGIN: 'USER_LOGIN' = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS' = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR: 'USER_LOGIN_ERROR' = 'USER_LOGIN_ERROR';
export const USER_LOGOUT: 'USER_LOGOUT' = 'USER_LOGOUT';
export const USER_RELOGIN: 'USER_RELOGIN' = 'USER_RELOGIN';
export const USER_UPDATE: 'USER_UPDATE' = 'USER_UPDATE';
export const USER_GET: 'USER_GET' = 'USER_GET';

export interface IUserRegister {
  readonly type: typeof USER_REGISTER;
}
export interface IUserRegisterSuccess {
  readonly type: typeof USER_REGISTER_SUCCESS;
}
export interface IUserRegisterError {
  readonly type: typeof USER_REGISTER_ERROR;
  readonly payload: any;
}
export interface IUserLogin {
  readonly type: typeof USER_LOGIN;
}
export interface IUserLoginSuccess {
  readonly type: typeof USER_LOGIN_SUCCESS;
}
export interface IUserLoginError {
  readonly type: typeof USER_LOGIN_ERROR;
}
export interface IUserLogout {
  readonly type: typeof USER_LOGOUT;
}
export interface IUserRelogin {
  readonly type: typeof USER_RELOGIN;
}
export interface IUserUpdate {
  readonly type: typeof USER_UPDATE;
}
export interface IUserGet {
  readonly type: typeof USER_GET;
}

export type TUserActions =
  | IUserRegister
  | IUserRegisterSuccess
  | IUserRegisterError
  | IUserLogin
  | IUserLoginSuccess
  | IUserLoginError
  | IUserLogout
  | IUserRelogin
  | IUserUpdate
  | IUserGet;
// USER_REGISTER ///////////////////////////////////////

// TODO Доделать
export const userRegister =
  (data: any, successCb: any, errorCb: any) => (dispatch: any) => {
    dispatch(userRegisterStart());
    userRegisterApi(data)
      .then((res) => {
        console.log(res);
        dispatch(userRegisterSuccess());
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res,
        });
        successCb();
      })
      .catch((err) => {
        console.log(err);
        dispatch(userRegisterFailed(err));
        errorCb();
      });
  };

export const userRegisterStart = (): IUserRegister => ({ type: USER_REGISTER });

export const userRegisterSuccess = (): IUserRegisterSuccess => ({
  type: USER_REGISTER_SUCCESS,
});

export const userRegisterFailed = (data: any): IUserRegisterError => ({
  type: USER_REGISTER_ERROR,
  payload: data,
});

// USER LOGIN ////////////////////////////////////////

// TODO Доделать
export const userLogin =
  (data: any, successCb: any, errorCb: any) => (dispatch: any) => {
    dispatch({
      type: USER_LOGIN,
    });
    userLoginApi(data)
      .then((res) => {
        // console.log(res);
        setCookies('accesstoken', clearToken(res.accessToken), {
          expires: 60 * 15,
          path: '/',
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
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: err,
        });
        errorCb();
      });
  };

// USER_LOGOUT ///////////////////////////////
// TODO Доделать
export const userLogout = () => (dispatch: any) => {
  fetchWithRefresh({ responce: logoutApi, data: null })
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

// TODO Доделать
// USER_RELOGIN ///////////////////////////////
export const tryRelogin = () => (dispatch: any) => {
  // Проверка токенов
  const getLocalToken = readFromLocalStorage('refreshtoken');
  const getAccessCookie = getCookies('accesstoken');

  // Если есть рефреш токен и нет токена доступа - обновляем токены
  if (getLocalToken && !getAccessCookie) {
    refreshTokens();

    // Запрашиваем пользователя с сервера
    // getUserApi()

    fetchWithRefresh({ responce: getUserApi, data: null })
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
    // getUserApi()
    fetchWithRefresh({ responce: getUserApi, data: null })
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
// TODO Доделать
export const userUpdate =
  (data: any, successCb: any, failedCb: any) => (dispatch: any) => {
    // userUpdateApi(data)
    fetchWithRefresh({ responce: userUpdateApi, data: data })
      .then((res) => {
        dispatch({
          type: USER_UPDATE,
          payload: res,
        });
        successCb();
      })
      .catch((err) => {
        console.log(err);
        failedCb();
      });
    // Данные формы отправляются на сервер
    // В случае успеха, происходит перезапись данных в store
    // В случае ошибки - ошибку выкидываем в консоль и на кнопке пишем - неудачу
  };

// PASSWORD_FORGOT //////////////////////////////////////////
// TODO Доделать
export const passwordForgot =
  ({ email }: any, successCb: any, errorCb: any) =>
  (dispatch: any) => {
    forgotPasswordApi(email)
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
// TODO Доделать
export const passwordReset =
  (data: any, successCb: any, errorCb: any) => (dispatch: any) => {
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

// USER_GET //////////////////////////////////////////
// TODO Доделать
export const userGet = () => (dispatch: any) => {
  // getUserApi()
  fetchWithRefresh({ responce: getUserApi, data: null })
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
};
