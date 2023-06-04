// Функция записи в Local Storage
export const saveToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// Функция чтения из Local Storage
export const readFromLocalStorage = (name) => {
  const myData = JSON.parse(localStorage.getItem(name));
  return myData;
};

// Запись в Cookies

/* Пример
setCookie('username', 'John Doe', { expires: 7 * 24 * 60 * 60 }); */
export const setCookies = (name, value, props) => {
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
};

// Функция чтения из Cookies
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

// Функция удаления из Cookies
export const deleteCookie = (name) => {
  setCookies(name, null, { expires: -1, path: '/' });
};

// Функция удаления из Local Storage
export const deleteLocalStorage = (name) => {
  localStorage.removeItem(name);
};
