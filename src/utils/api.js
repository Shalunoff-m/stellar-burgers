// import { func } from 'prop-types';
import { getCookies, saveToLocalStorage, setCookies } from './localSaver';

import { readFromLocalStorage } from './localSaver';
import { clearToken } from './utils';

const API_ENDPOINT = 'https://norma.nomoreparties.space/api/';

export async function apiGetData() {
  const res = await fetch(API_ENDPOINT + 'ingredients');
  return checkResult(res);
}

export async function apiSendOrder(data) {
  const res = await fetch(API_ENDPOINT + 'orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: data }),
  });

  return checkResult(res);
}

export async function userRegisterApi(data) {
  // console.log(data);
  const res = await fetch(API_ENDPOINT + 'auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.userEmail,
      password: data.password,
      name: data.userName,
    }),
  });

  return checkResult(res);
}

export async function updateAccessTokenApi() {
  const refToken = readFromLocalStorage('refreshtoken');
  // console.log(refToken);
  const res = await fetch(API_ENDPOINT + 'auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refToken,
    }),
  });

  return checkResult(res);
}

export async function userLoginApi(data) {
  // console.log('Данные попавшие в запрос', data);
  const res = await fetch(API_ENDPOINT + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookies('accesstoken'),
    },
    body: JSON.stringify({
      email: data.userEmail,
      password: data.password,
    }),
  });

  return checkResult(res);
}

/* export async function forgotPassword(email) {
  const res = await fetch(API_ENDPOINT + 'password-reset', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: { email: email },
  });
} */

async function checkResult(res) {
  return res.ok
    ? await res.json()
    : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
}

export const checkTokens = () => {
  if (!getCookies('accesstoken')) {
    // console.log('Нет токена доступа');
    refreshTokens();
  } else {
    // console.log('Токены в порядке');
  }
};

export const refreshTokens = () => {
  updateAccessTokenApi()
    .then((res) => {
      // console.log(res);
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 15,
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      // console.log('Оба токена были обновлены');
      checkTokens();
    })
    .catch((err) => {
      console.log(err);
    });
};

export async function logoutApi() {
  const res = await fetch(API_ENDPOINT + 'auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookies('accesstoken'),
    },
    body: JSON.stringify({
      token: readFromLocalStorage('refreshtoken'),
    }),
  });

  return checkResult(res);
}

export async function getUserApi() {
  const res = await fetch(API_ENDPOINT + 'auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookies('accesstoken'),
    },
  });

  return checkResult(res);
}

export async function userUpdateApi(data) {
  // console.log('Данные попавшие в запрос', data);
  const res = await fetch(API_ENDPOINT + 'auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookies('accesstoken'),
    },
    body: JSON.stringify({
      email: data.userEmail,
      password: data.password,
      name: data.userName,
    }),
  });

  return checkResult(res);
}
