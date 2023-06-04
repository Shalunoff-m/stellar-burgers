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

export const calculateTotalCoast = (data, ingredients) => {
  // const element = getElement({ data: data, id: ingredients[0] });
  // console.log(element);
  let returnTotal = ingredients.reduce((acc, id) => {
    const element = getElement({ data: data, id: id });
    // console.log(element);
    return acc + element.price;
  }, 0);

  return returnTotal;
};

export const calculateIngredients = (objectOfIngredients) => {
  // Блок подсчитывает кол-во одинаковых элементов и записывает значение в count
  let newArray = objectOfIngredients.map((ingredient) => {
    let refreshElement = { ...ingredient };
    let count = 0;

    objectOfIngredients.forEach((checkElement) => {
      if (ingredient._id === checkElement._id) {
        count++;
      }
    });

    refreshElement = { ...refreshElement, count: count };
    return refreshElement;
  });

  // Блок находид только уникальные индексы заказа
  const clearSetArray = new Set();
  newArray.forEach((item) => {
    clearSetArray.add(item._id);
  });

  // Блок оставляет только массив уникальных объектов
  let clearArrayofData = [];
  for (let id of clearSetArray) {
    const findenElement = newArray.find((element) => element._id === id);
    clearArrayofData.push(findenElement);
  }

  // Возвращаем значение
  return clearArrayofData;
};

export const onlyDone = (orders) => {
  let searchedOrders = null;
  if (orders !== null && orders.length !== 0) {
    searchedOrders = orders.filter((order) => order.status === 'done');
    // console.log(searchedOrders);
  }
  return searchedOrders;
};

export const onlyUndone = (orders) => {
  let searchedOrders = null;
  if (orders !== null && orders.length !== 0) {
    searchedOrders = orders.filter((order) => order.status !== 'done');
    // console.log(searchedOrders);
  }
  return searchedOrders;
};

export const convertStatus = (statusName) => {
  switch (statusName) {
    case 'created':
      return 'Создан';
    case 'pending':
      return 'Готовится';
    case 'done':
      return 'Готов';
    default:
      return statusName;
  }
};
