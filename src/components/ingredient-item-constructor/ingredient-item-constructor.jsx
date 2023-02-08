import React from 'react';
import styles from './ingredient-item-constructor.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function IngredientItemConstructor(props) {
  const { appDispatch } = useContext(AppContext);
  const [data, setData] = useState({});
  const { data: element } = props;

  // TODO Привести в порядок функцию
  const clickHandler = () => {
    appDispatch({ type: 'showModalDetail', payload: data });
  };

  const contextHandler = (e) => {
    e.preventDefault();
    // appDispatch({ type: 'addComponent', payload: data });
    appDispatch({ type: 'addCount', payload: data });
  };

  useEffect(() => {
    setData(element);
  }, [data, element]);

  return (
    <li
      onClick={clickHandler}
      onContextMenu={contextHandler}
      key={element._id}
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
