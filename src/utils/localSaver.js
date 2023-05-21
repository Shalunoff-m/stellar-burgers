// Функция записи в Local Storage
export const saveToLocalStorage = (data) => {
  //   console.log('Переданные данные: ', data);
  localStorage.setItem('refToken', JSON.stringify(data));
};

// Функци чтения из Local Storage
export const readFromLocalStorage = () => {
  //   console.log(data);
  const myData = JSON.parse(localStorage.getItem('refToken'));
  //   console.log('Прочитанные данные', myData);
};

export const saveToCookies = (data) => {
  console.log('Переданные данные: ', data);
  const encodedValue = encodeURIComponent(JSON.stringify(data));
  document.cookie = `accToken=${encodedValue}`;
};

export const readFromCookies = () => {
  //   console.log(data);
  const cookies = document.cookie;
  const cookieObj = cookies
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith('accToken='));

  if (cookieObj) {
    const decodedValue = decodeURIComponent(cookieObj.split('=')[1]);
    const parsedObj = JSON.parse(decodedValue);

    console.log('Прочитанные данные', parsedObj);
  }
};
