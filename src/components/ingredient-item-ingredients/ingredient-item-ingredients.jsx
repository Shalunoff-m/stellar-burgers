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
    console.log(data);
    appDispatch({ type: 'removeCount', payload: data });
  };

  return (
    <li
      className={`${styles.listItem} pl-4 pr-4 pt-2 pb-2`}
      data-type='listItem'
    >
      <DragIcon type='primary' />
      <ConstructorElement
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
