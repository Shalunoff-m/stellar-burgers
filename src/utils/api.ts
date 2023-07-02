// import { func } from 'prop-types';
import { getCookies, saveToLocalStorage, setCookies } from './localSaver';

import { readFromLocalStorage } from './localSaver';
import { clearToken } from './utils';

const API_ENDPOINT = 'https://norma.nomoreparties.space/api/';

export async function apiGetData() {
  const res = await fetch(API_ENDPOINT + 'ingredients');
  return checkResult(res);
}

export async function apiSendOrder(data: Array<string>) {
  const res = await fetch(API_ENDPOINT + `orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookies('accesstoken'),
    },
    body: JSON.stringify({ ingredients: data }),
  });

  return checkResult(res);
}

export async function userRegisterApi(data: {
  password: string;
  userEmail: string;
  userName: string;
}) {
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

export async function userLoginApi(data: any) {
  const res = await fetch(API_ENDPOINT + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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

async function checkResult(res: any) {
  return res.ok
    ? res.json()
    : res.json().then((err: any) => Promise.reject(err));
}

export const checkTokens = () => {
  if (!getCookies('accesstoken')) {
    refreshTokens();
  }
};

export const refreshTokens = () => {
  updateAccessTokenApi()
    .then((res) => {
      // console.log('обновление токенов');
      setCookies('accesstoken', clearToken(res.accessToken), {
        expires: 60 * 15,
        path: '/',
      });
      saveToLocalStorage('refreshtoken', res.refreshToken);
      // checkTokens();
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

export async function userUpdateApi(data: {
  password: string;
  userEmail: string;
  userName: string;
}) {
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

export async function forgotPasswordApi(email: string) {
  const res = await fetch(API_ENDPOINT + 'password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  });

  return checkResult(res);
}

export async function resetPasswordApi(data: {
  code: string;
  password: string;
}) {
  const res = await fetch(API_ENDPOINT + 'password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: data.password,
      token: data.code,
    }),
  });

  return checkResult(res);
}

export const fetchWithRefresh = async ({ responce, data }: any) => {
  try {
    const res = await responce(data ? data : null);
    return Promise.resolve(res);
  } catch (err: any) {
    if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
      await updateAccessTokenApi().then((res) => {
        setCookies('accesstoken', clearToken(res.accessToken), {
          expires: 60 * 15,
          path: '/',
        });
        saveToLocalStorage('refreshtoken', res.refreshToken);
      });

      const try2 = responce(data ? data : null);
      return try2;
    } else {
      return Promise.reject(err);
    }
  }
};