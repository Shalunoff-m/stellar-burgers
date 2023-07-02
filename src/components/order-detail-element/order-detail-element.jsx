import React, { useState, useEffect, useMemo } from 'react';
import styles from './order-detail-element.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { calculateIngredients, getElement } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

function OrderDetailElements({ order, data }) {
  const [elements, setElement] = useState(null);

  useEffect(() => {
    if (data && order) {
      const objectOfIngredients = order.ingredients.map((ingredient) => {
        return getElement({ data: data, id: ingredient });
      });
      setElement(calculateIngredients(objectOfIngredients));
    }
  }, [order, data]);

  return (
    // <p>some text</p>
    elements &&
    elements.map((element) => (
      <li key={uuidv4()} className={styles.ingredienDetail}>
        <div className={styles.imgContainer}>
          <img className={styles.imgIngredient} src={element.image} alt='' />
        </div>
        <p className='text text_type_main-default'>{element.name}</p>
        <div className={styles.countAndPrice}>
          <p
            className={classNames(
              styles.sum,
              'text',
              'text_type_digits-default'
            )}
          >
            {element.count}
            <span className='text_type_main-small'> х </span>
            {element.price}
          </p>
          <CurrencyIcon type='primary' />
        </div>
      </li>
    ))
  );
  // <p>Text</p>
}

export { OrderDetailElements };
