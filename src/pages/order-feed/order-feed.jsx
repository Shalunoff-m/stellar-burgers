import React from 'react';
import styles from './order-feed.module.css';
import classNames from 'classnames';
// import { api } from '../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function OrderFeed() {
  // const img = api[0].image;
  const { data } = useSelector((state) => state.ingredients);
  const img = data[0].image;

  return (
    <main className={classNames(styles.box)}>
      <h2
        className={classNames(
          styles.heading,
          'text',
          'text_type_main-large',
          'pt-10',
          'pb-5'
        )}
      >
        Лента заказов
      </h2>
      <div className={styles.orderLayout}>
        <section>
          <ul className={styles.orderBox}>
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
              <div className={styles.ingredientsTotal}>
                <ul className={styles.orderIngredients}>
                  <li className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </li>
                  <li className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[1].image}
                      alt=''
                    />
                  </li>
                  <li className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[2].image}
                      alt=''
                    />
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
        </section>
        <section className={styles.orderSection}>
          <div className={styles.statusTable}>
            <div>
              <h3 className='text text_type_main-medium pb-6'>Готовы:</h3>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034533
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034532
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2',
                  styles.orderNumber
                )}
              >
                034530
              </p>
            </div>

            <div>
              <h3 className='text text_type_main-medium pb-6'>В работе:</h3>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034533
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034532
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-2'
                )}
              >
                034530
              </p>
            </div>
          </div>
          <div>
            <h3 className='text text_type_main-medium'>
              Выполнено за все время:
            </h3>
            <p
              className={classNames(
                'text',
                'text_type_digits-large',
                styles.ordersDigits
              )}
            >
              28 752
            </p>
          </div>
          <div>
            <h3 className='text text_type_main-medium'>
              Выполнено за сегодня:
            </h3>
            <p
              className={classNames(
                'text',
                'text_type_digits-large',
                styles.ordersDigits
              )}
            >
              138
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export { OrderFeed };
