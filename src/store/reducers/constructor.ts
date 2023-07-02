import { presetDefault } from '../../utils/preset';
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_BUN,
  SORT_INGREDIENT,
  TConstructorActions,
} from '../actions/constructor';
import { IConstructorIngredient } from '../types/constructor';
import { IIngredient } from '../types/ingredients';

type TConstructorState = {
  bun: IIngredient;
  ingredients: Array<IConstructorIngredient>;
  loading: boolean;
  error: string;
  order: Array<string> | null;
};

const inintialState: TConstructorState = {
  bun: presetDefault,
  ingredients: [],
  loading: false,
  error: '',
  order: null,
};

export const constructorOrderReducer = (
  state = inintialState,
  action: TConstructorActions
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item: IConstructorIngredient) =>
            item._listId !== action.payload._listId
        ),
      };

    case SET_BUN:
      return {
        ...state,
        bun: action.payload,
      };

    case SORT_INGREDIENT:
      const {
        dragged,
        drop,
      }: { dragged: IConstructorIngredient; drop: IConstructorIngredient } =
        action.payload;
      let indexDrag: number | null = null;
      let indexDrop: number | null = null;
      state.ingredients.forEach((element, index) => {
        if (dragged._listId === element._listId) indexDrag = index;
        if (drop._listId === element._listId) indexDrop = index;
      });

      let clearIngredientList: Array<IConstructorIngredient> | [] =
        state.ingredients;
      if (indexDrag && indexDrop) {
        clearIngredientList.splice(indexDrag, 1);
        clearIngredientList.splice(indexDrop, 0, dragged);
      }

      return {
        ...state,
        ingredients: clearIngredientList,
      };

    default:
      return state;
  }
};
