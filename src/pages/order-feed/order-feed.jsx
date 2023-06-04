import React, { useEffect, useMemo } from 'react';
import styles from './order-feed.module.css';
import classNames from 'classnames';
// import { api } from '../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromApi } from '../../store/actions/ingredients';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  allDataIsReady,
  calculateTotalCoast,
  timeEncode,
} from '../../utils/utils';
import { ImageList } from '../../components/image-list/image-list';
import { OrderItem } from '../../components/order-item/order-item';
import { v4 as uuidv4 } from 'uuid';

function OrderFeed() {
  // BM страница с лентой заказов WS
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

  order = orders[3];

  const clickHandler = () => {
    navigate('/feed/detail', {
      state: { background: location },
    });
  };

  return (
    <>
      {data && order && (
        <main className={classNames(styles.box)}>
          <div className={styles.orderLayout}>
            <section>
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
              <ul className={styles.orderBox}>
                {/* {orders.map((order) => (
                  <OrderItem key={uuidv4()} order={order} />
                ))} */}
                {/* TODO Вернуть прогрузку всех заказов */}
                <OrderItem key={uuidv4()} order={orders[1]} />
                <OrderItem key={uuidv4()} order={orders[2]} />
                <OrderItem key={uuidv4()} order={orders[3]} />
              </ul>
            </section>
            <section className={classNames(styles.orderSection, 'pt-25')}>
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
