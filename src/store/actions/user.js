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
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

// USER_REGISTER ///////////////////////////////////////

export const userRegister = (data, successCb, errorCb) => (dispatch) => {
  dispatch(userRegisterStart());
  userRegisterApi(data)
    .then((res) => {
      console.log('Ваши рестрационные данные:', res);
      // setCookies('accesstoken', clearToken(res.accessToken), {
      //   expires: 60 * 20,
      // });
      // saveToLocalStorage('refreshtoken', res.refreshToken);
      dispatch(userRegisterSuccess());
      successCb();
    })
    .catch((err) => {
      console.log(err);
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
      console.log(res);
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 20,
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
