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
      return {
        ...state,
        ingredients: {
          bread: action.payload.bread,
          components: action.payload.components,
        },
      };

    case 'setTotalPrice':
      return {
        ...state,
        total: action.payload,
      };

    case 'addCount':
      if (action.payload.type === 'bun') {
        const newState = state.data.map((item) => {
          if (item.type === 'bun' && item._id === action.payload._id)
            return { ...item, __v: 2 };
          // return item;
          if (item.type === 'bun' && item._id !== action.payload._id)
            return { ...item, __v: 0 };
          return item;
        });

        return { ...state, data: newState };
      }
      if (action.payload.type !== 'bun') {
        const newState = state.data.map((item) => {
          if (item._id === action.payload._id)
            return { ...item, __v: item.__v++ };
          return item;
        });

        return { ...state, data: newState };
      }

    default:
      return console.log('Стандартное действие');
  }
};
