import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styles from './ingredient-item-constructor.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';
import { v4 as uuidv4 } from 'uuid';
export default function IngredientItemConstructor(props) {
  const { appDispatch } = useContext(AppContext);
  const { data: element } = props;

  const clickHandler = () => {
    appDispatch({ type: 'showModalDetail', payload: element });
  };

  return (
    <li
      onClick={clickHandler}
      key={uuidv4()}
      className={`pb-10 ${styles.listItem}`}
    >
      <img src={element.image} alt={element.name} className='pt-0 pb-1' />
      <div className={styles.currency}>
        <p className='text text_type_digits-default'>{element.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`text text_type_main-default ${styles.description}`}>
        {element.name}
      </p>
      {element.__v > 0 ? (
        <div className={styles.count}>
          <p className='text text_type_digits-default'>{element.__v}</p>
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
