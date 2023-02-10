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
        modalType: 'details',
        componentDetail: action.payload,
      };

    case 'showOrderDetail':
      return {
        ...state,
        modalType: 'order',
      };

    case 'closeModal':
      return {
        ...state,
        modalType: '',
      };

    case 'removeComponent':
      if (action.payload.type === 'bun') {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            bread: '',
          },
        };
      } else {
        // TODO начал писать здесь

        const currentElement = state.ingredients.components.findIndex(
          (element) => action.payload._id === element._id
        );

        if (currentElement === -1) return { ...state };

        const valueItem = state.ingredients.components[currentElement].__v;

        if (valueItem === 1) {
          // console.log('Значение равно 1');
          const newComponents = state.ingredients.components.filter((item) => {
            return action.payload._id !== item._id;
          });
          console.log(newComponents);
          return {
            ...state,
            ingredients: {
              ...state.ingredients,
              components: newComponents,
            },
          };
        } else {
          // console.log('Значение больше одного');

          const newComponents = state.ingredients.components.map(
            (item, index) => {
              if (index === currentElement) {
                return { ...item, __v: valueItem - 1 };
              }
              return item;
            }
          );
          // console.log(newComponents);

          return {
            ...state,
            ingredients: {
              ...state.ingredients,
              components: newComponents,
            },
          };

          // return {
          //   ...state,
          // };
          // break;
        }
      }

    // TODO Закончил здесь

    case 'addComponent':
      if (action.payload.type === 'bun') {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,

            bread: { ...action.payload, __v: 2 },
          },
        };
      }
      if (action.payload.type !== 'bun') {
        const currentElement = state.ingredients.components.findIndex(
          (element) => action.payload._id === element._id
        );
        if (currentElement !== -1) {
          const newComponents = state.ingredients.components.map(
            (component) => {
              if (component._id === action.payload._id)
                return { ...component, __v: component.__v + 1 };
              else return component;
            }
          );

          return {
            ...state,
            ingredients: {
              ...state.ingredients,
              components: newComponents,
            },
          };
        }
        if (currentElement === -1) {
          return {
            ...state,
            ingredients: {
              ...state.ingredients,
              components: [
                ...state.ingredients.components,
                { ...action.payload, __v: 1 },
              ],
            },
          };
        }
      }

    case 'setTotalPrice':
      return {
        ...state,
        total: action.payload,
      };

    case 'removeCount':
      const newState = state.data.map((item) => {
        // if (item.type === 'bun' && item._id === action.payload._id)
        //   return (item.__v -= 2);
        if (item._id === action.payload._id) {
          return { ...item, __v: item.__v-- };
        }
        // if (item.__v === 0) return item.__v;
        return item;
      });
      return {
        ...state,
        data: newState,
      };

    default:
      return console.log('Стандартное действие');
  }
};
