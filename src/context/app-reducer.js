import { useReducer } from 'react';

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'setRemoteData':
      return { ...state, data: action.payload };
    case 'setConstructorData':
      return { ...state, constructor: action.payload };
    case 'showModalDetail':
      return {
        ...state,
        modalVisible: true,
        modalType: 'details',
        componentDetail: action.payload,
      };
    case 'closeModal':
      return {
        ...state,
        modalVisible: false,
        modalType: '',
      };
    case 'showOrderDetail':
      return {
        ...state,
        modalVisible: true,
        modalType: 'order',
      };
    case 'addComponent':
      if (action.payload.type === 'bun') {
        console.log('Это булка');
        return {
          ...state,
          ingredients: { ...state.ingredients, bread: action.payload },
        };
      } else {
        console.log('Это компонент');
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            components: [...state.ingredients.components, action.payload],
          },
        };
      }

    default:
      return console.log('Стандартное действие');
  }
};

/* 

  function showModal({ data }) {
    setModalOptions({
      ...modalOptions,
      visible: true,
      dataModal: {
        ...data,
      },
    });
  } */

/* 
  const AppInitialState = {
  data: {},
  constructor: {},
  ingredients: { bread: {}, components: {} },
  total: {},
  modalVisible: false,
  componentDetail: {},
}; */
