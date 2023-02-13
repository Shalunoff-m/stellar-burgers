import PropTypes from 'prop-types';
import React, { useRef, useContext } from 'react';
import styles from './ingredient-item-ingredients.module.css';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';

export default function IngredientItemIngredients(props) {
  const { data } = props;
  const { appState, appDispatch } = useContext(AppContext);

  const removeHandle = (e) => {
    appDispatch({ type: 'removeCount', payload: data });
  };

  return (
    <li
      className={`${styles.listItem} pl-4 pr-4 pt-2 pb-2`}
      data-type='listItem'
    >
      <DragIcon type='primary' />
      <ConstructorElement
        id={null}
        type={data.type}
        isLocked={false}
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={removeHandle}
      />
    </li>
  );
}

IngredientItemIngredients.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
  }),
};
