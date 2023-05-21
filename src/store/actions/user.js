import { userRegisterApi } from '../../utils/api';
import { setCookies } from '../../utils/localSaver';
import { saveToLocalStorage } from '../../utils/localSaver';
import { clearToken } from '../../utils/utils';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

export const userRegister = (data) => (dispatch) => {
  dispatch(userRegisterStart());
  userRegisterApi(data)
    .then((res) => {
      dispatch(userRegisterSuccess(res, data));
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 20,
      });
      saveToLocalStorage('reftoken', res.refreshToken);
      //   saveToLocalStorage(res.refreshToken);
    })
    .catch((err) => {
      console.log(err);
      dispatch(userRegisterFailed(err));
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
