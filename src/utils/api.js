const API_ENDPOINT = 'https://norma.nomoreparties.space/api/';

export async function apiGetData() {
  const res = await fetch(API_ENDPOINT + 'ingredients');
  return checkResult(res);
}

export async function apiSendOrder() {
  // console.log(data);
  const data = ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c9']; // console.log(data);
  const res = await fetch(API_ENDPOINT + 'orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: data }),
  });

  return checkResult(res);
}

async function checkResult(res) {
  return res.ok
    ? await res.json()
    : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
}
