import React from 'react';
import styles from './order-info.module.css';
import classNames from 'classnames';
import { api } from '../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderInfo() {
  const img = api[0].image;
  return (
    <div className={classNames(styles.box)}>
      <div className={styles.orderItem}>
        <p
          className={classNames(
            'text',
            'text_type_digits-default',
            'pb-10',
            styles.orderNumber
          )}
        >
          #034535
        </p>
        <p className='text text_type_main-medium pb-3'>
          Death Star Starship Main бургер
        </p>
        <p
          className={classNames(
            'text',
            'text_type_main-small',
            styles.status,
            'pb-15'
          )}
        >
          Выполнен
        </p>
        <p className='text text_type_main-medium pb-6'>Состав:</p>
        <ul className={classNames(styles.ingredientsList, 'pr-6')}>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
          <li className={styles.ingredienDetail}>
            <div className={styles.imgContainer}>
              <img className={styles.imgIngredient} src={api[0].image} alt='' />
            </div>
            <p className='text text_type_main-default'>
              Флюоресцентная булка R2-D3
            </p>
            <div className={styles.countAndPrice}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                2 <span className='text_type_main-small'>х</span> 480
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
        </ul>
        <div className={styles.descriptionTotal}>
          <p className='text text_type_main-default text_color_inactive'>
            Вчера, 13:50 i-GMT+3
          </p>
          <div className={styles.totalSum}>
            <p
              className={classNames(
                styles.sum,
                'text',
                'text_type_digits-default'
              )}
            >
              510
            </p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </div>
    </div>
  );
}

export { OrderInfo };
