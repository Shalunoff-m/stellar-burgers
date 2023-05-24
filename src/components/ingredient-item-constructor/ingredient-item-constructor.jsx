import PropTypes from 'prop-types';
import styles from './ingredient-item-constructor.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_INGREDIENT, SET_BUN } from '../../store/actions/constructor';
import { showModalDetail } from '../../store/actions/ingredient-detail';
import { useDrag } from 'react-dnd';
import { useLocation, useNavigate } from 'react-router-dom';
export default function IngredientItemConstructor(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataCounter = useSelector((store) => store.constructor);
  const { data: element } = props;
  const location = useLocation();

  // Функциональность DragnDrop
  const [, dragRef] = useDrag({
    type: 'baseIngredient',
    item: element,
  });

  //  Функция подсчета кол-ва для счетчика
  const calculateCount = (data) => {
    const checkItem = (id) => {
      if (id === element._id) return true;
      return false;
    };

    const { bun, ingredients } = data;
    const bunCount = bun ? (checkItem(bun._id) ? 2 : 0) : 0;
    const ingredientCounter = ingredients
      ? ingredients.reduce((acc, item) => {
          if (checkItem(item._id)) acc++;
          return acc;
        }, 0)
      : 0;

    const summ = bunCount + ingredientCounter;
    return summ;
  };

  const counter = calculateCount(dataCounter);

  const clickHandler = () => {
    // TODO Вернуть обратно обработчик
    navigate(`/ingredients/${element._id}`, {
      state: { background: location },
    });

    // console.log(location);
    // dispatch(showModalDetail(element));
  };

  const contextHandler = (e) => {
    e.preventDefault();
    element.type !== 'bun'
      ? dispatch({ type: ADD_INGREDIENT, payload: element })
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
}

IngredientItemConstructor.propTypes = {
  data: PropTypes.shape({
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};
