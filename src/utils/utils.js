import { useSelector } from 'react-redux';

export function sortData(data, dataTypes) {
  const sortedBuffer = {};
  for (let product in dataTypes) {
    const filterList = data.filter((element) => {
      return element.type === product;
    });
    sortedBuffer[product] = filterList;
  }
  return sortedBuffer;
}

export const clearToken = (accToken) => {
  let authToken = accToken.split('Bearer ')[1];
  return authToken;
};

export const updatedOrders = (newOrders, initOrders) => {
  // let updatedData = [];

  // Проверка на наличие входящих данных
  if (newOrders !== undefined || newOrders.length !== 0) {
    // Проверяем существует ли вообще массив заказов у пользователя
    if (initOrders === undefined || initOrders.length === 0) {
      // Если нет, возвращаем весь новый массив
      return newOrders;
      // Иначе, возвращаем то, что уже успело сохраниться в стейт
    } else {
      // console.log('Старые заказы есть, но есть и новые данные');
      // Сначала ищем все новые заказы и добавляем их
      // updatedData = newOrders.reduce((acc, newOrder) => {
      // console.log(newOrder);
      // Проверка на существование заказа в нашей базе заказов

      // initOrders.forEach((oldOrder) => {
      //   if (oldOrder._id !== newOrder._id)

      // });
      // if (
      //   !initOrders.some((oldOrder) => {
      //     return oldOrder._id === newOrder._id;
      //   })
      // )

      // acc.push(newOrder);
      // acc.push(newOrder);
      // return acc;
      // }, []);

      // console.log(updatedData.length === 0 ? 'Новых заказов нет' : updatedData);
      return newOrders;
    }
  }
};

export const getElement = ({ data, id }) => {
  // console.log(id);

  const [finden] = data.filter((element) => {
    return element._id === id;
  });
  // console.log(finden.image);
  return finden;
};

export const timeEncode = (time) => {
  // Основная возвращаемая строка
  let returnString = '';

  // Основные переменные
  let dayValue = '';
  let timeValue = '';
  let utcDay = '';

  // Блок определения сегодня или вчера
  const date = new Date(); //Сегодняшняя дата
  const today = new Date(Date.parse(time)); //полученные значения
  const yesterday = new Date(); //вчерашняя дата
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === today.toDateString()) {
    dayValue = 'сегодня';
  } else if (date.toDateString() === yesterday.toDateString()) {
    dayValue = 'вчера';
  }

  // Блок определения часов:минут
  timeValue = today.getHours() + ':' + today.getMinutes();

  // Блок определения сдвига часового пояса
  const offsetMinutes = today.getTimezoneOffset();
  const offsetHours = Math.abs(offsetMinutes) / 60;
  const offsetSign = offsetMinutes < 0 ? '+' : '-';
  utcDay = `i-GMT${offsetSign}${offsetHours}`;

  // Итоговая возвращаемая строка
  returnString = `${dayValue}, ${timeValue} ${utcDay} `;

  return returnString;
};
