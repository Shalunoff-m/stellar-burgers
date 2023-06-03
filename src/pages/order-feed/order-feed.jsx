import React, { useEffect, useMemo } from 'react';
import styles from './order-feed.module.css';
import classNames from 'classnames';
// import { api } from '../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromApi } from '../../store/actions/ingredients';
import { useLocation, useNavigate } from 'react-router-dom';
import { allDataIsReady, timeEncode } from '../../utils/utils';
import { ImageList } from '../../components/image-list/image-list';

function OrderFeed() {
  const dispatch = useDispatch();
  const { data, orders } = useSelector((state) => ({
    data: state.ingredients.data,
    orders: state.webSocket.orders,
  }));
  const navigate = useNavigate();
  const location = useLocation();
  let order = {};

  useEffect(() => {
    if (data) dispatch({ type: 'WS_CONNECTION_START', payload: 'allOrders' });
  }, [data]);

  order = orders[0];

  const clickHandler = () => {
    navigate('/feed/detail', {
      state: { background: location },
    });
  };

  return (
    <>
      {data && order && (
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
                <li className={styles.orderItem} onClick={clickHandler}>
                  <div className={styles.itemTopString}>
                    <p className='text text_type_digits-default'>
                      {order.number}
                    </p>
                    <p className='text text_type_main-default text_color_inactive'>
                      {timeEncode(order.createdAt)}
                    </p>
                  </div>
                  <p className='text text_type_main-medium'>{order.name}</p>
                  <div className={styles.ingredientsTotal}>
                    <ul className={styles.orderIngredients}>
                      <ImageList images={order.ingredients} />
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
      )}
    </>
  );
}

export { OrderFeed };
