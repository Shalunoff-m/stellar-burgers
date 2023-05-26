import React from 'react';
import styles from './order-history.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { api } from '../../utils/data';

function OrderHistory() {
  return (
    <ul className={classNames(styles.orderBox)}>
      <li className={styles.orderItem}>
        <div className={styles.itemTopString}>
          <p className='text text_type_digits-default'>#034535</p>
          <p className='text text_type_main-default text_color_inactive'>
            Сегодня, 16:20 i-GMT+3
          </p>
        </div>
        <p className='text text_type_main-medium'>
          Death Star Starship Main бургер
        </p>
        <p className='text text_type_main-default'>Создан</p>
        <div className={styles.ingredientsTotal}>
          <ul className={styles.orderIngredients}>
            <li className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </li>
            <li className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[1].image} alt='' />
            </li>
            <li className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[2].image} alt='' />
            </li>
          </ul>
          <div className={styles.sumTotal}>
            <p
              className={classNames(
                styles.sum,
                'text',
                'text_type_digits-default'
              )}
            >
              480
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </li>
    </ul>
  );
}

export { OrderHistory };
