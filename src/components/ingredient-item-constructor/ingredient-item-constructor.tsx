import styles from './ingredient-item-constructor.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import {
  // ADD_INGREDIENT,
  SET_BUN,
  addIngredient,
} from '../../store/actions/constructor';
// import { showModalDetail } from '../../store/actions/ingredient-detail';
import { useDrag } from 'react-dnd';
import { useLocation, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';
import { IConstructorIngredient, IIngredient } from '../../store/types';
import { TConstructorState } from '../../store/reducers/constructor';

interface IIngredientItemConstructorProps {
  data: IIngredient;
}

const IngredientItemConstructor: FC<IIngredientItemConstructorProps> = (
  props
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataCounter = useSelector((store) => store.constructorOrder);
  const { data: element } = props;
  const location = useLocation();

  // Функциональность DragnDrop
  const [, dragRef] = useDrag({
    type: 'baseIngredient',
    item: element,
  });

  //  Функция подсчета кол-ва для счетчика
  const calculateCount = (data: TConstructorState) => {
    const checkItem = (id: string) => {
      if (id === element._id) return true;
      return false;
    };

    const { bun, ingredients } = data;
    const bunCount = bun ? (checkItem(bun._id) ? 2 : 0) : 0;
    const ingredientCounter = ingredients
      ? ingredients.reduce((acc: number, item: IConstructorIngredient) => {
          if (checkItem(item._id)) acc++;
          return acc;
        }, 0)
      : 0;

    const summ = bunCount + ingredientCounter;
    return summ;
  };

  const counter = calculateCount(dataCounter);

  const clickHandler = () => {
    navigate(`/ingredients/${element._id}`, {
      state: { background: location },
    });
  };

  const contextHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    element.type !== 'bun'
      ? dispatch(addIngredient(element))
      : dispatch({ type: SET_BUN, payload: element });
  };

  return (
    <li
      onClick={clickHandler}
      onContextMenu={contextHandler}
      key={uuidv4()}
      className={`pb-10 ${styles.listItem}`}
      ref={dragRef}
    >
      <img src={element.image} alt={element.name} className='pt-0 pb-1' />
      <div className={styles.currency}>
        <p className='text text_type_digits-default'>{element.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`text text_type_main-default ${styles.description}`}>
        {element.name}
      </p>
      {counter > 0 ? (
        <div className={styles.count}>
          <p className='text text_type_digits-default'>{counter}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  );
};

export default IngredientItemConstructor;
