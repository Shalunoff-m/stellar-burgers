import React, { useEffect, useMemo, useState } from 'react';
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
  onlyDone,
  onlyUndone,
  timeEncode,
} from '../../utils/utils';
import { ImageList } from '../../components/image-list/image-list';
import { OrderItem } from '../../components/order-item/order-item';
import { v4 as uuidv4 } from 'uuid';
import { Loader } from '../../components/loader/loader';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  allOrdersWebSocket,
} from '../../store/actions/ws-actions';

function OrderFeed() {
  const { loading: loader } = useSelector((store) => store.ingredients);

  // BM страница с лентой заказов WS
  const dispatch = useDispatch();
  const { data, orders, total, totalToday } = useSelector((state) => ({
    data: state.ingredients.data,
    orders: state.webSocket.allOrders,
    total: state.webSocket.total,
    totalToday: state.webSocket.totalToday,
  }));
  const navigate = useNavigate();
  const location = useLocation();
  const [doneOrders, setDoneOrders] = useState(null);
  const [undoneOrders, setUndoneOrders] = useState(null);

  useEffect(() => {
    if (data)
      dispatch({
        type: WS_CONNECTION_START,
        payload: allOrdersWebSocket,
      });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [data, dispatch]);

  useEffect(() => {
    if (orders) {
      setDoneOrders(onlyDone(orders));
      setUndoneOrders(onlyUndone(orders));
    }
    // console.log(doneOrders);
  }, [orders]);

  const clickHandler = () => {
    navigate('/feed/detail', {
      state: { background: location },
    });
  };

  return (
    <>
      {data && orders && doneOrders ? (
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
                {orders.map((order) => (
                  <OrderItem key={uuidv4()} order={order} />
                ))}
              </ul>
            </section>
            <section className={classNames(styles.orderSection, 'pt-25')}>
              {/* BM Секция с отчетами по заказам */}
              <div className={styles.statusTable}>
                <div>
                  <h3 className='text text_type_main-medium pb-6'>Готовы:</h3>
                  <div className={styles.ordersRibbon}>
                    {doneOrders.map((doneOrder, index) => {
                      if (index < 19) {
                        return (
                          <p
                            key={uuidv4()}
                            className={classNames(
                              'text',
                              'text_type_digits-default',
                              'pb-2',
                              styles.orderNumber
                            )}
                          >
                            {doneOrder.number}
                          </p>
                        );
                      } else if (index === 20) {
                        return (
                          <p
                            key={uuidv4()}
                            className={classNames(
                              'text',
                              'text_type_digits-default',
                              'pb-2',
                              styles.orderNumber
                            )}
                          >
                            ...
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>

                <div>
                  <h3 className='text text_type_main-medium pb-6'>В работе:</h3>
                  <div className={styles.ordersRibbon}>
                    {undoneOrders.map((doneOrder, index) => {
                      if (index < 19) {
                        return (
                          <p
                            key={uuidv4()}
                            className={classNames(
                              'text',
                              'text_type_digits-default',
                              'pb-2'
                            )}
                          >
                            {doneOrder.number}
                          </p>
                        );
                      } else if (index === 20) {
                        return (
                          <p
                            key={uuidv4()}
                            className={classNames(
                              'text',
                              'text_type_digits-default',
                              'pb-2',
                              styles.orderNumber
                            )}
                          >
                            ...
                          </p>
                        );
                      }
                    })}
                  </div>
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
                  {total}
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
                  {totalToday}
                </p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}

export { OrderFeed };
