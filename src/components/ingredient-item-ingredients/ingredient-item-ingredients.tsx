import { useRef, FC } from 'react';
import styles from './ingredient-item-ingredients.module.css';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { REMOVE_INGREDIENT } from '../../store/actions/constructor';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { sortIngredient } from '../../store/actions/constructor';
import { useDispatch } from '../../hooks/use-custom-redux';
import { IConstructorIngredient } from '../../store/types';

interface IIngredientItemIngredientsProps {
  data: IConstructorIngredient;
}

const IngredientItemIngredients: FC<IIngredientItemIngredientsProps> = (
  props
) => {
  const ref = useRef<HTMLLIElement>(null);
  const { data } = props;
  const dispatch = useDispatch();

  // Реализация Dnd функционала
  const [{ isDragging }, dragRef] = useDrag({
    type: 'sortComponent',
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // BM Сортировка ингредиентов
  const [{ isHover }, dropRef] = useDrop({
    accept: 'sortComponent',
    drop(dragged: IConstructorIngredient) {
      dispatch(sortIngredient({ dragged, drop: data }));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const removeHandle = (): void => {
    dispatch({ type: REMOVE_INGREDIENT, payload: data });
  };

  dragRef(dropRef(ref));

  return (
    data && (
      <li
        className={`${styles.listItem} pl-4 pr-4 pt-2 pb-2 ${
          isHover && styles.isOver
        } ${isDragging && styles.isDrag}`}
        data-type='listItem'
        id={data._listId}
        ref={ref}
      >
        <DragIcon type='primary' />
        <ConstructorElement
          isLocked={false}
          text={data.name}
          price={data.price}
          thumbnail={data.image}
          handleClose={removeHandle}
        />
      </li>
    )
  );
};

export default IngredientItemIngredients;
