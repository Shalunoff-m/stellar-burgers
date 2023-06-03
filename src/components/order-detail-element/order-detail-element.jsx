import React, { useState, useEffect } from 'react';
import styles from './order-detail-element.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { getElement } from '../../utils/utils';

function OrderDetailElements({ order, data }) {
  const [element, setElement] = useState(null);
  const [element2, setElement2] = useState({});

  useEffect(() => {
    if (data && order) {
      const object = getElement({ data, id: order.ingredients[0] });
      setElement(object);

      const objectOfIngredients = order.ingredients.map((ingredient) => {
        return getElement({ data: data, id: ingredient });
      });

      calculateIngredients(objectOfIngredients);
      // Запись итогового значения
      setElement2(objectOfIngredients);
    }
  }, [order, data]);

  // console.log(element2);

  const calculateIngredients = (objectOfIngredients) => {
    // TODO Функция калькуляции данных
    /* Нужно написать функцию калькуляции данных.
      Сначала нужно подсчитать кол-во одинаковых ингридиентов и вернуть новый массив данных с удалением дубликатов и проставленным количеством  */

    console.log(objectOfIngredients);
  };

  return (
    // <p>some text</p>
    element && (
      <li className={styles.ingredienDetail}>
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
            {/* 2 <span className='text_type_main-small'>х</span>  */}
            {element.price}
          </p>
          <CurrencyIcon type='primary' />
        </div>
      </li>
    )
  );
  // <p>Text</p>
}

export { OrderDetailElements };
