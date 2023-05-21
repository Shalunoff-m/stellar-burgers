// import { func } from 'prop-types';

import { readFromLocalStorage } from './localSaver';

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

export async function forgotPassword(email) {
  const res = await fetch(API_ENDPOINT + 'password-reset', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: { email: email },
  });
}

async function checkResult(res) {
  return res.ok
    ? await res.json()
    : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
}
