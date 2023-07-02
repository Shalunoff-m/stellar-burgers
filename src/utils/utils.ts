import {
  ICalcIngredients,
  IIngredient,
  IProductTypes,
  TSortedData,
} from '../store/types';
import { IOrder, TOrderStatus } from '../store/types/orders';

export function sortData(
  data: Array<IIngredient>,
  dataTypes: IProductTypes
): TSortedData {
  const sortedBuffer: TSortedData = {};
  for (let product in dataTypes) {
    const filterList = data.filter((element) => {
      return element.type === product;
    });
    sortedBuffer[product] = filterList;
  }
  return sortedBuffer;
}

export const clearToken = (accToken: string) => {
  let authToken = accToken.split('Bearer ')[1];
  return authToken;
};

// export const updatedOrders = (newOrders, initOrders) => {
//   // let updatedData = [];

//   // Проверка на наличие входящих данных
//   if (newOrders !== undefined || newOrders.length !== 0) {
//     // Проверяем существует ли вообще массив заказов у пользователя
//     if (initOrders === undefined || initOrders.length === 0) {
//       // Если нет, возвращаем весь новый массив
//       return newOrders;
//       // Иначе, возвращаем то, что уже успело сохраниться в стейт
//     } else {
//       return newOrders;
//     }
//   }
// };

export const getElement = ({
  data,
  id,
}: {
  data: Array<IIngredient>;
  id: string;
}) => {
  // console.log(id);

  const [finden] = data.filter((element) => {
    return element._id === id;
  });
  // console.log(finden.image);
  return finden;
};

export const timeEncode = (time: string) => {
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

export const calculateTotalCoast = (
  data: Array<IIngredient>,
  ingredients: Array<string>
) => {
  let returnTotal: number = 0;
  if (data && ingredients) {
    returnTotal = ingredients.reduce((acc: number, id: string) => {
      const element = getElement({ data: data, id: id });
      // console.log(element);
      return acc + element.price;
    }, 0);
  }

  return returnTotal;
};

export const calculateIngredients = (
  objectOfIngredients: Array<IIngredient>
) => {
  // Блок подсчитывает кол-во одинаковых элементов и записывает значение в count
  let newArray: Array<IIngredient> = objectOfIngredients.map(
    (ingredient: IIngredient) => {
      let refreshElement: ICalcIngredients = { ...ingredient };
      let count = 0;

      objectOfIngredients.forEach((checkElement: IIngredient) => {
        if (ingredient._id === checkElement._id) {
          count++;
        }
      });

      refreshElement = { ...refreshElement, count: count };
      return refreshElement;
    }
  );

  // Блок находит только уникальные индексы заказа
  const clearSetArray = new Set();
  newArray.forEach((item: ICalcIngredients) => {
    clearSetArray.add(item._id);
  });

  // Блок оставляет только массив уникальных объектов
  let clearArrayofData: Array<ICalcIngredients> = [];
  for (let id of clearSetArray) {
    const findenElement = newArray.find(
      (element: ICalcIngredients) => element._id === id
    );
    findenElement && clearArrayofData.push(findenElement);
  }

  // Возвращаем значение
  return clearArrayofData;
};

export const onlyDone = (orders: Array<IOrder>) => {
  let searchedOrders: Array<IOrder> = [];
  if (orders && orders.length !== 0) {
    searchedOrders = orders.filter((order: IOrder) => order.status === 'done');
    // console.log(searchedOrders);
  }
  return searchedOrders;
};

export const onlyUndone = (orders: Array<IOrder>) => {
  let searchedOrders: Array<IOrder> = [];
  if (orders && orders.length !== 0) {
    searchedOrders = orders.filter((order: IOrder) => order.status !== 'done');
    // console.log(searchedOrders);
  }
  return searchedOrders;
};

export const convertStatus = (statusName: TOrderStatus) => {
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
