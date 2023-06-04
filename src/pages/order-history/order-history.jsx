import React, { useEffect } from 'react';
import styles from './order-history.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
// import { api } from '../../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';
import { v4 as uuidv4 } from 'uuid';
import { OrderItemHistory } from '../../components/order-item-history/order-item-history';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  userOrdersWebSocket,
} from '../../store/actions/ws-actions';

function OrderHistory() {
  // BM Профиль - история заказов
  const { data, orders } = useSelector((state) => ({
    data: state.ingredients.data,
    orders: state.webSocket.userOrders,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (data)
      dispatch({
        type: WS_CONNECTION_START,
        payload: userOrdersWebSocket,
      });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [data]);

  const toDetailHandler = () => {
    // navigate('/orders/detail');
    navigate(`/orders/detail`, {
      state: { background: location },
    });
  };

  return (
    data &&
    orders && (
      <ul className={classNames(styles.orderBox)}>
        {orders.map((order) => (
          <OrderItemHistory key={uuidv4()} order={order} />
        ))}

        {/* <li className={styles.orderItem} onClick={toDetailHandler}>
          <div className={styles.itemTopString}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>
              Сегодня, 16:20 i-GMT+3
            </p>
          </div>
          <p className='text text_type_main-medium'>
            Death Star Starship Main бургер
          </p>
          <p
            className={classNames(
              'text',
              'text_type_main-default',
              styles.link
            )}
          >
            Создан
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
        </li> */}
      </ul>
    )
  );
}

export { OrderHistory };
