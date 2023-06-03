import React, { useState, useEffect } from 'react';
import styles from './order-detail-element.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { getElement } from '../../utils/utils';

function OrderDetailElements({ order, data }) {
  const [element, setElement] = useState(null);
  // const [element2, setElement2] = useState({});
  // console.log(data);

  useEffect(() => {
    if (data && order) {
      // console.log(order);
      const object = getElement({ data, id: order.ingredients[0] });
      setElement(object);

      // setElement(getElement({ data, id: order.ingredients[0] }));
      //   const objectOfIngredients = order.ingredients.map((ingredient) => {
      //     return getElement({ data: data, id: ingredient });
      //   });
      //   setElement2(objectOfIngredients);
      //   console.log(objectOfIngredients);
    }
  }, [order, data, getElement]);

  // const convertedData = () => {
  //   const objectOfIngredients = order.ingredients.map((ingredient) => {
  //     return getElement({ data: data, id: ingredient });
  //   });
  //   // console.log(objectOfIngredients);
  // };

  // convertedData();

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
