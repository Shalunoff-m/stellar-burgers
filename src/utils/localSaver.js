// Функция записи в Local Storage
export const saveToLocalStorage = (name, data) => {
  //   console.log('Переданные данные: ', data);
  localStorage.setItem(name, JSON.stringify(data));
};

// Функци чтения из Local Storage
export const readFromLocalStorage = (name) => {
  //   console.log(data);
  const myData = JSON.parse(localStorage.getItem(name));
  //   console.log('Прочитанные данные', myData);
  return myData;
};

// Запись в Cookies--------------------------------------

export const setCookies = (name, value, props) => {
  //   console.log('Данные для записи', name, value, props);

  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;

  // Пример
  // setCookie('username', 'John Doe', { expires: 7 * 24 * 60 * 60 });
};

export const getCookies = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name) => {
  setCookies(name, null, { expires: -1 });
};
