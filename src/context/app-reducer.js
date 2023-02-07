import { useReducer } from 'react';

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'showIngredient':
      return console.log('Показать ингредиент');
    case 'calculateTotal':
      return console.log('Подсчет итоговой стоимости');
    case 'addIngredient':
      return console.log('Добавление ингредиента');
    case 'deleteIngredient':
      return console.log('Удаление ингредиента');
    case 'setTotalCoast':
      return console.log('Установить итоговую стоимость');
    default:
      return console.log('Стандартное действие');
  }
};

export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'setDetails':
      return console.log('Установить детали модалки');
    default:
      return console.log('Стандартное действие');
  }
};
